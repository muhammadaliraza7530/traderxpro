import {
    am as r,
    B as a
} from "./index-B4hRM2Oj.js";
const f = r("socket", () => {
    let t = "";
    const o = window.location.host;
    o.split(".").length === 2 ? t = `wss://api.${o}/uws` : o.split(".").length === 3 && (t = `wss://api.${o.split(".").slice(1).join(".")}/uws`);
    const s = a([]),
        n = a(null),
        e = a(null);

    function c() {
        e.value = new WebSocket(t), e.value.onopen = () => {
            console.log("WebSocket connection opened")
        }, e.value.onclose = l => {
            l.wasClean || (n.value && (clearInterval(n.value), n.value = null), e.value = null, c()), console.log("WebSocket connection closed", l)
        }, e.value.onmessage = l => {
            const u = JSON.parse(l.data);
            s.value.length && s.value.forEach(i => {
                i(u)
            })
        }, n.value = setInterval(() => {
            var l;
            (l = e.value) == null || l.send(JSON.stringify({
                type: "ping"
            }))
        }, 1e3 * 30)
    }
    return e.value === null && c(), {
        calcFuns: s
    }
});
export {
    f as u
};