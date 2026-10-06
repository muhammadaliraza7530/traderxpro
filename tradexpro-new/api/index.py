# Vercel entry point for the Flask application.
from io import BytesIO
from pathlib import Path
import sys


PROJECT_ROOT = Path(__file__).resolve().parents[1]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from app import app


def _build_wsgi_environ(request):
    """Convert a Vercel request into the WSGI environment used by Flask."""
    body = request.body or b""
    headers = request.headers or {}
    url = request.url or "https://example.com"
    parsed_url = url.split("?", 1)
    path = getattr(request, "path", parsed_url[0].split("://", 1)[-1].split("/", 1)[-1])
    query_string = getattr(request, "query", "")
    if "?" in url and query_string == "":
        query_string = parsed_url[1]

    environ = {
        "REQUEST_METHOD": request.method,
        "PATH_INFO": "/" + path.lstrip("/"),
        "QUERY_STRING": query_string,
        "SERVER_NAME": request.host.split(":", 1)[0] if getattr(request, "host", None) else "localhost",
        "SERVER_PORT": request.host.split(":", 1)[1] if getattr(request, "host", None) and ":" in request.host else "443",
        "SERVER_PROTOCOL": "HTTP/1.1",
        "wsgi.version": (1, 0),
        "wsgi.url_scheme": "https" if url.startswith("https://") else "http",
        "wsgi.input": BytesIO(body),
        "wsgi.errors": sys.stderr,
        "wsgi.multithread": True,
        "wsgi.multiprocess": False,
        "wsgi.run_once": False,
    }

    for name, value in headers.items():
        wsgi_name = name.replace("-", "_").upper()
        environ[f"HTTP_{wsgi_name}"] = value

    if body and "CONTENT_LENGTH" not in environ:
        environ["CONTENT_LENGTH"] = str(len(body))
    if "CONTENT_TYPE" not in environ:
        environ["CONTENT_TYPE"] = "application/octet-stream"

    return environ


def handler(request):
    """Run the Flask application for a Vercel Python Function request."""
    response_headers = []

    def start_response(status, headers):
        response_headers[:] = [(name, value) for name, value in headers]
        response_headers.insert(0, ("Status", status))

    response_body = b"".join(app(_build_wsgi_environ(request), start_response))
    status_code = int(response_headers[0][1].split(" ", 1)[0])
    headers = {name: value for name, value in response_headers[1:]}

    return {
        "statusCode": status_code,
        "headers": headers,
        "body": response_body.decode("utf-8"),
    }
