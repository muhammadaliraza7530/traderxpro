import {
    a as S,
    _ as te
} from "./ReturnBack.vue_vue_type_script_setup_true_lang-Duv-tCvh.js";
import {
    d as G,
    z as pe,
    B as ae,
    i as me,
    o as s,
    c as m,
    l as i,
    y as u,
    a as t,
    t as n,
    e,
    x as oe,
    F as N,
    b9 as z,
    j as $e,
    u as D,
    ah as Me,
    h as ie,
    L as Ne,
    C as he,
    a5 as He,
    a4 as ue,
    an as re,
    b4 as Ee,
    be as Ge,
    b3 as De,
    a3 as ze,
    b8 as Se,
    bf as Je,
    H as le,
    q as h,
    a9 as B,
    b as a,
    ao as J,
    n as ne,
    w as ce,
    A as _e,
    m as xe
} from "./index-B4hRM2Oj.js";
import {
    _ as q
} from "./ContainerForm-BOuzy9Hh.js";
import {
    C as Q
} from "./index-k8VsE6Zx.js";
import {
    _ as Y,
    a as qe,
    b as Qe,
    c as ge,
    d as Ye
} from "./login-pic-CAsftUuU.js";
import {
    _ as X
} from "./BaseUserTab.vue_vue_type_style_index_0_lang-C-Fqh1bS.js";
import {
    _ as se
} from "./BaseLogo.vue_vue_type_script_setup_true_lang-BQzgg0y_.js";
import {
    _ as K
} from "./LangLabel.vue_vue_type_script_setup_true_lang-BIh3e-_2.js";
import {
    _ as de
} from "./BaseHelpBtn.vue_vue_type_script_setup_true_lang-B10Mv3am.js";
import {
    _ as Xe
} from "./icon-download-BHzF4Fri.js";
const Ke = {
        class: "text-center mt-20px text-14px flex items-center justify-center"
    },
    Ze = t("div", {
        class: "i-material-symbols:info-rounded text-20px mr-5px"
    }, null, -1),
    Z = G({
        __name: "TgAutoLoginBtn",
        setup(H) {
            const {
                tgLogin: g
            } = pe(), I = ae(!1), x = me();
            async function $() {
                var c;
                try {
                    I.value = !0, await g((c = window.Telegram) == null ? void 0 : c.WebApp.initData), x.push("/")
                } catch (p) {
                    console.error(p)
                } finally {
                    I.value = !1
                }
            }
            return (c, p) => {
                const U = z;
                return s(), m(N, null, [i(U, {
                    class: "mt-40px!",
                    loading: e(I),
                    onClick: $
                }, {
                    default: u(() => [t("span", null, n(c.$t("auth.tgAutologinBtn")), 1)]),
                    _: 1
                }, 8, ["loading"]), t("div", Ke, [Ze, oe(" " + n(c.$t("auth.tgAutologinBtnDesc")), 1)])], 64)
            }
        }
    });

function ee() {
    const {
        registerInfo: H,
        isTg: g
    } = D(), {
        t: I
    } = Me(), x = me(), $ = pe(), c = $e(), p = ae(!0), U = ie(() => c.siteInfo), b = ae(H.value.r_a_s), F = ae(!1), M = ie(() => {
        const L = [];
        return H.value.r_a_s === "0" ? (L.push({
            label: I("loginByEmail"),
            category: 1
        }), L.push({
            label: I("loginByPhone"),
            category: 2
        })) : H.value.r_a_s === "1" ? L.push({
            label: I("loginByEmail"),
            category: 1
        }) : H.value.r_a_s === "2" && L.push({
            label: I("loginByPhone"),
            category: 2
        }), H.value.username_register_status === "true" && L.push({
            label: I("loginByUsername"),
            category: 3
        }), H.value.telegram_register_status === "true" && L.push({
            label: I("loginByTelegram"),
            category: 4
        }), L
    }), P = ae(1);
    b.value === "0" || b.value === "1" ? P.value = 1 : b.value === "2" ? P.value = 2 : b.value === "3" && H.value.username_register_status === "true" ? P.value = 3 : b.value === "3" && H.value.telegram_register_status === "true" && (P.value = 4);
    const R = ae(c.siteInfo.s_d_p_c || "+1"),
        A = ae(!1),
        V = ae(!1),
        r = Ne({
            email: "",
            pwd: "",
            code: "",
            phone: "",
            username: "",
            tg: ""
        });
    he(() => {
        const L = localStorage.getItem("account");
        if (L) {
            const {
                accountType: T,
                account: _,
                countryCode: v,
                pwd: d
            } = JSON.parse(L);
            P.value = T, r.email = T === 1 ? _ : "", r.phone = T === 2 ? _ : "", r.username = T === 3 ? _ : "", r.tg = T === 4 ? _ : "", R.value = v, r.pwd = d, F.value = !0
        }
    });

    function o() {
        const L = ae(!1),
            T = ae("");

        function _() {
            L.value = !0, ue.getCaptcha().then(v => {
                const d = [];
                d.push(v), T.value = window.URL.createObjectURL(new Blob(d, {
                    type: "application/zip"
                })), L.value = !1, c.resetApiCount()
            }).catch(v => {
                L.value = !1, re(v.message || v.msg)
            })
        }
        return {
            loading: L,
            captcha: T,
            getCaptcha: _
        }
    }
    const {
        loading: l,
        captcha: f,
        getCaptcha: j
    } = o(), w = ae(!1);
    async function y() {
        try {
            let L = "";
            P.value === 1 ? L = r.email : P.value === 2 ? L = R.value + r.phone : P.value === 3 ? L = r.username : P.value === 4 && (L = r.tg);
            const T = await ue.getLoginConfig({
                    a: L
                }),
                {
                    data: _
                } = T;
            V.value = _.i_s_c === 1, V.value && j()
        } catch (L) {
            console.error("Error in getLoginConfig:", L)
        }
    }
    async function C() {
        if (!w.value) {
            for (const L in r) Object.prototype.hasOwnProperty.call(r, L) && (r[L] = r[L].replace(/\s*/g, ""));
            for (const L in r) Object.prototype.hasOwnProperty.call(r, L) && (r[L] = r[L].replace(/[\p{C}\p{Z}]/gu, ""));
            if (P.value === 1) {
                const L = Ee(r.email);
                if (!L.type) {
                    re(I(L.msg));
                    return
                }
            } else if (P.value === 2) {
                const L = Ge(r.phone);
                if (!L.type) {
                    re(I(L.msg));
                    return
                }
            } else if (P.value === 3) {
                const L = De(r.username);
                if (!L.type) {
                    re(I(L.msg));
                    return
                }
            } else if (P.value === 4 && r.tg === "") {
                re(I("login.telegram.toast1"));
                return
            }
            if (r.pwd === "") {
                re(I("auth.password.toast1"));
                return
            }
            if ((V.value || U.value.e_t_s_p === "0") && !r.code) {
                re(I("auth.vcode.toast1"));
                return
            }
            if (!p.value) {
                re(I("auth.ruleCheck.toast1"));
                return
            }
            w.value = !0, ze();
            try {
                let L = "";
                P.value === 1 ? L = r.email : P.value === 2 ? L = R.value + r.phone : P.value === 3 ? L = r.username : P.value === 4 && (L = r.tg);
                const {
                    data: T,
                    msg: _
                } = await ue.login({
                    a: L,
                    p: Se(r.pwd),
                    c: r.code
                });
                Je(T.t, T.e_t), F.value && (localStorage.setItem("account", JSON.stringify({
                    accountType: P.value,
                    account: P.value === 2 ? r.phone : L,
                    countryCode: R.value,
                    pwd: r.pwd
                })), localStorage.setItem("rememberMe", "true")), await $.getUserInfo(), await c.getHome(), c.addPopItem("annouceShow"), c.collectEvent("login"), c.siteInfo.lottery_is_pop === "true" && c.siteInfo.i_r_l === "true" && c.addPopItem("showLotteryPop"), re(_), x.push("/")
            } catch {
                y()
            } finally {
                w.value = !1
            }
        }
    }
    const W = ie(() => !(g.value && P.value === 4)),
        O = He(() => {
            C()
        }, 500);
    return he(() => {
        U.value.e_t_s_p === "0" && j(), window.Telegram && window.Telegram.WebApp.initData && (c.isTg = !0)
    }), {
        currentTab: P,
        tabs: M,
        register_account_status: b,
        form: r,
        is_show_code: V,
        submitForm: O,
        countryCode: R,
        captchaLoading: l,
        captcha: f,
        getCaptcha: j,
        check: A,
        loginLoading: w,
        ruleCheck: p,
        showNotTgAutoLoginBtn: W,
        rememberMe: F
    }
}

