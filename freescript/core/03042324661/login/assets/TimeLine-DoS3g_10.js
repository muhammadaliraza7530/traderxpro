import {
    d as f,
    B as i,
    o,
    c as a,
    F as p,
    r as x,
    l as d,
    e as v,
    a as t,
    x as y,
    t as h,
    b,
    aa as k,
    p as $,
    f as g,
    _ as w
} from "./index-B4hRM2Oj.js";
import {
    _ as B
} from "./BaseVideoPlay.vue_vue_type_script_setup_true_lang-C7amlcA8.js";
const T = e => ($("data-v-66f646c4"), e = e(), g(), e),
    V = T(() => t("div", {
        class: "pt-5px"
    }, [t("div", {
        class: "h-20px w-20px flex items-center justify-center border-2 bg-$primary border-$primary rounded-full border-solid"
    }, [t("div", {
        class: "h-10px w-10px rounded-full bg-$primary"
    })])], -1)),
    C = {
        class: "ml-10px pb-30px"
    },
    I = {
        class: "mb-20px text-xl text-$primary flex items-center"
    },
    N = ["onClick"],
    S = f({
        __name: "TimeLine",
        props: {
            list: Object
        },
        setup(e) {
            const l = i(""),
                n = i();

            function _(c) {
                var r;
                l.value = c, (r = n.value) == null || r.open()
            }
            return (c, r) => {
                const u = k;
                return o(), a(p, null, [(o(!0), a(p, null, x(e.list, (s, m) => (o(), a("div", {
                    key: m,
                    class: "timeline-item flex justify-start"
                }, [V, t("div", C, [t("h1", I, [y(h(s.t) + " ", 1), s.v ? (o(), a("div", {
                    key: 0,
                    class: "i-ic:outline-play-circle-filled-white w-30px h-30px cursor-pointer ml-10px",
                    onClick: j => _(s.v)
                }, null, 8, N)) : b("", !0)]), d(u, {
                    detail: s.c
                }, null, 8, ["detail"])])]))), 128)), d(B, {
                    ref_key: "videoPlay",
                    ref: n,
                    url: v(l)
                }, null, 8, ["url"])], 64)
            }
        }
    }),
    P = w(S, [
        ["__scopeId", "data-v-66f646c4"]
    ]);
export {
    P as T
};