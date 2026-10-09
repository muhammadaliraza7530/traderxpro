import {
    u as l,
    j as r,
    h as a,
    Q as p,
    C as w,
    a3 as g,
    ag as L
} from "./index-B4hRM2Oj.js";

function f() {
    const {
        lang: o
    } = l(), e = r(), s = a(() => e.NewsList), n = a(() => s.value.slice(0, 3));
    async function t(i = !1) {
        if (s.value.length > 0 && !i) return;
        const c = g();
        try {
            const {
                data: u
            } = await L.getNewsList();
            e.NewsList = u
        } catch {} finally {
            c.close()
        }
    }
    return p(() => o.value, () => t(!0)), w(() => {
        t()
    }), {
        NewsList: s,
        NewsListShortList: n,
        getNews: t
    }
}
export {
    f as u
};