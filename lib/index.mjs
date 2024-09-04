const ut = (t) => {
    if (typeof t == 'string' && t.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) {
      const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      if (!e) throw new Error('Color can be only hex or rgb array (ex. [10,20,30])');
      return [
        Math.round((parseInt(e[1], 16) / 255) * 1e3) / 1e3,
        Math.round((parseInt(e[2], 16) / 255) * 1e3) / 1e3,
        Math.round((parseInt(e[3], 16) / 255) * 1e3) / 1e3,
        1,
      ];
    } else {
      if (typeof t == 'object' && t.length === 3 && t.every((e) => e >= 0 && e <= 255))
        return [
          Math.round((t[0] / 255) * 1e3) / 1e3,
          Math.round((t[1] / 255) * 1e3) / 1e3,
          Math.round((t[2] / 255) * 1e3) / 1e3,
          1,
        ];
      if (
        typeof t == 'object' &&
        t.length === 4 &&
        t.every(function (e) {
          return e >= 0 && e <= 255;
        })
      )
        return [
          Math.round((t[0] / 255) * 1e3) / 1e3,
          Math.round((t[1] / 255) * 1e3) / 1e3,
          Math.round((t[2] / 255) * 1e3) / 1e3,
          t[3],
        ];
      throw t ? new Error('Color can be only hex or rgb(a) array (ex. [10,20,30,1])') : new Error('Color not defined');
    }
  },
  Fp = (t) => {
    const e = Math.round(t[0] * 255)
        .toString(16)
        .padStart(2, '0'),
      a = Math.round(t[1] * 255)
        .toString(16)
        .padStart(2, '0'),
      o = Math.round(t[2] * 255)
        .toString(16)
        .padStart(2, '0');
    return `#${e}${a}${o}`;
  },
  Za = (t) => [Math.round(t[0] * 255), Math.round(t[1] * 255), Math.round(t[2] * 255)],
  kr = (t) => [Math.round(t[0] * 255), Math.round(t[1] * 255), Math.round(t[2] * 255), t[3]],
  Qa = (t) => {
    const e = [];
    function a(o) {
      if (o.g && o.g.k && o.g.k.k && Array.isArray(o.g.k.k) && o.g.k.k.length % 4 === 0) {
        Array.isArray(o.g.k.k) && typeof o.g.k.k[0] != 'number' && a(o.g.k.k);
        const u = [...o.g.k.k];
        for (; u.length; ) {
          const l = [...u.splice(1, 3), u.shift()];
          e.push(kr(l));
        }
      } else if (o.s && Array.isArray(o.s) && o.s.length === 4) e.push(kr(o.s));
      else if (o.c && o.c.k) Array.isArray(o.c.k) && typeof o.c.k[0] != 'number' ? a(o.c.k) : e.push(Za(o.c.k));
      else for (const u in o) typeof o[u] == 'object' && a(o[u]);
      return e;
    }
    return a(t), e;
  },
  Bp = (t) => {
    const a = Qa(t).map((u) => JSON.stringify(u)),
      o = new Set(a);
    return Array.from(o, (u) => JSON.parse(u));
  };
