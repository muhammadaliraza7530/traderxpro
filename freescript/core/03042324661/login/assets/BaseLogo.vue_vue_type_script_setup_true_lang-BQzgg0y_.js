import {
    d as n,
    u as l,
    o,
    c as a,
    a as r,
    e as t,
    t as c,
    b as i
} from "./index-B4hRM2Oj.js";
const m = {
        class: ":uno: base-logo flex items-center"
    },
    u = ["src"],
    _ = {
        key: 0,
        class: ":uno: site-name ml-8px"
    },
    g = n({
        __name: "BaseLogo",
        props: {
            needName: {
                type: Boolean,
                default: !1
            },
            url: {}
        },
        setup(d) {
            const {
                siteInfo: e
            } = l();
            return (s, p) => (o(), a("div", m, [r("img", {
                class: "site-img h-full w-full rd-50%",
                src: s.url || t(e).s_l,
                draggable: "false",
                alt: "logo"
            }, null, 8, u), s.needName ? (o(), a("div", _, c(t(e).s_n), 1)) : i("", !0)]))
        }
    });
export {
    g as _
};