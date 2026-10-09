import {
    d as f,
    o as s,
    c,
    a as t,
    n as u,
    t as b,
    _ as y,
    b as o,
    u as I,
    e as n,
    F as z,
    p as N,
    f as M,
    g as Ne,
    h as B,
    i as Me,
    j as $e,
    k as O,
    r as R,
    l as g,
    m as L,
    q as A,
    s as k,
    v as et,
    w as q,
    x as T,
    y as S,
    z as D,
    A as C,
    B as tt,
    C as nt,
    D as at,
    E as V,
    G as W,
    H as st,
    I as Ee,
    K as it
} from "./index-B4hRM2Oj.js";
import {
    _ as Y
} from "./LangLabel.vue_vue_type_script_setup_true_lang-BIh3e-_2.js";
import {
    _ as G
} from "./BaseHelpBtn.vue_vue_type_script_setup_true_lang-B10Mv3am.js";
import {
    _ as F
} from "./BaseLogo.vue_vue_type_script_setup_true_lang-BQzgg0y_.js";
import {
    _ as ct
} from "./icon-download-BHzF4Fri.js";
import {
    _ as Fe
} from "./LangSelect.vue_vue_type_script_setup_true_lang-BowEaMiE.js";
const ot = {
        class: "tab-item-label"
    },
    rt = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-solar:home-smile-bold";
                    case "/quan":
                        return "i-solar:stars-minimalistic-bold-duotone";
                    case "/invest":
                        return "i-solar:dollar-minimalistic-bold";
                    case "/contract":
                        return "i-solar:spedometer-max-bold";
                    case "/service":
                        return "i-mingcute:invite-fill";
                    case "/mine":
                        return "i-solar:user-bold"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", ot, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    lt = y(rt, [
        ["__scopeId", "data-v-b80b8f19"]
    ]),
    ut = {
        class: "tab-item-label"
    },
    mt = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/quan":
                        return "i-mdi:state-machine";
                    case "/invest":
                        return "i-streamline:money-cash-dollar-coin-accounting-billing-payment-cash-coin-currency-money-finance";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ph:telegram-logo-bold";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", ut, b(e.item.label === "tabbar.quantify" ? i.$t("Web3") : i.$t(e.item.label)), 1)], 2))
        }
    }),
    dt = y(mt, [
        ["__scopeId", "data-v-8d5ae0ae"]
    ]),
    At = {
        class: "tab-item-label"
    },
    pt = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:other-houses";
                    case "/quan":
                        return "i-material-symbols:broadcast-on-home";
                    case "/invest":
                        return "i-ic:outline-stacked-line-chart";
                    case "/contract":
                        return "i-ri:stock-fill";
                    case "/service":
                        return "i-mingcute:invite-fill";
                    case "/mine":
                        return "i-clarity:avatar-solid-alerted"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", At, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    bt = y(pt, [
        ["__scopeId", "data-v-5e8eeef3"]
    ]),
    ft = {
        class: "tab-item-label"
    },
    vt = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:other-houses-rounded";
                    case "/quan":
                        return "i-carbon:heat-map-stocks";
                    case "/invest":
                        return "i-ic:outline-stacked-line-chart";
                    case "/contract":
                        return "i-mingcute:stock-fill";
                    case "/service":
                        return "i-mingcute:invite-fill";
                    case "/mine":
                        return "i-icon-park-solid:avatar"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", ft, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    gt = y(vt, [
        ["__scopeId", "data-v-ace7c0d3"]
    ]),
    ht = {
        class: "tab-item-label text-#CBCBCB"
    },
    yt = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:other-houses";
                    case "/quan":
                        return "i-material-symbols:broken-image-outline";
                    case "/invest":
                        return "i-ic:outline-stacked-line-chart";
                    case "/contract":
                        return "i-ri:stock-fill";
                    case "/service":
                        return "i-material-symbols:auto-awesome-outline";
                    case "/mine":
                        return "i-clarity:avatar-solid"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-#CBCBCB"}`])
            }, null, 2), t("div", ht, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    wt = y(yt, [
        ["__scopeId", "data-v-0aeb268c"]
    ]),
    xt = {
        class: "tab-item-label"
    },
    _t = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:home";
                    case "/quan":
                        return "i-carbon:heat-map-stocks";
                    case "/invest":
                        return "i-ic:outline-stacked-line-chart";
                    case "/contract":
                        return "i-ri:stock-fill";
                    case "/service":
                        return "i-icon-park-solid:vip-one";
                    case "/mine":
                        return "i-ic:baseline-account-balance"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", xt, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    It = y(_t, [
        ["__scopeId", "data-v-5018ac0e"]
    ]),
    Zt = {
        class: "w-100% h-100% flex flex-wrap items-center justify-center"
    },
    Bt = {
        key: 0,
        class: "tab-item-label"
    },
    Yt = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:dashboard-rounded";
                    case "/quan":
                        return "i-jam:database-f";
                    case "/invest":
                        return "i-ic:round-data-exploration";
                    case "/contract":
                        return "i-icon-park-outline:discovery-index";
                    case "/service":
                        return "i-icon-park-solid:friends-circle";
                    case "/mine":
                        return "i-clarity:avatar-solid"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", Zt, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-white"}`])
            }, null, 2), e.active !== e.index ? (s(), c("div", Bt, b(i.$t(e.item.label)), 1)) : o("", !0)])], 2))
        }
    }),
    jt = y(Yt, [
        ["__scopeId", "data-v-5fb09688"]
    ]),
    Tt = {
        key: 0,
        class: "tab-item-label"
    },
    St = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:dashboard-rounded";
                    case "/quan":
                        return "i-jam:database-f";
                    case "/invest":
                        return "i-ic:round-data-exploration";
                    case "/contract":
                        return "i-icon-park-outline:discovery-index";
                    case "/service":
                        return "i-icon-park-solid:friends-circle";
                    case "/mine":
                        return "i-clarity:avatar-solid"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["w-100% h-100% flex flex-wrap items-center justify-center", {
                    "bg-$bg-second rd": e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-white"}`])
            }, null, 2), e.active !== e.index ? (s(), c("div", Tt, b(i.$t(e.item.label)), 1)) : o("", !0)], 2)], 2))
        }
    }),
    kt = y(St, [
        ["__scopeId", "data-v-441225ad"]
    ]),
    Dt = {
        class: "tab-item-label"
    },
    Et = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:home";
                    case "/quan":
                        return "i-material-symbols:straighten";
                    case "/invest":
                        return "i-heroicons:banknotes-16-solid";
                    case "/contract":
                        return "i-material-symbols:donut-small-outline";
                    case "/service":
                        return "i-icon-park-solid:vip-one";
                    case "/mine":
                        return "i-ic:baseline-account-balance"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", Dt, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Nt = y(Et, [
        ["__scopeId", "data-v-019cbff5"]
    ]),
    Mt = {
        key: 0,
        class: "tab-item-label"
    },
    Ft = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:home";
                    case "/quan":
                        return "i-material-symbols:straighten";
                    case "/invest":
                        return "i-heroicons:banknotes-16-solid";
                    case "/contract":
                        return "i-material-symbols:donut-small-outline";
                    case "/service":
                        return "i-icon-park-solid:vip-one";
                    case "/mine":
                        return "i-ic:baseline-account-balance"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["w-100% h-100% flex flex-wrap items-center justify-center", {
                    "bg-white rd": e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-white"}`])
            }, null, 2), e.active !== e.index ? (s(), c("div", Mt, b(i.$t(e.item.label)), 1)) : o("", !0)], 2)], 2))
        }
    }),
    zt = y(Ft, [
        ["__scopeId", "data-v-edfc4850"]
    ]),
    Lt = {
        class: "tab-item-label"
    },
    Ct = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:home";
                    case "/quan":
                        return "i-material-symbols:straighten";
                    case "/invest":
                        return "i-heroicons:banknotes-16-solid";
                    case "/contract":
                        return "i-material-symbols:donut-small-outline";
                    case "/service":
                        return "i-icon-park-solid:vip-one";
                    case "/mine":
                        return "i-ic:baseline-account-balance"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", Lt, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Qt = y(Ct, [
        ["__scopeId", "data-v-7a8e8565"]
    ]),
    Rt = {
        class: "tab-item-label"
    },
    qt = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-solar:home-angle-2-bold";
                    case "/quan":
                        return "i-solar:battery-charge-minimalistic-bold";
                    case "/invest":
                        return "i-solar:hand-money-bold";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-solar:square-share-line-bold";
                    case "/mine":
                        return "i-solar:user-rounded-linear"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", Rt, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Gt = y(qt, [
        ["__scopeId", "data-v-329dd6f1"]
    ]),
    Ut = {
        class: "tab-item-label"
    },
    Jt = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-solar:home-angle-2-bold";
                    case "/quan":
                        return "i-solar:battery-charge-minimalistic-bold";
                    case "/invest":
                        return "i-solar:hand-money-bold";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-solar:square-share-line-bold";
                    case "/mine":
                        return "i-solar:user-rounded-linear"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [e.index === 0 ? (s(), c("div", {
                key: 0,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===0?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 1 ? (s(), c("div", {
                key: 1,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===1?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 2 ? (s(), c("div", {
                key: 2,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===2?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 3 ? (s(), c("div", {
                key: 3,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===3?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 4 ? (s(), c("div", {
                key: 4,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===4?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), t("div", Ut, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Ht = y(Jt, [
        ["__scopeId", "data-v-1d237e4b"]
    ]),
    Xt = {
        class: "tab-item-label"
    },
    Ot = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-mingcute:home-6-fill";
                    case "/quan":
                        return "i-mingcute:task-fill";
                    case "/invest":
                        return "i-material-symbols:group-work";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-icon-park-solid:vip-one";
                    case "/mine":
                        return "i-ic:baseline-account-balance"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", Xt, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Vt = y(Ot, [
        ["__scopeId", "data-v-5f984da4"]
    ]),
    Wt = {
        class: "tab-item-label"
    },
    Pt = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-solar:home-angle-2-bold";
                    case "/quan":
                        return "i-solar:battery-charge-minimalistic-bold";
                    case "/invest":
                        return "i-solar:hand-money-bold";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-solar:square-share-line-bold";
                    case "/mine":
                        return "i-solar:user-rounded-linear"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", Wt, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Kt = y(Pt, [
        ["__scopeId", "data-v-c8c32164"]
    ]),
    $t = {
        class: "tab-item-label"
    },
    en = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/quan":
                        return "i-mdi:state-machine";
                    case "/invest":
                        return "i-streamline:money-cash-dollar-coin-accounting-billing-payment-cash-coin-currency-money-finance";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ph:telegram-logo-bold";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", $t, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    tn = y(en, [
        ["__scopeId", "data-v-4463b44a"]
    ]),
    nn = {
        class: "tab-item-label"
    },
    an = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-mingcute:home-6-fill";
                    case "/quan":
                        return "i-mingcute:task-fill";
                    case "/invest":
                        return "i-material-symbols:group-work";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-icon-park-solid:vip-one";
                    case "/mine":
                        return "i-ic:baseline-account-balance"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", nn, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    sn = y(an, [
        ["__scopeId", "data-v-28e06567"]
    ]),
    cn = {
        class: "tab-item-label"
    },
    on = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-solar:home-angle-2-bold";
                    case "/quan":
                        return "i-solar:battery-charge-minimalistic-bold";
                    case "/invest":
                        return "i-solar:hand-money-bold";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-solar:square-share-line-bold";
                    case "/mine":
                        return "i-solar:user-rounded-linear"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [e.index === 0 ? (s(), c("div", {
                key: 0,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===0?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 1 ? (s(), c("div", {
                key: 1,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===1?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 2 ? (s(), c("div", {
                key: 2,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===2?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 3 ? (s(), c("div", {
                key: 3,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===3?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 4 ? (s(), c("div", {
                key: 4,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===4?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), t("div", cn, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    rn = y(on, [
        ["__scopeId", "data-v-d74f245c"]
    ]),
    ln = {
        class: "tab-item-label"
    },
    un = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-solar:home-angle-2-bold";
                    case "/quan":
                        return "i-solar:battery-charge-minimalistic-bold";
                    case "/invest":
                        return "i-solar:hand-money-bold";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-solar:square-share-line-bold";
                    case "/mine":
                        return "i-solar:user-rounded-linear"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [e.index === 0 ? (s(), c("div", {
                key: 0,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===0?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 1 ? (s(), c("div", {
                key: 1,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===1?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 2 ? (s(), c("div", {
                key: 2,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===2?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 3 ? (s(), c("div", {
                key: 3,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===3?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), e.index === 4 ? (s(), c("div", {
                key: 4,
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===4?"c-$primary":"c-$text-gray"}`])
            }, null, 2)) : o("", !0), t("div", ln, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    mn = y(un, [
        ["__scopeId", "data-v-7edb476e"]
    ]),
    dn = {
        class: "tab-item-label"
    },
    An = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:other-houses-rounded";
                    case "/quan":
                        return "i-carbon:machine-learning-model";
                    case "/invest":
                        return "i-ph:washing-machine-bold";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-flowbite:share-nodes-outline";
                    case "/mine":
                        return "i-solar:user-rounded-linear"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", dn, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    pn = y(An, [
        ["__scopeId", "data-v-ecf856b5"]
    ]),
    bn = {
        class: "tab-item-label"
    },
    fn = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-mingcute:home-6-fill";
                    case "/quan":
                        return "i-ic:sharp-energy-savings-leaf";
                    case "/invest":
                        return "i-ri:money-dollar-box-fill";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ic:baseline-share";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", bn, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    vn = y(fn, [
        ["__scopeId", "data-v-7e5002ff"]
    ]),
    gn = {
        class: "tab-item-label"
    },
    hn = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            },
            num: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:home-app-logo";
                    case "/quan":
                        return "i-jam:task-list-f";
                    case "/invest":
                        return "i-mingcute:vip-1-fill";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ic:baseline-group";
                    case "/mine":
                        return "i-material-symbols:account-balance-rounded"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", gn, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    yn = y(hn, [
        ["__scopeId", "data-v-df7a183a"]
    ]),
    wn = {
        class: "tab-item-label"
    },
    xn = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            },
            num: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            const {
                no: a
            } = I();

            function i(r) {
                switch (r) {
                    case "/":
                        return "i-mdi:home-circle-outline";
                    case "/quan":
                        return "i-ic:twotone-task-alt";
                    case "/invest":
                        return "i-mingcute:receive-money-line";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ic:baseline-share";
                    case "/mine":
                        return "i-material-symbols:account-circle"
                }
            }
            return (r, p) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", `${e.active===e.index?"active":""} c-${n(a)}`])
            }, [t("div", {
                class: u(["tab-item-icon", `${i(e.item.path)} ${e.active===e.index?"c-$btn-text":"c-$text-gray"}`])
            }, null, 2), t("div", wn, b(r.$t(e.item.label)), 1)], 2))
        }
    }),
    _n = y(xn, [
        ["__scopeId", "data-v-b7ab9e6d"]
    ]),
    In = {
        class: "tab-item-label"
    },
    Zn = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-mingcute:home-6-fill";
                    case "/quan":
                        return "i-mingcute:task-fill";
                    case "/invest":
                        return "i-material-symbols:group-work";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-icon-park-solid:vip-one";
                    case "/mine":
                        return "i-ic:baseline-account-balance"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", In, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Bn = y(Zn, [
        ["__scopeId", "data-v-8396e598"]
    ]),
    Yn = {
        class: "tab-item-label"
    },
    jn = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-iconoir:home-sale";
                    case "/quan":
                        return "i-solar:checklist-linear";
                    case "/invest":
                        return "i-streamline:interface-award-crown-reward-social-rating-media-queen-vip-king-crown";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-nimbus:user-group";
                    case "/mine":
                        return "i-mingcute:wallet-4-line"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", Yn, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Tn = y(jn, [
        ["__scopeId", "data-v-885e8636"]
    ]),
    Sn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0M0YxOEIwN0IwQzExRUI5MjQ5Q0M4NkYwRjZCM0QxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0M0YxOEIxN0IwQzExRUI5MjQ5Q0M4NkYwRjZCM0QxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQzRjE4QUU3QjBDMTFFQjkyNDlDQzg2RjBGNkIzRDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQzRjE4QUY3QjBDMTFFQjkyNDlDQzg2RjBGNkIzRDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hcTJaAAAByElEQVR42uzZzysEYRzH8Wd2x8q6KlykXP0Tbg72QHHYA8oFBwfJICdhSRxoNxTKj/zIXsQfodycNhIHe8DNr4PC55vnqWnand3ZeWbmUfOt98E8M8++WiszrTa+fMwkzQCaRT9oGm2Xc9HiaI/tui4JN4aWTD9voVq05nbjiATchAUnZpWvBQokQMpmPeUW6QY4VwJnRk76DVxAUw7On+fX+AKkFzIquM6oBOnkr1hDaTTk4mNhmD67Ut9BwmVc4szINN9TClDgBpm8GeZ7am6BUbQvGSeG9swYKydapUDC7aIk824IuQNk1CmwygecmD56rWLIQsAYyvqEE5MshowUwJ2iBPN/CHkIZKwYsCZAnJhuMpiRAhhHFwHjxCTMyAjHnaM2ps4QMgtknIB7iuHEdKBNAnYxdaeTgJcKA690/g7S3UUTP9iKWgIC5dEN+kY5NKPzgyOmk+rQc0DAdjzlXZf6T/IS4K/01YunOk9H1nPxE/q0HKtGDSo8Fx+getRsqRGtqwC8tVnLqQD0dEJgCAyBITAE/lNg3sEedzZrDw72eUeP5QL7+Z2t3Xywv68ajmzOOUMb6K3EXveoFzerX9aFXwEGAE/RWcBGoLJLAAAAAElFTkSuQmCC",
    kn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0NzVFQjcyN0IwQzExRUI5NzJBRTE4RDM0NTMyRkFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0NzVFQjczN0IwQzExRUI5NzJBRTE4RDM0NTMyRkFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQ3NUVCNzA3QjBDMTFFQjk3MkFFMThEMzQ1MzJGQUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQ3NUVCNzE3QjBDMTFFQjk3MkFFMThEMzQ1MzJGQUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7svLwAAAACKUlEQVR42uyXTygEURzHZ+1YIbk4yMHFcefu7ObAAUlJKAdLcqFWcpJ/5UYI7WIRareklVLKVbnhoJU4cMDNvwN2fH9jptaw82ffzO7E/urT7L739s1nvm+aeevynoY5i6oDjAARDIGgkR+dehs0+3lOFK2Q6weTCd8DoBBMs07Mc3FmuQEw/kv7lCw5wSbIlmAyOaWUvgmGBFMWHAWDBsaRpEvnQjQEP1JaY0rEb2L8GCiWE7c9QbNySvkTbgtbBGmZZkAXwz1rWtLoEpPcLPBZ8EgiySLQIz8zmRO0Uk6pbpAjHzUFcqQEk+MGa8CnMy4VaM5Z4XDFpSOIC/gdyIkh0KwxhhVIikvCwbLbbIK5AHLxZhuSU9NG5xL2g26jCXpAxObk1NC5QsJewK2XIOTiYVCbhuTU0GptCNFFz3fBd3R+kQ/CoDahLd00koOwPe9RJ1gAdjOUnBpyCAuROUnS5d2aKcAxCqo4ZxU5NdGbZNWBclQ1YIHHmtdzzq06SvAIHyodKnjMix9SgrS7KJcbBVCRIaFbEAO0gzkHw1hikRp7EwaVgPsMCVafdfad6G23HjK4pI9WbfnTVrz0BGevO/CqassDpeyC7Amug5YkfXOsG11e2k2w1YVG37kTErT5HnS+oJhN8I8nGM8myJpgVvB/CtIesczgHJcafdcmXJ7Bzc8/7iT4k3YQS9Kn8AKCYFNjzA6YB086c12B1rPpyTe14KcAAwCP8MIh1gtSAgAAAABJRU5ErkJggg==",
    Dn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzRDc4RjFCN0IwQzExRUJCMUQ3REZERUQwREVDMjA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzRDc4RjFDN0IwQzExRUJCMUQ3REZERUQwREVDMjA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTNENzhGMTk3QjBDMTFFQkIxRDdERkRFRDBERUMyMDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTNENzhGMUE3QjBDMTFFQkIxRDdERkRFRDBERUMyMDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zi5ISAAADZ0lEQVR42syYaUgVURTHx9eDQJM22yxok3ZtpWgBiWzPpDLDJIoWyuqDFVlkVF8sJDQSKhAKKUvKqOhVFim0mhVlQSt96IuFEdFqG1n9D+9MXAbfzNx7x/f6ww9m3ps7859z75x77o3KLTxuKGocSAGJIAnEg2jgAx9AI6gHd0EA1IJP1psUrM+wfYhf0lRHsBakgyE217VjuoMx3KaejZaAB24f6JMwlwMegx0O5kKpB8gGdeAwn3tiMAHUgD2gi+GNFoFHIEvX4DRwH4w1vFdbULap6MR+VYP0lpUg1mhZZcNkhazBOTxOwqV0mCxxa7A/OGWEXytgcp0bg6eNyKkIJgfZGdwCBhqR1bFQBjuBfA8e8IvHML3oSYX2QxHFJc0Z3OpRBCaDM+AZmK84ZLZZDVJOWuaBuengiuW3uZyuZNQbUUwRDVKXxGiamw0uhvhvBrgqeb+losFUTXMZXAiYWtVM1KZyZeNWmYhiHFUzvcBoDXOLQYXFyAE+Dggv/wMkc5c3gd8OM1xrs9xKdFtZNKN8y4yTbOnmWYAKzgV8/g0clakHyWlfjehdF47Hg+oQ3V+q+gCKYGcNg7vAV75HGWhlMwy6gSq+5l96wziz8/bEr1BVixoOrrm8dgojo6f0Jm2M/1cNfu6a1w5flak/4Dvow+sMOxWDcv5qNyoabPRzOV+j0PicTWIuAJv5uJaL364Kz3jr0wj/JV4SWLVXMEfqqTGMXlAEo3iCj+cv0k4xvLK7I5icCc4L5nKE6ztw6lE1eM/8gleDNImGqdzFpAvcfpjFXBy4pZFnaZF/28cD/5Bk44Cle2lqWymct+cknqAxhKoxy3z0CVFokLxBZYgxGMuVywDNFHNErGaoCt6ncBMyOUk4j+Z6MFE3/4Gz1oqaBvgXhZtV8VRGVcxNMMKDBL0d3dtk3Tz6DPLYqKxKDe/0HOZKQq3qinlzJ5LKdFoXzwM/I2QuD9GrczL4kgvNsK+HYW6n272Zy7wICpfKYS5LdneLkvEE8KaltztgbqHs7pYpShsjOaJei0q8NJjb4LQmcdIrroSXG8F9Zl3RB0iblklmMtY1aOogGAxyjeCuq8rsUMizzBrwzu2iSbbC2M1Q108Eo0A/I7ij7+cI0fLyPdVzRnAv+gZ4yL9J6a8AAwAkRr5MAaWqswAAAABJRU5ErkJggg==",
    En = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0MEFBODFBN0IwQzExRUJBRDk5QjZCNDQ4OUI1QjE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0MEFBODFCN0IwQzExRUJBRDk5QjZCNDQ4OUI1QjE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQwQUE4MTg3QjBDMTFFQkFEOTlCNkI0NDg5QjVCMTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQwQUE4MTk3QjBDMTFFQkFEOTlCNkI0NDg5QjVCMTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6QuUJAAAAD50lEQVR42syYaUgUYRjHV1sKLLHLDguKikp2srvoAInKTovtLpMkijL6UFAU2WFQWgRFUQpCl5bbYX7QyiwFS7M7C3Y6P/TFwuhDF13ijv0feybHaWd2jlV74Kfv7L4z89/nPZ7neUNc3jyHRRsPpoAhIAZEgTAQCj6Bb6AaPACF4C74on6I1zVf9yVOR329GVFdwHqwAAg6/ToyvcBYvqeahWaBJ0ZfGOqQ8NcYG4AIUoFg4j6Z3iAZVIFsvjYgkDyozwBQCQ6B7gb6GyEReEGCAQ/iBm2mg8dgXIB+VogAZ4SqCxn6An3ws38SQREI1+kTDJKFh+cumvWgG2Q3g9e0WCDc92QZFTgI5LegOJnVwt3cjWqBIa6KHPVnz0C0o/XM5Z2w/FnjPig12Qe3tbI4slwwzN8iiQR7gzDp64AbRIM8C/cPFcpOJzV60PfXg9uD5IGpoIzbC0E+cJt8xk5w6s8cLD5O/yPAW9DeprgZ4Jqfz6/yd6Z+qDduZYnsQXcQxM3REEc2k70aa+J5K0FJiKuwYfu5BObZELcIKDfbtWCuymvtQDkYbeK5kU5HndQXjTE2xK1QiZsGMrlN2Us8t3+xB8kRPk4htAPInx9Ei0SifK63RXF7QbbiOlY1zLPBebCYr3+As03ywfnJAfJBX31/G94rV7QngFKN4SdhSVZeQB7sZkNgOvgO6BlnQBudadCTJj33CZW/EDxHtbUhqtEcdNoQOBzcMtg3jjFjz8mDHRz/r9U4630SDc27AKtKNto0f4J+XGfo2RHg4VW72aLAbxhipPMOR6WFmy/rbMz7wVZuUzWXCHpYeMcHZ0OAtmbFYLofkYcV4sj6AKvT6DUJDOEAH8UrUs8oHIrgvkLkLHBFIW6Don9n3nqsCnxEq5ga6zg0GbV4HmI5EVjHOZxSXFdwB1jdZ6nIv0cepIl/wqTAQlXmkqn6vhNv4gNsrOBScVPKZzmbIS/UmJzIRRrpVTi4CQbb3GJylBk1ZcHHLGS/VJZOVlyHgbKG+G4vK68BBXKoU66+LRYmdAnHWRqBfcp6wobtEnek+tQp/1eQwkLN2qkgRo+XYuruLGWyoN79kzjGtpYtVadb6g50YPcCtG0FcSli2p6qpgKlfyLJG040r7d0PSzuS0vzl7D663yDi6CCFhLnEQ+kJ5g9fisEE8H7Zj6TOQhxy7SzVkn3CPg2GAlOcrwOplGKlywe2l9g5wCTeAviwCpQHQSP1YIMEAMCTqFAHlTacS4v14AlYITZ7JgrOtrjXhkvmiRTp/yUYRxgaOgngVFgIJ/oU31Ty1XcR8rnqLIEFeApf2bKfgswAFIygqafhibAAAAAAElFTkSuQmCC",
    Nn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzMDgzMDI3N0IwQzExRUI5QjI4QzU2MTg1OTRGNkRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzMDgzMDI4N0IwQzExRUI5QjI4QzU2MTg1OTRGNkRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTMwODMwMjU3QjBDMTFFQjlCMjhDNTYxODU5NEY2REYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTMwODMwMjY3QjBDMTFFQjlCMjhDNTYxODU5NEY2REYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4aixq5AAABUUlEQVR42mL8//8/Q3nfKgYkwAbEGUAcCcQ6QMzDQFvwBYivAPFyIJ4BxL9gEp1FYQwsaIqlgXgLEBsw0A+AAsACihOB2AeIn8IkmdBCjt6OQwcgu7cCMTs2B6YPsONgQB+I07A5MIph8IAobA40GkQONMSVBgcLwJoGByVgIULNBiDei1w+kQn4gDgciE2o6cAF0LKJWmASEJ8HYi1iNRCK4p1UjjFQLOwhRQMhB9pT2YHMQGxHzSgGFd5cQHwMiP9T6DhWIA4ltTIg5EBGII6D4gEBg76YGRblICjnPSGz3BOhtQNvAbETcvuMRFAIxH20jOIuChwHAv1AfIOWDuSgMIYYocUUzRxYBcTmZJrNBY0BOVqmQSkgPgHt2Pwm0WxeIjMhxbmYgQ49u9GCetSBow4cdeCoA0cdOOrAUQeOOnDUgQQdeGQQuesojAEQYACPCyxNzdo/fAAAAABJRU5ErkJggg==",
    Mn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzM0EzRThBN0IwQzExRUJCMzJBRTY2MzQ1MjQ1MDhBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzM0EzRThCN0IwQzExRUJCMzJBRTY2MzQ1MjQ1MDhBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTMzQTNFODg3QjBDMTFFQkIzMkFFNjYzNDUyNDUwOEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTMzQTNFODk3QjBDMTFFQkIzMkFFNjYzNDUyNDUwOEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DJ1DVAAABu0lEQVR42mL8//8/AzLQubqWDUhlAHEkiAvEPAy0BV+A+AoQLwfiGVe0g38hSzIiO1DnyhppILUFiA0YBgZcAGKfKzohTzEcqHNpDSjkTg6g42DgIhCbX9EL+QniMMGF//9PB2IDBpCDBxbrA3EazFkIB/77HwXEDIMER8GcxQJ34N9/RgyDBxhiOvDff7ZB5EB2bA5kGIwAOYpxqdkAxHuB+BeFdvEBcTgQm5DnQOwhuOCKbWwiPgN0Di8mxb5JQHweiLWoFYI7CZqAO+SxAVAs7CHTgVhD0B6IV+B3IElplxmI7aiZBtN1ds3jAtLHQEU5hWmQFYhDSa2pCIUgIxDHQfGgzcWDpJj5M9gdiDsEQTnvCZnlnggVHYg1Dd4CYqcrYVlPcZaDq6bhM78QiPtoGYJdVyJznlJQDvYDMajppEGrNMhB0AT8aRdUCnBREoJMKCGBiat0FkwwJxiC2DEXEHcBsRweNbgxegj+xx5VUkB8QntuH6hj85tEz/OixBDlUYy3ouAZzMXMoC8HR2uS4RLF/0dDcDSKR0NwaIfgv9EQpDQERx046sABd+ARIGkzSNx1FMYACDAAb4NZTIDxPqkAAAAASUVORK5CYII=",
    Fn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNzExMTM4N0IwQzExRUJCN0IxOThERUVFNzUxMzhDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNzExMTM5N0IwQzExRUJCN0IxOThERUVFNzUxMzhDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTM3MTExMzY3QjBDMTFFQkI3QjE5OERFRUU3NTEzOEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTM3MTExMzc3QjBDMTFFQkI3QjE5OERFRUU3NTEzOEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7cMkuGAAACtklEQVR42syZTUgVYRSGZ8Yb9kPKrSipQKiQKCHMVlHQQmrVIqIWEi4iyIUGCdmqcCOhIkQGUURICSFRu2rZIggJatEuQsnox2yR5U1M897eA++FWczPmZn7zZ0DD1wGZuad851zvnO+a/cOj1tKy4NO0A02g2XLnM2BMXAtF+Gms+AqqAU2qDEocAs4DxytwEZwGKy20jFxwHpwxlHesI6kbXmtwBJJ24pagTVV8mBJG4Pz4BVj428CbxZBHWgGazQ3aAXOgJvgAVhJILDERGsAJyQJwoRqBYrXpiu8fG/AF9BDrwYKlJTeLnXHYDI49P4kWAKz4Drfey5IYDN3iCYmg2mB78Ad8B78Ao/BKVDvJ7APnEwxM9voBHlvAXwFH8ABv686XoXysR9s42/Z038Hud2uRgF2xb9DAuMirv0L+voQgUVt4Ma1Aov3Z5OudhIskdSxEbAniwK/gUdpxG8cgRKzT8EoOJZFgW/BENgIWrMmULqacW5XW8G+rAl8xq5GdoKdWYtB2UNvsbPZAFrSqOjadks89pB1T2wT2Mvfiz7tWV0lPKwVKB3Hbdcs/Al0cQzw2hF2gXucpY0LlE7jLvjpurbIRPGzi2BtJcZPTQyKuBcRHnqE7VttBQSuChP4BNxnB6yd/vr9ms+QQd3LfoQtsZwoDPIBjsdDZZmvuK7JEHQwoji/kVZ2rJEwga0hu8WES2ADz26imrRrL8ECk9B2XRvNJYiPZdbGcrJJVu+I2XjcYFiUBRYGek5PRykzXrbAcmNx8LoQ5yEQIjXzo4mGVQROMYYucXTNTD8o9gd8B4dAe7W3Or/ORrx3OYsddbnM7AZHTQuMK1JqZEeCj7O1AosxX5L3Ow1QdkcrWoGvLbMn9l6z9BSPPFRJIiVimA1ozuDhUfmfgedsfOc1N/0XYACpFotXgtdquQAAAABJRU5ErkJggg==",
    zn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzQTMxRjlGN0IwQzExRUJCMTdFQkI4Rjc3MzJBM0E0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzQTMxRkEwN0IwQzExRUJCMTdFQkI4Rjc3MzJBM0E0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTNBMzFGOUQ3QjBDMTFFQkIxN0VCQjhGNzczMkEzQTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTNBMzFGOUU3QjBDMTFFQkIxN0VCQjhGNzczMkEzQTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IZEh2AAAC70lEQVR42syZXYgNYRjH58zOtj6yOogtSiHJ2RKrRJQLuXMhuZFcSHGBouRqtdqkSPkqkbSJJB93uHShkOJisxeSzW4hXPjYJew5M/4P/+FczJx55p155+xbv87ptPPOf/7v87zv88yWKs9vOspRBrvAHjATjDn2xmdwBRz1nCDQXrQdHAJtoARaLAqcBXYC13N81QVzwRowwSlmiAFTwFatg5NJ0aMMB1UCA1L08D2nplrjliY5GGgdHAEPGRs/M7gpbrSDTjBRFYyVR1c1fyeZ2wGmgloGgQETTebaKEmQIPSHdonFtaGcl+8peAP209XIES6xpPQc2XcsJoNL91+BX+ADOMn77ogXWPM7eUIsZDLYFtgPLoAX4Au4BTYzfKIEBj343FRgZq6jCXLfUfAWvATL4xzc0ITtYxmYTRflTP/aYImDUjM24D/3/r/0bqMYlLhoNbxRFXxvlIUNBKq2D8+p+qYuSPw8AzPAYltWa/fBKAdkHzsLbtiMBYlBk+veUZj1+DVxUGL2DugDp+wLTB+DEnfHwXTQNd4clKrmOo+rFWCJdYFBOoF3mRgSuPOLicGqOknkDD3HymYaWFrEjq5dYnmKayxaHe59lbBmiynP2vNwWCtQKo7zdb3wMNjNNiBqggXgEntp61kslcZF8Km+0mWixI19YFIe7afGQRF3P8Wka1m+teUgsDXpJLkNLrMC1nZ/R+KKz4RGPWp8THJQ3igc4wRuxKSyzN11v0kTtCqluLiWVk6sM0kCuxJOi8d1Ajv47ibtkGL1Acu2MT54+FufabHgcLL+f8n2N6vnGRYepxkWocDRgZ7DQ1nKLYdPPMzv0njtNZlkoLdX9szXeZdbocBBxtABtq4WThLf2MFv4D1YDbaMt4I1rGzEvYN2z2LfWKAE8yKw3rZA1/Ba2SO3ZXi4klagaRCW494GKKujmlbgE3yuzNAbm/TSg3zloRIoW8QJFqCexZdH4X8G7rHwHdFc9FuAAQBx+NkJoaSfqAAAAABJRU5ErkJggg==",
    Ln = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyQTFCMTNBN0IwQzExRUJBMUJCQjFDRDI1NTBFQzMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyQTFCMTNCN0IwQzExRUJBMUJCQjFDRDI1NTBFQzMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJBMUIxMzg3QjBDMTFFQkExQkJCMUNEMjU1MEVDMzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTJBMUIxMzk3QjBDMTFFQkExQkJCMUNEMjU1MEVDMzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5b/JOLAAACK0lEQVR42uyZSyhEUQCGL6aJkLxCQtlYiAULKyWPhYXCwluxksTCQpIsFDVkY0sWimJho5RHlCgK2SCUpETkXdKQ8R/+W9d0bcy5c0/x19c5c+bOnX/OnMd/ZgI6hqY0Kh10gXwQr1mnF/AADsAyGAGXP10cyLISbIMai80JBYM4kAd6wSnoNHj5JgfIAOPAaWgXn64FPGr+U5jZ+zno3unVvg5WNAXk4JjzVjV49XMP6roDA8CjG4wzuSgUNNvYcR6a/ByYAZp66gbR2k8zRwGFg0aVDQoVqm4wWXWDoaob1P4N/gmDDgvvvQv2wBVw/+L191YYfAdjoI8xSqkefAZVYJaPY0CKr8FBlkGxudfTXAgYBg0SOsAty+A0mGHwmASlku7rlDWLB1lWGMy5QCy/apedY/Ac7LDexnKSSV2XqCfxzOP3dfCQY1AchnLYNm9y3bxdC/UTywgQxHqqyXWpdhlMYHkNblhv5WlRVwbbbDGYyQQsFulRtkWBLbBAtthmi0Ex9mpZ7wFz+hIBiojT7p2kH6yCfVDCY2s5SPTxPdZkGYzk7yx1YAlMEClx612SSXG+XmRPNnFiRMgIC7dc7WUpl/iqMxE2RA8eqJ6oV1Q3OCFxHFpi8IhxSTW9GRfqdnChmMEzo0FhroyxXRXNeG91m6BAkZ4Uw27EbC/eANkMnHZNnGNQrH39G2AaFi64+acxCa/ybOux0JSb+7gIG1ngRH/iQ4ABAOaVaOWx9gtkAAAAAElFTkSuQmCC",
    Cn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRDYyMUI3N0IwQzExRUI4NzQyODFCRDREMUJGMThGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyRDYyMUI4N0IwQzExRUI4NzQyODFCRDREMUJGMThGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJENjIxQjU3QjBDMTFFQjg3NDI4MUJENEQxQkYxOEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTJENjIxQjY3QjBDMTFFQjg3NDI4MUJENEQxQkYxOEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5iElAhAAACoElEQVR42uyYW0gUURjHz9piFxPJipIwySdx1IigniLo8lAgZFumZZCPEvogSCKx2kNBmxAFRWAEBS2m5ktPUiSVRkJI4EzR5SGEMBKptMLEZvp/47cwLZMbcz0PffDjzM45M/uf/7mfiKL2CQ4FtIFdYL3wL2bBV/AKPARdqhL7+LfCEWWsl9Ij4CZYKoKPn6ADJNSyQ3p6ZlToohzpLZBtuU9fdxJMByh0pd3/RYVhtKaJoxgGg0GoUjcfXjQ/oozembBpc9/Z1ekQqvyzWd1bqo0FB3/p62wK5YAGEV6QuMSCgyNJQ8gXM2CTuq12Kkvo0CcfuaA+VcVC0tgDOqOmYjljo+wO5rBAaR0Usjso/jvojcB53wS+ABr4BOYcPP/FDwfpZTfAWfD+nxYLsYbA2uAPUAPu8e81oCjTQ2U9VxddOHjlIH3lcRa3HFwGJ0wD3MWcV22wB/TT4gMkwQGPaiXbKwcvcFptEXee5lJ2twWcctSLDfcCP4BRvm7ilFxstZSh60Jw1MEw47qTvGaXloHtfG/AptyAM4HuHZzhNA8s4etim3LFYc0kBZxOgimwGjSCu2CM88r5XigzSQXIZSevc2fIB8/BIy6z02bnGJiD1PaOgWsgzm7tZ0F7ZVnNnAOPwUtQCWrBQbDB5WA95NU4uIrPWerAA3CbyRhaWzxjFZPCLA9E0v76PnjC4p6CcT4ochyR0vb4JE/sssW41nGmiBykg6IdMi/5B+UWqOvUXk571A59cfANL5dqJNM2zw6a42Azj/YFMnUSq0A6I6zisWyFJAL7rQIpRsBuzgjbSWp2XcLsGH8eez0DW0ES6CEdvb0F+7RLidl0B1MxwZN/O4jxxF8C1vKew4+gffM70A0ualc6v6UyfgswADKAYhKiypT9AAAAAElFTkSuQmCC",
    Qn = ["src"],
    Rn = {
        class: "tab-item-label"
    },
    qn = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i, r) {
                return new URL(Object.assign({
                        "../../assets/img/t16/tarbar-1-0.png": Sn,
                        "../../assets/img/t16/tarbar-1-1.png": kn,
                        "../../assets/img/t16/tarbar-2-0.png": Dn,
                        "../../assets/img/t16/tarbar-2-1.png": En,
                        "../../assets/img/t16/tarbar-3-0.png": Nn,
                        "../../assets/img/t16/tarbar-3-1.png": Mn,
                        "../../assets/img/t16/tarbar-4-0.png": Fn,
                        "../../assets/img/t16/tarbar-4-1.png": zn,
                        "../../assets/img/t16/tarbar-5-0.png": Ln,
                        "../../assets/img/t16/tarbar-5-1.png": Cn
                    })[`../../assets/img/t16/tarbar-${i+1}-${r}.png`],
                    import.meta.url).href
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("img", {
                class: "tab-item-icon",
                src: a(e.index, e.active === e.index ? 1 : 0)
            }, null, 8, Qn), t("div", Rn, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Gn = y(qn, [
        ["__scopeId", "data-v-2ffebc51"]
    ]),
    Un = {
        class: "tab-item-label"
    },
    Jn = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/quan":
                        return "i-ic:sharp-energy-savings-leaf";
                    case "/invest":
                        return "i-ri:money-dollar-box-fill";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ic:baseline-share";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", Un, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Hn = y(Jn, [
        ["__scopeId", "data-v-7ad8a308"]
    ]),
    Xn = {
        class: "tab-item-label"
    },
    On = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-mdi:home-circle";
                    case "/quan":
                        return "i-material-symbols:playlist-add-check-circle-rounded";
                    case "/invest":
                        return "i-icon-park-solid:crown-two";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ri:group-2-fill";
                    case "/mine":
                        return "i-ic:sharp-account-circle"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$btn-text":"c-$text-gray"}`])
            }, null, 2), t("div", Xn, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Vn = y(On, [
        ["__scopeId", "data-v-189e6cd0"]
    ]),
    Wn = {
        class: "tab-item-label"
    },
    Pn = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/quan":
                        return "i-mdi:state-machine";
                    case "/invest":
                        return "i-streamline:money-cash-dollar-coin-accounting-billing-payment-cash-coin-currency-money-finance";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ph:telegram-logo-bold";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", Wn, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Kn = y(Pn, [
        ["__scopeId", "data-v-6d267683"]
    ]),
    $n = {
        class: "tab-item-label"
    },
    ea = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-mdi:home-circle";
                    case "/quan":
                        return "i-material-symbols:playlist-add-check-circle-rounded";
                    case "/invest":
                        return "i-icon-park-solid:crown-two";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ri:group-2-fill";
                    case "/mine":
                        return "i-ic:sharp-account-circle"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", $n, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    ta = y(ea, [
        ["__scopeId", "data-v-dd7a0cbe"]
    ]),
    na = {
        class: "tab-item-label"
    },
    aa = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/quan":
                        return "i-mdi:state-machine";
                    case "/invest":
                        return "i-streamline:money-cash-dollar-coin-accounting-billing-payment-cash-coin-currency-money-finance";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ph:telegram-logo-bold";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", na, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    sa = y(aa, [
        ["__scopeId", "data-v-674cb0db"]
    ]),
    ia = {
        class: "tab-item-label"
    },
    ca = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ri:dashboard-fill";
                    case "/quan":
                        return "i-carbon:ibm-watson-machine-learning";
                    case "/invest":
                        return "i-mdi:dharmachakra";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-fluent:people-team-24-filled";
                    case "/mine":
                        return "i-mingcute:vip-1-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$btn-text"}`])
            }, null, 2), t("div", ia, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    oa = y(ca, [
        ["__scopeId", "data-v-8f1b51bd"]
    ]),
    ra = {
        class: "tab-item-label"
    },
    la = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-solar:home-angle-2-bold";
                    case "/quan":
                        return "i-solar:battery-charge-minimalistic-bold";
                    case "/invest":
                        return "i-solar:hand-money-bold";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-solar:square-share-line-bold";
                    case "/mine":
                        return "i-solar:user-rounded-linear"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", ra, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    ua = y(la, [
        ["__scopeId", "data-v-a62d7197"]
    ]),
    ma = {
        class: "tab-item-label"
    },
    da = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-solar:home-angle-2-bold";
                    case "/quan":
                        return "i-solar:battery-charge-minimalistic-bold";
                    case "/invest":
                        return "i-solar:hand-money-bold";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-solar:square-share-line-bold";
                    case "/mine":
                        return "i-solar:user-rounded-linear"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", ma, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Aa = y(da, [
        ["__scopeId", "data-v-314d4c80"]
    ]),
    pa = {
        class: "tab-item-label"
    },
    ba = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/quan":
                        return "i-majesticons:chip";
                    case "/invest":
                        return "i-icon-park-outline:financing";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ic:outline-support-agent";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", pa, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    fa = y(ba, [
        ["__scopeId", "data-v-b7bf3a42"]
    ]),
    va = {
        class: "tab-item-label"
    },
    ga = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/quan":
                        return "i-mdi:state-machine";
                    case "/invest":
                        return "i-streamline:money-cash-dollar-coin-accounting-billing-payment-cash-coin-currency-money-finance";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ph:telegram-logo-bold";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", va, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    ha = y(ga, [
        ["__scopeId", "data-v-2120b77f"]
    ]),
    ya = {
        class: "tab-item-label"
    },
    wa = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            return (a, i) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [e.index === 0 ? (s(), c("div", {
                key: 0,
                class: u(["tab-item-icon i-ph:house-fill", `${e.active===0?"c-$text-gray":"c-#568499"}`])
            }, null, 2)) : o("", !0), e.index === 1 ? (s(), c("div", {
                key: 1,
                class: u(["tab-item-icon i-majesticons:chip", `${e.active===1?"c-$text-gray":"c-#568499"}`])
            }, null, 2)) : o("", !0), e.index === 2 ? (s(), c("div", {
                key: 2,
                class: u(["tab-item-icon i-fluent:people-team-32-filled", `${e.active===2?"c-$text-gray":"c-#568499"}`])
            }, null, 2)) : o("", !0), e.index === 3 ? (s(), c("div", {
                key: 3,
                class: u(["tab-item-icon i-material-symbols:book-4-rounded", `${e.active===3?"c-$text-gray":"c-#568499"}`])
            }, null, 2)) : o("", !0), e.index === 4 ? (s(), c("div", {
                key: 4,
                class: u(["tab-item-icon i-mingcute:user-3-fill", `${e.active===4?"c-$text-gray":"c-#568499"}`])
            }, null, 2)) : o("", !0), t("div", ya, b(a.$t(e.item.label)), 1)], 2))
        }
    }),
    xa = y(wa, [
        ["__scopeId", "data-v-1ebb3f1f"]
    ]),
    _a = {
        class: "tab-item-label"
    },
    Ia = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/quan":
                        return "i-majesticons:chip";
                    case "/invest":
                        return "i-icon-park-outline:financing";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ic:outline-support-agent";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                id: "tabItem",
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$primary":"c-$text-gray"}`])
            }, null, 2), t("div", _a, b(i.$t(e.item.label)), 1)], 2))
        }
    }),
    Za = y(Ia, [
        ["__scopeId", "data-v-f10f0092"]
    ]),
    Ba = {
        class: "tab-item-label"
    },
    Ya = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-tdesign:home";
                    case "/quotes":
                        return "i-tdesign:certificate";
                    case "/quan":
                        return "i-tdesign:logo-codesandbox";
                    case "/invest":
                        return "i-tdesign:stop-circle-stroke";
                    case "/contract":
                        return "i-tdesign:cucumber";
                    case "/service":
                        return "i-tdesign:share";
                    case "/mine":
                        return "i-tdesign:user-1"
                }
            }
            return (i, r) => (s(), c("div", {
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [t("div", {
                class: u(["tab-item-icon", `${a(e.item.path)} ${e.active===e.index?"c-$btn-text!":"c-$text-gray"}`])
            }, null, 2), t("div", Ba, b(i.$t(e.item.label === "quotes" ? "News" : e.item.label)), 1)], 2))
        }
    }),
    ja = y(Ya, [
        ["__scopeId", "data-v-a6ff9f1f"]
    ]),
    Ta = e => (N("data-v-34bc6c5e"), e = e(), M(), e),
    Sa = {
        class: "tab-item-label"
    },
    ka = Ta(() => t("div", {
        class: "w-5px h-5px rounded-full bg-$primary mx-auto"
    }, null, -1)),
    Da = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-material-symbols:other-houses";
                    case "/quotes":
                        return "i-ph:coins-fill";
                    case "/quan":
                        return "i-ic:sharp-energy-savings-leaf";
                    case "/invest":
                        return "i-material-symbols:group-work";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-ic:baseline-share";
                    case "/mine":
                        return "i-mingcute:user-3-fill"
                }
            }
            return (i, r) => (s(), c("div", {
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [e.active !== e.index ? (s(), c("div", {
                key: 0,
                class: u(["tab-item-icon", `${a(e.item.path)}`])
            }, null, 2)) : o("", !0), e.active === e.index ? (s(), c(z, {
                key: 1
            }, [t("div", Sa, b(i.$t(e.item.label)), 1), ka], 64)) : o("", !0)], 2))
        }
    }),
    Ea = y(Da, [
        ["__scopeId", "data-v-34bc6c5e"]
    ]),
    Na = e => (N("data-v-5249e666"), e = e(), M(), e),
    Ma = {
        class: "tab-item-label"
    },
    Fa = Na(() => t("div", {
        class: "w-5px h-5px rounded-full bg-$btn-text mx-auto"
    }, null, -1)),
    za = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/invest":
                        return "i-ph:coins-fill";
                    case "/quan":
                        return "i-cryptocurrency:abt";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-mingcute:invite-fill";
                    case "/mine":
                        return "i-icon-park-twotone:wallet-one"
                }
            }
            return (i, r) => (s(), c("div", {
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [e.active !== e.index ? (s(), c("div", {
                key: 0,
                class: u(["tab-item-icon", `${a(e.item.path)}`])
            }, null, 2)) : o("", !0), e.active === e.index ? (s(), c(z, {
                key: 1
            }, [t("div", Ma, b(i.$t(e.item.label)), 1), Fa], 64)) : o("", !0)], 2))
        }
    }),
    La = y(za, [
        ["__scopeId", "data-v-5249e666"]
    ]),
    Ca = e => (N("data-v-882e561d"), e = e(), M(), e),
    Qa = {
        class: "tab-item-label"
    },
    Ra = Ca(() => t("div", {
        class: "w-5px h-5px rounded-full bg-$primary mx-auto"
    }, null, -1)),
    qa = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/quotes":
                        return "i-ph:coins-fill";
                    case "/quan":
                        return "i-cryptocurrency:abt";
                    case "/contract":
                        return "i-material-symbols:lightning-stand";
                    case "/service":
                        return "i-mingcute:invite-fill";
                    case "/mine":
                        return "i-icon-park-twotone:wallet-one"
                }
            }
            return (i, r) => (s(), c("div", {
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [e.active !== e.index ? (s(), c("div", {
                key: 0,
                class: u(["tab-item-icon", `${a(e.item.path)}`])
            }, null, 2)) : o("", !0), e.active === e.index ? (s(), c(z, {
                key: 1
            }, [t("div", Qa, b(i.$t(e.item.label)), 1), Ra], 64)) : o("", !0)], 2))
        }
    }),
    Ga = y(qa, [
        ["__scopeId", "data-v-882e561d"]
    ]),
    Ua = e => (N("data-v-cce71dec"), e = e(), M(), e),
    Ja = {
        class: "tab-item-label"
    },
    Ha = Ua(() => t("div", {
        class: "w-5px h-5px rounded-full bg-$btn-text mx-auto"
    }, null, -1)),
    Xa = f({
        __name: "TabBar",
        props: {
            item: {
                type: Object,
                required: !0
            },
            active: {
                type: Number,
                required: !0
            },
            index: {
                type: Number,
                required: !0
            }
        },
        setup(e) {
            function a(i) {
                switch (i) {
                    case "/":
                        return "i-ph:house-fill";
                    case "/wallet":
                        return "i-icon-park-twotone:wallet-one";
                    case "/quan":
                        return "i-cryptocurrency:abt";
                    case "/invest":
                        return "i-ph:coins-fill";
                    case "/contract":
                        return "i-material-symbols:lightning-stand"
                }
            }
            return (i, r) => (s(), c("div", {
                class: u(["tab-item-inner", {
                    active: e.active === e.index
                }])
            }, [e.active !== e.index ? (s(), c("div", {
                key: 0,
                class: u(["tab-item-icon", `${a(e.item.path)}`])
            }, null, 2)) : o("", !0), e.active === e.index ? (s(), c(z, {
                key: 1
            }, [t("div", Ja, b(i.$t(e.item.label)), 1), Ha], 64)) : o("", !0)], 2))
        }
    }),
    Oa = y(Xa, [
        ["__scopeId", "data-v-cce71dec"]
    ]),
    Va = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEVHcExyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFGnwLPAAAAKXRSTlMA9er6DxOWUC9gGgZIsIc+ZO3R8FndxI645MwLninYIb43JHtufTSlqeH1DucAAAE4SURBVEjH7ZbHbsMwEESXktWL1eXe2/v/H8whEiLJlsVTEASeC8HFPIIYkguKfNSoOCjyKNS1+xXfimZafndJq8zX8Ic5YMRJnQPL7aQ/MYHKEpH9DkjnE/4Y4BGIiIhVAcp5Zw/uAHE7XUcAl3G/VQEknYrdW2Co/Q5Q/fTPAJvgpf9oAEt3UPVMYPHqQBz1OvhQAavn+oWxlW4GUJ4G1frNXk8lYBx7cUYA59H0VsM0YsAsxvNeLwCzc+jG5B3YAKufKeBN3Bkb6AHOBOD8BWBv79Ks9rUBRwGQh5rAzWzetdrqAQdgcT0AkRbgA7aI3MFc6wBzwG3GrQ7gADMRcRvwA/wSUEwARQ8wIEu8ruoOcPU8L8nAGPTcJ7VAK7vTeEoNoLS6rcpOn/x5ICJ++yxS2/o3n4Qv3V9MVPmP01IAAAAASUVORK5CYII=",
    Wa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADMElEQVRoge2ZW4hNURjHfwzj3gyRxq3mxYlyaagZt9wy0SCiIR7UICTJE7lFbmlKYcKI5sGtNKGQCSHXlAd58GTyoCgzE40xEWO06tv5Zs3sc/Y+e59zBvv3cvb6zl5rff+1117ft9YmIiLi76ZLR97nzW0NIioLWAaUAYVAX+Az8Bg4BdwM0viHmrYudw3SWAcMAR4AF4DZ4rwhF5gP3ACuAjlhdRimgLHAc2BqgvsWAQ+BoWF0GpaAYuARMEzZPgKHgbXAUaBR/WfEPgNGB+24W9AGgNUyt3VbT2Sk65XNiLgFxKQ8XN6LhfKbFEGegHmbDgBnLOcvy/yvt+5/C0wBnipbf+AOsCTdArKB88B2y26mzHLgu0u9BmAOcE3Zeorojck4koyAAcBdYIWy/QLWAduARGtwM7BUpp32owI45La0u+FXQL5MgWnK1gSUAKd9tNMCbAB2WXYzAFXyhEMXUCjLZEzZ3ouYGh/taPZLwPupbKuA60A/Lw14FbAYuA8MUrZXQBHwMinX/2BGfAHwVdmKJSAOTlTZi4AtQDXQS9luy8i/C+C4xjzBGUCdMhZIrBgZr2I8ASanOQYcse47K2lBY5y6yfACmAS8UXXzJaYU+RWQLaO+ybLvANYAP0J23qEWmCxiHAYC92TQ2uEmYI9EUgfj8ErgYIoc15hpNF2itoOZvleAmV4FlKnrTxJZL6bSa4tmebGrlLm7BMo2uAnQb/9mSdTSTYvkWSdUvxO8CtB8yYDzDq2SKzm08zfsDU3aiQT4wKzpx4HXkpWaSF5utuBBGg1jQ+MFk++fs6K5yWrHyI6tVKK7b9LxBCYClyznNTmyxo/qrALKZQ13MHnPbknWHPrI7s43qRaQJ0mag9kzzAP2AbOs4FgiQnyRagExq1yhrs0af1KVTf41orMJyLXKdvrdZJV7+O0gigOZJhKQaSIBmea/EOCWw6SLuP27ZaP1chpg2Ar0li2eXwp83m+O2sercpZ1MmKfeLsKMEcq6+V6nByhp4O9Cfqotg1uU2innNF0JmrFL08CGuQ0rFKuw8B8qfxmtVMX51uC9qVS/AnLl4iIfwPgN1oDhvbOPQeJAAAAAElFTkSuQmCC",
    Pa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAZlBMVEVHcExyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZHWBdywAAAAIXRSTlMA2Ox+9g83HwYwsVsYu8nS45hBE/JUqCyekk5G3nHEPoXqMS9XAAAByUlEQVRIx+2V2ZaqMBBFC4ghgowio0Pv///JfogQJaL26123nhjOrpxUqkDkf4iI7NK+aKAp+nT3hTyuFEuoKv4gN9GDHEBF5q2bDEAll3q/ry+JAsje+DoWgIqOy32kgOK46ScHrk+u4yuQb7kagHb10rTA8FqvgcxLZjJAvwSuUDr77qqE69YC6VytBJK5OunGEhUEsz4HyGcigOoFcIbI6ZvGERGcff1hWXiXQ6O1IzRw8IAbYEuUQahFdAiZLRRw84AThPasIOxERLoQ7CmGcPKAFMrZm6pFRGo1Oyld/VxMoOxVC2oSmRS09omCyQP2y85MAmocFSRmqcfe7zwWoyYB5fRyAuW1zG7KFwdiEnB6aaE4reqqQ3iothmUGmZ9DEBTPwGBHcji5C19uNhcS9/YWGY4HLrHjaWZG+81kA73VEV/H7pb39yzROMLYP+Q73wxXXS+qytti+4DIhLPsjkSu6tNQESmYFEXl8PDsW4BInFrv2bB+NQH24CIjDkAWfwtIFJnAMX3gMgYuNP6ChCTVt2fgFXzr4H6HVCvgQD6d0C/br4foNLxRugK+Hmen5IPUa7+K90Houy8GY2CbXkQ7eQfil/2tkbZq6bMlwAAAABJRU5ErkJggg==",
    Ka = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEgklEQVRoge2Za4hVVRiGn8mcdEqyiYmmsKyMlO5QMmVEatkQRJr5p8JLBP0JIciIIrB+FGQ/KioIhu5JmGGNSsdI/RURFGZFKaipSafb2HShdHI0vng3fGz22nvtc/aRovPC5nxr7XV5372+tda31qGNNtr4b6MjxL63/0hZYROAm4BrgUuBs5Rn+A34GtgCvA+8o7xo1GvZVKsQMAl4EFgMHBdZ50/gFeBRYG9MhZCAY2JZZmAMcD+wHbirBHnDeNXZpjbGNEri2AbrTQRWA7NT+QeBDcBG4AtgSPndwIUq3w90OiGPAdcB84HhskQacaEeYDNwvsv7A1gBPA3sL+jTxCwFlgFdLt8EzwJ+zKpUlQuZmwymyH8ATAWWR5BHZazsNNVNcIHaLuOKpQU8AfS59Bv6at+UbAdN3llqI0Gf+ohGGQFXAne7tPn67cBIA+QTjKiNDS7P+riiFQIed3YduBUYLajToycPo2qr7sqsqFqADe0Ml15W4O8nAmuAH/SsUV4I+9VmghkpV21awGJn70j5bRb594C5Lm+u8vJErFTbCRbFEIsV0O/sV3NcJyE/Xelf9aC8PBFHtDsnuCGGWIyAU4EzXfrdSPIW68zREyui5uwzgFOqEHCesw8DWwPl3nLkh7S7fqRnjtuVp6tsFraqjwTTqhDQ7eyhwLI5yYUVVmamiCcw+xonYrbqpGFt/+TyTqpCgN8ZDwTK/OXsrsDS2ZMKHQ4F2vIfaHwRuRgBvzi7O1DmO2CV63SddtkEdkZY7witSq37Hv6r/1xELiYa/dbZxwOnpfISLBLBG/VrE/IWvbPIdazstTlLZK/6SPB9EbmYEfgyNdyhbf6ACK9VeqyIe/KDKhNyxaucPaIItSkBEzQh/cqzIKf8iAgOOhH+yy8oiJ3mO3ubjqi5S2neeaBPvnxy6tUh7QtZbpSgU1HlnUoPAPcWkLd1f2eGW/9uQuq1jk1ZlfJGYCCDPOpgvb5WZ8Z7RHSpVp0u2SHy5vf3AZ8E5uQJwPMhknkjEHOqt9PTa8ALMf7qMA64GVioDa9wLtZrHZlcywRzz2ScWW1tvwf4XM+ArlOyYASuVhmLUF8Hrs/gMKQT27wYYrEjYPc8n2pTmyffnpnzAfYATwHPAedq8trXnhwoP6wI14K5D5V3ie6R/kFoBMoK8JgsUnekgr1Y2GJge8XLWqEOpupFCWjmXmg38Ahwjlxhe2S9LXK707Xprc4gH41mBCQYVYg8VQHaSt28ZcEOLA8BT2oeNI0qBHjsA27T0mmnsI9T76dob7H70bP/jQI87AL3cgV1G1PvLJx+u4pOWikgwWZFo+bvX7n80CZYCo3ejTaCdTqO2sp1GfBsFY0eTQFowr+opxLkuZA/m+Zdh7QKEwNcogXscnbUHU3FWOia2xlqOs+F7Nj3gOwliiZf0vGxlehV7LXE9fFmqL+8UMKG8LPA7cHRhN18X1SvdWT++ZHnQsO6HYv6D6tF2CsOwX9uivYBi/EvBh5WrBOcTBXisPparr7LnDPaaOP/BeBvVub9l8tZNGsAAAAASUVORK5CYII=",
    $a = "data:image/png;base64,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",
    es = "data:image/png;base64,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",
    ts = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAbFBMVEVHcExyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFRb48cAAAAI3RSTlMA6C7aaPpwB+Dj8hAOnrF3xRvuqUa5gmHQl00nWjok9ItTWAiCiFwAAAFVSURBVEjH7ZXLkoIwEEUvgYhEQF6+ddQ5//+Ps3CEaImRxezm7jrp5HS6blekf/2tFrMqYlTxOn/KnzneKzN+etoCEM1H5IBs4eWXwPY7Hy9438B6CFfA5f0TrxAP9QPLQE9SC30QP+BeK4dzHwBp6MAMqj5wcAhVFMGmj0qITRCQDVUYC+fjq3tzD5B4G10D7J7fcSrc6iVA0tcWqGp/ZT0fCn0GSEoLoOnuRkwqgDYfA0jSxgKFkdJ9awFsIo0CJMnEAC6zN3fOTyMt8iai8NxcLhQASJLZxeAA61srGQHc70vAdv5CNgrorfhg3QBAB3DpFMAVyikAbaCYAtAeVlMAqsEuJgCkyu9SGCAdvZw0g1loetNsmMYEouC4awnbCQApd9BNAEiX385+CJBqC2YCQGphW+vUfAiQDhZsA8SfAaTjbU4j8/EHZkpHtKv/f3JJ+gFWUSsLudCXqQAAAABJRU5ErkJggg==",
    ns = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADj0lEQVRoge2ZbWhPURzHPwxNSFp53ITMQx7ylEjyCotsL/aCvLFZHlJGIhF5QUIhSh5iSMQokdgbIqUoszWlxFJ7sWkv2CyPm+nod/m5/e//nnv/99pe3O+b/7nn/M49v+/3/M45v3v+JEiQIEGCTNAjVd9hBZ2pqgcBpUAhMAEY7NU/QhhHXgOVwGGgxby6servsDYEjE05sBcY0IXh0gAsBeo0gV4+nfoAV4DiFG3NwOfI3fwXOUB/qckD7gGTnJnAh0C2TN0yVVcLHADuAq0xO4/MvgnZ8xLCI4BtwC7HoKdHxyzgpsv5Q8BM4Op/ch5ZA7eANapuuTbwIrAJKFDPO4DtQEc8fvrCkPghRmO1sRcBzXiPhE1Xoh/QW8b/YkNgvPx2dgPnke3bwXPd4EWgTX7NIhodq2v+6Cvh6+CC7uFF4IEq35atq6uwDhgqY5uz4JINAbNNfZfyOOApsDJiAkZZv4PRrf5+5ddveBF4CSwBPsqzWUSXgRNyuIWFCckFwDngPXDd5z1u9SvcBl4EDO4Ds+TwcrABeAyMDEggX1KReuAhsNqkNHIoecFXfT8CBm+BuXISOpgNVAOLffqak3M98EQSMhOWo6StUsSpS9PfV30bAsi+axQrA75JnclRqoCzwGRla1QrktBoAk6KAA6MghvlNP2UZkwr9QmYThtMB24AY1z1LeLQEHXguPFOHH+WxnEHm4GjUm6Q0/cPAZ2N2syAxguZ+ouu+oFAbhrn7wAzLJ3PtlWfEAQMPgAlwDTgNPAG+CltbS7bDnGmUPrZoMQm9h34fQ+kQ60sUiQUjXKrJO6R5KtIcnhbmC16p7JNqz4hZyAVOmWxb1FtuwM6j2wWeVL2VZ8ICSAJYL6UW9QitEVg9aMmoLfTRzaDuxBYfSImoPMa2wXrIJT6REygWZVzA/YNpT4RE6hW5fmSStggtPpETKBR8h7EqbWW/UKrT8QEkHTbQblF6u1W/0jQxR81gUpR0WA4sMLHXqvfJCd7IERNoB04rp63prF1q3/QfeNgg6gJGJxRqfIUYKGHXcbqExOBViHhINUsRKI+MREwOKZu8RYBU13tZZnGvoO4CJiFfE09VyiH5wH7VFto9QnxRRYEE4EatZV2yC1HjnpHvdw5fQ3y4ky+yILglVwJtkufLJfzJvUoDuq8G3ESQP4cmSNX9c7XmrkPOiVfdDUxj58gQYJuDeAXra3BWR2wL00AAAAASUVORK5CYII=",
    as = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAe1BMVEVHcExyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZHM42LLAAAAKHRSTlMALO/iNQXAYPqra1weI4a7RrEJpA0R1fSMQRWBGkxR3Dycd8oof9AUigXdMwAAAWRJREFUGBntwelyokAAhdELNKSb1X3fNcn3/k8YLAvUjDbU/Jyac/Tf38o/zyHh+TNXL/HCcmPLWN1GCXfJSJ2G1L7KtPyiNlSXDAh3utqFQKYOM7BGN8bCTH4rYKHGAljJywCBGgFg5LUEYjViYCmvAzBRYwIc5BUAAzW2QCCvkYVEjQTsSH5DYK2bNTBUh8AC7iLp4gAbqEvKVXSOuErVLbU0bKo+TMJNYtTTZpue0u1GfcXfeVEU+XesHqbZOKIRjbOpvIyzPLPuoLeCileqQC/FpeUqdKfBZTrdBIOTC7myZaw/rRJq1i31IB6MLbVkpd82M2qu0G+Fo7bP9WwyA8KdXtmGwGyiJw7YF3qt2ANDPcqAKNc7eQRkuosjsEbvGQvRSK0MWMinBD7UqmA+lc9kDolacxjL7whztYC1/NaAWiFU8qsgUssBxw+fIzBWy9CH0V1Kt1SPlpXFxyYD/TN+ADUbQbxglO8eAAAAAElFTkSuQmCC",
    ss = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADvklEQVRoge2Y+UtVQRTHP5ZJWRYFBdKiv7QISVCJWmFFCxItopGUpPQPlAVSGG1QtNFGG0FEBRFRWZCUFK20km3QQpBLYoqthkWUaTFwHozDu7777h17/fC+cGHOnTNzzpntfGeIIooooogoYoIZT8z+48enZKAImA0MB/oBzcAboBw4BtR67byxoqPLNgOIAzYCK4Dunej9BnYAa4Ff4RoxA+jmxdMg6AVcAUpCOK8QC6wELgPxfg3H+u1AZvEUkGX8fwZcBN4Dg4BZwBitfjJwEsgBPK9ZGwEUAHM0+SuwBDhn6JUCucAR2RcKc4FFwAmvxm0soVKtrNZ0dhDnAyiTen3tr/Zj3G8AA4EUTd4H3A/RRtUf0OQU6ccT/AaQZMhHXbYz9YZFKoA+hvzaZbtXhpzg1QG/AbQbck+X7Uy9Nq8O+A3gsyFPdNluUoh+XMNvAFWSWQMoccruGmJELwDVvjpSAfyQZBXAVGB9iDYbgCmafEH68QQbeUCd462arDjOGeN4ReSzwBrtX6shhw0bATwHio1/ecBLoEbO/VqRcw29ZcALP8ZtUAkkMSkSt8sgc8nymVDrfjlw0K9hW2xUYS+QDtwMoafqMyRr+4atGQjgkWzQRGA8MFiS3TfgndQ32DRoOwDkYqM251Mj4/4UEhfn5SLjBBsBDBCuny0JyuRHwfAWuC2XmnI/icxPAOlyfcyRUQ0HSfIVyGycB3YD98J1wssmTpXrozoeF3hw3kSc9HNXZiQ1nMbhzECsZNFVDoF/Aq7LRn0sy6RJ6uJlqanNPQ4YC0wH+ht9zACeAFuBdQZNCQq3rxLqwnFa7rE62iS7HpLjMRxW2QOYBhTKDJiPAbeA+cAH/aeXV4lEcc50Xl0PRwH5wDUPlFidVBVyJx4pA6QjSzb6kM46CRVAgqxLndc0C1XIk8cqG6iSWVCPA1+0/kYAl4C+XgNQLwijNVnR3jQZ/a5AuSTAKq1vZf+4lwDyZQ0G0CB02daoO6Fasnmd9m8esDiYslMA6mjbrsntwiTrHPRto16WqH4KbZYXQFcBqNEfqsk7gQf/yPkAKoFtmqx41UJTySmAQq38HdjUJS6GxhagRdMqMls4BZCplcvk5IkEWozjNc1tAL21ck2EnA+gXiu73gMftXKmg86/QoZmp8m06cSFrspGRvjJYeCOn2dwD1CcYQIw0/CrA5y4kCJbDy1fOW0grbEiplLvx8lBxSaX/mfOF8vR2gGdjfB+YYvX5DoYCSi7N2QZ7YmQD1FE8f8C+AtiZrbGAIQDrgAAAABJRU5ErkJggg==",
    is = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEVHcExyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFGnwLPAAAAKXRSTlMA9er6DxOWUC9gGgZIsIc+ZO3R8FndxI645MwLninYIb43JHtufTSlqeH1DucAAAE4SURBVEjH7ZbHbsMwEESXktWL1eXe2/v/H8whEiLJlsVTEASeC8HFPIIYkguKfNSoOCjyKNS1+xXfimZafndJq8zX8Ic5YMRJnQPL7aQ/MYHKEpH9DkjnE/4Y4BGIiIhVAcp5Zw/uAHE7XUcAl3G/VQEknYrdW2Co/Q5Q/fTPAJvgpf9oAEt3UPVMYPHqQBz1OvhQAavn+oWxlW4GUJ4G1frNXk8lYBx7cUYA59H0VsM0YsAsxvNeLwCzc+jG5B3YAKufKeBN3Bkb6AHOBOD8BWBv79Ks9rUBRwGQh5rAzWzetdrqAQdgcT0AkRbgA7aI3MFc6wBzwG3GrQ7gADMRcRvwA/wSUEwARQ8wIEu8ruoOcPU8L8nAGPTcJ7VAK7vTeEoNoLS6rcpOn/x5ICJ++yxS2/o3n4Qv3V9MVPmP01IAAAAASUVORK5CYII=",
    cs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACmlBMVEVHcEzswafswafdr5TVpYnOnoHitZrswafIlnjbrZHswafswafswafswafswafswafswafswafswafswafswafswafswafswafswafswafswafswafswafrwKbswafswafswafswafswafswafswafswafswafswafswafswafswafswafswafswafdr5TQoIPIlnjTo4fFk3TovaLpvqTaq4/Fk3TGlHXjt5zYqY3itZrbrZHbrZHdr5Tmup/luJ3rwKbfsZbYqY3Jl3raq4/Lmn3pvqTfsZbIlnjluJ3brZHOnoHFk3TWp4vaq4/brZHHlXfKmXvNnH/KmXvswafJl3rOnoHKmXvLmn3IlnjluJ3GlHXqv6XpvqTqv6XovaLKmXvTo4fFk3TQoIPNnH/Ilnjmup/IlnjRooXQoIPKmXvitZrGlHXLmn3Fk3Tgs5jrwKbswafgs5jJl3ritZrjt5zpvqTNnH/OnoHLmn3mup/luJ3Jl3rTo4fRooXnu6HGlHXQoIPHlXfitZrJl3rOnoHQoIPHlXfVpYnWp4vOnoHpvqTRooXQoIPVpYnYqY3RooXqv6XswafovaLNnH/To4fnu6HitZrdr5TovaLOnoHmup/qv6XWp4vmup/YqY3jt5zjt5znu6HIlnjrwKbVpYnVpYnFk3TLmn3nu6HVpYnNnH/Wp4vfsZbbrZHVpYnYqY3VpYnaq4/RooXaq4/To4fdr5TYqY3fsZbWp4vRooXWp4vbrZHTo4fbrZHgs5jswafHlXfGlHXTo4fFk3TRooXgs5jfsZbdr5TQoIPNnH/nu6HKmXvLmn3rwKbJl3rqv6XovaLmup/luJ3OnoHVpYnbrZHIlnjitZrpvqTjt5zaq4/YqY3Wp4tY7HAUAAAAwHRSTlMAYAYhMDBQUFAQ3NFZcZzqmNiXWpIUXbnQPQXs6x36IRIO/VGG9gPu6K9jE3o38WtZ+MouYMUT+rwPGdgI7wNgYJCvYwpgSO+VB0vql+KvEzgNoLbCnn7NudBaFGD7MGYDYespASap7Pv0YJJMBkG/5QFk3vNgRtuHy2DEATxIiNz59ogXI66YPBsp/f007tFTY6XxFffjQLNgCwHzl8MD6RQa64UbKv0KYHxgv1OTpX2L1vS38Pbt+tJGAS0ZmTQF99XpAAAB5klEQVRIx2NgGAUQYBdlUXLMfYYXseoXzbt868ax4yeu+VkSpd542iWohtv9nUSoL5t8+tLlBc1FjnrXbt/xXUZQ/cTYi6cvVS8Espitb9+521eLX3nhkgs3L55O8wRz/E3v3L06dQI+9UyTzgE11M+Gcl2c7l493KOPW71CyIFzF7rjEQLz5149fPRkRQoO9fKCBw6cm+OGIrYKqOFKUC5W9br8Bw4cKIhDE03MOHnlVEQgFvXKqkD13LIY4nWZV06dDW/BEOdVAqoXV8RiUq/3qbNnilNRBdVEgMoP8ElhdWtr+dkz5xcHoASnJki9Dq7Qm1J55vz1phwkERWgcjlh3OG9Ivj89YPmeQgBjQMH1CXxxWhC6PWDh4wQfKAFYvjTTI3HwUPLUTSwE0iUHAcPHRlwDczrNm3fuXEv0RrWbgPmuLtXt+4iUsP+HSfAGg5vTiZOQz6wENiyYQ0wP7QRpcEKWGrsY2DYvf7w0cZZxGiYDtSwB0h3ADNQFzEa2IAaOIE0C1AD66gG+mngIaDBAEWDzIEDElqMIOAQYzJzZZV9aTaShrDVrlnOkQcPJSE0CB2AAVDpfRpaA8E0AEs+YDFz8JAPQoM2FxEaGsyQnCwqII2hwdYGKLHUEKohvT162LQSABSOezC6Ji/lAAAAAElFTkSuQmCC",
    os = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAZlBMVEVHcExyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZHWBdywAAAAIXRSTlMA2Ox+9g83HwYwsVsYu8nS45hBE/JUqCyekk5G3nHEPoXqMS9XAAAByUlEQVRIx+2V2ZaqMBBFC4ghgowio0Pv///JfogQJaL26123nhjOrpxUqkDkf4iI7NK+aKAp+nT3hTyuFEuoKv4gN9GDHEBF5q2bDEAll3q/ry+JAsje+DoWgIqOy32kgOK46ScHrk+u4yuQb7kagHb10rTA8FqvgcxLZjJAvwSuUDr77qqE69YC6VytBJK5OunGEhUEsz4HyGcigOoFcIbI6ZvGERGcff1hWXiXQ6O1IzRw8IAbYEuUQahFdAiZLRRw84AThPasIOxERLoQ7CmGcPKAFMrZm6pFRGo1Oyld/VxMoOxVC2oSmRS09omCyQP2y85MAmocFSRmqcfe7zwWoyYB5fRyAuW1zG7KFwdiEnB6aaE4reqqQ3iothmUGmZ9DEBTPwGBHcji5C19uNhcS9/YWGY4HLrHjaWZG+81kA73VEV/H7pb39yzROMLYP+Q73wxXXS+qytti+4DIhLPsjkSu6tNQESmYFEXl8PDsW4BInFrv2bB+NQH24CIjDkAWfwtIFJnAMX3gMgYuNP6ChCTVt2fgFXzr4H6HVCvgQD6d0C/br4foNLxRugK+Hmen5IPUa7+K90Houy8GY2CbXkQ7eQfil/2tkbZq6bMlwAAAABJRU5ErkJggg==",
    rs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAADAFBMVEVHcEzhtJnluJ3PnoHrwKbXp4vesJTgs5fswafIlnjfsZXZqo7mup/gs5fswafswafswafLmnzLmn3dr5TSooXkt5zQoIPesJTqv6Tjt5vswafswafswafswafrwKXswafrwKXswafJl3nGlHXswafswafswafswafswafswafqvqTIlnfaq4/IlnfLmnzswafovKHWp4vrwKXluJ3aq4/kt5zWp4vesJTgs5fmup/itprgs5fluJ3swafswafswafswafswafUpYnswafswafswafswafMm37Fk3TWp4vitprswafqv6XcrpLIlnjswafIlnjqv6XrwKbluZ7Fk3TswafswafIlnjJmHrOnYDMm37itprMm37Fk3TovKLnu6Daq4/ovKLswafswafFk3Tnu6DMm37kt5zswafdsJTswafGlHbswafswafLmnzOnYDJmHrswafOnYDPn4LFk3TGlHbswafswafYqY3htJjswafUpYnswafGlHbOnYDLmnzMm37UpYnJmHrPn4LOnYDRoYTPn4LTo4bdsJTHlXfHlXfhtJjRoYTaq4/YqY3IlnjHlXfIlnjUpYnfspbWp4vOnYDRoYTMm37To4bWp4vMm37luZ7HlXfaq4/To4bMm37Pn4LYqY3HlXfdsJTUpYnYqY3LmnzPn4LcrpLUpYnLmnzLmnzIlnjluZ7aq4/ovKLnu6DYqY3UpYnTo4bpvqPrwKbkt5zWp4vcrpLqv6Xqv6XYqY3UpYnWp4vYqY3RoYTpvqPkt5zcrpLdsJThtJjWp4vcrpLYqY3fspbitprovKLfspbhtJjUpYnitprdsJTovKLdsJTcrpLaq4/crpLovKLYqY3luZ7aq4/kt5znu6DluZ7aq4/dsJTcrpLfspbkt5zdsJTitprhtJjswafHlXfJmHrGlHbLmnzYqY3aq4/crpLfspbdsJTIlnjhtJjitprnu6DluZ7Fk3TWp4vkt5zMm37ovKLOnYDPn4LpvqPrwKbRoYTqv6XTo4bUpYn6+6O+AAAA5HRSTlMAASAgICAHBjAwIA8PN/04EDkWAx4NGUEdQtuTmOIsP0YafxB+1OpT+1gS4QVQ/bz4CBixsfa8LE6y8hXJxFvhntgqgIXmOtv9lXFR4EyeNTiOp6WFzy9Amev7T6jb0xzW2EnvQpzH4Li89OLMFZOXxOzmEtrzqF9hy+DYxyxb7BXS2LgQVL3EgT8xL/0+nNFZl/svcNOnNbjyVSFU27N970tI8lrO9HbfIunj+aCggFxc9faYeG6A0fbE+Zj2Enj10W6S9qmysvaSCPr6Hfr6qUT29uy8yezsLcn2ya/J8ezxr/HSaqtDAAAC5ElEQVRIx+2WVVQbURCGty0NFRJKg7tL8eJQd3d3d3d3d3d3d3d3d9dh2SQQSBpBAvSuActuUvra0/8hZ3bO/5079+7M3mDYf5GyOXb4enxq8s5zR47bFMFufypMpdampSanKOSyy5es/2CXnj6fqc8HNLknr0pN+cuFZmVn6sMizjgsXGl3I/KiJjfHMGeWcf9gH8jKvna0Avt85eyJHEPG6mnG/KJJAFkX7AumrOcaMtL7iIwATgDQwpybM1+Tka4bIuyvg/z9eFuUzkzXEVaCQGWA2nnlJySw0cgROmKYkN8SLVCFiS1+pCZ/Lss8TNEReDMBwBnAkSnIohL5Hr4wRLG6BL5cAJgA4M36tWk/v6YoPjHEVgIP5Psrooqa0v4Pam28WPxdIX9DE2sJXFmeB7gBSOgjfa1SfxNjmPiVXBZNH20IrpzPAxoC+NLdp1e9fU8GMe9kmsdU6gCuDOYBAQAudG161UcHMrB7KdPYUqmDuHIZD+gBMICOnqnUUYh4/kIuu01n9uDKHTygDdq0BxU9iFNrn8TGPlXI74ZTCVu06QU8IMgfwI/pnzht2qOHKYpIpq82EPihIN5cug8CGMN2XAT54u6wfdiJwJduKnSulsNRReDvwRL3b927yfqtO6CSEkf34gA+QKm1n3nhpW33tteRQFJnThpY+TZ3LZAO37VuEZoHCvhVGBjr1BP9opnu0nsj3XSLl6xHM42AqZ7BAkApTBQQKiE/Aip13waimHn7yK9GjmHbUDQ+pQUBJDPvRpzPzIots6mBNgqgkXTvngfsXsUepgkAqWvLKArYvD0vZRpA6jieKil6f1EB1Kv9yT1MLzqAYY27yTQT/wbApOPq1/groIB4gATAzRTQNjGpHifhCFDNFNAkMWkUJ1EL1eRsaUarOFIZpJKkSiBZtUPN14p7k7gw3Ur3Uv4NRDUf2a0DvbhrulY1DQRO5t1WNatLjAEhMzy9/qX/Cb8BaSrt3VWt50sAAAAASUVORK5CYII=",
    ls = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAMAAAC5KTl3AAAB5lBMVEVHcEzrwKbswafNnH/swafpvaPaq4/RooXqv6TswabXqIzqvqTswafswafrwKXmup/dr5PhtJnswafswafitZrrv6XMm33rv6XswKbswafMm33Mmn3fsZXmuZ7rv6XgspfGlHXHlXfGlXbswafswafrwKXarJDqv6XgspfXqIzluJ3To4bSooXrwKbRoIPSooXswafesJTswafPn4LUpYjswafnu6Dgs5fluJ3rv6XswafYqY3brZLbrJDZq4/Yqo3swafswafswafpvaPswafswafpvaPovaPgspfswafitZrFk3XswafSo4bPnoHhs5jFk3Xrv6XYqo3dr5PfspbVponjtpvUpYjHlXfLmn3gspfIlnjJmHrIlnjfsZbHlXfswafKmXvswafVponrwKbnu6Dkt53GlXbmup/Fk3XesJXswafnu6Hnu6HcrpLGlXbYqY3Fk3XFk3XGlHbGlHbswafXqIzluZ/swafjtpvXqIzRooXitZrSo4bTpIfnu6DjtpvhtJnjtpvovKHswafgs5jSo4bluZ/muqDovKHOnYDbrZHpvaPNnH/crpLrv6XLmnzWp4vKmXrIl3nQoIPkt5zQn4LYqY3jtpvZqo7itZrrwKbfsZbesJTVponUpYjGlXbHlXfp8bQSAAAAhHRSTlMALdkMXA4JYAt34Lzz0NYGkbPFm/zdLVQadFt2sPhEwfqbvfeVi5A5kZDJ2NDpmTn4aPv4U+Hw8Eohp/kZc0V3WLMFEj3rQTekMVnwalzYmOD3g4hBkfdl1oj8ONjPd1wn9yq6Up2lUsLD4MB0dp39wER1GnZ89dM+cN99X0C2leDY4sWSFgDDAAADEElEQVRYw6XY91vaQBgA4E8UikUBB9UOwYEU3BO31tlabd3aXWurtVW797LjQBS3bV0d9D9tSC4xIWRefoHwcC+X5L5xAEgcJuf89OznuszAtbqHrkctrSbQdGQvzOaElpZ+7B0EAoFfv9fXw+GmJ23Nqsffs6wuL4dihP3dra27NarGJ1k3ViWEP3+LLymOP5t6uCEjBIMl5bLjzRkIKQjB72WJ0kCCAakQfl4+IXkHCpAqYaX6VHwgGSGVwsra6XhAIdIgrF2VnIFaYVM0iySkUdiMuRcJBZqFO4InYjYgzcL2Df66yEA6hO083lJGuoSd65yQqlO4KX4OGoWd21iw6hau4ISCdAv/7tOCRU5I83q9drvd4/H4fL6xsU8xQj6dE5G0MD4au3Y/VguEx8/5ARFHGBDHT5lAiLygPpqTEd6KhQmhQF2GqUJGmBELx4RCrgmcSEbY+6AkRJ7CSVnh4EvaGeoYlRaeCYJKaj2MyMwhD9KVhVtyV/EAahUFFmiNKwxCipJQiYHKd3GFPqgSju82CIVMFmjZPR5XyAXB+Ip+gCkHT8i8iIG2fQkhIhBqe6PfaSjlBA4YDu9LzoF3H9o7cdIbwkJOPQZGwpJCH+9ZvOSeWBYjcIB9XVoY5NZDt5NfwKJCTg8+G2AyzCv65L1oPTQyQHq2YPVPL4f8Xfj9BTZHTVAnicWiNcnEhdvGFq8O+sVm8Z9nAS7LNQ2X15QERXERjc2UJPa3+6symDfGBObVliabJ6Oxaa5Chim2+EUvKZl/NRQgL1D5AeYajfjrk3TaP8zi1VOXQq6O5iiY5J4hszQOh9g7AEaXUran8yQ+Oo56mNIGDBQp1gs6V+M+OJ0Xm1b6ujqLlCtOPgf0lAqi22IGaH6tumbF1Aw6uh2Fi371dRPM7aS1m7x/gC7iHgbcpH0UmB2kvRx5PwlwjrSnhaP6qbevPlpVunt7bhb69xfUvagg3OMA9JLus6iM4Cbc61HHG8L9Jt1lO8j2vHTCJNx30+V7/luIZO/PBFv9wkzR1/GA4v8P/wFsdv8auoYPjAAAAABJRU5ErkJggg==",
    us = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAMAAAC5KTl3AAAC61BMVEVHcEzswabswaf1zK7swafxxaX5yabfsZT43cT5yaX0xqfz18T1yqv/zabswaf33cT10rn04ND57Nz/zab35tbz1L/Mmn3RoYTMm37QoIPMm33swafJl3nIl3jyxaf028jGlHX217/HlXf30LLktpnGlHXuw6fGlHX45dPPn4LZq4/6yqbswabswaf1yarrwKb13cvy2cj10rf0yqr67+D00rnzyKj68ODgs5fhs5jrv6Xz18PovaLfspb11r70xKHFk3XFk3XKmXvOnYDRooXQn4LLmn3UpYjIlnjswafVpontwaf12MD2z7Pmup/rv6Tmup/esJXWp4vGlXbluZ/ovaLGlHbGlXbFk3Xz0bbzz7bYqY3dr5PZqo7arJDvwqHWp4v54Mrvw6f65M/65M//zabwxaj40bb6yqf/zab/zab5y6nswafswaf3yaf78+Pux6nryK346Nj23MThtJn36tv1zrLnu6DpvaP/zab1xKH1yqr20rX5487wxKf10bjswafrv6XLmXz78+XYqYzarJDgs5fIlnjGlXbitJnfsZbSo4btwqfovKHpvaLww6fnu6Der5PKmXvcrpLqvqTRn4LZqo7JmHnpvaPTpIfjtprVponOnYD47N3Mm33kt5zUpYjnup/PnoHNnH/Wp4vluJ7QoIPluZ/uwqf68eLx2cnw18f0xqfzxaf57+D36dnyxafz3c3SoYPxxKfy28vpvKDXpYftvp/57d779efrvaDz38/359jvwJ/04dHnuJvuwKL149PrvJ325dbswKTjs5PsvZ/gsZP36tvqvJ/uwaTrvqHYqIr1x6jUooXpupvoup7wwqXru5rktZjcq4vhsI/brI7yw6PerpDwwaLltZXmt5jpuZnltJP039DzxKXisZD0xaTjs5X2yKbgr4715NXwwqPbq4zerY3ouJjxwaD15NTxw6X47d71yq3bqoraqYrtvZztvZ300LXvvpzdrIzfr5H0z7PYpoeMUQI9AAAAgHRSTlMA2VzSdfMaDNMHLvvcTPjR/fj2EPP5dtc4Wy3+W9c26/rcm9LjwuB17Al1PNCZ8VL1/NLj9/vo+/D6u+FFndHc8OD398+ZiFLPwrryvePGocLg/VJ2dBq6RMn8wMP4RO4avJPb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",
    ms = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAbFBMVEVHcExyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFRb48cAAAAI3RSTlMA6C7aaPpwB+Dj8hAOnrF3xRvuqUa5gmHQl00nWjok9ItTWAiCiFwAAAFVSURBVEjH7ZXLkoIwEEUvgYhEQF6+ddQ5//+Ps3CEaImRxezm7jrp5HS6blekf/2tFrMqYlTxOn/KnzneKzN+etoCEM1H5IBs4eWXwPY7Hy9438B6CFfA5f0TrxAP9QPLQE9SC30QP+BeK4dzHwBp6MAMqj5wcAhVFMGmj0qITRCQDVUYC+fjq3tzD5B4G10D7J7fcSrc6iVA0tcWqGp/ZT0fCn0GSEoLoOnuRkwqgDYfA0jSxgKFkdJ9awFsIo0CJMnEAC6zN3fOTyMt8iai8NxcLhQASJLZxeAA61srGQHc70vAdv5CNgrorfhg3QBAB3DpFMAVyikAbaCYAtAeVlMAqsEuJgCkyu9SGCAdvZw0g1loetNsmMYEouC4awnbCQApd9BNAEiX385+CJBqC2YCQGphW+vUfAiQDhZsA8SfAaTjbU4j8/EHZkpHtKv/f3JJ+gFWUSsLudCXqQAAAABJRU5ErkJggg==",
    ds = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAC1lBMVEVHcEzYqY3itZrqvqTNnH7pvaLesZXJl3nRoYTgspfswafHlXfVpYjPnoHswKbswafkt5zswafkt5zswafswafkt5zpvqTovKHqvqTitZrkt5zHlnjUpYjIl3jWp4rRoYTMm33Pn4HQoIPTo4bswafswafswafswafhtJnswafswafluZ7swafswafswafswafjtpvswafmuqDswafrwKbswafgspfswafjtpvovKHswafrwKbswafswafqvqTkt5zswafswafswafkt5zswafdr5PswafWp4vswafswafFk3Xswafswafkt5zhtJnhtJnswafswafpvaPswafswafesZXrv6XWp4vswafbrZHgspfmuqDswafkt5zWp4vbrZHmuqDdr5PjtpvluZ7Fk3XjtpvesZXswafgspfYqY3YqY3swafdr5PqvqTovKHhtJnPn4HFk3XhtJnrwKbluZ7swafaq4/ovKHaq4/YqY3jtpvhtJnbrZHIl3nQoIPLmnzpvaPluZ7Wp4vovKHGlHbgspfaq4/NnYDIl3npvaPYqY3pvaPovKHovKHesZXpvaPVponKmHvSooXmuqDIl3nhtJnesZXTpIfluZ7GlHbluZ7Lmnzrv6XMm37Fk3XpvaPKmHvluZ7ovKHluZ7HlnjluZ7dr5PgspfYqY3Fk3XVponbrZHaq4/dr5PgspfesZXWp4vWp4vIl3nGlHbGlHbYqY3Il3nbrZHKmHvKmHvaq4/YqY3VponYqY3aq4/SooXKmHvTpIfLmnzMm37Wp4vLmnzNnYDIl3nVponLmnzKmHvMm37NnYDTpIfMm37Pn4HNnYDQoIPSooXswafmuqDluZ7jtpvkt5zhtJnovKHHlnjgspfGlHbbrZHWp4vIl3nVponKmHvTpIfMm37Pn4HNnYDSooXQoIPesZXdr5Paq4/YqY3LmnzrwKbrv6XpvaPqvqTFk3URBAMWAAAA03RSTlMABhEJCQYDBgYB/g8JaCwR+XL80PJ3DgTgHeDicGhocGji4mgIyey3dmIeqzGy+KBJeE9HnN2zL2j615ielfD6rH6JpUM2Iw1asPbZKym5xu8n4/lv39u49GwldOrlLT/i317yhNKDwK7Z8lj5/fMz4NtF4IzoqWidDVr74ILg81Ox4Nrk4ODg7kvgGcXg82DgT+DgU+Dg4Lwt+f7g4MMn2KBa4Prw4C4aYwjol+zM/DDdcGji6uc7cOft4udoaedo53Dn4udw4uLi4nDn4uII4mji8WLQTAAAAnJJREFUSMdjYBgFtAX8gumlXG/ffXh/88rV69du3H7x8u6r1/cePHr2/MnTx7MX1HKjKucMEbkMBLg0vHl4X3omsnpWB5DyyzHFcyQkeicvlpKa2jptWU1bV9OE6ZPqCtrn1j+8f6sFyQ4VXaBq4WwxnO7lnNhx604KnMumDlTvxIbXi1Nu3SmEcwSB6g0JhIn4kjsf4Ryry5cdCQUi9607XnAO12UuVkIaNt26Mw/OAYZoIAH1LNtu3VkJ53levuztg1/Djvu3trDDeXzBly9HeGBRxuMOs2Dn/VubkSRcAoDhZIvmD874iqxwKPsQMKbZkSXdhIE6VLWQRKLSEu++yoyDWnD04X1ZVOOYbYA61IyhPCYLf1BaKquE8k+/eXicHd29mnpALSZ8QL1G2gKgxJcTCQ+iw28eymL6UMcUlFrtgiwhqTXUFS5z7PGbU+zYcoQ+UvI2Y4KLnz/z+M0B7KFtbh2W+z4PqEFIgxMhyvv08Ul23AmZufzKVXsDJBEOxaePFfBFavOVq6LI/ItPnp5jx6N+/s0rS5GjkEPpyVO8FjTcvNKIzFd+/uQCPgsY+m9eWYhswaXnT3jxpsvOm1dmIFvw7LkiB14N3TevzELEAePZZ895CeSVHuRQknv0TImDgIZFV67GwoKJ8cSjZ/KEcq94wtXrSTALHjzaz0KwlI2+ej0VasGRB4/kCRfLYsnXrxWBWXvvPTjIQ0RBXnL9mh/Ygt33HsgQU/JLCl27sRxI73t9bw8PUXWF87Ub6yQZtu96fY8oCxgYfAVu3F6/Flg/bFxFZHVUVQ2uULZuILoCy8/oe7l6zYrRmhwEAG9MH62wz+qEAAAAAElFTkSuQmCC",
    As = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAe1BMVEVHcExyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZFyfZHM42LLAAAAKHRSTlMALO/iNQXAYPqra1weI4a7RrEJpA0R1fSMQRWBGkxR3Dycd8oof9AUigXdMwAAAWRJREFUGBntwelyokAAhdELNKSb1X3fNcn3/k8YLAvUjDbU/Jyac/Tf38o/zyHh+TNXL/HCcmPLWN1GCXfJSJ2G1L7KtPyiNlSXDAh3utqFQKYOM7BGN8bCTH4rYKHGAljJywCBGgFg5LUEYjViYCmvAzBRYwIc5BUAAzW2QCCvkYVEjQTsSH5DYK2bNTBUh8AC7iLp4gAbqEvKVXSOuErVLbU0bKo+TMJNYtTTZpue0u1GfcXfeVEU+XesHqbZOKIRjbOpvIyzPLPuoLeCileqQC/FpeUqdKfBZTrdBIOTC7myZaw/rRJq1i31IB6MLbVkpd82M2qu0G+Fo7bP9WwyA8KdXtmGwGyiJw7YF3qt2ANDPcqAKNc7eQRkuosjsEbvGQvRSK0MWMinBD7UqmA+lc9kDolacxjL7whztYC1/NaAWiFU8qsgUssBxw+fIzBWy9CH0V1Kt1SPlpXFxyYD/TN+ADUbQbxglO8eAAAAAElFTkSuQmCC",
    ps = "data:image/png;base64,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",
    bs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABZVBMVEVHcEyKXzWOYjeMYTaJXjWKXzWOYjeZaz2abD6JXjWNYTeKXzWYaj2Zaz2OYjeMYTaOYjeOYjeOYjeNYTeNYTeLXzaLXzaLXzaLXzaOYjeMYDaMYDaNYTePYziMYTaNYTeOYjeMYDaOYjeMYTaOYjePYziPYziPYziLXzaMYTaLXzWOYjeNYTePYziOYjeNYTeOYjeLXzaMYDaNYTeMYDaQYziPYziOYjeQYziPYziPYziPYziOYjePYziNYTeOYjeOYjeLXzWQYziOYjeMYDaOYjeMYDaMYTaOYjeOYjeLXzaNYTeXaTyZaz2Yaj2Zaz2Zaz2Zaz2Yaj2Yaj2abD6Zaz2Zaz2Zaz2abD6Zaz2Yaj2RZDmZaz2XaTybbT+PYziabD6TZjqOYjebbD6VZzuSZTmbbT6WaTyUZjqWaDuUZzqSZTqWaDyQYziVaDuNYTeUZzuRZTmQZDiMYDacbT+MYTaLXzb09XJ1AAAAWnRSTlMAltHAFqWTkFAaCOOQUA0bLfkp7DMDAX1wqA/k3diuTmjgG+Bc7Hvg9CnpmfWgC/kQ6WAkRPRiA/y/qvXx1ZLQKPT3ZQZOgsUIOglU+/dR7eDhbKetlxZiVAQ+Bg2sAAACyElEQVRIx93W53ubMBAHYGe1TZN077333jvde+8apxgwBhkQCGL//b3TQrg4dT+2v4959D53lsQpjcY/la3bdxcHd2z7C7F+KoX09+0aW+zf7Irs2TIeWLvKtWXcjQfGEZsm7SS3RPLE3rnuj+LRbVjP/Aji+8yykr0bVgYXbiW43nFCjONEvmU9vLaSeHE8t3xY38s6mKwXIsrPnhsFrh+7YbHIgfWUxBBCaAcQmLv368WhmwmUCLMOiYMlniCIATkRs64eqRNPjmJTvQ5F0BQBRWiGhZLTz38/DDvhggSwviWDKJZm8XJVnJx0h0S73ZZIGvvOK1NcOmMIsV5Em4jltnvvsRZXUte2mBNKAUs9kdI4kZXY7rOXikylUCQKMxoL4XldntLAvkFrbvpUkfNQBNsqxU8eQNzAvnVEa4cVkUVkW1oYJqayjCKiiG6Li+VlbqA3s4xJjCJSKFMto0mC21VTpCQBgY22Ek3svOzL+CVGZ7hpocMMAj8lo8EoUnaW2yWJ8BjhpmBfJtFnsxTAccKPUQS32DiULl/brRyn/DEjiRHPM0/TJGrDuPG6nhF+o2uIqFJeybaZ1qjG5L3//H1NNQsL397r22zumMOvcbP17kfNN/4WisjjN88F7jF+kG++1pCPOAPg/jOD5Pz7inFMfPiyupr5+U+vsYj4Mss7Bp31KFGjpdWsBGrEhH9k5YXhlx8/SpxfzeYw4AJGBjNvMnQW4QjTQ89MIAVMzZLgV+lLEwfV4KClKCJmfpUwYPj4xmlMCSEwjctQKsY5wxGjSV+YCEa+nPlGMgQooK20r0iRumjkw9KrBF8ZeDF4DbdfKHKRm0S8Xs5QxGuWo0iLU4pMDLhBZDHmm2GMiTcTukqLwYQi03NgOIKXVT2t6oXNE1wPJfrFYG5aX6LZmRMFR66rH3Ad/CP831AUD2ZmG/9bfgGwIDU7jbIquQAAAABJRU5ErkJggg==",
    fs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAB9VBMVEVHcEyfcS6fcS6fcS6fcS7Ls4f08eCfcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS709vCfcS6fcS6fcS6fcS6fcS714Jjw25ft15L14Jj035fz3ZX035f14Zzw2ZL14Jj14Jj14Zzz3Zbly4T14Jjw2pL14Jj14Jr14Jj14Jj14p714Jj14Jj14Zzz35r14Jjnzof14Jj14p714Jru14/y3Zf14Jj14Jj14Jj14Jj14JjiyIPt1o714Jj14Jj14Jj14qD14p7257P25q/14qD146P15Kbz4aH15qz15any4KTy3pz146P15an046Xdw4H15Kbt2Jjw3p+fcS7z466fcS7u26OfcS6fcS6fcS7bwoWfcS7fyIrz46n1+PKfcS7w8OfLtZHz9O2fcS7z9OyfcS68nnDi2cX29eXi1bj18+Ly8urPuI/n4dGfcS6fcS7x6tLz79mvilLNtYrz8N+wi1Hy79318t+fcS7n3L6idjSfcS6fcS7u6dSfcS7SvZSfcS6xjVfl3s32+fT14Jj17Mf27MT17cv268H29+/26r326br26Lb2+PH2+fL17s729+3179L29ur18NX29uj18dj25q/257P15qz15an15Kb146P14qD14p714Zz28tz29eX14Jr289/29OLB82iYAAAAhnRSTlMALgEGXZ2UHFRwUxsPBR8JRyBj+W08EU4ZCGIsquCt2/xoZX17shAbbsA65OD1TpMD2RAS+BvgMaUBKfpwAw447PXR7L/5wE6TKdREYJifCPXzC9EoWRroNo8XDgQNUgjK60qhLOsY80xOxPuNqu+UyDpi7vV5n5Vx6/tI0XAvM6dnp2B+za7riokAAAF3SURBVEjH1dZVUwIBEMBxBRVEuu3u7u7u7u7u7vbs7u7P6TjHcnACt/rm73XnP7NPO2tm9q8kuvsTAQmxvyi8fYlvnuHoIiiFIDkm4wLbYEIr3oeFKOLSCF1OXoyFWyqhzznadBDmQPwQ4WpqOb+od0NikowFIR4uL4aF2hsuIjOejQq0M7RcdvqTKUVl9KA455FBXoV+kVv+wKi0Une5gpJ7jMJmbZF/h9TSCEnWDVYtW5Nk3mJVVzWQyRFeTT2ZHOK11ZHJAV6TDZns4XE5ZLKDB8k2HiS7eJCc4kFyjgfJJR4k13iQvOpYmLKkWxunxpB8UCYWV9ct6IapOSSflLmZ+WVzmqUBag7Jm47ZlWkrmsF+agzJFR4kF3iQnOFBso8HyTEeJCd4kGzhQdKKLrohaUcnfTzNuejoRBZDkz1dZMLvHZEhAtnmxtgon0wEQrFUbs1MLhULBZqjLJIoVDwuE55KIRHB6WexlWoOM7WSzfrbG/UFo2RO5Gox358AAAAASUVORK5CYII=",
    vs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAB9VBMVEVHcEyTZjqMYDaMYDaOYjeOYjeNYTeNYTeMYDaNYTeNYTeNYTeNYTeMYTaUZjqUZjqUZjqUZjqTZjqTZjqTZjqUZjqUZjqUZjqUZjqTZjqNYTeTZjqUZjqUZjqNYTeUZjqUZjqUZjqUZjqNYTeUZjqTZjqNYTeMYDaNYTeMYDaNYTeMYTaNYTeNYTeMYDaNYTeMYDaMYTaMYTaMYTaMYDaMYDaNYTeMYDaMYTaMYDaNYTeMYTaMYDaUZjqUZjqUZjqUZjqUZzqUZjqUZjqNYTeUZjqMYDaOYjeOYjeUZzqUZjqUZzqUZjqUZjqNYTeOYjeUZjqJXjSJXTSMYTaUZjqNYTeTZjqTZjqUZzqUZjqMYTaOYjeKXjWNYTeNYTeMYTaUZjqMYTaNYTeUZjqUZjqUZzqUZjqMYDaUZjqHXDSUZjqIXTSIXTSUZjqKXjWOYjeOYjeOYjeMYTaMYDaMYTaMYTaMYDaMYTaLXzaJXjSNYTeOYjeMYDaMYTaOYjeNYTeMYTaLXzWOYjeOYjeNYTeMYDaOYjeOYjeNYTeNYTeNYTeOYjeMYTaNYTeNYTeNYTeNYTeOYjeMYDaNYTeTZjqUZjqRZDmOYjePYziSZTqUZzqSZTmQYziRZTmQZDiNYTeMYTaMYDaLXzWKXjWJXjSLXzaKXzWBQSXeAAAAlHRSTlMAKwYzQPlA5AH6/Nf3eCxDcy7VC+sYER74MLv11v2x8MHijeE4Xog18xG9fN2JPJcekdt+DXj0CEZi7I9mCQNjlq5+4ISrAsgj6UzD5Af5hI8++kc8N1Y+/cIDNzQDRzABI8jj6fZJB/kPOchacQP6mOpbpLCYJVi9qQfuA6VcJXfuW/LMGf6i0u6iA1YO/hnPNEjyWwOQdQAAAspJREFUSMft1mV72zAQAGC3DZaZmZm5HTMzMzMzdsy8eG4dx+rabb9z0p3AjtNuP6D3SY/it3eS5VM1bSGckTzc0Rr0GxD+YGvHcPI/QHfPKGEPT0KwERnt6Z4H9I+FCTxuWTYNywJGwmP9c4nOIADL/iHDtgAFOxOL8VRWEYBYFCKGiE6njicSA0SBKR4KkQGvGBGCgQgPRGhG4kVKmAkoSQJAUB4z4RS3GOolXGAKHUIloob0DrlInxQKSCRMn1O0DNKybK9QxqalDbY4SBsk4aKmvEKAivIaYViaNiVC7YZBywKRn6VpRdUoqos0LSsfDC3NMNpDkjQRKIuJ4hw2kZfL/nhuHhvnFDMDpZEmSTIowSR6Lc4klUUiZUk4rtUxDSUZklTCSpjQ6/lUQyTSwIf1bBOmYDWVkqSxuiCJXiDmSkrEqEDHNLSyNEmagcDuZnqPUibbayTNcpItBesys70kG14PLsZLTHNdYbwoPGkCiblIugGrp0lMc8Mit9i0T1ckXU7XcWKyWLbYKY6uorNYGF1LnZwvxcKQmEudZCs/abj8Ujnf6CLmciUuicOJ76VR/nBYbDI3S8QPu3WVhK1+hyT3H9C3H1Vp9q7H+T1nxQeAZ+ztGZW/y7DELkOcOg8HrUp9MXCSuxyLnHiFJ0YXpuq0pu3cyAGKSePTbefGvJbnEomun1ghgPwq37le2Ofn8mDqSBQQ4vtL90t+Nik+S+dXD4BWZdM2S67HH6WraHi/UK0Peh8Ttzzn9f01R1fizyOAxkduPvSQj1dktxQNORpTLflRgpvpg+ri0Pdj8Lxo/E9CCRr/jWl+uajbxcbbxSAvUhJdFZef/pwmBK48iwe/+siXO6sT3kfbZmd+U/Tm8dcta/zinjSMzcdXHpnr0rv4a/bPzN1vUPKhtQd8Pl8gENh1bP88N+u5C9vvHVz4F+Y/4i/pjYth3StdwQAAAABJRU5ErkJggg==",
    gs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAADAFBMVEVHcEyfcS6fcS6fcS6fcS6fcS6fcS6ofT2fcS6fcS6fcS6fcS6fcS7FrIOfcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6gci+fcS6fcS6fcS6fcS714Jj14JifcS6fcS6fcS6fcS6fcS6fcS7035efcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS71+PKfcS6/o3afcS6fcS6fcS6fcS714Jj14Jj14Jj14Jj2893y3JT146T14Zz14Jj14Jj146S/nV/168b079b28+D18+O4lmKfcS7d0rufcS6hdTOfcS6fcS7ApXrt69+hdDGfcS715a+fcS715az15Kfr15vw3qDGpmXy4abu25717cv14Jj14JjBnl314Zz18tzr4sL146Tn3Lr16Ljv5cP18trhyIP25q65ll3289314p714Jj27MT157Pw2pL14Jjy6sn14Zrr48r18tr17s/17Mf14Jj18NL18+K8nGft5MPw2ZHp38Hs1Y7w2ZH28+D17Mfm273p0pH18db18d714Jjw5sL07Mn14p715rD289315ar26rvv58by3pr27MP29OPq2KPlz5Hs5c7n4MvDqX7Tvpj1+PLz9Ovr26vt5crEqXz16b7PsnX2+fTx4KSkeTngyZD29+/bzbDw5L308+nl3sr2+fT06LnTuYHw4bD2+PHZzLH2+POfcS6fcS7k2b7u7eLt7OHPu5bi2cHw5sLi1LTOu5rz6L/19/LezqahdTO9oHKkeDm6mF3o4c7Jr4CxjFSfcS7p3bmlejq2lWPDo2jd0rvQtXu+nGDVu4LQvZ2/nmLu7ePcx5Xkz5by8+u7llinfDrZwYnq59rv3aTAnV6zjEvIsozm4NCxikvEo2XCoWTw3aS8mFm0jUypfz3fyI/14Jj2+fT14qH146T29un29eb29OP14p714Zr29+z14Zz15Kf28+D18db289329+72+PD18tr18NL2+fL17s/15ar17cv25q717Mf27MT268D26LX257H26rz26bmVzcAXAAAA4XRSTlMAAggYBlsDAQQHDw4WlCgqWE9ua1BpIUYMEh3l+lJkLRowKZIFGxQ1YEs4WkM//CKNVV1nK0aJvQY9DX37Hvz2F/r0/veCC7pibyA8j+BxPflI+/7c75X06Kvt7Csz+HARVdmi/UI1CisIZhGzbHjCYlP5jwc8ceUVi4BZbkDkwkaTVvOPueTbefDe9JPi6uDMmLi4Ij6lWTKpO3VgA+gzoPuD0PHNPvgo5v2z7zsny+Tio8XuxaHxW7pri3E205J7JtlmhHMVpYdapHjmo7HRh3SM2ud6gZjPc2aM5op+X79wGVQAAAAC8klEQVRIx2NgGAXIwMLUzFxa5iEYyEibm5laENBgqxz9EA1EKdvi0WDVIvMQC5BRtsKlo1T6IQ4gXYtdR5bdQ5zALpcRi468h3hBFRuGjoKXBEANB5qOWJvXBIBNKqo9me0vCIJeB3ZkLdaPiQCNTEg6EuyfEAHsY5C8Y/0GCYRGBMOYwRGhyDITueA62Lu+wUF4mJDQvRAIO+SakFBYOEJunj7cmrQfcBB0V9hIRPD+HRD7ykVjAUGRq0EI2TncMC0df+HggaisopSC0q2Av38DLsiJKylIKZ5DyC5ghgVazh84uG1oIsHIzil26c+f48aBYpzsjBInEbIT+FigWpL+w8FNf0mQQUx8R08Iy/KBQpV9BUJ2pboEVEv3Pzg4bcIJDhBuRUFBRW6wM2YgZJfrSEK1/EaAs9BAYePy8uKCpJDZSNKaPFAtvxBg+16oa9k5OCBeze5DkhZRgGpx/IkAix1Q02tJPZKko6wqVLjtOxJoTUfWwR6JLLcFriX/KzJIVkHSUowidQiupeczCqhEpL4yVJmdmsxQicR3qCAepqcJTWK/uBpUpsLpEwpIqYYEr2URqrjTYS1YImOa+R4VxDWACpSMTjThrawmsFzGONX5LSpoLmRksKxDE3R2FZSCl01ck56jg/J+DKH1ct6IPMYyy+UZQeBywPAgCyLCJBc9JQg2yelKIpUxLPqTXxEAm4UF9VmQ04XE/CUf8IJ9ntqKEigFGduUhR/xgaV7NNaqoRXL07/gAatWC2noMqMXytMe4QYbDYSN/BVU0HTMXYNTw4ZtfqKG6jzoOhiWQaTPnDJw99VDKNfzdd8tJMoqrsTFgVG97AApuHzdT1TDyGOXqw8vGPgc8RMS9RAQV2RmYsesw46d17thIGTMGqguryUuK6DNCgbaArLiWut43NiwVZScfALCcgI68swSTNw8Uvp8/GDApy/Fw83Cjr1u5WD21tRV4mFihJQuLJxgwMLBjqfOZ5FkluRkHzytHABapSZE71RWJAAAAABJRU5ErkJggg==",
    hs = "data:image/png;base64,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",
    ys = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAC4lBMVEVHcEz29/CfcS6fcS69n2+fcS6fcS6fcS6fcS6fcS6fcS6fcS714Jj14JifcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS714Jj14JifcS6fcS6fcS6fcS7z8uKfcS6fcS6fcS72+fSfcS6fcS6fcS6fcS6fcS6fcS6fcS7SwKCfcS6fcS6fcS719u72+POfcS6fcS6qgED29/CfcS6fcS714Jj14Jj14Jj14Jjr04u1jUnw2pLz3ZafcS728tzs5c308NushUqpgELu6dTz9O328dvq48z2+fSfcS6fcS7XxaLv6NCfcS6idjTIsYukeDjczrGzkFzf1Ljo0Y/2+fShdTO5mmrZxJf07czdw4GfcS65llzPsXCsgj/s6t3r59q0kVvz9eykeDW8l1WidTSfcS7AnmLp2a316Lvt2Zrl1q72+fLu25y1k1717Me9m2D16sD27MSfcS6fcS6mezrWv43Lr3jr3K/15a7ey56fcS7u4LHx4rK4k1avi1P17cuyi0327MPz5LG0j1H15bHIqW3t4LWfcS7Qs3br2Z6fcS7057f268H17Mbp5dbcxIfIqWufcS7168Lm0p2fcS717MfGpmmfcS716bzx47WfcS7FpGTUvIiofjzdxYuidTKthEP25q6fcS6fcS6fcS6fcS7St4Dz57zo1qTt37SidjP26bnq2KPx4ayrgUD15amvhkefcS7YwIz26rzp2Kbu3qrfy5qfcS60jk/x4KufcS726bnPtHzGpmX157X15bH15qz25q7Qs3PPsXHFpWr15amfcS69mlyfcS7x4KT15an05aufcS7fyYzLrGufcS7Zv4Ly4am/nV7AnmD14Jj2+fT18dj18NX14Jr179L14Zz14p717s728tz289/29OL17cv29eX15an17Mf29uj15qz14qD146P15Kb27MT268H25q/2+fL257P26r326Lb26bq8q+XuAAAA2XRSTlMA4QEEiydwVBxZGQb8AVEDGwU/Nkw+YmVPGhJQz2IVDBhF9QsOE/0WR2wHXlYiDCZkSIn+HR530249nvtezGsE16Ev/X/ZGjfNxP7YEDJcrucRbDFxuUWv1wpyIarzvUaFonrN2YGldHFgUo7W0N5toKp+8Tze9mppc0xF3fxZZ+buhXv6fun0OfmYWmuk31W/8drWuZla3Mor/oQg71YKbhI4tB5g/jgtSzWanyA5Y75n7Q+ie0pO7NXlV2aB603lRkbb0LLBODlA9Do8AkYD7w8MM2hS7nMn3ta1DgAAAkZJREFUSMft1kWU01AUgOGSwlSn7h13d8Xd3d3d3d3d3d3d3d0dOugAA8U60LR7Fnm9TUmTvHPY8q2enH+RTe4TCP4TBAYHyW085EHBgbSitA1LpQqQlLVhKi/0JOVwk4ohSpSUwU3klSNRYsMWHoKSN9gUZpS8wyYSo+Q9Nki+s2jZOYDSoz06geQHi07G5SJKT3QCyU8W/TdevnnjiVgs3joInUDyhcPt+/eIB0c9O0i++Vq6bD6sHz7LevT4Gmwh+UU3bl582oEt26nN8xfWOy+vey8hcdLMmj1XotGmrznsdDqd5889Nd29SruFxOU1o8+IBZsPHVHt2LbS5Tp97OyFW1doty5I3GDS5JG9Zy50H9xnWbVrz6kc4/FLF910kJAeE6dNMA3tR5LkuvWRa/WSxLgTJ0kfkBQjY3OMujHDqPXeTbE7d59ZVOwLEgel76i09NHT0caxYv+GOcMdf4HETuloCB8/xA5WL7YzQFJEadthwNQibpAUIu0K+UDyFhskr7FB8gobJFU+YKoNSbWPmBpCUvUTpgYKFUqq1/yMpU7juFiUhNZoEfGVV0SzpvXrhaJEGKbpNbgkj26t4xM1YfDrl0m1uiQJjySdVirzDiVhlDQ5tRSn1GRplNBn9hHKlIzcEixyM1LUaiXBGJgDf3PoLvQzYlvFFHCIaaNmJnULODVvxEyIWlxFV5OK+SlEky6ZbEHmkimKLGYiiNYb8gJY5Bn00X6+PyE73ypiYc3PTvD3LJFZzGIWZovsXx48fwB4atnpNfDk7QAAAABJRU5ErkJggg==",
    ws = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABPlBMVEVHcEyVZzuRZTmUZzuTZjqSZTmVZzuUZjqRZDmVaDuTZjqUZzuVaDuUZzqQZDiSZTqJXjWJXjWUZjqVZzuUZzqIXTSWaDuUZjqTZjqVaDuJXTSJXTSRZDmRZDmQZDiRZDmSZTmQZDiRZTmIXTSJXjSUZzuSZTqUZjqTZjqUZjqSZTmSZTqTZjqJXjWTZjqKXzWUZzqUZzqSZTmTZjqUZjqTZjqJXTSUZzqKXzWJXjSTZjqSZTqUZjqUZzqJXjWSZTqSZTqWaDuVaDuRZDmRZDmRZDmSZTmRZDmVZzuRZTmRZDmUZjqUZzuTZjqVaDuSZTmRZTmVaDuUZzqOYjePYziRZDmNYTeTZjqQYziMYDaSZTqUZzqUZjqRZTmVZzuQZDiMYTaSZTmUZzuWaDuVaDuLXzaKXzWLXzWKXjWJXjUY9nvkAAAAU3RSTlMAgPDgcPDgcPCAkIDg4Plw9fTg0JAG0JDQ0JWTBPNsE3nb1AeV0JDiV4D114CVi/WLkdr10NoHgPST4FcZ0JMZ4oDtn/7ukCNQSNrrkusI/pC1vw/wWTEAAAJESURBVEjH7ZbXlqMwDIYnZdlNn0zvbXvvvfdegcRmIUCWknn/F1jJMpnk2M7lXM1/kRN8/B3ZEvrF3NyJjk/Lm91RlnLOo6g3oSiCpTQbdTeXFWTjMMthP26zJyQwzvPscENB5jGE3O+MJSkMNK8goxxDyP2MsTCEH0lhoHykIBkRuD8MXSngBIRMpiApJ4LR/gBEFCOGpwoCQYBg7TOgcvmUULmMT22GTMRVRBA7W2r6t3YEoyIQxHH29TXbh7P1Ii3Ctnd1xO42hlERPFfoHux1OtVq9bQU/K129g5cF5ieBnGY68ae1+/3ff8vyffhyYsDNzQgoRvEHgFDEkFeDGFsW4/EIgYSA9SYCfBkCmLb4lwyyEAKGREmNCPfnywstCoVy2o2m5ZlVSqt1tfZyFNdki/1DQgm7I6+lPfhMgYkuPJSRzy7OwOJX924dvlho1Eq1Wqva6hSqXHrokiZCfEwYZCvJPmHSpIEkuabEJnkKQSYwcCIQCllXfSIY6h+4FHxJ5HhLAQu8/Pq2tq95+cXF9fXV1be4FUkEhqQ8N3nyaUfvyVhKGWEffxleu2TfMkMr6XoyvbHqbVvQyLg5df1C9nF+7e/Plyo1+urq0tLt//IJosDfVdy4RdQm6DoTNRRU2p6P+Vj55OQkEeEozOlnLyP3DKIgQLFMQBEaKwPjD8iFyeLDQqLFQ4LBptrh0Vh/axwcrT/wpJvKsg5McOiowFDo4ImTATz5bqCnH3czXKCpsaYGBQ8ffTiwcnHwTHqP3YuTG32HmIqAAAAAElFTkSuQmCC",
    xs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABiVBMVEVHcEzx47Tz3pmfcS6fcS6fcS6fcS6fcS6fcS6fcS717sv15aifcS6fcS7u586fcS6fcS6fcS729+ufcS6fcS6fcS6fcS6fcS6fcS6fcS714Jj14Jj14Jj09vD04Jvz5refcS6fcS6fcS6fcS714Jj14Jjy3JT035fw7+X2+POzkFvm4ND19/Hh2MTt6NTh2MX29+v17sv068akejr29+v09Ofp4Mf046Tz79jw3Jv19Obx5bv15ajRvpj17svy6cW6mmfw3qDw7Nnv25rw7t706sXz4qP289729OLHq3afcS7t4ryzjVHw5LrPtH6uhUP15ailejvr15nAnVvIr4PVuHX19uqfcS7v6dCfcS7Vt3T046afcS707crOs32fcS6idTKfcS6fcS6idTKfcS6fcS714Jj2+fT2+fL2+PD29+718tv18df18NP257D26LT178/15qz26bj14Zr29+v289729uj29OL29eX14Zz26rz15aj17sv14p/268D146L15KX17Mf27MQMxcpVAAAAZnRSTlMA7vdRGWxNHFRwgHBuGuVrF0qQBDdTDxhdb/QGk/n89FYbTm2V9Zv3ofYftPnCo8S/4vdwkfTV9vXp/OjViovrc+Lq66v5+P7+NUyabuqfa3lxijKYrJFP6R2tcjyBoSJyYTlxH18fBgHQAAABZklEQVRIx+3WRVMDQRSF0QCZCAQCZCZGIIK7u7u7uwf3GC6/nJqeEELfYl6xYUFxtre+bb/WaP79niyX06/C6cqCJM9PKLDwST6VFNr4xk8SrT9OdFouuSFJei65VeQkgpzoZOCTR2Zly+EwcXbnlQ2SZ1mvsO1JAp5mNkLyIhuYXNv0pnK8s41shOSe6Z5ZTeFNtSkbJFckSM5JkFyQILkmQXKncCcAd3SC5InZMJpyBU7uhLJB8iYbF/Yln47jk1rZCMmrrH9sZ08LhmvYCMkD0zm6nszrqFY2SC5JkJyRIDklQXJCgiTIDC6lfWoKfgFJWDY05xDMMdMN4XiQRGQ9ZvtiRsxIeyQeJCFZS5e4nB5jqwjFgyTA1PctZH6oqwp8AckxCZIjEiSHJEgOSJAUU0UZJEVUUgnPeElptlqQXV4Lx8Iq2gWjCsEOJ8liE3WS4VuSToTDp7FYtXoVWqvlD/5D3gHCvKf2PSSskwAAAABJRU5ErkJggg==",
    _s = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABU1BMVEVHcEyNYTeRZDmPYziJXjSLXzaPYziNYTeOYjeQZDiMYDaMYDaPYziLXzaLXzaJXTSJXjSKXzWJXjSKXjWJXjSLXzaKXzWKXzWLXzWSZTqLXzWLXzaLXzaRZDmMYDaLXzaMYDaLXzWLXzaTZjqLXzaKXzWOYjeLXzWOYjeMYDaPYziKXzWJXjSKXjWOYjeNYTeSZTmQYziRZTmNYTeMYDaJXjSLXzaSZTmUZjqSZTqUZzqUZzuVZzuTZjqUZzqVaDuUZzqVaDuUZjqLXzWKXzWMYTaLXzWLXzWRZDmKXzWJXjSRZDmNYTeMYTaTZjqLXzWJXjSTZjqTZjqTZjqUZzqVaDuOYjeTZjqRZDmPYziNYTeUZjqQYziSZTqWaTyXaTySZTmRZTmQZDiMYDaUZzqWaDyUZzuVaDuMYTaWaDuVZzuLXzaKXzWKXjWLXzWJXjSJXjWGUOByAAAAVnRSTlMA8wqRIE0GoTC+BC/++lA+mg5LQnvRLh4tyFKovyv94+mP9vwnFnL5CQvnAfLD3AiFaK5G8ebCAUVcbpO3AobQq8NCOvDUPzvN8bbOoNUNPrUO3dy63m1576MAAAKKSURBVEjH7dZFd+pQEABgqtTd3d3d7bk7ERJIciEJXEL7/1dvBNrS05Ow7KKz4LDgOzPXZojFXuNpDEz3t8v2/umBasH8qBDC9334HJ2vSgxNCl/n8MXkUBVicEroeoJD18XUYKRYPWChaRqbg9UoMgJVITAMAxHUNhJFxgQKw8Ew0IixCNE94ZNQMcj4E93h5AMkIWHbNhtdvAknHbASDYSFAQaI3xFOGqAuA4VpmmgMqKwhnLRiXaptmYqimJatYmWt4aSlBusigQYrq2mJ2LJ4ApMoHJgmEY86l6Y2g5Ikk0lKY7Q1Rd6YOqoriUGV1UVfy8ZmFepKZjIZSGOpzY1VXOXaHUyCBNLs1Fb1YA6P/6AA8/v4sNp3eX5zcfX36uLm/EW1l19HJ6dn15f/Lq/PTk+Ovkf+fnxreDbjel4um83mPM/NzA5vjYf8fmn7i20qIACkUilEbkYx7Y/bS8+DzYUVR4UjcfM5BGlEubwLh6M6Kwubz4jdDbj1Fhx73gORxgDj5eESwE3TNnafguU4Pq1yWSzAlEvDp/Z1uULMfaP3W5nkcRp80e/mHon3e9hXMElpJQ+EV2Or2Gv2ftyL3hnB7zeEUK+Z6S2J+k+SiUXE4w1L85Z5RCwm8m09k66C9O+zwFpyfCx0MDlaSymLLwtdTPYrCKQBRKcPAJJUkH0mt2VClYHJg6KAbySwoTG5ZbIWSOrdDvUvfJBuOfhpQqNxqKPLYI3J56CIE0IrGYV7BUepAzoaJhHF4CeTzruCxDmkYW029lalHNhlbaxKw+kkC3edpV3uC4pkEOGYsB+CR4ZG80wWg777s+xZX5Q0vXDewfxyykGzjCagL+Ties/r/5tY7D+t7Fv9w/MaxAAAAABJRU5ErkJggg==",
    Is = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAACqVBMVEVHcEyfcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS714Jj14Jj14Jj14Jj18db18NL18tr18NL18NL257GfcS6fcS6fcS6fcS6fcS6fcS6fcS719/L17s+fcS6fcS6fcS6fcS6fcS6fcS6fcS6fcS7n1qrdyZqfcS6fcS728+D29unu6NLx25P18uD035f14Zz289318tz29OP035f18NX14Zr2+PP14Jj29+z18db08NX2893t1Y6mejf29eb18tr14Jjx25P28+Dp38X18dn29un04aC8mFf14Jj08Nfx3Z718trq1Zfhxn/14Jj14Jj29+714p729eb18db14Zz08Nzt6NPz7tb035f29OP14Jj14Jj14Jj14Jj29+/19OX29+zhx4C0jUny8+vi2cWfcS714Zz05Kn29eju2JHv3aT18NKfcS7j3MnawYbr5tKfcS7MrGj18NH19eqfcS7Rs3Hz46ifcS7AnV2fcS6fcS7OsG/17s+jdjOrgUHPvZzo1aDp2Ke+m1ykeDafcS7t3avkzpSshESfcS7e0rifcS7s6t3Js4717s/hy5Tt6tunezrs6d3azbSfcS6fcS7q2aafcS6gczDn1aPz8+mfcS717s/FrIOfcS6gci+fcS7p5dafcS707c709u+fcS6fcS6fcS7TuoWfcS7QtYD17s/x47efcS7z7MyfcS7x47f17s6hdDKhczHz7Mz07Mzz7MzGqHDHqXP07c3q26/z7Mz07c72+fT14Jj2+fL29+72+PD29+z29un29eb29OP28+D289318tr18db14p714qH146T15Kf14Zr14Zz15ar25q7257H26LX26bn18NL26rz268B86J+vAAAAyHRSTlMABBEIAQISHHBUBRoGQQcKKz5DaBlmjy7R+gkrCIX8/hQ0Vm5VUCn8RU8DFgswSVoq0LtiOAv2K8vX5Q7c3tXszsDzLSBoaUYyDD9ywhehDehCUQzpdFHnNicBUpo78c79pEVJqifjqBYe5/Pxajm+URf+9ffQr8gVnUdLKG/J8x+J+Fh6LCWMDl8sh6zMiHA61MpCJyxl3JoNwat03bVsYNsMQtLuYW6QIm8Y1Ttv+BBSTJobpJPrW5Zq7LhbcLvTx5WQxdjU4H3TXncAAAHtSURBVBgZ7cFVe9NQAAbgr22SQl3n7u64D3d39w13h+Fjw93d3d09wWHDnV9CxuBpm2znHG644n3xn4q/X0CgFBjg5w9GecOlP4a0BYvGwySP2i1Al99F8tagJweKXm0kXzVbciDrLSmNtoCs0XulyeN5kNQZ8EFpwhgrSPq+Vps9DSSd3qjNm8uDoNtbtcJZJhD0eKe2cJEOBJ0nflSaX2TTgcAw5ZPSmgWLDSDgZoR/9hW+IlHPgUS77IuvLRvsWhBZild/9bZ7Zcw6C4g4Ye3y7x77tu1aJXAg0xj3nr34o9zV80cOmI0a0Jj09ut3szLvZ2bduXHlkl1vAp0hOTUtPdvtdGenp6UmG8AiKcWVkWN2mHMyXClJYLAk4eCFa/duPXxw++blEwmbQRMcOjXsm7ewOaHBqFxQ0/6lFWnYLAgVCmndvaQyHbqGQK153Vck9QZDoVq7lzQD28Pb0Pov6GrVgEerfs9ZjBzE4beO1Z+xmTSTxy9NRj1lVbCeR5k+j9lt3cNBNuIJu/2HTZA9+hvHT0GWK7I7eeYoZGNFdsdOn4NsnMjuUKILMmG6yGqH2yxApotbujFepIvfvmlnTJwOMl4bGeWMrkIX7YyK1PIooxFsjtiqdLEOm6BBOd4aYdTTGSOsPP6Vn8ViIRnabZvcAAAAAElFTkSuQmCC",
    Zs = {
        key: 0,
        class: "tab-bar-wrap2"
    },
    Bs = ["onClick"],
    Ys = {
        key: 1,
        class: "tab-bar-wrap2"
    },
    js = ["onClick"],
    Ts = {
        key: 2,
        class: "tab-bar-wrap15"
    },
    Ss = {
        class: "tabbar-wrap"
    },
    ks = ["onClick"],
    Ds = {
        class: "icon-bar"
    },
    Es = ["src"],
    Ns = t("div", {
        class: "w-26.48px h-26.48px mx-auto bg-$bg-card"
    }, null, -1),
    Ms = ["src"],
    Fs = {
        key: 3,
        class: "tab-bar-wrap2"
    },
    zs = ["onClick"],
    Ls = {
        key: 4,
        class: "tab-bar-wrap2"
    },
    Cs = ["onClick"],
    Qs = {
        key: 5,
        class: "tab-bar-wrap25"
    },
    Rs = {
        class: "tabbar-wrap"
    },
    qs = ["onClick"],
    Gs = {
        class: "icon-bar"
    },
    Us = ["src"],
    Js = t("div", {
        class: "w-26.48px h-26.48px mx-auto bg-$bg-card"
    }, null, -1),
    Hs = ["src"],
    Xs = {
        key: 6,
        class: "tab-bar-wrap2"
    },
    Os = ["onClick"],
    Vs = {
        key: 7,
        class: "tab-bar-wrap29"
    },
    Ws = {
        class: "tabbar-wrap"
    },
    Ps = ["onClick"],
    Ks = {
        class: "icon-bar"
    },
    $s = ["src"],
    ei = {
        class: "tab-bar"
    },
    ti = ["onClick"],
    ni = f({
        __name: "TabBar",
        setup(e) {
            Ne(Z => ({
                "5a5a569c": n(K)
            }));
            const {
                theme: a,
                investSwitch: i,
                cusUrls: r,
                contractSwitch: p
            } = I(), m = {
                "/": {
                    path: "/",
                    icon: "/static/img/tabbar/home_line.png",
                    label: "tabbar.index"
                },
                "/wallet": {
                    path: "/wallet",
                    icon: "/static/img/tabbar/tab_mid_blue.png",
                    label: "tabbar.wallet"
                },
                "/quan": {
                    path: "/quan",
                    icon: "/static/img/tabbar/tab_mid_blue.png",
                    label: "tabbar.quantify"
                },
                "/team": {
                    path: "/team",
                    icon: "/static/img/tabbar/tab_mid_blue.png",
                    label: "tabbar.team"
                },
                "/invest": {
                    path: "/invest",
                    icon: "/static/img/tabbar/tab_mid_blue.png",
                    label: "Invest"
                },
                "/service": {
                    path: "/service",
                    icon: "/static/img/tabbar/share_line.png",
                    label: "Invite_Friends"
                },
                "/mine": {
                    path: "/mine",
                    icon: "/static/img/tabbar/mine_line.png",
                    label: "tabbar.me"
                },
                "/quotes": {
                    path: "/quotes",
                    icon: "/static/img/tabbar/mine_line.png",
                    label: "quotes"
                },
                "/contract": {
                    path: "/contract",
                    icon: "/static/img/tabbar/mine_line.png",
                    label: "Contract"
                }
            };

            function l(Z, U = "Invite_Friends") {
                const X = [];
                return Z.forEach(Q => {
                    X.push(m[Q])
                }), X.map(Q => (Q.path === "/service" && (Q.label = U), Q)), X
            }
            const d = B(() => {
                    if ([1, 4].includes(a.value)) {
                        const Z = ["/", "/quan"];
                        return i.value && Z.push("/invest"), p.value && Z.push("/contract"), (!i.value || !p.value) && r.value.length && Z.push("/service"), Z.push("/mine"), l(Z, "tabbar.service")
                    } else {
                        if (a.value === 2) return l(["/", "/quan", "/team", "/service", "/mine"], "WhitePaper");
                        if ([11].includes(a.value)) {
                            const Z = ["/", "/wallet", "/quan"];
                            return i.value && Z.push("/invest"), p.value && Z.push("/contract"), l(Z)
                        } else if ([13, 16, 31, 32, 35].includes(a.value)) {
                            const Z = ["/", "/quan"];
                            return i.value && Z.push("/invest"), p.value && Z.push("/contract"), (Z.length === 2 || Z.length === 3) && Z.push("/service"), Z.push("/mine"), l(Z)
                        } else if ([14, 24, 27].includes(a.value)) {
                            const Z = ["/", "/quotes", "/quan"];
                            return p.value ? Z.push("/contract") : Z.push("/service"), Z.push("/mine"), l(Z)
                        } else {
                            if ([15, 25].includes(a.value)) return l(["/", "/quan", "/invest", "/service", "/mine"], "WhitePaper"); {
                                const Z = ["/", "/quan"];
                                return i.value && Z.push("/invest"), p.value && Z.push("/contract"), (!i.value || !p.value) && Z.push("/service"), Z.push("/mine"), l(Z)
                            }
                        }
                    }
                }),
                v = Me(),
                x = $e();

            function j(Z) {
                Z.path === "/" && x.isForceOpenAnnouce && x.addPopItem("annouceShow"), Z.path === "/" && x.siteInfo.lottery_pop_num === "true" && x.siteInfo.i_r_l === "true" && x.addPopItem("showLotteryPop"), v.push(Z.path)
            }
            const P = O(),
                _ = B(() => d.value.findIndex(U => U.path === P.path));

            function H(Z, U) {
                return new URL(Object.assign({
                        "../../assets/img/t15/tabbar-1-0.png": Va,
                        "../../assets/img/t15/tabbar-1-1.png": Wa,
                        "../../assets/img/t15/tabbar-2-0.png": Pa,
                        "../../assets/img/t15/tabbar-2-1.png": Ka,
                        "../../assets/img/t15/tabbar-3-0.png": $a,
                        "../../assets/img/t15/tabbar-3-1.png": es,
                        "../../assets/img/t15/tabbar-4-0.png": ts,
                        "../../assets/img/t15/tabbar-4-1.png": ns,
                        "../../assets/img/t15/tabbar-5-0.png": as,
                        "../../assets/img/t15/tabbar-5-1.png": ss,
                        "../../assets/img/t25/tabbar-1-0.png": is,
                        "../../assets/img/t25/tabbar-1-1.png": cs,
                        "../../assets/img/t25/tabbar-2-0.png": os,
                        "../../assets/img/t25/tabbar-2-1.png": rs,
                        "../../assets/img/t25/tabbar-3-0.png": ls,
                        "../../assets/img/t25/tabbar-3-1.png": us,
                        "../../assets/img/t25/tabbar-4-0.png": ms,
                        "../../assets/img/t25/tabbar-4-1.png": ds,
                        "../../assets/img/t25/tabbar-5-0.png": As,
                        "../../assets/img/t25/tabbar-5-1.png": ps,
                        "../../assets/img/t29/tabbar-1-0.png": bs,
                        "../../assets/img/t29/tabbar-1-1.png": fs,
                        "../../assets/img/t29/tabbar-2-0.png": vs,
                        "../../assets/img/t29/tabbar-2-1.png": gs,
                        "../../assets/img/t29/tabbar-3-0.png": hs,
                        "../../assets/img/t29/tabbar-3-1.png": ys,
                        "../../assets/img/t29/tabbar-4-0.png": ws,
                        "../../assets/img/t29/tabbar-4-1.png": xs,
                        "../../assets/img/t29/tabbar-5-0.png": _s,
                        "../../assets/img/t29/tabbar-5-1.png": Is
                    })[`../../assets/img/t${a.value}/tabbar-${Z}-${U}.png`],
                    import.meta.url).href
            }
            const K = B(() => `${100/d.value.length}%`);
            return (Z, U) => {
                const X = Oa,
                    Q = Ga,
                    $ = La,
                    ee = Ea,
                    te = ja,
                    ne = Za,
                    ae = xa,
                    se = ha,
                    ie = fa,
                    ce = Aa,
                    oe = ua,
                    re = oa,
                    le = sa,
                    ue = ta,
                    me = Kn,
                    de = Vn,
                    Ae = Hn,
                    pe = Gn,
                    be = Tn,
                    fe = Bn,
                    ve = _n,
                    ge = yn,
                    he = vn,
                    ye = pn,
                    we = mn,
                    xe = rn,
                    _e = sn,
                    Ie = tn,
                    Ze = Kt,
                    Be = Vt,
                    Ye = Ht,
                    je = Gt,
                    Te = Qt,
                    Se = zt,
                    Ue = Nt,
                    Je = kt,
                    He = jt,
                    Xe = It,
                    Oe = wt,
                    Ve = gt,
                    We = bt,
                    Pe = dt,
                    Ke = lt;
                return n(a) === 11 ? (s(), c("div", Zs, [(s(!0), c(z, null, R(n(d), (w, h) => (s(), c("div", {
                    key: h,
                    class: "tab-bar2",
                    onClick: J => j(w)
                }, [g(X, {
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])], 8, Bs))), 128))])) : n(a) === 14 ? (s(), c("div", Ys, [(s(!0), c(z, null, R(n(d), (w, h) => (s(), c("div", {
                    key: h,
                    class: "tab-bar2",
                    onClick: J => j(w)
                }, [g(Q, {
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])], 8, js))), 128))])) : n(a) === 15 ? (s(), c("div", Ts, [t("div", Ss, [(s(!0), c(z, null, R(n(d), (w, h) => (s(), c("div", {
                    key: h,
                    class: u(["tab-item", {
                        active: n(_) === h
                    }]),
                    onClick: J => j(w)
                }, [t("div", Ds, [h !== 2 ? (s(), c("img", {
                    key: 0,
                    class: "w-26.48px h-26.48px mx-auto",
                    src: H(h + 1, n(_) === h ? 1 : 0)
                }, null, 8, Es)) : (s(), c(z, {
                    key: 1
                }, [Ns, t("img", {
                    class: "w-37.53px h-37.53px absolute top-14px left-50% translate--50%",
                    src: H(h + 1, n(_) === h ? 1 : 0)
                }, null, 8, Ms)], 64))]), t("p", null, b(Z.$t(w.label)), 1)], 10, ks))), 128))])])) : n(a) === 17 ? (s(), c("div", Fs, [(s(!0), c(z, null, R(n(d), (w, h) => (s(), c("div", {
                    key: h,
                    class: "tab-bar2",
                    onClick: J => j(w)
                }, [g($, {
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])], 8, zs))), 128))])) : n(a) === 24 ? (s(), c("div", Ls, [(s(!0), c(z, null, R(n(d), (w, h) => (s(), c("div", {
                    key: h,
                    class: "tab-bar2",
                    onClick: J => j(w)
                }, [g(ee, {
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])], 8, Cs))), 128))])) : n(a) === 25 ? (s(), c("div", Qs, [t("div", Rs, [(s(!0), c(z, null, R(n(d), (w, h) => (s(), c("div", {
                    key: h,
                    class: u(["tab-item", {
                        active: n(_) === h
                    }]),
                    onClick: J => j(w)
                }, [t("div", Gs, [h !== 2 ? (s(), c("img", {
                    key: 0,
                    class: "w-26.48px h-26.48px mx-auto",
                    src: H(h + 1, n(_) === h ? 1 : 0)
                }, null, 8, Us)) : (s(), c(z, {
                    key: 1
                }, [Js, t("img", {
                    class: "w-37.53px h-37.53px absolute top-14px left-50% translate--50%",
                    src: H(h + 1, n(_) === h ? 1 : 0)
                }, null, 8, Hs)], 64))]), t("p", null, b(Z.$t(w.label)), 1)], 10, qs))), 128))])])) : n(a) === 27 ? (s(), c("div", Xs, [(s(!0), c(z, null, R(n(d), (w, h) => (s(), c("div", {
                    key: h,
                    class: "tab-bar2",
                    onClick: J => j(w)
                }, [g(te, {
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])], 8, Os))), 128))])) : n(a) === 29 ? (s(), c("div", Vs, [t("div", Ws, [(s(!0), c(z, null, R(n(d), (w, h) => (s(), c("div", {
                    key: h,
                    class: u(["tab-item", {
                        active: n(_) === h
                    }]),
                    onClick: J => j(w)
                }, [t("div", Ks, [t("img", {
                    class: "w-26.48px h-26.48px mx-auto",
                    src: H(h + 1, n(_) === h ? 1 : 0)
                }, null, 8, $s)]), t("p", null, b(Z.$t(w.label)), 1)], 10, Ps))), 128))])])) : (s(), c("div", {
                    key: 8,
                    class: u(["tab-bar-wrap", `tab-bar-wrap-${n(a)}`])
                }, [t("div", ei, [(s(!0), c(z, null, R(n(d), (w, h) => (s(), c("div", {
                    key: h,
                    class: "tab-item",
                    style: L({
                        width: `${100/n(d).length}%`
                    }),
                    onClick: J => j(w)
                }, [n(a) === 1 ? (s(), A(ne, {
                    key: 0,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 2 ? (s(), A(ae, {
                    key: 1,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 3 ? (s(), A(se, {
                    key: 2,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 4 ? (s(), A(ie, {
                    key: 3,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 5 ? (s(), A(ce, {
                    key: 4,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 6 ? (s(), A(oe, {
                    key: 5,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 7 ? (s(), A(re, {
                    key: 6,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 8 ? (s(), A(le, {
                    key: 7,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 9 ? (s(), A(ue, {
                    key: 8,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 10 ? (s(), A(me, {
                    key: 9,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 12 ? (s(), A(de, {
                    key: 10,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 13 ? (s(), A(Ae, {
                    key: 11,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 16 ? (s(), A(pe, {
                    key: 12,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 18 ? (s(), A(be, {
                    key: 13,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 19 ? (s(), A(fe, {
                    key: 14,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 20 ? (s(), A(ve, {
                    key: 15,
                    item: w,
                    index: h,
                    active: n(_),
                    num: n(d).length
                }, null, 8, ["item", "index", "active", "num"])) : o("", !0), n(a) === 21 ? (s(), A(ge, {
                    key: 16,
                    item: w,
                    index: h,
                    active: n(_),
                    num: n(d).length
                }, null, 8, ["item", "index", "active", "num"])) : o("", !0), n(a) === 22 ? (s(), A(he, {
                    key: 17,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 23 ? (s(), A(ye, {
                    key: 18,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 26 ? (s(), A(we, {
                    key: 19,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 28 ? (s(), A(xe, {
                    key: 20,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 30 ? (s(), A(_e, {
                    key: 21,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 31 ? (s(), A(Ie, {
                    key: 22,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 32 ? (s(), A(Ze, {
                    key: 23,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 33 ? (s(), A(Be, {
                    key: 24,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 34 ? (s(), A(Ye, {
                    key: 25,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 35 ? (s(), A(je, {
                    key: 26,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 36 ? (s(), A(Te, {
                    key: 27,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 37 ? (s(), A(Se, {
                    key: 28,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 38 ? (s(), A(Ue, {
                    key: 29,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 39 ? (s(), A(Je, {
                    key: 30,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 40 ? (s(), A(He, {
                    key: 31,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 41 ? (s(), A(Xe, {
                    key: 32,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 42 ? (s(), A(Oe, {
                    key: 33,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 43 ? (s(), A(Ve, {
                    key: 34,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 44 ? (s(), A(We, {
                    key: 35,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 45 ? (s(), A(Pe, {
                    key: 36,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0), n(a) === 46 ? (s(), A(Ke, {
                    key: 37,
                    item: w,
                    index: h,
                    active: n(_)
                }, null, 8, ["item", "index", "active"])) : o("", !0)], 12, ti))), 128))])], 2))
            }
        }
    }),
    ai = {
        class: "navigation"
    },
    si = {
        class: "navigation-content"
    },
    ii = {
        class: "h-full flex cursor-pointer items-center justify-between"
    },
    ci = {
        id: "navigation-right"
    },
    oi = {
        key: 1,
        class: "opacity-0"
    },
    ri = f({
        __name: "Navigation",
        setup(e) {
            const {
                pageStack: a
            } = I(), i = Me();

            function r() {
                a.value <= 1 ? i.push("/") : i.go(-1)
            }
            const p = O(),
                m = B(() => {
                    if (p.path === "/rt" && p.query.t) switch (p.query.t) {
                        case "1":
                            return "Help";
                        case "2":
                            return "Agent_Cooperation";
                        case "3":
                            return "Quantization_Tutorial";
                        case "4":
                            return "Common_Problem";
                        case "5":
                            return "About_Us";
                        default:
                            return ""
                    }
                    return p.meta.title || ""
                });
            return (l, d) => (s(), c("div", ai, [t("div", si, [t("div", ii, [t("div", {
                class: "icon i-material-symbols-arrow-back-ios-new-rounded",
                onClick: r
            }), t("div", null, b(n(m) ? l.$t(n(m)) : ""), 1), t("div", ci, [n(p).path.includes("/contract") ? (s(), c("span", {
                key: 0,
                class: "text-14px",
                onClick: d[0] || (d[0] = v => l.$router.push("/rt?t=11"))
            }, b(l.$t("contractRule")), 1)) : (s(), c("span", oi, " h "))])])])]))
        }
    }),
    li = y(ri, [
        ["__scopeId", "data-v-923868a9"]
    ]),
    ui = {
        key: 0,
        class: "dot"
    },
    E = f({
        __name: "BaseAlarmLogoBtn",
        setup(e) {
            const {
                new_message_count: a
            } = k();
            return (i, r) => {
                const p = q;
                return s(), c("div", {
                    class: u([{
                        rotate: n(a)
                    }, "base-alarm-logo-btn cursor-pointer"]),
                    onClick: r[0] || (r[0] = m => i.$router.push("/notice"))
                }, [et(i.$slots, "default", {
                    new_message_count: n(a)
                }, () => [g(p, {
                    name: "1-email",
                    class: ":uno: text-16px c-#fff"
                })]), n(a) ? (s(), c("div", ui)) : o("", !0)], 2)
            }
        }
    }),
    ze = e => (N("data-v-e9a0d660"), e = e(), M(), e),
    mi = {
        class: "navbar-wrap px-$mg py-0!"
    },
    di = {
        class: "flex items-center"
    },
    Ai = {
        class: "w-46px h-46px mr-10px"
    },
    pi = ["src"],
    bi = {
        class: "text-20px font-bold"
    },
    fi = {
        class: "flex items-center"
    },
    vi = ze(() => t("div", {
        class: "i-carbon:application-virtual w-24px h-24px cursor-pointer mr-2px"
    }, null, -1)),
    gi = ze(() => t("div", {
        class: "i-solar:bell-bold w-20px h-20px"
    }, null, -1)),
    hi = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = E,
                    d = Y;
                return s(), c("div", mi, [t("div", di, [t("div", Ai, [t("img", {
                    class: "w-46px h-46px rounded",
                    src: n(a).s_l
                }, null, 8, pi)]), t("div", bi, b(n(a).s_n), 1)]), t("div", fi, [n(a).a_d_s_s === "true" ? (s(), c("div", {
                    key: 0,
                    class: "bg-$bg-weight text-$text-gray6 px-10px py-8px mr-8px font-bold text-12px rd-$radius flex items-center",
                    onClick: m[0] || (m[0] = (...v) => n(i) && n(i)(...v))
                }, [vi, T(" App ")])) : o("", !0), n(r) ? (s(), A(l, {
                    key: 1,
                    class: "bg-$bg-weight! rd-$radius! p-8px!"
                }, {
                    default: S(() => [gi]),
                    _: 1
                })) : o("", !0), g(d, {
                    class: "ml-10px"
                })])])
            }
        }
    }),
    yi = y(hi, [
        ["__scopeId", "data-v-e9a0d660"]
    ]),
    Le = e => (N("data-v-55a06d65"), e = e(), M(), e),
    wi = {
        class: "navbar-wrap px-$mg py-0!"
    },
    xi = {
        class: "flex items-center"
    },
    _i = {
        class: "w-46px h-46px mr-10px"
    },
    Ii = ["src"],
    Zi = {
        class: "text-base font-bold text-$primary"
    },
    Bi = {
        class: "flex items-center"
    },
    Yi = Le(() => t("div", {
        class: "i-uiw:cloud-download w-20px h-20px mr-20px"
    }, null, -1)),
    ji = Le(() => t("div", {
        class: "i-ep:service w-22px h-22px cursor-pointer ml-10px"
    }, null, -1)),
    Ti = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo);
            return (m, l) => {
                const d = Y,
                    v = G;
                return s(), c("div", wi, [t("div", xi, [t("div", _i, [t("img", {
                    class: "w-46px h-46px rounded",
                    src: n(a).s_l
                }, null, 8, Ii)]), t("div", Zi, b(n(a).s_n), 1)]), t("div", Bi, [n(a).a_d_s_s === "true" ? (s(), c("div", {
                    key: 0,
                    class: "bg-#5ae9b5 text-white px-10px py-4px rd-full flex items-center",
                    onClick: l[0] || (l[0] = (...x) => n(i) && n(i)(...x))
                }, [Yi, T(" App ")])) : o("", !0), t("div", {
                    class: u(["i-material-symbols:mail-sharp w-20px h-20px mx-10px", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: l[1] || (l[1] = x => m.$router.push("/notice"))
                }, null, 2), g(d, {
                    class: "ml-10px"
                }), g(v, null, {
                    default: S(() => [ji]),
                    _: 1
                })])])
            }
        }
    }),
    Si = y(Ti, [
        ["__scopeId", "data-v-55a06d65"]
    ]),
    ki = e => (N("data-v-0c42a4e2"), e = e(), M(), e),
    Di = {
        id: "navBarItem44",
        class: "nav-bar-content h-full w-full"
    },
    Ei = {
        class: "left name font-playgram"
    },
    Ni = {
        class: "right"
    },
    Mi = {
        key: 0,
        class: "bg-$bg-weight border-1px border-$border-color2 c-$primary mr-8px h-28px px-10px py-4px text-12px rd-$radius flex items-center"
    },
    Fi = {
        class: "mr-8px flex items-center"
    },
    zi = ki(() => t("div", {
        class: "i-ic:sharp-message w-20px h-20px"
    }, null, -1)),
    Li = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            },
            opacity: {
                default: 0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", Di, [t("div", Ei, [g(l, {
                    class: "small-logo"
                }), t("span", {
                    class: u(["text-white text-truncate", {
                        "text-black!": p.opacity
                    }])
                }, b(n(a).s_n), 3)]), t("div", Ni, [n(a).a_d_s_s === "true" ? (s(), c("div", Mi, [t("div", {
                    class: "i-mingcute:download-3-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", Fi, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [zi]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    Ci = y(Li, [
        ["__scopeId", "data-v-0c42a4e2"]
    ]),
    Qi = {
        id: "navBarItem43",
        class: "nav-bar-content h-full w-full"
    },
    Ri = {
        class: "left name font-playgram"
    },
    qi = {
        class: "font-playgram text-truncate"
    },
    Gi = {
        class: "right"
    },
    Ui = {
        key: 0,
        class: "bg-$bg-weight border-1px border-$border-color2 c-$primary mr-8px h-28px px-10px py-4px text-12px rd-$radius flex items-center"
    },
    Ji = {
        class: "mr-8px flex items-center"
    },
    Hi = t("div", {
        class: "i-tabler:message-bolt w-20px h-20px"
    }, null, -1),
    Xi = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", Qi, [t("div", Ri, [g(l, {
                    class: "small-logo"
                }), t("span", qi, b(n(a).s_n), 1)]), t("div", Gi, [n(a).a_d_s_s === "true" ? (s(), c("div", Ui, [t("div", {
                    class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", Ji, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [Hi]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    Oi = {
        id: "navBarItem42",
        class: "nav-bar-content h-full w-full"
    },
    Vi = {
        class: "left name font-playgram"
    },
    Wi = {
        class: "font-playgram text-truncate"
    },
    Pi = {
        class: "right"
    },
    Ki = {
        key: 0,
        class: "bg-$primary c-#000 mr-8px h-28px px-10px py-4px text-12px rounded-full flex items-center"
    },
    $i = {
        class: "mr-8px flex items-center"
    },
    ec = t("div", {
        class: "i-uil:comment-alt-message w-20px h-20px"
    }, null, -1),
    tc = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", Oi, [t("div", Vi, [g(l, {
                    class: "small-logo"
                }), t("span", Wi, b(n(a).s_n), 1)]), t("div", Pi, [n(a).a_d_s_s === "true" ? (s(), c("div", Ki, [t("div", {
                    class: "i-ooui:download w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", $i, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [ec]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    nc = {
        id: "navBarItem41",
        class: "nav-bar-content h-full w-full"
    },
    ac = {
        class: "left name font-playgram"
    },
    sc = {
        class: "font-playgram text-truncate"
    },
    ic = {
        class: "right"
    },
    cc = {
        key: 0,
        class: "bg-$bg-weight border-1px border-$border-color2 c-$primary mr-8px h-28px px-10px py-4px text-12px rounded-full flex items-center"
    },
    oc = {
        class: "mr-8px flex items-center"
    },
    rc = t("div", {
        class: "i-tabler:message-bolt w-20px h-20px"
    }, null, -1),
    lc = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", nc, [t("div", ac, [g(l, {
                    class: "small-logo"
                }), t("span", sc, b(n(a).s_n), 1)]), t("div", ic, [n(a).a_d_s_s === "true" ? (s(), c("div", cc, [t("div", {
                    class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", oc, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [rc]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    uc = {
        id: "navBarItem40",
        class: "nav-bar-content h-full w-full"
    },
    mc = {
        class: "left name font-playgram"
    },
    dc = {
        class: "text-truncate text-white"
    },
    Ac = {
        class: "right"
    },
    pc = {
        key: 0,
        class: "bg-$primary text-$base-btn-text mr-8px h-28px px-10px py-4px text-12px rounded-4px flex items-center"
    },
    bc = {
        class: "mr-8px flex items-center"
    },
    fc = t("div", {
        class: "i-material-symbols-light:notifications w-20px h-20px"
    }, null, -1),
    vc = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", uc, [t("div", mc, [g(l, {
                    class: "small-logo"
                }), t("span", dc, b(n(a).s_n), 1)]), t("div", Ac, [n(a).a_d_s_s === "true" ? (s(), c("div", pc, [t("div", {
                    class: "i-material-symbols:download-2-rounded w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", bc, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [fc]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    gc = {
        id: "navBarItem39",
        class: "nav-bar-content h-full w-full"
    },
    hc = {
        class: "left name font-playgram"
    },
    yc = {
        class: "font-jmono text-truncate text-white"
    },
    wc = {
        class: "right"
    },
    xc = {
        key: 0,
        class: "bg-$bg-weight c-$primary mr-8px h-28px px-10px py-4px text-12px rounded-4px flex items-center"
    },
    _c = {
        class: "mr-8px flex items-center"
    },
    Ic = t("div", {
        class: "i-material-symbols-light:notifications w-20px h-20px"
    }, null, -1),
    Zc = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", gc, [t("div", hc, [g(l, {
                    class: "small-logo"
                }), t("span", yc, b(n(a).s_n), 1)]), t("div", wc, [n(a).a_d_s_s === "true" ? (s(), c("div", xc, [t("div", {
                    class: "i-material-symbols:download-2-rounded w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", _c, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [Ic]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    Bc = {
        id: "navBarItem38",
        class: "nav-bar-content h-full w-full"
    },
    Yc = {
        class: "left name font-playgram"
    },
    jc = {
        class: "font-playgram text-truncate"
    },
    Tc = {
        class: "right"
    },
    Sc = {
        key: 0,
        class: "bg-$bg-card border-1px border-$border-color2 c-$primary mr-8px h-28px px-10px py-4px text-12px rounded-full flex items-center"
    },
    kc = {
        class: "mr-8px flex items-center"
    },
    Dc = t("div", {
        class: "i-tabler:message-bolt w-20px h-20px"
    }, null, -1),
    Ec = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", Bc, [t("div", Yc, [g(l, {
                    class: "small-logo"
                }), t("span", jc, b(n(a).s_n), 1)]), t("div", Tc, [n(a).a_d_s_s === "true" ? (s(), c("div", Sc, [t("div", {
                    class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", kc, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [Dc]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    Nc = {
        id: "navBarItem37",
        class: "nav-bar-content h-full w-full"
    },
    Mc = {
        class: "left name font-playgram"
    },
    Fc = {
        class: "font-jmono text-truncate text-white"
    },
    zc = {
        class: "right"
    },
    Lc = {
        key: 0,
        class: "bg-white c-$primary mr-8px h-28px px-10px py-4px text-12px rounded-full flex items-center"
    },
    Cc = {
        class: "mr-8px flex items-center"
    },
    Qc = t("div", {
        class: "i-tabler:message-bolt w-20px h-20px"
    }, null, -1),
    Rc = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", Nc, [t("div", Mc, [g(l, {
                    class: "small-logo"
                }), t("span", Fc, b(n(a).s_n), 1)]), t("div", zc, [n(a).a_d_s_s === "true" ? (s(), c("div", Lc, [t("div", {
                    class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", Cc, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [Qc]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    qc = {
        id: "navBarItem36",
        class: "nav-bar-content h-full w-full"
    },
    Gc = {
        class: "left name font-playgram"
    },
    Uc = {
        class: "font-playgram text-truncate"
    },
    Jc = {
        class: "right"
    },
    Hc = {
        key: 0,
        class: "bg-$bg-weight border-1px border-$border-color2 c-$primary mr-8px h-28px px-10px py-4px text-12px rounded-full flex items-center"
    },
    Xc = {
        class: "mr-8px flex items-center"
    },
    Oc = t("div", {
        class: "i-tabler:message-bolt w-20px h-20px"
    }, null, -1),
    Vc = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", qc, [t("div", Gc, [g(l, {
                    class: "small-logo"
                }), t("span", Uc, b(n(a).s_n), 1)]), t("div", Jc, [n(a).a_d_s_s === "true" ? (s(), c("div", Hc, [t("div", {
                    class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", Xc, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [Oc]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    ke = e => (N("data-v-4225201d"), e = e(), M(), e),
    Wc = {
        class: "navbar-wrap"
    },
    Pc = {
        class: "w-full px-$mg flex justify-between items-center"
    },
    Kc = {
        class: "app-info-wrap"
    },
    $c = {
        class: "min-w-50px max-w-120px h-full max-h-50px mr-10px"
    },
    eo = ["src"],
    to = {
        class: "font-bold text-base text-#FEE61A ml-4px"
    },
    no = {
        class: "tools-wrap"
    },
    ao = ke(() => t("div", {
        class: "i-ph:download-fill w-16px h-16px mr-2px"
    }, null, -1)),
    so = ke(() => t("div", {
        class: "i-material-symbols:language w-20px h-20px cursor-pointer"
    }, null, -1)),
    io = [so],
    co = ke(() => t("div", {
        class: "bf-bg ml-10px w-30px h-30px rounded-18px flex items-center justify-center"
    }, [t("div", {
        class: "i-ri:customer-service-2-fill w-20px h-20px"
    })], -1)),
    oo = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo), m = B(() => window.location.href.includes("asigpt.bot") || window.location.href.includes("asigpt.cc") ? !1 : a.value.a_d_s_s === "true");
            return (l, d) => {
                const v = q,
                    x = G;
                return s(), c("div", Wc, [t("div", Pc, [t("div", Kc, [t("div", $c, [t("img", {
                    class: "min-w-50px max-w-120px h-full max-h-50px",
                    src: n(a).s_l
                }, null, 8, eo)]), t("div", to, b(n(a).s_n), 1)]), t("div", no, [n(m) ? (s(), c("div", {
                    key: 0,
                    class: "bf-bg2 h-30px box-border px-8px py-2px rd-10px flex items-center mr-8px",
                    onClick: d[0] || (d[0] = (...j) => n(i) && n(i)(...j))
                }, [ao, T(" App ")])) : o("", !0), t("div", {
                    class: "bf-bg w-30px h-30px rounded-18px flex items-center justify-center",
                    onClick: d[1] || (d[1] = j => l.$router.push("/language"))
                }, io), t("div", {
                    class: u(["bf-bg ml-10px w-30px h-30px rounded-18px flex items-center justify-center", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: d[2] || (d[2] = j => l.$router.push("/notice"))
                }, [g(v, {
                    class: "w-16px h-16px",
                    name: "5-message"
                })], 2), g(x, null, {
                    default: S(() => [co]),
                    _: 1
                })])])])
            }
        }
    }),
    ro = y(oo, [
        ["__scopeId", "data-v-4225201d"]
    ]),
    lo = {
        class: "navbar-wrap"
    },
    uo = {
        class: "w-full px-$mg flex justify-between items-center"
    },
    mo = {
        class: "app-info-wrap"
    },
    Ao = {
        class: "w-40px h-auto max-h-40px"
    },
    po = ["src"],
    bo = {
        class: "font-bold text-bas ml-4px"
    },
    fo = {
        class: "tools-wrap"
    },
    vo = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo);
            return (p, m) => {
                const l = q;
                return s(), c("div", lo, [t("div", uo, [t("div", mo, [t("div", Ao, [t("img", {
                    class: "w-full h-full",
                    src: n(a).s_l
                }, null, 8, po)]), t("div", bo, b(n(a).s_n), 1)]), t("div", fo, [t("div", {
                    class: "w-30px h-30px bg-#fff bg-opacity-20 rounded-full flex items-center justify-center",
                    onClick: m[0] || (m[0] = d => p.$router.push("/language"))
                }, [g(l, {
                    class: "w-20px h-20px",
                    name: "5-lang"
                })]), t("div", {
                    class: u(["ml-16px w-30px h-30px bg-#fff bg-opacity-20 rounded-full flex items-center justify-center", {
                        "animate-bounce": n(r).i_n_m
                    }]),
                    onClick: m[1] || (m[1] = d => p.$router.push("/notice"))
                }, [g(l, {
                    class: "w-16px h-16px",
                    name: "5-message"
                })], 2)])])])
            }
        }
    }),
    go = y(vo, [
        ["__scopeId", "data-v-b5e56970"]
    ]),
    Ce = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHNSURBVFiF7ZfvcYJAEMXfZvI9dBCsQFNBtIN0EO3ADtQKEivADmIH0QpMB14q0A5ePrDEBfkroMkMvxkGfBzcuzvc3QM6Ov4IJANel10ZX2IMsr3hZ9ITEZfX4D5F2wDYtuFG6QN4qfyUmfp545bi/YxNX35R+7s2zTRBZ7AuncG6/H+DJD2Sew0LgdGHRp8bfarageS4dYMAhgB8vbYB1jf6s9Ef9ewl9ItIyyQxRGRNcqJm1ubWWk14AFZGXwL4TtHbMagmzzoSkSOA9xTdpekZvJE8puhLEfkqbbBFsnLyAMATcHuDLvHbMweA24eZkYj0ogPxbxzA7Q0W0hlsjIx9wyFZwJL0TQapi594d6D6PtLsDLoU3x6AWWRSX/iJUwZpHRtmJgjTmuVVzcxIPiCMW77eWyHMGAAw0/MG5fczrmjDVEjOcs4T7VL1C/rLXeIzdIQjxJd/ISK1jFShTLHgSI4ABAC21zQHlC8WHMKZLKLP4hpwrYVG9Kcb4JTa/DJ+KlMxtOwYFsF54er3G2yqWHAoP/oBwlDl5TzjogvJaFAJkrEKJIcPhAYtCyQK29rh51J0aXdVwlIjM1gFne0pgKOIlK28Ozpuxg/8LBR5GB5GLgAAAABJRU5ErkJggg==",
    ho = {
        id: "navBarItem19",
        class: "nav-bar-content h-full w-full"
    },
    yo = {
        class: "left name font-playgram"
    },
    wo = {
        class: "font-playgram text-truncate"
    },
    xo = {
        class: "right"
    },
    _o = {
        key: 0,
        class: "bg-$bg-weight mr-8px h-28px px-10px py-4px text-12px rounded-full flex items-center"
    },
    Io = {
        class: "mr-8px flex items-center"
    },
    Zo = t("img", {
        src: Ce,
        class: "w-20px h-20px"
    }, null, -1),
    Bo = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", ho, [t("div", yo, [g(l, {
                    class: "small-logo"
                }), t("span", wo, b(n(a).s_n), 1)]), t("div", xo, [n(a).a_d_s_s === "true" ? (s(), c("div", _o, [t("div", {
                    class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", Io, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [Zo]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    De = e => (N("data-v-496ef436"), e = e(), M(), e),
    Yo = {
        class: "navbar-wrap"
    },
    jo = {
        class: "w-full px-$mg flex justify-between items-center"
    },
    To = {
        class: "app-info-wrap"
    },
    So = {
        class: "min-w-50px max-w-120px h-full max-h-50px mr-10px"
    },
    ko = ["src"],
    Do = {
        class: "font-bold text-base text-#FEE61A ml-4px"
    },
    Eo = {
        class: "tools-wrap"
    },
    No = De(() => t("div", {
        class: "i-ph:download-fill w-16px h-16px mr-2px"
    }, null, -1)),
    Mo = De(() => t("div", {
        class: "i-material-symbols:language w-20px h-20px cursor-pointer"
    }, null, -1)),
    Fo = [Mo],
    zo = De(() => t("div", {
        class: "bf-bg ml-10px w-30px h-30px rounded-18px flex items-center justify-center"
    }, [t("div", {
        class: "i-ri:customer-service-2-fill w-20px h-20px"
    })], -1)),
    Lo = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo), m = B(() => window.location.href.includes("asigpt.cc") ? !1 : a.value.a_d_s_s === "true");
            return (l, d) => {
                const v = q,
                    x = G;
                return s(), c("div", Yo, [t("div", jo, [t("div", To, [t("div", So, [t("img", {
                    class: "min-w-50px max-w-120px h-full max-h-50px",
                    src: n(a).s_l
                }, null, 8, ko)]), t("div", Do, b(n(a).s_n), 1)]), t("div", Eo, [n(m) ? (s(), c("div", {
                    key: 0,
                    class: "bf-bg bg-#41404D h-30px box-border px-8px py-2px rd-10px flex items-center mr-8px",
                    onClick: d[0] || (d[0] = (...j) => n(i) && n(i)(...j))
                }, [No, T(" App ")])) : o("", !0), t("div", {
                    class: "bf-bg w-30px h-30px rounded-18px flex items-center justify-center",
                    onClick: d[1] || (d[1] = j => l.$router.push("/language"))
                }, Fo), t("div", {
                    class: u(["bf-bg ml-10px w-30px h-30px rounded-18px flex items-center justify-center", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: d[2] || (d[2] = j => l.$router.push("/notice"))
                }, [g(v, {
                    class: "w-16px h-16px",
                    name: "5-message"
                })], 2), g(x, null, {
                    default: S(() => [zo]),
                    _: 1
                })])])])
            }
        }
    }),
    Co = y(Lo, [
        ["__scopeId", "data-v-496ef436"]
    ]),
    Qo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAhFBMVEVHcEzq6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P/q6P+gmvXm4//e2/6tqPfHxPunofbi3/7Szvyknvawq/fMyPuqpfbX1P3Dvvra1/1kE4A0AAAAHHRSTlMAz3cFjydP8/ka9hNYccwWZmnZ27eVlO3utrjsp1KiaQAAAYlJREFUSMedluu2giAQRtEs0NTK7HqG1Eq7vf/7pafEASmk759r7b0WyAwDIWpmoZcmG8Y2SeqFM2LINIpBShxNv+C+R6GXYO1/wEeuBm9C3ZGOHzvwMc64z08ofAmdqPycwdewucwvwJiFtB5mFhha1ZjCgFCx85EDg+K0f9eFgXHf5ysWdDpyXS5iUa8zX7ffN8h0xh0OLbH6r7eg/eRneJQ6vhJ11VRiJJbI+Q1uqlHUPBdIVAsxEsra6PE574S47hdAAi8fcO7znQA+CSWBlxk2Li8eCSHxZIEfM7h0/OnKZcEjqSLw4wkKhUfCjixVgV/fxlnwSFgS2hN4foB7w3fHiCqQQF9ojALzSACtwKu6GHCZoK7QLanZR3HHR94xf5pNa4I3ndoJu97BGQRPLQ2TECrFZxR8ubyNQiw1UPWJr6QG6lo0y/V8nkktSlYwOCvlmjHeff5vF5n9VWl9Gdtf9/YDxX5k2Q9F+7HbDPZAjwf6wW7/dPjhcdI+f/bJlrFtstc9f57vW8ZNycKxBgAAAABJRU5ErkJggg==",
    Qe = e => (N("data-v-f9a7ae09"), e = e(), M(), e),
    Ro = {
        class: "navbar-wrap px-$mg py-0!"
    },
    qo = {
        class: "flex items-center"
    },
    Go = {
        class: "min-w-46px max-w-120px h-full max-h-46px mr-10px"
    },
    Uo = ["src"],
    Jo = {
        class: "text-14px font-bold text-$primary"
    },
    Ho = {
        class: "flex items-center"
    },
    Xo = Qe(() => t("div", {
        class: "i-ph:download-fill w-16px h-16px mr-2px"
    }, null, -1)),
    Oo = Qe(() => t("img", {
        src: Qo,
        class: "w-22px h-22px"
    }, null, -1)),
    Vo = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I();
            return (r, p) => {
                const m = E,
                    l = Y;
                return s(), c("div", Ro, [t("div", qo, [t("div", Go, [t("img", {
                    class: "min-w-46px max-w-120px h-full max-h-46px",
                    src: n(a).s_l
                }, null, 8, Uo)]), t("div", Jo, b(n(a).s_n), 1)]), t("div", Ho, [n(a).a_d_s_s === "true" ? (s(), c("div", {
                    key: 0,
                    class: "bg-#5ae9b5 text-white px-8px py-2px rd-full flex items-center mr-8px",
                    onClick: p[0] || (p[0] = (...d) => n(i) && n(i)(...d))
                }, [Xo, T(" App ")])) : o("", !0), g(m, null, {
                    default: S(() => [Oo]),
                    _: 1
                }), g(l, {
                    class: "ml-10px"
                })])])
            }
        }
    }),
    Wo = y(Vo, [
        ["__scopeId", "data-v-f9a7ae09"]
    ]),
    Po = {
        id: "navBarItem19",
        class: "nav-bar-content h-full w-full"
    },
    Ko = {
        class: "left name font-playgram"
    },
    $o = {
        class: "font-playgram text-truncate"
    },
    er = {
        class: "right"
    },
    tr = {
        key: 0,
        class: "bg-$bg-weight mr-8px h-28px px-10px py-4px text-12px rounded-full flex items-center"
    },
    nr = {
        class: "mr-8px flex items-center"
    },
    ar = t("img", {
        src: Ce,
        class: "w-20px h-20px"
    }, null, -1),
    sr = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k();
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", Po, [t("div", Ko, [g(l, {
                    class: "small-logo"
                }), t("span", $o, b(n(a).s_n), 1)]), t("div", er, [n(a).a_d_s_s === "true" ? (s(), c("div", tr, [t("div", {
                    class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: m[0] || (m[0] = (...x) => n(i) && n(i)(...x))
                }), T(" App ")])) : o("", !0), t("div", nr, [n(r) ? (s(), A(d, {
                    key: 0,
                    class: "mr-0!"
                }, {
                    default: S(() => [ar]),
                    _: 1
                })) : o("", !0)]), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    ir = "data:image/png;base64,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",
    cr = {
        class: "navbar-wrap px-$mg py-0!"
    },
    or = {
        key: 0,
        class: "flex items-center"
    },
    rr = {
        class: "w-auto max-w-88px h-auto max-h-44px mr-8px"
    },
    lr = ["src"],
    ur = {
        class: "name font-ali text-$btn-text"
    },
    mr = {
        key: 1,
        class: "text-lg font-ali text-$primary"
    },
    dr = {
        class: "flex items-center"
    },
    Ar = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo), m = O(), l = B(() => m.path === "/mine");
            return (d, v) => {
                const x = Y;
                return s(), c("div", cr, [n(l) ? (s(), c("div", mr, b(n(p).a), 1)) : (s(), c("div", or, [t("div", rr, [t("img", {
                    class: "w-44px h-44px",
                    src: n(a).s_l
                }, null, 8, lr)]), t("p", ur, b(n(a).s_n), 1)])), t("div", dr, [n(a).a_d_s_s === "true" ? (s(), c("img", {
                    key: 0,
                    class: "w-22px h-22px mr-20px",
                    src: ct,
                    onClick: v[0] || (v[0] = (...j) => n(i) && n(i)(...j))
                })) : o("", !0), g(x), t("img", {
                    class: u(["w-22px h-22px ml-10px", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    src: ir,
                    onClick: v[1] || (v[1] = j => d.$router.push("/notice"))
                }, null, 2)])])
            }
        }
    }),
    pr = y(Ar, [
        ["__scopeId", "data-v-6935d39b"]
    ]),
    br = e => (N("data-v-be3f6ec0"), e = e(), M(), e),
    fr = {
        class: "navbar-wrap"
    },
    vr = {
        class: "w-full px-$mg flex justify-between items-center"
    },
    gr = {
        class: "app-info-wrap"
    },
    hr = {
        class: "w-40px h-auto max-h-40px"
    },
    yr = ["src"],
    wr = {
        class: "font-bold text-base text-$primary ml-4px"
    },
    xr = {
        class: "tools-wrap"
    },
    _r = br(() => t("div", {
        class: "i-ri:message-2-fill w-20px h-20px text-$primary"
    }, null, -1)),
    Ir = [_r],
    Zr = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo);
            return (p, m) => {
                const l = Y;
                return s(), c("div", fr, [t("div", vr, [t("div", gr, [t("div", hr, [t("img", {
                    class: "w-full h-full",
                    src: n(a).s_l
                }, null, 8, yr)]), t("div", wr, b(n(a).s_n), 1)]), t("div", xr, [g(l), t("div", {
                    class: u(["ml-4px w-30px h-30px bg-#fff shadow-$box-shadow bg-opacity-20 rounded-full flex items-center justify-center", {
                        "animate-bounce": n(r).i_n_m
                    }]),
                    onClick: m[0] || (m[0] = d => p.$router.push("/notice"))
                }, Ir, 2)])])])
            }
        }
    }),
    Br = y(Zr, [
        ["__scopeId", "data-v-be3f6ec0"]
    ]),
    Yr = {
        id: "navBarItem",
        class: "nav-bar-content h-full w-full"
    },
    jr = {
        class: "left"
    },
    Tr = {
        class: "w-40px h-40px rounded-20px shrink-0 p-0!"
    },
    Sr = ["src"],
    kr = {
        class: "right"
    },
    Dr = {
        class: "flex items-center"
    },
    Er = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo), p = B(() => C(a.value.s_n));
            return (m, l) => {
                const d = Y;
                return s(), c("div", Yr, [t("div", jr, [t("div", Tr, [t("img", {
                    class: "w-full h-full rounded-20px",
                    src: n(a).s_l
                }, null, 8, Sr)]), t("div", {
                    class: "text-$primary font-bold px-12px text-20px ml-6px",
                    style: L({
                        fontSize: n(p)
                    })
                }, b(n(a).s_n), 5)]), t("div", kr, [t("div", Dr, [t("div", {
                    class: u(["i-bxs:message-alt-dots w-24px h-24px cursor-pointer text-$primary", {
                        "animate-bounce": n(r).i_n_m
                    }]),
                    onClick: l[0] || (l[0] = v => m.$router.push("/notice"))
                }, null, 2), g(d, {
                    class: "ml-8px shrink-0"
                })])])])
            }
        }
    }),
    Nr = {
        class: "navbar-wrap"
    },
    Mr = {
        class: "w-full px-$mg flex justify-between items-center"
    },
    Fr = {
        class: "app-info-wrap"
    },
    zr = {
        class: "w-40px h-auto max-h-40px"
    },
    Lr = ["src"],
    Cr = {
        class: "font-bold text-bas ml-4px"
    },
    Qr = {
        class: "tools-wrap"
    },
    Rr = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo);
            return (p, m) => {
                const l = q;
                return s(), c("div", Nr, [t("div", Mr, [t("div", Fr, [t("div", zr, [t("img", {
                    class: "w-full h-full",
                    src: n(a).s_l
                }, null, 8, Lr)]), t("div", Cr, b(n(a).s_n), 1)]), t("div", Qr, [t("div", {
                    class: "w-30px h-30px bg-#fff bg-opacity-20 rounded-full flex items-center justify-center",
                    onClick: m[0] || (m[0] = d => p.$router.push("/language"))
                }, [g(l, {
                    class: "w-20px h-20px",
                    name: "5-lang"
                })]), t("div", {
                    class: u(["ml-16px w-30px h-30px bg-#fff bg-opacity-20 rounded-full flex items-center justify-center", {
                        "animate-bounce": n(r).i_n_m
                    }]),
                    onClick: m[1] || (m[1] = d => p.$router.push("/notice"))
                }, [g(l, {
                    class: "w-16px h-16px",
                    name: "5-message"
                })], 2)])])])
            }
        }
    }),
    qr = y(Rr, [
        ["__scopeId", "data-v-f0cbe1ed"]
    ]),
    Gr = {
        class: "navbar-wrap px-$mg py-0!"
    },
    Ur = {
        key: 0,
        class: "flex items-center"
    },
    Jr = {
        class: "w-auto max-w-88px h-auto max-h-44px mr-8px"
    },
    Hr = ["src"],
    Xr = {
        class: "name font-ali c-$nav-border! text-white!"
    },
    Or = {
        key: 1,
        class: "text-lg font-ali text-$primary"
    },
    Vr = {
        class: "flex items-center"
    },
    Wr = {
        key: 0,
        class: "bg-#2b3139 px-14px py-8px text-12px rounded-full flex items-center"
    },
    Pr = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo), m = O(), l = B(() => m.path === "/mine");
            return (d, v) => {
                const x = Y;
                return s(), c("div", Gr, [n(l) ? (s(), c("div", Or, b(n(p).a), 1)) : (s(), c("div", Ur, [t("div", Jr, [t("img", {
                    class: "w-44px h-44px",
                    src: n(a).s_l
                }, null, 8, Hr)]), t("p", Xr, b(n(a).s_n), 1)])), t("div", Vr, [n(a).a_d_s_s === "true" ? (s(), c("div", Wr, [t("div", {
                    class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: v[0] || (v[0] = (...j) => n(i) && n(i)(...j))
                }), T(" App ")])) : o("", !0), g(x, {
                    class: "mx-8px"
                }), t("div", {
                    class: u(["i-ic:sharp-notifications-none w-22px h-22px cursor-pointer text-$primary", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: v[1] || (v[1] = j => d.$router.push("/notice"))
                }, null, 2)])])
            }
        }
    }),
    Kr = y(Pr, [
        ["__scopeId", "data-v-5fdf6f8b"]
    ]),
    $r = {
        id: "navBarItem",
        class: "nav-bar-content h-full w-full"
    },
    el = {
        class: "left"
    },
    tl = {
        class: "w-40px h-40px rounded-20px shrink-0 p-0!"
    },
    nl = ["src"],
    al = {
        class: "right"
    },
    sl = {
        class: "flex items-center"
    },
    il = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = B(() => C(a.value.s_n));
            return (r, p) => {
                const m = Y;
                return s(), c("div", $r, [t("div", el, [t("div", tl, [t("img", {
                    class: "w-full h-full rounded-20px",
                    src: n(a).s_l
                }, null, 8, nl)]), t("div", {
                    class: "text-$primary font-bold px-12px text-20px ml-6px",
                    style: L({
                        fontSize: n(i)
                    })
                }, b(n(a).s_n), 5)]), t("div", al, [t("div", sl, [g(m, {
                    class: "ml-8px shrink-0"
                })])])])
            }
        }
    }),
    cl = {
        class: "navbar-wrap"
    },
    ol = {
        class: "w-full px-$mg flex justify-between items-center"
    },
    rl = {
        class: "app-info-wrap"
    },
    ll = {
        class: "w-40px h-auto max-h-40px"
    },
    ul = ["src"],
    ml = {
        class: "font-bold text-bas ml-4px"
    },
    dl = {
        class: "tools-wrap"
    },
    Al = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo);
            return (p, m) => {
                const l = q;
                return s(), c("div", cl, [t("div", ol, [t("div", rl, [t("div", ll, [t("img", {
                    class: "w-full h-full",
                    src: n(a).s_l
                }, null, 8, ul)]), t("div", ml, b(n(a).s_n), 1)]), t("div", dl, [t("div", {
                    class: "w-30px h-30px bg-#fff bg-opacity-20 rounded-full flex items-center justify-center",
                    onClick: m[0] || (m[0] = d => p.$router.push("/language"))
                }, [g(l, {
                    class: "w-20px h-20px",
                    name: "5-lang"
                })]), t("div", {
                    class: u(["ml-16px w-30px h-30px bg-#fff bg-opacity-20 rounded-full flex items-center justify-center", {
                        "animate-bounce": n(r).i_n_m
                    }]),
                    onClick: m[1] || (m[1] = d => p.$router.push("/notice"))
                }, [g(l, {
                    class: "w-16px h-16px",
                    name: "5-message"
                })], 2)])])])
            }
        }
    }),
    pl = y(Al, [
        ["__scopeId", "data-v-1b3bdaea"]
    ]),
    Re = e => (N("data-v-856ef604"), e = e(), M(), e),
    bl = {
        class: "navbar-wrap px-$mg py-0!"
    },
    fl = {
        class: "flex items-center"
    },
    vl = {
        class: "ww-44px h-44px mr-8px"
    },
    gl = ["src"],
    hl = {
        class: "name font-ali c-$nav-border! text-white!"
    },
    yl = {
        class: "flex items-center"
    },
    wl = Re(() => t("div", {
        class: "i-mdi:download-outline w-25px h-25px cursor-pointer"
    }, null, -1)),
    xl = Re(() => t("div", {
        class: "i-ep:service w-22px h-22px cursor-pointer mx-10px"
    }, null, -1)),
    _l = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo);
            return (m, l) => {
                const d = Y;
                return s(), c("div", bl, [t("div", fl, [t("div", vl, [t("img", {
                    class: "w-44px h-44px",
                    src: n(a).s_l
                }, null, 8, gl)]), t("p", hl, b(n(a).s_n), 1)]), t("div", yl, [n(a).a_d_s_s === "true" ? (s(), c("div", {
                    key: 0,
                    class: "bg-$primary px-4px rounded-full flex items-center h-28px",
                    onClick: l[0] || (l[0] = (...v) => n(i) && n(i)(...v))
                }, [wl, T(" APP ")])) : o("", !0), g(d, {
                    class: "mx-10px"
                }), t("div", {
                    class: u(["i-ic:sharp-notifications-none w-22px h-22px cursor-pointer mx-10px", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: l[1] || (l[1] = v => m.$router.push("/notice"))
                }, null, 2), g(G, null, {
                    default: S(() => [xl]),
                    _: 1
                })])])
            }
        }
    }),
    Il = y(_l, [
        ["__scopeId", "data-v-856ef604"]
    ]),
    Zl = {
        id: "navBarItem21",
        class: "nav-bar-content h-full w-full"
    },
    Bl = {
        class: "right"
    },
    Yl = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), {
                isLogin: i
            } = k(), r = B(() => C(a.value.s_n));
            return (p, m) => {
                const l = F,
                    d = E,
                    v = Y;
                return s(), c("div", Zl, [t("p", {
                    class: "name font-crafter shrink-0",
                    style: L(`font-size:${n(r)} !important`)
                }, [g(l, {
                    class: "small-logo"
                }), T(b(n(a).s_n), 1)], 4), t("div", Bl, [n(i) ? (s(), A(d, {
                    key: 0,
                    class: "shrink-0"
                })) : o("", !0), g(v, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    jl = {
        id: "navBarItem20",
        class: "nav-bar-content h-full w-full"
    },
    Tl = {
        class: "left name font-playgram"
    },
    Sl = {
        class: "font-playgram text-truncate c-$nav-text!"
    },
    kl = {
        class: "right"
    },
    Dl = {
        class: "flex items-center"
    },
    El = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), {
                isLogin: i
            } = k();
            return (r, p) => {
                const m = F,
                    l = E,
                    d = Y;
                return s(), c("div", jl, [t("div", Tl, [g(m, {
                    class: "small-logo"
                }), t("span", Sl, b(n(a).s_n), 1)]), t("div", kl, [t("div", Dl, [n(i) ? (s(), A(l, {
                    key: 0,
                    class: "mr-0!"
                })) : o("", !0)]), g(d, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    Nl = {
        id: "navBarItem19",
        class: "nav-bar-content h-full w-full"
    },
    Ml = {
        class: "left name font-playgram"
    },
    Fl = {
        class: "font-playgram text-truncate"
    },
    zl = {
        class: "right"
    },
    Ll = {
        class: "mr-8px flex items-center"
    },
    Cl = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), {
                isLogin: i
            } = k();
            return (r, p) => {
                const m = F,
                    l = E,
                    d = Y;
                return s(), c("div", Nl, [t("div", Ml, [g(m, {
                    class: "small-logo"
                }), t("span", Fl, b(n(a).s_n), 1)]), t("div", zl, [t("div", Ll, [n(i) ? (s(), A(l, {
                    key: 0,
                    class: "mr-0!"
                })) : o("", !0)]), g(d, {
                    class: "base-lang-wrap"
                })])])
            }
        }
    }),
    Ql = {
        class: "left"
    },
    Rl = {
        class: "right"
    },
    ql = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const a = O(),
                {
                    siteInfo: i
                } = I(),
                {
                    isLogin: r
                } = k(),
                p = B(() => C(i.value.s_n));
            return (m, l) => {
                const d = F,
                    v = E,
                    x = Y;
                return s(), c("div", {
                    class: u(["nav-bar-content nav-bar-item18 h-full w-full", {
                        "no-bg": !["/"].includes(n(a).path)
                    }])
                }, [t("div", Ql, [m.showLogo ? (s(), A(d, {
                    key: 0
                })) : o("", !0), t("p", {
                    class: "name font-ali",
                    style: L({
                        fontSize: n(p)
                    })
                }, b(n(i).s_n), 5)]), t("div", Rl, [n(r) ? (s(), A(v, {
                    key: 0,
                    class: "mr-4px!"
                })) : o("", !0), g(x, {
                    class: "shrink-0 base-lang-wrap"
                })])], 2)
            }
        }
    }),
    Gl = {
        class: "navbar-wrap px-$mg py-0!"
    },
    Ul = {
        class: "flex items-center"
    },
    Jl = {
        class: "w-auto max-w-88px h-auto max-h-44px mr-8px"
    },
    Hl = ["src"],
    Xl = {
        class: "name font-ali c-$nav-border! text-white!"
    },
    Ol = {
        class: "flex items-center"
    },
    Vl = {
        key: 0,
        class: "bg-#5ae9b5 px-10px text-12px rounded-full flex items-center"
    },
    Wl = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo);
            return (m, l) => {
                const d = Y;
                return s(), c("div", Gl, [t("div", Ul, [t("div", Jl, [t("img", {
                    class: "w-44px h-44px",
                    src: n(a).s_l
                }, null, 8, Hl)]), t("p", Xl, b(n(a).s_n), 1)]), t("div", Ol, [n(a).a_d_s_s === "true" ? (s(), c("div", Vl, [t("img", {
                    src: "data:image/png;base64,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",
                    class: "w-20px h-20px cursor-pointer mr-2px",
                    onClick: l[0] || (l[0] = (...v) => n(i) && n(i)(...v))
                }), T(" App ")])) : o("", !0), g(d, {
                    class: "mx-10px"
                }), t("img", {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAYAAAAmNZ4aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBGREQ3QkFBN0IxQTExRUI5NzkzQjg5OTg4RjJCNzhBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBGREQ3QkFCN0IxQTExRUI5NzkzQjg5OTg4RjJCNzhBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEZERDdCQTg3QjFBMTFFQjk3OTNCODk5ODhGMkI3OEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEZERDdCQTk3QjFBMTFFQjk3OTNCODk5ODhGMkI3OEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7+QZjGAAADp0lEQVR42sSWeUjUQRTHf5amVIpSKRWklv6Ru0WlkJLYRYcmYpCWZBoZIhlZGkneN15LRGoSLRSYdkkXCUEZYqGmGMluGhSBZaUZaRHlrrvbd7a3u+PP364mQQMfZubNm3nz5s1lJ+u5IVhJB0AK8BemTq/BHXBftWrP42noC3ay59fEsiiQB/w42Sh4AX6BD8AZLAAeYKWo/0WQoVoT/dm24a6rfL0O7OfqTaAGdIIhK2OsAztBLDcJNrlAlf/ed9YNt9ebyvdAOJU7wHHQPtWSqdbHmMvyjoYCZNlUZR4Hof2NVL9ZwrhOAKkgnMpXQCBop7ptJk4iB7KtQAMWgTb50zp3K4b1XkABMJD+Foil8vQQr8CG2GbIg6kdxvXl0oa1+mIggGEQTeXpI7X8G+M60ZZOOvHyh5c8JAzrIgAUdGVgnMrTx1rS6irBEOndlDLsSI2NEgN7i+qzgScvk9+94ACWTfI6NEGP9tukFwydR2LDDmAUjHADzgUtoA+kcbJWkh0jmRvoBr3yxvOJEl53c2NugU4zcDTFmMUBs9MbuNg5gxAwB8SQbD4IAk7cXnAFcoBJ6SMmGzaPOQC0YDNQsCZ7Y1wFwQ24ghHqMggOgl2giGRDdLlEcrK34DDYATIlPF5NpbPgG6gFceCovUGDM8cmIAhhdEuZ0mWCT/WEOakTTiiRKaX2F8aOpGIb9J7IlGdq6Lo1xriJYpD51zvaxq6W1VYmon0pYJvsGa1Ap6kPM3yaBlkClP/CsOxcmS/aqkinQJ10UkOG+0197AWNjj1pWRS3Q/QCJQszTDJFSQB7HoEDe9HUaRn55kaNbi1/nNhMirkzd4Sdu5l4LCstTIGsHbiDT8bLydImQ93H4rHl2kumHWt6f01pHmA7f0zSw8J8T2ShIAEEkLgFxKizcz9yR6uKSu//GLa8MFGUvwIDYB/rTO+tFvSBL/TcuQD26jiBbdw8voMKdX5B4YTJ5eaws7uJqnlijxdS7kJfGTeRc95WwsqM9QL2h6pWlxT9nGA0I4ud8VSqVqBdSR6bDRsoX0w5O/Dsfr1O9RCwHazgxu2hr06Durxk2GjoVMZymqQGslaM/4Mbr9L8A/FLTTeV2UWfZtxwOPBkdFDkHbtnqyme5uiBr4Qd8KWcpS4invqGqRWlD8Qe99Ov0lYaoytSQbpsGb0o3lI/jQBuwwn0QaRdrdPP5LiymCbRWQ2yobebPoI+tNQvzUttMBiE/5F+CzAAg0qaOfcchkwAAAAASUVORK5CYII=",
                    class: u(["w-22px h-22px cursor-pointer", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: l[1] || (l[1] = v => m.$router.push("/notice"))
                }, null, 2)])])
            }
        }
    }),
    Pl = y(Wl, [
        ["__scopeId", "data-v-5febafd3"]
    ]),
    Kl = e => (N("data-v-2c67c35b"), e = e(), M(), e),
    $l = {
        class: "w-full h-40px bg-$primary flex justify-center items-center"
    },
    eu = ["href"],
    tu = Kl(() => t("div", {
        class: "i-icon-park-outline:telegram w-25px h-25px"
    }, null, -1)),
    nu = f({
        __name: "HeaderTopBanner",
        setup(e) {
            const {
                headerContent: a
            } = I();
            return (i, r) => (s(), c("div", $l, [T(b(i.$t("header_top_text")) + " ", 1), n(a).home_top_tips_url ? (s(), c("a", {
                key: 0,
                href: n(a).home_top_tips_url,
                target: "_blank",
                class: "flex items-center"
            }, [T(b(n(a).home_top_tips_name), 1), tu], 8, eu)) : o("", !0)]))
        }
    }),
    au = y(nu, [
        ["__scopeId", "data-v-2c67c35b"]
    ]),
    su = {
        class: "navbar-wrap px-$mg py-0!"
    },
    iu = {
        key: 0,
        class: "flex items-center"
    },
    cu = {
        class: "w-auto max-w-88px h-auto max-h-44px mr-8px"
    },
    ou = ["src"],
    ru = {
        class: "name font-ali c-$nav-border! text-white!"
    },
    lu = {
        key: 1,
        class: "text-lg font-ali font-bold"
    },
    uu = {
        class: "flex items-center"
    },
    mu = {
        key: 0,
        class: "bg-#2b3139 px-10px py-4px text-12px rounded-full flex items-center"
    },
    du = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo), p = O(), m = B(() => p.path === "/mine");
            return (l, d) => {
                const v = au,
                    x = Y;
                return s(), c(z, null, [g(v), t("div", su, [n(m) ? (s(), c("div", lu, b(n(r).a), 1)) : (s(), c("div", iu, [t("div", cu, [t("img", {
                    class: "w-44px h-44px",
                    src: n(a).s_l
                }, null, 8, ou)]), t("p", ru, b(n(a).s_n), 1)])), t("div", uu, [n(a).a_d_s_s === "true" ? (s(), c("div", mu, [t("div", {
                    class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                    onClick: d[0] || (d[0] = j => l.$router.push("/download"))
                }), T(" App ")])) : o("", !0), g(x, {
                    class: "mx-8px"
                }), t("div", {
                    class: u(["i-ic:sharp-notifications-none w-22px h-22px cursor-pointer text-#001dff", {
                        "animate-bounce": n(r).i_n_m
                    }]),
                    onClick: d[1] || (d[1] = j => l.$router.push("/notice"))
                }, null, 2)])])], 64)
            }
        }
    }),
    Au = y(du, [
        ["__scopeId", "data-v-9d4c7db5"]
    ]),
    pu = {
        id: "navBarItem",
        class: "nav-bar-content h-full w-full"
    },
    bu = {
        class: "left"
    },
    fu = {
        class: "w-40px h-40px rounded-20px shrink-0 p-0!"
    },
    vu = ["src"],
    gu = {
        class: "right"
    },
    hu = {
        class: "flex items-center"
    },
    yu = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = B(() => C(a.value.s_n));
            return (r, p) => {
                const m = Y;
                return s(), c("div", pu, [t("div", bu, [t("div", fu, [t("img", {
                    class: "w-full h-full rounded-20px",
                    src: n(a).s_l
                }, null, 8, vu)]), t("div", {
                    class: "name px-12px text-20px font-mono ml-6px",
                    style: L({
                        fontSize: n(i)
                    })
                }, b(n(a).s_n), 5)]), t("div", gu, [t("div", hu, [g(m, {
                    class: "ml-8px shrink-0"
                })])])])
            }
        }
    }),
    wu = y(yu, [
        ["__scopeId", "data-v-06d16e39"]
    ]),
    qe = e => (N("data-v-30591912"), e = e(), M(), e),
    xu = {
        class: "navbar-wrap px-$mg py-0!"
    },
    _u = {
        class: "flex items-center"
    },
    Iu = {
        class: "min-w-46px max-w-120px h-full max-h-46px mr-8px"
    },
    Zu = ["src"],
    Bu = {
        class: "name text-#FF9E00! logo-name"
    },
    Yu = {
        class: "flex items-center"
    },
    ju = qe(() => t("div", {
        class: "i-mdi:download-outline w-25px h-25px cursor-pointer"
    }, null, -1)),
    Tu = qe(() => t("div", {
        class: "i-ep:service w-22px h-22px cursor-pointer mx-10px"
    }, null, -1)),
    Su = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo);
            return (m, l) => {
                const d = Y;
                return s(), c("div", xu, [t("div", _u, [t("div", Iu, [t("img", {
                    class: "min-w-46px max-w-120px h-full max-h-46px",
                    src: n(a).s_l
                }, null, 8, Zu)]), t("p", Bu, b(n(a).s_n), 1)]), t("div", Yu, [n(a).a_d_s_s === "true" ? (s(), c("div", {
                    key: 0,
                    class: "bg-$primary px-4px rounded-full flex items-center h-28px",
                    onClick: l[0] || (l[0] = (...v) => n(i) && n(i)(...v))
                }, [ju, T(" APP ")])) : o("", !0), g(d, {
                    class: "mx-10px"
                }), t("div", {
                    class: u(["i-ic:sharp-notifications-none w-22px h-22px cursor-pointer mx-10px", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: l[1] || (l[1] = v => m.$router.push("/notice"))
                }, null, 2), g(G, null, {
                    default: S(() => [Tu]),
                    _: 1
                })])])
            }
        }
    }),
    ku = y(Su, [
        ["__scopeId", "data-v-30591912"]
    ]),
    Du = {
        id: "navBarItem",
        class: "nav-bar-content h-full w-full"
    },
    Eu = {
        class: "left"
    },
    Nu = {
        class: "right flex items-center"
    },
    Mu = t("div", {
        class: "i-uiw:cloud-download w-20px h-20px mr-4px"
    }, null, -1),
    Fu = t("div", {
        class: "i-bxs:message-square-detail w-20px h-20px"
    }, null, -1),
    zu = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), {
                isLogin: r
            } = k(), p = B(() => C(a.value.s_n));
            return (m, l) => {
                const d = F,
                    v = E,
                    x = Y;
                return s(), c("div", Du, [t("div", Eu, [m.showLogo ? (s(), A(d, {
                    key: 0
                })) : o("", !0), t("p", {
                    class: "name font-ali c-$nav-border! text-white!",
                    style: L({
                        fontSize: n(p)
                    })
                }, b(n(a).s_n), 5)]), t("div", Nu, [n(a).a_d_s_s === "true" ? (s(), c("div", {
                    key: 0,
                    class: "bg-white text-$primary px-10px py-4px h-28px rd-full flex items-center mr-8px",
                    onClick: l[0] || (l[0] = (...j) => n(i) && n(i)(...j))
                }, [Mu, T(" App ")])) : o("", !0), n(r) ? (s(), A(v, {
                    key: 1,
                    class: "bg-$bg-card!"
                }, {
                    default: S(() => [Fu]),
                    _: 1
                })) : o("", !0), g(x)])])
            }
        }
    }),
    Lu = e => (N("data-v-c79da835"), e = e(), M(), e),
    Cu = {
        class: "navbar-wrap px-$mg py-0!"
    },
    Qu = {
        class: "flex items-center"
    },
    Ru = {
        class: "w-46px h-46px mr-10px"
    },
    qu = ["src"],
    Gu = {
        class: "text-base font-bold"
    },
    Uu = {
        class: "flex items-center"
    },
    Ju = {
        class: "flex items-center"
    },
    Hu = Lu(() => t("div", {
        class: "i-carbon:user-avatar-filled w-40px h-40px rounded-full"
    }, null, -1)),
    Xu = {
        class: "ml-10px"
    },
    Ou = {
        class: "text-white"
    },
    Vu = {
        class: ""
    },
    Wu = {
        class: "flex items-center text-$text-gray"
    },
    Pu = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo), p = B(() => i.isLogin);
            return (m, l) => {
                const d = Y;
                return s(), c("div", Cu, [n(p) ? (s(), c(z, {
                    key: 1
                }, [t("div", Ju, [Hu, t("div", Xu, [t("div", Ou, b(n(r).a), 1), t("div", Vu, b(n(r).l_n), 1)])]), t("div", Wu, [t("div", {
                    class: "i-ic:sharp-settings navbar-icon w-30px h-30px mr-20px",
                    onClick: l[0] || (l[0] = v => m.$router.push("/settings"))
                }), t("div", {
                    class: u(["i-clarity:notification-solid navbar-icon w-30px h-30px", {
                        "animate-bounce": n(r).i_n_m
                    }]),
                    onClick: l[1] || (l[1] = v => m.$router.push("/notice"))
                }, null, 2)])], 64)) : (s(), c(z, {
                    key: 0
                }, [t("div", Qu, [t("div", Ru, [t("img", {
                    class: "w-46px h-46px rounded-full",
                    src: n(a).s_l
                }, null, 8, qu)]), t("div", Gu, b(n(a).s_n), 1)]), t("div", Uu, [g(d, {
                    class: "ml-10px"
                })])], 64))])
            }
        }
    }),
    Ku = y(Pu, [
        ["__scopeId", "data-v-c79da835"]
    ]),
    $u = e => (N("data-v-f730f780"), e = e(), M(), e),
    em = {
        class: "navbar-wrap px-$mg py-0!"
    },
    tm = {
        class: "flex items-center"
    },
    nm = {
        class: "w-46px h-46px mr-10px"
    },
    am = ["src"],
    sm = {
        class: "text-base font-bold text-$primary"
    },
    im = {
        class: "flex items-center"
    },
    cm = $u(() => t("div", {
        class: "i-uiw:cloud-download w-20px h-20px mr-20px"
    }, null, -1)),
    om = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo);
            return (m, l) => {
                const d = Y;
                return s(), c("div", em, [t("div", tm, [t("div", nm, [t("img", {
                    class: "w-46px h-46px rounded",
                    src: n(a).s_l
                }, null, 8, am)]), t("div", sm, b(n(a).s_n), 1)]), t("div", im, [n(a).a_d_s_s === "true" ? (s(), c("div", {
                    key: 0,
                    class: "bg-#5ae9b5 text-white px-10px py-4px rd-full flex items-center",
                    onClick: l[0] || (l[0] = (...v) => n(i) && n(i)(...v))
                }, [cm, T(" App ")])) : o("", !0), t("div", {
                    class: u(["i-material-symbols:mail-sharp w-20px h-20px mx-10px", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: l[1] || (l[1] = v => m.$router.push("/notice"))
                }, null, 2), g(d, {
                    class: "ml-10px"
                })])])
            }
        }
    }),
    rm = y(om, [
        ["__scopeId", "data-v-f730f780"]
    ]),
    lm = {
        id: "navBarItem",
        class: "nav-bar-content h-full w-full"
    },
    um = {
        class: "left"
    },
    mm = {
        class: "right"
    },
    dm = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), {
                isLogin: i
            } = k(), r = B(() => C(a.value.s_n));
            return (p, m) => {
                const l = F,
                    d = q,
                    v = E,
                    x = Y;
                return s(), c("div", lm, [t("div", um, [p.showLogo ? (s(), A(l, {
                    key: 0
                })) : o("", !0), t("p", {
                    class: "name font-ali c-$nav-border!",
                    style: L({
                        fontSize: n(r)
                    })
                }, b(n(a).s_n), 5)]), t("div", mm, [n(i) ? (s(), A(v, {
                    key: 0
                }, {
                    default: S(() => [g(d, {
                        name: "5-message",
                        class: "w-16px h-16px"
                    })]),
                    _: 1
                })) : o("", !0), g(x)])])
            }
        }
    }),
    Am = {
        class: "navbar-wrap px-$mg py-0!"
    },
    pm = {
        class: "flex items-center"
    },
    bm = {
        class: "w-46px h-46px mr-10px"
    },
    fm = ["src"],
    vm = {
        class: "text-base font-bold text-$primary"
    },
    gm = {
        class: "flex items-center"
    },
    hm = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo);
            return (m, l) => {
                const d = Y;
                return s(), c("div", Am, [t("div", pm, [t("div", bm, [t("img", {
                    class: "w-46px h-46px",
                    src: n(a).s_l
                }, null, 8, fm)]), t("div", vm, b(n(a).s_n), 1)]), t("div", gm, [n(a).a_d_s_s === "true" ? (s(), c("img", {
                    key: 0,
                    class: "w-23px h-23px",
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEVHcEwZ37MZ37MoKCgZ37MZ37MZ37MZ37MZ37MZ37Mgj3YkVkslSkIfmn8mQjwcs5IZ2rAcvJgnMzAnLCsmOzYbyKEa0agjYVMcv5sazqYib14lUEcdqIohf2oheGWySaRQAAAACnRSTlMAKP//7yXzrfIn1jQ8CAAAAMtJREFUOMvt1ckWgjAMBdCYJ0KBtMyK0/9/phtxgGDjwp1vfc9pk7YpUZJmHEmWJkRuy4ZsHaVsSkqZDe6IjZnD2gMA4A8RuMc9+wgsJ1j84a9hEBHpJuhFRIIGByjpFViVS+crbem+mbv2oBcT2hmUtarzd3dcb8/x1ZXVOqxOT9f0nxo+PvqIc+TNTAVdIkfIop/gEvIVALoxDrkA2sAGOHjkbIE8BLbByEipcy31EjbafUSzhIUKi+/3aB6k5tG8sQ37DZGzfB+ObntDE0pB4221AAAAAElFTkSuQmCC",
                    onClick: l[0] || (l[0] = (...v) => n(i) && n(i)(...v))
                })) : o("", !0), t("img", {
                    class: u(["w-23px h-23px cursor-pointer ml-20px", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAY1BMVEVHcEwbxZ8oKyonNTIZ37MoKCgZ37MZ37MZ37MZ37MmOzYdp4genoElT0Ydro0mQjsbzKQcv5ofjnYnLi0cuJUa0Kga06olSUEbwZwmPjga2a4kWU0gh3Afl3wib14heWYeoIMro3SXAAAACnRSTlMA////7///rfImWMb4LgAAAMFJREFUOMvd1bsSgyAUhGFAdxVFNGrM/fL+T5kimUxEDKdN/pavoGAWpWxRMlFZWKVsTkG5VQVFFaqUwVJR2C/BqUU0F0DPLip7HufQOHaHpbtw28wh4KirgJk7ux1CuJRDTd1iCUOZee4rxCDqT5mNHDPEofmQ1eblYhCm5uZ5etD0A1bhW7Yda4Mv8CV3W7r3ZeMQxnN/m9gjBTF4kmekIcy1P0ECw/4YNqsueOF6TTb6B5ciDcVDKp5m8dhLv48HGV4mN68hs/MAAAAASUVORK5CYII=",
                    onClick: l[1] || (l[1] = v => m.$router.push("/notice"))
                }, null, 2), g(d, {
                    class: "ml-10px"
                })])])
            }
        }
    }),
    ym = y(hm, [
        ["__scopeId", "data-v-6d035344"]
    ]),
    wm = {
        id: "navBarItem",
        class: "nav-bar-content h-full w-full"
    },
    xm = {
        class: "left"
    },
    _m = {
        class: "w-40px h-40px rounded-20px shrink-0 p-0!"
    },
    Im = ["src"],
    Zm = {
        class: "right"
    },
    Bm = {
        class: "flex items-center"
    },
    Ym = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo), {
                isLogin: p
            } = k(), m = B(() => C(a.value.s_n));
            return (l, d) => {
                const v = q,
                    x = Y;
                return s(), c("div", wm, [t("div", xm, [t("div", _m, [t("img", {
                    class: "w-full h-full rounded-20px",
                    src: n(a).s_l
                }, null, 8, Im)]), t("div", {
                    class: "px-12px text-$primary text-20px font-600 box-border h-40px leading-40px bg-[rgba(255,255,255,0.13)] border border-solid border-$border-color rounded-$radius ml-6px",
                    style: L({
                        fontSize: n(m)
                    })
                }, b(n(a).s_n), 5)]), t("div", Zm, [t("div", Bm, [n(p) ? (s(), c("div", {
                    key: 0,
                    class: u(["base-small-btn", {
                        "animate-bounce": n(r).i_n_m
                    }]),
                    onClick: d[0] || (d[0] = j => l.$router.push("/notice"))
                }, [g(v, {
                    name: "7-msg",
                    class: "w-20px h-20px"
                })], 2)) : o("", !0), g(x, {
                    class: "ml-8px shrink-0"
                })])])])
            }
        }
    }),
    Ge = e => (N("data-v-c72bc2bf"), e = e(), M(), e),
    jm = {
        class: "navbar-wrap"
    },
    Tm = {
        class: "w-full px-$mg flex justify-between items-center"
    },
    Sm = {
        class: "app-info-wrap"
    },
    km = {
        class: "w-40px h-auto max-h-40px"
    },
    Dm = ["src"],
    Em = {
        class: "font-bold text-bas ml-4px"
    },
    Nm = {
        class: "tools-wrap"
    },
    Mm = Ge(() => t("div", {
        class: "i-material-symbols:globe-asia-sharp w-20px h-20px"
    }, null, -1)),
    Fm = [Mm],
    zm = Ge(() => t("div", {
        class: "i-ic:outline-message w-20px h-20px"
    }, null, -1)),
    Lm = [zm],
    Cm = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo);
            return (p, m) => (s(), c("div", jm, [t("div", Tm, [t("div", Sm, [t("div", km, [t("img", {
                class: "w-full h-full",
                src: n(a).s_l
            }, null, 8, Dm)]), t("div", Em, b(n(a).s_n), 1)]), t("div", Nm, [t("div", {
                class: "w-30px h-30px bg-#fff bg-opacity-20 text-$primary rounded-full flex items-center justify-center",
                onClick: m[0] || (m[0] = l => p.$router.push("/language"))
            }, Fm), t("div", {
                class: u(["ml-16px w-30px h-30px bg-#fff text-$primary bg-opacity-20 rounded-full flex items-center justify-center", {
                    "animate-bounce": n(r).i_n_m
                }]),
                onClick: m[1] || (m[1] = l => p.$router.push("/notice"))
            }, Lm, 2)])])]))
        }
    }),
    Qm = y(Cm, [
        ["__scopeId", "data-v-c72bc2bf"]
    ]),
    Rm = {
        class: "navbar-wrap"
    },
    qm = {
        class: "w-full px-$mg flex justify-between items-center"
    },
    Gm = {
        class: "app-info-wrap"
    },
    Um = {
        class: "w-40px h-auto max-h-40px"
    },
    Jm = ["src"],
    Hm = {
        class: "font-bold text-bas ml-4px"
    },
    Xm = {
        class: "tools-wrap"
    },
    Om = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), i = D(), r = B(() => i.userInfo);
            return (p, m) => {
                const l = q;
                return s(), c("div", Rm, [t("div", qm, [t("div", Gm, [t("div", Um, [t("img", {
                    class: "w-full h-full",
                    src: n(a).s_l
                }, null, 8, Jm)]), t("div", Hm, b(n(a).s_n), 1)]), t("div", Xm, [t("div", {
                    class: "w-30px h-30px bg-#fff bg-opacity-20 rounded-full flex items-center justify-center",
                    onClick: m[0] || (m[0] = d => p.$router.push("/language"))
                }, [g(l, {
                    class: "w-20px h-20px",
                    name: "5-lang"
                })]), t("div", {
                    class: u(["ml-16px w-30px h-30px bg-#fff bg-opacity-20 rounded-full flex items-center justify-center", {
                        "animate-bounce": n(r).i_n_m
                    }]),
                    onClick: m[1] || (m[1] = d => p.$router.push("/notice"))
                }, [g(l, {
                    class: "w-16px h-16px",
                    name: "5-message"
                })], 2)])])])
            }
        }
    }),
    Vm = y(Om, [
        ["__scopeId", "data-v-6bb2cb15"]
    ]),
    Wm = {
        id: "navBarItem",
        class: "nav-bar-content h-full w-full"
    },
    Pm = {
        class: "left"
    },
    Km = {
        class: "right"
    },
    $m = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), {
                isLogin: i
            } = k(), r = B(() => C(a.value.s_n));
            return (p, m) => {
                const l = F,
                    d = E,
                    v = G,
                    x = Fe;
                return s(), c("div", Wm, [t("div", Pm, [p.showLogo ? (s(), A(l, {
                    key: 0
                })) : o("", !0), t("p", {
                    class: "font-ali name",
                    style: L({
                        fontSize: n(r)
                    })
                }, b(n(a).s_n), 5)]), t("div", Km, [n(i) ? (s(), A(d, {
                    key: 0
                })) : o("", !0), g(v), g(x)])])
            }
        }
    }),
    ed = e => (N("data-v-3371c7ea"), e = e(), M(), e),
    td = {
        class: "navbar-wrap px-$mg py-0!"
    },
    nd = {
        class: "flex items-center"
    },
    ad = {
        class: "w-auto max-w-88px h-auto max-h-44px mr-2px"
    },
    sd = ["src"],
    id = {
        class: "flex items-center"
    },
    cd = ed(() => t("div", {
        class: "i-ep:service w-22px h-22px cursor-pointer mx-10px"
    }, null, -1)),
    od = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo), m = B(() => C(a.value.s_n));
            return (l, d) => {
                const v = Y;
                return s(), c("div", td, [t("div", nd, [t("div", ad, [t("img", {
                    class: "w-full max-w-88px h-full max-h-44px",
                    src: n(a).s_l
                }, null, 8, sd)]), t("p", {
                    class: "font-ali name",
                    style: L({
                        fontSize: n(m)
                    })
                }, b(n(a).s_n), 5)]), t("div", id, [n(a).a_d_s_s === "true" ? (s(), c("div", {
                    key: 0,
                    class: "i-mdi:download-outline w-25px mt-4px h-25px cursor-pointer mx-10px",
                    onClick: d[0] || (d[0] = (...x) => n(i) && n(i)(...x))
                })) : o("", !0), g(v, {
                    class: "mx-10px"
                }), t("div", {
                    class: u(["i-ic:sharp-notifications-none w-22px h-22px cursor-pointer mx-10px", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: d[1] || (d[1] = x => l.$router.push("/notice"))
                }, null, 2), g(G, null, {
                    default: S(() => [cd]),
                    _: 1
                })])])
            }
        }
    }),
    rd = y(od, [
        ["__scopeId", "data-v-3371c7ea"]
    ]),
    ld = e => (N("data-v-0c361219"), e = e(), M(), e),
    ud = {
        class: "navbar-wrap"
    },
    md = {
        class: "w-full flex justify-center"
    },
    dd = {
        class: "app-info-wrap"
    },
    Ad = {
        class: "w-88px h-auto md:w-136px"
    },
    pd = ["src"],
    bd = {
        class: "tools-wrap mt-[-8px]"
    },
    fd = ld(() => t("div", {
        class: "i-ep:service w-22px h-22px md:w-30px md:h-30px text-$primary cursor-pointer mx-10px"
    }, null, -1)),
    vd = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a,
                handleDownLoad: i
            } = I(), r = D(), p = B(() => r.userInfo);
            return (m, l) => {
                const d = Y;
                return s(), c("div", ud, [t("div", md, [t("div", dd, [t("div", Ad, [t("img", {
                    class: "w-full h-full",
                    src: n(a).s_l
                }, null, 8, pd)])])]), t("div", bd, [n(a).a_d_s_s === "true" ? (s(), c("div", {
                    key: 0,
                    class: "i-mdi:download-outline w-25px mt-4px h-25px md:w-30px md:h-30px text-$primary cursor-pointer mx-10px",
                    onClick: l[0] || (l[0] = (...v) => n(i) && n(i)(...v))
                })) : o("", !0), g(d, {
                    class: "mx-10px"
                }), t("div", {
                    class: u(["i-ic:sharp-notifications-none w-22px h-22px md:w-30px md:h-30px text-$primary cursor-pointer mx-10px", {
                        "animate-bounce": n(p).i_n_m
                    }]),
                    onClick: l[1] || (l[1] = v => m.$router.push("/notice"))
                }, null, 2), g(G, null, {
                    default: S(() => [fd]),
                    _: 1
                })])])
            }
        }
    }),
    gd = y(vd, [
        ["__scopeId", "data-v-0c361219"]
    ]),
    hd = {
        id: "navBarItem",
        class: "nav-bar-content h-full w-full"
    },
    yd = {
        class: "left"
    },
    wd = {
        class: "right"
    },
    xd = f({
        __name: "NavBar",
        props: {
            showLogo: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const {
                siteInfo: a
            } = I(), {
                isLogin: i
            } = k(), r = B(() => C(a.value.s_n));
            return (p, m) => {
                const l = F,
                    d = E,
                    v = G,
                    x = Fe;
                return s(), c("div", hd, [t("div", yd, [p.showLogo ? (s(), A(l, {
                    key: 0
                })) : o("", !0), t("p", {
                    class: "font-ali name",
                    style: L({
                        fontSize: n(r)
                    })
                }, b(n(a).s_n), 5)]), t("div", wd, [n(i) ? (s(), A(d, {
                    key: 0
                })) : o("", !0), g(v), g(x)])])
            }
        }
    }),
    _d = {
        class: "nav-bar"
    },
    Id = f({
        __name: "NavBar",
        setup(e) {
            Ne(p => ({
                40579418: n(i)
            }));
            const {
                theme: a
            } = I(), i = tt(0);

            function r() {
                const p = document.documentElement.scrollTop;
                i.value = p / 140 > 1 ? 1 : p / 140
            }
            return nt(() => {
                window.addEventListener("scroll", r)
            }), at(() => {
                window.removeEventListener("scroll", r)
            }), (p, m) => {
                const l = xd,
                    d = gd,
                    v = rd,
                    x = $m,
                    j = Vm,
                    P = Qm,
                    _ = Ym,
                    H = ym,
                    K = dm,
                    Z = rm,
                    U = Ku,
                    X = zu,
                    Q = ku,
                    $ = wu,
                    ee = Au,
                    te = Pl,
                    ne = ql,
                    ae = Cl,
                    se = El,
                    ie = Yl,
                    ce = Il,
                    oe = pl,
                    re = il,
                    le = Kr,
                    ue = qr,
                    me = Er,
                    de = Br,
                    Ae = pr,
                    pe = sr,
                    be = Wo,
                    fe = Co,
                    ve = Bo,
                    ge = go,
                    he = ro,
                    ye = Vc,
                    we = Rc,
                    xe = Ec,
                    _e = Zc,
                    Ie = vc,
                    Ze = lc,
                    Be = tc,
                    Ye = Xi,
                    je = Ci,
                    Te = Si,
                    Se = yi;
                return s(), c("div", {
                    class: u(["nav-bar-wrap", {
                        "is-scroll-state": n(i) > .1
                    }])
                }, [t("div", _d, [n(a) === 1 ? (s(), A(l, {
                    key: 0
                })) : o("", !0), n(a) === 2 ? (s(), A(d, {
                    key: 1
                })) : o("", !0), n(a) === 3 ? (s(), A(v, {
                    key: 2
                })) : o("", !0), n(a) === 4 ? (s(), A(x, {
                    key: 3
                })) : o("", !0), n(a) === 5 ? (s(), A(j, {
                    key: 4
                })) : o("", !0), n(a) === 6 ? (s(), A(P, {
                    key: 5
                })) : o("", !0), n(a) === 7 ? (s(), A(_, {
                    key: 6
                })) : o("", !0), n(a) === 8 ? (s(), A(H, {
                    key: 7
                })) : o("", !0), n(a) === 9 ? (s(), A(K, {
                    key: 8
                })) : o("", !0), n(a) === 10 ? (s(), A(Z, {
                    key: 9
                })) : o("", !0), n(a) === 11 ? (s(), A(U, {
                    key: 10
                })) : o("", !0), n(a) === 12 ? (s(), A(X, {
                    key: 11
                })) : o("", !0), n(a) === 13 ? (s(), A(Q, {
                    key: 12
                })) : o("", !0), n(a) === 14 ? (s(), A($, {
                    key: 13
                })) : o("", !0), n(a) === 15 ? (s(), A(ee, {
                    key: 14
                })) : o("", !0), n(a) === 16 ? (s(), A(te, {
                    key: 15
                })) : o("", !0), n(a) === 18 ? (s(), A(ne, {
                    key: 16
                })) : o("", !0), n(a) === 19 ? (s(), A(ae, {
                    key: 17
                })) : o("", !0), n(a) === 20 ? (s(), A(se, {
                    key: 18
                })) : o("", !0), n(a) === 21 ? (s(), A(ie, {
                    key: 19
                })) : o("", !0), n(a) === 22 ? (s(), A(ce, {
                    key: 20
                })) : o("", !0), n(a) === 23 ? (s(), A(oe, {
                    key: 21
                })) : o("", !0), n(a) === 24 ? (s(), A(re, {
                    key: 22
                })) : o("", !0), n(a) === 25 ? (s(), A(le, {
                    key: 23
                })) : o("", !0), n(a) === 26 ? (s(), A(ue, {
                    key: 24
                })) : o("", !0), n(a) === 27 ? (s(), A(me, {
                    key: 25
                })) : o("", !0), n(a) === 28 ? (s(), A(de, {
                    key: 26
                })) : o("", !0), n(a) === 29 ? (s(), A(Ae, {
                    key: 27
                })) : o("", !0), n(a) === 30 ? (s(), A(pe, {
                    key: 28
                })) : o("", !0), n(a) === 31 ? (s(), A(be, {
                    key: 29
                })) : o("", !0), n(a) === 32 ? (s(), A(fe, {
                    key: 30
                })) : o("", !0), n(a) === 33 ? (s(), A(ve, {
                    key: 31
                })) : o("", !0), n(a) === 34 ? (s(), A(ge, {
                    key: 32
                })) : o("", !0), n(a) === 35 ? (s(), A(he, {
                    key: 33
                })) : o("", !0), n(a) === 36 ? (s(), A(ye, {
                    key: 34
                })) : o("", !0), n(a) === 37 ? (s(), A(we, {
                    key: 35
                })) : o("", !0), n(a) === 38 ? (s(), A(xe, {
                    key: 36
                })) : o("", !0), n(a) === 39 ? (s(), A(_e, {
                    key: 37
                })) : o("", !0), n(a) === 40 ? (s(), A(Ie, {
                    key: 38
                })) : o("", !0), n(a) === 41 ? (s(), A(Ze, {
                    key: 39
                })) : o("", !0), n(a) === 42 ? (s(), A(Be, {
                    key: 40
                })) : o("", !0), n(a) === 43 ? (s(), A(Ye, {
                    key: 41
                })) : o("", !0), n(a) === 44 ? (s(), A(je, {
                    key: 42,
                    opacity: n(i)
                }, null, 8, ["opacity"])) : o("", !0), n(a) === 45 ? (s(), A(Te, {
                    key: 43
                })) : o("", !0), n(a) === 46 ? (s(), A(Se, {
                    key: 44
                })) : o("", !0)])], 2)
            }
        }
    }),
    Zd = f({
        __name: "default",
        setup(e) {
            const {
                theme: a
            } = I(), i = O();
            return (r, p) => {
                const m = Id,
                    l = li,
                    d = st("router-view"),
                    v = ni;
                return s(), c("div", {
                    class: u(["box-border min-h-full w-full", {
                        "layout-tab-bar": r.$route.meta.clayout === "tabbar",
                        "px-$mg": n(i).meta.clayout === "tabbar" && ![1, 4].includes(n(a)),
                        "pt-45px": r.$route.meta.clayout === "second"
                    }])
                }, [
                    [1, 4].includes(n(a)) ? o("", !0) : V((s(), A(m, {
                        key: 0
                    }, null, 512)), [
                        [W, r.$route.meta.clayout === "tabbar" || r.$route.path === "/team" && n(a) === 2]
                    ]), n(a) !== 2 ? V((s(), A(l, {
                        key: 1
                    }, null, 512)), [
                        [W, r.$route.meta.clayout === "second"]
                    ]) : V((s(), A(l, {
                        key: 2
                    }, null, 512)), [
                        [W, r.$route.meta.clayout === "second" && r.$route.path !== "/team"]
                    ]), g(d, null, {
                        default: S(({
                            Component: x
                        }) => [(s(), A(it, null, [r.$route.meta.keepAlive ? (s(), A(Ee(x), {
                            key: r.$route.path
                        })) : o("", !0)], 1024)), r.$route.meta.keepAlive ? o("", !0) : (s(), A(Ee(x), {
                            key: r.$route.path
                        }))]),
                        _: 1
                    }), V(g(v, {
                        class: "fixed bottom-0 z-2"
                    }, null, 512), [
                        [W, r.$route.meta.clayout === "tabbar" || n(a) === 2 && r.$route.path === "/team"]
                    ])
                ], 2)
            }
        }
    }),
    Dd = y(Zd, [
        ["__scopeId", "data-v-f5703ed9"]
    ]);
export {
    Dd as
    default
};