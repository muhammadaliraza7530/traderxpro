import {
    i as A,
    u as l,
    j as p,
    h as o,
    Q as h,
    C as v,
    a3 as f,
    ag as k
} from "./index-B4hRM2Oj.js";
import {
    t as T
} from "./task-DrEZOTH5.js";

function S() {
    const {
        lang: a
    } = l(), e = p(), r = o(() => e.shareTaskList), n = async () => {
        const c = f();
        try {
            const {
                data: i
            } = await T.getTaskList();
            i.map(t => (t.t = t.title, t.i = t.images, t.st = "", t.isShareActivity = !0, t)), e.shareTaskList = i
        } finally {
            c.close()
        }
    };
    return h(() => a.value, () => n()), v(() => {
        n()
    }), {
        shareTaskList: r
    }
}

function b() {
    const a = A(),
        {
            theme: e,
            lang: r
        } = l(),
        n = p(),
        {
            shareTaskList: c
        } = S(),
        i = o(() => n.activityList),
        t = o(() => i.value.concat(c.value)),
        L = o(() => t.value.slice(0, 2));
    async function u(s = !1) {
        if (i.value.length > 0 && !s) return;
        const g = f();
        try {
            const {
                data: d
            } = await k.getActivityList();
            n.activityList = d
        } catch {} finally {
            g.close()
        }
    }

    function y(s) {
        if (s.isShareActivity) {
            a.push(`/shareTask/${s.share_id}`);
            return
        }
        s.ty === 1 ? (console.log(e.value), s.l_p === "/invite" && ![1, 2, 4, 11, 15].includes(e.value) || s.l_p === "/inviteReward?tab=2" && e.value === 16 ? a.push("/service") : a.push(s.l_p)) : s.ty === 2 && a.push(`/activity/${s.id}`)
    }
    return h(() => r.value, () => u(!0)), v(() => {
        u()
    }), {
        activityList: i,
        activityShortList: L,
        getActivity: u,
        handleActivityType: y,
        totalList: t
    }
}
export {
    b as u
};