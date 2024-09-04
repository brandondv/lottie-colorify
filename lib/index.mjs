const M = (s) => {
  if (typeof s == "string") {
    const f = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);
    if (!f)
      throw new Error("Color does not match hex format");
    return [
      Math.round(parseInt(f[1], 16) / 255 * 1e3) / 1e3,
      Math.round(parseInt(f[2], 16) / 255 * 1e3) / 1e3,
      Math.round(parseInt(f[3], 16) / 255 * 1e3) / 1e3,
      1
    ];
  } else {
    if (typeof s == "object" && s.length === 3 && s.every((f) => f >= 0 && f <= 255))
      return [
        Math.round(s[0] / 255 * 1e3) / 1e3,
        Math.round(s[1] / 255 * 1e3) / 1e3,
        Math.round(s[2] / 255 * 1e3) / 1e3,
        1
      ];
    if (typeof s == "object" && s.length === 4 && s.every((f) => f >= 0 && f <= 255))
      return [
        Math.round(s[0] / 255 * 1e3) / 1e3,
        Math.round(s[1] / 255 * 1e3) / 1e3,
        Math.round(s[2] / 255 * 1e3) / 1e3,
        s[3]
      ];
    throw s ? new Error("Color can be only hex or rgb(a) array (ex. [10,20,30,1])") : new Error("Color not defined");
  }
}, S = (s) => {
  const f = Math.round(s[0] * 255).toString(16).padStart(2, "0"), o = Math.round(s[1] * 255).toString(16).padStart(2, "0"), a = Math.round(s[2] * 255).toString(16).padStart(2, "0");
  return `#${f}${o}${a}`;
}, l = (s) => [Math.round(s[0] * 255), Math.round(s[1] * 255), Math.round(s[2] * 255)], t = (s) => [
  Math.round(s[0] * 255),
  Math.round(s[1] * 255),
  Math.round(s[2] * 255),
  s[3]
], m = (s) => {
  const f = [];
  function o(a) {
    if (a.g && a.g.k && a.g.k.k && Array.isArray(a.g.k.k) && a.g.k.k.length % 4 === 0) {
      Array.isArray(a.g.k.k) && typeof a.g.k.k[0] != "number" && o(a.g.k.k);
      const k = [...a.g.k.k];
      for (; k.length; ) {
        const h = [...k.splice(1, 3), k.shift()];
        f.push(t(h));
      }
    } else if (a.s && Array.isArray(a.s) && a.s.length === 4)
      f.push(t(a.s));
    else if (a.c && a.c.k)
      Array.isArray(a.c.k) && typeof a.c.k[0] != "number" ? o(a.c.k) : f.push(l(a.c.k));
    else
      for (const k in a)
        typeof a[k] == "object" && o(a[k]);
    return f;
  }
  return o(s), f;
}, E = (s) => {
  const o = m(s).map((k) => JSON.stringify(k)), a = new Set(o);
  return Array.from(a, (k) => JSON.parse(k));
}, w = (s, f, o = !0) => {
  let a = 0;
  function k(h, r) {
    r && r.s && Array.isArray(r.s) && r.s.length === 4 ? (h[a] && (r.s = [...h[a]]), a++) : r && r.c && r.c.k && (Array.isArray(r.c.k) && typeof r.c.k[0] != "number" ? k(h, r.c.k) : (h[a] && (r.c.k = h[a]), a++));
    for (const g in r)
      typeof r[g] == "object" && k(h, r[g]);
    return r;
  }
  return k(s, o ? structuredClone(f) : f);
}, v = (s = [], f, o = !0) => {
  const a = [];
  return s.forEach((k) => {
    a.push(M(k));
  }), w(a, o ? structuredClone(f) : f);
}, x = (s, f, o = !0) => {
  const a = M(s);
  if (!a)
    throw new Error("Proper colors must be used for target");
  function k(h, r) {
    if (r && r.s && Array.isArray(r.s) && r.s.length === 4)
      r.s = [...h];
    else if (r && r.c && r.c.k)
      Array.isArray(r.c.k) && typeof r.c.k[0] != "number" ? k(h, r.c.k) : r.c.k = h;
    else
      for (const g in r)
        typeof r[g] == "object" && k(h, r[g]);
    return r;
  }
  return k(a, o ? structuredClone(f) : f);
}, d = (s) => Math.round(s * 1e3) / 1e3;
const A = (s, f, o, a = !0) => {
  const k = M(s), h = M(f);
  if (!k || !h)
    throw new Error("Proper colors must be used for both source and target");
  function r(g, p, u) {
    if (u && u.s && Array.isArray(u.s) && u.s.length === 4)
      g[0] === u.s[0] && g[1] === u.s[1] && g[2] === u.s[2] && (u.s = [...p]);
    else if (u && u.c && u.c.k)
      Array.isArray(u.c.k) && typeof u.c.k[0] != "number" ? r(g, p, u.c.k) : Math.abs(g[0] - d(u.c.k[0])) < 3e-3 && Math.abs(g[1] - d(u.c.k[1])) < 3e-3 && Math.abs(g[2] - d(u.c.k[2])) < 3e-3 && (u.c.k = p);
    else if (u.g && u.g.k && u.g.k.k && u.g.k.k.length % 4 === 0)
      for (let y = 0; y < u.g.k.k.length; y += 4)
        Math.abs(d(g[0]) - d(u.g.k.k[y + 1])) < 3e-3 && Math.abs(d(g[1]) - d(u.g.k.k[y + 2])) < 3e-3 && Math.abs(d(g[2]) - d(u.g.k.k[y + 3])) < 3e-3 && (u.g.k.k[y + 1] = p[0], u.g.k.k[y + 2] = p[1], u.g.k.k[y + 3] = p[2], u.g.k.k[y + 4] = p[3]);
    else
      for (const y in u)
        typeof u[y] == "object" && r(g, p, u[y]);
    return u;
  }
  return r(k, h, a ? structuredClone(o) : o);
}, T = (s, f) => s.reduce((o, [a, k]) => A(a, k, o), f), $ = (s, f, o) => {
  let a = { ...o };
  return s.forEach((k, h) => {
    const r = f[h % f.length];
    a = A(k, r, a);
  }), a;
};
export {
  v as colorify,
  M as convertColorToLottieColor,
  S as convertLottieColorToHex,
  l as convertLottieColorToRgb,
  t as convertLottieColorToRgba,
  x as flatten,
  m as getColors,
  E as getUniqueColors,
  w as modifyColors,
  A as replaceColor,
  T as replaceColors,
  $ as replaceColorsLoop
};
