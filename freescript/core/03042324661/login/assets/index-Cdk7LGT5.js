import {
    J as i,
    d as n,
    l as r,
    aI as d,
    aE as l,
    X as o
} from "./index-B4hRM2Oj.js";
const [c, s] = i("divider"), v = {
    dashed: Boolean,
    hairline: d,
    vertical: Boolean,
    contentPosition: l("center")
};
var h = n({
    name: c,
    props: v,
    setup(e, {
        slots: a
    }) {
        return () => {
            var t;
            return r("div", {
                role: "separator",
                class: s({
                    dashed: e.dashed,
                    hairline: e.hairline,
                    vertical: e.vertical,
                    [`content-${e.contentPosition}`]: !!a.default && !e.vertical
                })
            }, [!e.vertical && ((t = a.default) == null ? void 0 : t.call(a))])
        }
    }
});
const m = o(h);
export {
    m as D
};