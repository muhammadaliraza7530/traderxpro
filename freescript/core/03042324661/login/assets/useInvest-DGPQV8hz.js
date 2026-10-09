import {
    ah as d,
    k as h,
    z as S,
    h as n,
    B as i,
    Q as B,
    j as C,
    C as g,
    i as T,
    u as w,
    a3 as m,
    bc as b,
    bn as f,
    an as y
} from "./index-B4hRM2Oj.js";

function $() {
    const {
        t: r
    } = d(), a = h(), v = S(), u = n(() => v.isLogin), e = n(() => [{
        label: r("Invest_Product"),
        category: 1
    }, {
        label: r("Invsst_Records"),
        category: 2
    }]), t = i(1);
    B(() => a.query, () => {
        a.query.tab && (t.value = Number(a.query.tab), history.replaceState(null, "", "/#/invest"))
    }, {
        immediate: !0
    });
    const o = C(),
        c = n(() => o.productList);
    return g(() => {
        u.value && c.value.length === 0 && o.getInvestList()
    }), {
        tabs: e,
        currentTab: t,
        productList: c
    }
}

function q() {
    const r = h(),
        a = T(),
        {
            currencySymbolName: v
        } = w(),
        {
            t: u
        } = d(),
        e = i(null),
        t = i(1),
        o = n(() => e.value ? `${e.value.p.p} * ${t.value} * ${Number(e.value.p.pr)}% * ${Number(e.value.p.cy)}` : ""),
        c = n(() => e.value ? (Number(e.value.p.p) * t.value * Number(e.value.p.pr) / 100 * Number(e.value.p.cy)).toFixed(2) : 0),
        N = n(() => e.value ? (Number(e.value.p.p) * t.value).toFixed(2) : 0);
    async function I(s) {
        try {
            const p = m(),
                {
                    data: x
                } = await b.getInvestDetail(s);
            e.value = x, p.close()
        } catch {}
    }
    const l = i(!1);
    async function _() {
        try {
            if (Number(e.value.p.p) * t.value > Number(e.value.m)) {
                const s = (Number(e.value.p.p) * t.value - Number(e.value.m)).toFixed(2);
                f({
                    message: `${u("Balance_Not_Enough")+s}${v.value}`,
                    confirmButtonText: u("Confirm"),
                    cancelButtonText: u("Cancel")
                }).then(() => {
                    a.push("/rechargeSelect")
                }).catch(() => {});
                return
            }
            if (t.value > Number(e.value.p.s)) {
                y({
                    message: u("Invest_Stock_Not_Enough"),
                    duration: 4e3
                });
                return
            }
            f({
                message: u("Confirm_Buy_Invest"),
                confirmButtonText: u("Confirm"),
                cancelButtonText: u("Cancel")
            }).then(async () => {
                l.value = !0;
                const s = m();
                await b.buyInvest({
                    pid: Number(r.query.id),
                    bn: t.value
                }), s.close(), l.value = !1, y({
                    message: u("Invest_Success")
                }), a.push("/invest?tab=2")
            }).catch(() => {})
        } catch {
            l.value = !1
        }
    }
    return g(() => {
        I(Number(r.query.id))
    }), {
        productData: e,
        buyNum: t,
        profit: c,
        profitCalcText: o,
        loading: l,
        buyInvest: _,
        BuyPrice: N
    }
}
export {
    q as a, $ as u
};