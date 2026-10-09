import {
    d as c,
    o as s,
    q as $,
    y as _,
    a8 as m,
    H as f,
    c as r,
    r as p,
    a as o,
    t as i,
    F as a,
    l as b,
    n as x,
    b as u,
    a7 as y,
    x as k
} from "./index-B4hRM2Oj.js";
const g = {
        class: "ml-2 flex-1 truncate text-xs"
    },
    L = o("div", {
        class: "i-ic:outline-arrow-forward-ios h-16px w-16px"
    }, null, -1),
    O = c({
        __name: "Help",
        props: {
            helpList: {}
        },
        setup(l) {
            return (e, d) => {
                const t = f("RouterLink");
                return s(), $(m, null, {
                    default: _(() => [(s(!0), r(a, null, p(e.helpList, n => (s(), $(t, {
                        key: n.id,
                        to: `/helpDetail?id=${n.id}`,
                        class: "py-4 flex cursor-pointer items-center justify-between"
                    }, {
                        default: _(() => [o("p", g, i(n.t), 1), L]),
                        _: 2
                    }, 1032, ["to"]))), 128))]),
                    _: 1
                })
            }
        }
    }),
    C = ["onClick"],
    v = {
        class: "ml-2 flex-1 truncate text-xs"
    },
    P = c({
        __name: "Help",
        props: {
            helpList: {
                type: Array,
                default: () => []
            },
            type: {
                type: Boolean,
                default: !0
            }
        },
        setup(l) {
            return (e, d) => {
                const t = y,
                    n = m;
                return l.helpList.length ? (s(), r(a, {
                    key: 0
                }, [b(t, {
                    class: x({
                        "mx-$mg": l.type
                    })
                }, {
                    default: _(() => [k(i(e.$t("Help")), 1)]),
                    _: 1
                }, 8, ["class"]), b(n, {
                    class: x(["mt-$mt", {
                        "mx-$mg": l.type
                    }])
                }, {
                    default: _(() => [(s(!0), r(a, null, p(l.helpList, h => (s(), r("div", {
                        key: h.id,
                        class: "flex items-center justify-between py-12px border-b border-solid border-$border-color last:border-b-0",
                        onClick: K => e.$router.push(`/helpDetail?id=${h.id}`)
                    }, [o("p", v, i(h.t), 1)], 8, C))), 128))]),
                    _: 1
                }, 8, ["class"])], 64)) : u("", !0)
            }
        }
    }),
    w = {
        key: 0,
        class: "m-$mg"
    },
    H = ["onClick"],
    D = {
        class: "ml-2 flex-1 truncate text-xs"
    },
    Q = c({
        __name: "Help",
        props: {
            helpList: {}
        },
        setup(l) {
            return (e, d) => e.helpList.length ? (s(), r("div", w, [(s(!0), r(a, null, p(e.helpList, t => (s(), r("div", {
                key: t.id,
                class: "flex items-center justify-between py-12px border-b border-solid border-$border-color last:border-b-0",
                onClick: n => e.$router.push(`/helpDetail?id=${t.id}`)
            }, [o("p", D, i(t.t), 1)], 8, H))), 128))])) : u("", !0)
        }
    }),
    j = ["onClick"],
    B = {
        class: "flex-1 truncate"
    },
    N = o("div", {
        class: "i-mdi:arrow-right-drop-circle w-20px h-20px ml-10px"
    }, null, -1),
    U = c({
        __name: "Help",
        props: {
            helpList: {}
        },
        setup(l) {
            return (e, d) => {
                const t = m;
                return e.helpList.length ? (s(), $(t, {
                    key: 0,
                    class: "mt-10px"
                }, {
                    default: _(() => [(s(!0), r(a, null, p(e.helpList, n => (s(), r("div", {
                        key: n.id,
                        class: "flex items-center justify-between px-12px py-14px bg-$bg-second rd-$card-radius mb-10px",
                        onClick: h => e.$router.push(`/helpDetail?id=${n.id}`)
                    }, [o("p", B, i(n.t), 1), N], 8, j))), 128))]),
                    _: 1
                })) : u("", !0)
            }
        }
    }),
    V = {
        key: 0,
        class: "mt-10px"
    },
    F = ["onClick"],
    R = {
        class: "ml-2 flex-1 truncate text-xs"
    },
    W = c({
        __name: "Help",
        props: {
            helpList: {}
        },
        setup(l) {
            return (e, d) => e.helpList.length ? (s(), r("div", V, [(s(!0), r(a, null, p(e.helpList, t => (s(), r("div", {
                key: t.id,
                class: "flex items-center justify-between py-12px bg-$bg-weight border border-solid border-$border-color2 mb-10px rd-$card-radius",
                onClick: n => e.$router.push(`/helpDetail?id=${t.id}`)
            }, [o("p", R, i(t.t), 1)], 8, F))), 128))])) : u("", !0)
        }
    }),
    S = {
        key: 0,
        class: "mt-10px"
    },
    T = ["onClick"],
    q = {
        class: "ml-2 flex-1 truncate text-xs"
    },
    X = c({
        __name: "Help",
        props: {
            helpList: {}
        },
        setup(l) {
            return (e, d) => e.helpList.length ? (s(), r("div", S, [(s(!0), r(a, null, p(e.helpList, t => (s(), r("div", {
                key: t.id,
                class: "flex items-center justify-between py-12px bg-$bg-weight border border-solid border-$border-color2 mb-10px rd-$card-radius",
                onClick: n => e.$router.push(`/helpDetail?id=${t.id}`)
            }, [o("p", q, i(t.t), 1)], 8, T))), 128))])) : u("", !0)
        }
    }),
    z = {
        key: 0,
        class: "mt-10px"
    },
    A = ["onClick"],
    E = {
        class: "ml-2 flex-1 truncate text-xs"
    },
    Y = c({
        __name: "Help",
        props: {
            helpList: {}
        },
        setup(l) {
            return (e, d) => e.helpList.length ? (s(), r("div", z, [(s(!0), r(a, null, p(e.helpList, t => (s(), r("div", {
                key: t.id,
                class: "flex items-center justify-between py-12px bg-$bg-card2 mb-10px rd-$radius",
                onClick: n => e.$router.push(`/helpDetail?id=${t.id}`)
            }, [o("p", E, i(t.t), 1)], 8, A))), 128))])) : u("", !0)
        }
    }),
    G = {
        key: 0,
        class: "bg-$bg-card p-$mg rd-$card-radius"
    },
    I = ["onClick"],
    J = {
        class: "ml-2 flex-1 truncate text-xs"
    },
    Z = c({
        __name: "Help",
        props: {
            helpList: {}
        },
        setup(l) {
            return (e, d) => e.helpList.length ? (s(), r("div", G, [(s(!0), r(a, null, p(e.helpList, t => (s(), r("div", {
                key: t.id,
                class: "flex items-center justify-between py-12px bg-$bg-second mb-10px rd-$card-radius",
                onClick: n => e.$router.push(`/helpDetail?id=${t.id}`)
            }, [o("p", J, i(t.t), 1)], 8, I))), 128))])) : u("", !0)
        }
    });
export {
    O as _, P as a, Q as b, U as c, W as d, X as e, Y as f, Z as g
};