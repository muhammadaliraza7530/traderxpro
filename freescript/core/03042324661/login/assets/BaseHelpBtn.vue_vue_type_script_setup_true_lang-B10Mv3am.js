import {
    d as m,
    u as h,
    B as v,
    E as w,
    G as b,
    e as n,
    o as r,
    c as i,
    v as g,
    l as p,
    y as $,
    a as e,
    n as y,
    t as a,
    F as k,
    r as C,
    a9 as B,
    w as S,
    ap as D
} from "./index-B4hRM2Oj.js";
const E = {
        class: "text-center text-lg font-bold text-$btn-text"
    },
    F = {
        class: "my-10px text-center text-sm text-$text-gray"
    },
    N = {
        class: ":uno: mx-auto my-10px max-w-720px w-full flex-1 overflow-y-auto"
    },
    P = ["onClick"],
    T = ["src"],
    U = {
        class: "ml-10px text-$btn-text"
    },
    V = e("div", {
        class: "i-ic-round-keyboard-arrow-right ml-auto text-20px text-$btn-text"
    }, null, -1),
    H = m({
        __name: "BaseHelpBtn",
        setup(z) {
            const {
                cusUrls: c,
                theme: u
            } = h(), t = v(!1);

            function d(s) {
                t.value = !1, window.open(s.l, "_blank")
            }
            return (s, l) => {
                const x = S,
                    _ = D;
                return w((r(), i("div", {
                    class: "base-help-btn cursor-pointer",
                    onClick: l[1] || (l[1] = o => t.value = !n(t))
                }, [g(s.$slots, "default", {}, () => [p(x, {
                    name: "1-help",
                    class: ":uno: text-16px c-#fff"
                })]), p(_, {
                    show: n(t),
                    "onUpdate:show": l[0] || (l[0] = o => B(t) ? t.value = o : null),
                    teleport: "body",
                    class: "overflow-hidden",
                    round: "",
                    "close-on-click-overlay": !0,
                    position: "bottom",
                    style: {
                        height: "50%"
                    }
                }, {
                    default: $(() => [e("div", {
                        class: y([":uno: m-10px h-full flex flex-col overflow-hidden", `a-t-${n(u)}`])
                    }, [e("div", E, a(s.$t("Customer_Service")), 1), e("div", F, a(s.$t("Service_Tip1")) + a(s.$t("Service_Tip2")), 1), e("ul", N, [(r(!0), i(k, null, C(n(c), (o, f) => (r(), i("li", {
                        key: f,
                        class: ":uno: mb-8px flex cursor-pointer items-center rounded-12px bg-$bg-input p-8px",
                        onClick: A => d(o)
                    }, [e("img", {
                        class: ":uno: h-64px w-64px overflow-hidden rounded-12px",
                        src: o.i
                    }, null, 8, T), e("span", U, a(o.n), 1), V], 8, P))), 128))])], 2)]),
                    _: 1
                }, 8, ["show"])], 512)), [
                    [b, n(c).length]
                ])
            }
        }
    });
export {
    H as _
};