function eo() {
    const H = me(),
        g = pe(),
        I = $e(),
        x = ae(!1);
    async function $() {
        var c;
        if ((c = window.Telegram) != null && c.WebApp.initData && I.registerInfo.telegram_register_status === "true" && I.isTgAutoLogin) try {
            await g.tgLogin(window.Telegram.WebApp.initData), H.push("/")
        } catch (p) {
            console.error("Error in getLoginConfig:", p), H.push(p.status ? `/403?code=${p.status}&msg=${p.msg}` : "/403")
        } else x.value = !0
    }
    return {
        isTgAutoLogin: $,
        showPage: x
    }
}
const oo = {
        class: "login"
    },
    to = {
        class: "top-info"
    },
    lo = {
        class: "flex justify-end"
    },
    so = {
        class: "py-30px"
    },
    no = {
        class: "text-center text-24px font-bold mt-10px"
    },
    ao = {
        class: "login-content"
    },
    ro = {
        onsubmit: "return func()"
    },
    io = ["src"],
    uo = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    po = {
        class: "flex items-center my-16px"
    },
    mo = {
        class: "ml-4px"
    },
    co = {
        class: "login-tools px-20px"
    },
    ho = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    $o = {
        class: "ml-2px"
    },
    _o = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V,
                rememberMe: r
            } = ee();
            return (o, l) => {
                const f = K,
                    j = se,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", oo, [i(v, null, {
                    default: u(() => [t("div", to, [t("div", lo, [i(f)]), t("div", so, [i(j, {
                        class: "w-70px h-70px mx-auto",
                        radius: "10px"
                    }), t("div", no, n(e(g).s_n), 1)])]), t("div", ao, [i(L, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [e($).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": l[0] || (l[0] = d => B(x) ? x.value = d : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", ro, [e(x) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(c).email = d),
                            class: "mt-0! min-h-44px!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(c).phone = d),
                            class: "min-h-44px!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [i(C, {
                                modelValue: e(U),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(U) ? U.value = d : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(c).username = d),
                            class: "min-h-44px!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(c).tg = d),
                            class: "min-h-44px!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(c).pwd = d),
                            class: "min-h-44px!",
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, null, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(c).code = d),
                            class: "min-h-44px!",
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(P)())
                            }, [e(M) ? (s(), m("div", uo)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, io))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), t("div", po, [i(W, {
                            modelValue: e(r),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(r) ? r.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", mo, n(o.$t("login.rememberMe")), 1)])], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", co, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center border border-$primary border-solid text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: l[10] || (l[10] = d => o.$router.push("/register"))
                    }, n(o.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", ho, [i(W, {
                        modelValue: e(A),
                        "onUpdate:modelValue": l[11] || (l[11] = d => B(A) ? A.value = d : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", $o, n(o.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[12] || (l[12] = d => o.$router.push("/termOfUse"))
                    }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[13] || (l[13] = d => o.$router.push("/privacyPolicy"))
                    }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    xo = {
        class: "login"
    },
    go = {
        class: "flex items-center"
    },
    vo = {
        class: "mx-16px"
    },
    yo = ["src"],
    fo = {
        class: "flex items-center ml-auto"
    },
    ko = t("div", {
        class: "i-uiw:cloud-download w-20px h-20px mr-20px"
    }, null, -1),
    Vo = t("div", {
        class: "i-mingcute:service-fill w-20px h-20px text-$primary"
    }, null, -1),
    wo = {
        class: "top-tools mt-10px pl-20px"
    },
    bo = {
        class: "login-content"
    },
    Co = {
        class: "mb-50px"
    },
    Uo = {
        class: "font-bold text-2xl text-$primary"
    },
    Lo = {
        class: "mt-10px text-$text-gray!"
    },
    Bo = {
        onsubmit: "return func()"
    },
    Ao = {
        key: 0,
        class: "mt-20px text-$text-gray!"
    },
    To = {
        key: 2,
        class: "mt-20px text-$text-gray!"
    },
    Po = {
        key: 4,
        class: "mt-20px text-$text-gray!"
    },
    Io = {
        key: 0,
        class: "mt-20px text-$text-gray!"
    },
    Wo = {
        class: "mt-20px text-$text-gray!"
    },
    jo = {
        key: 2,
        class: "mt-20px text-$text-gray!"
    },
    Ro = ["src"],
    Fo = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Oo = {
        class: "flex items-center my-16px"
    },
    Mo = {
        class: "ml-4px"
    },
    No = {
        class: "login-tools px-20px"
    },
    Ho = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    Eo = {
        class: "ml-2px"
    },
    Go = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r,
                rememberMe: o
            } = ee();
            return (l, f) => {
                const j = de,
                    w = K,
                    y = te,
                    C = X,
                    W = J,
                    O = Y,
                    L = Q,
                    T = Z,
                    _ = q,
                    v = z,
                    d = le("RouterLink"),
                    k = S;
                return s(), m("div", xo, [i(k, null, {
                    default: u(() => [t("div", go, [t("div", vo, [t("img", {
                        class: "w-full max-w-46px h-full max-h-46px",
                        src: e(g).s_l
                    }, null, 8, yo)]), t("div", fo, [e(g).a_d_s_s === "true" ? (s(), m("div", {
                        key: 0,
                        class: "bg-#5ae9b5 text-white px-10px py-4px rd-full flex items-center",
                        onClick: f[0] || (f[0] = (...E) => e(x) && e(x)(...E))
                    }, [ko, oe(" App ")])) : a("", !0), i(j, {
                        class: "mx-10px"
                    }, {
                        default: u(() => [Vo]),
                        _: 1
                    }), i(w, {
                        class: "ml-10px"
                    })])]), t("div", wo, [i(y, {
                        class: "text-$text-gray!"
                    })]), t("div", bo, [i(_, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", Co, [t("div", Uo, n(l.$t("Hello")), 1), t("div", Lo, n(l.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(C, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": f[1] || (f[1] = E => B($) ? $.value = E : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Bo, [e($) === 1 ? (s(), m("div", Ao, n(l.$t("auth.email.placeholder")), 1)) : a("", !0), e($) === 1 ? (s(), h(W, {
                            key: 1,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": f[2] || (f[2] = E => e(p).email = E),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e($) === 2 ? (s(), m("div", To, n(l.$t("auth.phone.placeholder")), 1)) : a("", !0), e($) === 2 ? (s(), h(W, {
                            key: 3,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": f[4] || (f[4] = E => e(p).phone = E),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(O, {
                                modelValue: e(b),
                                "onUpdate:modelValue": f[3] || (f[3] = E => B(b) ? b.value = E : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e($) === 3 ? (s(), m("div", Po, n(l.$t("auth.username.placeholder")), 1)) : a("", !0), e($) === 3 ? (s(), h(W, {
                            key: 5,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": f[5] || (f[5] = E => e(p).username = E),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 6
                        }, [e($) === 4 ? (s(), m("div", Io, n(l.$t("auth.telegram.placeholder")), 1)) : a("", !0), e($) === 4 ? (s(), h(W, {
                            key: 1,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": f[6] || (f[6] = E => e(p).tg = E),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", Wo, n(l.$t("auth.password.placeholder")), 1), i(W, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": f[7] || (f[7] = E => e(p).pwd = E),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(U) || e(g).e_t_s_p === "0" ? (s(), m("div", jo, n(l.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(U) || e(g).e_t_s_p === "0" ? (s(), h(W, {
                            key: 3,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": f[9] || (f[9] = E => e(p).code = E),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: f[8] || (f[8] = E => e(R)())
                            }, [e(P) ? (s(), m("div", Fo)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Ro))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), t("div", Oo, [i(L, {
                            modelValue: e(o),
                            "onUpdate:modelValue": f[10] || (f[10] = E => B(o) ? o.value = E : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Mo, n(l.$t("login.rememberMe")), 1)])], 64)) : (s(), h(T, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", No, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(v, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(l.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center border border-$primary border-solid text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: f[11] || (f[11] = E => l.$router.push("/register"))
                    }, n(l.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(d, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(l.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", Ho, [i(L, {
                        modelValue: e(V),
                        "onUpdate:modelValue": f[12] || (f[12] = E => B(V) ? V.value = E : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", Eo, n(l.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: f[13] || (f[13] = E => l.$router.push("/termOfUse"))
                    }, n(l.$t("auth.termOfUse")), 1), t("span", null, n(l.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: f[14] || (f[14] = E => l.$router.push("/privacyPolicy"))
                    }, n(l.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Do = {
        class: "login"
    },
    zo = {
        class: "top-info relative"
    },
    So = {
        class: "flex items-centerrelative"
    },
    Jo = {
        class: "flex-1 z-2 pt-80px text-center"
    },
    qo = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$text-white"
    },
    Qo = t("img", {
        src: qe,
        class: "w-250px h-auto absolute right-0 top-0 pointer-events-none"
    }, null, -1),
    Yo = {
        class: "top-tools"
    },
    Xo = t("div", null, null, -1),
    Ko = {
        class: "login-content"
    },
    Zo = {
        onsubmit: "return func()"
    },
    et = {
        class: "flex items-center"
    },
    ot = ["src"],
    tt = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    lt = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    st = {
        class: "ml-2px"
    },
    nt = {
        class: "login-tools"
    },
    at = {
        class: "text-$text-gray6"
    },
    rt = {
        class: "ml-5px text-$primary"
    },
    dt = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", Do, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", zo, [t("div", So, [t("div", Jo, [i(f, {
                        class: "w-100px h-100px mx-auto"
                    }), t("p", qo, n(e(g).s_n), 1)]), Qo]), t("div", Yo, [Xo, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", Ko, [i(L, null, {
                        default: u(() => [e(c).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                            options: e(c),
                            class: "mb-20px"
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Zo, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [t("div", et, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, null, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", tt)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, ot))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", lt, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", st, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", nt, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", at, n(o.$t("auth.noRegister")), 1), t("span", rt, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    it = {
        class: "login"
    },
    ut = {
        class: "top-info relative"
    },
    pt = {
        class: "flex items-center pt-40px"
    },
    mt = {
        class: "flex-1 text-center mt-20px"
    },
    ct = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$text-white"
    },
    ht = t("img", {
        src: Qe,
        class: "w-250px h-auto"
    }, null, -1),
    $t = {
        class: "top-tools"
    },
    _t = t("div", null, null, -1),
    xt = {
        class: "login-content"
    },
    gt = {
        onsubmit: "return func()"
    },
    vt = {
        class: "label"
    },
    yt = {
        class: "label"
    },
    ft = {
        class: "flex items-center"
    },
    kt = {
        class: "label"
    },
    Vt = {
        class: "label"
    },
    wt = {
        class: "label"
    },
    bt = ["src"],
    Ct = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Ut = {
        class: "label"
    },
    Lt = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    Bt = {
        class: "ml-2px"
    },
    At = {
        class: "login-tools"
    },
    Tt = {
        class: "text-$text-gray6"
    },
    Pt = {
        class: "ml-5px text-$primary"
    },
    It = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", it, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", ut, [t("div", pt, [t("div", mt, [i(f, {
                        class: "w-100px h-100px mx-auto"
                    }), t("p", ct, n(e(g).s_n), 1)]), ht]), t("div", $t, [_t, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", xt, [i(L, null, {
                        default: u(() => [e(c).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                            options: e(c),
                            class: "mb-32px"
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", gt, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", vt, n(o.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", yt, n(o.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", ft, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", kt, n(o.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", Vt, n(o.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", wt, n(o.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", Ct)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, bt))])]),
                            label: u(() => [t("div", Ut, n(o.$t("auth.vcode.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", Lt, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Bt, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", At, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", Tt, n(o.$t("auth.noRegister")), 1), t("span", Pt, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    Wt = {
        class: "login"
    },
    jt = {
        class: "top-info relative"
    },
    Rt = {
        class: "login-tag"
    },
    Ft = {
        class: "flex items-center"
    },
    Ot = {
        class: "flex-1 text-center"
    },
    Mt = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$text-white"
    },
    Nt = {
        class: "top-tools"
    },
    Ht = t("div", null, null, -1),
    Et = {
        class: "login-content"
    },
    Gt = {
        onsubmit: "return func()"
    },
    Dt = {
        class: "label"
    },
    zt = {
        class: "label"
    },
    St = {
        class: "flex items-center"
    },
    Jt = {
        class: "label"
    },
    qt = {
        class: "label"
    },
    Qt = {
        class: "label"
    },
    Yt = ["src"],
    Xt = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Kt = {
        class: "label"
    },
    Zt = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    el = {
        class: "ml-2px"
    },
    ol = {
        class: "login-tools"
    },
    tl = {
        class: "text-$text-gray6"
    },
    ll = {
        class: "ml-5px text-$primary"
    },
    sl = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", Wt, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", jt, [t("div", Rt, n(o.$t("auth.loginBtn")), 1), t("div", Ft, [t("div", Ot, [i(f, {
                        class: "w-100px h-100px mx-auto"
                    }), t("p", Mt, n(e(g).s_n), 1)])]), t("div", Nt, [Ht, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", Et, [i(L, null, {
                        default: u(() => [e(c).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                            options: e(c),
                            class: "mb-32px"
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Gt, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Dt, n(o.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", zt, n(o.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", St, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", Jt, n(o.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", qt, n(o.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", Qt, n(o.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", Xt)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Yt))])]),
                            label: u(() => [t("div", Kt, n(o.$t("auth.vcode.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", Zt, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", el, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", ol, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", tl, n(o.$t("auth.noRegister")), 1), t("span", ll, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    nl = {
        class: "login"
    },
    al = {
        class: "top-info relative"
    },
    rl = {
        class: "flex items-center pt-40px"
    },
    dl = {
        class: "flex-1 text-center mt-20px"
    },
    il = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$text-white"
    },
    ul = t("img", {
        src: ge,
        class: "w-160px h-auto mr-20px"
    }, null, -1),
    pl = {
        class: "top-tools"
    },
    ml = t("div", null, null, -1),
    cl = {
        class: "login-content"
    },
    hl = {
        onsubmit: "return func()"
    },
    $l = {
        class: "label"
    },
    _l = {
        class: "label"
    },
    xl = {
        class: "flex items-center"
    },
    gl = {
        class: "label"
    },
    vl = {
        class: "label"
    },
    yl = {
        class: "label"
    },
    fl = ["src"],
    kl = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Vl = {
        class: "label"
    },
    wl = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    bl = {
        class: "ml-2px"
    },
    Cl = {
        class: "login-tools"
    },
    Ul = {
        class: "text-$text-gray6"
    },
    Ll = {
        class: "ml-5px text-$primary"
    },
    Bl = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", nl, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", al, [t("div", rl, [t("div", dl, [i(f, {
                        class: "w-100px h-100px mx-auto"
                    }), t("p", il, n(e(g).s_n), 1)]), ul]), t("div", pl, [ml, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", cl, [i(L, null, {
                        default: u(() => [e(c).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                            options: e(c),
                            class: "mb-32px"
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", hl, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", $l, n(o.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", _l, n(o.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", xl, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", gl, n(o.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", vl, n(o.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", yl, n(o.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", kl)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, fl))])]),
                            label: u(() => [t("div", Vl, n(o.$t("auth.vcode.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", wl, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", bl, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", Cl, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", Ul, n(o.$t("auth.noRegister")), 1), t("span", Ll, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    Al = {
        class: "login"
    },
    Tl = {
        class: "top-info relative"
    },
    Pl = {
        class: "flex items-center pt-40px"
    },
    Il = {
        class: "flex-1 text-center"
    },
    Wl = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$btn-text"
    },
    jl = t("img", {
        src: Ye,
        class: "w-160px h-auto mr-20px"
    }, null, -1),
    Rl = {
        class: "top-tools"
    },
    Fl = t("div", null, null, -1),
    Ol = {
        class: "login-content"
    },
    Ml = {
        onsubmit: "return func()"
    },
    Nl = {
        class: "label"
    },
    Hl = {
        class: "label"
    },
    El = {
        class: "flex items-center"
    },
    Gl = {
        class: "label"
    },
    Dl = {
        class: "label"
    },
    zl = {
        class: "label"
    },
    Sl = ["src"],
    Jl = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    ql = {
        class: "label"
    },
    Ql = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    Yl = {
        class: "ml-2px"
    },
    Xl = {
        class: "login-tools"
    },
    Kl = {
        class: "text-$text-gray6"
    },
    Zl = {
        class: "ml-5px text-$primary"
    },
    es = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", Al, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", Tl, [t("div", Pl, [t("div", Il, [i(f, {
                        class: "w-100px h-100px mx-auto"
                    }), t("p", Wl, n(e(g).s_n), 1)]), jl]), t("div", Rl, [Fl, i(j, {
                        class: "base-lang-wrap"
                    })]), e(c).length > 1 ? (s(), h(w, {
                        key: 0,
                        modelValue: e($),
                        "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                        options: e(c)
                    }, null, 8, ["modelValue", "options"])) : a("", !0)]), t("div", Ol, [i(L, null, {
                        default: u(() => [t("form", Ml, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Nl, n(o.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", Hl, n(o.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", El, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", Gl, n(o.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", Dl, n(o.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", zl, n(o.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", Jl)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Sl))])]),
                            label: u(() => [t("div", ql, n(o.$t("auth.vcode.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", Ql, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Yl, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", Xl, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", Kl, n(o.$t("auth.noRegister")), 1), t("span", Zl, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    os = {
        class: "login"
    },
    ts = {
        class: "top-info relative"
    },
    ls = {
        class: "flex items-center pt-40px"
    },
    ss = {
        class: "flex-1 text-center mt-20px"
    },
    ns = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$btn-text"
    },
    as = t("img", {
        src: ge,
        class: "w-160px h-auto mr-20px"
    }, null, -1),
    rs = {
        class: "top-tools"
    },
    ds = t("div", null, null, -1),
    is = {
        class: "login-content"
    },
    us = {
        onsubmit: "return func()"
    },
    ps = {
        class: "flex items-center"
    },
    ms = ["src"],
    cs = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    hs = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    $s = {
        class: "ml-2px"
    },
    _s = {
        class: "login-tools"
    },
    xs = {
        class: "text-$text-gray6"
    },
    gs = {
        class: "ml-5px text-$primary"
    },
    vs = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", os, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", ts, [t("div", ls, [t("div", ss, [i(f, {
                        class: "w-100px h-100px mx-auto"
                    }), t("p", ns, n(e(g).s_n), 1)]), as]), t("div", rs, [ds, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", is, [i(L, null, {
                        default: u(() => [e(c).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                            options: e(c),
                            class: "mb-32px"
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", us, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [t("div", ps, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, null, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", cs)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, ms))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", hs, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", $s, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", _s, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", xs, n(o.$t("auth.noRegister")), 1), t("span", gs, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    ys = {
        class: "login"
    },
    fs = {
        class: "top-info relative"
    },
    ks = {
        class: "flex flex-col items-center text-center"
    },
    Vs = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$text-white"
    },
    ws = {
        class: "top-tools"
    },
    bs = t("div", null, null, -1),
    Cs = {
        class: "login-content"
    },
    Us = {
        onsubmit: "return func()"
    },
    Ls = {
        class: "label"
    },
    Bs = {
        class: "label"
    },
    As = {
        class: "flex items-center"
    },
    Ts = {
        class: "label"
    },
    Ps = {
        class: "label"
    },
    Is = {
        class: "label"
    },
    Ws = ["src"],
    js = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Rs = {
        class: "label"
    },
    Fs = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    Os = {
        class: "ml-2px"
    },
    Ms = {
        class: "login-tools"
    },
    Ns = {
        class: "text-$text-gray6"
    },
    Hs = {
        class: "ml-5px text-$primary"
    },
    Es = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", ys, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", fs, [t("div", ks, [i(f), t("p", Vs, n(e(g).s_n), 1)]), t("div", ws, [bs, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", Cs, [e(c).length > 1 ? (s(), h(w, {
                        key: 0,
                        modelValue: e($),
                        "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                        options: e(c)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(L, null, {
                        default: u(() => [t("form", Us, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Ls, n(o.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", Bs, n(o.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", As, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", Ts, n(o.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", Ps, n(o.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", Is, n(o.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", js)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Ws))])]),
                            label: u(() => [t("div", Rs, n(o.$t("auth.vcode.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", Fs, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Os, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", Ms, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", Ns, n(o.$t("auth.noRegister")), 1), t("span", Hs, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    Gs = {
        class: "login"
    },
    Ds = {
        class: "top-info relative"
    },
    zs = {
        class: "flex flex-col items-center text-center"
    },
    Ss = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$btn-text"
    },
    Js = {
        class: "top-tools"
    },
    qs = t("div", null, null, -1),
    Qs = {
        class: "login-content"
    },
    Ys = {
        onsubmit: "return func()"
    },
    Xs = {
        class: "label"
    },
    Ks = {
        class: "label"
    },
    Zs = {
        class: "flex items-center"
    },
    en = {
        class: "label"
    },
    on = {
        class: "label"
    },
    tn = {
        class: "label"
    },
    ln = ["src"],
    sn = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    nn = {
        class: "label"
    },
    an = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    rn = {
        class: "ml-2px"
    },
    dn = {
        class: "login-tools"
    },
    un = {
        class: "text-$text-gray6"
    },
    pn = {
        class: "ml-5px text-$primary"
    },
    mn = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", Gs, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", Ds, [t("div", zs, [i(f), t("p", Ss, n(e(g).s_n), 1)]), t("div", Js, [qs, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", Qs, [e(c).length > 1 ? (s(), h(w, {
                        key: 0,
                        modelValue: e($),
                        "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                        options: e(c)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(L, null, {
                        default: u(() => [t("form", Ys, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Xs, n(o.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", Ks, n(o.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", Zs, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", en, n(o.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", on, n(o.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", tn, n(o.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", sn)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, ln))])]),
                            label: u(() => [t("div", nn, n(o.$t("auth.vcode.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", an, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", rn, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", dn, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", un, n(o.$t("auth.noRegister")), 1), t("span", pn, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    cn = {
        class: "login"
    },
    hn = {
        class: "top-info relative"
    },
    $n = {
        class: "flex flex-col items-center text-center"
    },
    _n = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$text-white"
    },
    xn = {
        class: "top-tools"
    },
    gn = t("div", null, null, -1),
    vn = {
        class: "login-content"
    },
    yn = {
        onsubmit: "return func()"
    },
    fn = {
        class: "label"
    },
    kn = {
        class: "label"
    },
    Vn = {
        class: "flex items-center"
    },
    wn = {
        class: "label"
    },
    bn = {
        class: "label"
    },
    Cn = {
        class: "label"
    },
    Un = ["src"],
    Ln = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Bn = {
        class: "label"
    },
    An = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    Tn = {
        class: "ml-2px"
    },
    Pn = {
        class: "login-tools"
    },
    In = {
        class: "text-$text-gray6"
    },
    Wn = {
        class: "ml-5px text-$primary"
    },
    jn = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", cn, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", hn, [t("div", $n, [i(f), t("p", _n, n(e(g).s_n), 1)]), t("div", xn, [gn, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", vn, [e(c).length > 1 ? (s(), h(w, {
                        key: 0,
                        modelValue: e($),
                        "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                        options: e(c)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(L, null, {
                        default: u(() => [t("form", yn, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", fn, n(o.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", kn, n(o.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", Vn, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", wn, n(o.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", bn, n(o.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", Cn, n(o.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", Ln)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Un))])]),
                            label: u(() => [t("div", Bn, n(o.$t("auth.vcode.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", An, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Tn, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", Pn, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", In, n(o.$t("auth.noRegister")), 1), t("span", Wn, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    Rn = {
        class: "login"
    },
    Fn = {
        class: "flex items-center"
    },
    On = {
        class: "mx-16px"
    },
    Mn = ["src"],
    Nn = {
        class: "flex items-center ml-auto"
    },
    Hn = {
        class: "top-tools mt-10px pl-20px"
    },
    En = {
        class: "login-content"
    },
    Gn = {
        class: "mb-50px"
    },
    Dn = {
        class: "font-bold text-2xl"
    },
    zn = {
        class: "mt-10px text-$text-gray"
    },
    Sn = {
        onsubmit: "return func()"
    },
    Jn = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    qn = {
        key: 2,
        class: "mt-20px text-$text-gray"
    },
    Qn = {
        key: 4,
        class: "mt-20px text-$text-gray"
    },
    Yn = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    Xn = {
        class: "mt-20px text-$text-gray"
    },
    Kn = {
        key: 2,
        class: "text-$text-gray mt-20px"
    },
    Zn = ["src"],
    ea = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    oa = {
        class: "login-tools px-20px"
    },
    ta = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    la = {
        class: "ml-2px"
    },
    sa = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = K,
                    f = te,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = le("RouterLink"),
                    T = Q,
                    _ = S;
                return s(), m("div", Rn, [i(_, null, {
                    default: u(() => [t("div", Fn, [t("div", On, [t("img", {
                        class: "min-w-46px max-w-120px h-full max-h-46px",
                        src: e(g).s_l
                    }, null, 8, Mn)]), t("div", Nn, [i(l, {
                        class: "mx-10px"
                    })])]), t("div", Hn, [i(f)]), t("div", En, [i(W, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", Gn, [t("div", Dn, n(r.$t("Hello")), 1), t("div", zn, n(r.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e($).length > 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = v => B(x) ? x.value = v : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Sn, [e(x) === 1 ? (s(), m("div", Jn, n(r.$t("auth.email.placeholder")), 1)) : a("", !0), e(x) === 1 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = v => e(c).email = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(x) === 2 ? (s(), m("div", qn, n(r.$t("auth.phone.placeholder")), 1)) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = v => e(c).phone = v),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = v => B(U) ? U.value = v : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e(x) === 3 ? (s(), m("div", Qn, n(r.$t("auth.username.placeholder")), 1)) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 5,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = v => e(c).username = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 6
                        }, [e(x) === 4 ? (s(), m("div", Yn, n(r.$t("auth.telegram.placeholder")), 1)) : a("", !0), e(x) === 4 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = v => e(c).tg = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", Xn, n(r.$t("auth.password.placeholder")), 1), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = v => e(c).pwd = v),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(p) || e(g).e_t_s_p === "0" ? (s(), m("div", Kn, n(r.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = v => e(c).code = v),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = v => e(P)())
                            }, [e(M) ? (s(), m("div", ea)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Zn))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", oa, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-54px text-center border border-$primary border-solid text-$primary leading-54px cursor-pointer rounded-$radius mt-20px",
                        onClick: o[9] || (o[9] = v => r.$router.push("/register"))
                    }, n(r.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(L, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(r.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", ta, [i(T, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = v => B(A) ? A.value = v : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", la, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = v => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = v => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    na = {
        class: "login"
    },
    aa = {
        class: "top-info relative"
    },
    ra = {
        class: ":uno: flex flex-col items-center text-center"
    },
    da = {
        class: "top-tools"
    },
    ia = {
        class: "w-100px h-100px rounded-20px mt-50px border border-solid border-[rgba(255,255,255,0.5)] bg-white bg-opacity-0 flex items-center justify-center"
    },
    ua = ["src"],
    pa = {
        class: ":uno: font-ali mb-4px mt-4px text-20px text-$primary"
    },
    ma = {
        class: "login-content"
    },
    ca = {
        onsubmit: "return func()"
    },
    ha = t("div", {
        class: "i-material-symbols:mail-outline-rounded w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    $a = t("div", {
        class: "i-ic:round-phone-android w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    _a = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    xa = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    ga = t("div", {
        class: "i-material-symbols:lock-open-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    va = t("div", {
        class: "i-material-symbols:confirmation-number-outline w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    ya = ["src"],
    fa = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    ka = {
        class: "login-tools"
    },
    Va = {
        class: "ml-5px text-$primary"
    },
    wa = {
        key: 1,
        class: "mt-20px cursor-pointer text-center justify-center text-sm flex items-center flex-wrap"
    },
    ba = {
        class: "ml-2px"
    },
    Ca = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = Q,
                    T = S;
                return s(), m("div", na, [i(T, null, {
                    default: u(() => [t("div", aa, [t("div", ra, [t("div", da, [i(l), i(f, {
                        class: "relative z-2",
                        type: "text"
                    })]), t("div", ia, [t("img", {
                        class: "w-90px h-90px rounded-20px",
                        src: e(g).s_l
                    }, null, 8, ua)]), t("p", pa, n(e(g).s_n), 1)])]), t("div", ma, [i(W, null, {
                        default: u(() => [e($).length > 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", ca, [e(x) === 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            left: u(() => [ha]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [$a, i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            left: u(() => [_a]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            left: u(() => [xa]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            left: u(() => [ga]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            left: u(() => [va]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", fa)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, ya))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", ka, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-sm text-center",
                        onClick: o[9] || (o[9] = _ => r.$router.push("/register"))
                    }, [t("span", null, n(r.$t("auth.noRegister")), 1), t("span", Va, n(r.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), e(I) ? (s(), m("div", wa, [i(L, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = _ => B(A) ? A.value = _ : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", ba, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = _ => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = _ => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Ua = {
        class: "login"
    },
    La = {
        class: "top-info relative"
    },
    Ba = {
        class: "flex flex-col items-center text-center"
    },
    Aa = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$text-white"
    },
    Ta = {
        class: "top-tools"
    },
    Pa = t("div", null, null, -1),
    Ia = {
        class: "login-content"
    },
    Wa = {
        onsubmit: "return func()"
    },
    ja = {
        class: "flex items-center"
    },
    Ra = ["src"],
    Fa = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Oa = {
        key: 5,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    Ma = {
        class: "ml-2px"
    },
    Na = {
        class: "login-tools"
    },
    Ha = {
        class: "text-$text-gray6"
    },
    Ea = {
        class: "ml-5px text-$primary"
    },
    Ga = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Z,
                    O = Q,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", Ua, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", La, [t("div", Ba, [i(f), t("p", Aa, n(e(g).s_n), 1)]), t("div", Ta, [Pa, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", Ia, [i(L, null, {
                        default: u(() => [e(c).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Wa, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [t("div", ja, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, null, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", Fa)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Ra))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(W, {
                            key: 4
                        })), e(I) ? (s(), m("div", Oa, [i(O, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Ma, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])]),
                        _: 1
                    }), t("div", Na, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", Ha, n(o.$t("auth.noRegister")), 1), t("span", Ea, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    Da = {
        class: "login"
    },
    za = {
        class: "flex items-center"
    },
    Sa = {
        class: "mx-16px"
    },
    Ja = ["src"],
    qa = {
        class: "flex items-center ml-auto"
    },
    Qa = {
        class: "top-tools mt-10px pl-20px"
    },
    Ya = {
        class: "login-content"
    },
    Xa = {
        class: "mb-50px"
    },
    Ka = {
        class: "font-bold text-2xl"
    },
    Za = {
        class: "mt-10px text-$text-gray"
    },
    er = {
        onsubmit: "return func()"
    },
    or = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    tr = {
        key: 2,
        class: "mt-20px text-$text-gray"
    },
    lr = {
        key: 4,
        class: "mt-20px text-$text-gray"
    },
    sr = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    nr = {
        class: "mt-20px text-$text-gray"
    },
    ar = {
        key: 2,
        class: "text-$text-gray mt-20px"
    },
    rr = ["src"],
    dr = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    ir = {
        class: "login-tools px-20px"
    },
    ur = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    pr = {
        class: "ml-2px"
    },
    mr = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = K,
                    f = te,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = le("RouterLink"),
                    T = Q,
                    _ = S;
                return s(), m("div", Da, [i(_, null, {
                    default: u(() => [t("div", za, [t("div", Sa, [t("img", {
                        class: "min-w-46px max-w-120px h-full max-h-46px",
                        src: e(g).s_l
                    }, null, 8, Ja)]), t("div", qa, [i(l, {
                        class: "mx-10px"
                    })])]), t("div", Qa, [i(f)]), t("div", Ya, [i(W, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", Xa, [t("div", Ka, n(r.$t("Hello")), 1), t("div", Za, n(r.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e($).length > 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = v => B(x) ? x.value = v : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", er, [e(x) === 1 ? (s(), m("div", or, n(r.$t("auth.email.placeholder")), 1)) : a("", !0), e(x) === 1 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = v => e(c).email = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(x) === 2 ? (s(), m("div", tr, n(r.$t("auth.phone.placeholder")), 1)) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = v => e(c).phone = v),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = v => B(U) ? U.value = v : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e(x) === 3 ? (s(), m("div", lr, n(r.$t("auth.username.placeholder")), 1)) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 5,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = v => e(c).username = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 6
                        }, [e(x) === 4 ? (s(), m("div", sr, n(r.$t("auth.telegram.placeholder")), 1)) : a("", !0), e(x) === 4 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = v => e(c).tg = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", nr, n(r.$t("auth.password.placeholder")), 1), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = v => e(c).pwd = v),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(p) || e(g).e_t_s_p === "0" ? (s(), m("div", ar, n(r.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = v => e(c).code = v),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = v => e(P)())
                            }, [e(M) ? (s(), m("div", dr)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, rr))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", ir, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-54px text-center border border-$primary border-solid text-$primary leading-54px cursor-pointer rounded-$radius mt-20px",
                        onClick: o[9] || (o[9] = v => r.$router.push("/register"))
                    }, n(r.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(L, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(r.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", ur, [i(T, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = v => B(A) ? A.value = v : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", pr, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = v => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = v => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    cr = {
        class: "login"
    },
    hr = {
        class: "flex items-center"
    },
    $r = {
        class: "mx-16px"
    },
    _r = ["src"],
    xr = {
        class: "flex items-center ml-auto"
    },
    gr = t("div", {
        class: "i-uiw:cloud-download w-20px h-20px mr-4px"
    }, null, -1),
    vr = t("div", {
        class: "i-mingcute:service-fill w-20px h-20px text-$primary"
    }, null, -1),
    yr = {
        class: "top-tools mt-10px pl-20px"
    },
    fr = {
        class: "login-content"
    },
    kr = {
        class: "mb-50px"
    },
    Vr = {
        class: "font-bold text-2xl text-$btn-text2"
    },
    wr = {
        class: "mt-10px text-white"
    },
    br = {
        onsubmit: "return func()"
    },
    Cr = {
        key: 0,
        class: "mt-20px text-white"
    },
    Ur = {
        key: 2,
        class: "mt-20px text-white"
    },
    Lr = {
        key: 4,
        class: "mt-20px text-white"
    },
    Br = {
        key: 0,
        class: "mt-20px text-white"
    },
    Ar = {
        class: "mt-20px text-white"
    },
    Tr = {
        key: 2,
        class: "mt-20px text-white"
    },
    Pr = ["src"],
    Ir = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Wr = {
        class: "login-tools px-20px"
    },
    jr = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    Rr = {
        class: "ml-2px"
    },
    Fr = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = de,
                    j = K,
                    w = te,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = Q,
                    d = S;
                return s(), m("div", cr, [i(d, null, {
                    default: u(() => [t("div", hr, [t("div", $r, [t("img", {
                        class: "min-w-46px max-w-120px h-full max-h-46px",
                        src: e(g).s_l
                    }, null, 8, _r)]), t("div", xr, [e(g).a_d_s_s === "true" ? (s(), m("div", {
                        key: 0,
                        class: "bg-#5ae9b5 text-white px-10px py-4px rd-full flex items-center",
                        onClick: l[0] || (l[0] = (...k) => e(x) && e(x)(...k))
                    }, [gr, oe(" App ")])) : a("", !0), i(f, {
                        class: "mx-10px"
                    }, {
                        default: u(() => [vr]),
                        _: 1
                    }), i(j, {
                        class: "ml-10px"
                    })])]), t("div", yr, [i(w, {
                        class: "text-white"
                    })]), t("div", fr, [i(L, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", kr, [t("div", Vr, n(o.$t("Hello")), 1), t("div", wr, n(o.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[1] || (l[1] = k => B($) ? $.value = k : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", br, [e($) === 1 ? (s(), m("div", Cr, n(o.$t("auth.email.placeholder")), 1)) : a("", !0), e($) === 1 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[2] || (l[2] = k => e(p).email = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e($) === 2 ? (s(), m("div", Ur, n(o.$t("auth.phone.placeholder")), 1)) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[4] || (l[4] = k => e(p).phone = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[3] || (l[3] = k => B(b) ? b.value = k : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e($) === 3 ? (s(), m("div", Lr, n(o.$t("auth.username.placeholder")), 1)) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 5,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[5] || (l[5] = k => e(p).username = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 6
                        }, [e($) === 4 ? (s(), m("div", Br, n(o.$t("auth.telegram.placeholder")), 1)) : a("", !0), e($) === 4 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[6] || (l[6] = k => e(p).tg = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", Ar, n(o.$t("auth.password.placeholder")), 1), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[7] || (l[7] = k => e(p).pwd = k),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(U) || e(g).e_t_s_p === "0" ? (s(), m("div", Tr, n(o.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[9] || (l[9] = k => e(p).code = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[8] || (l[8] = k => e(R)())
                            }, [e(P) ? (s(), m("div", Ir)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Pr))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", Wr, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center border border-$primary border-solid text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: l[10] || (l[10] = k => o.$router.push("/register"))
                    }, n(o.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", jr, [i(v, {
                        modelValue: e(V),
                        "onUpdate:modelValue": l[11] || (l[11] = k => B(V) ? V.value = k : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", Rr, n(o.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[12] || (l[12] = k => o.$router.push("/termOfUse"))
                    }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[13] || (l[13] = k => o.$router.push("/privacyPolicy"))
                    }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Or = {
        class: "login"
    },
    Mr = {
        class: "top-info relative"
    },
    Nr = {
        class: "flex flex-col items-center text-center"
    },
    Hr = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$text-white"
    },
    Er = {
        class: "top-tools"
    },
    Gr = t("div", null, null, -1),
    Dr = {
        class: "login-content"
    },
    zr = {
        onsubmit: "return func()"
    },
    Sr = {
        class: "flex items-center"
    },
    Jr = ["src"],
    qr = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Qr = {
        key: 2,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    Yr = {
        class: "ml-2px"
    },
    Xr = {
        class: "login-tools"
    },
    Kr = {
        class: "text-$text-gray6"
    },
    Zr = {
        class: "ml-5px text-$primary"
    },
    ed = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Q,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = S;
                return s(), m("div", Or, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", Mr, [t("div", Nr, [i(f), t("p", Hr, n(e(g).s_n), 1)]), t("div", Er, [Gr, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", Dr, [e(c).length > 1 ? (s(), h(w, {
                        key: 0,
                        modelValue: e($),
                        "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                        options: e(c)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(L, null, {
                        default: u(() => [t("form", zr, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [t("div", Sr, [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, null, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", qr)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Jr))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(I) ? (s(), m("div", Qr, [i(W, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Yr, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", Xr, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-center text-sm",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, [t("span", Kr, n(o.$t("auth.noRegister")), 1), t("span", Zr, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    od = {
        class: "login"
    },
    td = {
        class: "flex items-center"
    },
    ld = {
        class: "flex items-center"
    },
    sd = {
        class: "w-auto max-w-88px h-auto max-h-44px mr-8px"
    },
    nd = ["src"],
    ad = {
        class: "name font-ali c-$nav-border! text-white!"
    },
    rd = {
        class: "flex items-center ml-auto"
    },
    dd = {
        class: "top-tools mt-10px pl-20px"
    },
    id = {
        class: "login-content"
    },
    ud = {
        class: "mb-50px"
    },
    pd = {
        class: "font-bold text-2xl"
    },
    md = {
        class: "mt-10px"
    },
    cd = {
        onsubmit: "return func()"
    },
    hd = {
        key: 0,
        class: "mt-20px"
    },
    $d = {
        key: 2,
        class: "mt-20px"
    },
    _d = {
        key: 4,
        class: "mt-20px"
    },
    xd = {
        key: 0,
        class: "mt-20px"
    },
    gd = {
        class: "mt-20px"
    },
    vd = {
        key: 2,
        class: "mt-20px"
    },
    yd = ["src"],
    fd = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    kd = {
        class: "login-tools px-20px"
    },
    Vd = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    wd = {
        class: "ml-2px"
    },
    bd = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = K,
                    j = te,
                    w = X,
                    y = J,
                    C = Y,
                    W = Z,
                    O = q,
                    L = z,
                    T = le("RouterLink"),
                    _ = Q,
                    v = S;
                return s(), m("div", od, [i(v, null, {
                    default: u(() => [t("div", td, [t("div", ld, [t("div", sd, [t("img", {
                        class: "w-44px h-44px",
                        src: e(g).s_l
                    }, null, 8, nd)]), t("p", ad, n(e(g).s_n), 1)]), t("div", rd, [e(g).a_d_s_s === "true" ? (s(), m("img", {
                        key: 0,
                        class: "w-22px h-22px mr-20px",
                        src: Xe,
                        onClick: l[0] || (l[0] = (...d) => e(x) && e(x)(...d))
                    })) : a("", !0), i(f, {
                        class: "mx-10px"
                    })])]), t("div", dd, [i(j)]), t("div", id, [i(O, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", ud, [t("div", pd, n(o.$t("Hello")), 1), t("div", md, n(o.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[1] || (l[1] = d => B($) ? $.value = d : null),
                            class: "grid grid-cols-2 gap-x-10px",
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", cd, [e($) === 1 ? (s(), m("div", hd, n(o.$t("auth.email.placeholder")), 1)) : a("", !0), e($) === 1 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[2] || (l[2] = d => e(p).email = d),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e($) === 2 ? (s(), m("div", $d, n(o.$t("auth.phone.placeholder")), 1)) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 3,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).phone = d),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[3] || (l[3] = d => B(b) ? b.value = d : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e($) === 3 ? (s(), m("div", _d, n(o.$t("auth.username.placeholder")), 1)) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 5,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).username = d),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 6
                        }, [e($) === 4 ? (s(), m("div", xd, n(o.$t("auth.telegram.placeholder")), 1)) : a("", !0), e($) === 4 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).tg = d),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", gd, n(o.$t("auth.password.placeholder")), 1), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[7] || (l[7] = d => e(p).pwd = d),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(U) || e(g).e_t_s_p === "0" ? (s(), m("div", vd, n(o.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 3,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[9] || (l[9] = d => e(p).code = d),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[8] || (l[8] = d => e(R)())
                            }, [e(P) ? (s(), m("div", fd)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, yd))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(W, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", kd, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(L, {
                        loading: e(A),
                        class: "w-full! rd-6px!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), i(L, {
                        class: "w-full! rd-6px! mt-20px! plain",
                        onClick: l[10] || (l[10] = d => o.$router.push("/register"))
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.registerBtn")), 1)]),
                        _: 1
                    })], 64)) : a("", !0), i(T, {
                        to: "/",
                        class: "w-full block text-center mt-16px text-$primary"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", Vd, [i(_, {
                        modelValue: e(V),
                        "onUpdate:modelValue": l[11] || (l[11] = d => B(V) ? V.value = d : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", wd, n(o.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[12] || (l[12] = d => o.$router.push("/termOfUse"))
                    }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[13] || (l[13] = d => o.$router.push("/privacyPolicy"))
                    }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Cd = {
        class: "login"
    },
    Ud = {
        class: "top-info relative"
    },
    Ld = {
        class: ":uno: flex flex-col items-center text-center"
    },
    Bd = {
        class: "top-tools"
    },
    Ad = {
        class: "w-100px h-100px rounded-20px mt-50px border border-solid border-[rgba(255,255,255,0.5)] bg-white bg-opacity-0 flex items-center justify-center"
    },
    Td = ["src"],
    Pd = {
        class: ":uno: font-ali mb-4px mt-4px text-20px text-$primary"
    },
    Id = {
        class: "login-content"
    },
    Wd = {
        onsubmit: "return func()"
    },
    jd = t("div", {
        class: "i-material-symbols:mail-outline-rounded w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Rd = t("div", {
        class: "i-ic:round-phone-android w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Fd = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Od = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Md = t("div", {
        class: "i-material-symbols:lock-open-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Nd = t("div", {
        class: "i-material-symbols:confirmation-number-outline w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Hd = ["src"],
    Ed = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Gd = {
        class: "login-tools"
    },
    Dd = {
        class: "ml-5px text-$primary"
    },
    zd = {
        key: 1,
        class: "mt-20px cursor-pointer text-center justify-center text-sm flex items-center flex-wrap"
    },
    Sd = {
        class: "ml-2px"
    },
    Jd = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = Q,
                    T = S;
                return s(), m("div", Cd, [i(T, null, {
                    default: u(() => [t("div", Ud, [t("div", Ld, [t("div", Bd, [i(l), i(f, {
                        class: "relative z-2",
                        type: "text"
                    })]), t("div", Ad, [t("img", {
                        class: "w-90px h-90px rounded-20px",
                        src: e(g).s_l
                    }, null, 8, Td)]), t("p", Pd, n(e(g).s_n), 1)])]), t("div", Id, [i(W, null, {
                        default: u(() => [e($).length > 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Wd, [e(x) === 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            left: u(() => [jd]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [Rd, i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            left: u(() => [Fd]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            left: u(() => [Od]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            left: u(() => [Md]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            left: u(() => [Nd]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", Ed)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Hd))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", Gd, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-sm text-center",
                        onClick: o[9] || (o[9] = _ => r.$router.push("/register"))
                    }, [t("span", null, n(r.$t("auth.noRegister")), 1), t("span", Dd, n(r.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), e(I) ? (s(), m("div", zd, [i(L, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = _ => B(A) ? A.value = _ : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", Sd, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = _ => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = _ => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    qd = {
        class: "login"
    },
    Qd = {
        class: "flex items-center justify-between"
    },
    Yd = {
        class: "flex items-center"
    },
    Xd = {
        class: "mt-30px"
    },
    Kd = {
        class: "w-90px h-90px mx-auto overflow-hidden p-1px"
    },
    Zd = ["src"],
    ei = {
        class: "text-20px font-bold py-8px text-center px-18px"
    },
    oi = {
        class: "text-$primary"
    },
    ti = {
        class: "login-content"
    },
    li = {
        onsubmit: "return func()"
    },
    si = {
        key: 0,
        class: "mt-20px"
    },
    ni = {
        key: 2,
        class: "mt-20px"
    },
    ai = {
        key: 4,
        class: "mt-20px"
    },
    ri = {
        key: 0,
        class: "mt-20px"
    },
    di = {
        class: "mt-20px"
    },
    ii = {
        key: 2,
        class: "mt-20px"
    },
    ui = ["src"],
    pi = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    mi = {
        class: "mt-40px"
    },
    ci = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex justify-center items-center flex-wrap"
    },
    hi = {
        class: "ml-2px"
    },
    $i = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = z,
                    O = Q,
                    L = q,
                    T = S;
                return s(), m("div", qd, [i(T, null, {
                    default: u(() => [t("div", Qd, [i(l), t("div", Yd, [i(f, {
                        class: "ml-8px"
                    })])]), t("div", Xd, [t("div", Kd, [t("img", {
                        class: "w-full h-full rounded-20px",
                        src: e(g).s_l
                    }, null, 8, Zd)]), t("div", ei, [t("div", oi, n(e(g).s_n), 1)])]), t("div", ti, [e($).length > 1 ? (s(), h(j, {
                        key: 0,
                        modelValue: e(x),
                        "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                        options: e($)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(L, {
                        class: "pt-0!"
                    }, {
                        default: u(() => [t("form", li, [e(x) === 1 ? (s(), m("div", si, n(r.$t("auth.email.placeholder")), 1)) : a("", !0), e(x) === 1 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.email.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), m("div", ni, n(r.$t("auth.phone.placeholder")), 1)) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), m("div", ai, n(r.$t("auth.username.placeholder")), 1)) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 5,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.username.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 6
                        }, [e(x) === 4 ? (s(), m("div", ri, n(r.$t("auth.telegram.placeholder")), 1)) : a("", !0), e(x) === 4 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), t("div", di, n(r.$t("auth.password.placeholder")), 1), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            class: "min-h-44px!",
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, null, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), m("div", ii, n(r.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", pi)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, ui))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 7
                        }))]), t("div", mi, [e(V) ? (s(), m(N, {
                            key: 0
                        }, [i(W, {
                            loading: e(R),
                            class: "w-full!",
                            onClick: e(b)
                        }, {
                            default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                            _: 1
                        }, 8, ["loading", "onClick"]), t("div", {
                            class: "w-full h-42px text-center text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                            onClick: o[9] || (o[9] = _ => r.$router.push("/register"))
                        }, n(r.$t("auth.registerBtn")), 1)], 64)) : a("", !0), e(I) ? (s(), m("div", ci, [i(O, {
                            modelValue: e(A),
                            "onUpdate:modelValue": o[10] || (o[10] = _ => B(A) ? A.value = _ : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", hi, n(r.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: o[11] || (o[11] = _ => r.$router.push("/termOfUse"))
                        }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: o[12] || (o[12] = _ => r.$router.push("/privacyPolicy"))
                        }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])]),
                        _: 1
                    })])]),
                    _: 1
                })])
            }
        }
    }),
    _i = {
        class: "login"
    },
    xi = {
        class: "top-info relative"
    },
    gi = {
        class: ":uno: flex flex-col items-center text-center"
    },
    vi = {
        class: "top-tools"
    },
    yi = {
        class: "w-100px h-100px rounded-20px mt-50px border border-solid border-[rgba(255,255,255,0.5)] bg-white bg-opacity-0 flex items-center justify-center"
    },
    fi = ["src"],
    ki = {
        class: ":uno: font-ali mb-4px mt-4px text-20px text-$primary"
    },
    Vi = {
        class: "login-content"
    },
    wi = {
        onsubmit: "return func()"
    },
    bi = t("div", {
        class: "i-material-symbols:mail-outline-rounded w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Ci = t("div", {
        class: "i-ic:round-phone-android w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Ui = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Li = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Bi = t("div", {
        class: "i-material-symbols:lock-open-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Ai = t("div", {
        class: "i-material-symbols:confirmation-number-outline w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Ti = ["src"],
    Pi = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Ii = {
        class: "login-tools"
    },
    Wi = {
        class: "ml-5px text-$primary"
    },
    ji = {
        key: 1,
        class: "mt-20px cursor-pointer text-center justify-center text-sm flex items-center flex-wrap"
    },
    Ri = {
        class: "ml-2px"
    },
    Fi = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = Q,
                    T = S;
                return s(), m("div", _i, [i(T, null, {
                    default: u(() => [t("div", xi, [t("div", gi, [t("div", vi, [i(l), i(f, {
                        class: "relative z-2",
                        type: "text"
                    })]), t("div", yi, [t("img", {
                        class: "w-90px h-90px rounded-20px",
                        src: e(g).s_l
                    }, null, 8, fi)]), t("p", ki, n(e(g).s_n), 1)])]), t("div", Vi, [i(W, null, {
                        default: u(() => [e($).length > 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", wi, [e(x) === 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            left: u(() => [bi]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [Ci, i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            left: u(() => [Ui]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            left: u(() => [Li]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            left: u(() => [Bi]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            left: u(() => [Ai]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", Pi)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Ti))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", Ii, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-sm text-center",
                        onClick: o[9] || (o[9] = _ => r.$router.push("/register"))
                    }, [t("span", null, n(r.$t("auth.noRegister")), 1), t("span", Wi, n(r.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), e(I) ? (s(), m("div", ji, [i(L, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = _ => B(A) ? A.value = _ : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", Ri, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = _ => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = _ => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Oi = {
        class: "login"
    },
    Mi = {
        class: "flex items-center"
    },
    Ni = {
        class: "flex items-center"
    },
    Hi = {
        class: "w-auto max-w-88px h-auto max-h-44px mr-8px"
    },
    Ei = ["src"],
    Gi = {
        class: "name font-ali c-$nav-border! text-white!"
    },
    Di = {
        class: "flex items-center ml-auto"
    },
    zi = {
        key: 0,
        class: "bg-#2b3139 px-10px py-4px text-12px rounded-full flex items-center"
    },
    Si = {
        class: "top-tools mt-10px pl-20px"
    },
    Ji = {
        class: "login-content"
    },
    qi = {
        class: "mb-50px"
    },
    Qi = {
        class: "font-bold text-2xl text-$primary"
    },
    Yi = {
        class: "mt-10px text-$text-gray"
    },
    Xi = {
        onsubmit: "return func()"
    },
    Ki = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    Zi = {
        key: 2,
        class: "mt-20px text-$text-gray"
    },
    eu = {
        key: 4,
        class: "mt-20px text-$text-gray"
    },
    ou = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    tu = {
        class: "mt-20px text-$text-gray"
    },
    lu = {
        key: 2,
        class: "text-$text-gray mt-20px"
    },
    su = ["src"],
    nu = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    au = {
        class: "login-tools px-20px"
    },
    ru = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    du = {
        class: "ml-2px"
    },
    iu = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = K,
                    f = te,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = le("RouterLink"),
                    T = Q,
                    _ = S;
                return s(), m("div", Oi, [i(_, null, {
                    default: u(() => [t("div", Mi, [t("div", Ni, [t("div", Hi, [t("img", {
                        class: "w-44px h-44px",
                        src: e(g).s_l
                    }, null, 8, Ei)]), t("p", Gi, n(e(g).s_n), 1)]), t("div", Di, [e(g).a_d_s_s === "true" ? (s(), m("div", zi, [t("div", {
                        class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                        onClick: o[0] || (o[0] = v => r.$router.push("/download"))
                    }), oe(" App ")])) : a("", !0), i(l, {
                        class: "mx-10px"
                    })])]), t("div", Si, [i(f, {
                        class: "text-$primary"
                    })]), t("div", Ji, [i(W, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", qi, [t("div", Qi, n(r.$t("Hello")), 1), t("div", Yi, n(r.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e($).length > 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[1] || (o[1] = v => B(x) ? x.value = v : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Xi, [e(x) === 1 ? (s(), m("div", Ki, n(r.$t("auth.email.placeholder")), 1)) : a("", !0), e(x) === 1 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[2] || (o[2] = v => e(c).email = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(x) === 2 ? (s(), m("div", Zi, n(r.$t("auth.phone.placeholder")), 1)) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[4] || (o[4] = v => e(c).phone = v),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[3] || (o[3] = v => B(U) ? U.value = v : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e(x) === 3 ? (s(), m("div", eu, n(r.$t("auth.username.placeholder")), 1)) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 5,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[5] || (o[5] = v => e(c).username = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 6
                        }, [e(x) === 4 ? (s(), m("div", ou, n(r.$t("auth.telegram.placeholder")), 1)) : a("", !0), e(x) === 4 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[6] || (o[6] = v => e(c).tg = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", tu, n(r.$t("auth.password.placeholder")), 1), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[7] || (o[7] = v => e(c).pwd = v),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(p) || e(g).e_t_s_p === "0" ? (s(), m("div", lu, n(r.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[9] || (o[9] = v => e(c).code = v),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[8] || (o[8] = v => e(P)())
                            }, [e(M) ? (s(), m("div", nu)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, su))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", au, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full! rd-6px!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), i(O, {
                        class: "w-full! rd-6px! mt-20px!",
                        onClick: o[10] || (o[10] = v => r.$router.push("/register"))
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.registerBtn")), 1)]),
                        _: 1
                    })], 64)) : a("", !0), i(L, {
                        to: "/",
                        class: "w-full block text-center mt-16px text-$primary"
                    }, {
                        default: u(() => [oe(n(r.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", ru, [i(T, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[11] || (o[11] = v => B(A) ? A.value = v : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", du, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = v => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[13] || (o[13] = v => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    uu = {
        class: "login"
    },
    pu = {
        class: "flex items-center justify-between"
    },
    mu = {
        class: "flex items-center"
    },
    cu = {
        class: "mt-50px"
    },
    hu = {
        class: "w-90px h-90px mx-auto border border-solid border-$border-color2 bg-[rgba(255,255,255,0.24)] rounded-20px overflow-hidden p-1px"
    },
    $u = ["src"],
    _u = {
        class: "text-20px font-bold py-8px text-center px-18px"
    },
    xu = {
        class: "text-$primary"
    },
    gu = {
        class: "login-content"
    },
    vu = {
        onsubmit: "return func()"
    },
    yu = {
        key: 0,
        class: "mt-20px"
    },
    fu = {
        key: 2,
        class: "mt-20px"
    },
    ku = {
        key: 4,
        class: "mt-20px"
    },
    Vu = {
        key: 0,
        class: "mt-20px"
    },
    wu = {
        class: "mt-20px"
    },
    bu = {
        key: 2,
        class: "mt-20px"
    },
    Cu = ["src"],
    Uu = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Lu = {
        class: "mt-60px"
    },
    Bu = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex justify-center items-center flex-wrap"
    },
    Au = {
        class: "ml-2px"
    },
    Tu = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = Q,
                    T = S;
                return s(), m("div", uu, [i(T, null, {
                    default: u(() => [t("div", pu, [i(l), t("div", mu, [i(f, {
                        class: "ml-8px"
                    })])]), t("div", cu, [t("div", hu, [t("img", {
                        class: "w-full h-full rounded-20px",
                        src: e(g).s_l
                    }, null, 8, $u)]), t("div", _u, [t("div", xu, n(e(g).s_n), 1)])]), t("div", gu, [e($).length > 1 ? (s(), h(j, {
                        key: 0,
                        modelValue: e(x),
                        "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                        options: e($)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(W, {
                        class: "pt-0!"
                    }, {
                        default: u(() => [t("form", vu, [e(x) === 1 ? (s(), m("div", yu, n(r.$t("auth.email.placeholder")), 1)) : a("", !0), e(x) === 1 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.email.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), m("div", fu, n(r.$t("auth.phone.placeholder")), 1)) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), m("div", ku, n(r.$t("auth.username.placeholder")), 1)) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 5,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.username.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 6
                        }, [e(x) === 4 ? (s(), m("div", Vu, n(r.$t("auth.telegram.placeholder")), 1)) : a("", !0), e(x) === 4 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), t("div", wu, n(r.$t("auth.password.placeholder")), 1), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            class: "min-h-44px!",
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, null, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), m("div", bu, n(r.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", Uu)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Cu))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", Lu, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: o[9] || (o[9] = _ => r.$router.push("/register"))
                    }, n(r.$t("auth.registerBtn")), 1)], 64)) : a("", !0), e(I) ? (s(), m("div", Bu, [i(L, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = _ => B(A) ? A.value = _ : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", Au, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = _ => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = _ => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Pu = {
        class: "login"
    },
    Iu = {
        class: "top-info relative"
    },
    Wu = {
        class: ":uno: flex flex-col items-center text-center"
    },
    ju = {
        class: "top-tools"
    },
    Ru = {
        class: "w-100px h-100px rounded-20px mt-50px border border-solid border-[rgba(255,255,255,0.5)] bg-white bg-opacity-0 flex items-center justify-center"
    },
    Fu = ["src"],
    Ou = {
        class: ":uno: font-ali mb-4px mt-4px text-20px text-white"
    },
    Mu = {
        class: "login-content"
    },
    Nu = {
        onsubmit: "return func()"
    },
    Hu = t("div", {
        class: "i-material-symbols:mail-outline-rounded w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Eu = t("div", {
        class: "i-ic:round-phone-android w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Gu = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Du = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    zu = t("div", {
        class: "i-material-symbols:lock-open-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Su = t("div", {
        class: "i-material-symbols:confirmation-number-outline w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Ju = ["src"],
    qu = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Qu = {
        class: "login-tools"
    },
    Yu = {
        class: "ml-5px text-$primary"
    },
    Xu = {
        key: 1,
        class: "mt-20px cursor-pointer text-center justify-center text-sm flex items-center flex-wrap"
    },
    Ku = {
        class: "ml-2px"
    },
    Zu = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = K,
                    f = X,
                    j = J,
                    w = Y,
                    y = Z,
                    C = q,
                    W = z,
                    O = Q,
                    L = S;
                return s(), m("div", Pu, [i(L, null, {
                    default: u(() => [t("div", Iu, [t("div", Wu, [t("div", ju, [i(l, {
                        class: "relative z-2",
                        type: "text"
                    })]), t("div", Ru, [t("img", {
                        class: "w-90px h-90px rounded-20px",
                        src: e(g).s_l
                    }, null, 8, Fu)]), t("p", Ou, n(e(g).s_n), 1)])]), t("div", Mu, [i(C, null, {
                        default: u(() => [e($).length > 1 ? (s(), h(f, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = T => B(x) ? x.value = T : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Nu, [e(x) === 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = T => e(c).email = T),
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            left: u(() => [Hu]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(j, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = T => e(c).phone = T),
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [Eu, i(w, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = T => B(U) ? U.value = T : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(j, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = T => e(c).username = T),
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            left: u(() => [Gu]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = T => e(c).tg = T),
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            left: u(() => [Du]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(j, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = T => e(c).pwd = T),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            left: u(() => [zu]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(j, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = T => e(c).code = T),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            left: u(() => [Su]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = T => e(P)())
                            }, [e(M) ? (s(), m("div", qu)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Ju))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(y, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", Qu, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(W, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-sm text-center",
                        onClick: o[9] || (o[9] = T => r.$router.push("/register"))
                    }, [t("span", null, n(r.$t("auth.noRegister")), 1), t("span", Yu, n(r.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), e(I) ? (s(), m("div", Xu, [i(O, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = T => B(A) ? A.value = T : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", Ku, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = T => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = T => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    ep = {
        class: "login"
    },
    op = {
        class: "flex items-center"
    },
    tp = {
        class: "mx-16px"
    },
    lp = ["src"],
    sp = {
        class: "flex items-center ml-auto"
    },
    np = t("div", {
        class: "i-ep:service w-22px h-22px cursor-pointer mx-10px"
    }, null, -1),
    ap = {
        class: "top-tools mt-10px pl-20px"
    },
    rp = {
        class: "login-content"
    },
    dp = {
        class: "mb-50px"
    },
    ip = {
        class: "font-bold text-2xl"
    },
    up = {
        class: "mt-10px text-$text-gray"
    },
    pp = {
        onsubmit: "return func()"
    },
    mp = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    cp = {
        key: 2,
        class: "mt-20px text-$text-gray"
    },
    hp = {
        key: 4,
        class: "mt-20px text-$text-gray"
    },
    $p = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    _p = {
        class: "mt-20px text-$text-gray"
    },
    xp = {
        key: 2,
        class: "text-$text-gray mt-20px"
    },
    gp = ["src"],
    vp = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    yp = {
        class: "login-tools px-20px"
    },
    fp = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    kp = {
        class: "ml-2px"
    },
    Vp = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = K,
                    j = de,
                    w = te,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = Q,
                    d = S;
                return s(), m("div", ep, [i(d, null, {
                    default: u(() => [t("div", op, [t("div", tp, [t("img", {
                        class: "w-44px h-44px",
                        src: e(g).s_l
                    }, null, 8, lp)]), t("div", sp, [e(g).a_d_s_s === "true" ? (s(), m("div", {
                        key: 0,
                        class: "i-mdi:download-outline w-25px h-25px cursor-pointer mx-10px",
                        onClick: l[0] || (l[0] = (...k) => e(x) && e(x)(...k))
                    })) : a("", !0), i(f, {
                        class: "mx-10px"
                    }), t("div", {
                        class: "i-ic:sharp-notifications-none w-22px h-22px cursor-pointer mx-10px",
                        onClick: l[1] || (l[1] = k => o.$router.push("/notice"))
                    }), i(j, null, {
                        default: u(() => [np]),
                        _: 1
                    })])]), t("div", ap, [i(w)]), t("div", rp, [i(L, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", dp, [t("div", ip, n(o.$t("Hello")), 1), t("div", up, n(o.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[2] || (l[2] = k => B($) ? $.value = k : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", pp, [e($) === 1 ? (s(), m("div", mp, n(o.$t("auth.email.placeholder")), 1)) : a("", !0), e($) === 1 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[3] || (l[3] = k => e(p).email = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e($) === 2 ? (s(), m("div", cp, n(o.$t("auth.phone.placeholder")), 1)) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[5] || (l[5] = k => e(p).phone = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[4] || (l[4] = k => B(b) ? b.value = k : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e($) === 3 ? (s(), m("div", hp, n(o.$t("auth.username.placeholder")), 1)) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 5,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[6] || (l[6] = k => e(p).username = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 6
                        }, [e($) === 4 ? (s(), m("div", $p, n(o.$t("auth.telegram.placeholder")), 1)) : a("", !0), e($) === 4 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[7] || (l[7] = k => e(p).tg = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", _p, n(o.$t("auth.password.placeholder")), 1), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[8] || (l[8] = k => e(p).pwd = k),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(U) || e(g).e_t_s_p === "0" ? (s(), m("div", xp, n(o.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[10] || (l[10] = k => e(p).code = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[9] || (l[9] = k => e(R)())
                            }, [e(P) ? (s(), m("div", vp)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, gp))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", yp, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center border border-$primary border-solid text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: l[11] || (l[11] = k => o.$router.push("/register"))
                    }, n(o.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", fp, [i(v, {
                        modelValue: e(V),
                        "onUpdate:modelValue": l[12] || (l[12] = k => B(V) ? V.value = k : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", kp, n(o.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[13] || (l[13] = k => o.$router.push("/termOfUse"))
                    }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[14] || (l[14] = k => o.$router.push("/privacyPolicy"))
                    }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    wp = {
        class: "login"
    },
    bp = {
        class: "top-info relative"
    },
    Cp = {
        class: "flex flex-col items-center text-center"
    },
    Up = {
        class: "font-ali mb-4px mt-24px text-24px font-600 lh-24px c-$btn-text5"
    },
    Lp = {
        class: "top-tools"
    },
    Bp = {
        class: "login-content"
    },
    Ap = {
        class: "login-main"
    },
    Tp = {
        onsubmit: "return func()"
    },
    Pp = {
        class: "label"
    },
    Ip = {
        class: "label"
    },
    Wp = {
        class: "flex items-center"
    },
    jp = {
        class: "label"
    },
    Rp = {
        class: "label"
    },
    Fp = {
        class: "label"
    },
    Op = {
        class: "label"
    },
    Mp = ["src"],
    Np = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Hp = {
        key: 5,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    Ep = {
        class: "ml-2px"
    },
    Gp = {
        class: "login-footer"
    },
    Dp = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = se,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = Q,
                    O = q,
                    L = z,
                    T = S;
                return s(), m("div", wp, [i(T, null, {
                    default: u(() => [t("div", bp, [t("div", Cp, [i(l), t("p", Up, n(e(g).s_n), 1)]), t("div", Lp, [i(f, {
                        class: "base-lang-wrap"
                    })])]), t("div", Bp, [e($).length > 1 ? (s(), h(j, {
                        key: 0,
                        modelValue: e(x),
                        "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                        options: e($)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(O, null, {
                        default: u(() => [t("div", Ap, [t("form", Tp, [e(x) === 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            class: "mt-0!",
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Pp, n(r.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            class: "mt-0!",
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", Ip, n(r.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", Wp, [i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            class: "mt-0!",
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", jp, n(r.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            class: "mt-0!",
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", Rp, n(r.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", Fp, n(r.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            label: u(() => [t("div", Op, n(r.$t("auth.vcode.placeholder")), 1)]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", Np)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Mp))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 4
                        })), e(I) ? (s(), m("div", Hp, [i(W, {
                            modelValue: e(A),
                            "onUpdate:modelValue": o[9] || (o[9] = _ => B(A) ? A.value = _ : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Ep, n(r.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: o[10] || (o[10] = _ => r.$router.push("/termOfUse"))
                        }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: o[11] || (o[11] = _ => r.$router.push("/privacyPolicy"))
                        }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                        _: 1
                    }), t("div", Gp, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(L, {
                        loading: e(R),
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "register-btn mt-20px",
                        onClick: o[12] || (o[12] = _ => r.$router.push("/register"))
                    }, [t("span", null, n(r.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), t("div", {
                        class: "register-btn mt-20px",
                        onClick: o[13] || (o[13] = _ => r.$router.push("/"))
                    }, [t("span", null, n(r.$t("Go_To_HomePage")), 1)])])])]),
                    _: 1
                })])
            }
        }
    }),
    zp = {
        class: "login"
    },
    Sp = {
        class: "top-info relative"
    },
    Jp = {
        class: ":uno: relative z-1 flex flex-col items-center justify-center pb-24px text-center"
    },
    qp = {
        class: "name mt-20px text-26px font-bold lh-34px c-$nav-text"
    },
    Qp = {
        class: "top-tools"
    },
    Yp = t("div", null, null, -1),
    Xp = {
        class: "login-content"
    },
    Kp = {
        onsubmit: "return func()"
    },
    Zp = {
        class: "mb-12px flex items-center"
    },
    em = {
        class: "label"
    },
    om = {
        class: "mb-12px flex items-center"
    },
    tm = t("div", {
        class: "icon i-solar:phone-linear mr-8px text-24px c-$btn-text4"
    }, null, -1),
    lm = {
        class: "label"
    },
    sm = {
        class: "flex items-center"
    },
    nm = {
        class: "mb-12px flex items-center"
    },
    am = t("div", {
        class: "icon i-material-symbols:account-box-outline-sharp mr-8px text-24px c-$btn-text4"
    }, null, -1),
    rm = {
        class: "label"
    },
    dm = {
        class: "mb-12px flex items-center"
    },
    im = t("div", {
        class: "icon i-material-symbols:account-box-outline-sharp mr-8px text-24px c-$btn-text4"
    }, null, -1),
    um = {
        class: "label"
    },
    pm = {
        class: "mb-12px flex items-center"
    },
    mm = {
        class: "label"
    },
    cm = {
        class: "mb-12px flex items-center"
    },
    hm = t("div", {
        class: "icon i-ant-design:safety-outlined mr-8px text-24px c-$btn-text4"
    }, null, -1),
    $m = {
        class: "label"
    },
    _m = ["src"],
    xm = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-$primary"
    },
    gm = {
        key: 5,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm c-$text-black"
    },
    vm = {
        class: "ml-2px"
    },
    ym = {
        class: "login-tools"
    },
    fm = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = X,
                    y = ce,
                    C = J,
                    W = Y,
                    O = Z,
                    L = Q,
                    T = z,
                    _ = q,
                    v = S;
                return s(), m("div", zp, [i(v, {
                    class: ne(`no-${e(x)}`)
                }, {
                    default: u(() => [t("div", Sp, [t("div", Jp, [i(f, {
                        class: "h-85px! w-85px!"
                    }), t("p", qp, n(e(g).s_n), 1)]), t("div", Qp, [Yp, i(j, {
                        class: "base-lang-wrap"
                    })])]), t("div", Xp, [e(c).length > 1 ? (s(), h(w, {
                        key: 0,
                        modelValue: e($),
                        "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                        options: e(c)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(_, null, {
                        default: u(() => [t("form", Kp, [e($) === 1 ? (s(), h(C, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Zp, [i(y, {
                                name: "5-email",
                                class: "mr-8px text-24px c-$btn-text4"
                            }), t("div", em, n(o.$t("auth.email.placeholder")), 1)])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", om, [tm, t("div", lm, n(o.$t("auth.phone.placeholder")), 1)])]),
                            left: u(() => [t("div", sm, [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", nm, [am, t("div", rm, n(o.$t("auth.username.placeholder")), 1)])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(C, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", dm, [im, t("div", um, n(o.$t("auth.telegram.placeholder")), 1)])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", pm, [i(y, {
                                name: "5-password",
                                class: "mr-8px text-24px c-$btn-text4"
                            }), t("div", mm, n(o.$t("auth.password.placeholder")), 1)])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            label: u(() => [t("div", cm, [hm, t("div", $m, n(o.$t("auth.vcode.placeholder")), 1)])]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", xm)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, _m))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        })), e(I) ? (s(), m("div", gm, [i(L, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", vm, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)]), t("div", ym, [e(r) ? (s(), m(N, {
                            key: 0
                        }, [i(T, {
                            loading: e(A),
                            onClick: e(F)
                        }, {
                            default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                            _: 1
                        }, 8, ["loading", "onClick"]), t("div", {
                            class: "register-btn mt-20px",
                            onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                        }, [t("span", null, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), t("div", {
                            class: "register-btn",
                            onClick: l[13] || (l[13] = d => o.$router.push("/"))
                        }, [t("span", null, n(o.$t("Go_To_HomePage")), 1)])])]),
                        _: 1
                    })])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    km = {
        class: "login"
    },
    Vm = {
        class: "top-info relative"
    },
    wm = {
        class: "flex flex-col items-center text-center"
    },
    bm = {
        class: "font-ali mb-4px mt-12px text-24px font-600 lh-24px c-$text-white"
    },
    Cm = {
        class: "top-tools"
    },
    Um = t("div", null, null, -1),
    Lm = {
        class: "top-flag"
    },
    Bm = {
        class: "mr-21px flex items-center"
    },
    Am = {
        class: "flex items-center"
    },
    Tm = {
        class: "login-content"
    },
    Pm = {
        onsubmit: "return func()"
    },
    Im = {
        class: "label"
    },
    Wm = {
        class: "label"
    },
    jm = {
        class: "flex items-center"
    },
    Rm = {
        class: "label"
    },
    Fm = {
        class: "label"
    },
    Om = {
        class: "label"
    },
    Mm = {
        class: "label"
    },
    Nm = ["src"],
    Hm = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Em = {
        key: 5,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    Gm = {
        class: "ml-2px"
    },
    Dm = {
        class: "login-tools"
    },
    zm = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = K,
                    w = ce,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = Q,
                    T = q,
                    _ = z,
                    v = le("RouterLink"),
                    d = S;
                return s(), m("div", km, [i(d, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", Vm, [t("div", wm, [i(f), t("p", bm, n(e(g).s_n), 1)]), t("div", Cm, [Um, i(j, {
                        class: "base-lang-wrap"
                    })]), t("div", Lm, [t("div", Bm, [i(w, {
                        name: "2-home1",
                        class: "mr-8px c-$primary"
                    }), oe(" Save money ")]), t("div", Am, [i(w, {
                        name: "2-home2",
                        class: "mr-8px c-$primary"
                    }), oe(" Save time ")])])]), t("div", Tm, [e(c).length > 1 ? (s(), h(y, {
                        key: 0,
                        modelValue: e($),
                        "onUpdate:modelValue": l[0] || (l[0] = k => B($) ? $.value = k : null),
                        options: e(c)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(T, null, {
                        default: u(() => [t("form", Pm, [e($) === 1 ? (s(), h(C, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = k => e(p).email = k),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Im, n(o.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = k => e(p).phone = k),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", Wm, n(o.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", jm, [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = k => B(b) ? b.value = k : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = k => e(p).username = k),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", Rm, n(o.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(C, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = k => e(p).tg = k),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", Fm, n(o.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = k => e(p).pwd = k),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", Om, n(o.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = k => e(p).code = k),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            label: u(() => [t("div", Mm, n(o.$t("auth.vcode.placeholder")), 1)]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = k => e(R)())
                            }, [e(P) ? (s(), m("div", Hm)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Nm))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        })), e(I) ? (s(), m("div", Em, [i(L, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = k => B(V) ? V.value = k : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Gm, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[10] || (l[10] = k => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: l[11] || (l[11] = k => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])]),
                        _: 1
                    }), t("div", Dm, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(_, {
                        loading: e(A),
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "register-btn mt-20px",
                        onClick: l[12] || (l[12] = k => o.$router.push("/register"))
                    }, [t("span", null, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), i(v, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    Sm = {
        class: "login"
    },
    Jm = {
        class: "login-top relative"
    },
    qm = {
        class: "tools flex items-center justify-between"
    },
    Qm = {
        class: "flex items-center"
    },
    Ym = {
        class: "flex items-center"
    },
    Xm = {
        class: "login-content"
    },
    Km = {
        class: "login-main"
    },
    Zm = {
        onsubmit: "return func()"
    },
    ec = {
        class: "label"
    },
    oc = {
        class: "label"
    },
    tc = {
        class: "flex items-center"
    },
    lc = {
        class: "label"
    },
    sc = {
        class: "label"
    },
    nc = {
        class: "label"
    },
    ac = {
        class: "label"
    },
    rc = ["src"],
    dc = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-$primary"
    },
    ic = {
        key: 5,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    uc = {
        class: "ml-2px"
    },
    pc = {
        key: 0,
        class: "login-footer"
    },
    mc = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee(), o = ie(() => _e(g.value.s_n));
            return (l, f) => {
                const j = se,
                    w = K,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = Q,
                    T = z,
                    _ = q,
                    v = S;
                return s(), m("div", Sm, [i(v, null, {
                    default: u(() => [t("div", {
                        class: ne(["decor", `color-${e(x)}`])
                    }, null, 2), t("div", Jm, [t("div", qm, [t("div", Qm, [i(j, {
                        class: "small-logo",
                        "need-name": "",
                        style: xe(`font-size:${e(o)} !important`)
                    }, null, 8, ["style"])]), t("div", Ym, [i(w, {
                        class: "base-lang-wrap"
                    })])])]), t("div", Xm, [i(_, null, {
                        default: u(() => [t("div", Km, [e(c).length > 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": f[0] || (f[0] = d => B($) ? $.value = d : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Zm, [e($) === 1 ? (s(), h(C, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": f[1] || (f[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: l.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", ec, n(l.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": f[3] || (f[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: l.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", oc, n(l.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [t("div", tc, [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": f[2] || (f[2] = d => B(b) ? b.value = d : null),
                                class: "ml-0!"
                            }, null, 8, ["modelValue"])])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": f[4] || (f[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: l.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", lc, n(l.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(C, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": f[5] || (f[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: l.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", sc, n(l.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": f[6] || (f[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: l.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", nc, n(l.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": f[8] || (f[8] = d => e(p).code = d),
                            placeholder: l.$t("auth.vcode.placeholder")
                        }, {
                            label: u(() => [t("div", ac, n(l.$t("auth.vcode.placeholder")), 1)]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: f[7] || (f[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", dc)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, rc))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        })), e(I) ? (s(), m("div", ic, [i(L, {
                            modelValue: e(V),
                            "onUpdate:modelValue": f[9] || (f[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", uc, n(l.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: f[10] || (f[10] = d => l.$router.push("/termOfUse"))
                        }, n(l.$t("auth.termOfUse")), 1), t("span", null, n(l.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$primary",
                            onClick: f[11] || (f[11] = d => l.$router.push("/privacyPolicy"))
                        }, n(l.$t("auth.privacyPolicy")), 1)])) : a("", !0)])]), e(r) ? (s(), m("div", pc, [i(T, {
                            loading: e(A),
                            onClick: e(F)
                        }, {
                            default: u(() => [t("span", null, n(l.$t("auth.loginBtn")), 1)]),
                            _: 1
                        }, 8, ["loading", "onClick"]), t("div", {
                            class: "register-btn mt-20px",
                            onClick: f[12] || (f[12] = d => l.$router.push("/register"))
                        }, [t("span", null, n(l.$t("auth.registerBtn")), 1)])])) : a("", !0)]),
                        _: 1
                    })])]),
                    _: 1
                })])
            }
        }
    }),
    cc = {
        class: "login"
    },
    hc = {
        class: "flex items-center justify-between"
    },
    $c = {
        class: "mt-50px"
    },
    _c = {
        class: "w-100px h-100px rounded overflow-hidden mx-auto"
    },
    xc = ["src"],
    gc = {
        class: "text-18px py-8px font-you text-center"
    },
    vc = {
        class: "login-content"
    },
    yc = {
        onsubmit: "return func()"
    },
    fc = {
        class: "label"
    },
    kc = {
        class: "label"
    },
    Vc = {
        class: "label"
    },
    wc = {
        class: "label"
    },
    bc = {
        class: "label"
    },
    Cc = {
        class: "label"
    },
    Uc = ["src"],
    Lc = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Bc = {
        class: "mt-20px"
    },
    Ac = {
        key: 1,
        class: "mt-20px cursor-pointer text-14px flex justify-center items-center flex-wrap"
    },
    Tc = {
        class: "ml-2px"
    },
    Pc = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = z,
                    O = Q,
                    L = q,
                    T = S;
                return s(), m("div", cc, [i(T, null, {
                    default: u(() => [t("div", hc, [i(l), i(f)]), t("div", $c, [t("div", _c, [t("img", {
                        class: "w-full h-full",
                        src: e(g).s_l
                    }, null, 8, xc)]), t("div", gc, n(r.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), t("div", vc, [e($).length > 1 ? (s(), h(j, {
                        key: 0,
                        modelValue: e(x),
                        "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                        options: e($)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(L, {
                        class: "pt-17px!"
                    }, {
                        default: u(() => [t("form", yc, [e(x) === 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            class: "min-h-44px!"
                        }, {
                            label: u(() => [t("div", fc, n(r.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            class: "min-h-44px!"
                        }, {
                            left: u(() => [i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null)
                            }, null, 8, ["modelValue"])]),
                            label: u(() => [t("div", kc, n(r.$t("auth.phone.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            class: "min-h-44px!"
                        }, {
                            label: u(() => [t("div", Vc, n(r.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", wc, n(r.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            class: "min-h-44px!",
                            type: "password"
                        }, {
                            label: u(() => [t("div", bc, n(r.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            class: "min-h-44px!"
                        }, {
                            label: u(() => [t("div", Cc, n(r.$t("auth.vcode.placeholder")), 1)]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", Lc)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Uc))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 4
                        }))]), t("div", Bc, [e(V) ? (s(), m(N, {
                            key: 0
                        }, [i(W, {
                            loading: e(R),
                            class: "w-full!",
                            onClick: e(b)
                        }, {
                            default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                            _: 1
                        }, 8, ["loading", "onClick"]), t("div", {
                            class: "w-full h-42px text-center text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                            onClick: o[9] || (o[9] = _ => r.$router.push("/register"))
                        }, n(r.$t("auth.registerBtn")), 1)], 64)) : a("", !0), e(I) ? (s(), m("div", Ac, [i(O, {
                            modelValue: e(A),
                            "onUpdate:modelValue": o[10] || (o[10] = _ => B(A) ? A.value = _ : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Tc, n(r.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: o[11] || (o[11] = _ => r.$router.push("/termOfUse"))
                        }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: o[12] || (o[12] = _ => r.$router.push("/privacyPolicy"))
                        }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])]),
                        _: 1
                    })])]),
                    _: 1
                })])
            }
        }
    }),
    Ic = {
        class: "login"
    },
    Wc = {
        class: "top-info"
    },
    jc = {
        class: "flex items-center ml-auto"
    },
    Rc = {
        key: 0,
        class: "bg-#5ae9b5 px-10px text-12px rounded-full flex items-center"
    },
    Fc = {
        class: "login-content"
    },
    Oc = {
        class: "mb-50px"
    },
    Mc = ["src"],
    Nc = {
        class: "text-center mt-10px text-16px"
    },
    Hc = {
        onsubmit: "return func()"
    },
    Ec = ["src"],
    Gc = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Dc = {
        class: "login-tools px-20px"
    },
    zc = {
        class: "text-$primary"
    },
    Sc = {
        key: 1,
        class: "mt-20px cursor-pointer flex items-center flex-wrap text-12px text-#768da9"
    },
    Jc = {
        class: "ml-2px"
    },
    qc = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = te,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Z,
                    O = q,
                    L = z,
                    T = Q,
                    _ = S;
                return s(), m("div", Ic, [i(_, null, {
                    default: u(() => [t("div", Wc, [i(f, {
                        class: "text-$text-gray!"
                    }), t("div", jc, [e(g).a_d_s_s === "true" ? (s(), m("div", Rc, [t("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAKk0lEQVR42u1aXYicVxl+nvN9szv5K5ttEtNmg2mbEggLpiQXoVUxVikmSC1VyUUvbIOk/uBNgq1gm4oKWYg/eCEtbRMKRWqatI0V8UKNN0K0EVcS0Up+202MmP5prLuZ+c7jxfn5zvfNJNvtTmyLc2CZndmZ2XPen+d53+c9QH/1V3/1V3/1V3/11//p4v/in8w5+ORI3jS3UlxnoVEKKyQtAjRfAiRdAHBOwARkjwrmEGz7N5Mb7j71njXA0ME9Q5gzd4u1djOAdQAgCQAgCFD8DZAg95IgG/ck6ZCIfVN26gls2Hr+PWGAOeN7lw1M6SEId0FqxoMzOag3BBAOLiAYp/YIAFaaFPBw6803x7DpS+fenQY4uKe5cO68bRb4OqWmSEGWAgXrvBo8r3h6SylEQRIRVpA3GPzfRQhWUyB3XgTGsOHuyXeNARa8sHdVLrNPsqPefSjPJO/N8qCVCIA3VJeUcBGSfFc0oB1vgZvx0S0vznbvZta5/sLTtzfEcUCjIN0+6c7DsHFSqa1JAgwGsizNwXDy+HYy8VHMCq5pCOPZrx7b9I4aYPjw/m0GfA40g/XIYrpfidGBjM52PzTuj4QIEeHAFc97e5BK/keT4vP5Lx7d9o4YYPjw/m0EdrmDiCBVHlSVQ4CESIEsjcEQIqI3CGufUd3v9ZQlRIC7ZmOEt4UBCw/v32SAn3reQpK/igguEZI7uMMBJl4VJNZpUSgNpzQKLvUYPucA8o7i458/cMUNsOiPB1bhYntcRDMAWNx8QmkV0IqGCO+FjxbBAqJE0bFFFThRNUT8HEpgLVlkssjMmpkCo5kp1aFVPAWyCQGUysMzPAsIgJLySDFs3P2BEeQE9ykb0qjmoaQeiIcnFIDW55IANE1h9+HgnuYVM8Ciq4buA7EmTULQI7Xksd15jCUcuiD1p2cF0RkhnwBgkWA+OwAg4oJLp2hlhwUCoFHTvrjtiqTA4t/tXSozcFLUICWmIV/nbBehHgNqfB8+trTR5LZlqyEBY6eP4pXWFCwhqKCjSB/ectHVgRlJ/RCQwGEPJm178kZs/MpETyNAWeM+UE0GbyIBLR/6dOEgHw2VQE4SBARwy4IlGBmYh6WNObj5qiWANaAcNUi1CAlMkX6pVAsWCqRADJp8cEdPU2DBn5+5muC9lYBUDNwKtdFRIiobDgcoP8ucBjkMGswwoBymyGDaJGXEeDZfF5CiK6bqCOHwIKREmRp34dnvDfXMAIP/4edEDJblW+oNisnrgfZiAjv+98UOYx4bUjmJDEQmA2MNaA1o68HD8oAx+tx3ymENa/uBgKaZN3dLzwxA8NNpuKnmA3l0i/xfxkZiJQZOJAAYkRkNGjTIkImWIJz3GUqGcPgIft6m7r9VWSNghc9RQZt7YoChPzy7AsD6NPcrKK3qcVkv3+T3U+O3jESDRE4DI5IiaBlALX6WZQqJJOKXyacIypI6RIqLQq7Dzx4dmbUBcphbOvmoAoExVJl2bSjDP/J9YhwCyGiQkW4ToqdPxio5LY1DqMc6or4nH3nxdwLI7K2zNgCF9R3dXDcO9UAXcp0VpBZT1ocAQyL3UWBC2ndr/JIXfaqVlg8GJmumjR9dN3sMoEZjWFUDoAMTGPhQyR4j/VGxXoEDv9yECAhNIGNpw2i3sqqMhVQZHgTEWIDWCyar0dkbQByJhMNQ/6hrNVXWBYzQfP/IKP669lMYW3ETM2SiDGgBAyKHwwBXSIYNEV8eWYUfrf4IPrvkOsACVKYkMVh3RBAfIvUGoxMrehEBS2MuWrcPBhxOxM1Ih5UIELYuvRFNk+Ezi96P79+wlg2bwcg4A9AgJ2FoBAAZiK9etxofG74WA8ywaXg5jM0cNcqjgyrCiAD5UrwzMgFe3QMa5LzY4Jga7iFRdgIdprU9iMfPHUPu0X7j8DJ8d+Va5DaHkTt8bgwMwIzE11auxocXvg8NOHr85T/OuQKpMKCNTU8UR5xVjLogtHeIFkwP8tOmQGg/yypDSex7H1QhOXn67Zf+hEFkuOeaGyAabFx0LSDi2L8vIKcBZDFAgwdWrcbNw4vQkoUEPP/3M/jxxMsgDGDk4sthUWi5Q+vshFeIFQlOekt9zvQGIC5AmB/zNB46ZXdVq7YUt2n04MkjhCXuWXY9YA02Lr4Gbwy1kJEADTaPLEeDBm1ZCMRz585i9+nTokgHO4SMb7ACIYUHUkx0xViOO4i80AMQxPkK5VQCTtWAF4I0llCEpQjtOHEEuydOICeR0eCqRsNVgSQW5I34+k/O/g2PnTwFWC8VGEC0SW8R+oIolrBKmfS9FAXxXA9AEG48ZS27hpW6pAxZMrKBQEsZiwdPHMHuMyc8JhAZSyDMafDMxFn88NjxMEiRjEX8YeG8D1FKaVeVSiHVJ0VN9IIGj7p3mmpJFrQaeoWmi9CguCFBRlAuPXTiCPYkRsiN8/zTL5/BD44dd041gkxBmxWQKSBjvfhCJV2ib4bKzrNDhYbf+ywx4HBUflOPSwwegBzzW8orH0lJFujSALAFrTHYcfwIXmu19MXlKzllLR45fgKPnDzlhkje4zYvIFr33HfCQqjzXc2f1g+hPXcCo5cWZA/NWhEaPrR/JBvMXwqKjIKImYifVbU2jMRCTSJnABsjVKYwREEMFDlYGBSFnwHSQqaNwnu+YOEOD4swXOsUYNE5eQroUNjr8YkvnJpVCry6/s4JSL9HhBaxsxJkfHR1Utm1VfLGSwPWFFBm1crauJi1YBttFHkLNm+haFgpK1BkVjACjMo2R5dxY6ea+NvpDv+W9QBBT7mCg7VqlKgUg4h4IFWbIVTSgYI1BYusjSL3P41CNreQadNmcoHGWndT70fSA6diFSmB+3omiLTfwOOQpmrzOQUhhLVJD0J/xoQgAzUZX7cYOHTPLGxWQFmbNmvDGgvARsSfxjMdAo3f2RSm/vVEzwzw+oY7XhfxJGo6H+vyR10uKxGKMREib3sViXI8T7l8N/BJ1nlPIPmehGrUzTAP45Pbz/fMAABgLxbfIDiJLj2ZghuSgystVqr9fEVscNEgyMgPh4PAaqo6agDY0BnT51JnCEzadnus54ORV9ffOWGBbyX1Xzq7QqcImHgr7dR0eUYiq1wexuNMB6tRYaq9xz3ZOZNbJDOaDL3yz9e+I+Gob4lKKbw20k6H5FFI4eVTOYzOO8BeurxeVRmWYtxOnBmbyZne3nC0XRyWNL+cDKkWqvXJUDnwrMi7SC9HedS31lV51slH9cmQnAzNWF8o3kGaLAp7E27b+pcrej/g/Aduf7FdtD8E8deAJjvzNJn1xxRQxyyhWy6EoUoUNbtMgRiGIWX0TJL4eWHwwZkevr/6q78uDYKLxw98k8L9AHIBkrWsXvLzwJVeZfP3AnSpKy4BtqrXZSpXYsprcx3AOu3VGql6A9U3SW2AO3HbvQ/MCAQNuD22y3HcXRNB07F4OhfonA2Gib7nb5Yz9Uh/YYIU6LU2UE41h2RWWI4iVOkFSu8yh7R9xixgoV0A2mHoWJOD1aH/dWyYqmj1YYyR9IjpjQ+VQy9163H8aI1xHO5G5pFxyjs3CWu4gWwb4q5+svdXf/VXf/VXf/VXf9XWfwG/z+HUS7BAOAAAAABJRU5ErkJggg==",
                        class: "w-20px h-20px cursor-pointer mr-2px",
                        onClick: l[0] || (l[0] = (...v) => e(x) && e(x)(...v))
                    }), oe(" App ")])) : a("", !0), i(j, {
                        class: "mx-10px"
                    })])]), t("div", Fc, [i(O, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", Oc, [t("img", {
                            class: "w-106px h-106px mx-auto",
                            src: e(g).s_l
                        }, null, 8, Mc), t("div", Nc, n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[1] || (l[1] = v => B($) ? $.value = v : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Hc, [e($) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[2] || (l[2] = v => e(p).email = v),
                            placeholder: o.$t("auth.email.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[4] || (l[4] = v => e(p).phone = v),
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [i(C, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[3] || (l[3] = v => B(b) ? b.value = v : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[5] || (l[5] = v => e(p).username = v),
                            placeholder: o.$t("auth.username.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[6] || (l[6] = v => e(p).tg = v),
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[7] || (l[7] = v => e(p).pwd = v),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, null, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[9] || (l[9] = v => e(p).code = v),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[8] || (l[8] = v => e(R)())
                            }, [e(P) ? (s(), m("div", Gc)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Ec))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(W, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", Dc, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(L, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "flex items-center h-60px text-12px text-#768da9",
                        onClick: l[10] || (l[10] = v => o.$router.push("/register"))
                    }, [t("span", null, n(o.$t("auth.noRegister")), 1), t("span", zc, n(o.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), e(I) ? (s(), m("div", Sc, [i(T, {
                        modelValue: e(V),
                        "onUpdate:modelValue": l[11] || (l[11] = v => B(V) ? V.value = v : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", Jc, n(o.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[12] || (l[12] = v => o.$router.push("/termOfUse"))
                    }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[13] || (l[13] = v => o.$router.push("/privacyPolicy"))
                    }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Qc = {
        class: "login"
    },
    Yc = {
        class: "flex items-center"
    },
    Xc = {
        class: "flex items-center"
    },
    Kc = {
        class: "w-auto max-w-88px h-auto max-h-44px mr-8px"
    },
    Zc = ["src"],
    e1 = {
        class: "name font-ali c-$nav-border! text-white!"
    },
    o1 = {
        class: "flex items-center ml-auto"
    },
    t1 = {
        key: 0,
        class: "bg-#2b3139 px-10px py-4px text-12px rounded-full flex items-center"
    },
    l1 = {
        class: "top-tools mt-10px pl-20px"
    },
    s1 = {
        class: "login-content"
    },
    n1 = {
        class: "mb-50px"
    },
    a1 = {
        class: "font-bold text-2xl"
    },
    r1 = {
        class: "mt-10px text-$text-gray"
    },
    d1 = {
        onsubmit: "return func()"
    },
    i1 = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    u1 = {
        key: 2,
        class: "mt-20px text-$text-gray"
    },
    p1 = {
        key: 4,
        class: "mt-20px text-$text-gray"
    },
    m1 = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    c1 = {
        class: "mt-20px text-$text-gray"
    },
    h1 = {
        key: 2,
        class: "text-$text-gray mt-20px"
    },
    $1 = ["src"],
    _1 = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    x1 = {
        class: "login-tools px-20px"
    },
    g1 = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    v1 = {
        class: "ml-2px"
    },
    y1 = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = K,
                    f = te,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = le("RouterLink"),
                    T = Q,
                    _ = S;
                return s(), m("div", Qc, [i(_, null, {
                    default: u(() => [t("div", Yc, [t("div", Xc, [t("div", Kc, [t("img", {
                        class: "w-44px h-44px",
                        src: e(g).s_l
                    }, null, 8, Zc)]), t("p", e1, n(e(g).s_n), 1)]), t("div", o1, [e(g).a_d_s_s === "true" ? (s(), m("div", t1, [t("div", {
                        class: "i-ph:download-fill w-18px h-18px cursor-pointer mr-2px",
                        onClick: o[0] || (o[0] = v => r.$router.push("/download"))
                    }), oe(" App ")])) : a("", !0), i(l, {
                        class: "mx-10px"
                    })])]), t("div", l1, [i(f)]), t("div", s1, [i(W, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", n1, [t("div", a1, n(r.$t("Hello")), 1), t("div", r1, n(r.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e($).length > 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[1] || (o[1] = v => B(x) ? x.value = v : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", d1, [e(x) === 1 ? (s(), m("div", i1, n(r.$t("auth.email.placeholder")), 1)) : a("", !0), e(x) === 1 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[2] || (o[2] = v => e(c).email = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(x) === 2 ? (s(), m("div", u1, n(r.$t("auth.phone.placeholder")), 1)) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[4] || (o[4] = v => e(c).phone = v),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[3] || (o[3] = v => B(U) ? U.value = v : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e(x) === 3 ? (s(), m("div", p1, n(r.$t("auth.username.placeholder")), 1)) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 5,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[5] || (o[5] = v => e(c).username = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 6
                        }, [e(x) === 4 ? (s(), m("div", m1, n(r.$t("auth.telegram.placeholder")), 1)) : a("", !0), e(x) === 4 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[6] || (o[6] = v => e(c).tg = v),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", c1, n(r.$t("auth.password.placeholder")), 1), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[7] || (o[7] = v => e(c).pwd = v),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(p) || e(g).e_t_s_p === "0" ? (s(), m("div", h1, n(r.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[9] || (o[9] = v => e(c).code = v),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[8] || (o[8] = v => e(P)())
                            }, [e(M) ? (s(), m("div", _1)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, $1))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", x1, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full! rd-6px!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center border border-$primary border-solid text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: o[10] || (o[10] = v => r.$router.push("/register"))
                    }, n(r.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(L, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(r.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", g1, [i(T, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[11] || (o[11] = v => B(A) ? A.value = v : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", v1, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = v => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[13] || (o[13] = v => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    f1 = {
        class: "login"
    },
    k1 = {
        class: "flex items-center justify-between"
    },
    V1 = {
        class: "flex items-center"
    },
    w1 = {
        class: "mt-50px flex items-center"
    },
    b1 = {
        class: "w-60px h-60px border border-solid border-$border-color2 bg-[rgba(255,255,255,0.24)] rounded-20px overflow-hidden p-1px"
    },
    C1 = ["src"],
    U1 = {
        class: "text-16px py-8px px-18px"
    },
    L1 = {
        class: "text-$primary"
    },
    B1 = {
        class: "login-content"
    },
    A1 = {
        onsubmit: "return func()"
    },
    T1 = {
        key: 0,
        class: "mt-20px"
    },
    P1 = {
        key: 2,
        class: "mt-20px"
    },
    I1 = {
        key: 4,
        class: "mt-20px"
    },
    W1 = {
        key: 0,
        class: "mt-20px"
    },
    j1 = {
        class: "mt-20px"
    },
    R1 = {
        key: 2,
        class: "mt-20px"
    },
    F1 = ["src"],
    O1 = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    M1 = {
        class: "mt-60px"
    },
    N1 = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex justify-center items-center flex-wrap"
    },
    H1 = {
        class: "ml-2px"
    },
    E1 = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = Q,
                    T = S;
                return s(), m("div", f1, [i(T, null, {
                    default: u(() => [t("div", k1, [i(l), t("div", V1, [i(f, {
                        class: "ml-8px"
                    })])]), t("div", w1, [t("div", b1, [t("img", {
                        class: "w-full h-full rounded-20px",
                        src: e(g).s_l
                    }, null, 8, C1)]), t("div", U1, [t("div", null, n(r.$t("Welcome_to")), 1), t("div", L1, n(e(g).s_n), 1)])]), t("div", B1, [e($).length > 1 ? (s(), h(j, {
                        key: 0,
                        modelValue: e(x),
                        "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                        options: e($)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(W, {
                        class: "pt-0!"
                    }, {
                        default: u(() => [t("form", A1, [e(x) === 1 ? (s(), m("div", T1, n(r.$t("auth.email.placeholder")), 1)) : a("", !0), e(x) === 1 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.email.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), m("div", P1, n(r.$t("auth.phone.placeholder")), 1)) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), m("div", I1, n(r.$t("auth.username.placeholder")), 1)) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 5,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.username.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 6
                        }, [e(x) === 4 ? (s(), m("div", W1, n(r.$t("auth.telegram.placeholder")), 1)) : a("", !0), e(x) === 4 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, null, 8, ["modelValue", "placeholder"])) : a("", !0), t("div", j1, n(r.$t("auth.password.placeholder")), 1), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            class: "min-h-44px!",
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, null, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), m("div", R1, n(r.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 3,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            class: "min-h-44px!",
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", O1)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, F1))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", M1, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: o[9] || (o[9] = _ => r.$router.push("/register"))
                    }, n(r.$t("auth.registerBtn")), 1)], 64)) : a("", !0), e(I) ? (s(), m("div", N1, [i(L, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = _ => B(A) ? A.value = _ : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", H1, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = _ => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = _ => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    G1 = {
        class: "login"
    },
    D1 = {
        class: "flex items-center"
    },
    z1 = {
        class: "mx-16px"
    },
    S1 = ["src"],
    J1 = {
        class: "flex items-center ml-auto"
    },
    q1 = t("div", {
        class: "i-ep:service w-22px h-22px cursor-pointer mx-10px"
    }, null, -1),
    Q1 = {
        class: "top-tools mt-10px pl-20px"
    },
    Y1 = {
        class: "login-content"
    },
    X1 = {
        class: "mb-50px"
    },
    K1 = {
        class: "font-bold text-2xl"
    },
    Z1 = {
        class: "mt-10px text-$text-gray"
    },
    eh = {
        onsubmit: "return func()"
    },
    oh = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    th = {
        key: 2,
        class: "mt-20px text-$text-gray"
    },
    lh = {
        key: 4,
        class: "mt-20px text-$text-gray"
    },
    sh = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    nh = {
        class: "mt-20px text-$text-gray"
    },
    ah = {
        key: 2,
        class: "text-$text-gray mt-20px"
    },
    rh = ["src"],
    dh = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    ih = {
        class: "login-tools px-20px"
    },
    uh = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    ph = {
        class: "ml-2px"
    },
    mh = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = K,
                    j = de,
                    w = te,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = Q,
                    d = S;
                return s(), m("div", G1, [i(d, null, {
                    default: u(() => [t("div", D1, [t("div", z1, [t("img", {
                        class: "min-w-46px max-w-120px h-full max-h-46px",
                        src: e(g).s_l
                    }, null, 8, S1)]), t("div", J1, [e(g).a_d_s_s === "true" ? (s(), m("div", {
                        key: 0,
                        class: "i-mdi:download-outline w-25px h-25px cursor-pointer mx-10px",
                        onClick: l[0] || (l[0] = (...k) => e(x) && e(x)(...k))
                    })) : a("", !0), i(f, {
                        class: "mx-10px"
                    }), t("div", {
                        class: "i-ic:sharp-notifications-none w-22px h-22px cursor-pointer mx-10px",
                        onClick: l[1] || (l[1] = k => o.$router.push("/notice"))
                    }), i(j, null, {
                        default: u(() => [q1]),
                        _: 1
                    })])]), t("div", Q1, [i(w)]), t("div", Y1, [i(L, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", X1, [t("div", K1, n(o.$t("Hello")), 1), t("div", Z1, n(o.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[2] || (l[2] = k => B($) ? $.value = k : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", eh, [e($) === 1 ? (s(), m("div", oh, n(o.$t("auth.email.placeholder")), 1)) : a("", !0), e($) === 1 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[3] || (l[3] = k => e(p).email = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e($) === 2 ? (s(), m("div", th, n(o.$t("auth.phone.placeholder")), 1)) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[5] || (l[5] = k => e(p).phone = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[4] || (l[4] = k => B(b) ? b.value = k : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e($) === 3 ? (s(), m("div", lh, n(o.$t("auth.username.placeholder")), 1)) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 5,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[6] || (l[6] = k => e(p).username = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 6
                        }, [e($) === 4 ? (s(), m("div", sh, n(o.$t("auth.telegram.placeholder")), 1)) : a("", !0), e($) === 4 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[7] || (l[7] = k => e(p).tg = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", nh, n(o.$t("auth.password.placeholder")), 1), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[8] || (l[8] = k => e(p).pwd = k),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(U) || e(g).e_t_s_p === "0" ? (s(), m("div", ah, n(o.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[10] || (l[10] = k => e(p).code = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[9] || (l[9] = k => e(R)())
                            }, [e(P) ? (s(), m("div", dh)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, rh))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", ih, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center border border-$primary border-solid text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: l[11] || (l[11] = k => o.$router.push("/register"))
                    }, n(o.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", uh, [i(v, {
                        modelValue: e(V),
                        "onUpdate:modelValue": l[12] || (l[12] = k => B(V) ? V.value = k : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", ph, n(o.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[13] || (l[13] = k => o.$router.push("/termOfUse"))
                    }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[14] || (l[14] = k => o.$router.push("/privacyPolicy"))
                    }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    ch = {
        class: "login"
    },
    hh = {
        class: "top-info relative"
    },
    $h = {
        class: "flex flex-col items-center text-center"
    },
    _h = {
        class: "font-ali mb-4px mt-24px text-24px font-600 lh-24px text-white"
    },
    xh = {
        class: "top-tools"
    },
    gh = {
        class: "bg-white rounded-full w-28px h-28px flex items-center justify-center"
    },
    vh = {
        class: "flex items-center"
    },
    yh = {
        class: "login-content"
    },
    fh = {
        onsubmit: "return func()"
    },
    kh = {
        class: "label"
    },
    Vh = {
        class: "label"
    },
    wh = {
        class: "label"
    },
    bh = {
        class: "label"
    },
    Ch = {
        class: "label"
    },
    Uh = {
        class: "label"
    },
    Lh = ["src"],
    Bh = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Ah = {
        key: 5,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm text-$text-gray"
    },
    Th = {
        class: "ml-2px"
    },
    Ph = {
        key: 0,
        class: "login-tools mt-16px"
    },
    Ih = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = se,
                    f = te,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Z,
                    O = Q,
                    L = z,
                    T = q,
                    _ = S;
                return s(), m("div", ch, [i(_, null, {
                    default: u(() => [t("div", hh, [t("div", $h, [i(l, {
                        class: "rd-15px!"
                    }), t("p", _h, n(e(g).s_n), 1)]), t("div", xh, [t("div", gh, [i(f)]), t("div", vh, [i(j, {
                        class: "ml-8px"
                    })])])]), t("div", yh, [e($).length > 1 ? (s(), h(w, {
                        key: 0,
                        modelValue: e(x),
                        "onUpdate:modelValue": o[0] || (o[0] = v => B(x) ? x.value = v : null),
                        options: e($)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(T, {
                        class: "mt-16px"
                    }, {
                        default: u(() => [t("form", fh, [e(x) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = v => e(c).email = v),
                            class: "mt-0!",
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", kh, n(r.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = v => e(c).phone = v),
                            class: "mt-0!",
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", Vh, n(r.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [i(C, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = v => B(U) ? U.value = v : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = v => e(c).username = v),
                            class: "mt-0!",
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", wh, n(r.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = v => e(c).tg = v),
                            class: "mt-0!",
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", bh, n(r.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = v => e(c).pwd = v),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", Ch, n(r.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = v => e(c).code = v),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            label: u(() => [t("div", Uh, n(r.$t("auth.vcode.placeholder")), 1)]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = v => e(P)())
                            }, [e(M) ? (s(), m("div", Bh)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Lh))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(W, {
                            key: 4
                        })), e(I) ? (s(), m("div", Ah, [i(O, {
                            modelValue: e(A),
                            "onUpdate:modelValue": o[9] || (o[9] = v => B(A) ? A.value = v : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Th, n(r.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: o[10] || (o[10] = v => r.$router.push("/termOfUse"))
                        }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: o[11] || (o[11] = v => r.$router.push("/privacyPolicy"))
                        }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)]), e(V) ? (s(), m("div", Ph, [i(L, {
                            loading: e(R),
                            class: "w-full!",
                            onClick: e(b)
                        }, {
                            default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                            _: 1
                        }, 8, ["loading", "onClick"]), t("div", {
                            class: "register-btn mt-20px",
                            onClick: o[12] || (o[12] = v => r.$router.push("/register"))
                        }, n(r.$t("auth.registerBtn")), 1)])) : a("", !0)]),
                        _: 1
                    })])]),
                    _: 1
                })])
            }
        }
    }),
    Wh = {
        class: "login"
    },
    jh = {
        class: "top-info relative"
    },
    Rh = {
        class: "flex flex-col items-center text-center"
    },
    Fh = {
        class: "font-ali mb-4px mt-24px text-24px font-600 lh-24px text-white"
    },
    Oh = {
        class: "top-tools"
    },
    Mh = {
        class: "border border-solid border-$btn-text rounded-full w-28px h-28px flex items-center justify-center"
    },
    Nh = {
        class: "flex items-center"
    },
    Hh = {
        class: "login-content"
    },
    Eh = {
        onsubmit: "return func()",
        class: "mt-16px"
    },
    Gh = {
        class: "label"
    },
    Dh = {
        class: "label"
    },
    zh = {
        class: "label"
    },
    Sh = {
        class: "label"
    },
    Jh = {
        class: "label"
    },
    qh = {
        class: "label"
    },
    Qh = ["src"],
    Yh = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Xh = {
        key: 5,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm text-$text-gray"
    },
    Kh = {
        class: "ml-2px"
    },
    Zh = {
        class: "login-tools mt-16px"
    },
    e$ = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = se,
                    f = te,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Z,
                    O = Q,
                    L = z,
                    T = le("RouterLink"),
                    _ = q,
                    v = S;
                return s(), m("div", Wh, [i(v, null, {
                    default: u(() => [t("div", jh, [t("div", Rh, [i(l, {
                        class: "rd-15px!"
                    }), t("p", Fh, n(e(g).s_n), 1)]), t("div", Oh, [t("div", Mh, [i(f)]), t("div", Nh, [i(j, {
                        class: "ml-8px"
                    })])])]), t("div", Hh, [i(_, null, {
                        default: u(() => [e($).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = d => B(x) ? x.value = d : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Eh, [e(x) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = d => e(c).email = d),
                            class: "mt-0!",
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Gh, n(r.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = d => e(c).phone = d),
                            class: "mt-0!",
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", Dh, n(r.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [i(C, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = d => B(U) ? U.value = d : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = d => e(c).username = d),
                            class: "mt-0!",
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", zh, n(r.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = d => e(c).tg = d),
                            class: "mt-0!",
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", Sh, n(r.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = d => e(c).pwd = d),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", Jh, n(r.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = d => e(c).code = d),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            label: u(() => [t("div", qh, n(r.$t("auth.vcode.placeholder")), 1)]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = d => e(P)())
                            }, [e(M) ? (s(), m("div", Yh)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Qh))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(W, {
                            key: 4
                        })), e(I) ? (s(), m("div", Xh, [i(O, {
                            modelValue: e(A),
                            "onUpdate:modelValue": o[9] || (o[9] = d => B(A) ? A.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", Kh, n(r.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$btn-text",
                            onClick: o[10] || (o[10] = d => r.$router.push("/termOfUse"))
                        }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                            class: "mx-5px cursor-pointer text-$btn-text",
                            onClick: o[11] || (o[11] = d => r.$router.push("/privacyPolicy"))
                        }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)]), t("div", Zh, [e(V) ? (s(), m(N, {
                            key: 0
                        }, [i(L, {
                            loading: e(R),
                            class: "w-full!",
                            onClick: e(b)
                        }, {
                            default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                            _: 1
                        }, 8, ["loading", "onClick"]), t("div", {
                            class: "register-btn mt-20px",
                            onClick: o[12] || (o[12] = d => r.$router.push("/register"))
                        }, n(r.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(T, {
                            to: "/",
                            class: "w-full block text-center text-$text-gray mt-16px"
                        }, {
                            default: u(() => [oe(n(r.$t("Go_To_HomePage")), 1)]),
                            _: 1
                        })])]),
                        _: 1
                    })])]),
                    _: 1
                })])
            }
        }
    }),
    o$ = {
        class: "login"
    },
    t$ = {
        class: "flex items-center"
    },
    l$ = {
        class: "mx-16px"
    },
    s$ = ["src"],
    n$ = {
        class: "flex items-center ml-auto"
    },
    a$ = t("div", {
        class: "i-uiw:cloud-download w-20px h-20px mr-20px"
    }, null, -1),
    r$ = t("div", {
        class: "i-mingcute:service-fill w-20px h-20px text-$primary"
    }, null, -1),
    d$ = {
        class: "top-tools mt-10px pl-20px"
    },
    i$ = {
        class: "login-content"
    },
    u$ = {
        class: "mb-50px"
    },
    p$ = {
        class: "font-bold text-2xl text-$primary"
    },
    m$ = {
        class: "mt-10px text-$text-gray!"
    },
    c$ = {
        onsubmit: "return func()"
    },
    h$ = {
        key: 0,
        class: "mt-20px text-$text-gray!"
    },
    $$ = {
        key: 2,
        class: "mt-20px text-$text-gray!"
    },
    _$ = {
        key: 4,
        class: "mt-20px text-$text-gray!"
    },
    x$ = {
        key: 0,
        class: "mt-20px text-$text-gray!"
    },
    g$ = {
        class: "mt-20px text-$text-gray!"
    },
    v$ = {
        key: 2,
        class: "mt-20px text-$text-gray!"
    },
    y$ = ["src"],
    f$ = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    k$ = {
        class: "login-tools px-20px"
    },
    V$ = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    w$ = {
        class: "ml-2px"
    },
    b$ = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = de,
                    j = K,
                    w = te,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = Q,
                    d = S;
                return s(), m("div", o$, [i(d, null, {
                    default: u(() => [t("div", t$, [t("div", l$, [t("img", {
                        class: "w-full max-w-46px h-full max-h-46px",
                        src: e(g).s_l
                    }, null, 8, s$)]), t("div", n$, [e(g).a_d_s_s === "true" ? (s(), m("div", {
                        key: 0,
                        class: "bg-#5ae9b5 text-white px-10px py-4px rd-full flex items-center",
                        onClick: l[0] || (l[0] = (...k) => e(x) && e(x)(...k))
                    }, [a$, oe(" App ")])) : a("", !0), i(f, {
                        class: "mx-10px"
                    }, {
                        default: u(() => [r$]),
                        _: 1
                    }), i(j, {
                        class: "ml-10px"
                    })])]), t("div", d$, [i(w, {
                        class: "text-$text-gray!"
                    })]), t("div", i$, [i(L, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", u$, [t("div", p$, n(o.$t("Hello")), 1), t("div", m$, n(o.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[1] || (l[1] = k => B($) ? $.value = k : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", c$, [e($) === 1 ? (s(), m("div", h$, n(o.$t("auth.email.placeholder")), 1)) : a("", !0), e($) === 1 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[2] || (l[2] = k => e(p).email = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e($) === 2 ? (s(), m("div", $$, n(o.$t("auth.phone.placeholder")), 1)) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[4] || (l[4] = k => e(p).phone = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[3] || (l[3] = k => B(b) ? b.value = k : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e($) === 3 ? (s(), m("div", _$, n(o.$t("auth.username.placeholder")), 1)) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 5,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[5] || (l[5] = k => e(p).username = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 6
                        }, [e($) === 4 ? (s(), m("div", x$, n(o.$t("auth.telegram.placeholder")), 1)) : a("", !0), e($) === 4 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[6] || (l[6] = k => e(p).tg = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", g$, n(o.$t("auth.password.placeholder")), 1), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[7] || (l[7] = k => e(p).pwd = k),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(U) || e(g).e_t_s_p === "0" ? (s(), m("div", v$, n(o.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[9] || (l[9] = k => e(p).code = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[8] || (l[8] = k => e(R)())
                            }, [e(P) ? (s(), m("div", f$)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, y$))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", k$, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center border border-$primary border-solid text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: l[10] || (l[10] = k => o.$router.push("/register"))
                    }, n(o.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", V$, [i(v, {
                        modelValue: e(V),
                        "onUpdate:modelValue": l[11] || (l[11] = k => B(V) ? V.value = k : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", w$, n(o.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[12] || (l[12] = k => o.$router.push("/termOfUse"))
                    }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[13] || (l[13] = k => o.$router.push("/privacyPolicy"))
                    }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    C$ = {
        class: "login"
    },
    U$ = {
        class: "top-info relative"
    },
    L$ = {
        class: "flex flex-col items-center text-center"
    },
    B$ = {
        class: "font-ali mb-4px mt-24px text-24px font-600 lh-24px c-$nav-text"
    },
    A$ = {
        class: "top-tools"
    },
    T$ = {
        class: "flex items-center"
    },
    P$ = {
        class: "login-content"
    },
    I$ = {
        onsubmit: "return func()"
    },
    W$ = {
        class: "label"
    },
    j$ = {
        class: "label"
    },
    R$ = {
        class: "label"
    },
    F$ = {
        class: "label"
    },
    O$ = {
        class: "label"
    },
    M$ = {
        class: "label"
    },
    N$ = ["src"],
    H$ = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    E$ = {
        key: 5,
        class: "mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm"
    },
    G$ = {
        class: "ml-2px"
    },
    D$ = {
        key: 1,
        class: "login-tools"
    },
    z$ = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                no: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = se,
                    j = te,
                    w = K,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = Q,
                    T = q,
                    _ = z,
                    v = S;
                return s(), m("div", C$, [i(v, {
                    class: ne(`c-${e(x)}`)
                }, {
                    default: u(() => [t("div", U$, [t("div", L$, [i(f, {
                        class: "rd-15px!"
                    }), t("p", B$, n(e(g).s_n), 1)]), t("div", A$, [i(j), t("div", T$, [i(w, {
                        class: "ml-8px"
                    })])])]), t("div", P$, [e(c).length > 1 ? (s(), h(y, {
                        key: 0,
                        modelValue: e($),
                        "onUpdate:modelValue": l[0] || (l[0] = d => B($) ? $.value = d : null),
                        options: e(c)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(T, {
                        class: ne({
                            "scale-x": e($) === 2
                        })
                    }, {
                        default: u(() => [t("form", I$, [e($) === 1 ? (s(), h(C, {
                            key: 0,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[1] || (l[1] = d => e(p).email = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", W$, n(o.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[3] || (l[3] = d => e(p).phone = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", j$, n(o.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[2] || (l[2] = d => B(b) ? b.value = d : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 2,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[4] || (l[4] = d => e(p).username = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", R$, n(o.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 3
                        }, [e($) === 4 ? (s(), h(C, {
                            key: 0,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[5] || (l[5] = d => e(p).tg = d),
                            class: "mt-0!",
                            placeholder: o.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", F$, n(o.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[6] || (l[6] = d => e(p).pwd = d),
                            type: "password",
                            placeholder: o.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", O$, n(o.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[8] || (l[8] = d => e(p).code = d),
                            placeholder: o.$t("auth.vcode.placeholder")
                        }, {
                            label: u(() => [t("div", M$, n(o.$t("auth.vcode.placeholder")), 1)]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[7] || (l[7] = d => e(R)())
                            }, [e(P) ? (s(), m("div", H$)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, N$))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 4
                        })), e(I) ? (s(), m("div", E$, [i(L, {
                            modelValue: e(V),
                            "onUpdate:modelValue": l[9] || (l[9] = d => B(V) ? V.value = d : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", G$, n(o.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: l[10] || (l[10] = d => o.$router.push("/termOfUse"))
                        }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: l[11] || (l[11] = d => o.$router.push("/privacyPolicy"))
                        }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])]),
                        _: 1
                    }, 8, ["class"]), e(r) ? (s(), m("div", D$, [i(_, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "register-btn mt-20px",
                        onClick: l[12] || (l[12] = d => o.$router.push("/register"))
                    }, n(o.$t("auth.registerBtn")), 1)])) : a("", !0)])]),
                    _: 1
                }, 8, ["class"])])
            }
        }
    }),
    S$ = {
        class: "login"
    },
    J$ = {
        class: "flex items-center"
    },
    q$ = {
        class: "mx-16px"
    },
    Q$ = ["src"],
    Y$ = {
        class: "flex items-center ml-auto"
    },
    X$ = t("div", {
        class: "w-23px h-23px rounded text-black flex items-center justify-center bg-$primary"
    }, [t("div", {
        class: "i-ep:service w-20px h-20px"
    })], -1),
    K$ = {
        class: "top-tools mt-10px pl-20px"
    },
    Z$ = {
        class: "login-content"
    },
    e_ = {
        class: "mb-50px"
    },
    o_ = {
        class: "font-bold text-2xl text-$primary"
    },
    t_ = {
        class: "mt-10px"
    },
    l_ = {
        onsubmit: "return func()"
    },
    s_ = {
        key: 0,
        class: "mt-20px"
    },
    n_ = {
        key: 2,
        class: "mt-20px"
    },
    a_ = {
        key: 4,
        class: "mt-20px"
    },
    r_ = {
        key: 0,
        class: "mt-20px"
    },
    d_ = {
        class: "mt-20px"
    },
    i_ = {
        key: 2,
        class: "mt-20px"
    },
    u_ = ["src"],
    p_ = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    m_ = {
        class: "login-tools px-20px"
    },
    c_ = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    h_ = {
        class: "ml-2px"
    },
    $_ = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = de,
                    j = K,
                    w = te,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = Q,
                    d = S;
                return s(), m("div", S$, [i(d, null, {
                    default: u(() => [t("div", J$, [t("div", q$, [t("img", {
                        class: "w-full max-w-88px h-full max-h-44px",
                        src: e(g).s_l
                    }, null, 8, Q$)]), t("div", Y$, [e(g).a_d_s_s === "true" ? (s(), m("img", {
                        key: 0,
                        class: "w-23px h-23px mr-20px",
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEVHcEwZ37MZ37MoKCgZ37MZ37MZ37MZ37MZ37MZ37Mgj3YkVkslSkIfmn8mQjwcs5IZ2rAcvJgnMzAnLCsmOzYbyKEa0agjYVMcv5sazqYib14lUEcdqIohf2oheGWySaRQAAAACnRSTlMAKP//7yXzrfIn1jQ8CAAAAMtJREFUOMvt1ckWgjAMBdCYJ0KBtMyK0/9/phtxgGDjwp1vfc9pk7YpUZJmHEmWJkRuy4ZsHaVsSkqZDe6IjZnD2gMA4A8RuMc9+wgsJ1j84a9hEBHpJuhFRIIGByjpFViVS+crbem+mbv2oBcT2hmUtarzd3dcb8/x1ZXVOqxOT9f0nxo+PvqIc+TNTAVdIkfIop/gEvIVALoxDrkA2sAGOHjkbIE8BLbByEipcy31EjbafUSzhIUKi+/3aB6k5tG8sQ37DZGzfB+ObntDE0pB4221AAAAAElFTkSuQmCC",
                        onClick: l[0] || (l[0] = (...k) => e(x) && e(x)(...k))
                    })) : a("", !0), i(f, {
                        class: "mx-10px"
                    }, {
                        default: u(() => [X$]),
                        _: 1
                    }), i(j, {
                        class: "mx-10px"
                    })])]), t("div", K$, [i(w)]), t("div", Z$, [i(L, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", e_, [t("div", o_, n(o.$t("Hello")), 1), t("div", t_, n(o.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[1] || (l[1] = k => B($) ? $.value = k : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", l_, [e($) === 1 ? (s(), m("div", s_, n(o.$t("auth.email.placeholder")), 1)) : a("", !0), e($) === 1 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[2] || (l[2] = k => e(p).email = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e($) === 2 ? (s(), m("div", n_, n(o.$t("auth.phone.placeholder")), 1)) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[4] || (l[4] = k => e(p).phone = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[3] || (l[3] = k => B(b) ? b.value = k : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e($) === 3 ? (s(), m("div", a_, n(o.$t("auth.username.placeholder")), 1)) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 5,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[5] || (l[5] = k => e(p).username = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 6
                        }, [e($) === 4 ? (s(), m("div", r_, n(o.$t("auth.telegram.placeholder")), 1)) : a("", !0), e($) === 4 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[6] || (l[6] = k => e(p).tg = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", d_, n(o.$t("auth.password.placeholder")), 1), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[7] || (l[7] = k => e(p).pwd = k),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(U) || e(g).e_t_s_p === "0" ? (s(), m("div", i_, n(o.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[9] || (l[9] = k => e(p).code = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[8] || (l[8] = k => e(R)())
                            }, [e(P) ? (s(), m("div", p_)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, u_))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", m_, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center border border-$primary border-solid text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: l[10] || (l[10] = k => o.$router.push("/register"))
                    }, n(o.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", c_, [i(v, {
                        modelValue: e(V),
                        "onUpdate:modelValue": l[11] || (l[11] = k => B(V) ? V.value = k : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", h_, n(o.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[12] || (l[12] = k => o.$router.push("/termOfUse"))
                    }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[13] || (l[13] = k => o.$router.push("/privacyPolicy"))
                    }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    __ = {
        class: "login"
    },
    x_ = {
        class: "flex items-center justify-between"
    },
    g_ = {
        class: "text-white text-16px"
    },
    v_ = {
        class: "flex items-center"
    },
    y_ = {
        class: "base-small-btn"
    },
    f_ = {
        class: "mt-50px flex items-center"
    },
    k_ = {
        class: "w-60px h-60px border border-solid border-$border-color2 bg-[rgba(255,255,255,0.24)] rounded-20px overflow-hidden p-1px"
    },
    V_ = ["src"],
    w_ = {
        class: "text-16px py-8px px-18px"
    },
    b_ = {
        class: "text-$primary"
    },
    C_ = {
        class: "login-content"
    },
    U_ = {
        onsubmit: "return func()"
    },
    L_ = {
        key: 0,
        class: "mt-20px"
    },
    B_ = {
        key: 2,
        class: "mt-20px"
    },
    A_ = {
        key: 4,
        class: "mt-20px"
    },
    T_ = {
        key: 0,
        class: "mt-20px"
    },
    P_ = {
        class: "mt-20px"
    },
    I_ = {
        key: 2,
        class: "mt-20px"
    },
    W_ = ["src"],
    j_ = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    R_ = {
        class: "mt-60px"
    },
    F_ = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex justify-center items-center flex-wrap"
    },
    O_ = {
        class: "ml-2px"
    },
    M_ = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = ce,
                    j = de,
                    w = K,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = q,
                    T = z,
                    _ = Q,
                    v = S;
                return s(), m("div", __, [i(v, null, {
                    default: u(() => [t("div", x_, [i(l), t("div", g_, n(e(g).s_n), 1), t("div", v_, [i(j, null, {
                        default: u(() => [t("div", y_, [i(f, {
                            name: "7-help",
                            class: "w-20px h-20px"
                        })])]),
                        _: 1
                    }), i(w, {
                        class: "ml-8px"
                    })])]), t("div", f_, [t("div", k_, [t("img", {
                        class: "w-full h-full rounded-20px",
                        src: e(g).s_l
                    }, null, 8, V_)]), t("div", w_, [t("div", null, n(r.$t("Welcome_to")), 1), t("div", b_, n(e(g).s_n), 1)])]), t("div", C_, [e($).length > 1 ? (s(), h(y, {
                        key: 0,
                        modelValue: e(x),
                        "onUpdate:modelValue": o[0] || (o[0] = d => B(x) ? x.value = d : null),
                        options: e($)
                    }, null, 8, ["modelValue", "options"])) : a("", !0), i(L, {
                        class: "pt-0!"
                    }, {
                        default: u(() => [t("form", U_, [e(x) === 1 ? (s(), m("div", L_, n(r.$t("auth.email.placeholder")), 1)) : a("", !0), e(x) === 1 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = d => e(c).email = d),
                            class: "min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(x) === 2 ? (s(), m("div", B_, n(r.$t("auth.phone.placeholder")), 1)) : a("", !0), e(x) === 2 ? (s(), h(C, {
                            key: 3,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = d => e(c).phone = d),
                            class: "min-h-44px!"
                        }, {
                            left: u(() => [i(W, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = d => B(U) ? U.value = d : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e(x) === 3 ? (s(), m("div", A_, n(r.$t("auth.username.placeholder")), 1)) : a("", !0), e(x) === 3 ? (s(), h(C, {
                            key: 5,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = d => e(c).username = d),
                            class: "min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 6
                        }, [e(x) === 4 ? (s(), m("div", T_, n(r.$t("auth.telegram.placeholder")), 1)) : a("", !0), e(x) === 4 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = d => e(c).tg = d),
                            class: "min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", P_, n(r.$t("auth.password.placeholder")), 1), i(C, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = d => e(c).pwd = d),
                            class: "min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(p) || e(g).e_t_s_p === "0" ? (s(), m("div", I_, n(r.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(p) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 3,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = d => e(c).code = d),
                            class: "min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = d => e(P)())
                            }, [e(M) ? (s(), m("div", j_)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, W_))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", R_, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: o[9] || (o[9] = d => r.$router.push("/register"))
                    }, n(r.$t("auth.registerBtn")), 1)], 64)) : a("", !0), e(I) ? (s(), m("div", F_, [i(_, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = d => B(A) ? A.value = d : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", O_, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = d => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = d => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    N_ = {
        class: "login overflow-auto"
    },
    H_ = {
        class: "top-info relative"
    },
    E_ = {
        class: ":uno: flex flex-col items-center text-center"
    },
    G_ = {
        class: "top-tools"
    },
    D_ = {
        class: "w-100px h-100px rounded-20px mt-50px flex items-center justify-center"
    },
    z_ = ["src"],
    S_ = {
        class: ":uno: font-ali mb-4px mt-4px text-20px text-$primary"
    },
    J_ = {
        class: "login-content"
    },
    q_ = {
        onsubmit: "return func()"
    },
    Q_ = t("div", {
        class: "i-material-symbols:mail-outline-rounded w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Y_ = t("div", {
        class: "i-ic:round-phone-android w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    X_ = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    K_ = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Z_ = t("div", {
        class: "i-material-symbols:lock-open-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    ex = t("div", {
        class: "i-material-symbols:confirmation-number-outline w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    ox = ["src"],
    tx = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    lx = {
        class: "login-tools"
    },
    sx = {
        class: "ml-5px text-$primary"
    },
    nx = {
        key: 1,
        class: "mt-20px cursor-pointer text-center justify-center text-sm flex items-center flex-wrap"
    },
    ax = {
        class: "ml-2px"
    },
    rx = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = z,
                    O = Q,
                    L = q,
                    T = S;
                return s(), m("div", N_, [i(T, null, {
                    default: u(() => [t("div", H_, [t("div", E_, [t("div", G_, [i(l), i(f, {
                        type: "text"
                    })]), t("div", D_, [t("img", {
                        class: "w-90px h-90px rounded-20px",
                        src: e(g).s_l
                    }, null, 8, z_)]), t("p", S_, n(e(g).s_n), 1)])]), t("div", J_, [i(L, null, {
                        default: u(() => [e($).length > 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", q_, [e(x) === 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            left: u(() => [Q_]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [Y_, i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            left: u(() => [X_]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            left: u(() => [K_]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            left: u(() => [Z_]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            left: u(() => [ex]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", tx)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, ox))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 4
                        }))]), t("div", lx, [e(V) ? (s(), m(N, {
                            key: 0
                        }, [i(W, {
                            loading: e(R),
                            class: "w-full!",
                            onClick: e(b)
                        }, {
                            default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                            _: 1
                        }, 8, ["loading", "onClick"]), t("div", {
                            class: "mt-20px cursor-pointer text-sm text-center",
                            onClick: o[9] || (o[9] = _ => r.$router.push("/register"))
                        }, [t("span", null, n(r.$t("auth.noRegister")), 1), t("span", sx, n(r.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), e(I) ? (s(), m("div", nx, [i(O, {
                            modelValue: e(A),
                            "onUpdate:modelValue": o[10] || (o[10] = _ => B(A) ? A.value = _ : null),
                            "checked-color": "var(--primary)"
                        }, null, 8, ["modelValue"]), t("span", ax, n(r.$t("auth.agree")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: o[11] || (o[11] = _ => r.$router.push("/termOfUse"))
                        }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                            class: "mx-5px text-$primary cursor-pointer",
                            onClick: o[12] || (o[12] = _ => r.$router.push("/privacyPolicy"))
                        }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])]),
                        _: 1
                    })])]),
                    _: 1
                })])
            }
        }
    }),
    dx = {
        class: "login"
    },
    ix = {
        class: "top-info relative"
    },
    ux = {
        class: ":uno: flex flex-col items-center text-center"
    },
    px = {
        class: "top-tools"
    },
    mx = {
        class: "w-100px h-100px rounded-20px mt-50px border border-solid border-[rgba(255,255,255,0.5)] bg-white bg-opacity-0 flex items-center justify-center"
    },
    cx = ["src"],
    hx = {
        class: ":uno: font-ali mb-4px mt-4px text-20px text-$primary"
    },
    $x = {
        class: "login-content"
    },
    _x = {
        onsubmit: "return func()"
    },
    xx = t("div", {
        class: "i-material-symbols:mail-outline-rounded w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    gx = t("div", {
        class: "i-ic:round-phone-android w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    vx = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    yx = t("div", {
        class: "i-material-symbols:account-box-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    fx = t("div", {
        class: "i-material-symbols:lock-open-outline-sharp w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    kx = t("div", {
        class: "i-material-symbols:confirmation-number-outline w-24px h-24px text-$primary mr-16px"
    }, null, -1),
    Vx = ["src"],
    wx = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    bx = {
        class: "login-tools"
    },
    Cx = {
        class: "ml-5px text-$primary"
    },
    Ux = {
        key: 1,
        class: "mt-20px cursor-pointer text-center justify-center text-sm flex items-center flex-wrap"
    },
    Lx = {
        class: "ml-2px"
    },
    Bx = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = te,
                    f = K,
                    j = X,
                    w = J,
                    y = Y,
                    C = Z,
                    W = q,
                    O = z,
                    L = Q,
                    T = S;
                return s(), m("div", dx, [i(T, null, {
                    default: u(() => [t("div", ix, [t("div", ux, [t("div", px, [i(l), i(f, {
                        class: "relative z-2",
                        type: "text"
                    })]), t("div", mx, [t("img", {
                        class: "w-90px h-90px rounded-20px",
                        src: e(g).s_l
                    }, null, 8, cx)]), t("p", hx, n(e(g).s_n), 1)])]), t("div", $x, [i(W, null, {
                        default: u(() => [e($).length > 1 ? (s(), h(j, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = _ => B(x) ? x.value = _ : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", _x, [e(x) === 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = _ => e(c).email = _),
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            left: u(() => [xx]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = _ => e(c).phone = _),
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            left: u(() => [gx, i(y, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = _ => B(U) ? U.value = _ : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(w, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = _ => e(c).username = _),
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            left: u(() => [vx]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = _ => e(c).tg = _),
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            left: u(() => [yx]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(w, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = _ => e(c).pwd = _),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            left: u(() => [fx]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(w, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = _ => e(c).code = _),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            left: u(() => [kx]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = _ => e(P)())
                            }, [e(M) ? (s(), m("div", wx)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Vx))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(C, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", bx, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(O, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-sm text-center",
                        onClick: o[9] || (o[9] = _ => r.$router.push("/register"))
                    }, [t("span", null, n(r.$t("auth.noRegister")), 1), t("span", Cx, n(r.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), e(I) ? (s(), m("div", Ux, [i(L, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = _ => B(A) ? A.value = _ : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", Lx, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = _ => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = _ => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Ax = {
        class: "login"
    },
    Tx = {
        class: "top-info relative"
    },
    Px = {
        class: ":uno: flex flex-col items-center text-center"
    },
    Ix = {
        class: ":uno: font-ali mb-4px mt-4px text-32px font-800 lh-44px"
    },
    Wx = {
        class: "top-tools"
    },
    jx = {
        class: "login-content"
    },
    Rx = {
        onsubmit: "return func()"
    },
    Fx = {
        class: "label"
    },
    Ox = {
        class: "label"
    },
    Mx = {
        class: "label"
    },
    Nx = {
        class: "label"
    },
    Hx = {
        class: "label"
    },
    Ex = {
        class: "label"
    },
    Gx = ["src"],
    Dx = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    zx = {
        class: "login-tools px-38px"
    },
    Sx = {
        class: "ml-5px text-$primary"
    },
    Jx = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    qx = {
        class: "ml-2px"
    },
    Qx = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = se,
                    f = te,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Z,
                    O = q,
                    L = z,
                    T = Q,
                    _ = S;
                return s(), m("div", Ax, [i(_, null, {
                    default: u(() => [t("div", Tx, [t("div", Px, [i(l), t("p", Ix, n(e(g).s_n), 1)]), t("div", Wx, [i(f), i(j, {
                        type: "text"
                    })])]), t("div", jx, [i(O, null, {
                        default: u(() => [e($).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = v => B(x) ? x.value = v : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Rx, [e(x) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = v => e(c).email = v),
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Fx, n(r.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = v => e(c).phone = v),
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", Ox, n(r.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [i(C, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = v => B(U) ? U.value = v : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = v => e(c).username = v),
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", Mx, n(r.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = v => e(c).tg = v),
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", Nx, n(r.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = v => e(c).pwd = v),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", Hx, n(r.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = v => e(c).code = v),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            label: u(() => [t("div", Ex, n(r.$t("auth.vcode.placeholder")), 1)]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = v => e(P)())
                            }, [e(M) ? (s(), m("div", Dx)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, Gx))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(W, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", zx, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(L, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-sm",
                        onClick: o[9] || (o[9] = v => r.$router.push("/register"))
                    }, [t("span", null, n(r.$t("auth.noRegister")), 1), t("span", Sx, n(r.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), e(I) ? (s(), m("div", Jx, [i(T, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = v => B(A) ? A.value = v : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", qx, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = v => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = v => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Yx = {
        class: "login"
    },
    Xx = {
        class: "flex items-center"
    },
    Kx = {
        class: "mx-16px flex items-center"
    },
    Zx = ["src"],
    eg = {
        class: "flex items-center ml-auto"
    },
    og = t("div", {
        class: "i-ep:service w-22px h-22px cursor-pointer mx-10px"
    }, null, -1),
    tg = {
        class: "top-tools mt-10px pl-20px"
    },
    lg = {
        class: "login-content"
    },
    sg = {
        class: "mb-50px"
    },
    ng = {
        class: "font-bold text-2xl"
    },
    ag = {
        class: "mt-10px text-$text-gray"
    },
    rg = {
        onsubmit: "return func()"
    },
    dg = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    ig = {
        key: 2,
        class: "mt-20px text-$text-gray"
    },
    ug = {
        key: 4,
        class: "mt-20px text-$text-gray"
    },
    pg = {
        key: 0,
        class: "mt-20px text-$text-gray"
    },
    mg = {
        class: "mt-20px text-$text-gray"
    },
    cg = {
        key: 2,
        class: "text-$text-gray mt-20px"
    },
    hg = ["src"],
    $g = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    _g = {
        class: "login-tools px-20px"
    },
    xg = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    gg = {
        class: "ml-2px"
    },
    vg = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee(), o = ie(() => _e(g.value.s_n));
            return (l, f) => {
                const j = K,
                    w = de,
                    y = te,
                    C = X,
                    W = J,
                    O = Y,
                    L = Z,
                    T = q,
                    _ = z,
                    v = le("RouterLink"),
                    d = Q,
                    k = S;
                return s(), m("div", Yx, [i(k, null, {
                    default: u(() => [t("div", Xx, [t("div", Kx, [t("img", {
                        class: "w-full max-w-44px h-full mr-2px max-h-44px",
                        src: e(g).s_l
                    }, null, 8, Zx), t("p", {
                        class: "font-ali name",
                        style: xe({
                            fontSize: e(o)
                        })
                    }, n(e(g).s_n), 5)]), t("div", eg, [e(g).a_d_s_s === "true" ? (s(), m("div", {
                        key: 0,
                        class: "i-mdi:download-outline w-25px h-25px cursor-pointer mx-10px",
                        onClick: f[0] || (f[0] = (...E) => e(x) && e(x)(...E))
                    })) : a("", !0), i(j, {
                        class: "mx-10px"
                    }), t("div", {
                        class: "i-ic:sharp-notifications-none w-22px h-22px cursor-pointer mx-10px",
                        onClick: f[1] || (f[1] = E => l.$router.push("/notice"))
                    }), i(w, null, {
                        default: u(() => [og]),
                        _: 1
                    })])]), t("div", tg, [i(y)]), t("div", lg, [i(T, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", sg, [t("div", ng, n(l.$t("Hello")), 1), t("div", ag, n(l.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(C, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": f[2] || (f[2] = E => B($) ? $.value = E : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", rg, [e($) === 1 ? (s(), m("div", dg, n(l.$t("auth.email.placeholder")), 1)) : a("", !0), e($) === 1 ? (s(), h(W, {
                            key: 1,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": f[3] || (f[3] = E => e(p).email = E),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e($) === 2 ? (s(), m("div", ig, n(l.$t("auth.phone.placeholder")), 1)) : a("", !0), e($) === 2 ? (s(), h(W, {
                            key: 3,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": f[5] || (f[5] = E => e(p).phone = E),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(O, {
                                modelValue: e(b),
                                "onUpdate:modelValue": f[4] || (f[4] = E => B(b) ? b.value = E : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e($) === 3 ? (s(), m("div", ug, n(l.$t("auth.username.placeholder")), 1)) : a("", !0), e($) === 3 ? (s(), h(W, {
                            key: 5,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": f[6] || (f[6] = E => e(p).username = E),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 6
                        }, [e($) === 4 ? (s(), m("div", pg, n(l.$t("auth.telegram.placeholder")), 1)) : a("", !0), e($) === 4 ? (s(), h(W, {
                            key: 1,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": f[7] || (f[7] = E => e(p).tg = E),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", mg, n(l.$t("auth.password.placeholder")), 1), i(W, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": f[8] || (f[8] = E => e(p).pwd = E),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(U) || e(g).e_t_s_p === "0" ? (s(), m("div", cg, n(l.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(U) || e(g).e_t_s_p === "0" ? (s(), h(W, {
                            key: 3,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": f[10] || (f[10] = E => e(p).code = E),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: f[9] || (f[9] = E => e(R)())
                            }, [e(P) ? (s(), m("div", $g)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, hg))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(L, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", _g, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(_, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(l.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center border border-$primary border-solid text-$primary leading-42px cursor-pointer rounded-$radius mt-20px",
                        onClick: f[11] || (f[11] = E => l.$router.push("/register"))
                    }, n(l.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(v, {
                        to: "/",
                        class: "w-full block text-center mt-16px"
                    }, {
                        default: u(() => [oe(n(l.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", xg, [i(d, {
                        modelValue: e(V),
                        "onUpdate:modelValue": f[12] || (f[12] = E => B(V) ? V.value = E : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", gg, n(l.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: f[13] || (f[13] = E => l.$router.push("/termOfUse"))
                    }, n(l.$t("auth.termOfUse")), 1), t("span", null, n(l.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: f[14] || (f[14] = E => l.$router.push("/privacyPolicy"))
                    }, n(l.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    yg = {
        class: "login"
    },
    fg = {
        class: "flex items-center"
    },
    kg = {
        class: "mx-16px"
    },
    Vg = ["src"],
    wg = {
        class: "flex items-center ml-auto"
    },
    bg = t("div", {
        class: "i-ep:service w-22px h-22px md:w-30px md:h-30px text-$primary cursor-pointer mx-10px"
    }, null, -1),
    Cg = {
        class: "top-tools mt-10px pl-20px"
    },
    Ug = {
        class: "login-content"
    },
    Lg = {
        class: "mb-50px"
    },
    Bg = {
        class: "text-$primary font-bold text-2xl"
    },
    Ag = {
        class: "mt-10px text-$text-gray"
    },
    Tg = {
        onsubmit: "return func()"
    },
    Pg = {
        key: 0,
        class: "text-#568499 mt-20px"
    },
    Ig = {
        key: 2,
        class: "text-#568499 mt-20px"
    },
    Wg = {
        key: 4,
        class: "text-#568499 mt-20px"
    },
    jg = {
        key: 0,
        class: "text-#568499 mt-20px"
    },
    Rg = {
        class: "text-#568499 mt-20px"
    },
    Fg = {
        key: 2,
        class: "text-#568499 mt-20px"
    },
    Og = ["src"],
    Mg = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    Ng = {
        class: "login-tools px-20px"
    },
    Hg = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    Eg = {
        class: "ml-2px"
    },
    Gg = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I,
                handleDownLoad: x
            } = D(), {
                currentTab: $,
                tabs: c,
                form: p,
                is_show_code: U,
                countryCode: b,
                submitForm: F,
                captcha: M,
                captchaLoading: P,
                getCaptcha: R,
                loginLoading: A,
                ruleCheck: V,
                showNotTgAutoLoginBtn: r
            } = ee();
            return (o, l) => {
                const f = K,
                    j = de,
                    w = te,
                    y = X,
                    C = J,
                    W = Y,
                    O = Z,
                    L = q,
                    T = z,
                    _ = le("RouterLink"),
                    v = Q,
                    d = S;
                return s(), m("div", yg, [i(d, null, {
                    default: u(() => [t("div", fg, [t("div", kg, [t("img", {
                        class: "w-88px md:w-135px h-auto",
                        src: e(g).s_l
                    }, null, 8, Vg)]), t("div", wg, [e(g).a_d_s_s === "true" ? (s(), m("div", {
                        key: 0,
                        class: "i-mdi:download-outline w-25px h-25px md:w-30px md:h-30px text-$primary cursor-pointer mx-10px",
                        onClick: l[0] || (l[0] = (...k) => e(x) && e(x)(...k))
                    })) : a("", !0), i(f, {
                        class: "mx-10px"
                    }), t("div", {
                        class: "i-ic:sharp-notifications-none w-22px h-22px md:w-30px md:h-30px text-$primary cursor-pointer mx-10px",
                        onClick: l[1] || (l[1] = k => o.$router.push("/notice"))
                    }), i(j, null, {
                        default: u(() => [bg]),
                        _: 1
                    })])]), t("div", Cg, [i(w)]), t("div", Ug, [i(L, {
                        class: "mt-0! pt-0! px-20px!"
                    }, {
                        default: u(() => [t("div", Lg, [t("div", Bg, n(o.$t("Hello")), 1), t("div", Ag, n(o.$t("Welcome_to")) + " " + n(e(g).s_n), 1)]), e(c).length > 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e($),
                            "onUpdate:modelValue": l[2] || (l[2] = k => B($) ? $.value = k : null),
                            options: e(c)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Tg, [e($) === 1 ? (s(), m("div", Pg, n(o.$t("auth.email.placeholder")), 1)) : a("", !0), e($) === 1 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).email,
                            "onUpdate:modelValue": l[3] || (l[3] = k => e(p).email = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e($) === 2 ? (s(), m("div", Ig, n(o.$t("auth.phone.placeholder")), 1)) : a("", !0), e($) === 2 ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).phone,
                            "onUpdate:modelValue": l[5] || (l[5] = k => e(p).phone = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            left: u(() => [i(W, {
                                modelValue: e(b),
                                "onUpdate:modelValue": l[4] || (l[4] = k => B(b) ? b.value = k : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0), e($) === 3 ? (s(), m("div", Wg, n(o.$t("auth.username.placeholder")), 1)) : a("", !0), e($) === 3 ? (s(), h(C, {
                            key: 5,
                            modelValue: e(p).username,
                            "onUpdate:modelValue": l[6] || (l[6] = k => e(p).username = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), e(r) ? (s(), m(N, {
                            key: 6
                        }, [e($) === 4 ? (s(), m("div", jg, n(o.$t("auth.telegram.placeholder")), 1)) : a("", !0), e($) === 4 ? (s(), h(C, {
                            key: 1,
                            modelValue: e(p).tg,
                            "onUpdate:modelValue": l[7] || (l[7] = k => e(p).tg = k),
                            class: "mt-0! min-h-44px!"
                        }, null, 8, ["modelValue"])) : a("", !0), t("div", Rg, n(o.$t("auth.password.placeholder")), 1), i(C, {
                            modelValue: e(p).pwd,
                            "onUpdate:modelValue": l[8] || (l[8] = k => e(p).pwd = k),
                            class: "mt-0! min-h-44px!",
                            type: "password"
                        }, null, 8, ["modelValue"]), e(U) || e(g).e_t_s_p === "0" ? (s(), m("div", Fg, n(o.$t("auth.vcode.placeholder")), 1)) : a("", !0), e(U) || e(g).e_t_s_p === "0" ? (s(), h(C, {
                            key: 3,
                            modelValue: e(p).code,
                            "onUpdate:modelValue": l[10] || (l[10] = k => e(p).code = k),
                            class: "mt-0! min-h-44px!"
                        }, {
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: l[9] || (l[9] = k => e(R)())
                            }, [e(P) ? (s(), m("div", Mg)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(M)
                            }, null, 8, Og))])]),
                            _: 1
                        }, 8, ["modelValue"])) : a("", !0)], 64)) : (s(), h(O, {
                            key: 7
                        }))])]),
                        _: 1
                    }), t("div", Ng, [e(r) ? (s(), m(N, {
                        key: 0
                    }, [i(T, {
                        loading: e(A),
                        class: "w-full!",
                        onClick: e(F)
                    }, {
                        default: u(() => [t("span", null, n(o.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "w-full h-42px text-center text-$text-gray leading-42px cursor-pointer rounded-$radius mt-20px bg-#003682",
                        onClick: l[11] || (l[11] = k => o.$router.push("/register"))
                    }, n(o.$t("auth.registerBtn")), 1)], 64)) : a("", !0), i(_, {
                        to: "/",
                        class: "w-full block text-center text-$text-gray mt-16px"
                    }, {
                        default: u(() => [oe(n(o.$t("Go_To_HomePage")), 1)]),
                        _: 1
                    }), e(I) ? (s(), m("div", Hg, [i(v, {
                        modelValue: e(V),
                        "onUpdate:modelValue": l[12] || (l[12] = k => B(V) ? V.value = k : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", Eg, n(o.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[13] || (l[13] = k => o.$router.push("/termOfUse"))
                    }, n(o.$t("auth.termOfUse")), 1), t("span", null, n(o.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: l[14] || (l[14] = k => o.$router.push("/privacyPolicy"))
                    }, n(o.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    Dg = {
        class: "login"
    },
    zg = {
        class: "top-info relative"
    },
    Sg = {
        class: ":uno: flex flex-col items-center text-center"
    },
    Jg = {
        class: "mb-4px mt-4px text-32px font-800 lh-44px"
    },
    qg = {
        class: "top-tools"
    },
    Qg = {
        class: "login-content"
    },
    Yg = {
        onsubmit: "return func()"
    },
    Xg = {
        class: "label"
    },
    Kg = {
        class: "label"
    },
    Zg = {
        class: "label"
    },
    ev = {
        class: "label"
    },
    ov = {
        class: "label"
    },
    tv = {
        class: "label"
    },
    lv = ["src"],
    sv = {
        key: 1,
        class: "i-eos-icons-loading h-20px w-20px text-white"
    },
    nv = {
        class: "login-tools px-38px"
    },
    av = {
        class: "ml-5px text-$primary"
    },
    rv = {
        key: 1,
        class: "mt-20px cursor-pointer text-sm flex items-center flex-wrap"
    },
    dv = {
        class: "ml-2px"
    },
    iv = G({
        __name: "Login",
        setup(H) {
            const {
                siteInfo: g,
                isPrivacy: I
            } = D(), {
                currentTab: x,
                tabs: $,
                form: c,
                is_show_code: p,
                countryCode: U,
                submitForm: b,
                captcha: F,
                captchaLoading: M,
                getCaptcha: P,
                loginLoading: R,
                ruleCheck: A,
                showNotTgAutoLoginBtn: V
            } = ee();
            return (r, o) => {
                const l = se,
                    f = te,
                    j = K,
                    w = X,
                    y = J,
                    C = Y,
                    W = Z,
                    O = q,
                    L = z,
                    T = Q,
                    _ = S;
                return s(), m("div", Dg, [i(_, null, {
                    default: u(() => [t("div", zg, [t("div", Sg, [i(l), t("p", Jg, n(e(g).s_n), 1)]), t("div", qg, [i(f), i(j, {
                        type: "text"
                    })])]), t("div", Qg, [i(O, null, {
                        default: u(() => [e($).length > 1 ? (s(), h(w, {
                            key: 0,
                            modelValue: e(x),
                            "onUpdate:modelValue": o[0] || (o[0] = v => B(x) ? x.value = v : null),
                            options: e($)
                        }, null, 8, ["modelValue", "options"])) : a("", !0), t("form", Yg, [e(x) === 1 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).email,
                            "onUpdate:modelValue": o[1] || (o[1] = v => e(c).email = v),
                            placeholder: r.$t("auth.email.placeholder")
                        }, {
                            label: u(() => [t("div", Xg, n(r.$t("auth.email.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 2 ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).phone,
                            "onUpdate:modelValue": o[3] || (o[3] = v => e(c).phone = v),
                            placeholder: r.$t("auth.phone.placeholder")
                        }, {
                            label: u(() => [t("div", Kg, n(r.$t("auth.phone.placeholder")), 1)]),
                            left: u(() => [i(C, {
                                modelValue: e(U),
                                "onUpdate:modelValue": o[2] || (o[2] = v => B(U) ? U.value = v : null)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(x) === 3 ? (s(), h(y, {
                            key: 2,
                            modelValue: e(c).username,
                            "onUpdate:modelValue": o[4] || (o[4] = v => e(c).username = v),
                            placeholder: r.$t("auth.username.placeholder")
                        }, {
                            label: u(() => [t("div", Zg, n(r.$t("auth.username.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), e(V) ? (s(), m(N, {
                            key: 3
                        }, [e(x) === 4 ? (s(), h(y, {
                            key: 0,
                            modelValue: e(c).tg,
                            "onUpdate:modelValue": o[5] || (o[5] = v => e(c).tg = v),
                            placeholder: r.$t("auth.telegram.placeholder")
                        }, {
                            label: u(() => [t("div", ev, n(r.$t("auth.telegram.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0), i(y, {
                            modelValue: e(c).pwd,
                            "onUpdate:modelValue": o[6] || (o[6] = v => e(c).pwd = v),
                            type: "password",
                            placeholder: r.$t("auth.password.placeholder")
                        }, {
                            label: u(() => [t("div", ov, n(r.$t("auth.password.placeholder")), 1)]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), e(p) || e(g).e_t_s_p === "0" ? (s(), h(y, {
                            key: 1,
                            modelValue: e(c).code,
                            "onUpdate:modelValue": o[8] || (o[8] = v => e(c).code = v),
                            placeholder: r.$t("auth.vcode.placeholder")
                        }, {
                            label: u(() => [t("div", tv, n(r.$t("auth.vcode.placeholder")), 1)]),
                            right: u(() => [t("div", {
                                class: ":uno: h-full w-80px flex items-center justify-center rounded",
                                onClick: o[7] || (o[7] = v => e(P)())
                            }, [e(M) ? (s(), m("div", sv)) : (s(), m("img", {
                                key: 0,
                                class: "h-90% w-80px rounded",
                                src: e(F)
                            }, null, 8, lv))])]),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : a("", !0)], 64)) : (s(), h(W, {
                            key: 4
                        }))])]),
                        _: 1
                    }), t("div", nv, [e(V) ? (s(), m(N, {
                        key: 0
                    }, [i(L, {
                        loading: e(R),
                        class: "w-full!",
                        onClick: e(b)
                    }, {
                        default: u(() => [t("span", null, n(r.$t("auth.loginBtn")), 1)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), t("div", {
                        class: "mt-20px cursor-pointer text-sm",
                        onClick: o[9] || (o[9] = v => r.$router.push("/register"))
                    }, [t("span", null, n(r.$t("auth.noRegister")), 1), t("span", av, n(r.$t("auth.registerBtn")), 1)])], 64)) : a("", !0), e(I) ? (s(), m("div", rv, [i(T, {
                        modelValue: e(A),
                        "onUpdate:modelValue": o[10] || (o[10] = v => B(A) ? A.value = v : null),
                        "checked-color": "var(--primary)"
                    }, null, 8, ["modelValue"]), t("span", dv, n(r.$t("auth.agree")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[11] || (o[11] = v => r.$router.push("/termOfUse"))
                    }, n(r.$t("auth.termOfUse")), 1), t("span", null, n(r.$t("And")), 1), t("span", {
                        class: "mx-5px text-$primary cursor-pointer",
                        onClick: o[12] || (o[12] = v => r.$router.push("/privacyPolicy"))
                    }, n(r.$t("auth.privacyPolicy")), 1)])) : a("", !0)])])]),
                    _: 1
                })])
            }
        }
    }),
    yv = G({
        __name: "login",
        setup(H) {
            const {
                theme: g
            } = D(), {
                isTgAutoLogin: I,
                showPage: x
            } = eo();
            return I(), ($, c) => {
                const p = iv,
                    U = Gg,
                    b = vg,
                    F = Qx,
                    M = Bx,
                    P = rx,
                    R = M_,
                    A = $_,
                    V = z$,
                    r = b$,
                    o = e$,
                    l = Ih,
                    f = mh,
                    j = E1,
                    w = y1,
                    y = qc,
                    C = Pc,
                    W = mc,
                    O = zm,
                    L = fm,
                    T = Dp,
                    _ = Vp,
                    v = Zu,
                    d = Tu,
                    k = iu,
                    E = Fi,
                    ve = $i,
                    ye = Jd,
                    fe = bd,
                    ke = ed,
                    Ve = Fr,
                    we = mr,
                    be = Ga,
                    Ce = Ca,
                    Ue = sa,
                    Le = jn,
                    Be = mn,
                    Ae = Es,
                    Te = vs,
                    Pe = es,
                    Ie = Bl,
                    We = sl,
                    je = It,
                    Re = dt,
                    Fe = Go,
                    Oe = _o;
                return e(x) ? (s(), m(N, {
                    key: 0
                }, [e(g) === 1 ? (s(), h(p, {
                    key: 0
                })) : a("", !0), e(g) === 2 ? (s(), h(U, {
                    key: 1
                })) : a("", !0), e(g) === 3 ? (s(), h(b, {
                    key: 2
                })) : a("", !0), e(g) === 4 ? (s(), h(F, {
                    key: 3
                })) : a("", !0), e(g) === 5 ? (s(), h(M, {
                    key: 4
                })) : a("", !0), e(g) === 6 ? (s(), h(P, {
                    key: 5
                })) : a("", !0), e(g) === 7 ? (s(), h(R, {
                    key: 6
                })) : a("", !0), e(g) === 8 ? (s(), h(A, {
                    key: 7
                })) : a("", !0), e(g) === 9 ? (s(), h(V, {
                    key: 8
                })) : a("", !0), e(g) === 10 ? (s(), h(r, {
                    key: 9
                })) : a("", !0), e(g) === 11 ? (s(), h(o, {
                    key: 10
                })) : a("", !0), e(g) === 12 ? (s(), h(l, {
                    key: 11
                })) : a("", !0), e(g) === 13 ? (s(), h(f, {
                    key: 12
                })) : a("", !0), e(g) === 14 ? (s(), h(j, {
                    key: 13
                })) : a("", !0), e(g) === 15 ? (s(), h(w, {
                    key: 14
                })) : a("", !0), e(g) === 16 ? (s(), h(y, {
                    key: 15
                })) : a("", !0), e(g) === 17 ? (s(), h(C, {
                    key: 16
                })) : a("", !0), e(g) === 18 ? (s(), h(W, {
                    key: 17
                })) : a("", !0), e(g) === 19 ? (s(), h(O, {
                    key: 18
                })) : a("", !0), e(g) === 20 ? (s(), h(L, {
                    key: 19
                })) : a("", !0), e(g) === 21 ? (s(), h(T, {
                    key: 20
                })) : a("", !0), e(g) === 22 ? (s(), h(_, {
                    key: 21
                })) : a("", !0), e(g) === 23 ? (s(), h(v, {
                    key: 22
                })) : a("", !0), e(g) === 24 ? (s(), h(d, {
                    key: 23
                })) : a("", !0), e(g) === 25 ? (s(), h(k, {
                    key: 24
                })) : a("", !0), e(g) === 26 ? (s(), h(E, {
                    key: 25
                })) : a("", !0), e(g) === 27 ? (s(), h(ve, {
                    key: 26
                })) : a("", !0), e(g) === 28 ? (s(), h(ye, {
                    key: 27
                })) : a("", !0), e(g) === 29 ? (s(), h(fe, {
                    key: 28
                })) : a("", !0), e(g) === 30 ? (s(), h(ke, {
                    key: 29
                })) : a("", !0), e(g) === 31 ? (s(), h(Ve, {
                    key: 30
                })) : a("", !0), e(g) === 32 ? (s(), h(we, {
                    key: 31
                })) : a("", !0), e(g) === 33 ? (s(), h(be, {
                    key: 32
                })) : a("", !0), e(g) === 34 ? (s(), h(Ce, {
                    key: 33
                })) : a("", !0), e(g) === 35 ? (s(), h(Ue, {
                    key: 34
                })) : a("", !0), e(g) === 36 ? (s(), h(Le, {
                    key: 35
                })) : a("", !0), e(g) === 37 ? (s(), h(Be, {
                    key: 36
                })) : a("", !0), e(g) === 38 ? (s(), h(Ae, {
                    key: 37
                })) : a("", !0), e(g) === 39 ? (s(), h(Te, {
                    key: 38
                })) : a("", !0), e(g) === 40 ? (s(), h(Pe, {
                    key: 39
                })) : a("", !0), e(g) === 41 ? (s(), h(Ie, {
                    key: 40
                })) : a("", !0), e(g) === 42 ? (s(), h(We, {
                    key: 41
                })) : a("", !0), e(g) === 43 ? (s(), h(je, {
                    key: 42
                })) : a("", !0), e(g) === 44 ? (s(), h(Re, {
                    key: 43
                })) : a("", !0), e(g) === 45 ? (s(), h(Fe, {
                    key: 44
                })) : a("", !0), e(g) === 46 ? (s(), h(Oe, {
                    key: 45
                })) : a("", !0)], 64)) : a("", !0)
            }
        }
    });
export {
    yv as
    default
};