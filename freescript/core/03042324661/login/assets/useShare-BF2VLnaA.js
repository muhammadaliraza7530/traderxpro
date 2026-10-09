import {
    z as r,
    u as i,
    h as a
} from "./index-B4hRM2Oj.js";

function w() {
    const o = r(),
        {
            siteInfo: s
        } = i(),
        n = a(() => s.value.s_n),
        u = a(() => o.inviteLink),
        e = a(() => encodeURIComponent(u.value)),
        t = a(() => encodeURIComponent(n.value));
    return {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${e.value}`,
        twitter: `https://twitter.com/share?url=${e.value}&text=${t.value}`,
        whatsapp: `whatsapp://send?text=${e.value}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${e.value}&title=${t.value}`,
        telegram: `https://t.me/share/url?url=${e.value}&text=${t.value}`,
        email: `mailto:?subject=${t.value}&body=${e.value}`,
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        kwai: "https://www.kwai.com/"
    }
}
export {
    w as u
};