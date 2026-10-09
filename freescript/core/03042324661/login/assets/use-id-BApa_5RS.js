import {
    aS as e
} from "./index-B4hRM2Oj.js";
let r = 0;

function u() {
    const n = e(),
        {
            name: t = "unknown"
        } = (n == null ? void 0 : n.type) || {};
    return `${t}-${++r}`
}
export {
    u
};