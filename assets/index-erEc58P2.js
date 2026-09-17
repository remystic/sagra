const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./leaflet-src-Bv4pEK9w.js",
      "./rolldown-runtime-CbXtAM7H.js",
      "./leaflet-vh-t_kPv.css",
    ]),
) => i.map((i) => d[i]);
/* Mappa dei servizi della 44ª Sagra della Pesca IGP di Leonforte */
import { n as e } from "./rolldown-runtime-CbXtAM7H.js";
import {
  C as t,
  D as n,
  E as r,
  S as i,
  T as a,
  _ as o,
  a as s,
  b as c,
  c as l,
  d as u,
  f as d,
  g as ee,
  h as f,
  i as p,
  l as te,
  m,
  n as h,
  o as g,
  p as ne,
  r as _,
  s as re,
  t as v,
  u as y,
  v as b,
  w as x,
  x as ie,
  y as ae,
} from "./icons-DL6K4_8e.js";
import { n as S, t as oe } from "./react-vendor-CWmF648Z.js";
var C = S(),
  w = e(n(), 1),
  T = Object.defineProperty,
  E = (e, t) => T(e, `name`, { value: t, configurable: !0 });
function D(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
E(D, `setRef`);
function O(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = D(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : D(e[t], null);
        }
      };
  };
}
E(O, `composeRefs`);
function k(...e) {
  return w.useCallback(O(...e), e);
}
E(k, `useComposedRefs`);
var se = Object.defineProperty,
  A = (e, t) => se(e, `name`, { value: t, configurable: !0 });
