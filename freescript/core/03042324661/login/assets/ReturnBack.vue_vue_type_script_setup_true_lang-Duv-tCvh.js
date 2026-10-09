import {
    _,
    o as e,
    c as n,
    v as i,
    d as l,
    u,
    i as p,
    e as m,
    l as d,
    w as f
} from "./index-B4hRM2Oj.js";
const k = {},
    h = {
        class: ":uno: container-login relative"
    };

function v(s, o) {
    return e(), n("div", h, [i(s.$slots, "default")])
}
const w = _(k, [
        ["render", v]
    ]),
    C = l({
        __name: "ReturnBack",
        setup(s) {
            const {
                pageStack: o,
                theme: a
            } = u(), c = p();

            function t() {
                o.value <= 1 ? c.push("/") : c.go(-1)
            }
            return (x, g) => {
                const r = f;
                return [7, 9].includes(m(a)) ? (e(), n("div", {
                    key: 0,
                    class: "base-small-btn",
                    onClick: t
                }, [d(r, {
                    name: "7-return",
                    class: "w-19px h-19px"
                })])) : (e(), n("div", {
                    key: 1,
                    class: "i-material-symbols-arrow-back-ios-new-rounded inline-block h-20px w-20px cursor-pointer",
                    onClick: t
                }))
            }
        }
    });
export {
    C as _, w as a
};