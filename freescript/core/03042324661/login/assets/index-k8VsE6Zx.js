import {
    aR as P,
    aD as B,
    d as S,
    ay as V,
    aF as z,
    aI as G,
    B as O,
    h,
    l as m,
    S as D,
    aJ as C,
    J as y,
    aT as I,
    Q as R,
    P as E,
    bt as F,
    aV as $,
    ae as w,
    X as J
} from "./index-B4hRM2Oj.js";
const _ = {
    name: P,
    disabled: Boolean,
    iconSize: B,
    modelValue: P,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
};
var K = S({
    props: V({}, _, {
        bem: z(Function),
        role: String,
        shape: String,
        parent: Object,
        checked: Boolean,
        bindGroup: G,
        indeterminate: {
            type: Boolean,
            default: null
        }
    }),
    emits: ["click", "toggle"],
    setup(e, {
        emit: s,
        slots: r
    }) {
        const o = O(),
            c = n => {
                if (e.parent && e.bindGroup) return e.parent.props[n]
            },
            a = h(() => {
                if (e.parent && e.bindGroup) {
                    const n = c("disabled") || e.disabled;
                    if (e.role === "checkbox") {
                        const u = c("modelValue").length,
                            i = c("max"),
                            b = i && u >= +i;
                        return n || b && !e.checked
                    }
                    return n
                }
                return e.disabled
            }),
            k = h(() => c("direction")),
            l = h(() => {
                const n = e.checkedColor || c("checkedColor");
                if (n && e.checked && !a.value) return {
                    borderColor: n,
                    backgroundColor: n
                }
            }),
            d = h(() => e.shape || c("shape") || "round"),
            f = n => {
                const {
                    target: u
                } = n, i = o.value, b = i === u || (i == null ? void 0 : i.contains(u));
                !a.value && (b || !e.labelDisabled) && s("toggle"), s("click", n)
            },
            v = () => {
                var n, u;
                const {
                    bem: i,
                    checked: b,
                    indeterminate: x
                } = e, g = e.iconSize || c("iconSize");
                return m("div", {
                    ref: o,
                    class: i("icon", [d.value, {
                        disabled: a.value,
                        checked: b,
                        indeterminate: x
                    }]),
                    style: d.value !== "dot" ? {
                        fontSize: C(g)
                    } : {
                        width: C(g),
                        height: C(g),
                        borderColor: (n = l.value) == null ? void 0 : n.borderColor
                    }
                }, [r.icon ? r.icon({
                    checked: b,
                    disabled: a.value
                }) : d.value !== "dot" ? m(D, {
                    name: x ? "minus" : "success",
                    style: l.value
                }, null) : m("div", {
                    class: i("icon--dot__icon"),
                    style: {
                        backgroundColor: (u = l.value) == null ? void 0 : u.backgroundColor
                    }
                }, null)])
            },
            t = () => {
                const {
                    checked: n
                } = e;
                if (r.default) return m("span", {
                    class: e.bem("label", [e.labelPosition, {
                        disabled: a.value
                    }])
                }, [r.default({
                    checked: n,
                    disabled: a.value
                })])
            };
        return () => {
            const n = e.labelPosition === "left" ? [t(), v()] : [v(), t()];
            return m("div", {
                role: e.role,
                class: e.bem([{
                    disabled: a.value,
                    "label-disabled": e.labelDisabled
                }, k.value]),
                tabindex: a.value ? void 0 : 0,
                "aria-checked": e.checked,
                onClick: f
            }, [n])
        }
    }
});
const [N, L] = y("checkbox-group"), T = Symbol(N), [U, X] = y("checkbox"), j = V({}, _, {
    shape: String,
    bindGroup: G,
    indeterminate: {
        type: Boolean,
        default: null
    }
});
var q = S({
    name: U,
    props: j,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: s,
        slots: r
    }) {
        const {
            parent: o
        } = I(T), c = l => {
            const {
                name: d
            } = e, {
                max: f,
                modelValue: v
            } = o.props, t = v.slice();
            if (l) !(f && t.length >= +f) && !t.includes(d) && (t.push(d), e.bindGroup && o.updateValue(t));
            else {
                const n = t.indexOf(d);
                n !== -1 && (t.splice(n, 1), e.bindGroup && o.updateValue(t))
            }
        }, a = h(() => o && e.bindGroup ? o.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue), k = (l = !a.value) => {
            o && e.bindGroup ? c(l) : s("update:modelValue", l), e.indeterminate !== null && s("change", l)
        };
        return R(() => e.modelValue, l => {
            e.indeterminate === null && s("change", l)
        }), E({
            toggle: k,
            props: e,
            checked: a
        }), F(() => e.modelValue), () => m(K, w({
            bem: X,
            role: "checkbox",
            parent: o,
            checked: a.value,
            onToggle: k
        }, e), $(r, ["default", "icon"]))
    }
});
const Q = J(q);
export {
    Q as C
};