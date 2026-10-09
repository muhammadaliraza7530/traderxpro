import {
    ar as ue,
    V as Q,
    as as fe,
    at as De,
    au as We,
    av as Me,
    a0 as Ze,
    N as ve,
    J as Z,
    d as p,
    B as R,
    aw as he,
    L as be,
    h as I,
    ax as me,
    ay as ge,
    az as pe,
    Q as $,
    O as ye,
    aA as Y,
    $ as P,
    T as O,
    aB as we,
    aC as Fe,
    l as m,
    aD as z,
    aE as xe,
    R as L,
    X as ee,
    aF as G,
    C as Ve,
    P as te,
    aG as je,
    aH as Ue,
    M as Ke,
    aI as W,
    aJ as le,
    W as q,
    aK as Xe,
    aL as Ge,
    aM as re,
    aN as Je,
    aO as Qe,
    aP as Ye,
    aQ as qe,
    aR as et,
    aS as tt,
    aT as nt,
    aU as at,
    U as it,
    Z as ot,
    E as lt,
    G as rt,
    ae as st,
    aV as se
} from "./index-B4hRM2Oj.js";
import {
    u as Se
} from "./use-id-BApa_5RS.js";
import {
    S as ct,
    a as dt
} from "./index-DdjRmd6b.js";
import {
    u as ut
} from "./index-D-RfQlC0.js";
/**
 * @vue/shared v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const Te = Array.isArray,
    M = e => typeof e == "string",
    Ce = e => e !== null && typeof e == "object",
    ft = e => {
        const a = Object.create(null);
        return n => a[n] || (a[n] = e(n))
    },
    vt = /\B([A-Z])/g,
    ht = ft(e => e.replace(vt, "-$1").toLowerCase());

function Re(e) {
    if (Te(e)) {
        const a = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n],
                l = M(o) ? yt(o) : Re(o);
            if (l)
                for (const t in l) a[t] = l[t]
        }
        return a
    } else if (M(e) || Ce(e)) return e
}
const bt = /;(?![^(]*\))/g,
    mt = /:([^]+)/,
    gt = /\/\*[^]*?\*\//g;

function yt(e) {
    const a = {};
    return e.replace(gt, "").split(bt).forEach(n => {
        if (n) {
            const o = n.split(mt);
            o.length > 1 && (a[o[0].trim()] = o[1].trim())
        }
    }), a
}

function wt(e) {
    let a = "";
    if (!e || M(e)) return a;
    for (const n in e) {
        const o = e[n];
        if (M(o) || typeof o == "number") {
            const l = n.startsWith("--") ? n : ht(n);
            a += `${l}:${o};`
        }
    }
    return a
}

function Ie(e) {
    let a = "";
    if (M(e)) a = e;
    else if (Te(e))
        for (let n = 0; n < e.length; n++) {
            const o = Ie(e[n]);
            o && (a += o + " ")
        } else if (Ce(e))
            for (const n in e) e[n] && (a += n + " ");
    return a.trim()
}

function xt(e, a, n) {
    let o, l = 0;
    const t = e.scrollLeft,
        s = n === 0 ? 1 : Math.round(n * 1e3 / 16);

    function c() {
        ue(o)
    }

    function v() {
        e.scrollLeft += (a - t) / s, ++l < s && (o = Q(v))
    }
    return v(), c
}

function St(e, a, n, o) {
    let l, t = fe(e);
    const s = t < a,
        c = n === 0 ? 1 : Math.round(n * 1e3 / 16),
        v = (a - t) / c;

    function g() {
        ue(l)
    }

    function w() {
        t += v, (s && t > a || !s && t < a) && (t = a), De(e, t), s && t < a || !s && t > a ? l = Q(w) : o && (l = Q(o))
    }
    return w(), g
}

function ke(e, a) {
    if (!We || !window.IntersectionObserver) return;
    const n = new IntersectionObserver(t => {
            a(t[0].intersectionRatio > 0)
        }, {
            root: document.body
        }),
        o = () => {
            e.value && n.observe(e.value)
        },
        l = () => {
            e.value && n.unobserve(e.value)
        };
    Me(l), Ze(l), ve(o)
}
const [Tt, Ct] = Z("sticky"), Rt = {
    zIndex: z,
    position: xe("top"),
    container: Object,
    offsetTop: L(0),
    offsetBottom: L(0)
};
var It = p({
    name: Tt,
    props: Rt,
    emits: ["scroll", "change"],
    setup(e, {
        emit: a,
        slots: n
    }) {
        const o = R(),
            l = he(o),
            t = be({
                fixed: !1,
                width: 0,
                height: 0,
                transform: 0
            }),
            s = R(!1),
            c = I(() => me(e.position === "top" ? e.offsetTop : e.offsetBottom)),
            v = I(() => {
                if (s.value) return;
                const {
                    fixed: f,
                    height: T,
                    width: u
                } = t;
                if (f) return {
                    width: `${u}px`,
                    height: `${T}px`
                }
            }),
            g = I(() => {
                if (!t.fixed || s.value) return;
                const f = ge(pe(e.zIndex), {
                    width: `${t.width}px`,
                    height: `${t.height}px`,
                    [e.position]: `${c.value}px`
                });
                return t.transform && (f.transform = `translate3d(0, ${t.transform}px, 0)`), f
            }),
            w = f => a("scroll", {
                scrollTop: f,
                isFixed: t.fixed
            }),
            k = () => {
                if (!o.value || Y(o)) return;
                const {
                    container: f,
                    position: T
                } = e, u = O(o), S = fe(window);
                if (t.width = u.width, t.height = u.height, T === "top")
                    if (f) {
                        const d = O(f),
                            B = d.bottom - c.value - t.height;
                        t.fixed = c.value > u.top && d.bottom > 0, t.transform = B < 0 ? B : 0
                    } else t.fixed = c.value > u.top;
                else {
                    const {
                        clientHeight: d
                    } = document.documentElement;
                    if (f) {
                        const B = O(f),
                            b = d - B.top - c.value - t.height;
                        t.fixed = d - c.value < u.bottom && d > B.top, t.transform = b < 0 ? -b : 0
                    } else t.fixed = d - c.value < u.bottom
                }
                w(S)
            };
        return $(() => t.fixed, f => a("change", f)), ye("scroll", k, {
            target: l,
            passive: !0
        }), ke(o, k), $([we, Fe], () => {
            !o.value || Y(o) || !t.fixed || (s.value = !0, P(() => {
                const f = O(o);
                t.width = f.width, t.height = f.height, s.value = !1
            }))
        }), () => {
            var f;
            return m("div", {
                ref: o,
                style: v.value
            }, [m("div", {
                class: Ct({
                    fixed: t.fixed && !s.value
                }),
                style: g.value
            }, [(f = n.default) == null ? void 0 : f.call(n)])])
        }
    }
});
const kt = ee(It),
    [Bt, ce] = Z("tabs");
var $t = p({
    name: Bt,
    props: {
        count: G(Number),
        inited: Boolean,
        animated: Boolean,
        duration: G(z),
        swipeable: Boolean,
        lazyRender: Boolean,
        currentIndex: G(Number)
    },
    emits: ["change"],
    setup(e, {
        emit: a,
        slots: n
    }) {
        const o = R(),
            l = c => a("change", c),
            t = () => {
                var c;
                const v = (c = n.default) == null ? void 0 : c.call(n);
                return e.animated || e.swipeable ? m(ct, {
                    ref: o,
                    loop: !1,
                    class: ce("track"),
                    duration: +e.duration * 1e3,
                    touchable: e.swipeable,
                    lazyRender: e.lazyRender,
                    showIndicators: !1,
                    onChange: l
                }, {
                    default: () => [v]
                }) : v
            },
            s = c => {
                const v = o.value;
                v && v.state.active !== c && v.swipeTo(c, {
                    immediate: !e.inited
                })
            };
        return $(() => e.currentIndex, s), Ve(() => {
            s(e.currentIndex)
        }), te({
            swipeRef: o
        }), () => m("div", {
            class: ce("content", {
                animated: e.animated || e.swipeable
            })
        }, [t()])
    }
});
const [Be, X] = Z("tabs"), At = {
    type: xe("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: L(0),
    duration: L(.3),
    animated: Boolean,
    ellipsis: W,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: L(0),
    background: String,
    lazyRender: W,
    showHeader: W,
    lineWidth: z,
    lineHeight: z,
    beforeChange: Function,
    swipeThreshold: L(5),
    titleActiveColor: String,
    titleInactiveColor: String
}, $e = Symbol(Be);
var _t = p({
    name: Be,
    props: At,
    emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
    setup(e, {
        emit: a,
        slots: n
    }) {
        let o, l, t, s, c;
        const v = R(),
            g = R(),
            w = R(),
            k = R(),
            f = Se(),
            T = he(v),
            [u, S] = ut(),
            {
                children: d,
                linkChildren: B
            } = je($e),
            b = be({
                inited: !1,
                position: "",
                lineStyle: {},
                currentIndex: -1
            }),
            N = I(() => d.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
            F = I(() => ({
                borderColor: e.color,
                background: e.background
            })),
            H = (i, r) => {
                var h;
                return (h = i.name) != null ? h : r
            },
            V = I(() => {
                const i = d[b.currentIndex];
                if (i) return H(i, b.currentIndex)
            }),
            E = I(() => me(e.offsetTop)),
            ne = I(() => e.sticky ? E.value + o : 0),
            D = i => {
                const r = g.value,
                    h = u.value;
                if (!N.value || !r || !h || !h[b.currentIndex]) return;
                const x = h[b.currentIndex].$el,
                    y = x.offsetLeft - (r.offsetWidth - x.offsetWidth) / 2;
                s && s(), s = xt(r, y, i ? 0 : +e.duration)
            },
            A = () => {
                const i = b.inited;
                P(() => {
                    const r = u.value;
                    if (!r || !r[b.currentIndex] || e.type !== "line" || Y(v.value)) return;
                    const h = r[b.currentIndex].$el,
                        {
                            lineWidth: x,
                            lineHeight: y
                        } = e,
                        C = h.offsetLeft + h.offsetWidth / 2,
                        _ = {
                            width: le(x),
                            backgroundColor: e.color,
                            transform: `translateX(${C}px) translateX(-50%)`
                        };
                    if (i && (_.transitionDuration = `${e.duration}s`), q(y)) {
                        const K = le(y);
                        _.height = K, _.borderRadius = K
                    }
                    b.lineStyle = _
                })
            },
            Ae = i => {
                const r = i < b.currentIndex ? -1 : 1;
                for (; i >= 0 && i < d.length;) {
                    if (!d[i].disabled) return i;
                    i += r
                }
            },
            j = (i, r) => {
                const h = Ae(i);
                if (!q(h)) return;
                const x = d[h],
                    y = H(x, h),
                    C = b.currentIndex !== null;
                b.currentIndex !== h && (b.currentIndex = h, r || D(), A()), y !== e.active && (a("update:active", y), C && a("change", y, x.title)), t && !e.scrollspy && Ge(Math.ceil(re(v.value) - E.value))
            },
            U = (i, r) => {
                const h = d.find((y, C) => H(y, C) === i),
                    x = h ? d.indexOf(h) : 0;
                j(x, r)
            },
            ae = (i = !1) => {
                if (e.scrollspy) {
                    const r = d[b.currentIndex].$el;
                    if (r && T.value) {
                        const h = re(r, T.value) - ne.value;
                        l = !0, c && c(), c = St(T.value, h, i ? 0 : +e.duration, () => {
                            l = !1
                        })
                    }
                }
            },
            _e = (i, r, h) => {
                const {
                    title: x,
                    disabled: y
                } = d[r], C = H(d[r], r);
                y || (Je(e.beforeChange, {
                    args: [C],
                    done: () => {
                        j(r), ae()
                    }
                }), Qe(i)), a("clickTab", {
                    name: C,
                    title: x,
                    event: h,
                    disabled: y
                })
            },
            Pe = i => {
                t = i.isFixed, a("scroll", i)
            },
            ze = i => {
                P(() => {
                    U(i), ae(!0)
                })
            },
            Ee = () => {
                for (let i = 0; i < d.length; i++) {
                    const {
                        top: r
                    } = O(d[i].$el);
                    if (r > ne.value) return i === 0 ? 0 : i - 1
                }
                return d.length - 1
            },
            Oe = () => {
                if (e.scrollspy && !l) {
                    const i = Ee();
                    j(i)
                }
            },
            Le = () => {
                if (e.type === "line" && d.length) return m("div", {
                    class: X("line"),
                    style: b.lineStyle
                }, null)
            },
            ie = () => {
                var i, r, h;
                const {
                    type: x,
                    border: y,
                    sticky: C
                } = e, _ = [m("div", {
                    ref: C ? void 0 : w,
                    class: [X("wrap"), {
                        [Xe]: x === "line" && y
                    }]
                }, [m("div", {
                    ref: g,
                    role: "tablist",
                    class: X("nav", [x, {
                        shrink: e.shrink,
                        complete: N.value
                    }]),
                    style: F.value,
                    "aria-orientation": "horizontal"
                }, [(i = n["nav-left"]) == null ? void 0 : i.call(n), d.map(K => K.renderTitle(_e)), Le(), (r = n["nav-right"]) == null ? void 0 : r.call(n)])]), (h = n["nav-bottom"]) == null ? void 0 : h.call(n)];
                return C ? m("div", {
                    ref: w
                }, [_]) : _
            },
            oe = () => {
                A(), P(() => {
                    var i, r;
                    D(!0), (r = (i = k.value) == null ? void 0 : i.swipeRef.value) == null || r.resize()
                })
            };
        $(() => [e.color, e.duration, e.lineWidth, e.lineHeight], A), $(we, oe), $(() => e.active, i => {
            i !== V.value && U(i)
        }), $(() => d.length, () => {
            b.inited && (U(e.active), A(), P(() => {
                D(!0)
            }))
        });
        const Ne = () => {
                U(e.active, !0), P(() => {
                    b.inited = !0, w.value && (o = O(w.value).height), D(!0)
                })
            },
            He = (i, r) => a("rendered", i, r);
        return te({
            resize: oe,
            scrollTo: ze
        }), Ue(A), Ke(A), ve(Ne), ke(v, A), ye("scroll", Oe, {
            target: T,
            passive: !0
        }), B({
            id: f,
            props: e,
            setLine: A,
            scrollable: N,
            onRendered: He,
            currentName: V,
            setTitleRefs: S,
            scrollIntoView: D
        }), () => m("div", {
            ref: v,
            class: X([e.type])
        }, [e.showHeader ? e.sticky ? m(kt, {
            container: v.value,
            offsetTop: E.value,
            onScroll: Pe
        }, {
            default: () => [ie()]
        }) : ie() : null, m($t, {
            ref: k,
            count: d.length,
            inited: b.inited,
            animated: e.animated,
            duration: e.duration,
            swipeable: e.swipeable,
            lazyRender: e.lazyRender,
            currentIndex: b.currentIndex,
            onChange: j
        }, {
            default: () => {
                var i;
                return [(i = n.default) == null ? void 0 : i.call(n)]
            }
        })])
    }
});
const Pt = Symbol(),
    [zt, de] = Z("tab"),
    Et = p({
        name: zt,
        props: {
            id: String,
            dot: Boolean,
            type: String,
            color: String,
            title: String,
            badge: z,
            shrink: Boolean,
            isActive: Boolean,
            disabled: Boolean,
            controls: String,
            scrollable: Boolean,
            activeColor: String,
            inactiveColor: String,
            showZeroBadge: W
        },
        setup(e, {
            slots: a
        }) {
            const n = I(() => {
                    const l = {},
                        {
                            type: t,
                            color: s,
                            disabled: c,
                            isActive: v,
                            activeColor: g,
                            inactiveColor: w
                        } = e;
                    s && t === "card" && (l.borderColor = s, c || (v ? l.backgroundColor = s : l.color = s));
                    const f = v ? g : w;
                    return f && (l.color = f), l
                }),
                o = () => {
                    const l = m("span", {
                        class: de("text", {
                            ellipsis: !e.scrollable
                        })
                    }, [a.title ? a.title() : e.title]);
                    return e.dot || q(e.badge) && e.badge !== "" ? m(Ye, {
                        dot: e.dot,
                        content: e.badge,
                        showZero: e.showZeroBadge
                    }, {
                        default: () => [l]
                    }) : l
                };
            return () => m("div", {
                id: e.id,
                role: "tab",
                class: [de([e.type, {
                    grow: e.scrollable && !e.shrink,
                    shrink: e.shrink,
                    active: e.isActive,
                    disabled: e.disabled
                }])],
                style: n.value,
                tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
                "aria-selected": e.isActive,
                "aria-disabled": e.disabled || void 0,
                "aria-controls": e.controls
            }, [o()])
        }
    }),
    [Ot, J] = Z("tab"),
    Lt = ge({}, qe, {
        dot: Boolean,
        name: z,
        badge: z,
        title: String,
        disabled: Boolean,
        titleClass: et,
        titleStyle: [String, Object],
        showZeroBadge: W
    });
var Nt = p({
    name: Ot,
    props: Lt,
    setup(e, {
        slots: a
    }) {
        const n = Se(),
            o = R(!1),
            l = tt(),
            {
                parent: t,
                index: s
            } = nt($e);
        if (!t) return;
        const c = () => {
                var u;
                return (u = e.name) != null ? u : s.value
            },
            v = () => {
                o.value = !0, t.props.lazyRender && P(() => {
                    t.onRendered(c(), e.title)
                })
            },
            g = I(() => {
                const u = c() === t.currentName.value;
                return u && !o.value && v(), u
            }),
            w = R(""),
            k = R("");
        at(() => {
            const {
                titleClass: u,
                titleStyle: S
            } = e;
            w.value = u ? Ie(u) : "", k.value = S && typeof S != "string" ? wt(Re(S)) : S
        });
        const f = u => m(Et, st({
                key: n,
                id: `${t.id}-${s.value}`,
                ref: t.setTitleRefs(s.value),
                style: k.value,
                class: w.value,
                isActive: g.value,
                controls: n,
                scrollable: t.scrollable.value,
                activeColor: t.props.titleActiveColor,
                inactiveColor: t.props.titleInactiveColor,
                onClick: S => u(l.proxy, s.value, S)
            }, se(t.props, ["type", "color", "shrink"]), se(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
                title: a.title
            }),
            T = R(!g.value);
        return $(g, u => {
            u ? T.value = !1 : it(() => {
                T.value = !0
            })
        }), $(() => e.title, () => {
            t.setLine(), t.scrollIntoView()
        }), ot(Pt, g), te({
            id: n,
            renderTitle: f
        }), () => {
            var u;
            const S = `${t.id}-${s.value}`,
                {
                    animated: d,
                    swipeable: B,
                    scrollspy: b,
                    lazyRender: N
                } = t.props;
            if (!a.default && !d) return;
            const F = b || g.value;
            if (d || B) return m(dt, {
                id: n,
                role: "tabpanel",
                class: J("panel-wrapper", {
                    inactive: T.value
                }),
                tabindex: g.value ? 0 : -1,
                "aria-hidden": !g.value,
                "aria-labelledby": S
            }, {
                default: () => {
                    var E;
                    return [m("div", {
                        class: J("panel")
                    }, [(E = a.default) == null ? void 0 : E.call(a)])]
                }
            });
            const V = o.value || b || !N ? (u = a.default) == null ? void 0 : u.call(a) : null;
            return lt(m("div", {
                id: n,
                role: "tabpanel",
                class: J("panel"),
                tabindex: F ? 0 : -1,
                "aria-labelledby": S
            }, [V]), [
                [rt, F]
            ])
        }
    }
});
const Zt = ee(Nt),
    pt = ee(_t);
export {
    pt as T, Zt as a
};