function j(e) {
  let t = w.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    (B(r) && typeof le == `function` && (r = le(r._payload)),
      w.Children.forEach(r, (e) => {
        if (R(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (B(n) && typeof le == `function` && (n = le(n._payload)),
            (a = F(t, n)),
            s.push(a?.props?.children));
        } else s.push(e);
      }),
      a
        ? (a = w.cloneElement(a, void 0, s))
        : !o && w.Children.count(r) === 1 && w.isValidElement(r) && (a = r));
    let c = a ? L(a) : void 0,
      l = k(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? ce(e) : H(e));
      return r;
    }
    let u = I(i, a.props ?? {});
    return (a.type !== w.Fragment && (u.ref = n ? l : c), w.cloneElement(a, u));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
A(j, `createSlot`);
var M = j(`Slot`),
  N = Symbol.for(`radix.slottable`);
function P(e) {
  let t = A((e) => (`child` in e ? e.children(e.child) : e.children), `Slottable`);
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = N), t);
}
A(P, `createSlottable`);
var F = A((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return w.isValidElement(t)
      ? w.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return w.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function I(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
A(I, `mergeProps`);
function L(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
A(L, `getElementRef`);
function R(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === N
  );
}
A(R, `isSlottable`);
var z = Symbol.for(`react.lazy`);
function B(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === z &&
    `_payload` in e &&
    V(e._payload)
  );
}
A(B, `isLazyComponent`);
function V(e) {
  return typeof e == `object` && !!e && `then` in e;
}
A(V, `isPromiseLike`);
var H = A(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  ce = A(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  le = w.use;
function ue(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = ue(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function de() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = ue(e)) && (r && (r += ` `), (r += t));
  return r;
}
var fe = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  pe = de,
  me = (e, t) => (n) => {
    if (t?.variants == null) return pe(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = fe(t) || fe(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return pe(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n) ? n.includes({ ...i, ...o }[t]) : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  he = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  ge = (e, t) => ({ classGroupId: e, validator: t }),
  _e = (e = new Map(), t = null, n) => ({ nextPart: e, validators: t, classGroupId: n }),
  ve = `-`,
  ye = [],
  be = `arbitrary..`,
  xe = (e) => {
    let t = we(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Ce(e);
        let n = e.split(ve);
        return Se(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? he(i, t) : t) : i || ye;
        }
        return n[e] || ye;
      },
    };
  },
  Se = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = Se(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(ve) : e.slice(t).join(ve),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Ce = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? be + r : void 0;
        })(),
  we = (e) => {
    let { theme: t, classGroups: n } = e;
    return Te(n, t);
  },
  Te = (e, t) => {
    let n = _e();
    for (let r in e) {
      let i = e[r];
      Ee(i, n, r, t);
    }
    return n;
  },
  Ee = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      De(i, t, n, r);
    }
  },
  De = (e, t, n, r) => {
    if (typeof e == `string`) {
      Oe(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      ke(e, t, n, r);
      return;
    }
    Ae(e, t, n, r);
  },
  Oe = (e, t, n) => {
    let r = e === `` ? t : je(t, e);
    r.classGroupId = n;
  },
  ke = (e, t, n, r) => {
    if (Me(e)) {
      Ee(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(ge(n, e)));
  },
  Ae = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Ee(o, je(t, a), n, r);
    }
  },
  je = (e, t) => {
    let n = e,
      r = t.split(ve),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = _e()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  Me = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Ne = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Pe = `!`,
  Fe = `:`,
  Ie = [],
  Le = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Re = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Fe) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Pe)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Pe) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Le(t, l, c, u);
      };
    if (t) {
      let e = t + Fe,
        n = r;
      r = (t) => (t.startsWith(e) ? n(t.slice(e.length)) : Le(Ie, !1, t, void 0, !0));
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  ze = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a)) : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  Be = (e) => ({
    cache: Ne(e.cacheSize),
    parseClassName: Re(e),
    sortModifiers: ze(e),
    postfixLookupClassGroupIds: Ve(e),
    ...xe(e),
  }),
  Ve = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  He = /\s+/,
  Ue = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(He),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: ee,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let te = !!p,
        m;
      if (te) {
        m = r(f.substring(0, p));
        let e = m && o[m] ? r(f) : void 0;
        e && e !== m && ((m = e), (te = !1));
      } else m = r(f);
      if (!m) {
        if (!te) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((m = r(f)), !m)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        te = !1;
      }
      let h = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        g = ee ? h + Pe : h,
        ne = g + m;
      if (s.indexOf(ne) > -1) continue;
      s.push(ne);
      let _ = i(m, te);
      for (let e = 0; e < _.length; ++e) {
        let t = _[e];
        s.push(g + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  We = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;) (n = e[t++]) && (r = Ge(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  Ge = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++) e[r] && (t = Ge(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  Ke = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = Be(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = Ue(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(We(...e)));
  },
  qe = [],
  U = (e) => {
    let t = (t) => t[e] || qe;
    return ((t.isThemeGetter = !0), t);
  },
  Je = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ye = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Xe = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Ze = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Qe =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  $e = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  et = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  tt =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  W = (e) => Xe.test(e),
  G = (e) => !!e && !Number.isNaN(Number(e)),
  K = (e) => !!e && Number.isInteger(Number(e)),
  nt = (e) => e.endsWith(`%`) && G(e.slice(0, -1)),
  q = (e) => Ze.test(e),
  rt = () => !0,
  it = (e) => Qe.test(e) && !$e.test(e),
  at = () => !1,
  ot = (e) => et.test(e),
  st = (e) => tt.test(e),
  ct = (e) => !J(e) && !Y(e),
  lt = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  ut = (e) => X(e, Ot, at),
  J = (e) => Je.test(e),
  dt = (e) => X(e, kt, it),
  ft = (e) => X(e, At, G),
  pt = (e) => X(e, Mt, rt),
  mt = (e) => X(e, jt, at),
  ht = (e) => X(e, Et, at),
  gt = (e) => X(e, Dt, st),
  _t = (e) => X(e, Nt, ot),
  Y = (e) => Ye.test(e),
  vt = (e) => Tt(e, kt),
  yt = (e) => Tt(e, jt),
  bt = (e) => Tt(e, Et),
  xt = (e) => Tt(e, Ot),
  St = (e) => Tt(e, Dt),
  Ct = (e) => Tt(e, Nt, !0),
  wt = (e) => Tt(e, Mt, !0),
  X = (e, t, n) => {
    let r = Je.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Tt = (e, t, n = !1) => {
    let r = Ye.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Et = (e) => e === `position` || e === `percentage`,
  Dt = (e) => e === `image` || e === `url`,
  Ot = (e) => e === `length` || e === `size` || e === `bg-size`,
  kt = (e) => e === `length`,
  At = (e) => e === `number`,
  jt = (e) => e === `family-name`,
  Mt = (e) => e === `number` || e === `weight`,
  Nt = (e) => e === `shadow`,
  Pt = Ke(() => {
    let e = U(`color`),
      t = U(`font`),
      n = U(`text`),
      r = U(`font-weight`),
      i = U(`tracking`),
      a = U(`leading`),
      o = U(`breakpoint`),
      s = U(`container`),
      c = U(`spacing`),
      l = U(`radius`),
      u = U(`shadow`),
      d = U(`inset-shadow`),
      ee = U(`text-shadow`),
      f = U(`drop-shadow`),
      p = U(`blur`),
      te = U(`perspective`),
      m = U(`aspect`),
      h = U(`ease`),
      g = U(`animate`),
      ne = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
      _ = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      re = () => [..._(), Y, J],
      v = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      y = () => [`auto`, `contain`, `none`],
      b = () => [Y, J, c],
      x = () => [W, `full`, `auto`, ...b()],
      ie = () => [K, `none`, `subgrid`, Y, J],
      ae = () => [`auto`, { span: [`full`, K, Y, J] }, K, Y, J],
      S = () => [K, `auto`, Y, J],
      oe = () => [`auto`, `min`, `max`, `fr`, Y, J],
      C = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      w = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`],
      T = () => [`auto`, ...b()],
      E = () => [
        W,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...b(),
      ],
      D = () => [W, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...b()],
      O = () => [W, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...b()],
      k = () => [e, Y, J],
      se = () => [..._(), bt, ht, { position: [Y, J] }],
      A = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      j = () => [`auto`, `cover`, `contain`, xt, ut, { size: [Y, J] }],
      M = () => [nt, vt, dt],
      N = () => [``, `none`, `full`, l, Y, J],
      P = () => [``, G, vt, dt],
      F = () => [`solid`, `dashed`, `dotted`, `double`],
      I = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      L = () => [G, nt, bt, ht],
      R = () => [``, `none`, p, Y, J],
      z = () => [`none`, G, Y, J],
      B = () => [`none`, G, Y, J],
      V = () => [G, Y, J],
      H = () => [W, `full`, ...b()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [q],
        breakpoint: [q],
        color: [rt],
        container: [q],
        "drop-shadow": [q],
        ease: [`in`, `out`, `in-out`],
        font: [ct],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [q],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
        radius: [q],
        shadow: [q],
        spacing: [`px`, G],
        text: [q],
        "text-shadow": [q],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, W, J, Y, m] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, Y, J] }],
        "container-named": [lt],
        columns: [{ columns: [G, J, Y, s] }],
        "break-after": [{ "break-after": ne() }],
        "break-before": [{ "break-before": ne() }],
        "break-inside": [{ "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] }],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [{ object: [`contain`, `cover`, `fill`, `none`, `scale-down`] }],
        "object-position": [{ object: re() }],
        overflow: [{ overflow: v() }],
        "overflow-x": [{ "overflow-x": v() }],
        "overflow-y": [{ "overflow-y": v() }],
        overscroll: [{ overscroll: y() }],
        "overscroll-x": [{ "overscroll-x": y() }],
        "overscroll-y": [{ "overscroll-y": y() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: x() }],
        "inset-x": [{ "inset-x": x() }],
        "inset-y": [{ "inset-y": x() }],
        start: [{ "inset-s": x(), start: x() }],
        end: [{ "inset-e": x(), end: x() }],
        "inset-bs": [{ "inset-bs": x() }],
        "inset-be": [{ "inset-be": x() }],
        top: [{ top: x() }],
        right: [{ right: x() }],
        bottom: [{ bottom: x() }],
        left: [{ left: x() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [K, `auto`, Y, J] }],
        basis: [{ basis: [W, `full`, `auto`, s, ...b()] }],
        "flex-direction": [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [G, W, `auto`, `initial`, `none`, J] }],
        grow: [{ grow: [``, G, Y, J] }],
        shrink: [{ shrink: [``, G, Y, J] }],
        order: [{ order: [K, `first`, `last`, `none`, Y, J] }],
        "grid-cols": [{ "grid-cols": ie() }],
        "col-start-end": [{ col: ae() }],
        "col-start": [{ "col-start": S() }],
        "col-end": [{ "col-end": S() }],
        "grid-rows": [{ "grid-rows": ie() }],
        "row-start-end": [{ row: ae() }],
        "row-start": [{ "row-start": S() }],
        "row-end": [{ "row-end": S() }],
        "grid-flow": [{ "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] }],
        "auto-cols": [{ "auto-cols": oe() }],
        "auto-rows": [{ "auto-rows": oe() }],
        gap: [{ gap: b() }],
        "gap-x": [{ "gap-x": b() }],
        "gap-y": [{ "gap-y": b() }],
        "justify-content": [{ justify: [...C(), `normal`] }],
        "justify-items": [{ "justify-items": [...w(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...w()] }],
        "align-content": [{ content: [`normal`, ...C()] }],
        "align-items": [{ items: [...w(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...w(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": C() }],
        "place-items": [{ "place-items": [...w(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...w()] }],
        p: [{ p: b() }],
        px: [{ px: b() }],
        py: [{ py: b() }],
        ps: [{ ps: b() }],
        pe: [{ pe: b() }],
        pbs: [{ pbs: b() }],
        pbe: [{ pbe: b() }],
        pt: [{ pt: b() }],
        pr: [{ pr: b() }],
        pb: [{ pb: b() }],
        pl: [{ pl: b() }],
        m: [{ m: T() }],
        mx: [{ mx: T() }],
        my: [{ my: T() }],
        ms: [{ ms: T() }],
        me: [{ me: T() }],
        mbs: [{ mbs: T() }],
        mbe: [{ mbe: T() }],
        mt: [{ mt: T() }],
        mr: [{ mr: T() }],
        mb: [{ mb: T() }],
        ml: [{ ml: T() }],
        "space-x": [{ "space-x": b() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": b() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: E() }],
        "inline-size": [{ inline: [`auto`, ...D()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...D()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...D()] }],
        "block-size": [{ block: [`auto`, ...O()] }],
        "min-block-size": [{ "min-block": [`auto`, ...O()] }],
        "max-block-size": [{ "max-block": [`none`, ...O()] }],
        w: [{ w: [s, `screen`, ...E()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...E()] }],
        "max-w": [{ "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...E()] }],
        h: [{ h: [`screen`, `lh`, ...E()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...E()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...E()] }],
        "font-size": [{ text: [`base`, n, vt, dt] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, wt, pt] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              nt,
              J,
            ],
          },
        ],
        "font-family": [{ font: [yt, mt, t] }],
        "font-features": [{ "font-features": [J] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, Y, J] }],
        "line-clamp": [{ "line-clamp": [G, `none`, Y, ft] }],
        leading: [{ leading: [a, ...b()] }],
        "list-image": [{ "list-image": [`none`, Y, J] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, Y, J] }],
        "text-alignment": [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
        "text-decoration-style": [{ decoration: [...F(), `wavy`] }],
        "text-decoration-thickness": [{ decoration: [G, `from-font`, `auto`, Y, dt] }],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [G, `auto`, Y, J] }],
        "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: b() }],
        "tab-size": [{ tab: [K, Y, J] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              Y,
              J,
            ],
          },
        ],
        whitespace: [
          { whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, Y, J] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: se() }],
        "bg-repeat": [{ bg: A() }],
        "bg-size": [{ bg: j() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [{ to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, K, Y, J],
                radial: [``, Y, J],
                conic: [K, Y, J],
              },
              St,
              gt,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: M() }],
        "gradient-via-pos": [{ via: M() }],
        "gradient-to-pos": [{ to: M() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: N() }],
        "rounded-s": [{ "rounded-s": N() }],
        "rounded-e": [{ "rounded-e": N() }],
        "rounded-t": [{ "rounded-t": N() }],
        "rounded-r": [{ "rounded-r": N() }],
        "rounded-b": [{ "rounded-b": N() }],
        "rounded-l": [{ "rounded-l": N() }],
        "rounded-ss": [{ "rounded-ss": N() }],
        "rounded-se": [{ "rounded-se": N() }],
        "rounded-ee": [{ "rounded-ee": N() }],
        "rounded-es": [{ "rounded-es": N() }],
        "rounded-tl": [{ "rounded-tl": N() }],
        "rounded-tr": [{ "rounded-tr": N() }],
        "rounded-br": [{ "rounded-br": N() }],
        "rounded-bl": [{ "rounded-bl": N() }],
        "border-w": [{ border: P() }],
        "border-w-x": [{ "border-x": P() }],
        "border-w-y": [{ "border-y": P() }],
        "border-w-s": [{ "border-s": P() }],
        "border-w-e": [{ "border-e": P() }],
        "border-w-bs": [{ "border-bs": P() }],
        "border-w-be": [{ "border-be": P() }],
        "border-w-t": [{ "border-t": P() }],
        "border-w-r": [{ "border-r": P() }],
        "border-w-b": [{ "border-b": P() }],
        "border-w-l": [{ "border-l": P() }],
        "divide-x": [{ "divide-x": P() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": P() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...F(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...F(), `hidden`, `none`] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-bs": [{ "border-bs": k() }],
        "border-color-be": [{ "border-be": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...F(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [G, Y, J] }],
        "outline-w": [{ outline: [``, G, vt, dt] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: [``, `none`, u, Ct, _t] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Ct, _t] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: P() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [G, dt] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": P() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": [`none`, ee, Ct, _t] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [G, Y, J] }],
        "mix-blend": [{ "mix-blend": [...I(), `plus-darker`, `plus-lighter`] }],
        "bg-blend": [{ "bg-blend": I() }],
        "mask-clip": [
          { "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] },
          `mask-no-clip`,
        ],
        "mask-composite": [{ mask: [`add`, `subtract`, `intersect`, `exclude`] }],
        "mask-image-linear-pos": [{ "mask-linear": [G] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": L() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": L() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": L() }],
        "mask-image-t-to-pos": [{ "mask-t-to": L() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": L() }],
        "mask-image-r-to-pos": [{ "mask-r-to": L() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": L() }],
        "mask-image-b-to-pos": [{ "mask-b-to": L() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": L() }],
        "mask-image-l-to-pos": [{ "mask-l-to": L() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": L() }],
        "mask-image-x-to-pos": [{ "mask-x-to": L() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": L() }],
        "mask-image-y-to-pos": [{ "mask-y-to": L() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [Y, J] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": L() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": L() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          { "mask-radial": [{ closest: [`side`, `corner`], farthest: [`side`, `corner`] }] },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": _() }],
        "mask-image-conic-pos": [{ "mask-conic": [G] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": L() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": L() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          { "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] },
        ],
        "mask-position": [{ mask: se() }],
        "mask-repeat": [{ mask: A() }],
        "mask-size": [{ mask: j() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, Y, J] }],
        filter: [{ filter: [``, `none`, Y, J] }],
        blur: [{ blur: R() }],
        brightness: [{ brightness: [G, Y, J] }],
        contrast: [{ contrast: [G, Y, J] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, f, Ct, _t] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: [``, G, Y, J] }],
        "hue-rotate": [{ "hue-rotate": [G, Y, J] }],
        invert: [{ invert: [``, G, Y, J] }],
        saturate: [{ saturate: [G, Y, J] }],
        sepia: [{ sepia: [``, G, Y, J] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, Y, J] }],
        "backdrop-blur": [{ "backdrop-blur": R() }],
        "backdrop-brightness": [{ "backdrop-brightness": [G, Y, J] }],
        "backdrop-contrast": [{ "backdrop-contrast": [G, Y, J] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, G, Y, J] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [G, Y, J] }],
        "backdrop-invert": [{ "backdrop-invert": [``, G, Y, J] }],
        "backdrop-opacity": [{ "backdrop-opacity": [G, Y, J] }],
        "backdrop-saturate": [{ "backdrop-saturate": [G, Y, J] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, G, Y, J] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": b() }],
        "border-spacing-x": [{ "border-spacing-x": b() }],
        "border-spacing-y": [{ "border-spacing-y": b() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          { transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, Y, J] },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [G, `initial`, Y, J] }],
        ease: [{ ease: [`linear`, `initial`, h, Y, J] }],
        delay: [{ delay: [G, Y, J] }],
        animate: [{ animate: [`none`, g, Y, J] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [te, Y, J] }],
        "perspective-origin": [{ "perspective-origin": re() }],
        rotate: [{ rotate: z() }],
        "rotate-x": [{ "rotate-x": z() }],
        "rotate-y": [{ "rotate-y": z() }],
        "rotate-z": [{ "rotate-z": z() }],
        scale: [{ scale: B() }],
        "scale-x": [{ "scale-x": B() }],
        "scale-y": [{ "scale-y": B() }],
        "scale-z": [{ "scale-z": B() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: V() }],
        "skew-x": [{ "skew-x": V() }],
        "skew-y": [{ "skew-y": V() }],
        transform: [{ transform: [Y, J, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: re() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: H() }],
        "translate-x": [{ "translate-x": H() }],
        "translate-y": [{ "translate-y": H() }],
        "translate-z": [{ "translate-z": H() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [K, Y, J] }],
        accent: [{ accent: k() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          { scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`] },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              Y,
              J,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": k() }],
        "scrollbar-track-color": [{ "scrollbar-track": k() }],
        "scrollbar-gutter": [{ "scrollbar-gutter": [`auto`, `stable`, `both`] }],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": b() }],
        "scroll-mx": [{ "scroll-mx": b() }],
        "scroll-my": [{ "scroll-my": b() }],
        "scroll-ms": [{ "scroll-ms": b() }],
        "scroll-me": [{ "scroll-me": b() }],
        "scroll-mbs": [{ "scroll-mbs": b() }],
        "scroll-mbe": [{ "scroll-mbe": b() }],
        "scroll-mt": [{ "scroll-mt": b() }],
        "scroll-mr": [{ "scroll-mr": b() }],
        "scroll-mb": [{ "scroll-mb": b() }],
        "scroll-ml": [{ "scroll-ml": b() }],
        "scroll-p": [{ "scroll-p": b() }],
        "scroll-px": [{ "scroll-px": b() }],
        "scroll-py": [{ "scroll-py": b() }],
        "scroll-ps": [{ "scroll-ps": b() }],
        "scroll-pe": [{ "scroll-pe": b() }],
        "scroll-pbs": [{ "scroll-pbs": b() }],
        "scroll-pbe": [{ "scroll-pbe": b() }],
        "scroll-pt": [{ "scroll-pt": b() }],
        "scroll-pr": [{ "scroll-pr": b() }],
        "scroll-pb": [{ "scroll-pb": b() }],
        "scroll-pl": [{ "scroll-pl": b() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [{ "will-change": [`auto`, `scroll`, `contents`, `transform`, Y, J] }],
        fill: [{ fill: [`none`, ...k()] }],
        "stroke-w": [{ stroke: [G, vt, dt, ft] }],
        stroke: [{ stroke: [`none`, ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Z(...e) {
  return Pt(de(e));
}
function Ft(e, t) {
  return Lt(`${e},${t}`, !0, !0);
}
function It(e, t) {
  return `https://www.google.com/maps/search/?api=1&query=${e},${t}`;
}
function Lt(e, t = !1, n = !1) {
  let r = new URLSearchParams({ api: `1`, [t ? `destination` : `query`]: e });
  return (
    n && r.set(`travelmode`, `walking`),
    `https://www.google.com/maps/${t ? `dir` : `search`}/?${r}`
  );
}
function Rt(e) {
  return `tel:+39${e.replace(/\D/g, ``)}`;
}
function zt(e) {
  return e
    .normalize(`NFD`)
    .replace(/[\u0300-\u036f]/g, ``)
    .toLocaleLowerCase(`it`)
    .replace(/[^a-z0-9]+/g, ` `)
    .trim();
}
function Bt(e, t) {
  let n = ((t.lat - e.lat) * Math.PI) / 180,
    r = ((t.lng - e.lng) * Math.PI) / 180,
    i = (e.lat * Math.PI) / 180,
    a = (t.lat * Math.PI) / 180,
    o = Math.sin(n / 2) ** 2 + Math.cos(i) * Math.cos(a) * Math.sin(r / 2) ** 2;
  return 12742e3 * Math.asin(Math.min(1, Math.sqrt(o)));
}
function Vt(e) {
  let t = Math.round(e),
    n = Math.max(1, Math.round(t / 80));
  return `${t >= 1e3 ? `${(t / 1e3).toFixed(1).replace(`.`, `,`)} km` : `${t} m`} · ${n} min a piedi`;
}
var Q = oe(),
  Ht = me(
    `inline-flex min-h-11 items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap transition-[color,background-color,box-shadow,transform] duration-150 ease-out outline-none active:not-disabled:scale-96 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
    {
      variants: {
        variant: {
          primary: `bg-primary text-primary-fg shadow-control hover:bg-primary-strong`,
          secondary: `bg-surface text-fg shadow-control hover:bg-surface-hover hover:shadow-control-hover`,
          ghost: `text-current hover:bg-current/10`,
          quiet: `bg-subtle text-fg hover:bg-border`,
        },
        size: { default: `px-4`, compact: `px-3`, icon: `size-11 min-h-11 shrink-0 p-0` },
      },
      defaultVariants: { variant: `primary`, size: `default` },
    },
  );
function Ut({ className: e, variant: t, size: n, asChild: r = !1, ...i }) {
  return (0, Q.jsx)(r ? M : `button`, {
    className: Z(Ht({ variant: t, size: n, className: e })),
    ...i,
  });
}
var Wt = [
    [`AREA FOOD SAGRA`, `Da Piazza Branciforti a Piazza Margherita`],
    [`Ciccio’s Burger - Food Track`, `Piazza Carella`],
    [`Agriturismo Canalotto`, `S.S. 121 km 90`, `0935904250`],
    [`Agriturismo Sperone`, `C.da Piano dei Comuni - S.P. 7/A Km. 3/VII`, `3342020729`],
    [`Agriturismo Villa Artemide`, `S.S. 117 Km. 69,6`, `0935903284`],
    [`Osteria “Ammangiari”`, `Via Picone n. 1`, `3317535555`],
    [`Ristorante-Pizzeria Al Gaià`, `Corso Umberto n. 554/B1`, `09351830371`],
    [`Ristorante-Pizzeria La Piramide`, `Via Pirandello n. 26`, `0935902121`],
    [`Ristorante Al Movida`, `Corso Umberto n. 502`, `3382017027`],
    [`Rosticceria del portico`, `Corso Umberto n. 290`, `3928897000`],
    [`Rosticceria San Francesco`, `Piazza San Francesco`, `0935905237`],
    [`Rosticceria Squisipollo`, `Via Volta n. 8`, `0935905791`],
    [`Rosticceria Fuoco Mania`, `Corso Umberto n. 258`, `0935906535`],
    [`Tavola Calda Scardillo`, `Corso Umberto n. 243`, `0935903513`],
    [`Tavola Calda Cangeri`, `Corso Umberto n. 256`, `0935904603`],
    [`Tavola Calda Cangeri Vito`, `Corso Umberto n. 384`, `0935905562`],
    [`Tavola Calda Ketty Bar`, `Corso Umberto n. 460`, `3383988316`],
    [`Tavola Calda Il Dolce`, `Piazza Carella n. 1`, `0935902627`],
    [`Tavola Calda La Dolce Vita`, `Corso Umberto n. 483`, `0935905685`],
    [`Tavola Calda Lattuga`, `Corso Umberto n. 471`, `3384403388`],
    [`Tavola Calda Stazione Lukoil`, `SP33`],
    [`Tavola Calda Crystal`, `Corso Umberto n. 365`],
    [`Tavola Calda Bar One`, `Corso Umberto n. 233`, `3923397770`],
    [`Pizzeria Camelot`, `Via Galilei n. 37`, `0935906562`],
    [`Pizzeria Makumba`, `Corso Umberto n. 500`, `3924216601`],
    [`Pizzeria do Spizziusu`, `Piazza Margherita`, `0935905116`],
    [`Pizzeria Joice Pub`, `Corso Umberto n. 440`, `0935905277`],
    [`Pizzeria 4 pini`, `Corso Umberto n. 538`, `3477190592`],
    [`Pizzeria da Carmelo`, `Via Mazza n. 3`, `3455982173`],
    [`Camurria`, `Via Granfonte n. 51`, `3425044339`],
    [`AIDA tavola calda`, `Via dei Cento Comuni`, `0935903460`],
    [`Cento gusti kebab`, `Corso Umberto n. 361`],
    [`Cinepiscina Evolution`, `Via Salina n. 1`, `3284144881`],
    [`Panineria Fuori Orario`, `Largo Emanuela Loi`, `3926240456`],
    [`Real Mary - Food track`, `Via Salina`, `3923235553`],
    [`MordieGusta - Food track`, `Via Stazione`, `3270631989`],
  ],
  Gt = {
    F1: {
      lat: 37.6355393,
      lng: 14.3883725,
      locationNote: `Segnaposto a Piazza Branciforti: l’area prosegue fino a Piazza Margherita.`,
    },
    F2: {
      lat: 37.6399214,
      lng: 14.3933411,
      locationNote: `Riferimento a Piazza Carella; la posizione del food truck può variare durante la manifestazione.`,
    },
    F3: { lat: 37.6186875, lng: 14.3879375, locationNote: `Posizione verificata su Google Maps.` },
    F4: { lat: 37.5876875, lng: 14.4019375, locationNote: `Posizione verificata su Google Maps.` },
    F5: { lat: 37.6531875, lng: 14.4133125, locationNote: `Posizione verificata su Google Maps.` },
    F6: {
      lat: 37.6401875,
      lng: 14.3938125,
      locationNote: `Posizione verificata tramite indirizzo e telefono.`,
    },
    F7: {
      lat: 37.6296875,
      lng: 14.4198125,
      locationNote: `Posizione verificata tramite nome e telefono; Maps riporta Contrada Paglialunga n. 3.`,
    },
    F8: { lat: 37.6431875, lng: 14.4003125, locationNote: `Posizione verificata su Google Maps.` },
    F9: {
      lat: 37.6425461,
      lng: 14.3994213,
      locationNote: `Posizione del civico verificata su Google Maps.`,
    },
    F10: { lat: 37.6403125, lng: 14.3941875, locationNote: `Posizione verificata su Google Maps.` },
    F11: { lat: 37.6386875, lng: 14.3929375, locationNote: `Posizione verificata su Google Maps.` },
    F12: { lat: 37.6395625, lng: 14.3941875, locationNote: `Posizione verificata su Google Maps.` },
    F13: {
      lat: 37.6395625,
      lng: 14.3928125,
      locationNote: `Posizione verificata tramite nome e indirizzo.`,
    },
    F14: { lat: 37.6399375, lng: 14.3939375, locationNote: `Posizione verificata su Google Maps.` },
    F15: { lat: 37.6395625, lng: 14.3928125, locationNote: `Posizione verificata su Google Maps.` },
    F16: {
      lat: 37.6411666,
      lng: 14.396062,
      locationNote: `Posizione stimata sul lato pari fra i civici 382 e 386; verificare l’ingresso sul posto.`,
    },
    F17: { lat: 37.6421875, lng: 14.3980625, locationNote: `Posizione verificata su Google Maps.` },
    F18: {
      lat: 37.6397489,
      lng: 14.3930722,
      locationNote: `Posizione del civico verificata su Google Maps.`,
    },
    F19: { lat: 37.6455625, lng: 14.4065625, locationNote: `Posizione verificata su Google Maps.` },
    F20: {
      lat: 37.6428125,
      lng: 14.4035625,
      locationNote: `Posizione verificata tramite nome e indirizzo.`,
    },
    F21: { lat: 37.6328125, lng: 14.4073125, locationNote: `Posizione verificata su Google Maps.` },
    F22: {
      lat: 37.6412362,
      lng: 14.3964492,
      locationNote: `Posizione del civico verificata su Google Maps.`,
    },
    F23: {
      lat: 37.6392009,
      lng: 14.3927741,
      locationNote: `Posizione del civico verificata su Google Maps.`,
    },
    F24: { lat: 37.6420625, lng: 14.4018125, locationNote: `Posizione verificata su Google Maps.` },
    F25: { lat: 37.6425625, lng: 14.3991875, locationNote: `Posizione verificata su Google Maps.` },
    F26: {
      lat: 37.6365625,
      lng: 14.3900625,
      locationNote: `Posizione verificata tramite nome e telefono; Maps riporta Corso Umberto n. 91.`,
    },
    F27: { lat: 37.6418125, lng: 14.3974375, locationNote: `Posizione verificata su Google Maps.` },
    F28: {
      lat: 37.6425625,
      lng: 14.4006875,
      locationNote: `Posizione verificata tramite nome e telefono; Maps riporta il civico 534.`,
    },
    F29: { lat: 37.6410625, lng: 14.3968125, locationNote: `Posizione verificata su Google Maps.` },
    F30: {
      lat: 37.6339375,
      lng: 14.3876875,
      locationNote: `Posizione verificata tramite nome e indirizzo.`,
    },
    F31: { lat: 37.6443125, lng: 14.3956875, locationNote: `Posizione verificata su Google Maps.` },
    F32: { lat: 37.6413125, lng: 14.3966875, locationNote: `Posizione verificata su Google Maps.` },
    F33: {
      lat: 37.6469375,
      lng: 14.3970625,
      locationNote: `Posizione verificata tramite nome e via.`,
    },
    F34: { lat: 37.6423125, lng: 14.4010625, locationNote: `Posizione verificata su Google Maps.` },
    F35: { lat: 37.6440625, lng: 14.4035625, locationNote: `Posizione verificata su Google Maps.` },
    F36: {
      lat: 37.6416875,
      lng: 14.3991875,
      locationNote: `Posizione verificata tramite nome e telefono; Maps riporta Via Dalmazia.`,
    },
  },
  Kt = Wt.map(([e, t, n], r) => {
    let i = `F${r + 1}`,
      a = `${t}, Leonforte EN`;
    return {
      id: i,
      category: `food`,
      name: e,
      address: a,
      phone: n,
      lat: Gt[i]?.lat ?? null,
      lng: Gt[i]?.lng ?? null,
      description:
        r === 0
          ? `Area ristoro della Sagra, da Piazza Branciforti a Piazza Margherita.`
          : `Punto ristoro segnalato dall’organizzazione. Per informazioni e prenotazioni contatta direttamente il locale.`,
      mapsQuery: r === 0 ? `Piazza Branciforti, Leonforte EN` : `${e}, ${a}`,
      locationNote: Gt[i]?.locationNote,
    };
  }),
  qt = { lat: 37.6367542, lng: 14.3900978 },
  Jt = [
    {
      id: `P1`,
      category: `parking`,
      name: `Parcheggio Via Salina`,
      address: `Via Salina, 94013 Leonforte EN`,
      lat: 37.6459509,
      lng: 14.3966851,
      description: `Area di parcheggio per auto, autobus e camper in Via Salina.`,
    },
    {
      id: `P2`,
      category: `parking`,
      name: `Parcheggio Via dei Cento Comuni`,
      address: `Via dei Cento Comuni, Leonforte EN`,
      lat: 37.6437874,
      lng: 14.3952021,
      description: `Parcheggio in Via dei Cento Comuni.`,
    },
    {
      id: `N1`,
      category: `shuttle`,
      name: `Navetta — capolinea Via Michelangelo`,
      address: `Via Michelangelo, 94013 Leonforte EN`,
      lat: 37.642792,
      lng: 14.4050743,
      description: `Partenza e ritorno della navetta. Percorso: Via Michelangelo → Corso Umberto → Piazza Matrice → circonvallazione → ritorno in Via Michelangelo.`,
    },
    {
      id: `N2`,
      category: `shuttle`,
      name: `Navetta — Corso Umberto`,
      address: `Corso Umberto Primo, 94013 Leonforte EN`,
      lat: 37.6396945,
      lng: 14.3932156,
      description: `Fermata lungo il percorso della navetta su Corso Umberto.`,
    },
    {
      id: `N3`,
      category: `shuttle`,
      name: `Navetta — Piazza Matrice`,
      address: `Piazza Matrice, 94013 Leonforte EN`,
      lat: 37.6348605,
      lng: 14.3888128,
      description: `Fermata alla Matrice (Chiesa Madre San Giovanni Battista). Da qui la navetta prosegue in circonvallazione e rientra in Via Michelangelo.`,
    },
    {
      id: `W1`,
      category: `wc`,
      name: `WC — Servizi igienici`,
      address: `Leonforte EN`,
      lat: 37.63672,
      lng: 14.390316,
      description: `Servizi igienici della Sagra.`,
    },
    {
      id: `S1`,
      category: `firstaid`,
      name: `Primo soccorso — Piazza Margherita`,
      address: `Piazza Margherita, 94013 Leonforte EN`,
      lat: 37.6367542,
      lng: 14.3900978,
      description: `Punto di primo soccorso in Piazza Margherita.`,
    },
    {
      id: `S2`,
      category: `firstaid`,
      name: `Primo soccorso — Palazzo Branciforti`,
      address: `Piazza Branciforti, 94013 Leonforte EN`,
      lat: 37.6355393,
      lng: 14.3883725,
      description: `Punto di primo soccorso presso Palazzo Branciforti.`,
    },
    {
      id: `I1`,
      category: `infopoint`,
      name: `Info Point — Pro Loco Leonforte`,
      address: `Pro Loco Leonforte, Piazza Margherita, 94013 Leonforte EN`,
      lat: 37.6367542,
      lng: 14.3900978,
      description: `Info Point della Sagra gestito dalla Pro Loco Leonforte. Materiale, orari e assistenza al pubblico.`,
      note: `Sede Pro Loco indicata in Piazza Margherita; ingresso preciso da confermare.`,
    },
    {
      id: `E1`,
      category: `stage`,
      name: `Palco Piazza Margherita`,
      address: `Piazza Margherita, 94013 Leonforte EN`,
      lat: 37.6367542,
      lng: 14.3900978,
      description: `Palco e area eventi in Piazza Margherita.`,
      orari: `Orari degli spettacoli in aggiornamento`,
    },
    {
      id: `E2`,
      category: `stage`,
      name: `Palco Palazzo Branciforti`,
      address: `Piazza Branciforti, 94013 Leonforte EN`,
      lat: 37.6355393,
      lng: 14.3883725,
      description: `Palco e area eventi presso Palazzo Branciforti.`,
      orari: `Orari degli spettacoli in aggiornamento`,
    },
    {
      id: `E3`,
      category: `stage`,
      name: `Notte Gialla`,
      address: `Da Piazza Generale Grillo a Palazzo Branciforti, via Corso Umberto`,
      lat: 37.6423185,
      lng: 14.3992885,
      description: `Notte Gialla: da Piazza Grillo, lungo Corso Umberto, fino al Palazzo Branciforti.`,
      orari: `3 ottobre 2026`,
    },
    {
      id: `PCH1`,
      category: `peach`,
      name: `Produttori Pesca IGP — Piazza Margherita`,
      address: `Piazza Margherita, 94013 Leonforte EN`,
      lat: 37.6367542,
      lng: 14.3900978,
      description: `Stand dei produttori della Pesca di Leonforte IGP in Piazza Margherita.`,
    },
    {
      id: `PCH2`,
      category: `peach`,
      name: `Produttori Pesca IGP — Palazzo Branciforti`,
      address: `Piazza Branciforti, 94013 Leonforte EN`,
      lat: 37.6355393,
      lng: 14.3883725,
      description: `Stand dei produttori della Pesca di Leonforte IGP presso Palazzo Branciforti.`,
    },
    ...Kt,
    {
      id: `V1`,
      category: `traffic`,
      name: `Percorso sagra (area interessata)`,
      address: `Da Piazza Margherita a Palazzo Branciforti, 94013 Leonforte EN`,
      lat: 37.6361468,
      lng: 14.3892352,
      description: `La sagra si svolge da Piazza Margherita fino a Palazzo Branciforti. Dettaglio strade chiuse e varchi in aggiornamento.`,
    },
    {
      id: `V2`,
      category: `traffic`,
      name: `Notte Gialla — percorso`,
      address: `Piazza Generale Grillo → Corso Umberto → Palazzo Branciforti`,
      lat: 37.6423185,
      lng: 14.3992885,
      description: `Il 3 ottobre 2026 il percorso della Notte Gialla va da Piazza Grillo, lungo Corso Umberto, fino al Palazzo Branciforti.`,
      orari: `3 ottobre 2026`,
    },
  ],
  Yt = {
    parking: `#2563eb`,
    shuttle: `#0f766e`,
    wc: `#475569`,
    firstaid: `#c2413d`,
    infopoint: `#b85f38`,
    stage: `#17191c`,
    peach: `#c96a3d`,
    food: `#c96a3d`,
    traffic: `#991b1b`,
  },
  Xt = [
    { id: `all`, label: `Tutti` },
    { id: `parking`, label: `Parcheggi` },
    { id: `shuttle`, label: `Navetta` },
    { id: `wc`, label: `WC` },
    { id: `firstaid`, label: `Soccorso` },
    { id: `infopoint`, label: `Info Point` },
    { id: `stage`, label: `Eventi` },
    { id: `peach`, label: `Pesca IGP` },
    { id: `food`, label: `Food & Drink` },
    { id: `traffic`, label: `Viabilità` },
  ];
function $(e) {
  return e.lat != null && e.lng != null && Number.isFinite(e.lat) && Number.isFinite(e.lng);
}
function Zt(e) {
  let t = new Map();
  for (let n of e) {
    if (!$(n)) continue;
    let e = `${n.lat.toFixed(5)}|${n.lng.toFixed(5)}`,
      r = t.get(e) ?? [];
    (r.push(n), t.set(e, r));
  }
  let n = new Map();
  for (let e of t.values()) {
    if (e.length === 1) {
      let t = e[0];
      $(t) && n.set(t.id, { lat: t.lat, lng: t.lng });
      continue;
    }
    e.forEach((t, r) => {
      if (!$(t)) return;
      let i = (2 * Math.PI * r) / e.length - Math.PI / 2,
        a = 18e-5;
      n.set(t.id, { lat: t.lat + Math.cos(i) * a, lng: t.lng + Math.sin(i) * a });
    });
  }
  return n;
}
var Qt = (function () {
    let e = typeof document < `u` && document.createElement(`link`).relList;
    return e && e.supports && e.supports(`modulepreload`) ? `modulepreload` : `preload`;
  })(),
  $t = function (e, t) {
    return new URL(e, t).href;
  },
  en = {},
  tn = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve ? import.meta.resolve(e) : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = $t(t, n)), (t = s(t)), t in en)) return;
          en[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : Qt),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`))));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  };
function nn(e) {
  return `./${e.replace(/^\//, ``)}`;
}
function rn() {
  return window.innerWidth < 768 || window.innerHeight <= 520;
}
var an = {
    all: f,
    parking: g,
    shuttle: a,
    wc: p,
    firstaid: i,
    infopoint: ae,
    stage: s,
    peach: r,
    food: h,
    traffic: _,
  },
  on = Object.fromEntries(Xt.map((e) => [e.id, e.label]));
function sn(e) {
  return { "--category-color": e === `all` ? `var(--color-ink)` : Yt[e] };
}
function cn(e) {
  let t =
    e.mapsQuery || !$(e) ? Lt(e.mapsQuery ?? `${e.name}, ${e.address}`, !0) : Ft(e.lat, e.lng);
  window.open(t, `_blank`, `noopener,noreferrer`);
}
function ln(e) {
  let t = e.mapsQuery || !$(e) ? Lt(e.mapsQuery ?? `${e.name}, ${e.address}`) : It(e.lat, e.lng);
  window.open(t, `_blank`, `noopener,noreferrer`);
}
function un({ point: e }) {
  return (0, Q.jsxs)(`div`, {
    className: `point-actions`,
    children: [
      (0, Q.jsxs)(Ut, {
        type: `button`,
        variant: `secondary`,
        className: `point-action-secondary`,
        onClick: () => ln(e),
        children: [(0, Q.jsx)(ee, { className: `size-4`, "aria-hidden": !0 }), `Vedi su Maps`],
      }),
      (0, Q.jsxs)(Ut, {
        type: `button`,
        className: `point-action-primary`,
        onClick: () => cn(e),
        children: [(0, Q.jsx)(d, { className: `size-4`, "aria-hidden": !0 }), `Portami qui`],
      }),
    ],
  });
}
function dn({ point: e }) {
  return e.phone
    ? (0, Q.jsxs)(`a`, {
        className: `point-phone`,
        href: Rt(e.phone),
        "aria-label": `Chiama ${e.name}: ${e.phone}`,
        children: [
          (0, Q.jsx)(y, { className: `size-4`, "aria-hidden": !0 }),
          (0, Q.jsxs)(`span`, {
            children: [`Chiama `, (0, Q.jsx)(`strong`, { children: e.phone })],
          }),
        ],
      })
    : null;
}
function fn(e) {
  let t = e.locationNote;
  return !t || (e.category === `food` && t.startsWith(`Posizione`)) ? null : t;
}
function pn({ admin: n = !1 }) {
  let r = (0, w.useRef)(null),
    i = (0, w.useRef)(null),
    a = (0, w.useRef)(null),
    s = (0, w.useRef)(() => {}),
    [d, f] = (0, w.useState)(`all`),
    [p, h] = (0, w.useState)(null),
    [g, _] = (0, w.useState)(!1),
    [y, S] = (0, w.useState)(``),
    [oe, C] = (0, w.useState)(!1),
    [T, E] = (0, w.useState)(!1),
    [D, O] = (0, w.useState)(!1),
    [k, se] = (0, w.useState)(null),
    [A, j] = (0, w.useState)(`idle`),
    [M, N] = (0, w.useState)(null),
    [P, F] = (0, w.useState)(!1),
    I = (0, w.useMemo)(() => (d === `all` ? Jt : Jt.filter((e) => e.category === d)), [d]),
    L = I.find((e) => e.id === p) ?? null,
    R = oe || T,
    z = (0, w.useMemo)(() => Zt(I), [I]),
    B = I.filter((e) => !$(e)).length,
    V = (0, w.useMemo)(() => {
      let e = zt(y).split(` `).filter(Boolean),
        t = I.filter((t) => {
          let n = zt(`${t.name} ${t.address} ${t.phone ?? ``}`);
          return e.every((e) => n.includes(e));
        });
      return k
        ? [...t].sort((e, t) => (!$(e) && !$(t) ? 0 : $(e) ? ($(t) ? Bt(k, e) - Bt(k, t) : -1) : 1))
        : t;
    }, [I, k, y]);
  ((0, w.useEffect)(() => {
    document.querySelector(`.point-list`)?.scrollTo({ top: 0 });
  }, [y, d]),
    (s.current = (e) => {
      (h(e), _(!1), rn() && C(!1));
    }),
    (0, w.useEffect)(() => {
      if (!r.current) return;
      let t = !1,
        o = null;
      return (
        O(!1),
        (async () => {
          let s = await tn(
            () => import(`./leaflet-src-Bv4pEK9w.js`).then((t) => e(t.default, 1)),
            __vite__mapDeps([0, 1]),
            import.meta.url,
          );
          (await tn(() => Promise.resolve({}), __vite__mapDeps([2]), import.meta.url),
            !(t || !r.current) &&
              ((o = s
                .map(r.current, { zoomControl: !1, attributionControl: !0, preferCanvas: !0 })
                .setView([qt.lat, qt.lng], 15)),
              s
                .tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
                  attribution: `&copy; OpenStreetMap`,
                  maxZoom: 19,
                })
                .addTo(o),
              (a.current = s.layerGroup().addTo(o)),
              (i.current = o),
              o.on(`click`, (e) => {
                (n && (N({ lat: e.latlng.lat, lng: e.latlng.lng }), F(!1)), rn() && C(!1));
              }),
              o.invalidateSize(),
              O(!0)));
        })(),
        () => {
          ((t = !0), o?.remove(), (i.current = null), (a.current = null), O(!1));
        }
      );
    }, [n]),
    (0, w.useEffect)(() => {
      let t = i.current,
        n = a.current;
      if (!D || !t || !n) return;
      let r = !1;
      return (
        (async () => {
          let i = await tn(
            () => import(`./leaflet-src-Bv4pEK9w.js`).then((t) => e(t.default, 1)),
            __vite__mapDeps([0, 1]),
            import.meta.url,
          );
          if (r) return;
          n.clearLayers();
          let a = [];
          for (let e of I) {
            let t = z.get(e.id);
            if (!t) continue;
            (d !== `all` || Bt(qt, t) < 1600) && a.push([t.lat, t.lng]);
            let r = e.id === p,
              o = i.divIcon({
                className: ``,
                iconSize: r ? [44, 44] : [36, 36],
                iconAnchor: r ? [22, 22] : [18, 18],
                html: `<div class="sagra-pin${r ? ` is-active` : ``}" style="--pin-color:${Yt[e.category]}">${e.id}</div>`,
              });
            i.marker([t.lat, t.lng], {
              alt: `${e.id} — ${e.name}`,
              icon: o,
              keyboard: !0,
              riseOnHover: !0,
              title: e.name,
              zIndexOffset: r ? 1e3 : 0,
            })
              .on(`click`, () => s.current(e.id))
              .addTo(n);
          }
          if (
            (k &&
              i
                .circleMarker([k.lat, k.lng], {
                  className: `user-location-marker`,
                  color: `#ffffff`,
                  fillColor: `#2563eb`,
                  fillOpacity: 1,
                  radius: 8,
                  weight: 3,
                })
                .bindTooltip(`La tua posizione`, { direction: `top`, offset: [0, -8] })
                .addTo(n),
            p)
          ) {
            let e = z.get(p);
            if (e) {
              let n = !rn(),
                r = Math.max(t.getZoom(), 16),
                a = t.getSize(),
                o = n ? (R ? 278 : 126) : 92,
                s = n ? 82 : 18,
                c = n ? 124 : window.innerHeight <= 520 ? 76 : 100,
                l = n ? 96 : window.innerHeight <= 520 ? 54 : 74,
                u = c + (a.y - c - l) / 2,
                d = document.querySelector(`.point-sheet-wrap`)?.getBoundingClientRect().top,
                ee = d == null ? u : Math.max(c + 32, Math.min(u, d - 44)),
                f = i.point(o + (a.x - o - s) / 2, ee),
                p = t.project([e.lat, e.lng], r).add(i.point(a.x / 2 - f.x, a.y / 2 - f.y));
              t.flyTo(t.unproject(p, r), r, { duration: 0.35 });
            }
          } else if (a.length > 1) {
            let e = !rn();
            t.fitBounds(a, {
              paddingTopLeft: [R ? (e ? 254 : 186) : e ? 112 : 78, e ? 124 : 74],
              paddingBottomRight: [e ? 80 : 48, e ? 92 : 52],
              maxZoom: 16,
            });
          } else a.length === 1 && t.flyTo(a[0], 16, { duration: 0.35 });
        })(),
        () => {
          r = !0;
        }
      );
    }, [d, I, D, z, p, R, k]));
  let H = L && k && $(L) ? Bt(k, L) : null;
  function ce(e) {
    (f(e), S(``), h(null), _(!1), rn() && C(!1));
  }
  function le() {
    let e = !oe;
    (e && (_(!1), rn() && h(null)), C(e));
  }
  function ue() {
    let e = i.current;
    if (!navigator.geolocation) {
      j(`unavailable`);
      return;
    }
    (j(`loading`),
      navigator.geolocation.getCurrentPosition(
        (t) => {
          let n = { lat: t.coords.latitude, lng: t.coords.longitude };
          (se(n), j(`ready`), e?.flyTo([n.lat, n.lng], 16, { duration: 0.35 }));
        },
        (e) => j(e.code === e.PERMISSION_DENIED ? `denied` : `unavailable`),
        { enableHighAccuracy: !0, timeout: 1e4, maximumAge: 3e4 },
      ));
  }
  async function de() {
    if (M)
      try {
        (await navigator.clipboard.writeText(`${M.lat.toFixed(6)}, ${M.lng.toFixed(6)}`), F(!0));
      } catch {
        F(!1);
      }
  }
  let fe =
    A === `loading`
      ? `Ricerca della posizione in corso…`
      : A === `denied`
        ? `Posizione non autorizzata. Puoi abilitarla nelle impostazioni del browser.`
        : A === `unavailable`
          ? `Posizione non disponibile. Riprova tra poco.`
          : A === `ready`
            ? `Posizione trovata. I punti nell’elenco sono ordinati per distanza.`
            : ``;
  return (0, Q.jsxs)(`main`, {
    className: Z(
      `app-shell`,
      n && `is-admin`,
      R && `is-sidebar-expanded`,
      g && `has-list-drawer`,
      L && `has-point-sheet`,
    ),
    children: [
      n
        ? (0, Q.jsx)(`div`, {
            className: `admin-banner`,
            children: `Modalità tecnica: tocca la mappa per leggere le coordinate`,
          })
        : null,
      (0, Q.jsx)(`div`, {
        ref: r,
        className: `map-canvas`,
        "aria-label": `Mappa dei servizi della Sagra`,
      }),
      D
        ? null
        : (0, Q.jsxs)(`div`, {
            className: `map-loading`,
            role: `status`,
            children: [(0, Q.jsx)(`span`, { className: `map-loading-dot` }), `Caricamento mappa…`],
          }),
      (0, Q.jsxs)(`header`, {
        className: `app-header`,
        children: [
          (0, Q.jsx)(Ut, {
            type: `button`,
            variant: `ghost`,
            size: `icon`,
            className: `header-sidebar-button`,
            "aria-label": R ? `Riduci menu categorie` : `Apri menu categorie`,
            "aria-controls": `category-sidebar`,
            "aria-expanded": R,
            onClick: le,
            children: R
              ? (0, Q.jsx)(u, { className: `size-5`, "aria-hidden": !0 })
              : (0, Q.jsx)(m, { className: `size-5`, "aria-hidden": !0 }),
          }),
          (0, Q.jsxs)(`div`, {
            className: `event-title`,
            children: [
              (0, Q.jsxs)(`span`, {
                className: `event-number`,
                children: [`44`, (0, Q.jsx)(`sup`, { children: `esima` })],
              }),
              (0, Q.jsxs)(`h1`, {
                children: [
                  (0, Q.jsx)(`span`, { children: `Sagra della Pesca IGP` }),
                  (0, Q.jsx)(`span`, { children: `di Leonforte` }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `municipal-brand`,
            "aria-label": `Comune di Leonforte`,
            children: [
              (0, Q.jsx)(`img`, {
                src: nn(`brand/stemma.svg`),
                alt: `Stemma del Comune di Leonforte`,
                className: `municipality-crest`,
              }),
              (0, Q.jsxs)(`span`, {
                className: `municipal-brand-copy`,
                children: [`Comune di`, (0, Q.jsx)(`strong`, { children: `Leonforte` })],
              }),
            ],
          }),
        ],
      }),
      (0, Q.jsx)(`nav`, {
        id: `category-sidebar`,
        className: Z(`category-rail`, R && `is-open`),
        "aria-label": `Filtra i servizi per categoria`,
        onPointerEnter: (e) => {
          e.pointerType === `mouse` && !rn() && E(!0);
        },
        onPointerLeave: () => E(!1),
        children: Xt.map((e) => {
          let t = an[e.id],
            n = d === e.id;
          return (0, Q.jsxs)(
            `button`,
            {
              type: `button`,
              className: Z(`category-tab`, n && `is-active`),
              style: sn(e.id),
              "aria-pressed": n,
              onClick: () => ce(e.id),
              children: [
                (0, Q.jsx)(`span`, {
                  className: `category-icon`,
                  children: (0, Q.jsx)(t, {
                    className: `size-4`,
                    strokeWidth: 2.15,
                    "aria-hidden": !0,
                  }),
                }),
                (0, Q.jsx)(`span`, { className: `category-label`, children: e.label }),
              ],
            },
            e.id,
          );
        }),
      }),
      (0, Q.jsxs)(`div`, {
        className: `map-status`,
        "aria-live": `polite`,
        children: [
          (0, Q.jsx)(`span`, { children: on[d] }),
          (0, Q.jsxs)(`span`, {
            className: `map-status-count`,
            children: [
              I.length,
              ` `,
              d === `food` ? `ristori` : I.length === 1 ? `punto` : `punti`,
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `map-controls`,
        "aria-label": `Comandi della mappa`,
        children: [
          (0, Q.jsx)(Ut, {
            type: `button`,
            variant: `secondary`,
            size: `icon`,
            "aria-label": `Mostra la mia posizione`,
            "aria-busy": A === `loading`,
            onClick: ue,
            children: (0, Q.jsx)(o, {
              className: Z(`size-5`, A === `loading` && `animate-pulse`),
              "aria-hidden": !0,
            }),
          }),
          (0, Q.jsxs)(`div`, {
            className: `zoom-controls`,
            children: [
              (0, Q.jsx)(Ut, {
                type: `button`,
                variant: `secondary`,
                size: `icon`,
                "aria-label": `Aumenta zoom`,
                onClick: () => i.current?.zoomIn(),
                children: (0, Q.jsx)(te, { className: `size-5`, "aria-hidden": !0 }),
              }),
              (0, Q.jsx)(Ut, {
                type: `button`,
                variant: `secondary`,
                size: `icon`,
                "aria-label": `Riduci zoom`,
                onClick: () => i.current?.zoomOut(),
                children: (0, Q.jsx)(ne, { className: `size-5`, "aria-hidden": !0 }),
              }),
            ],
          }),
          (0, Q.jsxs)(`button`, {
            type: `button`,
            className: Z(`services-list-button`, g && `is-active`),
            "aria-label": g ? `Elenco dei servizi aperto` : `Apri elenco dei servizi`,
            "aria-controls": `service-list-drawer`,
            "aria-expanded": g,
            "aria-pressed": g,
            onClick: () => {
              (h(null), C(!1), _((e) => !e));
            },
            children: [
              g
                ? (0, Q.jsx)(v, { className: `size-4`, "aria-hidden": !0 })
                : (0, Q.jsx)(b, { className: `size-4`, "aria-hidden": !0 }),
              (0, Q.jsxs)(`span`, {
                children: [
                  (0, Q.jsx)(`span`, { children: `Servizi` }),
                  (0, Q.jsx)(`span`, { children: `disponibili` }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`a`, {
            href: `${nn(`documenti/programma-44esima-sagra-pesca-igp-leonforte.png`)}?v=cf5a9e5c`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: `program-download-button`,
            "aria-label": `Visualizza il programma in alta risoluzione`,
            title: `Visualizza il programma in alta risoluzione`,
            children: [
              (0, Q.jsx)(ie, { className: `size-4`, "aria-hidden": !0 }),
              (0, Q.jsxs)(`span`, {
                children: [
                  (0, Q.jsx)(`span`, { children: `Visualizza` }),
                  (0, Q.jsx)(`span`, { children: `Programma` }),
                ],
              }),
            ],
          }),
        ],
      }),
      fe
        ? (0, Q.jsxs)(`div`, {
            className: Z(`geo-message`, A === `ready` && `is-success`),
            role: `status`,
            children: [
              A === `ready`
                ? (0, Q.jsx)(x, { className: `size-4`, "aria-hidden": !0 })
                : (0, Q.jsx)(ae, { className: `size-4`, "aria-hidden": !0 }),
              (0, Q.jsx)(`span`, { children: fe }),
              (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": `Chiudi messaggio`,
                onClick: () => j(`idle`),
                children: (0, Q.jsx)(v, { className: `size-4`, "aria-hidden": !0 }),
              }),
            ],
          })
        : null,
      n && M
        ? (0, Q.jsxs)(`aside`, {
            className: `admin-coordinates`,
            "aria-live": `polite`,
            children: [
              (0, Q.jsxs)(`div`, {
                children: [
                  (0, Q.jsx)(`span`, { children: `Coordinate selezionate` }),
                  (0, Q.jsxs)(`strong`, { children: [M.lat.toFixed(6), `, `, M.lng.toFixed(6)] }),
                ],
              }),
              (0, Q.jsx)(Ut, {
                type: `button`,
                variant: `secondary`,
                size: `icon`,
                "aria-label": `Copia coordinate`,
                onClick: de,
                children: P
                  ? (0, Q.jsx)(x, { className: `size-4`, "aria-hidden": !0 })
                  : (0, Q.jsx)(t, { className: `size-4`, "aria-hidden": !0 }),
              }),
            ],
          })
        : null,
      g
        ? (0, Q.jsxs)(`aside`, {
            id: `service-list-drawer`,
            className: Z(`list-drawer`, d === `food` && `is-food-directory`),
            "aria-label": `Elenco dei servizi`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `list-drawer-header`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`span`, {
                        className: `eyebrow`,
                        children: d === `food` ? `Mangiare a Leonforte` : `Servizi disponibili`,
                      }),
                      (0, Q.jsx)(`h2`, { children: d === `food` ? `Punti di ristoro` : on[d] }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `list-header-actions`,
                    children: [
                      (0, Q.jsx)(`span`, {
                        className: `list-count`,
                        "aria-label": `${V.length} risultati`,
                        children: V.length,
                      }),
                      (0, Q.jsx)(`button`, {
                        type: `button`,
                        className: `list-close-button`,
                        "aria-label": `Chiudi elenco dei servizi`,
                        onClick: () => _(!1),
                        children: (0, Q.jsx)(v, { className: `size-4`, "aria-hidden": !0 }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `list-tools`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `list-search`,
                    children: [
                      (0, Q.jsx)(re, { className: `size-4`, "aria-hidden": !0 }),
                      (0, Q.jsx)(`input`, {
                        type: `search`,
                        "aria-label": `Cerca per nome, via o telefono`,
                        placeholder: `Cerca nome, via o telefono`,
                        value: y,
                        onChange: (e) => S(e.target.value),
                      }),
                      y
                        ? (0, Q.jsx)(`button`, {
                            type: `button`,
                            "aria-label": `Cancella ricerca`,
                            onClick: () => S(``),
                            children: (0, Q.jsx)(v, { className: `size-4`, "aria-hidden": !0 }),
                          })
                        : null,
                    ],
                  }),
                  B > 0
                    ? (0, Q.jsxs)(`p`, {
                        className: `list-location-note`,
                        children: [
                          `Tutti i contatti nell’elenco. `,
                          I.length - B,
                          ` segnaposto disponibili; per gli altri, ricerca per indirizzo su Maps.`,
                        ],
                      })
                    : null,
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `point-list`,
                children: [
                  V.length === 0
                    ? (0, Q.jsx)(`p`, {
                        className: `list-empty`,
                        role: `status`,
                        children: `Nessun risultato. Prova un altro nome o una via.`,
                      })
                    : null,
                  V.map((e) => {
                    let t = an[e.category],
                      n = k && $(e) ? Bt(k, e) : null;
                    return (0, Q.jsxs)(
                      `article`,
                      {
                        className: `point-list-card`,
                        children: [
                          (0, Q.jsxs)(`button`, {
                            type: `button`,
                            className: `point-list-summary`,
                            onClick: () => s.current(e.id),
                            children: [
                              (0, Q.jsx)(`span`, {
                                className: `point-list-icon`,
                                style: sn(e.category),
                                children: (0, Q.jsx)(t, { className: `size-5`, "aria-hidden": !0 }),
                              }),
                              (0, Q.jsxs)(`span`, {
                                className: `point-list-copy`,
                                children: [
                                  (0, Q.jsx)(`span`, { className: `point-code`, children: e.id }),
                                  (0, Q.jsx)(`strong`, { children: e.name }),
                                  (0, Q.jsx)(`span`, { children: e.address }),
                                  n != null && n < 2e4
                                    ? (0, Q.jsxs)(`span`, {
                                        className: `point-distance`,
                                        children: [
                                          (0, Q.jsx)(c, {
                                            className: `size-3.5`,
                                            "aria-hidden": !0,
                                          }),
                                          Vt(n),
                                        ],
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          }),
                          fn(e)
                            ? (0, Q.jsx)(`p`, { className: `point-location-note`, children: fn(e) })
                            : null,
                          (0, Q.jsx)(dn, { point: e }),
                          (0, Q.jsx)(un, { point: e }),
                        ],
                      },
                      e.id,
                    );
                  }),
                ],
              }),
            ],
          })
        : null,
      L
        ? (0, Q.jsx)(`div`, {
            className: `point-sheet-wrap`,
            children: (0, Q.jsxs)(`article`, {
              className: `point-sheet`,
              children: [
                (0, Q.jsx)(`button`, {
                  type: `button`,
                  className: `sheet-close`,
                  "aria-label": `Chiudi dettagli`,
                  onClick: () => h(null),
                  children: (0, Q.jsx)(v, { className: `size-4`, "aria-hidden": !0 }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `point-sheet-main`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `point-badge`,
                      style: sn(L.category),
                      children: L.id,
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `point-sheet-copy`,
                      children: [
                        (0, Q.jsx)(`span`, { className: `eyebrow`, children: on[L.category] }),
                        (0, Q.jsx)(`h2`, { children: L.name }),
                        (0, Q.jsxs)(`p`, {
                          className: `point-address`,
                          children: [
                            (0, Q.jsx)(ee, { className: `size-3.5`, "aria-hidden": !0 }),
                            L.address,
                          ],
                        }),
                        (0, Q.jsx)(`p`, { children: L.description }),
                        H != null && H < 2e4
                          ? (0, Q.jsxs)(`p`, {
                              className: `point-distance`,
                              children: [
                                (0, Q.jsx)(c, { className: `size-3.5`, "aria-hidden": !0 }),
                                Vt(H),
                              ],
                            })
                          : null,
                        L.orari
                          ? (0, Q.jsxs)(`p`, {
                              className: `point-meta`,
                              children: [
                                (0, Q.jsx)(l, { className: `size-3.5`, "aria-hidden": !0 }),
                                L.orari,
                              ],
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                fn(L)
                  ? (0, Q.jsx)(`p`, { className: `point-location-note`, children: fn(L) })
                  : null,
                (0, Q.jsx)(dn, { point: L }),
                (0, Q.jsx)(un, { point: L }),
              ],
            }),
          })
        : null,
      (0, Q.jsxs)(`footer`, {
        className: `app-footer`,
        children: [
          (0, Q.jsx)(`img`, {
            src: nn(`brand/yellow-pesca.png`),
            alt: `Logo Yellow Pesca 2026`,
            className: `footer-event-logo`,
          }),
          (0, Q.jsx)(`span`, { children: `Powered by` }),
          (0, Q.jsx)(`img`, {
            src: nn(`brand/yellow-ets.png`),
            alt: `Yellow ETS`,
            className: `footer-logo`,
          }),
        ],
      }),
    ],
  });
}
var mn = document.getElementById(`app`);
if (!mn) throw Error(`Contenitore principale non trovato`);
var hn = new URLSearchParams(window.location.search).get(`admin`) === `1`;
(0, C.createRoot)(mn).render((0, Q.jsx)(w.StrictMode, { children: (0, Q.jsx)(pn, { admin: hn }) }));
