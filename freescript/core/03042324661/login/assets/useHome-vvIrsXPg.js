import {
    u as C,
    j as Q,
    h as n,
    aX as U,
    B as l,
    Q as f,
    aY as y,
    aH as z,
    aZ as B
} from "./index-B4hRM2Oj.js";
import {
    u as F
} from "./coinbase-Ci3-5lfq.js";

function R() {
    const {
        registerInfo: g
    } = C(), s = Q(), k = n(() => s.slide), h = n(() => s.scrollNotice), T = n(() => h.value.length === 0 ? "" : h.value.map((e, t) => `${t+1}.${U(e.c)}`).join(" ")), L = n(() => s.helpList), i = n(() => s.indexData), r = n(() => s.userQuanData), x = n(() => s.levelList.filter(e => e.is_show)), w = n(() => s.productList), _ = l(g.value.r_a_s), A = n(() => s.is_show_fake_data), u = l(null), c = l(null), p = () => {
        u.value && (clearTimeout(u.value), u.value = null)
    }, D = n(() => {
        var t, a, o;
        if (!c.value) return {
            hour: "00",
            minute: "00",
            second: "00"
        };
        const e = c.value.split(":");
        return {
            hour: ((t = e[0]) == null ? void 0 : t.length) === 1 ? `0${e[0]}` : e[0],
            minute: ((a = e[1]) == null ? void 0 : a.length) === 1 ? `0${e[1]}` : e[1],
            second: ((o = e[2]) == null ? void 0 : o.length) === 1 ? `0${e[2]}` : e[2]
        }
    }), M = () => {
        if (!r.value.task_reset_time) {
            p(), c.value = null;
            return
        }
        c.value = B(r.value.task_reset_time), p(), u.value = setTimeout(() => {
            M()
        }, 1e3)
    };
    f(() => r.value, () => {
        r.value.task_reset_time && M()
    });
    const {
        coinData: H,
        tradeActive: N
    } = F(), d = l(200), {
        width: v
    } = y();
    f(() => v.value, () => {
        v.value >= 720 ? d.value = 397 : d.value = v.value / 1.7
    }, {
        immediate: !0
    });
    const $ = l([]);

    function b() {
        const e = ["live.com", "gmx.com", "nate.com", "gmail.com", "icloud.com", "yahoo.com", "hotmail.com", "outlook.com"],
            t = "abcdefghijklmnopqrstuvwxyz";
        if (_.value === "0") return Math.random() > .5 ? `${t[Math.floor(Math.random()*26)]}***${Math.random().toString(36).slice(2,7)}@${e[Math.floor(Math.random()*e.length)]}` : `+${Math.random().toString().slice(2,4)}****${Math.random().toString().slice(-2)}`;
        if (_.value === "1") return `${t[Math.floor(Math.random()*26)]}***${Math.random().toString(36).slice(2,7)}@${e[Math.floor(Math.random()*e.length)]}`;
        if (g.value.username_register_status === "true") {
            const a = String.fromCharCode(65 + Math.floor(Math.random() * 26)),
                o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                m = Array.from({
                    length: 9
                }, () => o[Math.floor(Math.random() * o.length)]).join(""),
                S = a + m;
            return `${S.slice(0,3)}****${S.slice(7)}`
        } else return `${Math.random().toString().slice(2,4)}****${Math.random().toString().slice(-2)}`
    }

    function j(e, t) {
        const a = Math.random() * (t - e) + e,
            o = b();
        return {
            income: a.toFixed(2),
            phone: o
        }
    }
    return f(() => i.value, () => {
        var e, t, a, o;
        if ((e = i.value) != null && e.i_u_i_d && ((t = i.value) != null && t.i_u_i_u))
            for (let m = 0; m < 100; m++) $.value.push(j(Number((a = i.value) == null ? void 0 : a.i_u_i_d), Number((o = i.value) == null ? void 0 : o.i_u_i_u)))
    }), z(() => {
        s.getHome()
    }), {
        slide: k,
        scrollNotice: h,
        scrollNoticeHtml: T,
        tradeActive: N,
        coinData: H,
        helpList: L,
        indexData: i,
        videoHeight: d,
        fakeData: $,
        loadingTimeObject: D,
        userQuanData: r,
        levelList: x,
        productList: w,
        is_show_fake_data: A
    }
}
export {
    R as u
};