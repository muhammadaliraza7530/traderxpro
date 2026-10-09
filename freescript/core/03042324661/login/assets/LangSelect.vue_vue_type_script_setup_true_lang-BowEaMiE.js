import {
    d as g,
    u as h,
    h as _,
    B as x,
    j as F,
    o as u,
    c as p,
    a as s,
    v as $,
    e,
    l as d,
    y as w,
    n as f,
    E as V,
    a9 as v,
    bh as A,
    F as N,
    r as D,
    t as b,
    b as E,
    ap as P,
    q as U,
    bi as W,
    w as j
} from "./index-B4hRM2Oj.js";
const q = {
        class: ":uno: mx-auto h-40px max-w-720px w-full flex items-center border border-#86909C rounded-12px border-solid px-10px text-slate-500"
    },
    z = s("div", {
        class: "i-ph-magnifying-glass-bold"
    }, null, -1),
    K = {
        class: ":uno: grid grid-cols-3 mx-auto my-10px max-w-720px w-full gap-3 overflow-y-auto pb-3"
    },
    M = ["onClick"],
    R = {
        key: 0,
        class: "i-line-md-confirm-circle-twotone ml-auto text-20px"
    },
    T = g({
        __name: "BaseLangWrap",
        setup(y) {
            const {
                langList: r,
                lang: c,
                theme: m
            } = h(), i = _(() => {
                var l;
                return (l = r.value.find(o => o.file_name === c.value)) == null ? void 0 : l.label
            }), a = x(!1), t = x(""), k = _(() => r.value.filter(l => t.value ? l.label.toLocaleLowerCase().includes(t.value.toLocaleLowerCase()) : !0)), C = F();

            function L(l) {
                C.lang = l.file_name, a.value = !1
            }
            return (l, o) => {
                const B = P;
                return u(), p("div", null, [s("div", {
                    class: "base-lang-wrap",
                    onClick: o[0] || (o[0] = n => a.value = !e(a))
                }, [$(l.$slots, "default", {
                    label: e(i)
                })]), d(B, {
                    show: e(a),
                    "onUpdate:show": o[2] || (o[2] = n => v(a) ? a.value = n : null),
                    teleport: "body",
                    class: "overflow-hidden",
                    round: "",
                    "close-on-click-overlay": !0,
                    position: "bottom",
                    style: {
                        height: "50%"
                    }
                }, {
                    default: w(() => [s("div", {
                        class: f([":uno: m-10px h-full flex flex-col overflow-hidden", `a-t-${e(m)}`])
                    }, [s("div", q, [z, V(s("input", {
                        "onUpdate:modelValue": o[1] || (o[1] = n => v(t) ? t.value = n : null),
                        class: ":uno: ml-10px flex-1 text-slate-700"
                    }, null, 512), [
                        [A, e(t)]
                    ])]), s("ul", K, [(u(!0), p(N, null, D(e(k), (n, S) => (u(), p("li", {
                        key: S,
                        class: f([":uno: flex cursor-pointer items-center rounded-12px bg-#F7F8FA p-8px text-#86909c", {
                            "text-[var(--primary)]!": e(c) === n.file_name
                        }]),
                        onClick: G => L(n)
                    }, [s("span", null, b(n.label), 1), e(c) === n.file_name ? (u(), p("div", R)) : E("", !0)], 10, M))), 128))])], 2)]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    }),
    I = g({
        __name: "LangSelect",
        setup(y) {
            const {
                theme: r
            } = h();
            return (c, m) => {
                const i = j,
                    a = T;
                return u(), U(a, null, W({
                    _: 2
                }, [e(r) === 1 || e(r) === 4 ? {
                    name: "default",
                    fn: w(({
                        label: t
                    }) => [d(i, {
                        name: "1-lang",
                        class: ":uno: mr-3px text-16px"
                    }), s("span", null, b(t), 1), d(i, {
                        name: "1-arrow2",
                        class: ":uno: ml-4px text-10px"
                    })]),
                    key: "0"
                } : void 0]), 1024)
            }
        }
    });
export {
    I as _
};