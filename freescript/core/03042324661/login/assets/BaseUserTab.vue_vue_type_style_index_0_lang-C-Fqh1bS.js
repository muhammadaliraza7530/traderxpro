import {
    d,
    g as p,
    h as m,
    o as a,
    c as n,
    F as _,
    r as f,
    e as h,
    n as y,
    a as b,
    t as g
} from "./index-B4hRM2Oj.js";
const x = {
        class: ":uno: base-user-tab flex items-center justify-center"
    },
    C = ["onClick"],
    V = {
        class: "text-center"
    },
    j = d({
        __name: "BaseUserTab",
        props: {
            modelValue: {
                type: Number,
                default: 1
            },
            options: {
                type: Array,
                required: !0
            }
        },
        emits: ["update:modelValue"],
        setup(o, {
            emit: r
        }) {
            p(t => ({
                "84f29e72": h(l)
            }));
            const e = o,
                c = r,
                l = m(() => e.options.length);

            function i(t) {
                c("update:modelValue", t.category)
            }
            return (t, k) => (a(), n("div", x, [(a(!0), n(_, null, f(e.options, (s, u) => (a(), n("div", {
                key: u,
                class: y([":uno: tab-item h-full flex cursor-pointer items-center justify-center", {
                    active: e.modelValue === s.category
                }]),
                onClick: v => i(s)
            }, [b("div", V, g(s.label), 1)], 10, C))), 128))]))
        }
    });
export {
    j as _
};