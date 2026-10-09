import {
    d as i,
    B as p,
    o as a,
    q as c,
    y as d,
    e as s,
    a9 as m,
    ap as f,
    c as h,
    m as _,
    b as w
} from "./index-B4hRM2Oj.js";
const y = ["src"],
    B = i({
        __name: "BaseVideoPlay",
        props: {
            url: String,
            videoHeight: {
                type: Number,
                default: 300
            }
        },
        setup(o, {
            expose: r
        }) {
            const e = p(!1);

            function l() {
                e.value = !0
            }
            return r({
                open: l
            }), (x, t) => {
                const n = f;
                return a(), c(n, {
                    show: s(e),
                    "onUpdate:show": t[0] || (t[0] = u => m(e) ? e.value = u : null),
                    teleport: "body",
                    style: {
                        width: "95%",
                        maxWidth: "720px"
                    }
                }, {
                    default: d(() => [s(e) ? (a(), h("iframe", {
                        key: 0,
                        class: "w-full rounded-[var(--card-radius)]",
                        style: _(`height:${o.videoHeight}px`),
                        frameborder: "0",
                        allowfullscreen: "",
                        src: o.url
                    }, null, 12, y)) : w("", !0)]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
export {
    B as _
};