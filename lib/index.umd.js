(function ($, I) {
  typeof exports == 'object' && typeof module < 'u'
    ? I(exports)
    : typeof define == 'function' && define.amd
      ? define(['exports'], I)
      : (($ = typeof globalThis < 'u' ? globalThis : $ || self), I(($.index = {})));
})(this, function ($) {
  'use strict';
  const I = (t) => {
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
        throw t
          ? new Error('Color can be only hex or rgb(a) array (ex. [10,20,30,1])')
          : new Error('Color not defined');
      }
    },
    ke = (t) => {
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
    Zt = (t) => [Math.round(t[0] * 255), Math.round(t[1] * 255), Math.round(t[2] * 255)],
    Tt = (t) => [Math.round(t[0] * 255), Math.round(t[1] * 255), Math.round(t[2] * 255), t[3]],
    Qt = (t) => {
      const e = [];
      function a(o) {
        if (o.g && o.g.k && o.g.k.k && Array.isArray(o.g.k.k) && o.g.k.k.length % 4 === 0) {
          Array.isArray(o.g.k.k) && typeof o.g.k.k[0] != 'number' && a(o.g.k.k);
          const u = [...o.g.k.k];
          for (; u.length; ) {
            const l = [...u.splice(1, 3), u.shift()];
            e.push(Tt(l));
          }
        } else if (o.s && Array.isArray(o.s) && o.s.length === 4) e.push(Tt(o.s));
        else if (o.c && o.c.k) Array.isArray(o.c.k) && typeof o.c.k[0] != 'number' ? a(o.c.k) : e.push(Zt(o.c.k));
        else for (const u in o) typeof o[u] == 'object' && a(o[u]);
        return e;
      }
      return a(t), e;
    },
    Oe = (t) => {
      const a = Qt(t).map((u) => JSON.stringify(u)),
        o = new Set(a);
      return Array.from(o, (u) => JSON.parse(u));
    };
  var E =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {};
  function tr(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
  }
  var at = { exports: {} };
  at.exports,
    (function (t, e) {
      var a = 200,
        o = '__lodash_hash_undefined__',
        u = 9007199254740991,
        l = '[object Arguments]',
        i = '[object Array]',
        p = '[object Boolean]',
        g = '[object Date]',
        f = '[object Error]',
        d = '[object Function]',
        A = '[object GeneratorFunction]',
        C = '[object Map]',
        Z = '[object Number]',
        Q = '[object Object]',
        tt = '[object Promise]',
        w = '[object RegExp]',
        S = '[object Set]',
        Yr = '[object String]',
        Xr = '[object Symbol]',
        Lt = '[object WeakMap]',
        Zr = '[object ArrayBuffer]',
        ht = '[object DataView]',
        Qr = '[object Float32Array]',
        te = '[object Float64Array]',
        re = '[object Int8Array]',
        ee = '[object Int16Array]',
        ae = '[object Int32Array]',
        ne = '[object Uint8Array]',
        oe = '[object Uint8ClampedArray]',
        se = '[object Uint16Array]',
        ie = '[object Uint32Array]',
        $l = /[\\^$.*+?()[\]{}|]/g,
        bl = /\w*$/,
        Tl = /^\[object .+?Constructor\]$/,
        Al = /^(?:0|[1-9]\d*)$/,
        y = {};
      (y[l] =
        y[i] =
        y[Zr] =
        y[ht] =
        y[p] =
        y[g] =
        y[Qr] =
        y[te] =
        y[re] =
        y[ee] =
        y[ae] =
        y[C] =
        y[Z] =
        y[Q] =
        y[w] =
        y[S] =
        y[Yr] =
        y[Xr] =
        y[ne] =
        y[oe] =
        y[se] =
        y[ie] =
          !0),
        (y[f] = y[d] = y[Lt] = !1);
      var Sl = typeof E == 'object' && E && E.Object === Object && E,
        wl = typeof self == 'object' && self && self.Object === Object && self,
        M = Sl || wl || Function('return this')(),
        ce = e && !e.nodeType && e,
        ue = ce && !0 && t && !t.nodeType && t,
        ml = ue && ue.exports === ce;
      function Cl(r, n) {
        return r.set(n[0], n[1]), r;
      }
      function Il(r, n) {
        return r.add(n), r;
      }
      function xl(r, n) {
        for (var s = -1, c = r ? r.length : 0; ++s < c && n(r[s], s, r) !== !1; );
        return r;
      }
      function Ml(r, n) {
        for (var s = -1, c = n.length, _ = r.length; ++s < c; ) r[_ + s] = n[s];
        return r;
      }
      function fe(r, n, s, c) {
        for (var _ = -1, b = r ? r.length : 0; ++_ < b; ) s = n(s, r[_], _, r);
        return s;
      }
      function Pl(r, n) {
        for (var s = -1, c = Array(r); ++s < r; ) c[s] = n(s);
        return c;
      }
      function jl(r, n) {
        return r == null ? void 0 : r[n];
      }
      function le(r) {
        var n = !1;
        if (r != null && typeof r.toString != 'function')
          try {
            n = !!(r + '');
          } catch {}
        return n;
      }
      function pe(r) {
        var n = -1,
          s = Array(r.size);
        return (
          r.forEach(function (c, _) {
            s[++n] = [_, c];
          }),
          s
        );
      }
      function Nt(r, n) {
        return function (s) {
          return r(n(s));
        };
      }
      function ge(r) {
        var n = -1,
          s = Array(r.size);
        return (
          r.forEach(function (c) {
            s[++n] = c;
          }),
          s
        );
      }
      var El = Array.prototype,
        kl = Function.prototype,
        yt = Object.prototype,
        Kt = M['__core-js_shared__'],
        he = (function () {
          var r = /[^.]+$/.exec((Kt && Kt.keys && Kt.keys.IE_PROTO) || '');
          return r ? 'Symbol(src)_1.' + r : '';
        })(),
        ye = kl.toString,
        k = yt.hasOwnProperty,
        vt = yt.toString,
        Ol = RegExp(
          '^' +
            ye
              .call(k)
              .replace($l, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        ),
        ve = ml ? M.Buffer : void 0,
        de = M.Symbol,
        _e = M.Uint8Array,
        Dl = Nt(Object.getPrototypeOf, Object),
        Gl = Object.create,
        Fl = yt.propertyIsEnumerable,
        Bl = El.splice,
        $e = Object.getOwnPropertySymbols,
        Ul = ve ? ve.isBuffer : void 0,
        Ll = Nt(Object.keys, Object),
        Rt = q(M, 'DataView'),
        rt = q(M, 'Map'),
        Ht = q(M, 'Promise'),
        Vt = q(M, 'Set'),
        zt = q(M, 'WeakMap'),
        et = q(Object, 'create'),
        Nl = B(Rt),
        Kl = B(rt),
        Rl = B(Ht),
        Hl = B(Vt),
        Vl = B(zt),
        be = de ? de.prototype : void 0,
        Te = be ? be.valueOf : void 0;
      function G(r) {
        var n = -1,
          s = r ? r.length : 0;
        for (this.clear(); ++n < s; ) {
          var c = r[n];
          this.set(c[0], c[1]);
        }
      }
      function zl() {
        this.__data__ = et ? et(null) : {};
      }
      function ql(r) {
        return this.has(r) && delete this.__data__[r];
      }
      function Wl(r) {
        var n = this.__data__;
        if (et) {
          var s = n[r];
          return s === o ? void 0 : s;
        }
        return k.call(n, r) ? n[r] : void 0;
      }
      function Jl(r) {
        var n = this.__data__;
        return et ? n[r] !== void 0 : k.call(n, r);
      }
      function Yl(r, n) {
        var s = this.__data__;
        return (s[r] = et && n === void 0 ? o : n), this;
      }
      (G.prototype.clear = zl),
        (G.prototype.delete = ql),
        (G.prototype.get = Wl),
        (G.prototype.has = Jl),
        (G.prototype.set = Yl);
      function P(r) {
        var n = -1,
          s = r ? r.length : 0;
        for (this.clear(); ++n < s; ) {
          var c = r[n];
          this.set(c[0], c[1]);
        }
      }
      function Xl() {
        this.__data__ = [];
      }
      function Zl(r) {
        var n = this.__data__,
          s = dt(n, r);
        if (s < 0) return !1;
        var c = n.length - 1;
        return s == c ? n.pop() : Bl.call(n, s, 1), !0;
      }
      function Ql(r) {
        var n = this.__data__,
          s = dt(n, r);
        return s < 0 ? void 0 : n[s][1];
      }
      function tp(r) {
        return dt(this.__data__, r) > -1;
      }
      function rp(r, n) {
        var s = this.__data__,
          c = dt(s, r);
        return c < 0 ? s.push([r, n]) : (s[c][1] = n), this;
      }
      (P.prototype.clear = Xl),
        (P.prototype.delete = Zl),
        (P.prototype.get = Ql),
        (P.prototype.has = tp),
        (P.prototype.set = rp);
      function V(r) {
        var n = -1,
          s = r ? r.length : 0;
        for (this.clear(); ++n < s; ) {
          var c = r[n];
          this.set(c[0], c[1]);
        }
      }
      function ep() {
        this.__data__ = { hash: new G(), map: new (rt || P)(), string: new G() };
      }
      function ap(r) {
        return _t(this, r).delete(r);
      }
      function np(r) {
        return _t(this, r).get(r);
      }
      function op(r) {
        return _t(this, r).has(r);
      }
      function sp(r, n) {
        return _t(this, r).set(r, n), this;
      }
      (V.prototype.clear = ep),
        (V.prototype.delete = ap),
        (V.prototype.get = np),
        (V.prototype.has = op),
        (V.prototype.set = sp);
      function z(r) {
        this.__data__ = new P(r);
      }
      function ip() {
        this.__data__ = new P();
      }
      function cp(r) {
        return this.__data__.delete(r);
      }
      function up(r) {
        return this.__data__.get(r);
      }
      function fp(r) {
        return this.__data__.has(r);
      }
      function lp(r, n) {
        var s = this.__data__;
        if (s instanceof P) {
          var c = s.__data__;
          if (!rt || c.length < a - 1) return c.push([r, n]), this;
          s = this.__data__ = new V(c);
        }
        return s.set(r, n), this;
      }
      (z.prototype.clear = ip),
        (z.prototype.delete = cp),
        (z.prototype.get = up),
        (z.prototype.has = fp),
        (z.prototype.set = lp);
      function pp(r, n) {
        var s = Jt(r) || Gp(r) ? Pl(r.length, String) : [],
          c = s.length,
          _ = !!c;
        for (var b in r) k.call(r, b) && !(_ && (b == 'length' || Ep(b, c))) && s.push(b);
        return s;
      }
      function Ae(r, n, s) {
        var c = r[n];
        (!(k.call(r, n) && Ce(c, s)) || (s === void 0 && !(n in r))) && (r[n] = s);
      }
      function dt(r, n) {
        for (var s = r.length; s--; ) if (Ce(r[s][0], n)) return s;
        return -1;
      }
      function gp(r, n) {
        return r && Se(n, Yt(n), r);
      }
      function qt(r, n, s, c, _, b, j) {
        var T;
        if ((c && (T = b ? c(r, _, b, j) : c(r)), T !== void 0)) return T;
        if (!$t(r)) return r;
        var Me = Jt(r);
        if (Me) {
          if (((T = Mp(r)), !n)) return Cp(r, T);
        } else {
          var W = F(r),
            Pe = W == d || W == A;
          if (Bp(r)) return $p(r, n);
          if (W == Q || W == l || (Pe && !b)) {
            if (le(r)) return b ? r : {};
            if (((T = Pp(Pe ? {} : r)), !n)) return Ip(r, gp(T, r));
          } else {
            if (!y[W]) return b ? r : {};
            T = jp(r, W, qt, n);
          }
        }
        j || (j = new z());
        var je = j.get(r);
        if (je) return je;
        if ((j.set(r, T), !Me)) var Ee = s ? xp(r) : Yt(r);
        return (
          xl(Ee || r, function (Xt, bt) {
            Ee && ((bt = Xt), (Xt = r[bt])), Ae(T, bt, qt(Xt, n, s, c, bt, r, j));
          }),
          T
        );
      }
      function hp(r) {
        return $t(r) ? Gl(r) : {};
      }
      function yp(r, n, s) {
        var c = n(r);
        return Jt(r) ? c : Ml(c, s(r));
      }
      function vp(r) {
        return vt.call(r);
      }
      function dp(r) {
        if (!$t(r) || Op(r)) return !1;
        var n = xe(r) || le(r) ? Ol : Tl;
        return n.test(B(r));
      }
      function _p(r) {
        if (!me(r)) return Ll(r);
        var n = [];
        for (var s in Object(r)) k.call(r, s) && s != 'constructor' && n.push(s);
        return n;
      }
      function $p(r, n) {
        if (n) return r.slice();
        var s = new r.constructor(r.length);
        return r.copy(s), s;
      }
      function Wt(r) {
        var n = new r.constructor(r.byteLength);
        return new _e(n).set(new _e(r)), n;
      }
      function bp(r, n) {
        var s = n ? Wt(r.buffer) : r.buffer;
        return new r.constructor(s, r.byteOffset, r.byteLength);
      }
      function Tp(r, n, s) {
        var c = n ? s(pe(r), !0) : pe(r);
        return fe(c, Cl, new r.constructor());
      }
      function Ap(r) {
        var n = new r.constructor(r.source, bl.exec(r));
        return (n.lastIndex = r.lastIndex), n;
      }
      function Sp(r, n, s) {
        var c = n ? s(ge(r), !0) : ge(r);
        return fe(c, Il, new r.constructor());
      }
      function wp(r) {
        return Te ? Object(Te.call(r)) : {};
      }
      function mp(r, n) {
        var s = n ? Wt(r.buffer) : r.buffer;
        return new r.constructor(s, r.byteOffset, r.length);
      }
      function Cp(r, n) {
        var s = -1,
          c = r.length;
        for (n || (n = Array(c)); ++s < c; ) n[s] = r[s];
        return n;
      }
      function Se(r, n, s, c) {
        s || (s = {});
        for (var _ = -1, b = n.length; ++_ < b; ) {
          var j = n[_],
            T = void 0;
          Ae(s, j, T === void 0 ? r[j] : T);
        }
        return s;
      }
      function Ip(r, n) {
        return Se(r, we(r), n);
      }
      function xp(r) {
        return yp(r, Yt, we);
      }
      function _t(r, n) {
        var s = r.__data__;
        return kp(n) ? s[typeof n == 'string' ? 'string' : 'hash'] : s.map;
      }
      function q(r, n) {
        var s = jl(r, n);
        return dp(s) ? s : void 0;
      }
      var we = $e ? Nt($e, Object) : Np,
        F = vp;
      ((Rt && F(new Rt(new ArrayBuffer(1))) != ht) ||
        (rt && F(new rt()) != C) ||
        (Ht && F(Ht.resolve()) != tt) ||
        (Vt && F(new Vt()) != S) ||
        (zt && F(new zt()) != Lt)) &&
        (F = function (r) {
          var n = vt.call(r),
            s = n == Q ? r.constructor : void 0,
            c = s ? B(s) : void 0;
          if (c)
            switch (c) {
              case Nl:
                return ht;
              case Kl:
                return C;
              case Rl:
                return tt;
              case Hl:
                return S;
              case Vl:
                return Lt;
            }
          return n;
        });
      function Mp(r) {
        var n = r.length,
          s = r.constructor(n);
        return n && typeof r[0] == 'string' && k.call(r, 'index') && ((s.index = r.index), (s.input = r.input)), s;
      }
      function Pp(r) {
        return typeof r.constructor == 'function' && !me(r) ? hp(Dl(r)) : {};
      }
      function jp(r, n, s, c) {
        var _ = r.constructor;
        switch (n) {
          case Zr:
            return Wt(r);
          case p:
          case g:
            return new _(+r);
          case ht:
            return bp(r, c);
          case Qr:
          case te:
          case re:
          case ee:
          case ae:
          case ne:
          case oe:
          case se:
          case ie:
            return mp(r, c);
          case C:
            return Tp(r, c, s);
          case Z:
          case Yr:
            return new _(r);
          case w:
            return Ap(r);
          case S:
            return Sp(r, c, s);
          case Xr:
            return wp(r);
        }
      }
      function Ep(r, n) {
        return (n = n ?? u), !!n && (typeof r == 'number' || Al.test(r)) && r > -1 && r % 1 == 0 && r < n;
      }
      function kp(r) {
        var n = typeof r;
        return n == 'string' || n == 'number' || n == 'symbol' || n == 'boolean' ? r !== '__proto__' : r === null;
      }
      function Op(r) {
        return !!he && he in r;
      }
      function me(r) {
        var n = r && r.constructor,
          s = (typeof n == 'function' && n.prototype) || yt;
        return r === s;
      }
      function B(r) {
        if (r != null) {
          try {
            return ye.call(r);
          } catch {}
          try {
            return r + '';
          } catch {}
        }
        return '';
      }
      function Dp(r) {
        return qt(r, !0, !0);
      }
      function Ce(r, n) {
        return r === n || (r !== r && n !== n);
      }
      function Gp(r) {
        return Fp(r) && k.call(r, 'callee') && (!Fl.call(r, 'callee') || vt.call(r) == l);
      }
      var Jt = Array.isArray;
      function Ie(r) {
        return r != null && Up(r.length) && !xe(r);
      }
      function Fp(r) {
        return Lp(r) && Ie(r);
      }
      var Bp = Ul || Kp;
      function xe(r) {
        var n = $t(r) ? vt.call(r) : '';
        return n == d || n == A;
      }
      function Up(r) {
        return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= u;
      }
      function $t(r) {
        var n = typeof r;
        return !!r && (n == 'object' || n == 'function');
      }
      function Lp(r) {
        return !!r && typeof r == 'object';
      }
      function Yt(r) {
        return Ie(r) ? pp(r) : _p(r);
      }
      function Np() {
        return [];
      }
      function Kp() {
        return !1;
      }
      t.exports = Dp;
    })(at, at.exports);
  var De = at.exports;
  const At = tr(De);
  function Ge() {
    (this.__data__ = []), (this.size = 0);
  }
  var Fe = Ge;
  function Be(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var rr = Be,
    Ue = rr;
  function Le(t, e) {
    for (var a = t.length; a--; ) if (Ue(t[a][0], e)) return a;
    return -1;
  }
  var nt = Le,
    Ne = nt,
    Ke = Array.prototype,
    Re = Ke.splice;
  function He(t) {
    var e = this.__data__,
      a = Ne(e, t);
    if (a < 0) return !1;
    var o = e.length - 1;
    return a == o ? e.pop() : Re.call(e, a, 1), --this.size, !0;
  }
  var Ve = He,
    ze = nt;
  function qe(t) {
    var e = this.__data__,
      a = ze(e, t);
    return a < 0 ? void 0 : e[a][1];
  }
  var We = qe,
    Je = nt;
  function Ye(t) {
    return Je(this.__data__, t) > -1;
  }
  var Xe = Ye,
    Ze = nt;
  function Qe(t, e) {
    var a = this.__data__,
      o = Ze(a, t);
    return o < 0 ? (++this.size, a.push([t, e])) : (a[o][1] = e), this;
  }
  var ta = Qe,
    ra = Fe,
    ea = Ve,
    aa = We,
    na = Xe,
    oa = ta;
  function U(t) {
    var e = -1,
      a = t == null ? 0 : t.length;
    for (this.clear(); ++e < a; ) {
      var o = t[e];
      this.set(o[0], o[1]);
    }
  }
  (U.prototype.clear = ra),
    (U.prototype.delete = ea),
    (U.prototype.get = aa),
    (U.prototype.has = na),
    (U.prototype.set = oa);
  var ot = U,
    sa = ot;
  function ia() {
    (this.__data__ = new sa()), (this.size = 0);
  }
  var ca = ia;
  function ua(t) {
    var e = this.__data__,
      a = e.delete(t);
    return (this.size = e.size), a;
  }
  var fa = ua;
  function la(t) {
    return this.__data__.get(t);
  }
  var pa = la;
  function ga(t) {
    return this.__data__.has(t);
  }
  var ha = ga,
    ya = typeof E == 'object' && E && E.Object === Object && E,
    er = ya,
    va = er,
    da = typeof self == 'object' && self && self.Object === Object && self,
    _a = va || da || Function('return this')(),
    m = _a,
    $a = m,
    ba = $a.Symbol,
    St = ba,
    ar = St,
    nr = Object.prototype,
    Ta = nr.hasOwnProperty,
    Aa = nr.toString,
    J = ar ? ar.toStringTag : void 0;
  function Sa(t) {
    var e = Ta.call(t, J),
      a = t[J];
    try {
      t[J] = void 0;
      var o = !0;
    } catch {}
    var u = Aa.call(t);
    return o && (e ? (t[J] = a) : delete t[J]), u;
  }
  var wa = Sa,
    ma = Object.prototype,
    Ca = ma.toString;
  function Ia(t) {
    return Ca.call(t);
  }
  var xa = Ia,
    or = St,
    Ma = wa,
    Pa = xa,
    ja = '[object Null]',
    Ea = '[object Undefined]',
    sr = or ? or.toStringTag : void 0;
  function ka(t) {
    return t == null ? (t === void 0 ? Ea : ja) : sr && sr in Object(t) ? Ma(t) : Pa(t);
  }
  var st = ka;
  function Oa(t) {
    var e = typeof t;
    return t != null && (e == 'object' || e == 'function');
  }
  var Y = Oa,
    Da = st,
    Ga = Y,
    Fa = '[object AsyncFunction]',
    Ba = '[object Function]',
    Ua = '[object GeneratorFunction]',
    La = '[object Proxy]';
  function Na(t) {
    if (!Ga(t)) return !1;
    var e = Da(t);
    return e == Ba || e == Ua || e == Fa || e == La;
  }
  var ir = Na,
    Ka = m,
    Ra = Ka['__core-js_shared__'],
    Ha = Ra,
    wt = Ha,
    cr = (function () {
      var t = /[^.]+$/.exec((wt && wt.keys && wt.keys.IE_PROTO) || '');
      return t ? 'Symbol(src)_1.' + t : '';
    })();
  function Va(t) {
    return !!cr && cr in t;
  }
  var za = Va,
    qa = Function.prototype,
    Wa = qa.toString;
  function Ja(t) {
    if (t != null) {
      try {
        return Wa.call(t);
      } catch {}
      try {
        return t + '';
      } catch {}
    }
    return '';
  }
  var ur = Ja,
    Ya = ir,
    Xa = za,
    Za = Y,
    Qa = ur,
    tn = /[\\^$.*+?()[\]{}|]/g,
    rn = /^\[object .+?Constructor\]$/,
    en = Function.prototype,
    an = Object.prototype,
    nn = en.toString,
    on = an.hasOwnProperty,
    sn = RegExp(
      '^' +
        nn
          .call(on)
          .replace(tn, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$',
    );
  function cn(t) {
    if (!Za(t) || Xa(t)) return !1;
    var e = Ya(t) ? sn : rn;
    return e.test(Qa(t));
  }
  var un = cn;
  function fn(t, e) {
    return t == null ? void 0 : t[e];
  }
  var ln = fn,
    pn = un,
    gn = ln;
  function hn(t, e) {
    var a = gn(t, e);
    return pn(a) ? a : void 0;
  }
  var O = hn,
    yn = O,
    vn = m,
    dn = yn(vn, 'Map'),
    mt = dn,
    _n = O,
    $n = _n(Object, 'create'),
    it = $n,
    fr = it;
  function bn() {
    (this.__data__ = fr ? fr(null) : {}), (this.size = 0);
  }
  var Tn = bn;
  function An(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var Sn = An,
    wn = it,
    mn = '__lodash_hash_undefined__',
    Cn = Object.prototype,
    In = Cn.hasOwnProperty;
  function xn(t) {
    var e = this.__data__;
    if (wn) {
      var a = e[t];
      return a === mn ? void 0 : a;
    }
    return In.call(e, t) ? e[t] : void 0;
  }
  var Mn = xn,
    Pn = it,
    jn = Object.prototype,
    En = jn.hasOwnProperty;
  function kn(t) {
    var e = this.__data__;
    return Pn ? e[t] !== void 0 : En.call(e, t);
  }
  var On = kn,
    Dn = it,
    Gn = '__lodash_hash_undefined__';
  function Fn(t, e) {
    var a = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (a[t] = Dn && e === void 0 ? Gn : e), this;
  }
  var Bn = Fn,
    Un = Tn,
    Ln = Sn,
    Nn = Mn,
    Kn = On,
    Rn = Bn;
  function L(t) {
    var e = -1,
      a = t == null ? 0 : t.length;
    for (this.clear(); ++e < a; ) {
      var o = t[e];
      this.set(o[0], o[1]);
    }
  }
  (L.prototype.clear = Un),
    (L.prototype.delete = Ln),
    (L.prototype.get = Nn),
    (L.prototype.has = Kn),
    (L.prototype.set = Rn);
  var Hn = L,
    lr = Hn,
    Vn = ot,
    zn = mt;
  function qn() {
    (this.size = 0), (this.__data__ = { hash: new lr(), map: new (zn || Vn)(), string: new lr() });
  }
  var Wn = qn;
  function Jn(t) {
    var e = typeof t;
    return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean' ? t !== '__proto__' : t === null;
  }
  var Yn = Jn,
    Xn = Yn;
  function Zn(t, e) {
    var a = t.__data__;
    return Xn(e) ? a[typeof e == 'string' ? 'string' : 'hash'] : a.map;
  }
  var ct = Zn,
    Qn = ct;
  function to(t) {
    var e = Qn(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  var ro = to,
    eo = ct;
  function ao(t) {
    return eo(this, t).get(t);
  }
  var no = ao,
    oo = ct;
  function so(t) {
    return oo(this, t).has(t);
  }
  var io = so,
    co = ct;
  function uo(t, e) {
    var a = co(this, t),
      o = a.size;
    return a.set(t, e), (this.size += a.size == o ? 0 : 1), this;
  }
  var fo = uo,
    lo = Wn,
    po = ro,
    go = no,
    ho = io,
    yo = fo;
  function N(t) {
    var e = -1,
      a = t == null ? 0 : t.length;
    for (this.clear(); ++e < a; ) {
      var o = t[e];
      this.set(o[0], o[1]);
    }
  }
  (N.prototype.clear = lo),
    (N.prototype.delete = po),
    (N.prototype.get = go),
    (N.prototype.has = ho),
    (N.prototype.set = yo);
  var vo = N,
    _o = ot,
    $o = mt,
    bo = vo,
    To = 200;
  function Ao(t, e) {
    var a = this.__data__;
    if (a instanceof _o) {
      var o = a.__data__;
      if (!$o || o.length < To - 1) return o.push([t, e]), (this.size = ++a.size), this;
      a = this.__data__ = new bo(o);
    }
    return a.set(t, e), (this.size = a.size), this;
  }
  var So = Ao,
    wo = ot,
    mo = ca,
    Co = fa,
    Io = pa,
    xo = ha,
    Mo = So;
  function K(t) {
    var e = (this.__data__ = new wo(t));
    this.size = e.size;
  }
  (K.prototype.clear = mo),
    (K.prototype.delete = Co),
    (K.prototype.get = Io),
    (K.prototype.has = xo),
    (K.prototype.set = Mo);
  var Po = K;
  function jo(t, e) {
    for (var a = -1, o = t == null ? 0 : t.length; ++a < o && e(t[a], a, t) !== !1; );
    return t;
  }
  var Eo = jo,
    ko = O,
    Oo = (function () {
      try {
        var t = ko(Object, 'defineProperty');
        return t({}, '', {}), t;
      } catch {}
    })(),
    Do = Oo,
    pr = Do;
  function Go(t, e, a) {
    e == '__proto__' && pr ? pr(t, e, { configurable: !0, enumerable: !0, value: a, writable: !0 }) : (t[e] = a);
  }
  var gr = Go,
    Fo = gr,
    Bo = rr,
    Uo = Object.prototype,
    Lo = Uo.hasOwnProperty;
  function No(t, e, a) {
    var o = t[e];
    (!(Lo.call(t, e) && Bo(o, a)) || (a === void 0 && !(e in t))) && Fo(t, e, a);
  }
  var hr = No,
    Ko = hr,
    Ro = gr;
  function Ho(t, e, a, o) {
    var u = !a;
    a || (a = {});
    for (var l = -1, i = e.length; ++l < i; ) {
      var p = e[l],
        g = o ? o(a[p], t[p], p, a, t) : void 0;
      g === void 0 && (g = t[p]), u ? Ro(a, p, g) : Ko(a, p, g);
    }
    return a;
  }
  var ut = Ho;
  function Vo(t, e) {
    for (var a = -1, o = Array(t); ++a < t; ) o[a] = e(a);
    return o;
  }
  var zo = Vo;
  function qo(t) {
    return t != null && typeof t == 'object';
  }
  var X = qo,
    Wo = st,
    Jo = X,
    Yo = '[object Arguments]';
  function Xo(t) {
    return Jo(t) && Wo(t) == Yo;
  }
  var Zo = Xo,
    yr = Zo,
    Qo = X,
    vr = Object.prototype,
    ts = vr.hasOwnProperty,
    rs = vr.propertyIsEnumerable,
    es = yr(
      (function () {
        return arguments;
      })(),
    )
      ? yr
      : function (t) {
          return Qo(t) && ts.call(t, 'callee') && !rs.call(t, 'callee');
        },
    as = es,
    ns = Array.isArray,
    Ct = ns,
    ft = { exports: {} };
  function os() {
    return !1;
  }
  var ss = os;
  ft.exports,
    (function (t, e) {
      var a = m,
        o = ss,
        u = e && !e.nodeType && e,
        l = u && !0 && t && !t.nodeType && t,
        i = l && l.exports === u,
        p = i ? a.Buffer : void 0,
        g = p ? p.isBuffer : void 0,
        f = g || o;
      t.exports = f;
    })(ft, ft.exports);
  var dr = ft.exports,
    is = 9007199254740991,
    cs = /^(?:0|[1-9]\d*)$/;
  function us(t, e) {
    var a = typeof t;
    return (e = e ?? is), !!e && (a == 'number' || (a != 'symbol' && cs.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  var fs = us,
    ls = 9007199254740991;
  function ps(t) {
    return typeof t == 'number' && t > -1 && t % 1 == 0 && t <= ls;
  }
  var _r = ps,
    gs = st,
    hs = _r,
    ys = X,
    vs = '[object Arguments]',
    ds = '[object Array]',
    _s = '[object Boolean]',
    $s = '[object Date]',
    bs = '[object Error]',
    Ts = '[object Function]',
    As = '[object Map]',
    Ss = '[object Number]',
    ws = '[object Object]',
    ms = '[object RegExp]',
    Cs = '[object Set]',
    Is = '[object String]',
    xs = '[object WeakMap]',
    Ms = '[object ArrayBuffer]',
    Ps = '[object DataView]',
    js = '[object Float32Array]',
    Es = '[object Float64Array]',
    ks = '[object Int8Array]',
    Os = '[object Int16Array]',
    Ds = '[object Int32Array]',
    Gs = '[object Uint8Array]',
    Fs = '[object Uint8ClampedArray]',
    Bs = '[object Uint16Array]',
    Us = '[object Uint32Array]',
    v = {};
  (v[js] = v[Es] = v[ks] = v[Os] = v[Ds] = v[Gs] = v[Fs] = v[Bs] = v[Us] = !0),
    (v[vs] =
      v[ds] =
      v[Ms] =
      v[_s] =
      v[Ps] =
      v[$s] =
      v[bs] =
      v[Ts] =
      v[As] =
      v[Ss] =
      v[ws] =
      v[ms] =
      v[Cs] =
      v[Is] =
      v[xs] =
        !1);
  function Ls(t) {
    return ys(t) && hs(t.length) && !!v[gs(t)];
  }
  var Ns = Ls;
  function Ks(t) {
    return function (e) {
      return t(e);
    };
  }
  var It = Ks,
    lt = { exports: {} };
  lt.exports,
    (function (t, e) {
      var a = er,
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
    })(lt, lt.exports);
  var xt = lt.exports,
    Rs = Ns,
    Hs = It,
    $r = xt,
    br = $r && $r.isTypedArray,
    Vs = br ? Hs(br) : Rs,
    zs = Vs,
    qs = zo,
    Ws = as,
    Js = Ct,
    Ys = dr,
    Xs = fs,
    Zs = zs,
    Qs = Object.prototype,
    ti = Qs.hasOwnProperty;
  function ri(t, e) {
    var a = Js(t),
      o = !a && Ws(t),
      u = !a && !o && Ys(t),
      l = !a && !o && !u && Zs(t),
      i = a || o || u || l,
      p = i ? qs(t.length, String) : [],
      g = p.length;
    for (var f in t)
      (e || ti.call(t, f)) &&
        !(
          i &&
          (f == 'length' ||
            (u && (f == 'offset' || f == 'parent')) ||
            (l && (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) ||
            Xs(f, g))
        ) &&
        p.push(f);
    return p;
  }
  var Tr = ri,
    ei = Object.prototype;
  function ai(t) {
    var e = t && t.constructor,
      a = (typeof e == 'function' && e.prototype) || ei;
    return t === a;
  }
  var Mt = ai;
  function ni(t, e) {
    return function (a) {
      return t(e(a));
    };
  }
  var Ar = ni,
    oi = Ar,
    si = oi(Object.keys, Object),
    ii = si,
    ci = Mt,
    ui = ii,
    fi = Object.prototype,
    li = fi.hasOwnProperty;
  function pi(t) {
    if (!ci(t)) return ui(t);
    var e = [];
    for (var a in Object(t)) li.call(t, a) && a != 'constructor' && e.push(a);
    return e;
  }
  var gi = pi,
    hi = ir,
    yi = _r;
  function vi(t) {
    return t != null && yi(t.length) && !hi(t);
  }
  var Sr = vi,
    di = Tr,
    _i = gi,
    $i = Sr;
  function bi(t) {
    return $i(t) ? di(t) : _i(t);
  }
  var Pt = bi,
    Ti = ut,
    Ai = Pt;
  function Si(t, e) {
    return t && Ti(e, Ai(e), t);
  }
  var wi = Si;
  function mi(t) {
    var e = [];
    if (t != null) for (var a in Object(t)) e.push(a);
    return e;
  }
  var Ci = mi,
    Ii = Y,
    xi = Mt,
    Mi = Ci,
    Pi = Object.prototype,
    ji = Pi.hasOwnProperty;
  function Ei(t) {
    if (!Ii(t)) return Mi(t);
    var e = xi(t),
      a = [];
    for (var o in t) (o == 'constructor' && (e || !ji.call(t, o))) || a.push(o);
    return a;
  }
  var ki = Ei,
    Oi = Tr,
    Di = ki,
    Gi = Sr;
  function Fi(t) {
    return Gi(t) ? Oi(t, !0) : Di(t);
  }
  var jt = Fi,
    Bi = ut,
    Ui = jt;
  function Li(t, e) {
    return t && Bi(e, Ui(e), t);
  }
  var Ni = Li,
    pt = { exports: {} };
  pt.exports,
    (function (t, e) {
      var a = m,
        o = e && !e.nodeType && e,
        u = o && !0 && t && !t.nodeType && t,
        l = u && u.exports === o,
        i = l ? a.Buffer : void 0,
        p = i ? i.allocUnsafe : void 0;
      function g(f, d) {
        if (d) return f.slice();
        var A = f.length,
          C = p ? p(A) : new f.constructor(A);
        return f.copy(C), C;
      }
      t.exports = g;
    })(pt, pt.exports);
  var Ki = pt.exports;
  function Ri(t, e) {
    var a = -1,
      o = t.length;
    for (e || (e = Array(o)); ++a < o; ) e[a] = t[a];
    return e;
  }
  var Hi = Ri;
  function Vi(t, e) {
    for (var a = -1, o = t == null ? 0 : t.length, u = 0, l = []; ++a < o; ) {
      var i = t[a];
      e(i, a, t) && (l[u++] = i);
    }
    return l;
  }
  var zi = Vi;
  function qi() {
    return [];
  }
  var wr = qi,
    Wi = zi,
    Ji = wr,
    Yi = Object.prototype,
    Xi = Yi.propertyIsEnumerable,
    mr = Object.getOwnPropertySymbols,
    Zi = mr
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              Wi(mr(t), function (e) {
                return Xi.call(t, e);
              }));
        }
      : Ji,
    Et = Zi,
    Qi = ut,
    tc = Et;
  function rc(t, e) {
    return Qi(t, tc(t), e);
  }
  var ec = rc;
  function ac(t, e) {
    for (var a = -1, o = e.length, u = t.length; ++a < o; ) t[u + a] = e[a];
    return t;
  }
  var Cr = ac,
    nc = Ar,
    oc = nc(Object.getPrototypeOf, Object),
    Ir = oc,
    sc = Cr,
    ic = Ir,
    cc = Et,
    uc = wr,
    fc = Object.getOwnPropertySymbols,
    lc = fc
      ? function (t) {
          for (var e = []; t; ) sc(e, cc(t)), (t = ic(t));
          return e;
        }
      : uc,
    xr = lc,
    pc = ut,
    gc = xr;
  function hc(t, e) {
    return pc(t, gc(t), e);
  }
  var yc = hc,
    vc = Cr,
    dc = Ct;
  function _c(t, e, a) {
    var o = e(t);
    return dc(t) ? o : vc(o, a(t));
  }
  var Mr = _c,
    $c = Mr,
    bc = Et,
    Tc = Pt;
  function Ac(t) {
    return $c(t, Tc, bc);
  }
  var Sc = Ac,
    wc = Mr,
    mc = xr,
    Cc = jt;
  function Ic(t) {
    return wc(t, Cc, mc);
  }
  var xc = Ic,
    Mc = O,
    Pc = m,
    jc = Mc(Pc, 'DataView'),
    Ec = jc,
    kc = O,
    Oc = m,
    Dc = kc(Oc, 'Promise'),
    Gc = Dc,
    Fc = O,
    Bc = m,
    Uc = Fc(Bc, 'Set'),
    Lc = Uc,
    Nc = O,
    Kc = m,
    Rc = Nc(Kc, 'WeakMap'),
    Hc = Rc,
    kt = Ec,
    Ot = mt,
    Dt = Gc,
    Gt = Lc,
    Ft = Hc,
    Pr = st,
    R = ur,
    jr = '[object Map]',
    Vc = '[object Object]',
    Er = '[object Promise]',
    kr = '[object Set]',
    Or = '[object WeakMap]',
    Dr = '[object DataView]',
    zc = R(kt),
    qc = R(Ot),
    Wc = R(Dt),
    Jc = R(Gt),
    Yc = R(Ft),
    D = Pr;
  ((kt && D(new kt(new ArrayBuffer(1))) != Dr) ||
    (Ot && D(new Ot()) != jr) ||
    (Dt && D(Dt.resolve()) != Er) ||
    (Gt && D(new Gt()) != kr) ||
    (Ft && D(new Ft()) != Or)) &&
    (D = function (t) {
      var e = Pr(t),
        a = e == Vc ? t.constructor : void 0,
        o = a ? R(a) : '';
      if (o)
        switch (o) {
          case zc:
            return Dr;
          case qc:
            return jr;
          case Wc:
            return Er;
          case Jc:
            return kr;
          case Yc:
            return Or;
        }
      return e;
    });
  var Bt = D,
    Xc = Object.prototype,
    Zc = Xc.hasOwnProperty;
  function Qc(t) {
    var e = t.length,
      a = new t.constructor(e);
    return e && typeof t[0] == 'string' && Zc.call(t, 'index') && ((a.index = t.index), (a.input = t.input)), a;
  }
  var tu = Qc,
    ru = m,
    eu = ru.Uint8Array,
    au = eu,
    Gr = au;
  function nu(t) {
    var e = new t.constructor(t.byteLength);
    return new Gr(e).set(new Gr(t)), e;
  }
  var Ut = nu,
    ou = Ut;
  function su(t, e) {
    var a = e ? ou(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  var iu = su,
    cu = /\w*$/;
  function uu(t) {
    var e = new t.constructor(t.source, cu.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var fu = uu,
    Fr = St,
    Br = Fr ? Fr.prototype : void 0,
    Ur = Br ? Br.valueOf : void 0;
  function lu(t) {
    return Ur ? Object(Ur.call(t)) : {};
  }
  var pu = lu,
    gu = Ut;
  function hu(t, e) {
    var a = e ? gu(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  var yu = hu,
    vu = Ut,
    du = iu,
    _u = fu,
    $u = pu,
    bu = yu,
    Tu = '[object Boolean]',
    Au = '[object Date]',
    Su = '[object Map]',
    wu = '[object Number]',
    mu = '[object RegExp]',
    Cu = '[object Set]',
    Iu = '[object String]',
    xu = '[object Symbol]',
    Mu = '[object ArrayBuffer]',
    Pu = '[object DataView]',
    ju = '[object Float32Array]',
    Eu = '[object Float64Array]',
    ku = '[object Int8Array]',
    Ou = '[object Int16Array]',
    Du = '[object Int32Array]',
    Gu = '[object Uint8Array]',
    Fu = '[object Uint8ClampedArray]',
    Bu = '[object Uint16Array]',
    Uu = '[object Uint32Array]';
  function Lu(t, e, a) {
    var o = t.constructor;
    switch (e) {
      case Mu:
        return vu(t);
      case Tu:
      case Au:
        return new o(+t);
      case Pu:
        return du(t, a);
      case ju:
      case Eu:
      case ku:
      case Ou:
      case Du:
      case Gu:
      case Fu:
      case Bu:
      case Uu:
        return bu(t, a);
      case Su:
        return new o();
      case wu:
      case Iu:
        return new o(t);
      case mu:
        return _u(t);
      case Cu:
        return new o();
      case xu:
        return $u(t);
    }
  }
  var Nu = Lu,
    Ku = Y,
    Lr = Object.create,
    Ru = (function () {
      function t() {}
      return function (e) {
        if (!Ku(e)) return {};
        if (Lr) return Lr(e);
        t.prototype = e;
        var a = new t();
        return (t.prototype = void 0), a;
      };
    })(),
    Hu = Ru,
    Vu = Hu,
    zu = Ir,
    qu = Mt;
  function Wu(t) {
    return typeof t.constructor == 'function' && !qu(t) ? Vu(zu(t)) : {};
  }
  var Ju = Wu,
    Yu = Bt,
    Xu = X,
    Zu = '[object Map]';
  function Qu(t) {
    return Xu(t) && Yu(t) == Zu;
  }
  var tf = Qu,
    rf = tf,
    ef = It,
    Nr = xt,
    Kr = Nr && Nr.isMap,
    af = Kr ? ef(Kr) : rf,
    nf = af,
    of = Bt,
    sf = X,
    cf = '[object Set]';
  function uf(t) {
    return sf(t) && of(t) == cf;
  }
  var ff = uf,
    lf = ff,
    pf = It,
    Rr = xt,
    Hr = Rr && Rr.isSet,
    gf = Hr ? pf(Hr) : lf,
    hf = gf,
    yf = Po,
    vf = Eo,
    df = hr,
    _f = wi,
    $f = Ni,
    bf = Ki,
    Tf = Hi,
    Af = ec,
    Sf = yc,
    wf = Sc,
    mf = xc,
    Cf = Bt,
    If = tu,
    xf = Nu,
    Mf = Ju,
    Pf = Ct,
    jf = dr,
    Ef = nf,
    kf = Y,
    Of = hf,
    Df = Pt,
    Gf = jt,
    Ff = 1,
    Bf = 2,
    Uf = 4,
    Vr = '[object Arguments]',
    Lf = '[object Array]',
    Nf = '[object Boolean]',
    Kf = '[object Date]',
    Rf = '[object Error]',
    zr = '[object Function]',
    Hf = '[object GeneratorFunction]',
    Vf = '[object Map]',
    zf = '[object Number]',
    qr = '[object Object]',
    qf = '[object RegExp]',
    Wf = '[object Set]',
    Jf = '[object String]',
    Yf = '[object Symbol]',
    Xf = '[object WeakMap]',
    Zf = '[object ArrayBuffer]',
    Qf = '[object DataView]',
    tl = '[object Float32Array]',
    rl = '[object Float64Array]',
    el = '[object Int8Array]',
    al = '[object Int16Array]',
    nl = '[object Int32Array]',
    ol = '[object Uint8Array]',
    sl = '[object Uint8ClampedArray]',
    il = '[object Uint16Array]',
    cl = '[object Uint32Array]',
    h = {};
  (h[Vr] =
    h[Lf] =
    h[Zf] =
    h[Qf] =
    h[Nf] =
    h[Kf] =
    h[tl] =
    h[rl] =
    h[el] =
    h[al] =
    h[nl] =
    h[Vf] =
    h[zf] =
    h[qr] =
    h[qf] =
    h[Wf] =
    h[Jf] =
    h[Yf] =
    h[ol] =
    h[sl] =
    h[il] =
    h[cl] =
      !0),
    (h[Rf] = h[zr] = h[Xf] = !1);
  function gt(t, e, a, o, u, l) {
    var i,
      p = e & Ff,
      g = e & Bf,
      f = e & Uf;
    if ((a && (i = u ? a(t, o, u, l) : a(t)), i !== void 0)) return i;
    if (!kf(t)) return t;
    var d = Pf(t);
    if (d) {
      if (((i = If(t)), !p)) return Tf(t, i);
    } else {
      var A = Cf(t),
        C = A == zr || A == Hf;
      if (jf(t)) return bf(t, p);
      if (A == qr || A == Vr || (C && !u)) {
        if (((i = g || C ? {} : Mf(t)), !p)) return g ? Sf(t, $f(i, t)) : Af(t, _f(i, t));
      } else {
        if (!h[A]) return u ? t : {};
        i = xf(t, A, p);
      }
    }
    l || (l = new yf());
    var Z = l.get(t);
    if (Z) return Z;
    l.set(t, i),
      Of(t)
        ? t.forEach(function (w) {
            i.add(gt(w, e, a, w, t, l));
          })
        : Ef(t) &&
          t.forEach(function (w, S) {
            i.set(S, gt(w, e, a, S, t, l));
          });
    var Q = f ? (g ? mf : wf) : g ? Gf : Df,
      tt = d ? void 0 : Q(t);
    return (
      vf(tt || t, function (w, S) {
        tt && ((S = w), (w = t[S])), df(i, S, gt(w, e, a, S, t, l));
      }),
      i
    );
  }
  var ul = gt,
    fl = ul,
    ll = 1,
    pl = 4;
  function gl(t) {
    return fl(t, ll | pl);
  }
  var hl = gl;
  const yl = tr(hl),
    Wr = (t, e, a = !0) => {
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
      return u(t, a ? yl(e) : e);
    },
    vl = (t = [], e, a = !0) => {
      const o = [];
      return (
        t.forEach((u) => {
          o.push(I(u));
        }),
        Wr(o, a ? At(e) : e)
      );
    },
    dl = (t, e, a = !0) => {
      const o = I(t);
      if (!o) throw new Error('Proper colors must be used for target');
      function u(l, i) {
        if (i && i.s && Array.isArray(i.s) && i.s.length === 4) i.s = [...l];
        else if (i && i.c && i.c.k) Array.isArray(i.c.k) && typeof i.c.k[0] != 'number' ? u(l, i.c.k) : (i.c.k = l);
        else for (const p in i) typeof i[p] == 'object' && u(l, i[p]);
        return i;
      }
      return u(o, a ? At(e) : e);
    },
    x = (t) => Math.round(t * 1e3) / 1e3,
    H = 0.003,
    Jr = (t, e, a, o = !0) => {
      const u = I(t),
        l = I(e);
      if (!u || !l) throw new Error('Proper colors must be used for both source and target');
      function i(p, g, f) {
        if (f && f.s && Array.isArray(f.s) && f.s.length === 4)
          p[0] === f.s[0] && p[1] === f.s[1] && p[2] === f.s[2] && (f.s = [...g]);
        else if (f && f.c && f.c.k)
          Array.isArray(f.c.k) && typeof f.c.k[0] != 'number'
            ? i(p, g, f.c.k)
            : Math.abs(p[0] - x(f.c.k[0])) < H &&
              Math.abs(p[1] - x(f.c.k[1])) < H &&
              Math.abs(p[2] - x(f.c.k[2])) < H &&
              (f.c.k = g);
        else if (f.g && f.g.k && f.g.k.k && f.g.k.k.length % 4 === 0)
          for (let d = 0; d < f.g.k.k.length; d += 4)
            Math.abs(x(p[0]) - x(f.g.k.k[d + 1])) < H &&
              Math.abs(x(p[1]) - x(f.g.k.k[d + 2])) < H &&
              Math.abs(x(p[2]) - x(f.g.k.k[d + 3])) < H &&
              ((f.g.k.k[d + 1] = g[0]), (f.g.k.k[d + 2] = g[1]), (f.g.k.k[d + 3] = g[2]), (f.g.k.k[d + 4] = g[3]));
        else for (const d in f) typeof f[d] == 'object' && i(p, g, f[d]);
        return f;
      }
      return i(u, l, o ? At(a) : a);
    },
    _l = (t, e) => t.reduce((a, [o, u]) => Jr(o, u, a), e);
  ($.colorify = vl),
    ($.convertColorToLottieColor = I),
    ($.convertLottieColorToHex = ke),
    ($.convertLottieColorToRgb = Zt),
    ($.convertLottieColorToRgba = Tt),
    ($.flatten = dl),
    ($.getColors = Qt),
    ($.getUniqueColors = Oe),
    ($.modifyColors = Wr),
    ($.replaceColor = Jr),
    ($.replaceColors = _l),
    Object.defineProperty($, Symbol.toStringTag, { value: 'Module' });
});