var j =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function oe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var ft = { exports: {} };
ft.exports;
(function (t, e) {
  var a = 200,
    o = '__lodash_hash_undefined__',
    u = 9007199254740991,
    l = '[object Arguments]',
    i = '[object Array]',
    p = '[object Boolean]',
    g = '[object Date]',
    f = '[object Error]',
    _ = '[object Function]',
    A = '[object GeneratorFunction]',
    w = '[object Map]',
    W = '[object Number]',
    q = '[object Object]',
    J = '[object Promise]',
    S = '[object RegExp]',
    T = '[object Set]',
    Yt = '[object String]',
    Xt = '[object Symbol]',
    bt = '[object WeakMap]',
    Zt = '[object ArrayBuffer]',
    rt = '[object DataView]',
    Qt = '[object Float32Array]',
    tr = '[object Float64Array]',
    rr = '[object Int8Array]',
    er = '[object Int16Array]',
    ar = '[object Int32Array]',
    nr = '[object Uint8Array]',
    or = '[object Uint8ClampedArray]',
    sr = '[object Uint16Array]',
    ir = '[object Uint32Array]',
    xe = /[\\^$.*+?()[\]{}|]/g,
    Me = /\w*$/,
    Pe = /^\[object .+?Constructor\]$/,
    je = /^(?:0|[1-9]\d*)$/,
    h = {};
  (h[l] =
    h[i] =
    h[Zt] =
    h[rt] =
    h[p] =
    h[g] =
    h[Qt] =
    h[tr] =
    h[rr] =
    h[er] =
    h[ar] =
    h[w] =
    h[W] =
    h[q] =
    h[S] =
    h[T] =
    h[Yt] =
    h[Xt] =
    h[nr] =
    h[or] =
    h[sr] =
    h[ir] =
      !0),
    (h[f] = h[_] = h[bt] = !1);
  var Ee = typeof j == 'object' && j && j.Object === Object && j,
    ke = typeof self == 'object' && self && self.Object === Object && self,
    C = Ee || ke || Function('return this')(),
    cr = e && !e.nodeType && e,
    ur = cr && !0 && t && !t.nodeType && t,
    Oe = ur && ur.exports === cr;
  function De(r, n) {
    return r.set(n[0], n[1]), r;
  }
  function Ge(r, n) {
    return r.add(n), r;
  }
  function Fe(r, n) {
    for (var s = -1, c = r ? r.length : 0; ++s < c && n(r[s], s, r) !== !1; );
    return r;
  }
  function Be(r, n) {
    for (var s = -1, c = n.length, d = r.length; ++s < c; ) r[d + s] = n[s];
    return r;
  }
  function fr(r, n, s, c) {
    for (var d = -1, $ = r ? r.length : 0; ++d < $; ) s = n(s, r[d], d, r);
    return s;
  }
  function Ue(r, n) {
    for (var s = -1, c = Array(r); ++s < r; ) c[s] = n(s);
    return c;
  }
  function Le(r, n) {
    return r == null ? void 0 : r[n];
  }
  function lr(r) {
    var n = !1;
    if (r != null && typeof r.toString != 'function')
      try {
        n = !!(r + '');
      } catch {}
    return n;
  }
  function pr(r) {
    var n = -1,
      s = Array(r.size);
    return (
      r.forEach(function (c, d) {
        s[++n] = [d, c];
      }),
      s
    );
  }
  function At(r, n) {
    return function (s) {
      return r(n(s));
    };
  }
  function gr(r) {
    var n = -1,
      s = Array(r.size);
    return (
      r.forEach(function (c) {
        s[++n] = c;
      }),
      s
    );
  }
  var Ne = Array.prototype,
    Ke = Function.prototype,
    et = Object.prototype,
    Tt = C['__core-js_shared__'],
    hr = (function () {
      var r = /[^.]+$/.exec((Tt && Tt.keys && Tt.keys.IE_PROTO) || '');
      return r ? 'Symbol(src)_1.' + r : '';
    })(),
    yr = Ke.toString,
    P = et.hasOwnProperty,
    at = et.toString,
    He = RegExp(
      '^' +
        yr
          .call(P)
          .replace(xe, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$',
    ),
    vr = Oe ? C.Buffer : void 0,
    _r = C.Symbol,
    dr = C.Uint8Array,
    Re = At(Object.getPrototypeOf, Object),
    Ve = Object.create,
    ze = et.propertyIsEnumerable,
    We = Ne.splice,
    $r = Object.getOwnPropertySymbols,
    qe = vr ? vr.isBuffer : void 0,
    Je = At(Object.keys, Object),
    St = U(C, 'DataView'),
    Y = U(C, 'Map'),
    wt = U(C, 'Promise'),
    mt = U(C, 'Set'),
    Ct = U(C, 'WeakMap'),
    X = U(Object, 'create'),
    Ye = O(St),
    Xe = O(Y),
    Ze = O(wt),
    Qe = O(mt),
    ta = O(Ct),
    br = _r ? _r.prototype : void 0,
    Ar = br ? br.valueOf : void 0;
  function E(r) {
    var n = -1,
      s = r ? r.length : 0;
    for (this.clear(); ++n < s; ) {
      var c = r[n];
      this.set(c[0], c[1]);
    }
  }
  function ra() {
    this.__data__ = X ? X(null) : {};
  }
  function ea(r) {
    return this.has(r) && delete this.__data__[r];
  }
  function aa(r) {
    var n = this.__data__;
    if (X) {
      var s = n[r];
      return s === o ? void 0 : s;
    }
    return P.call(n, r) ? n[r] : void 0;
  }
  function na(r) {
    var n = this.__data__;
    return X ? n[r] !== void 0 : P.call(n, r);
  }
  function oa(r, n) {
    var s = this.__data__;
    return (s[r] = X && n === void 0 ? o : n), this;
  }
  (E.prototype.clear = ra),
    (E.prototype.delete = ea),
    (E.prototype.get = aa),
    (E.prototype.has = na),
    (E.prototype.set = oa);
  function I(r) {
    var n = -1,
      s = r ? r.length : 0;
    for (this.clear(); ++n < s; ) {
      var c = r[n];
      this.set(c[0], c[1]);
    }
  }
  function sa() {
    this.__data__ = [];
  }
  function ia(r) {
    var n = this.__data__,
      s = nt(n, r);
    if (s < 0) return !1;
    var c = n.length - 1;
    return s == c ? n.pop() : We.call(n, s, 1), !0;
  }
  function ca(r) {
    var n = this.__data__,
      s = nt(n, r);
    return s < 0 ? void 0 : n[s][1];
  }
  function ua(r) {
    return nt(this.__data__, r) > -1;
  }
  function fa(r, n) {
    var s = this.__data__,
      c = nt(s, r);
    return c < 0 ? s.push([r, n]) : (s[c][1] = n), this;
  }
  (I.prototype.clear = sa),
    (I.prototype.delete = ia),
    (I.prototype.get = ca),
    (I.prototype.has = ua),
    (I.prototype.set = fa);
  function F(r) {
    var n = -1,
      s = r ? r.length : 0;
    for (this.clear(); ++n < s; ) {
      var c = r[n];
      this.set(c[0], c[1]);
    }
  }
  function la() {
    this.__data__ = {
      hash: new E(),
      map: new (Y || I)(),
      string: new E(),
    };
  }
  function pa(r) {
    return ot(this, r).delete(r);
  }
  function ga(r) {
    return ot(this, r).get(r);
  }
  function ha(r) {
    return ot(this, r).has(r);
  }
  function ya(r, n) {
    return ot(this, r).set(r, n), this;
  }
  (F.prototype.clear = la),
    (F.prototype.delete = pa),
    (F.prototype.get = ga),
    (F.prototype.has = ha),
    (F.prototype.set = ya);
  function B(r) {
    this.__data__ = new I(r);
  }
  function va() {
    this.__data__ = new I();
  }
  function _a(r) {
    return this.__data__.delete(r);
  }
  function da(r) {
    return this.__data__.get(r);
  }
  function $a(r) {
    return this.__data__.has(r);
  }
  function ba(r, n) {
    var s = this.__data__;
    if (s instanceof I) {
      var c = s.__data__;
      if (!Y || c.length < a - 1) return c.push([r, n]), this;
      s = this.__data__ = new F(c);
    }
    return s.set(r, n), this;
  }
  (B.prototype.clear = va),
    (B.prototype.delete = _a),
    (B.prototype.get = da),
    (B.prototype.has = $a),
    (B.prototype.set = ba);
  function Aa(r, n) {
    var s = Mt(r) || Va(r) ? Ue(r.length, String) : [],
      c = s.length,
      d = !!c;
    for (var $ in r) P.call(r, $) && !(d && ($ == 'length' || Na($, c))) && s.push($);
    return s;
  }
  function Tr(r, n, s) {
    var c = r[n];
    (!(P.call(r, n) && Cr(c, s)) || (s === void 0 && !(n in r))) && (r[n] = s);
  }
  function nt(r, n) {
    for (var s = r.length; s--; ) if (Cr(r[s][0], n)) return s;
    return -1;
  }
  function Ta(r, n) {
    return r && Sr(n, Pt(n), r);
  }
  function It(r, n, s, c, d, $, x) {
    var b;
    if ((c && (b = $ ? c(r, d, $, x) : c(r)), b !== void 0)) return b;
    if (!st(r)) return r;
    var Mr = Mt(r);
    if (Mr) {
      if (((b = Ba(r)), !n)) return Da(r, b);
    } else {
      var L = k(r),
        Pr = L == _ || L == A;
      if (Wa(r)) return xa(r, n);
      if (L == q || L == l || (Pr && !$)) {
        if (lr(r)) return $ ? r : {};
        if (((b = Ua(Pr ? {} : r)), !n)) return Ga(r, Ta(b, r));
      } else {
        if (!h[L]) return $ ? r : {};
        b = La(r, L, It, n);
      }
    }
    x || (x = new B());
    var jr = x.get(r);
    if (jr) return jr;
    if ((x.set(r, b), !Mr)) var Er = s ? Fa(r) : Pt(r);
    return (
      Fe(Er || r, function (jt, it) {
        Er && ((it = jt), (jt = r[it])), Tr(b, it, It(jt, n, s, c, it, r, x));
      }),
      b
    );
  }
  function Sa(r) {
    return st(r) ? Ve(r) : {};
  }
  function wa(r, n, s) {
    var c = n(r);
    return Mt(r) ? c : Be(c, s(r));
  }
  function ma(r) {
    return at.call(r);
  }
  function Ca(r) {
    if (!st(r) || Ha(r)) return !1;
    var n = xr(r) || lr(r) ? He : Pe;
    return n.test(O(r));
  }
  function Ia(r) {
    if (!mr(r)) return Je(r);
    var n = [];
    for (var s in Object(r)) P.call(r, s) && s != 'constructor' && n.push(s);
    return n;
  }
  function xa(r, n) {
    if (n) return r.slice();
    var s = new r.constructor(r.length);
    return r.copy(s), s;
  }
  function xt(r) {
    var n = new r.constructor(r.byteLength);
    return new dr(n).set(new dr(r)), n;
  }
  function Ma(r, n) {
    var s = n ? xt(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.byteLength);
  }
  function Pa(r, n, s) {
    var c = n ? s(pr(r), !0) : pr(r);
    return fr(c, De, new r.constructor());
  }
  function ja(r) {
    var n = new r.constructor(r.source, Me.exec(r));
    return (n.lastIndex = r.lastIndex), n;
  }
  function Ea(r, n, s) {
    var c = n ? s(gr(r), !0) : gr(r);
    return fr(c, Ge, new r.constructor());
  }
  function ka(r) {
    return Ar ? Object(Ar.call(r)) : {};
  }
  function Oa(r, n) {
    var s = n ? xt(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.length);
  }
  function Da(r, n) {
    var s = -1,
      c = r.length;
    for (n || (n = Array(c)); ++s < c; ) n[s] = r[s];
    return n;
  }
  function Sr(r, n, s, c) {
    s || (s = {});
    for (var d = -1, $ = n.length; ++d < $; ) {
      var x = n[d],
        b = void 0;
      Tr(s, x, b === void 0 ? r[x] : b);
    }
    return s;
  }
  function Ga(r, n) {
    return Sr(r, wr(r), n);
  }
  function Fa(r) {
    return wa(r, Pt, wr);
  }
  function ot(r, n) {
    var s = r.__data__;
    return Ka(n) ? s[typeof n == 'string' ? 'string' : 'hash'] : s.map;
  }
  function U(r, n) {
    var s = Le(r, n);
    return Ca(s) ? s : void 0;
  }
  var wr = $r ? At($r, Object) : Ya,
    k = ma;
  ((St && k(new St(new ArrayBuffer(1))) != rt) ||
    (Y && k(new Y()) != w) ||
    (wt && k(wt.resolve()) != J) ||
    (mt && k(new mt()) != T) ||
    (Ct && k(new Ct()) != bt)) &&
    (k = function (r) {
      var n = at.call(r),
        s = n == q ? r.constructor : void 0,
        c = s ? O(s) : void 0;
      if (c)
        switch (c) {
          case Ye:
            return rt;
          case Xe:
            return w;
          case Ze:
            return J;
          case Qe:
            return T;
          case ta:
            return bt;
        }
      return n;
    });
  function Ba(r) {
    var n = r.length,
      s = r.constructor(n);
    return n && typeof r[0] == 'string' && P.call(r, 'index') && ((s.index = r.index), (s.input = r.input)), s;
  }
  function Ua(r) {
    return typeof r.constructor == 'function' && !mr(r) ? Sa(Re(r)) : {};
  }
  function La(r, n, s, c) {
    var d = r.constructor;
    switch (n) {
      case Zt:
        return xt(r);
      case p:
      case g:
        return new d(+r);
      case rt:
        return Ma(r, c);
      case Qt:
      case tr:
      case rr:
      case er:
      case ar:
      case nr:
      case or:
      case sr:
      case ir:
        return Oa(r, c);
      case w:
        return Pa(r, c, s);
      case W:
      case Yt:
        return new d(r);
      case S:
        return ja(r);
      case T:
        return Ea(r, c, s);
      case Xt:
        return ka(r);
    }
  }
  function Na(r, n) {
    return (n = n ?? u), !!n && (typeof r == 'number' || je.test(r)) && r > -1 && r % 1 == 0 && r < n;
  }
  function Ka(r) {
    var n = typeof r;
    return n == 'string' || n == 'number' || n == 'symbol' || n == 'boolean' ? r !== '__proto__' : r === null;
  }
  function Ha(r) {
    return !!hr && hr in r;
  }
  function mr(r) {
    var n = r && r.constructor,
      s = (typeof n == 'function' && n.prototype) || et;
    return r === s;
  }
  function O(r) {
    if (r != null) {
      try {
        return yr.call(r);
      } catch {}
      try {
        return r + '';
      } catch {}
    }
    return '';
  }
  function Ra(r) {
    return It(r, !0, !0);
  }
  function Cr(r, n) {
    return r === n || (r !== r && n !== n);
  }
  function Va(r) {
    return za(r) && P.call(r, 'callee') && (!ze.call(r, 'callee') || at.call(r) == l);
  }
  var Mt = Array.isArray;
  function Ir(r) {
    return r != null && qa(r.length) && !xr(r);
  }
  function za(r) {
    return Ja(r) && Ir(r);
  }
  var Wa = qe || Xa;
  function xr(r) {
    var n = st(r) ? at.call(r) : '';
    return n == _ || n == A;
  }
  function qa(r) {
    return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= u;
  }
  function st(r) {
    var n = typeof r;
    return !!r && (n == 'object' || n == 'function');
  }
  function Ja(r) {
    return !!r && typeof r == 'object';
  }
  function Pt(r) {
    return Ir(r) ? Aa(r) : Ia(r);
  }
  function Ya() {
    return [];
  }
  function Xa() {
    return !1;
  }
  t.exports = Ra;
})(ft, ft.exports);
var tn = ft.exports;
const Bt = /* @__PURE__ */ oe(tn);
function rn() {
  (this.__data__ = []), (this.size = 0);
}
var en = rn;
function an(t, e) {
  return t === e || (t !== t && e !== e);
}
var se = an,
  nn = se;
function on(t, e) {
  for (var a = t.length; a--; ) if (nn(t[a][0], e)) return a;
  return -1;
}
var ht = on,
  sn = ht,
  cn = Array.prototype,
  un = cn.splice;
function fn(t) {
  var e = this.__data__,
    a = sn(e, t);
  if (a < 0) return !1;
  var o = e.length - 1;
  return a == o ? e.pop() : un.call(e, a, 1), --this.size, !0;
}
var ln = fn,
  pn = ht;
function gn(t) {
  var e = this.__data__,
    a = pn(e, t);
  return a < 0 ? void 0 : e[a][1];
}
var hn = gn,
  yn = ht;
function vn(t) {
  return yn(this.__data__, t) > -1;
}
var _n = vn,
  dn = ht;
function $n(t, e) {
  var a = this.__data__,
    o = dn(a, t);
  return o < 0 ? (++this.size, a.push([t, e])) : (a[o][1] = e), this;
}
var bn = $n,
  An = en,
  Tn = ln,
  Sn = hn,
  wn = _n,
  mn = bn;
function K(t) {
  var e = -1,
    a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
K.prototype.clear = An;
K.prototype.delete = Tn;
K.prototype.get = Sn;
K.prototype.has = wn;
K.prototype.set = mn;
var yt = K,
  Cn = yt;
function In() {
  (this.__data__ = new Cn()), (this.size = 0);
}
var xn = In;
function Mn(t) {
  var e = this.__data__,
    a = e.delete(t);
  return (this.size = e.size), a;
}
var Pn = Mn;
function jn(t) {
  return this.__data__.get(t);
}
var En = jn;
function kn(t) {
  return this.__data__.has(t);
}
var On = kn,
  Dn = typeof j == 'object' && j && j.Object === Object && j,
  ie = Dn,
  Gn = ie,
  Fn = typeof self == 'object' && self && self.Object === Object && self,
  Bn = Gn || Fn || Function('return this')(),
  m = Bn,
  Un = m,
  Ln = Un.Symbol,
  Ut = Ln,
  Or = Ut,
  ce = Object.prototype,
  Nn = ce.hasOwnProperty,
  Kn = ce.toString,
  Z = Or ? Or.toStringTag : void 0;
function Hn(t) {
  var e = Nn.call(t, Z),
    a = t[Z];
  try {
    t[Z] = void 0;
    var o = !0;
  } catch {}
  var u = Kn.call(t);
  return o && (e ? (t[Z] = a) : delete t[Z]), u;
}
var Rn = Hn,
  Vn = Object.prototype,
  zn = Vn.toString;
function Wn(t) {
  return zn.call(t);
}
var qn = Wn,
  Dr = Ut,
  Jn = Rn,
  Yn = qn,
  Xn = '[object Null]',
  Zn = '[object Undefined]',
  Gr = Dr ? Dr.toStringTag : void 0;
function Qn(t) {
  return t == null ? (t === void 0 ? Zn : Xn) : Gr && Gr in Object(t) ? Jn(t) : Yn(t);
}
var vt = Qn;
function to(t) {
  var e = typeof t;
  return t != null && (e == 'object' || e == 'function');
}
var Q = to,
  ro = vt,
  eo = Q,
  ao = '[object AsyncFunction]',
  no = '[object Function]',
  oo = '[object GeneratorFunction]',
  so = '[object Proxy]';
function io(t) {
  if (!eo(t)) return !1;
  var e = ro(t);
  return e == no || e == oo || e == ao || e == so;
}
var ue = io,
  co = m,
  uo = co['__core-js_shared__'],
  fo = uo,
  Et = fo,
  Fr = (function () {
    var t = /[^.]+$/.exec((Et && Et.keys && Et.keys.IE_PROTO) || '');
    return t ? 'Symbol(src)_1.' + t : '';
  })();
function lo(t) {
  return !!Fr && Fr in t;
}
var po = lo,
  go = Function.prototype,
  ho = go.toString;
function yo(t) {
  if (t != null) {
    try {
      return ho.call(t);
    } catch {}
    try {
      return t + '';
    } catch {}
  }
  return '';
}
var fe = yo,
  vo = ue,
  _o = po,
  $o = Q,
  bo = fe,
  Ao = /[\\^$.*+?()[\]{}|]/g,
  To = /^\[object .+?Constructor\]$/,
  So = Function.prototype,
  wo = Object.prototype,
  mo = So.toString,
  Co = wo.hasOwnProperty,
  Io = RegExp(
    '^' +
      mo
        .call(Co)
        .replace(Ao, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$',
  );
function xo(t) {
  if (!$o(t) || _o(t)) return !1;
  var e = vo(t) ? Io : To;
  return e.test(bo(t));
}
var Mo = xo;
function Po(t, e) {
  return t == null ? void 0 : t[e];
}
var jo = Po,
  Eo = Mo,
  ko = jo;
function Oo(t, e) {
  var a = ko(t, e);
  return Eo(a) ? a : void 0;
}
var G = Oo,
  Do = G,
  Go = m,
  Fo = Do(Go, 'Map'),
  Lt = Fo,
  Bo = G,
  Uo = Bo(Object, 'create'),
  _t = Uo,
  Br = _t;
function Lo() {
  (this.__data__ = Br ? Br(null) : {}), (this.size = 0);
}
var No = Lo;
function Ko(t) {
  var e = this.has(t) && delete this.__data__[t];
  return (this.size -= e ? 1 : 0), e;
}
var Ho = Ko,
  Ro = _t,
  Vo = '__lodash_hash_undefined__',
  zo = Object.prototype,
  Wo = zo.hasOwnProperty;
function qo(t) {
  var e = this.__data__;
  if (Ro) {
    var a = e[t];
    return a === Vo ? void 0 : a;
  }
  return Wo.call(e, t) ? e[t] : void 0;
}
var Jo = qo,
  Yo = _t,
  Xo = Object.prototype,
  Zo = Xo.hasOwnProperty;
function Qo(t) {
  var e = this.__data__;
  return Yo ? e[t] !== void 0 : Zo.call(e, t);
}
var ts = Qo,
  rs = _t,
  es = '__lodash_hash_undefined__';
function as(t, e) {
  var a = this.__data__;
  return (this.size += this.has(t) ? 0 : 1), (a[t] = rs && e === void 0 ? es : e), this;
}
var ns = as,
  os = No,
  ss = Ho,
  is = Jo,
  cs = ts,
  us = ns;
function H(t) {
  var e = -1,
    a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
H.prototype.clear = os;
H.prototype.delete = ss;
H.prototype.get = is;
H.prototype.has = cs;
H.prototype.set = us;
var fs = H,
  Ur = fs,
  ls = yt,
  ps = Lt;
function gs() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Ur(),
      map: new (ps || ls)(),
      string: new Ur(),
    });
}
var hs = gs;
function ys(t) {
  var e = typeof t;
  return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean' ? t !== '__proto__' : t === null;
}
var vs = ys,
  _s = vs;
function ds(t, e) {
  var a = t.__data__;
  return _s(e) ? a[typeof e == 'string' ? 'string' : 'hash'] : a.map;
}
var dt = ds,
  $s = dt;
function bs(t) {
  var e = $s(this, t).delete(t);
  return (this.size -= e ? 1 : 0), e;
}
var As = bs,
  Ts = dt;
function Ss(t) {
  return Ts(this, t).get(t);
}
var ws = Ss,
  ms = dt;
function Cs(t) {
  return ms(this, t).has(t);
}
var Is = Cs,
  xs = dt;
function Ms(t, e) {
  var a = xs(this, t),
    o = a.size;
  return a.set(t, e), (this.size += a.size == o ? 0 : 1), this;
}
var Ps = Ms,
  js = hs,
  Es = As,
  ks = ws,
  Os = Is,
  Ds = Ps;
function R(t) {
  var e = -1,
    a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
R.prototype.clear = js;
R.prototype.delete = Es;
R.prototype.get = ks;
R.prototype.has = Os;
R.prototype.set = Ds;
var Gs = R,
  Fs = yt,
  Bs = Lt,
  Us = Gs,
  Ls = 200;
function Ns(t, e) {
  var a = this.__data__;
  if (a instanceof Fs) {
    var o = a.__data__;
    if (!Bs || o.length < Ls - 1) return o.push([t, e]), (this.size = ++a.size), this;
    a = this.__data__ = new Us(o);
  }
  return a.set(t, e), (this.size = a.size), this;
}
var Ks = Ns,
  Hs = yt,
  Rs = xn,
  Vs = Pn,
  zs = En,
  Ws = On,
  qs = Ks;
function V(t) {
  var e = (this.__data__ = new Hs(t));
  this.size = e.size;
}
V.prototype.clear = Rs;
V.prototype.delete = Vs;
V.prototype.get = zs;
V.prototype.has = Ws;
V.prototype.set = qs;
var Js = V;
function Ys(t, e) {
  for (var a = -1, o = t == null ? 0 : t.length; ++a < o && e(t[a], a, t) !== !1; );
  return t;
}
var Xs = Ys,
  Zs = G,
  Qs = (function () {
    try {
      var t = Zs(Object, 'defineProperty');
      return t({}, '', {}), t;
    } catch {}
  })(),
  ti = Qs,
  Lr = ti;
function ri(t, e, a) {
  e == '__proto__' && Lr
    ? Lr(t, e, {
        configurable: !0,
        enumerable: !0,
        value: a,
        writable: !0,
      })
    : (t[e] = a);
}
var le = ri,
  ei = le,
  ai = se,
  ni = Object.prototype,
  oi = ni.hasOwnProperty;
function si(t, e, a) {
  var o = t[e];
  (!(oi.call(t, e) && ai(o, a)) || (a === void 0 && !(e in t))) && ei(t, e, a);
}
var pe = si,
  ii = pe,
  ci = le;
function ui(t, e, a, o) {
  var u = !a;
  a || (a = {});
  for (var l = -1, i = e.length; ++l < i; ) {
    var p = e[l],
      g = o ? o(a[p], t[p], p, a, t) : void 0;
    g === void 0 && (g = t[p]), u ? ci(a, p, g) : ii(a, p, g);
  }
  return a;
}
var $t = ui;
function fi(t, e) {
  for (var a = -1, o = Array(t); ++a < t; ) o[a] = e(a);
  return o;
}
var li = fi;
function pi(t) {
  return t != null && typeof t == 'object';
}
var tt = pi,
  gi = vt,
  hi = tt,
  yi = '[object Arguments]';
function vi(t) {
  return hi(t) && gi(t) == yi;
}
var _i = vi,
  Nr = _i,
  di = tt,
  ge = Object.prototype,
  $i = ge.hasOwnProperty,
  bi = ge.propertyIsEnumerable,
  Ai = Nr(
    /* @__PURE__ */ (function () {
      return arguments;
    })(),
  )
    ? Nr
    : function (t) {
        return di(t) && $i.call(t, 'callee') && !bi.call(t, 'callee');
      },
  Ti = Ai,
  Si = Array.isArray,
  Nt = Si,
  lt = { exports: {} };
function wi() {
  return !1;
}
var mi = wi;
lt.exports;
(function (t, e) {
  var a = m,
    o = mi,
    u = e && !e.nodeType && e,
    l = u && !0 && t && !t.nodeType && t,
    i = l && l.exports === u,
    p = i ? a.Buffer : void 0,
    g = p ? p.isBuffer : void 0,
    f = g || o;
  t.exports = f;
})(lt, lt.exports);
var he = lt.exports,
  Ci = 9007199254740991,
  Ii = /^(?:0|[1-9]\d*)$/;
function xi(t, e) {
  var a = typeof t;
  return (e = e ?? Ci), !!e && (a == 'number' || (a != 'symbol' && Ii.test(t))) && t > -1 && t % 1 == 0 && t < e;
}
var Mi = xi,
  Pi = 9007199254740991;
function ji(t) {
  return typeof t == 'number' && t > -1 && t % 1 == 0 && t <= Pi;
}
var ye = ji,
  Ei = vt,
  ki = ye,
  Oi = tt,
  Di = '[object Arguments]',
  Gi = '[object Array]',
  Fi = '[object Boolean]',
  Bi = '[object Date]',
  Ui = '[object Error]',
  Li = '[object Function]',
  Ni = '[object Map]',
  Ki = '[object Number]',
  Hi = '[object Object]',
  Ri = '[object RegExp]',
  Vi = '[object Set]',
  zi = '[object String]',
  Wi = '[object WeakMap]',
  qi = '[object ArrayBuffer]',
  Ji = '[object DataView]',
  Yi = '[object Float32Array]',
  Xi = '[object Float64Array]',
  Zi = '[object Int8Array]',
  Qi = '[object Int16Array]',
  tc = '[object Int32Array]',
  rc = '[object Uint8Array]',
  ec = '[object Uint8ClampedArray]',
  ac = '[object Uint16Array]',
  nc = '[object Uint32Array]',
  v = {};
v[Yi] = v[Xi] = v[Zi] = v[Qi] = v[tc] = v[rc] = v[ec] = v[ac] = v[nc] = !0;
v[Di] =
  v[Gi] =
  v[qi] =
  v[Fi] =
  v[Ji] =
  v[Bi] =
  v[Ui] =
  v[Li] =
  v[Ni] =
  v[Ki] =
  v[Hi] =
  v[Ri] =
  v[Vi] =
  v[zi] =
  v[Wi] =
    !1;
function oc(t) {
  return Oi(t) && ki(t.length) && !!v[Ei(t)];
}
var sc = oc;
function ic(t) {
  return function (e) {
    return t(e);
  };
}
var Kt = ic,
  pt = { exports: {} };
pt.exports;
(function (t, e) {
  var a = ie,
    o = e && !e.nodeType && e,
    u = o && !0 && t && !t.nodeType && t,
    l = u && u.exports === o,
    i = l && a.process,
    p = (function () {
      try {
        var g = u && u.require && u.require('util').types;
        return g || (i && i.binding && i.binding('util'));
      } catch {}
    })();
  t.exports = p;
})(pt, pt.exports);
var Ht = pt.exports,
  cc = sc,
  uc = Kt,
  Kr = Ht,
  Hr = Kr && Kr.isTypedArray,
  fc = Hr ? uc(Hr) : cc,
  lc = fc,
  pc = li,
  gc = Ti,
  hc = Nt,
  yc = he,
  vc = Mi,
  _c = lc,
  dc = Object.prototype,
  $c = dc.hasOwnProperty;
function bc(t, e) {
  var a = hc(t),
    o = !a && gc(t),
    u = !a && !o && yc(t),
    l = !a && !o && !u && _c(t),
    i = a || o || u || l,
    p = i ? pc(t.length, String) : [],
    g = p.length;
  for (var f in t)
    (e || $c.call(t, f)) &&
      !(
        i && // Safari 9 has enumerable `arguments.length` in strict mode.
        (f == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
          (u && (f == 'offset' || f == 'parent')) || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          (l && (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) || // Skip index properties.
          vc(f, g))
      ) &&
      p.push(f);
  return p;
}
var ve = bc,
  Ac = Object.prototype;
function Tc(t) {
  var e = t && t.constructor,
    a = (typeof e == 'function' && e.prototype) || Ac;
  return t === a;
}
var Rt = Tc;
function Sc(t, e) {
  return function (a) {
    return t(e(a));
  };
}
var _e = Sc,
  wc = _e,
  mc = wc(Object.keys, Object),
  Cc = mc,
  Ic = Rt,
  xc = Cc,
  Mc = Object.prototype,
  Pc = Mc.hasOwnProperty;
function jc(t) {
  if (!Ic(t)) return xc(t);
  var e = [];
  for (var a in Object(t)) Pc.call(t, a) && a != 'constructor' && e.push(a);
  return e;
}
var Ec = jc,
  kc = ue,
  Oc = ye;
function Dc(t) {
  return t != null && Oc(t.length) && !kc(t);
}
var de = Dc,
  Gc = ve,
  Fc = Ec,
  Bc = de;
function Uc(t) {
  return Bc(t) ? Gc(t) : Fc(t);
}
var Vt = Uc,
  Lc = $t,
  Nc = Vt;
function Kc(t, e) {
  return t && Lc(e, Nc(e), t);
}
var Hc = Kc;
function Rc(t) {
  var e = [];
  if (t != null) for (var a in Object(t)) e.push(a);
  return e;
}
var Vc = Rc,
  zc = Q,
  Wc = Rt,
  qc = Vc,
  Jc = Object.prototype,
  Yc = Jc.hasOwnProperty;
function Xc(t) {
  if (!zc(t)) return qc(t);
  var e = Wc(t),
    a = [];
  for (var o in t) (o == 'constructor' && (e || !Yc.call(t, o))) || a.push(o);
  return a;
}
var Zc = Xc,
  Qc = ve,
  tu = Zc,
  ru = de;
function eu(t) {
  return ru(t) ? Qc(t, !0) : tu(t);
}
var zt = eu,
  au = $t,
  nu = zt;
function ou(t, e) {
  return t && au(e, nu(e), t);
}
var su = ou,
  gt = { exports: {} };
gt.exports;
(function (t, e) {
  var a = m,
    o = e && !e.nodeType && e,
    u = o && !0 && t && !t.nodeType && t,
    l = u && u.exports === o,
    i = l ? a.Buffer : void 0,
    p = i ? i.allocUnsafe : void 0;
  function g(f, _) {
    if (_) return f.slice();
    var A = f.length,
      w = p ? p(A) : new f.constructor(A);
    return f.copy(w), w;
  }
  t.exports = g;
})(gt, gt.exports);
var iu = gt.exports;
function cu(t, e) {
  var a = -1,
    o = t.length;
  for (e || (e = Array(o)); ++a < o; ) e[a] = t[a];
  return e;
}
var uu = cu;
function fu(t, e) {
  for (var a = -1, o = t == null ? 0 : t.length, u = 0, l = []; ++a < o; ) {
    var i = t[a];
    e(i, a, t) && (l[u++] = i);
  }
  return l;
}
var lu = fu;
function pu() {
  return [];
}
var $e = pu,
  gu = lu,
  hu = $e,
  yu = Object.prototype,
  vu = yu.propertyIsEnumerable,
  Rr = Object.getOwnPropertySymbols,
  _u = Rr
    ? function (t) {
        return t == null
          ? []
          : ((t = Object(t)),
            gu(Rr(t), function (e) {
              return vu.call(t, e);
            }));
      }
    : hu,
  Wt = _u,
  du = $t,
  $u = Wt;
function bu(t, e) {
  return du(t, $u(t), e);
}
var Au = bu;
function Tu(t, e) {
  for (var a = -1, o = e.length, u = t.length; ++a < o; ) t[u + a] = e[a];
  return t;
}
var be = Tu,
  Su = _e,
  wu = Su(Object.getPrototypeOf, Object),
  Ae = wu,
  mu = be,
  Cu = Ae,
  Iu = Wt,
  xu = $e,
  Mu = Object.getOwnPropertySymbols,
  Pu = Mu
    ? function (t) {
        for (var e = []; t; ) mu(e, Iu(t)), (t = Cu(t));
        return e;
      }
    : xu,
  Te = Pu,
  ju = $t,
  Eu = Te;
function ku(t, e) {
  return ju(t, Eu(t), e);
}
var Ou = ku,
  Du = be,
  Gu = Nt;
function Fu(t, e, a) {
  var o = e(t);
  return Gu(t) ? o : Du(o, a(t));
}
var Se = Fu,
  Bu = Se,
  Uu = Wt,
  Lu = Vt;
function Nu(t) {
  return Bu(t, Lu, Uu);
}
var Ku = Nu,
  Hu = Se,
  Ru = Te,
  Vu = zt;
function zu(t) {
  return Hu(t, Vu, Ru);
}
var Wu = zu,
  qu = G,
  Ju = m,
  Yu = qu(Ju, 'DataView'),
  Xu = Yu,
  Zu = G,
  Qu = m,
  tf = Zu(Qu, 'Promise'),
  rf = tf,
  ef = G,
  af = m,
  nf = ef(af, 'Set'),
  of = nf,
  sf = G,
  cf = m,
  uf = sf(cf, 'WeakMap'),
  ff = uf,
  kt = Xu,
  Ot = Lt,
  Dt = rf,
  Gt = of,
  Ft = ff,
  we = vt,
  z = fe,
  Vr = '[object Map]',
  lf = '[object Object]',
  zr = '[object Promise]',
  Wr = '[object Set]',
  qr = '[object WeakMap]',
  Jr = '[object DataView]',
  pf = z(kt),
  gf = z(Ot),
  hf = z(Dt),
  yf = z(Gt),
  vf = z(Ft),
  D = we;
((kt && D(new kt(new ArrayBuffer(1))) != Jr) ||
  (Ot && D(new Ot()) != Vr) ||
  (Dt && D(Dt.resolve()) != zr) ||
  (Gt && D(new Gt()) != Wr) ||
  (Ft && D(new Ft()) != qr)) &&
  (D = function (t) {
    var e = we(t),
      a = e == lf ? t.constructor : void 0,
      o = a ? z(a) : '';
    if (o)
      switch (o) {
        case pf:
          return Jr;
        case gf:
          return Vr;
        case hf:
          return zr;
        case yf:
          return Wr;
        case vf:
          return qr;
      }
    return e;
  });
var qt = D,
  _f = Object.prototype,
  df = _f.hasOwnProperty;
function $f(t) {
  var e = t.length,
    a = new t.constructor(e);
  return e && typeof t[0] == 'string' && df.call(t, 'index') && ((a.index = t.index), (a.input = t.input)), a;
}
var bf = $f,
  Af = m,
  Tf = Af.Uint8Array,
  Sf = Tf,
  Yr = Sf;
function wf(t) {
  var e = new t.constructor(t.byteLength);
  return new Yr(e).set(new Yr(t)), e;
}
var Jt = wf,
  mf = Jt;
function Cf(t, e) {
  var a = e ? mf(t.buffer) : t.buffer;
  return new t.constructor(a, t.byteOffset, t.byteLength);
}
var If = Cf,
  xf = /\w*$/;
function Mf(t) {
  var e = new t.constructor(t.source, xf.exec(t));
  return (e.lastIndex = t.lastIndex), e;
}
var Pf = Mf,
  Xr = Ut,
  Zr = Xr ? Xr.prototype : void 0,
  Qr = Zr ? Zr.valueOf : void 0;
function jf(t) {
  return Qr ? Object(Qr.call(t)) : {};
}
var Ef = jf,
  kf = Jt;
function Of(t, e) {
  var a = e ? kf(t.buffer) : t.buffer;
  return new t.constructor(a, t.byteOffset, t.length);
}
var Df = Of,
  Gf = Jt,
  Ff = If,
  Bf = Pf,
  Uf = Ef,
  Lf = Df,
  Nf = '[object Boolean]',
  Kf = '[object Date]',
  Hf = '[object Map]',
  Rf = '[object Number]',
  Vf = '[object RegExp]',
  zf = '[object Set]',
  Wf = '[object String]',
  qf = '[object Symbol]',
  Jf = '[object ArrayBuffer]',
  Yf = '[object DataView]',
  Xf = '[object Float32Array]',
  Zf = '[object Float64Array]',
  Qf = '[object Int8Array]',
  tl = '[object Int16Array]',
  rl = '[object Int32Array]',
  el = '[object Uint8Array]',
  al = '[object Uint8ClampedArray]',
  nl = '[object Uint16Array]',
  ol = '[object Uint32Array]';
function sl(t, e, a) {
  var o = t.constructor;
  switch (e) {
    case Jf:
      return Gf(t);
    case Nf:
    case Kf:
      return new o(+t);
    case Yf:
      return Ff(t, a);
    case Xf:
    case Zf:
    case Qf:
    case tl:
    case rl:
    case el:
    case al:
    case nl:
    case ol:
      return Lf(t, a);
    case Hf:
      return new o();
    case Rf:
    case Wf:
      return new o(t);
    case Vf:
      return Bf(t);
    case zf:
      return new o();
    case qf:
      return Uf(t);
  }
}
var il = sl,
  cl = Q,
  te = Object.create,
  ul = /* @__PURE__ */ (function () {
    function t() {}
    return function (e) {
      if (!cl(e)) return {};
      if (te) return te(e);
      t.prototype = e;
      var a = new t();
      return (t.prototype = void 0), a;
    };
  })(),
  fl = ul,
  ll = fl,
  pl = Ae,
  gl = Rt;
function hl(t) {
  return typeof t.constructor == 'function' && !gl(t) ? ll(pl(t)) : {};
}
var yl = hl,
  vl = qt,
  _l = tt,
  dl = '[object Map]';
function $l(t) {
  return _l(t) && vl(t) == dl;
}
var bl = $l,
  Al = bl,
  Tl = Kt,
  re = Ht,
  ee = re && re.isMap,
  Sl = ee ? Tl(ee) : Al,
  wl = Sl,
  ml = qt,
  Cl = tt,
  Il = '[object Set]';
function xl(t) {
  return Cl(t) && ml(t) == Il;
}
var Ml = xl,
  Pl = Ml,
  jl = Kt,
  ae = Ht,
  ne = ae && ae.isSet,
  El = ne ? jl(ne) : Pl,
  kl = El,
  Ol = Js,
  Dl = Xs,
  Gl = pe,
  Fl = Hc,
  Bl = su,
  Ul = iu,
  Ll = uu,
  Nl = Au,
  Kl = Ou,
  Hl = Ku,
  Rl = Wu,
  Vl = qt,
  zl = bf,
  Wl = il,
  ql = yl,
  Jl = Nt,
  Yl = he,
  Xl = wl,
  Zl = Q,
  Ql = kl,
  tp = Vt,
  rp = zt,
  ep = 1,
  ap = 2,
  np = 4,
  me = '[object Arguments]',
  op = '[object Array]',
  sp = '[object Boolean]',
  ip = '[object Date]',
  cp = '[object Error]',
  Ce = '[object Function]',
  up = '[object GeneratorFunction]',
  fp = '[object Map]',
  lp = '[object Number]',
  Ie = '[object Object]',
  pp = '[object RegExp]',
  gp = '[object Set]',
  hp = '[object String]',
  yp = '[object Symbol]',
  vp = '[object WeakMap]',
  _p = '[object ArrayBuffer]',
  dp = '[object DataView]',
  $p = '[object Float32Array]',
  bp = '[object Float64Array]',
  Ap = '[object Int8Array]',
  Tp = '[object Int16Array]',
  Sp = '[object Int32Array]',
  wp = '[object Uint8Array]',
  mp = '[object Uint8ClampedArray]',
  Cp = '[object Uint16Array]',
  Ip = '[object Uint32Array]',
  y = {};
y[me] =
  y[op] =
  y[_p] =
  y[dp] =
  y[sp] =
  y[ip] =
  y[$p] =
  y[bp] =
  y[Ap] =
  y[Tp] =
  y[Sp] =
  y[fp] =
  y[lp] =
  y[Ie] =
  y[pp] =
  y[gp] =
  y[hp] =
  y[yp] =
  y[wp] =
  y[mp] =
  y[Cp] =
  y[Ip] =
    !0;
y[cp] = y[Ce] = y[vp] = !1;
function ct(t, e, a, o, u, l) {
  var i,
    p = e & ep,
    g = e & ap,
    f = e & np;
  if ((a && (i = u ? a(t, o, u, l) : a(t)), i !== void 0)) return i;
  if (!Zl(t)) return t;
  var _ = Jl(t);
  if (_) {
    if (((i = zl(t)), !p)) return Ll(t, i);
  } else {
    var A = Vl(t),
      w = A == Ce || A == up;
    if (Yl(t)) return Ul(t, p);
    if (A == Ie || A == me || (w && !u)) {
      if (((i = g || w ? {} : ql(t)), !p)) return g ? Kl(t, Bl(i, t)) : Nl(t, Fl(i, t));
    } else {
      if (!y[A]) return u ? t : {};
      i = Wl(t, A, p);
    }
  }
  l || (l = new Ol());
  var W = l.get(t);
  if (W) return W;
  l.set(t, i),
    Ql(t)
      ? t.forEach(function (S) {
          i.add(ct(S, e, a, S, t, l));
        })
      : Xl(t) &&
        t.forEach(function (S, T) {
          i.set(T, ct(S, e, a, T, t, l));
        });
  var q = f ? (g ? Rl : Hl) : g ? rp : tp,
    J = _ ? void 0 : q(t);
  return (
    Dl(J || t, function (S, T) {
      J && ((T = S), (S = t[T])), Gl(i, T, ct(S, e, a, T, t, l));
    }),
    i
  );
}
var xp = ct,
  Mp = xp,
  Pp = 1,
  jp = 4;
function Ep(t) {
  return Mp(t, Pp | jp);
}
var kp = Ep;
const Op = /* @__PURE__ */ oe(kp),
  Dp = (t, e, a = !0) => {
    let o = 0;
    function u(l, i) {
      i && i.s && Array.isArray(i.s) && i.s.length === 4
        ? (l[o] && (i.s = [...l[o]]), o++)
        : i &&
          i.c &&
          i.c.k &&
          (Array.isArray(i.c.k) && typeof i.c.k[0] != 'number' ? u(l, i.c.k) : (l[o] && (i.c.k = l[o]), o++));
      for (const p in i) typeof i[p] == 'object' && u(l, i[p]);
      return i;
    }
    return u(t, a ? Op(e) : e);
  },
  Up = (t = [], e, a = !0) => {
    const o = [];
    return (
      t.forEach((u) => {
        o.push(ut(u));
      }),
      Dp(o, a ? Bt(e) : e)
    );
  },
  Lp = (t, e, a = !0) => {
    const o = ut(t);
    if (!o) throw new Error('Proper colors must be used for target');
    function u(l, i) {
      if (i && i.s && Array.isArray(i.s) && i.s.length === 4) i.s = [...l];
      else if (i && i.c && i.c.k) Array.isArray(i.c.k) && typeof i.c.k[0] != 'number' ? u(l, i.c.k) : (i.c.k = l);
      else for (const p in i) typeof i[p] == 'object' && u(l, i[p]);
      return i;
    }
    return u(o, a ? Bt(e) : e);
  },
  M = (t) => Math.round(t * 1e3) / 1e3,
  N = 3e-3,
  Gp = (t, e, a, o = !0) => {
    const u = ut(t),
      l = ut(e);
    if (!u || !l) throw new Error('Proper colors must be used for both source and target');
    function i(p, g, f) {
      if (f && f.s && Array.isArray(f.s) && f.s.length === 4)
        p[0] === f.s[0] && p[1] === f.s[1] && p[2] === f.s[2] && (f.s = [...g]);
      else if (f && f.c && f.c.k)
        Array.isArray(f.c.k) && typeof f.c.k[0] != 'number'
          ? i(p, g, f.c.k)
          : Math.abs(p[0] - M(f.c.k[0])) < N &&
            Math.abs(p[1] - M(f.c.k[1])) < N &&
            Math.abs(p[2] - M(f.c.k[2])) < N &&
            (f.c.k = g);
      else if (f.g && f.g.k && f.g.k.k && f.g.k.k.length % 4 === 0)
        for (let _ = 0; _ < f.g.k.k.length; _ += 4)
          Math.abs(M(p[0]) - M(f.g.k.k[_ + 1])) < N &&
            Math.abs(M(p[1]) - M(f.g.k.k[_ + 2])) < N &&
            Math.abs(M(p[2]) - M(f.g.k.k[_ + 3])) < N &&
            ((f.g.k.k[_ + 1] = g[0]), (f.g.k.k[_ + 2] = g[1]), (f.g.k.k[_ + 3] = g[2]), (f.g.k.k[_ + 4] = g[3]));
      else for (const _ in f) typeof f[_] == 'object' && i(p, g, f[_]);
      return f;
    }
    return i(u, l, o ? Bt(a) : a);
  },
  Np = (t, e) => t.reduce((a, [o, u]) => Gp(o, u, a), e);
export {
  Up as colorify,
  ut as convertColorToLottieColor,
  Fp as convertLottieColorToHex,
  Za as convertLottieColorToRgb,
  kr as convertLottieColorToRgba,
  Lp as flatten,
  Qa as getColors,
  Bp as getUniqueColors,
  Dp as modifyColors,
  Gp as replaceColor,
  Np as replaceColors,
};
