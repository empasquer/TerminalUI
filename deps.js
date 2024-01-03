/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t)) for (r in c) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || m(a) || (a = {}), s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}), (i = !1), (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) || ("function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      n["[object " + t + "]"] = t.toLowerCase();
    });
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (((n = n || []), "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id")) ? (s = s.replace(re, ie)) : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], (e[t + " "] = n);
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (a.appendChild(e).id = S), !C.getElementsByName || !C.getElementsByName(S).length;
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")), c.call(e, "[s!='']:x"), s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if ((T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))))
        try {
          var n = c.call(e, t);
          if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (((l = !d.detectDuplicates), (u = !d.sortStable && e.slice(0)), e.sort(D), l)) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l])) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) &&
                          ++d &&
                          (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if ((t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")))
                    return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u])) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (((i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p) return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r = (!o && (n || t !== w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace($, " ") }), (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), (ee.test(o[0].type) && ye(t.parentNode)) || t))) {
                if ((o.splice(i, 1), !(e = r.length && xe(o)))) return H.apply(n, r), n;
                break;
              }
            }
          }
          return (l || f(e, c))(r, t, !E, n, !t || (ee.test(e) && ye(t.parentNode)) || t), n;
        }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || (!r[1] && t))
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
    }
    return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
            ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                        (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith)))
                            : (a !== R && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 && (a !== M && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                          }
                        };
                  i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this), (i[t] = 1 < arguments.length ? s.call(arguments) : e), --n || o.resolveWith(r, i);
            };
          };
        if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState || ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (((r = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
        try {
          n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (this.length && ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
            t = a.length;
            while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, S.makeArray(n))) : r.push(n)), r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
    });
  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === S.css(e, "display"));
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (S.cssNumber[t] || ("px" !== l && +u)) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n && ((l[c] = Y.get(r, "display") || null), l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), n.value;
            } else
              r.length &&
                (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
              f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (((d = g = (s = Te.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return (pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click")) || A(t, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Ee),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
      S.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function (e) {
          var t,
            n = e.relatedTarget,
            r = e.handleObj;
          return (n && (n === this || S.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
        },
      };
    }),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (r = e.handleObj), S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s)) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (f && ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e), c !== p && ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l)
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
      if (t)
        if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
        else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
      S.fn[e] = function (e) {
        for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), S(r[o])[a](t), u.apply(n, t.get());
        return this.pushStack(n);
      };
    });
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n ? (u += S.css(e, "border" + ne[a] + "Width", !0, i)) : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if ((u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n))
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o || u || (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - 0.5)),
            s && (r = te.exec(t)) && "px" !== (r[3] || "px") && ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
          l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts))) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) && (l ? (c = l) : (le([e], !0), (l = e.style.display || l), (c = S.css(e, "display")), le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v ? "hidden" in v && (g = v.hidden) : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d)) S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; )
              i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return n || ((i = dt[o]), (dt[o] = r), (r = null != a(e, t, n) ? o : null), (dt[o] = i)), r;
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      ["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++])) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++])) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++])) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) && l.apply && V(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (t && !t.getElementsByTagName("parsererror").length) || S.error("Invalid XML: " + e), t;
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t)) while ((n = i[r++])) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p))) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//")),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url), (r.href = r.href), (v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if ((v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h)) return T;
        for (i in ((g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data && (v.processData || "string" == typeof v.data) && ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache && ((f = f.replace(Lt, "$1")), (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
        if (((u = "abort"), b.add(v.complete), T.done(v.success), T.fail(v.error), (c = Bt(Mt, v, t, T)))) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h)) return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                          !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e))
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
            i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") || "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a ? (e[a] = e[a].replace(Vt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href), t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e)) ? [t.createElement(i[1])] : ((i = xe([e], t, o)), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments), a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
            while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
      var o = "pageYOffset" === i;
      S.fn[t] = function (e) {
        return $(
          this,
          function (e, t, n) {
            var r;
            if ((x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
            r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
          },
          t,
          e,
          arguments.length
        );
      };
    }),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t) return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
        S.fn[o] = function (e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
          return $(
            this,
            function (e, t, n) {
              var r;
              return x(e)
                ? 0 === o.indexOf("outer")
                  ? e["inner" + a]
                  : e.document.documentElement["client" + a]
                : 9 === e.nodeType
                ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                : void 0 === n
                ? S.css(e, t, i)
                : S.style(e, t, n, i);
            },
            s,
            n ? e : void 0,
            n
          );
        };
      });
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      S.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!(function (i) {
  if ("function" == typeof define && define.amd) define(["jquery"], i);
  else if ("object" == typeof module && module.exports) {
    var t = require("jquery");
    i(t), (module.exports = t);
  } else i(jQuery);
})(function (i) {
  function t(i) {
    this.init(i);
  }
  (t.prototype = {
    value: 0,
    size: 100,
    startAngle: -Math.PI,
    thickness: "auto",
    fill: { gradient: ["#3aeabb", "#fdd250"] },
    emptyFill: "rgba(0, 0, 0, .1)",
    animation: { duration: 1200, easing: "circleProgressEasing" },
    animationStartValue: 0,
    reverse: !1,
    lineCap: "butt",
    insertMode: "prepend",
    constructor: t,
    el: null,
    canvas: null,
    ctx: null,
    radius: 0,
    arcFill: null,
    lastFrameValue: 0,
    init: function (t) {
      i.extend(this, t), (this.radius = this.size / 2), this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited");
    },
    initWidget: function () {
      this.canvas || (this.canvas = i("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
      var t = this.canvas;
      if (((t.width = this.size), (t.height = this.size), (this.ctx = t.getContext("2d")), window.devicePixelRatio > 1)) {
        var e = window.devicePixelRatio;
        (t.style.width = t.style.height = this.size + "px"), (t.width = t.height = this.size * e), this.ctx.scale(e, e);
      }
    },
    initFill: function () {
      function t() {
        var t = i("<canvas>")[0];
        (t.width = e.size),
          (t.height = e.size),
          t.getContext("2d").drawImage(g, 0, 0, r, r),
          (e.arcFill = e.ctx.createPattern(t, "no-repeat")),
          e.drawFrame(e.lastFrameValue);
      }
      var e = this,
        a = this.fill,
        n = this.ctx,
        r = this.size;
      if (!a) throw Error("The fill is not specified!");
      if (("string" == typeof a && (a = { color: a }), a.color && (this.arcFill = a.color), a.gradient)) {
        var s = a.gradient;
        if (1 == s.length) this.arcFill = s[0];
        else if (s.length > 1) {
          for (
            var l = a.gradientAngle || 0,
              o = a.gradientDirection || [
                (r / 2) * (1 - Math.cos(l)),
                (r / 2) * (1 + Math.sin(l)),
                (r / 2) * (1 + Math.cos(l)),
                (r / 2) * (1 - Math.sin(l)),
              ],
              h = n.createLinearGradient.apply(n, o),
              c = 0;
            c < s.length;
            c++
          ) {
            var d = s[c],
              u = c / (s.length - 1);
            i.isArray(d) && ((u = d[1]), (d = d[0])), h.addColorStop(u, d);
          }
          this.arcFill = h;
        }
      }
      if (a.image) {
        var g;
        a.image instanceof Image ? (g = a.image) : ((g = new Image()), (g.src = a.image)), g.complete ? t() : (g.onload = t);
      }
    },
    draw: function () {
      this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value);
    },
    drawFrame: function (i) {
      (this.lastFrameValue = i), this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(i), this.drawArc(i);
    },
    drawArc: function (i) {
      if (0 !== i) {
        var t = this.ctx,
          e = this.radius,
          a = this.getThickness(),
          n = this.startAngle;
        t.save(),
          t.beginPath(),
          this.reverse ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n) : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i),
          (t.lineWidth = a),
          (t.lineCap = this.lineCap),
          (t.strokeStyle = this.arcFill),
          t.stroke(),
          t.restore();
      }
    },
    drawEmptyArc: function (i) {
      var t = this.ctx,
        e = this.radius,
        a = this.getThickness(),
        n = this.startAngle;
      i < 1 &&
        (t.save(),
        t.beginPath(),
        i <= 0
          ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI)
          : this.reverse
          ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i)
          : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n),
        (t.lineWidth = a),
        (t.strokeStyle = this.emptyFill),
        t.stroke(),
        t.restore());
    },
    drawAnimated: function (t) {
      var e = this,
        a = this.el,
        n = i(this.canvas);
      n.stop(!0, !1),
        a.trigger("circle-animation-start"),
        n
          .css({ animationProgress: 0 })
          .animate(
            { animationProgress: 1 },
            i.extend({}, this.animation, {
              step: function (i) {
                var n = e.animationStartValue * (1 - i) + t * i;
                e.drawFrame(n), a.trigger("circle-animation-progress", [i, n]);
              },
            })
          )
          .promise()
          .always(function () {
            a.trigger("circle-animation-end");
          });
    },
    getThickness: function () {
      return i.isNumeric(this.thickness) ? this.thickness : this.size / 14;
    },
    getValue: function () {
      return this.value;
    },
    setValue: function (i) {
      this.animation && (this.animationStartValue = this.lastFrameValue), (this.value = i), this.draw();
    },
  }),
    (i.circleProgress = { defaults: t.prototype }),
    (i.easing.circleProgressEasing = function (i) {
      return i < 0.5 ? ((i = 2 * i), 0.5 * i * i * i) : ((i = 2 - 2 * i), 1 - 0.5 * i * i * i);
    }),
    (i.fn.circleProgress = function (e, a) {
      var n = "circle-progress",
        r = this.data(n);
      if ("widget" == e) {
        if (!r) throw Error('Calling "widget" method on not initialized instance is forbidden');
        return r.canvas;
      }
      if ("value" == e) {
        if (!r) throw Error('Calling "value" method on not initialized instance is forbidden');
        if ("undefined" == typeof a) return r.getValue();
        var s = arguments[1];
        return this.each(function () {
          i(this).data(n).setValue(s);
        });
      }
      return this.each(function () {
        var a = i(this),
          r = a.data(n),
          s = i.isPlainObject(e) ? e : {};
        if (r) r.init(s);
        else {
          var l = i.extend({}, a.data());
          "string" == typeof l.fill && (l.fill = JSON.parse(l.fill)),
            "string" == typeof l.animation && (l.animation = JSON.parse(l.animation)),
            (s = i.extend(l, s)),
            (s.el = a),
            (r = new t(s)),
            a.data(n, r);
        }
      });
    });
});

/*!
 * sweetalert2 v11.10.1
 * Released under the MIT License.
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Sweetalert2 = e());
})(this, function () {
  "use strict";
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }),
      t(e)
    );
  }
  function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(
          t,
          ((i = o.key),
          (r = void 0),
          "symbol" ==
          typeof (r = (function (t, e) {
            if ("object" != typeof t || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(t, e || "default");
              if ("object" != typeof o) return o;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(i, "string"))
            ? r
            : String(r)),
          o
        );
    }
    var i, r;
  }
  function o(t, e, o) {
    return e && n(t.prototype, e), o && n(t, o), Object.defineProperty(t, "prototype", { writable: !1 }), t;
  }
  function i(t) {
    return (
      (i = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      i(t)
    );
  }
  function r(t, e) {
    return (
      (r = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      r(t, e)
    );
  }
  function a() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }
  function c(t, e, n) {
    return (
      (c = a()
        ? Reflect.construct.bind()
        : function (t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new (Function.bind.apply(t, o))();
            return n && r(i, n.prototype), i;
          }),
      c.apply(null, arguments)
    );
  }
  function u(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return (function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    })(t);
  }
  function s() {
    return (
      (s =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (t, e, n) {
              var o = (function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = i(t)); );
                return t;
              })(t, e);
              if (o) {
                var r = Object.getOwnPropertyDescriptor(o, e);
                return r.get ? r.get.call(arguments.length < 3 ? t : n) : r.value;
              }
            }),
      s.apply(this, arguments)
    );
  }
  function l(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (null != n) {
          var o,
            i,
            r,
            a,
            c = [],
            u = !0,
            s = !1;
          try {
            if (((r = (n = n.call(t)).next), 0 === e)) {
              if (Object(n) !== n) return;
              u = !1;
            } else for (; !(u = (o = r.call(n)).done) && (c.push(o.value), c.length !== e); u = !0);
          } catch (t) {
            (s = !0), (i = t);
          } finally {
            try {
              if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
            } finally {
              if (s) throw i;
            }
          }
          return c;
        }
      })(t, e) ||
      f(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function d(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return p(t);
      })(t) ||
      (function (t) {
        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
      })(t) ||
      f(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function f(t, e) {
    if (t) {
      if ("string" == typeof t) return p(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
      );
    }
  }
  function p(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
    return o;
  }
  function m(t, e) {
    return (function (t, e) {
      if (e.get) return e.get.call(t);
      return e.value;
    })(t, v(t, e, "get"));
  }
  function h(t, e, n) {
    return (
      (function (t, e, n) {
        if (e.set) e.set.call(t, n);
        else {
          if (!e.writable) throw new TypeError("attempted to set read only private field");
          e.value = n;
        }
      })(t, v(t, e, "set"), n),
      n
    );
  }
  function v(t, e, n) {
    if (!e.has(t)) throw new TypeError("attempted to " + n + " private field on non-instance");
    return e.get(t);
  }
  function g(t, e, n) {
    !(function (t, e) {
      if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    })(t, e),
      e.set(t, n);
  }
  var b = {},
    y = function (t) {
      return new Promise(function (e) {
        if (!t) return e();
        var n = window.scrollX,
          o = window.scrollY;
        (b.restoreFocusTimeout = setTimeout(function () {
          b.previousActiveElement instanceof HTMLElement
            ? (b.previousActiveElement.focus(), (b.previousActiveElement = null))
            : document.body && document.body.focus(),
            e();
        }, 100)),
          window.scrollTo(n, o);
      });
    },
    w = "swal2-",
    C = [
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "show",
      "hide",
      "close",
      "title",
      "html-container",
      "actions",
      "confirm",
      "deny",
      "cancel",
      "default-outline",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "input-label",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loader",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
    ].reduce(function (t, e) {
      return (t[e] = w + e), t;
    }, {}),
    A = ["success", "warning", "info", "question", "error"].reduce(function (t, e) {
      return (t[e] = w + e), t;
    }, {}),
    k = "SweetAlert2:",
    E = function (t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    B = function (e) {
      console.warn("".concat(k, " ").concat("object" === t(e) ? e.join(" ") : e));
    },
    P = function (t) {
      console.error("".concat(k, " ").concat(t));
    },
    T = [],
    x = function (t, e) {
      var n;
      (n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.')),
        T.includes(n) || (T.push(n), B(n));
    },
    S = function (t) {
      return "function" == typeof t ? t() : t;
    },
    O = function (t) {
      return t && "function" == typeof t.toPromise;
    },
    L = function (t) {
      return O(t) ? t.toPromise() : Promise.resolve(t);
    },
    j = function (t) {
      return t && Promise.resolve(t) === t;
    },
    M = function () {
      return document.body.querySelector(".".concat(C.container));
    },
    I = function (t) {
      var e = M();
      return e ? e.querySelector(t) : null;
    },
    H = function (t) {
      return I(".".concat(t));
    },
    D = function () {
      return H(C.popup);
    },
    q = function () {
      return H(C.icon);
    },
    V = function () {
      return H(C.title);
    },
    R = function () {
      return H(C["html-container"]);
    },
    _ = function () {
      return H(C.image);
    },
    N = function () {
      return H(C["progress-steps"]);
    },
    F = function () {
      return H(C["validation-message"]);
    },
    U = function () {
      return I(".".concat(C.actions, " .").concat(C.confirm));
    },
    z = function () {
      return I(".".concat(C.actions, " .").concat(C.cancel));
    },
    W = function () {
      return I(".".concat(C.actions, " .").concat(C.deny));
    },
    K = function () {
      return I(".".concat(C.loader));
    },
    Y = function () {
      return H(C.actions);
    },
    Z = function () {
      return H(C.footer);
    },
    $ = function () {
      return H(C["timer-progress-bar"]);
    },
    J = function () {
      return H(C.close);
    },
    X = function () {
      var t = D();
      if (!t) return [];
      var e = t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),
        n = Array.from(e).sort(function (t, e) {
          var n = parseInt(t.getAttribute("tabindex") || "0"),
            o = parseInt(e.getAttribute("tabindex") || "0");
          return n > o ? 1 : n < o ? -1 : 0;
        }),
        o = t.querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        ),
        i = Array.from(o).filter(function (t) {
          return "-1" !== t.getAttribute("tabindex");
        });
      return d(new Set(n.concat(i))).filter(function (t) {
        return ht(t);
      });
    },
    G = function () {
      return et(document.body, C.shown) && !et(document.body, C["toast-shown"]) && !et(document.body, C["no-backdrop"]);
    },
    Q = function () {
      var t = D();
      return !!t && et(t, C.toast);
    },
    tt = function (t, e) {
      if (((t.textContent = ""), e)) {
        var n = new DOMParser().parseFromString(e, "text/html"),
          o = n.querySelector("head");
        o &&
          Array.from(o.childNodes).forEach(function (e) {
            t.appendChild(e);
          });
        var i = n.querySelector("body");
        i &&
          Array.from(i.childNodes).forEach(function (e) {
            e instanceof HTMLVideoElement || e instanceof HTMLAudioElement ? t.appendChild(e.cloneNode(!0)) : t.appendChild(e);
          });
      }
    },
    et = function (t, e) {
      if (!e) return !1;
      for (var n = e.split(/\s+/), o = 0; o < n.length; o++) if (!t.classList.contains(n[o])) return !1;
      return !0;
    },
    nt = function (e, n, o) {
      if (
        ((function (t, e) {
          Array.from(t.classList).forEach(function (n) {
            Object.values(C).includes(n) || Object.values(A).includes(n) || Object.values(e.showClass || {}).includes(n) || t.classList.remove(n);
          });
        })(e, n),
        n.customClass && n.customClass[o])
      ) {
        if ("string" != typeof n.customClass[o] && !n.customClass[o].forEach)
          return void B("Invalid type of customClass.".concat(o, '! Expected string or iterable object, got "').concat(t(n.customClass[o]), '"'));
        at(e, n.customClass[o]);
      }
    },
    ot = function (t, e) {
      if (!e) return null;
      switch (e) {
        case "select":
        case "textarea":
        case "file":
          return t.querySelector(".".concat(C.popup, " > .").concat(C[e]));
        case "checkbox":
          return t.querySelector(".".concat(C.popup, " > .").concat(C.checkbox, " input"));
        case "radio":
          return (
            t.querySelector(".".concat(C.popup, " > .").concat(C.radio, " input:checked")) ||
            t.querySelector(".".concat(C.popup, " > .").concat(C.radio, " input:first-child"))
          );
        case "range":
          return t.querySelector(".".concat(C.popup, " > .").concat(C.range, " input"));
        default:
          return t.querySelector(".".concat(C.popup, " > .").concat(C.input));
      }
    },
    it = function (t) {
      if ((t.focus(), "file" !== t.type)) {
        var e = t.value;
        (t.value = ""), (t.value = e);
      }
    },
    rt = function (t, e, n) {
      t &&
        e &&
        ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
        e.forEach(function (e) {
          Array.isArray(t)
            ? t.forEach(function (t) {
                n ? t.classList.add(e) : t.classList.remove(e);
              })
            : n
            ? t.classList.add(e)
            : t.classList.remove(e);
        }));
    },
    at = function (t, e) {
      rt(t, e, !0);
    },
    ct = function (t, e) {
      rt(t, e, !1);
    },
    ut = function (t, e) {
      for (var n = Array.from(t.children), o = 0; o < n.length; o++) {
        var i = n[o];
        if (i instanceof HTMLElement && et(i, e)) return i;
      }
    },
    st = function (t, e, n) {
      n === "".concat(parseInt(n)) && (n = parseInt(n)),
        n || 0 === parseInt(n) ? (t.style[e] = "number" == typeof n ? "".concat(n, "px") : n) : t.style.removeProperty(e);
    },
    lt = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
      t && (t.style.display = e);
    },
    dt = function (t) {
      t && (t.style.display = "none");
    },
    ft = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
      t &&
        new MutationObserver(function () {
          mt(t, t.innerHTML, e);
        }).observe(t, { childList: !0, subtree: !0 });
    },
    pt = function (t, e, n, o) {
      var i = t.querySelector(e);
      i && (i.style[n] = o);
    },
    mt = function (t, e) {
      e ? lt(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "flex") : dt(t);
    },
    ht = function (t) {
      return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length));
    },
    vt = function (t) {
      return !!(t.scrollHeight > t.clientHeight);
    },
    gt = function (t) {
      var e = window.getComputedStyle(t),
        n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
        o = parseFloat(e.getPropertyValue("transition-duration") || "0");
      return n > 0 || o > 0;
    },
    bt = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = $();
      n &&
        ht(n) &&
        (e && ((n.style.transition = "none"), (n.style.width = "100%")),
        setTimeout(function () {
          (n.style.transition = "width ".concat(t / 1e3, "s linear")), (n.style.width = "0%");
        }, 10));
    },
    yt = function () {
      return "undefined" == typeof window || "undefined" == typeof document;
    },
    wt = '\n <div aria-labelledby="'
      .concat(C.title, '" aria-describedby="')
      .concat(C["html-container"], '" class="')
      .concat(C.popup, '" tabindex="-1">\n   <button type="button" class="')
      .concat(C.close, '"></button>\n   <ul class="')
      .concat(C["progress-steps"], '"></ul>\n   <div class="')
      .concat(C.icon, '"></div>\n   <img class="')
      .concat(C.image, '" />\n   <h2 class="')
      .concat(C.title, '" id="')
      .concat(C.title, '"></h2>\n   <div class="')
      .concat(C["html-container"], '" id="')
      .concat(C["html-container"], '"></div>\n   <input class="')
      .concat(C.input, '" id="')
      .concat(C.input, '" />\n   <input type="file" class="')
      .concat(C.file, '" />\n   <div class="')
      .concat(C.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="')
      .concat(C.select, '" id="')
      .concat(C.select, '"></select>\n   <div class="')
      .concat(C.radio, '"></div>\n   <label class="')
      .concat(C.checkbox, '">\n     <input type="checkbox" id="')
      .concat(C.checkbox, '" />\n     <span class="')
      .concat(C.label, '"></span>\n   </label>\n   <textarea class="')
      .concat(C.textarea, '" id="')
      .concat(C.textarea, '"></textarea>\n   <div class="')
      .concat(C["validation-message"], '" id="')
      .concat(C["validation-message"], '"></div>\n   <div class="')
      .concat(C.actions, '">\n     <div class="')
      .concat(C.loader, '"></div>\n     <button type="button" class="')
      .concat(C.confirm, '"></button>\n     <button type="button" class="')
      .concat(C.deny, '"></button>\n     <button type="button" class="')
      .concat(C.cancel, '"></button>\n   </div>\n   <div class="')
      .concat(C.footer, '"></div>\n   <div class="')
      .concat(C["timer-progress-bar-container"], '">\n     <div class="')
      .concat(C["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
      .replace(/(^|\n)\s*/g, ""),
    Ct = function () {
      b.currentInstance.resetValidationMessage();
    },
    At = function (t) {
      var e,
        n = !!(e = M()) && (e.remove(), ct([document.documentElement, document.body], [C["no-backdrop"], C["toast-shown"], C["has-column"]]), !0);
      if (yt()) P("SweetAlert2 requires document to initialize");
      else {
        var o = document.createElement("div");
        (o.className = C.container), n && at(o, C["no-transition"]), tt(o, wt);
        var i,
          r,
          a,
          c,
          u,
          s,
          l,
          d,
          f,
          p = "string" == typeof (i = t.target) ? document.querySelector(i) : i;
        p.appendChild(o),
          (function (t) {
            var e = D();
            e.setAttribute("role", t.toast ? "alert" : "dialog"),
              e.setAttribute("aria-live", t.toast ? "polite" : "assertive"),
              t.toast || e.setAttribute("aria-modal", "true");
          })(t),
          (function (t) {
            "rtl" === window.getComputedStyle(t).direction && at(M(), C.rtl);
          })(p),
          (r = D()),
          (a = ut(r, C.input)),
          (c = ut(r, C.file)),
          (u = r.querySelector(".".concat(C.range, " input"))),
          (s = r.querySelector(".".concat(C.range, " output"))),
          (l = ut(r, C.select)),
          (d = r.querySelector(".".concat(C.checkbox, " input"))),
          (f = ut(r, C.textarea)),
          (a.oninput = Ct),
          (c.onchange = Ct),
          (l.onchange = Ct),
          (d.onchange = Ct),
          (f.oninput = Ct),
          (u.oninput = function () {
            Ct(), (s.value = u.value);
          }),
          (u.onchange = function () {
            Ct(), (s.value = u.value);
          });
      }
    },
    kt = function (e, n) {
      e instanceof HTMLElement ? n.appendChild(e) : "object" === t(e) ? Et(e, n) : e && tt(n, e);
    },
    Et = function (t, e) {
      t.jquery ? Bt(e, t) : tt(e, t.toString());
    },
    Bt = function (t, e) {
      if (((t.textContent = ""), 0 in e)) for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
      else t.appendChild(e.cloneNode(!0));
    },
    Pt = (function () {
      if (yt()) return !1;
      var t = document.createElement("div");
      return void 0 !== t.style.webkitAnimation ? "webkitAnimationEnd" : void 0 !== t.style.animation && "animationend";
    })(),
    Tt = function (t, e) {
      var n = Y(),
        o = K();
      n &&
        o &&
        (e.showConfirmButton || e.showDenyButton || e.showCancelButton ? lt(n) : dt(n),
        nt(n, e, "actions"),
        (function (t, e, n) {
          var o = U(),
            i = W(),
            r = z();
          if (!o || !i || !r) return;
          xt(o, "confirm", n),
            xt(i, "deny", n),
            xt(r, "cancel", n),
            (function (t, e, n, o) {
              if (!o.buttonsStyling) return void ct([t, e, n], C.styled);
              at([t, e, n], C.styled), o.confirmButtonColor && ((t.style.backgroundColor = o.confirmButtonColor), at(t, C["default-outline"]));
              o.denyButtonColor && ((e.style.backgroundColor = o.denyButtonColor), at(e, C["default-outline"]));
              o.cancelButtonColor && ((n.style.backgroundColor = o.cancelButtonColor), at(n, C["default-outline"]));
            })(o, i, r, n),
            n.reverseButtons &&
              (n.toast ? (t.insertBefore(r, o), t.insertBefore(i, o)) : (t.insertBefore(r, e), t.insertBefore(i, e), t.insertBefore(o, e)));
        })(n, o, e),
        tt(o, e.loaderHtml || ""),
        nt(o, e, "loader"));
    };
  function xt(t, e, n) {
    var o = E(e);
    mt(t, n["show".concat(o, "Button")], "inline-block"),
      tt(t, n["".concat(e, "ButtonText")] || ""),
      t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")] || ""),
      (t.className = C[e]),
      nt(t, n, "".concat(e, "Button"));
  }
  var St = function (t, e) {
    var n = M();
    n &&
      (!(function (t, e) {
        "string" == typeof e ? (t.style.background = e) : e || at([document.documentElement, document.body], C["no-backdrop"]);
      })(n, e.backdrop),
      (function (t, e) {
        if (!e) return;
        e in C ? at(t, C[e]) : (B('The "position" parameter is not valid, defaulting to "center"'), at(t, C.center));
      })(n, e.position),
      (function (t, e) {
        if (!e) return;
        at(t, C["grow-".concat(e)]);
      })(n, e.grow),
      nt(n, e, "container"));
  };
  var Ot = { innerParams: new WeakMap(), domCache: new WeakMap() },
    Lt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
    jt = function (t) {
      if (t.input)
        if (Rt[t.input]) {
          var e = qt(t.input),
            n = Rt[t.input](e, t);
          lt(e),
            t.inputAutoFocus &&
              setTimeout(function () {
                it(n);
              });
        } else P("Unexpected type of input! Expected ".concat(Object.keys(Rt).join(" | "), ', got "').concat(t.input, '"'));
    },
    Mt = function (t, e) {
      var n = ot(D(), t);
      if (n)
        for (var o in ((function (t) {
          for (var e = 0; e < t.attributes.length; e++) {
            var n = t.attributes[e].name;
            ["id", "type", "value", "style"].includes(n) || t.removeAttribute(n);
          }
        })(n),
        e))
          n.setAttribute(o, e[o]);
    },
    It = function (e) {
      var n = qt(e.input);
      "object" === t(e.customClass) && at(n, e.customClass.input);
    },
    Ht = function (t, e) {
      (t.placeholder && !e.inputPlaceholder) || (t.placeholder = e.inputPlaceholder);
    },
    Dt = function (e, n, o) {
      if (o.inputLabel) {
        var i = document.createElement("label"),
          r = C["input-label"];
        i.setAttribute("for", e.id),
          (i.className = r),
          "object" === t(o.customClass) && at(i, o.customClass.inputLabel),
          (i.innerText = o.inputLabel),
          n.insertAdjacentElement("beforebegin", i);
      }
    },
    qt = function (t) {
      return ut(D(), C[t] || C.input);
    },
    Vt = function (e, n) {
      ["string", "number"].includes(t(n))
        ? (e.value = "".concat(n))
        : j(n) || B('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(t(n), '"'));
    },
    Rt = {};
  (Rt.text =
    Rt.email =
    Rt.password =
    Rt.number =
    Rt.tel =
    Rt.url =
    Rt.search =
    Rt.date =
    Rt["datetime-local"] =
    Rt.time =
    Rt.week =
    Rt.month =
      function (t, e) {
        return Vt(t, e.inputValue), Dt(t, t, e), Ht(t, e), (t.type = e.input), t;
      }),
    (Rt.file = function (t, e) {
      return Dt(t, t, e), Ht(t, e), t;
    }),
    (Rt.range = function (t, e) {
      var n = t.querySelector("input"),
        o = t.querySelector("output");
      return Vt(n, e.inputValue), (n.type = e.input), Vt(o, e.inputValue), Dt(n, t, e), t;
    }),
    (Rt.select = function (t, e) {
      if (((t.textContent = ""), e.inputPlaceholder)) {
        var n = document.createElement("option");
        tt(n, e.inputPlaceholder), (n.value = ""), (n.disabled = !0), (n.selected = !0), t.appendChild(n);
      }
      return Dt(t, t, e), t;
    }),
    (Rt.radio = function (t) {
      return (t.textContent = ""), t;
    }),
    (Rt.checkbox = function (t, e) {
      var n = ot(D(), "checkbox");
      (n.value = "1"), (n.checked = Boolean(e.inputValue));
      var o = t.querySelector("span");
      return tt(o, e.inputPlaceholder), n;
    }),
    (Rt.textarea = function (t, e) {
      Vt(t, e.inputValue), Ht(t, e), Dt(t, t, e);
      return (
        setTimeout(function () {
          if ("MutationObserver" in window) {
            var n = parseInt(window.getComputedStyle(D()).width);
            new MutationObserver(function () {
              if (document.body.contains(t)) {
                var o,
                  i = t.offsetWidth + ((o = t), parseInt(window.getComputedStyle(o).marginLeft) + parseInt(window.getComputedStyle(o).marginRight));
                i > n ? (D().style.width = "".concat(i, "px")) : st(D(), "width", e.width);
              }
            }).observe(t, { attributes: !0, attributeFilter: ["style"] });
          }
        }),
        t
      );
    });
  var _t = function (t, e) {
      var n = R();
      n &&
        (ft(n),
        nt(n, e, "htmlContainer"),
        e.html ? (kt(e.html, n), lt(n, "block")) : e.text ? ((n.textContent = e.text), lt(n, "block")) : dt(n),
        (function (t, e) {
          var n = D();
          if (n) {
            var o = Ot.innerParams.get(t),
              i = !o || e.input !== o.input;
            Lt.forEach(function (t) {
              var o = ut(n, C[t]);
              o && (Mt(t, e.inputAttributes), (o.className = C[t]), i && dt(o));
            }),
              e.input && (i && jt(e), It(e));
          }
        })(t, e));
    },
    Nt = function (t, e) {
      for (var n = 0, o = Object.entries(A); n < o.length; n++) {
        var i = l(o[n], 2),
          r = i[0],
          a = i[1];
        e.icon !== r && ct(t, a);
      }
      at(t, e.icon && A[e.icon]), zt(t, e), Ft(), nt(t, e, "icon");
    },
    Ft = function () {
      var t = D();
      if (t)
        for (
          var e = window.getComputedStyle(t).getPropertyValue("background-color"),
            n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),
            o = 0;
          o < n.length;
          o++
        )
          n[o].style.backgroundColor = e;
    },
    Ut = function (t, e) {
      if (e.icon || e.iconHtml) {
        var n = t.innerHTML,
          o = "";
        if (e.iconHtml) o = Wt(e.iconHtml);
        else if ("success" === e.icon)
          (o =
            '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
            (n = n.replace(/ style=".*?"/g, ""));
        else if ("error" === e.icon)
          o =
            '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
        else if (e.icon) {
          o = Wt({ question: "?", warning: "!", info: "i" }[e.icon]);
        }
        n.trim() !== o.trim() && tt(t, o);
      }
    },
    zt = function (t, e) {
      if (e.iconColor) {
        (t.style.color = e.iconColor), (t.style.borderColor = e.iconColor);
        for (
          var n = 0, o = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"];
          n < o.length;
          n++
        ) {
          pt(t, o[n], "backgroundColor", e.iconColor);
        }
        pt(t, ".swal2-success-ring", "borderColor", e.iconColor);
      }
    },
    Wt = function (t) {
      return '<div class="'.concat(C["icon-content"], '">').concat(t, "</div>");
    },
    Kt = function (t, e) {
      var n = e.showClass || {};
      (t.className = "".concat(C.popup, " ").concat(ht(t) ? n.popup : "")),
        e.toast ? (at([document.documentElement, document.body], C["toast-shown"]), at(t, C.toast)) : at(t, C.modal),
        nt(t, e, "popup"),
        "string" == typeof e.customClass && at(t, e.customClass),
        e.icon && at(t, C["icon-".concat(e.icon)]);
    },
    Yt = function (t) {
      var e = document.createElement("li");
      return at(e, C["progress-step"]), tt(e, t), e;
    },
    Zt = function (t) {
      var e = document.createElement("li");
      return at(e, C["progress-step-line"]), t.progressStepsDistance && st(e, "width", t.progressStepsDistance), e;
    },
    $t = function (t, e) {
      !(function (t, e) {
        var n = M(),
          o = D();
        if (n && o) {
          if (e.toast) {
            st(n, "width", e.width), (o.style.width = "100%");
            var i = K();
            i && o.insertBefore(i, q());
          } else st(o, "width", e.width);
          st(o, "padding", e.padding), e.color && (o.style.color = e.color), e.background && (o.style.background = e.background), dt(F()), Kt(o, e);
        }
      })(0, e),
        St(0, e),
        (function (t, e) {
          var n = N();
          if (n) {
            var o = e.progressSteps,
              i = e.currentProgressStep;
            o && 0 !== o.length && void 0 !== i
              ? (lt(n),
                (n.textContent = ""),
                i >= o.length &&
                  B(
                    "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                  ),
                o.forEach(function (t, r) {
                  var a = Yt(t);
                  if ((n.appendChild(a), r === i && at(a, C["active-progress-step"]), r !== o.length - 1)) {
                    var c = Zt(e);
                    n.appendChild(c);
                  }
                }))
              : dt(n);
          }
        })(0, e),
        (function (t, e) {
          var n = Ot.innerParams.get(t),
            o = q();
          if (o) {
            if (n && e.icon === n.icon) return Ut(o, e), void Nt(o, e);
            if (e.icon || e.iconHtml) {
              if (e.icon && -1 === Object.keys(A).indexOf(e.icon))
                return P('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon, '"')), void dt(o);
              lt(o), Ut(o, e), Nt(o, e), at(o, e.showClass && e.showClass.icon);
            } else dt(o);
          }
        })(t, e),
        (function (t, e) {
          var n = _();
          n &&
            (e.imageUrl
              ? (lt(n, ""),
                n.setAttribute("src", e.imageUrl),
                n.setAttribute("alt", e.imageAlt || ""),
                st(n, "width", e.imageWidth),
                st(n, "height", e.imageHeight),
                (n.className = C.image),
                nt(n, e, "image"))
              : dt(n));
        })(0, e),
        (function (t, e) {
          var n = V();
          n &&
            (ft(n), mt(n, e.title || e.titleText, "block"), e.title && kt(e.title, n), e.titleText && (n.innerText = e.titleText), nt(n, e, "title"));
        })(0, e),
        (function (t, e) {
          var n = J();
          n &&
            (tt(n, e.closeButtonHtml || ""),
            nt(n, e, "closeButton"),
            mt(n, e.showCloseButton),
            n.setAttribute("aria-label", e.closeButtonAriaLabel || ""));
        })(0, e),
        _t(t, e),
        Tt(0, e),
        (function (t, e) {
          var n = Z();
          n && (ft(n), mt(n, e.footer, "block"), e.footer && kt(e.footer, n), nt(n, e, "footer"));
        })(0, e);
      var n = D();
      "function" == typeof e.didRender && n && e.didRender(n);
    },
    Jt = function () {
      var t;
      return null === (t = U()) || void 0 === t ? void 0 : t.click();
    },
    Xt = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
    Gt = function (t) {
      t.keydownTarget &&
        t.keydownHandlerAdded &&
        (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }), (t.keydownHandlerAdded = !1));
    },
    Qt = function (t, e) {
      var n,
        o = X();
      if (o.length) return (t += e) === o.length ? (t = 0) : -1 === t && (t = o.length - 1), void o[t].focus();
      null === (n = D()) || void 0 === n || n.focus();
    },
    te = ["ArrowRight", "ArrowDown"],
    ee = ["ArrowLeft", "ArrowUp"],
    ne = function (t, e, n) {
      t &&
        (e.isComposing ||
          229 === e.keyCode ||
          (t.stopKeydownPropagation && e.stopPropagation(),
          "Enter" === e.key
            ? oe(e, t)
            : "Tab" === e.key
            ? ie(e)
            : [].concat(te, ee).includes(e.key)
            ? re(e.key)
            : "Escape" === e.key && ae(e, t, n)));
    },
    oe = function (t, e) {
      if (S(e.allowEnterKey)) {
        var n = ot(D(), e.input);
        if (t.target && n && t.target instanceof HTMLElement && t.target.outerHTML === n.outerHTML) {
          if (["textarea", "file"].includes(e.input)) return;
          Jt(), t.preventDefault();
        }
      }
    },
    ie = function (t) {
      for (var e = t.target, n = X(), o = -1, i = 0; i < n.length; i++)
        if (e === n[i]) {
          o = i;
          break;
        }
      t.shiftKey ? Qt(o, -1) : Qt(o, 1), t.stopPropagation(), t.preventDefault();
    },
    re = function (t) {
      var e = Y(),
        n = U(),
        o = W(),
        i = z();
      if (e && n && o && i) {
        var r = [n, o, i];
        if (!(document.activeElement instanceof HTMLElement) || r.includes(document.activeElement)) {
          var a = te.includes(t) ? "nextElementSibling" : "previousElementSibling",
            c = document.activeElement;
          if (c) {
            for (var u = 0; u < e.children.length; u++) {
              if (!(c = c[a])) return;
              if (c instanceof HTMLButtonElement && ht(c)) break;
            }
            c instanceof HTMLButtonElement && c.focus();
          }
        }
      }
    },
    ae = function (t, e, n) {
      S(e.allowEscapeKey) && (t.preventDefault(), n(Xt.esc));
    },
    ce = { swalPromiseResolve: new WeakMap(), swalPromiseReject: new WeakMap() },
    ue = function () {
      Array.from(document.body.children).forEach(function (t) {
        t.hasAttribute("data-previous-aria-hidden")
          ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden") || ""), t.removeAttribute("data-previous-aria-hidden"))
          : t.removeAttribute("aria-hidden");
      });
    },
    se = "undefined" != typeof window && !!window.GestureEvent,
    le = function () {
      var t,
        e = M();
      e &&
        ((e.ontouchstart = function (e) {
          t = de(e);
        }),
        (e.ontouchmove = function (e) {
          t && (e.preventDefault(), e.stopPropagation());
        }));
    },
    de = function (t) {
      var e = t.target,
        n = M(),
        o = R();
      return (
        !(!n || !o) &&
        !fe(t) &&
        !pe(t) &&
        (e === n || (!vt(n) && e instanceof HTMLElement && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName && (!vt(o) || !o.contains(e))))
      );
    },
    fe = function (t) {
      return t.touches && t.touches.length && "stylus" === t.touches[0].touchType;
    },
    pe = function (t) {
      return t.touches && t.touches.length > 1;
    },
    me = null,
    he = function (t) {
      null === me &&
        (document.body.scrollHeight > window.innerHeight || "scroll" === t) &&
        ((me = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"))),
        (document.body.style.paddingRight = "".concat(
          me +
            (function () {
              var t = document.createElement("div");
              (t.className = C["scrollbar-measure"]), document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            })(),
          "px"
        )));
    };
  function ve(t, e, n, o) {
    Q()
      ? Ee(t, o)
      : (y(n).then(function () {
          return Ee(t, o);
        }),
        Gt(b)),
      se ? (e.setAttribute("style", "display:none !important"), e.removeAttribute("class"), (e.innerHTML = "")) : e.remove(),
      G() &&
        (null !== me && ((document.body.style.paddingRight = "".concat(me, "px")), (me = null)),
        (function () {
          if (et(document.body, C.iosfix)) {
            var t = parseInt(document.body.style.top, 10);
            ct(document.body, C.iosfix), (document.body.style.top = ""), (document.body.scrollTop = -1 * t);
          }
        })(),
        ue()),
      ct([document.documentElement, document.body], [C.shown, C["height-auto"], C["no-backdrop"], C["toast-shown"]]);
  }
  function ge(t) {
    t = Ce(t);
    var e = ce.swalPromiseResolve.get(this),
      n = be(this);
    this.isAwaitingPromise ? t.isDismissed || (we(this), e(t)) : n && e(t);
  }
  var be = function (t) {
    var e = D();
    if (!e) return !1;
    var n = Ot.innerParams.get(t);
    if (!n || et(e, n.hideClass.popup)) return !1;
    ct(e, n.showClass.popup), at(e, n.hideClass.popup);
    var o = M();
    return ct(o, n.showClass.backdrop), at(o, n.hideClass.backdrop), Ae(t, e, n), !0;
  };
  function ye(t) {
    var e = ce.swalPromiseReject.get(this);
    we(this), e && e(t);
  }
  var we = function (t) {
      t.isAwaitingPromise && (delete t.isAwaitingPromise, Ot.innerParams.get(t) || t._destroy());
    },
    Ce = function (t) {
      return void 0 === t ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 } : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, t);
    },
    Ae = function (t, e, n) {
      var o = M(),
        i = Pt && gt(e);
      "function" == typeof n.willClose && n.willClose(e), i ? ke(t, e, o, n.returnFocus, n.didClose) : ve(t, o, n.returnFocus, n.didClose);
    },
    ke = function (t, e, n, o, i) {
      Pt &&
        ((b.swalCloseEventFinishedCallback = ve.bind(null, t, n, o, i)),
        e.addEventListener(Pt, function (t) {
          t.target === e && (b.swalCloseEventFinishedCallback(), delete b.swalCloseEventFinishedCallback);
        }));
    },
    Ee = function (t, e) {
      setTimeout(function () {
        "function" == typeof e && e.bind(t.params)(), t._destroy && t._destroy();
      });
    },
    Be = function (t) {
      var e = D();
      if ((e || new ro(), (e = D()))) {
        var n = K();
        Q() ? dt(q()) : Pe(e, t), lt(n), e.setAttribute("data-loading", "true"), e.setAttribute("aria-busy", "true"), e.focus();
      }
    },
    Pe = function (t, e) {
      var n = Y(),
        o = K();
      n &&
        o &&
        (!e && ht(U()) && (e = U()),
        lt(n),
        e && (dt(e), o.setAttribute("data-button-to-replace", e.className), n.insertBefore(o, e)),
        at([t, n], C.loading));
    },
    Te = function (t) {
      return t.checked ? 1 : 0;
    },
    xe = function (t) {
      return t.checked ? t.value : null;
    },
    Se = function (t) {
      return t.files && t.files.length ? (null !== t.getAttribute("multiple") ? t.files : t.files[0]) : null;
    },
    Oe = function (e, n) {
      var o = D();
      if (o) {
        var i = function (t) {
          "select" === n.input
            ? (function (t, e, n) {
                var o = ut(t, C.select);
                if (!o) return;
                var i = function (t, e, o) {
                  var i = document.createElement("option");
                  (i.value = o), tt(i, e), (i.selected = Me(o, n.inputValue)), t.appendChild(i);
                };
                e.forEach(function (t) {
                  var e = t[0],
                    n = t[1];
                  if (Array.isArray(n)) {
                    var r = document.createElement("optgroup");
                    (r.label = e),
                      (r.disabled = !1),
                      o.appendChild(r),
                      n.forEach(function (t) {
                        return i(r, t[1], t[0]);
                      });
                  } else i(o, n, e);
                }),
                  o.focus();
              })(o, je(t), n)
            : "radio" === n.input &&
              (function (t, e, n) {
                var o = ut(t, C.radio);
                if (!o) return;
                e.forEach(function (t) {
                  var e = t[0],
                    i = t[1],
                    r = document.createElement("input"),
                    a = document.createElement("label");
                  (r.type = "radio"), (r.name = C.radio), (r.value = e), Me(e, n.inputValue) && (r.checked = !0);
                  var c = document.createElement("span");
                  tt(c, i), (c.className = C.label), a.appendChild(r), a.appendChild(c), o.appendChild(a);
                });
                var i = o.querySelectorAll("input");
                i.length && i[0].focus();
              })(o, je(t), n);
        };
        O(n.inputOptions) || j(n.inputOptions)
          ? (Be(U()),
            L(n.inputOptions).then(function (t) {
              e.hideLoading(), i(t);
            }))
          : "object" === t(n.inputOptions)
          ? i(n.inputOptions)
          : P("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(t(n.inputOptions)));
      }
    },
    Le = function (t, e) {
      var n = t.getInput();
      n &&
        (dt(n),
        L(e.inputValue)
          .then(function (o) {
            (n.value = "number" === e.input ? "".concat(parseFloat(o) || 0) : "".concat(o)), lt(n), n.focus(), t.hideLoading();
          })
          .catch(function (e) {
            P("Error in inputValue promise: ".concat(e)), (n.value = ""), lt(n), n.focus(), t.hideLoading();
          }));
    };
  var je = function e(n) {
      var o = [];
      return (
        n instanceof Map
          ? n.forEach(function (n, i) {
              var r = n;
              "object" === t(r) && (r = e(r)), o.push([i, r]);
            })
          : Object.keys(n).forEach(function (i) {
              var r = n[i];
              "object" === t(r) && (r = e(r)), o.push([i, r]);
            }),
        o
      );
    },
    Me = function (t, e) {
      return !!e && e.toString() === t.toString();
    },
    Ie = void 0,
    He = function (t, e) {
      var n = Ot.innerParams.get(t);
      if (n.input) {
        var o = t.getInput(),
          i = (function (t, e) {
            var n = t.getInput();
            if (!n) return null;
            switch (e.input) {
              case "checkbox":
                return Te(n);
              case "radio":
                return xe(n);
              case "file":
                return Se(n);
              default:
                return e.inputAutoTrim ? n.value.trim() : n.value;
            }
          })(t, n);
        n.inputValidator
          ? De(t, i, e)
          : o && !o.checkValidity()
          ? (t.enableButtons(), t.showValidationMessage(n.validationMessage))
          : "deny" === e
          ? qe(t, i)
          : _e(t, i);
      } else P('The "input" parameter is needed to be set when using returnInputValueOn'.concat(E(e)));
    },
    De = function (t, e, n) {
      var o = Ot.innerParams.get(t);
      t.disableInput(),
        Promise.resolve()
          .then(function () {
            return L(o.inputValidator(e, o.validationMessage));
          })
          .then(function (o) {
            t.enableButtons(), t.enableInput(), o ? t.showValidationMessage(o) : "deny" === n ? qe(t, e) : _e(t, e);
          });
    },
    qe = function (t, e) {
      var n = Ot.innerParams.get(t || Ie);
      (n.showLoaderOnDeny && Be(W()), n.preDeny)
        ? ((t.isAwaitingPromise = !0),
          Promise.resolve()
            .then(function () {
              return L(n.preDeny(e, n.validationMessage));
            })
            .then(function (n) {
              !1 === n ? (t.hideLoading(), we(t)) : t.close({ isDenied: !0, value: void 0 === n ? e : n });
            })
            .catch(function (e) {
              return Re(t || Ie, e);
            }))
        : t.close({ isDenied: !0, value: e });
    },
    Ve = function (t, e) {
      t.close({ isConfirmed: !0, value: e });
    },
    Re = function (t, e) {
      t.rejectPromise(e);
    },
    _e = function (t, e) {
      var n = Ot.innerParams.get(t || Ie);
      (n.showLoaderOnConfirm && Be(), n.preConfirm)
        ? (t.resetValidationMessage(),
          (t.isAwaitingPromise = !0),
          Promise.resolve()
            .then(function () {
              return L(n.preConfirm(e, n.validationMessage));
            })
            .then(function (n) {
              ht(F()) || !1 === n ? (t.hideLoading(), we(t)) : Ve(t, void 0 === n ? e : n);
            })
            .catch(function (e) {
              return Re(t || Ie, e);
            }))
        : Ve(t, e);
    };
  function Ne() {
    var t = Ot.innerParams.get(this);
    if (t) {
      var e = Ot.domCache.get(this);
      dt(e.loader),
        Q() ? t.icon && lt(q()) : Fe(e),
        ct([e.popup, e.actions], C.loading),
        e.popup.removeAttribute("aria-busy"),
        e.popup.removeAttribute("data-loading"),
        (e.confirmButton.disabled = !1),
        (e.denyButton.disabled = !1),
        (e.cancelButton.disabled = !1);
    }
  }
  var Fe = function (t) {
    var e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));
    e.length ? lt(e[0], "inline-block") : ht(U()) || ht(W()) || ht(z()) || dt(t.actions);
  };
  function Ue() {
    var t = Ot.innerParams.get(this),
      e = Ot.domCache.get(this);
    return e ? ot(e.popup, t.input) : null;
  }
  function ze(t, e, n) {
    var o = Ot.domCache.get(t);
    e.forEach(function (t) {
      o[t].disabled = n;
    });
  }
  function We(t, e) {
    var n = D();
    if (n && t)
      if ("radio" === t.type) for (var o = n.querySelectorAll('[name="'.concat(C.radio, '"]')), i = 0; i < o.length; i++) o[i].disabled = e;
      else t.disabled = e;
  }
  function Ke() {
    ze(this, ["confirmButton", "denyButton", "cancelButton"], !1);
  }
  function Ye() {
    ze(this, ["confirmButton", "denyButton", "cancelButton"], !0);
  }
  function Ze() {
    We(this.getInput(), !1);
  }
  function $e() {
    We(this.getInput(), !0);
  }
  function Je(t) {
    var e = Ot.domCache.get(this),
      n = Ot.innerParams.get(this);
    tt(e.validationMessage, t),
      (e.validationMessage.className = C["validation-message"]),
      n.customClass && n.customClass.validationMessage && at(e.validationMessage, n.customClass.validationMessage),
      lt(e.validationMessage);
    var o = this.getInput();
    o && (o.setAttribute("aria-invalid", "true"), o.setAttribute("aria-describedby", C["validation-message"]), it(o), at(o, C.inputerror));
  }
  function Xe() {
    var t = Ot.domCache.get(this);
    t.validationMessage && dt(t.validationMessage);
    var e = this.getInput();
    e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedby"), ct(e, C.inputerror));
  }
  var Ge = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      animation: !0,
      showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" },
      hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: !0,
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0,
    },
    Qe = [
      "allowEscapeKey",
      "allowOutsideClick",
      "background",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "color",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "denyButtonAriaLabel",
      "denyButtonColor",
      "denyButtonText",
      "didClose",
      "didDestroy",
      "footer",
      "hideClass",
      "html",
      "icon",
      "iconColor",
      "iconHtml",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "preConfirm",
      "preDeny",
      "progressSteps",
      "returnFocus",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "showDenyButton",
      "text",
      "title",
      "titleText",
      "willClose",
    ],
    tn = {},
    en = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "focusConfirm",
      "focusDeny",
      "focusCancel",
      "returnFocus",
      "heightAuto",
      "keydownListenerCapture",
    ],
    nn = function (t) {
      return Object.prototype.hasOwnProperty.call(Ge, t);
    },
    on = function (t) {
      return -1 !== Qe.indexOf(t);
    },
    rn = function (t) {
      return tn[t];
    },
    an = function (t) {
      nn(t) || B('Unknown parameter "'.concat(t, '"'));
    },
    cn = function (t) {
      en.includes(t) && B('The parameter "'.concat(t, '" is incompatible with toasts'));
    },
    un = function (t) {
      var e = rn(t);
      e && x(t, e);
    };
  function sn(t) {
    var e = D(),
      n = Ot.innerParams.get(this);
    if (e && !et(e, n.hideClass.popup)) {
      var o = ln(t),
        i = Object.assign({}, n, o);
      $t(this, i),
        Ot.innerParams.set(this, i),
        Object.defineProperties(this, { params: { value: Object.assign({}, this.params, t), writable: !1, enumerable: !0 } });
    } else B("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
  }
  var ln = function (t) {
    var e = {};
    return (
      Object.keys(t).forEach(function (n) {
        on(n) ? (e[n] = t[n]) : B("Invalid parameter to update: ".concat(n));
      }),
      e
    );
  };
  function dn() {
    var t = Ot.domCache.get(this),
      e = Ot.innerParams.get(this);
    e
      ? (t.popup && b.swalCloseEventFinishedCallback && (b.swalCloseEventFinishedCallback(), delete b.swalCloseEventFinishedCallback),
        "function" == typeof e.didDestroy && e.didDestroy(),
        fn(this))
      : pn(this);
  }
  var fn = function (t) {
      pn(t), delete t.params, delete b.keydownHandler, delete b.keydownTarget, delete b.currentInstance;
    },
    pn = function (t) {
      t.isAwaitingPromise
        ? (mn(Ot, t), (t.isAwaitingPromise = !0))
        : (mn(ce, t),
          mn(Ot, t),
          delete t.isAwaitingPromise,
          delete t.disableButtons,
          delete t.enableButtons,
          delete t.getInput,
          delete t.disableInput,
          delete t.enableInput,
          delete t.hideLoading,
          delete t.disableLoading,
          delete t.showValidationMessage,
          delete t.resetValidationMessage,
          delete t.close,
          delete t.closePopup,
          delete t.closeModal,
          delete t.closeToast,
          delete t.rejectPromise,
          delete t.update,
          delete t._destroy);
    },
    mn = function (t, e) {
      for (var n in t) t[n].delete(e);
    },
    hn = Object.freeze({
      __proto__: null,
      _destroy: dn,
      close: ge,
      closeModal: ge,
      closePopup: ge,
      closeToast: ge,
      disableButtons: Ye,
      disableInput: $e,
      disableLoading: Ne,
      enableButtons: Ke,
      enableInput: Ze,
      getInput: Ue,
      handleAwaitingPromise: we,
      hideLoading: Ne,
      rejectPromise: ye,
      resetValidationMessage: Xe,
      showValidationMessage: Je,
      update: sn,
    }),
    vn = function (t, e, n) {
      e.popup.onclick = function () {
        (t && (gn(t) || t.timer || t.input)) || n(Xt.close);
      };
    },
    gn = function (t) {
      return !!(t.showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton);
    },
    bn = !1,
    yn = function (t) {
      t.popup.onmousedown = function () {
        t.container.onmouseup = function (e) {
          (t.container.onmouseup = function () {}), e.target === t.container && (bn = !0);
        };
      };
    },
    wn = function (t) {
      t.container.onmousedown = function () {
        t.popup.onmouseup = function (e) {
          (t.popup.onmouseup = function () {}),
            (e.target === t.popup || (e.target instanceof HTMLElement && t.popup.contains(e.target))) && (bn = !0);
        };
      };
    },
    Cn = function (t, e, n) {
      e.container.onclick = function (o) {
        bn ? (bn = !1) : o.target === e.container && S(t.allowOutsideClick) && n(Xt.backdrop);
      };
    },
    An = function (e) {
      return (
        e instanceof Element ||
        (function (e) {
          return "object" === t(e) && e.jquery;
        })(e)
      );
    };
  var kn = function () {
      if (b.timeout)
        return (
          (function () {
            var t = $();
            if (t) {
              var e = parseInt(window.getComputedStyle(t).width);
              t.style.removeProperty("transition"), (t.style.width = "100%");
              var n = (e / parseInt(window.getComputedStyle(t).width)) * 100;
              t.style.width = "".concat(n, "%");
            }
          })(),
          b.timeout.stop()
        );
    },
    En = function () {
      if (b.timeout) {
        var t = b.timeout.start();
        return bt(t), t;
      }
    },
    Bn = !1,
    Pn = {};
  var Tn,
    xn = function (t) {
      for (var e = t.target; e && e !== document; e = e.parentNode)
        for (var n in Pn) {
          var o = e.getAttribute(n);
          if (o) return void Pn[n].fire({ template: o });
        }
    },
    Sn = Object.freeze({
      __proto__: null,
      argsToParams: function (e) {
        var n = {};
        return (
          "object" !== t(e[0]) || An(e[0])
            ? ["title", "html", "icon"].forEach(function (o, i) {
                var r = e[i];
                "string" == typeof r || An(r)
                  ? (n[o] = r)
                  : void 0 !== r && P("Unexpected type of ".concat(o, '! Expected "string" or "Element", got ').concat(t(r)));
              })
            : Object.assign(n, e[0]),
          n
        );
      },
      bindClickHandler: function () {
        (Pn[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "data-swal-template"] = this),
          Bn || (document.body.addEventListener("click", xn), (Bn = !0));
      },
      clickCancel: function () {
        var t;
        return null === (t = z()) || void 0 === t ? void 0 : t.click();
      },
      clickConfirm: Jt,
      clickDeny: function () {
        var t;
        return null === (t = W()) || void 0 === t ? void 0 : t.click();
      },
      enableLoading: Be,
      fire: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return c(this, e);
      },
      getActions: Y,
      getCancelButton: z,
      getCloseButton: J,
      getConfirmButton: U,
      getContainer: M,
      getDenyButton: W,
      getFocusableElements: X,
      getFooter: Z,
      getHtmlContainer: R,
      getIcon: q,
      getIconContent: function () {
        return H(C["icon-content"]);
      },
      getImage: _,
      getInputLabel: function () {
        return H(C["input-label"]);
      },
      getLoader: K,
      getPopup: D,
      getProgressSteps: N,
      getTimerLeft: function () {
        return b.timeout && b.timeout.getTimerLeft();
      },
      getTimerProgressBar: $,
      getTitle: V,
      getValidationMessage: F,
      increaseTimer: function (t) {
        if (b.timeout) {
          var e = b.timeout.increase(t);
          return bt(e, !0), e;
        }
      },
      isDeprecatedParameter: rn,
      isLoading: function () {
        var t = D();
        return !!t && t.hasAttribute("data-loading");
      },
      isTimerRunning: function () {
        return !(!b.timeout || !b.timeout.isRunning());
      },
      isUpdatableParameter: on,
      isValidParameter: nn,
      isVisible: function () {
        return ht(D());
      },
      mixin: function (t) {
        var n = (function (n) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && r(t, e);
          })(f, n);
          var c,
            l,
            d =
              ((c = f),
              (l = a()),
              function () {
                var t,
                  e = i(c);
                if (l) {
                  var n = i(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return u(this, t);
              });
          function f() {
            return e(this, f), d.apply(this, arguments);
          }
          return (
            o(f, [
              {
                key: "_main",
                value: function (e, n) {
                  return s(i(f.prototype), "_main", this).call(this, e, Object.assign({}, t, n));
                },
              },
            ]),
            f
          );
        })(this);
        return n;
      },
      resumeTimer: En,
      showLoading: Be,
      stopTimer: kn,
      toggleTimer: function () {
        var t = b.timeout;
        return t && (t.running ? kn() : En());
      },
    }),
    On = (function () {
      function t(n, o) {
        e(this, t), (this.callback = n), (this.remaining = o), (this.running = !1), this.start();
      }
      return (
        o(t, [
          {
            key: "start",
            value: function () {
              return (
                this.running || ((this.running = !0), (this.started = new Date()), (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            },
          },
          {
            key: "stop",
            value: function () {
              return (
                this.started &&
                  this.running &&
                  ((this.running = !1), clearTimeout(this.id), (this.remaining -= new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            },
          },
          {
            key: "increase",
            value: function (t) {
              var e = this.running;
              return e && this.stop(), (this.remaining += t), e && this.start(), this.remaining;
            },
          },
          {
            key: "getTimerLeft",
            value: function () {
              return this.running && (this.stop(), this.start()), this.remaining;
            },
          },
          {
            key: "isRunning",
            value: function () {
              return this.running;
            },
          },
        ]),
        t
      );
    })(),
    Ln = ["swal-title", "swal-html", "swal-footer"],
    jn = function (e) {
      var n = {};
      return (
        Array.from(e.querySelectorAll("swal-param")).forEach(function (e) {
          _n(e, ["name", "value"]);
          var o = e.getAttribute("name"),
            i = e.getAttribute("value");
          "boolean" == typeof Ge[o] ? (n[o] = "false" !== i) : "object" === t(Ge[o]) ? (n[o] = JSON.parse(i)) : (n[o] = i);
        }),
        n
      );
    },
    Mn = function (t) {
      var e = {};
      return (
        Array.from(t.querySelectorAll("swal-function-param")).forEach(function (t) {
          var n = t.getAttribute("name"),
            o = t.getAttribute("value");
          e[n] = new Function("return ".concat(o))();
        }),
        e
      );
    },
    In = function (t) {
      var e = {};
      return (
        Array.from(t.querySelectorAll("swal-button")).forEach(function (t) {
          _n(t, ["type", "color", "aria-label"]);
          var n = t.getAttribute("type");
          (e["".concat(n, "ButtonText")] = t.innerHTML),
            (e["show".concat(E(n), "Button")] = !0),
            t.hasAttribute("color") && (e["".concat(n, "ButtonColor")] = t.getAttribute("color")),
            t.hasAttribute("aria-label") && (e["".concat(n, "ButtonAriaLabel")] = t.getAttribute("aria-label"));
        }),
        e
      );
    },
    Hn = function (t) {
      var e = {},
        n = t.querySelector("swal-image");
      return (
        n &&
          (_n(n, ["src", "width", "height", "alt"]),
          n.hasAttribute("src") && (e.imageUrl = n.getAttribute("src")),
          n.hasAttribute("width") && (e.imageWidth = n.getAttribute("width")),
          n.hasAttribute("height") && (e.imageHeight = n.getAttribute("height")),
          n.hasAttribute("alt") && (e.imageAlt = n.getAttribute("alt"))),
        e
      );
    },
    Dn = function (t) {
      var e = {},
        n = t.querySelector("swal-icon");
      return (
        n &&
          (_n(n, ["type", "color"]),
          n.hasAttribute("type") && (e.icon = n.getAttribute("type")),
          n.hasAttribute("color") && (e.iconColor = n.getAttribute("color")),
          (e.iconHtml = n.innerHTML)),
        e
      );
    },
    qn = function (t) {
      var e = {},
        n = t.querySelector("swal-input");
      n &&
        (_n(n, ["type", "label", "placeholder", "value"]),
        (e.input = n.getAttribute("type") || "text"),
        n.hasAttribute("label") && (e.inputLabel = n.getAttribute("label")),
        n.hasAttribute("placeholder") && (e.inputPlaceholder = n.getAttribute("placeholder")),
        n.hasAttribute("value") && (e.inputValue = n.getAttribute("value")));
      var o = Array.from(t.querySelectorAll("swal-input-option"));
      return (
        o.length &&
          ((e.inputOptions = {}),
          o.forEach(function (t) {
            _n(t, ["value"]);
            var n = t.getAttribute("value"),
              o = t.innerHTML;
            e.inputOptions[n] = o;
          })),
        e
      );
    },
    Vn = function (t, e) {
      var n = {};
      for (var o in e) {
        var i = e[o],
          r = t.querySelector(i);
        r && (_n(r, []), (n[i.replace(/^swal-/, "")] = r.innerHTML.trim()));
      }
      return n;
    },
    Rn = function (t) {
      var e = Ln.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
      Array.from(t.children).forEach(function (t) {
        var n = t.tagName.toLowerCase();
        e.includes(n) || B("Unrecognized element <".concat(n, ">"));
      });
    },
    _n = function (t, e) {
      Array.from(t.attributes).forEach(function (n) {
        -1 === e.indexOf(n.name) &&
          B([
            'Unrecognized attribute "'.concat(n.name, '" on <').concat(t.tagName.toLowerCase(), ">."),
            "".concat(e.length ? "Allowed attributes are: ".concat(e.join(", ")) : "To set the value, use HTML within the element."),
          ]);
      });
    },
    Nn = function (t) {
      var e = M(),
        n = D();
      "function" == typeof t.willOpen && t.willOpen(n);
      var o = window.getComputedStyle(document.body).overflowY;
      Wn(e, n, t),
        setTimeout(function () {
          Un(e, n);
        }, 10),
        G() &&
          (zn(e, t.scrollbarPadding, o),
          Array.from(document.body.children).forEach(function (t) {
            t === M() ||
              t.contains(M()) ||
              (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden") || ""),
              t.setAttribute("aria-hidden", "true"));
          })),
        Q() || b.previousActiveElement || (b.previousActiveElement = document.activeElement),
        "function" == typeof t.didOpen &&
          setTimeout(function () {
            return t.didOpen(n);
          }),
        ct(e, C["no-transition"]);
    },
    Fn = function t(e) {
      var n = D();
      if (e.target === n && Pt) {
        var o = M();
        n.removeEventListener(Pt, t), (o.style.overflowY = "auto");
      }
    },
    Un = function (t, e) {
      Pt && gt(e) ? ((t.style.overflowY = "hidden"), e.addEventListener(Pt, Fn)) : (t.style.overflowY = "auto");
    },
    zn = function (t, e, n) {
      !(function () {
        if (se && !et(document.body, C.iosfix)) {
          var t = document.body.scrollTop;
          (document.body.style.top = "".concat(-1 * t, "px")), at(document.body, C.iosfix), le();
        }
      })(),
        e && "hidden" !== n && he(n),
        setTimeout(function () {
          t.scrollTop = 0;
        });
    },
    Wn = function (t, e, n) {
      at(t, n.showClass.backdrop),
        n.animation
          ? (e.style.setProperty("opacity", "0", "important"),
            lt(e, "grid"),
            setTimeout(function () {
              at(e, n.showClass.popup), e.style.removeProperty("opacity");
            }, 10))
          : lt(e, "grid"),
        at([document.documentElement, document.body], C.shown),
        n.heightAuto && n.backdrop && !n.toast && at([document.documentElement, document.body], C["height-auto"]);
    },
    Kn = {
      email: function (t, e) {
        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address");
      },
      url: function (t, e) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)
          ? Promise.resolve()
          : Promise.resolve(e || "Invalid URL");
      },
    };
  function Yn(t) {
    !(function (t) {
      t.inputValidator || ("email" === t.input && (t.inputValidator = Kn.email), "url" === t.input && (t.inputValidator = Kn.url));
    })(t),
      t.showLoaderOnConfirm &&
        !t.preConfirm &&
        B(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      (function (t) {
        (!t.target || ("string" == typeof t.target && !document.querySelector(t.target)) || ("string" != typeof t.target && !t.target.appendChild)) &&
          (B('Target parameter is not valid, defaulting to "body"'), (t.target = "body"));
      })(t),
      "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")),
      At(t);
  }
  var Zn = new WeakMap(),
    $n = (function () {
      function t() {
        if ((e(this, t), g(this, Zn, { writable: !0, value: void 0 }), "undefined" != typeof window)) {
          Tn = this;
          for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
          var r = Object.freeze(this.constructor.argsToParams(o));
          (this.params = r), (this.isAwaitingPromise = !1), h(this, Zn, this._main(Tn.params));
        }
      }
      return (
        o(t, [
          {
            key: "_main",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (
                ((function (t) {
                  for (var e in (!1 === t.backdrop &&
                    t.allowOutsideClick &&
                    B('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),
                  t))
                    an(e), t.toast && cn(e), un(e);
                })(Object.assign({}, e, t)),
                b.currentInstance)
              ) {
                var n = ce.swalPromiseResolve.get(b.currentInstance),
                  o = b.currentInstance.isAwaitingPromise;
                b.currentInstance._destroy(), o || n({ isDismissed: !0 }), G() && ue();
              }
              b.currentInstance = Tn;
              var i = Xn(t, e);
              Yn(i), Object.freeze(i), b.timeout && (b.timeout.stop(), delete b.timeout), clearTimeout(b.restoreFocusTimeout);
              var r = Gn(Tn);
              return $t(Tn, i), Ot.innerParams.set(Tn, i), Jn(Tn, r, i);
            },
          },
          {
            key: "then",
            value: function (t) {
              return m(this, Zn).then(t);
            },
          },
          {
            key: "finally",
            value: function (t) {
              return m(this, Zn).finally(t);
            },
          },
        ]),
        t
      );
    })(),
    Jn = function (t, e, n) {
      return new Promise(function (o, i) {
        var r = function (e) {
          t.close({ isDismissed: !0, dismiss: e });
        };
        ce.swalPromiseResolve.set(t, o),
          ce.swalPromiseReject.set(t, i),
          (e.confirmButton.onclick = function () {
            !(function (t) {
              var e = Ot.innerParams.get(t);
              t.disableButtons(), e.input ? He(t, "confirm") : _e(t, !0);
            })(t);
          }),
          (e.denyButton.onclick = function () {
            !(function (t) {
              var e = Ot.innerParams.get(t);
              t.disableButtons(), e.returnInputValueOnDeny ? He(t, "deny") : qe(t, !1);
            })(t);
          }),
          (e.cancelButton.onclick = function () {
            !(function (t, e) {
              t.disableButtons(), e(Xt.cancel);
            })(t, r);
          }),
          (e.closeButton.onclick = function () {
            r(Xt.close);
          }),
          (function (t, e, n) {
            t.toast ? vn(t, e, n) : (yn(e), wn(e), Cn(t, e, n));
          })(n, e, r),
          (function (t, e, n) {
            Gt(t),
              e.toast ||
                ((t.keydownHandler = function (t) {
                  return ne(e, t, n);
                }),
                (t.keydownTarget = e.keydownListenerCapture ? window : D()),
                (t.keydownListenerCapture = e.keydownListenerCapture),
                t.keydownTarget.addEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }),
                (t.keydownHandlerAdded = !0));
          })(b, n, r),
          (function (t, e) {
            "select" === e.input || "radio" === e.input
              ? Oe(t, e)
              : ["text", "email", "number", "tel", "textarea"].some(function (t) {
                  return t === e.input;
                }) &&
                (O(e.inputValue) || j(e.inputValue)) &&
                (Be(U()), Le(t, e));
          })(t, n),
          Nn(n),
          Qn(b, n, r),
          to(e, n),
          setTimeout(function () {
            e.container.scrollTop = 0;
          });
      });
    },
    Xn = function (t, e) {
      var n = (function (t) {
          var e = "string" == typeof t.template ? document.querySelector(t.template) : t.template;
          if (!e) return {};
          var n = e.content;
          return Rn(n), Object.assign(jn(n), Mn(n), In(n), Hn(n), Dn(n), qn(n), Vn(n, Ln));
        })(t),
        o = Object.assign({}, Ge, e, n, t);
      return (
        (o.showClass = Object.assign({}, Ge.showClass, o.showClass)),
        (o.hideClass = Object.assign({}, Ge.hideClass, o.hideClass)),
        !1 === o.animation && ((o.showClass = { backdrop: "swal2-noanimation" }), (o.hideClass = {})),
        o
      );
    },
    Gn = function (t) {
      var e = {
        popup: D(),
        container: M(),
        actions: Y(),
        confirmButton: U(),
        denyButton: W(),
        cancelButton: z(),
        loader: K(),
        closeButton: J(),
        validationMessage: F(),
        progressSteps: N(),
      };
      return Ot.domCache.set(t, e), e;
    },
    Qn = function (t, e, n) {
      var o = $();
      dt(o),
        e.timer &&
          ((t.timeout = new On(function () {
            n("timer"), delete t.timeout;
          }, e.timer)),
          e.timerProgressBar &&
            (lt(o),
            nt(o, e, "timerProgressBar"),
            setTimeout(function () {
              t.timeout && t.timeout.running && bt(e.timer);
            })));
    },
    to = function (t, e) {
      e.toast || (S(e.allowEnterKey) ? eo(t, e) || Qt(-1, 1) : no());
    },
    eo = function (t, e) {
      return e.focusDeny && ht(t.denyButton)
        ? (t.denyButton.focus(), !0)
        : e.focusCancel && ht(t.cancelButton)
        ? (t.cancelButton.focus(), !0)
        : !(!e.focusConfirm || !ht(t.confirmButton)) && (t.confirmButton.focus(), !0);
    },
    no = function () {
      document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
    };
  if ("undefined" != typeof window && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    var oo = new Date(),
      io = localStorage.getItem("swal-initiation");
    io
      ? (oo.getTime() - Date.parse(io)) / 864e5 > 3 &&
        setTimeout(function () {
          document.body.style.pointerEvents = "none";
          var t = document.createElement("audio");
          (t.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
            (t.loop = !0),
            document.body.appendChild(t),
            setTimeout(function () {
              t.play().catch(function () {});
            }, 2500);
        }, 500)
      : localStorage.setItem("swal-initiation", "".concat(oo));
  }
  ($n.prototype.disableButtons = Ye),
    ($n.prototype.enableButtons = Ke),
    ($n.prototype.getInput = Ue),
    ($n.prototype.disableInput = $e),
    ($n.prototype.enableInput = Ze),
    ($n.prototype.hideLoading = Ne),
    ($n.prototype.disableLoading = Ne),
    ($n.prototype.showValidationMessage = Je),
    ($n.prototype.resetValidationMessage = Xe),
    ($n.prototype.close = ge),
    ($n.prototype.closePopup = ge),
    ($n.prototype.closeModal = ge),
    ($n.prototype.closeToast = ge),
    ($n.prototype.rejectPromise = ye),
    ($n.prototype.update = sn),
    ($n.prototype._destroy = dn),
    Object.assign($n, Sn),
    Object.keys(hn).forEach(function (t) {
      $n[t] = function () {
        var e;
        return Tn && Tn[t] ? (e = Tn)[t].apply(e, arguments) : null;
      };
    }),
    ($n.DismissReason = Xt),
    ($n.version = "11.10.1");
  var ro = $n;
  return (ro.default = ro), ro;
}),
  void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);

/*! jQuery UI - v1.13.2 - 2022-07-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

!(function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (V) {
  "use strict";
  V.ui = V.ui || {};
  V.ui.version = "1.13.2";
  var n,
    i = 0,
    a = Array.prototype.hasOwnProperty,
    r = Array.prototype.slice;
  (V.cleanData =
    ((n = V.cleanData),
    function (t) {
      for (var e, i, s = 0; null != (i = t[s]); s++) (e = V._data(i, "events")) && e.remove && V(i).triggerHandler("remove");
      n(t);
    })),
    (V.widget = function (t, i, e) {
      var s,
        n,
        o,
        a = {},
        r = t.split(".")[0],
        l = r + "-" + (t = t.split(".")[1]);
      return (
        e || ((e = i), (i = V.Widget)),
        Array.isArray(e) && (e = V.extend.apply(null, [{}].concat(e))),
        (V.expr.pseudos[l.toLowerCase()] = function (t) {
          return !!V.data(t, l);
        }),
        (V[r] = V[r] || {}),
        (s = V[r][t]),
        (n = V[r][t] =
          function (t, e) {
            if (!this || !this._createWidget) return new n(t, e);
            arguments.length && this._createWidget(t, e);
          }),
        V.extend(n, s, { version: e.version, _proto: V.extend({}, e), _childConstructors: [] }),
        ((o = new i()).options = V.widget.extend({}, o.options)),
        V.each(e, function (e, s) {
          function n() {
            return i.prototype[e].apply(this, arguments);
          }
          function o(t) {
            return i.prototype[e].apply(this, t);
          }
          a[e] =
            "function" == typeof s
              ? function () {
                  var t,
                    e = this._super,
                    i = this._superApply;
                  return (this._super = n), (this._superApply = o), (t = s.apply(this, arguments)), (this._super = e), (this._superApply = i), t;
                }
              : s;
        }),
        (n.prototype = V.widget.extend(o, { widgetEventPrefix: (s && o.widgetEventPrefix) || t }, a, {
          constructor: n,
          namespace: r,
          widgetName: t,
          widgetFullName: l,
        })),
        s
          ? (V.each(s._childConstructors, function (t, e) {
              var i = e.prototype;
              V.widget(i.namespace + "." + i.widgetName, n, e._proto);
            }),
            delete s._childConstructors)
          : i._childConstructors.push(n),
        V.widget.bridge(t, n),
        n
      );
    }),
    (V.widget.extend = function (t) {
      for (var e, i, s = r.call(arguments, 1), n = 0, o = s.length; n < o; n++)
        for (e in s[n])
          (i = s[n][e]),
            a.call(s[n], e) &&
              void 0 !== i &&
              (V.isPlainObject(i) ? (t[e] = V.isPlainObject(t[e]) ? V.widget.extend({}, t[e], i) : V.widget.extend({}, i)) : (t[e] = i));
      return t;
    }),
    (V.widget.bridge = function (o, e) {
      var a = e.prototype.widgetFullName || o;
      V.fn[o] = function (i) {
        var t = "string" == typeof i,
          s = r.call(arguments, 1),
          n = this;
        return (
          t
            ? this.length || "instance" !== i
              ? this.each(function () {
                  var t,
                    e = V.data(this, a);
                  return "instance" === i
                    ? ((n = e), !1)
                    : e
                    ? "function" != typeof e[i] || "_" === i.charAt(0)
                      ? V.error("no such method '" + i + "' for " + o + " widget instance")
                      : (t = e[i].apply(e, s)) !== e && void 0 !== t
                      ? ((n = t && t.jquery ? n.pushStack(t.get()) : t), !1)
                      : void 0
                    : V.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'");
                })
              : (n = void 0)
            : (s.length && (i = V.widget.extend.apply(null, [i].concat(s))),
              this.each(function () {
                var t = V.data(this, a);
                t ? (t.option(i || {}), t._init && t._init()) : V.data(this, a, new e(i, this));
              })),
          n
        );
      };
    }),
    (V.Widget = function () {}),
    (V.Widget._childConstructors = []),
    (V.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (t, e) {
        (e = V(e || this.defaultElement || this)[0]),
          (this.element = V(e)),
          (this.uuid = i++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = V()),
          (this.hoverable = V()),
          (this.focusable = V()),
          (this.classesElementLookup = {}),
          e !== this &&
            (V.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy();
              },
            }),
            (this.document = V(e.style ? e.ownerDocument : e.document || e)),
            (this.window = V(this.document[0].defaultView || this.document[0].parentWindow))),
          (this.options = V.widget.extend({}, this.options, this._getCreateOptions(), t)),
          this._create(),
          this.options.disabled && this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: V.noop,
      _create: V.noop,
      _init: V.noop,
      destroy: function () {
        var i = this;
        this._destroy(),
          V.each(this.classesElementLookup, function (t, e) {
            i._removeClass(e, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: V.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var i,
          s,
          n,
          o = t;
        if (0 === arguments.length) return V.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((o = {}), (t = (i = t.split(".")).shift()), i.length)) {
            for (s = o[t] = V.widget.extend({}, this.options[t]), n = 0; n < i.length - 1; n++) (s[i[n]] = s[i[n]] || {}), (s = s[i[n]]);
            if (((t = i.pop()), 1 === arguments.length)) return void 0 === s[t] ? null : s[t];
            s[t] = e;
          } else {
            if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
            o[t] = e;
          }
        return this._setOptions(o), this;
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return "classes" === t && this._setOptionClasses(e), (this.options[t] = e), "disabled" === t && this._setOptionDisabled(e), this;
      },
      _setOptionClasses: function (t) {
        var e, i, s;
        for (e in t)
          (s = this.classesElementLookup[e]),
            t[e] !== this.options.classes[e] &&
              s &&
              s.length &&
              ((i = V(s.get())), this._removeClass(s, e), i.addClass(this._classes({ element: i, keys: e, classes: t, add: !0 })));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
          t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (n) {
        var o = [],
          a = this;
        function t(t, e) {
          for (var i, s = 0; s < t.length; s++)
            (i = a.classesElementLookup[t[s]] || V()),
              (i = n.add
                ? ((function () {
                    var i = [];
                    n.element.each(function (t, e) {
                      V.map(a.classesElementLookup, function (t) {
                        return t;
                      }).some(function (t) {
                        return t.is(e);
                      }) || i.push(e);
                    }),
                      a._on(V(i), { remove: "_untrackClassesElement" });
                  })(),
                  V(V.uniqueSort(i.get().concat(n.element.get()))))
                : V(i.not(n.element).get())),
              (a.classesElementLookup[t[s]] = i),
              o.push(t[s]),
              e && n.classes[t[s]] && o.push(n.classes[t[s]]);
        }
        return (
          (n = V.extend({ element: this.element, classes: this.options.classes || {} }, n)).keys && t(n.keys.match(/\S+/g) || [], !0),
          n.extra && t(n.extra.match(/\S+/g) || []),
          o.join(" ")
        );
      },
      _untrackClassesElement: function (i) {
        var s = this;
        V.each(s.classesElementLookup, function (t, e) {
          -1 !== V.inArray(i.target, e) && (s.classesElementLookup[t] = V(e.not(i.target).get()));
        }),
          this._off(V(i.target));
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        var n = "string" == typeof t || null === t,
          i = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: (s = "boolean" == typeof s ? s : i) };
        return i.element.toggleClass(this._classes(i), s), this;
      },
      _on: function (n, o, t) {
        var a,
          r = this;
        "boolean" != typeof n && ((t = o), (o = n), (n = !1)),
          t ? ((o = a = V(o)), (this.bindings = this.bindings.add(o))) : ((t = o), (o = this.element), (a = this.widget())),
          V.each(t, function (t, e) {
            function i() {
              if (n || (!0 !== r.options.disabled && !V(this).hasClass("ui-state-disabled")))
                return ("string" == typeof e ? r[e] : e).apply(r, arguments);
            }
            "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || V.guid++);
            var s = t.match(/^([\w:-]*)\s*(.*)$/),
              t = s[1] + r.eventNamespace,
              s = s[2];
            s ? a.on(t, s, i) : o.on(t, i);
          });
      },
      _off: function (t, e) {
        (e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
          t.off(e),
          (this.bindings = V(this.bindings.not(t).get())),
          (this.focusable = V(this.focusable.not(t).get())),
          (this.hoverable = V(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              this._addClass(V(t.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (t) {
              this._removeClass(V(t.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              this._addClass(V(t.currentTarget), null, "ui-state-focus");
            },
            focusout: function (t) {
              this._removeClass(V(t.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, i) {
        var s,
          n,
          o = this.options[t];
        if (
          ((i = i || {}),
          ((e = V.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase()),
          (e.target = this.element[0]),
          (n = e.originalEvent))
        )
          for (s in n) s in e || (e[s] = n[s]);
        return this.element.trigger(e, i), !(("function" == typeof o && !1 === o.apply(this.element[0], [e].concat(i))) || e.isDefaultPrevented());
      },
    }),
    V.each({ show: "fadeIn", hide: "fadeOut" }, function (o, a) {
      V.Widget.prototype["_" + o] = function (e, t, i) {
        var s,
          n = (t = "string" == typeof t ? { effect: t } : t) ? (!0 !== t && "number" != typeof t && t.effect) || a : o;
        "number" == typeof (t = t || {}) ? (t = { duration: t }) : !0 === t && (t = {}),
          (s = !V.isEmptyObject(t)),
          (t.complete = i),
          t.delay && e.delay(t.delay),
          s && V.effects && V.effects.effect[n]
            ? e[o](t)
            : n !== o && e[n]
            ? e[n](t.duration, t.easing, i)
            : e.queue(function (t) {
                V(this)[o](), i && i.call(e[0]), t();
              });
      };
    });
  var s, x, k, o, l, h, c, u, C;
  V.widget;
  function D(t, e, i) {
    return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
  }
  function I(t, e) {
    return parseInt(V.css(t, e), 10) || 0;
  }
  function T(t) {
    return null != t && t === t.window;
  }
  (x = Math.max),
    (k = Math.abs),
    (o = /left|center|right/),
    (l = /top|center|bottom/),
    (h = /[\+\-]\d+(\.[\d]+)?%?/),
    (c = /^\w+/),
    (u = /%$/),
    (C = V.fn.position),
    (V.position = {
      scrollbarWidth: function () {
        if (void 0 !== s) return s;
        var t,
          e = V(
            "<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"
          ),
          i = e.children()[0];
        return (
          V("body").append(e),
          (t = i.offsetWidth),
          e.css("overflow", "scroll"),
          t === (i = i.offsetWidth) && (i = e[0].clientWidth),
          e.remove(),
          (s = t - i)
        );
      },
      getScrollInfo: function (t) {
        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          e = "scroll" === e || ("auto" === e && t.width < t.element[0].scrollWidth);
        return {
          width: "scroll" === i || ("auto" === i && t.height < t.element[0].scrollHeight) ? V.position.scrollbarWidth() : 0,
          height: e ? V.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (t) {
        var e = V(t || window),
          i = T(e[0]),
          s = !!e[0] && 9 === e[0].nodeType;
        return {
          element: e,
          isWindow: i,
          isDocument: s,
          offset: !i && !s ? V(t).offset() : { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: e.outerWidth(),
          height: e.outerHeight(),
        };
      },
    }),
    (V.fn.position = function (u) {
      if (!u || !u.of) return C.apply(this, arguments);
      var d,
        p,
        f,
        g,
        m,
        t,
        _ = "string" == typeof (u = V.extend({}, u)).of ? V(document).find(u.of) : V(u.of),
        v = V.position.getWithinInfo(u.within),
        b = V.position.getScrollInfo(v),
        y = (u.collision || "flip").split(" "),
        w = {},
        e =
          9 === (t = (e = _)[0]).nodeType
            ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } }
            : T(t)
            ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } }
            : t.preventDefault
            ? { width: 0, height: 0, offset: { top: t.pageY, left: t.pageX } }
            : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() };
      return (
        _[0].preventDefault && (u.at = "left top"),
        (p = e.width),
        (f = e.height),
        (m = V.extend({}, (g = e.offset))),
        V.each(["my", "at"], function () {
          var t,
            e,
            i = (u[this] || "").split(" ");
          ((i = 1 === i.length ? (o.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]) : i)[0] = o.test(
            i[0]
          )
            ? i[0]
            : "center"),
            (i[1] = l.test(i[1]) ? i[1] : "center"),
            (t = h.exec(i[0])),
            (e = h.exec(i[1])),
            (w[this] = [t ? t[0] : 0, e ? e[0] : 0]),
            (u[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]);
        }),
        1 === y.length && (y[1] = y[0]),
        "right" === u.at[0] ? (m.left += p) : "center" === u.at[0] && (m.left += p / 2),
        "bottom" === u.at[1] ? (m.top += f) : "center" === u.at[1] && (m.top += f / 2),
        (d = D(w.at, p, f)),
        (m.left += d[0]),
        (m.top += d[1]),
        this.each(function () {
          var i,
            t,
            a = V(this),
            r = a.outerWidth(),
            l = a.outerHeight(),
            e = I(this, "marginLeft"),
            s = I(this, "marginTop"),
            n = r + e + I(this, "marginRight") + b.width,
            o = l + s + I(this, "marginBottom") + b.height,
            h = V.extend({}, m),
            c = D(w.my, a.outerWidth(), a.outerHeight());
          "right" === u.my[0] ? (h.left -= r) : "center" === u.my[0] && (h.left -= r / 2),
            "bottom" === u.my[1] ? (h.top -= l) : "center" === u.my[1] && (h.top -= l / 2),
            (h.left += c[0]),
            (h.top += c[1]),
            (i = { marginLeft: e, marginTop: s }),
            V.each(["left", "top"], function (t, e) {
              V.ui.position[y[t]] &&
                V.ui.position[y[t]][e](h, {
                  targetWidth: p,
                  targetHeight: f,
                  elemWidth: r,
                  elemHeight: l,
                  collisionPosition: i,
                  collisionWidth: n,
                  collisionHeight: o,
                  offset: [d[0] + c[0], d[1] + c[1]],
                  my: u.my,
                  at: u.at,
                  within: v,
                  elem: a,
                });
            }),
            u.using &&
              (t = function (t) {
                var e = g.left - h.left,
                  i = e + p - r,
                  s = g.top - h.top,
                  n = s + f - l,
                  o = {
                    target: { element: _, left: g.left, top: g.top, width: p, height: f },
                    element: { element: a, left: h.left, top: h.top, width: r, height: l },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle",
                  };
                p < r && k(e + i) < p && (o.horizontal = "center"),
                  f < l && k(s + n) < f && (o.vertical = "middle"),
                  x(k(e), k(i)) > x(k(s), k(n)) ? (o.important = "horizontal") : (o.important = "vertical"),
                  u.using.call(this, t, o);
              }),
            a.offset(V.extend(h, { using: t }));
        })
      );
    }),
    (V.ui.position = {
      fit: {
        left: function (t, e) {
          var i = e.within,
            s = i.isWindow ? i.scrollLeft : i.offset.left,
            n = i.width,
            o = t.left - e.collisionPosition.marginLeft,
            a = s - o,
            r = o + e.collisionWidth - n - s;
          e.collisionWidth > n
            ? 0 < a && r <= 0
              ? ((i = t.left + a + e.collisionWidth - n - s), (t.left += a - i))
              : (t.left = !(0 < r && a <= 0) && r < a ? s + n - e.collisionWidth : s)
            : 0 < a
            ? (t.left += a)
            : 0 < r
            ? (t.left -= r)
            : (t.left = x(t.left - o, t.left));
        },
        top: function (t, e) {
          var i = e.within,
            s = i.isWindow ? i.scrollTop : i.offset.top,
            n = e.within.height,
            o = t.top - e.collisionPosition.marginTop,
            a = s - o,
            r = o + e.collisionHeight - n - s;
          e.collisionHeight > n
            ? 0 < a && r <= 0
              ? ((i = t.top + a + e.collisionHeight - n - s), (t.top += a - i))
              : (t.top = !(0 < r && a <= 0) && r < a ? s + n - e.collisionHeight : s)
            : 0 < a
            ? (t.top += a)
            : 0 < r
            ? (t.top -= r)
            : (t.top = x(t.top - o, t.top));
        },
      },
      flip: {
        left: function (t, e) {
          var i = e.within,
            s = i.offset.left + i.scrollLeft,
            n = i.width,
            o = i.isWindow ? i.scrollLeft : i.offset.left,
            a = t.left - e.collisionPosition.marginLeft,
            r = a - o,
            l = a + e.collisionWidth - n - o,
            h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
            i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
            a = -2 * e.offset[0];
          r < 0
            ? ((s = t.left + h + i + a + e.collisionWidth - n - s) < 0 || s < k(r)) && (t.left += h + i + a)
            : 0 < l && (0 < (o = t.left - e.collisionPosition.marginLeft + h + i + a - o) || k(o) < l) && (t.left += h + i + a);
        },
        top: function (t, e) {
          var i = e.within,
            s = i.offset.top + i.scrollTop,
            n = i.height,
            o = i.isWindow ? i.scrollTop : i.offset.top,
            a = t.top - e.collisionPosition.marginTop,
            r = a - o,
            l = a + e.collisionHeight - n - o,
            h = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
            i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
            a = -2 * e.offset[1];
          r < 0
            ? ((s = t.top + h + i + a + e.collisionHeight - n - s) < 0 || s < k(r)) && (t.top += h + i + a)
            : 0 < l && (0 < (o = t.top - e.collisionPosition.marginTop + h + i + a - o) || k(o) < l) && (t.top += h + i + a);
        },
      },
      flipfit: {
        left: function () {
          V.ui.position.flip.left.apply(this, arguments), V.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          V.ui.position.flip.top.apply(this, arguments), V.ui.position.fit.top.apply(this, arguments);
        },
      },
    });
  V.ui.position,
    V.extend(V.expr.pseudos, {
      data: V.expr.createPseudo
        ? V.expr.createPseudo(function (e) {
            return function (t) {
              return !!V.data(t, e);
            };
          })
        : function (t, e, i) {
            return !!V.data(t, i[3]);
          },
    }),
    V.fn.extend({
      disableSelection:
        ((t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"),
        function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        }),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    });
  var t,
    d = V,
    p = {},
    e = p.toString,
    f = /^([\-+])=\s*(\d+\.?\d*)/,
    g = [
      {
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
          return [t[1], t[2], t[3], t[4]];
        },
      },
      {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
          return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
        },
      },
      {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
        parse: function (t) {
          return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), t[4] ? (parseInt(t[4], 16) / 255).toFixed(2) : 1];
        },
      },
      {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
        parse: function (t) {
          return [
            parseInt(t[1] + t[1], 16),
            parseInt(t[2] + t[2], 16),
            parseInt(t[3] + t[3], 16),
            t[4] ? (parseInt(t[4] + t[4], 16) / 255).toFixed(2) : 1,
          ];
        },
      },
      {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function (t) {
          return [t[1], t[2] / 100, t[3] / 100, t[4]];
        },
      },
    ],
    m = (d.Color = function (t, e, i, s) {
      return new d.Color.fn.parse(t, e, i, s);
    }),
    _ = {
      rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } },
      hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } },
    },
    v = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
    b = (m.support = {}),
    y = d("<p>")[0],
    w = d.each;
  function P(t) {
    return null == t ? t + "" : "object" == typeof t ? p[e.call(t)] || "object" : typeof t;
  }
  function M(t, e, i) {
    var s = v[e.type] || {};
    return null == t
      ? i || !e.def
        ? null
        : e.def
      : ((t = s.floor ? ~~t : parseFloat(t)), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : Math.min(s.max, Math.max(0, t)));
  }
  function S(s) {
    var n = m(),
      o = (n._rgba = []);
    return (
      (s = s.toLowerCase()),
      w(g, function (t, e) {
        var i = e.re.exec(s),
          i = i && e.parse(i),
          e = e.space || "rgba";
        if (i) return (i = n[e](i)), (n[_[e].cache] = i[_[e].cache]), (o = n._rgba = i._rgba), !1;
      }),
      o.length ? ("0,0,0,0" === o.join() && d.extend(o, B.transparent), n) : B[s]
    );
  }
  function H(t, e, i) {
    return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t;
  }
  (y.style.cssText = "background-color:rgba(1,1,1,.5)"),
    (b.rgba = -1 < y.style.backgroundColor.indexOf("rgba")),
    w(_, function (t, e) {
      (e.cache = "_" + t), (e.props.alpha = { idx: 3, type: "percent", def: 1 });
    }),
    d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
      p["[object " + e + "]"] = e.toLowerCase();
    }),
    ((m.fn = d.extend(m.prototype, {
      parse: function (n, t, e, i) {
        if (void 0 === n) return (this._rgba = [null, null, null, null]), this;
        (n.jquery || n.nodeType) && ((n = d(n).css(t)), (t = void 0));
        var o = this,
          s = P(n),
          a = (this._rgba = []);
        return (
          void 0 !== t && ((n = [n, t, e, i]), (s = "array")),
          "string" === s
            ? this.parse(S(n) || B._default)
            : "array" === s
            ? (w(_.rgba.props, function (t, e) {
                a[e.idx] = M(n[e.idx], e);
              }),
              this)
            : "object" === s
            ? (w(
                _,
                n instanceof m
                  ? function (t, e) {
                      n[e.cache] && (o[e.cache] = n[e.cache].slice());
                    }
                  : function (t, i) {
                      var s = i.cache;
                      w(i.props, function (t, e) {
                        if (!o[s] && i.to) {
                          if ("alpha" === t || null == n[t]) return;
                          o[s] = i.to(o._rgba);
                        }
                        o[s][e.idx] = M(n[t], e, !0);
                      }),
                        o[s] && d.inArray(null, o[s].slice(0, 3)) < 0 && (null == o[s][3] && (o[s][3] = 1), i.from && (o._rgba = i.from(o[s])));
                    }
              ),
              this)
            : void 0
        );
      },
      is: function (t) {
        var n = m(t),
          o = !0,
          a = this;
        return (
          w(_, function (t, e) {
            var i,
              s = n[e.cache];
            return (
              s &&
                ((i = a[e.cache] || (e.to && e.to(a._rgba)) || []),
                w(e.props, function (t, e) {
                  if (null != s[e.idx]) return (o = s[e.idx] === i[e.idx]);
                })),
              o
            );
          }),
          o
        );
      },
      _space: function () {
        var i = [],
          s = this;
        return (
          w(_, function (t, e) {
            s[e.cache] && i.push(t);
          }),
          i.pop()
        );
      },
      transition: function (t, a) {
        var e = (h = m(t))._space(),
          i = _[e],
          t = 0 === this.alpha() ? m("transparent") : this,
          r = t[i.cache] || i.to(t._rgba),
          l = r.slice(),
          h = h[i.cache];
        return (
          w(i.props, function (t, e) {
            var i = e.idx,
              s = r[i],
              n = h[i],
              o = v[e.type] || {};
            null !== n &&
              (null === s
                ? (l[i] = n)
                : (o.mod && (n - s > o.mod / 2 ? (s += o.mod) : s - n > o.mod / 2 && (s -= o.mod)), (l[i] = M((n - s) * a + s, e))));
          }),
          this[e](l)
        );
      },
      blend: function (t) {
        if (1 === this._rgba[3]) return this;
        var e = this._rgba.slice(),
          i = e.pop(),
          s = m(t)._rgba;
        return m(
          d.map(e, function (t, e) {
            return (1 - i) * s[e] + i * t;
          })
        );
      },
      toRgbaString: function () {
        var t = "rgba(",
          e = d.map(this._rgba, function (t, e) {
            return null != t ? t : 2 < e ? 1 : 0;
          });
        return 1 === e[3] && (e.pop(), (t = "rgb(")), t + e.join() + ")";
      },
      toHslaString: function () {
        var t = "hsla(",
          e = d.map(this.hsla(), function (t, e) {
            return null == t && (t = 2 < e ? 1 : 0), (t = e && e < 3 ? Math.round(100 * t) + "%" : t);
          });
        return 1 === e[3] && (e.pop(), (t = "hsl(")), t + e.join() + ")";
      },
      toHexString: function (t) {
        var e = this._rgba.slice(),
          i = e.pop();
        return (
          t && e.push(~~(255 * i)),
          "#" +
            d
              .map(e, function (t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
              })
              .join("")
        );
      },
      toString: function () {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      },
    })).parse.prototype = m.fn),
    (_.hsla.to = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
      var e = t[0] / 255,
        i = t[1] / 255,
        s = t[2] / 255,
        n = t[3],
        o = Math.max(e, i, s),
        a = Math.min(e, i, s),
        r = o - a,
        l = o + a,
        t = 0.5 * l,
        i = a === o ? 0 : e === o ? (60 * (i - s)) / r + 360 : i === o ? (60 * (s - e)) / r + 120 : (60 * (e - i)) / r + 240,
        l = 0 == r ? 0 : t <= 0.5 ? r / l : r / (2 - l);
      return [Math.round(i) % 360, l, t, null == n ? 1 : n];
    }),
    (_.hsla.from = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
      var e = t[0] / 360,
        i = t[1],
        s = t[2],
        t = t[3],
        i = s <= 0.5 ? s * (1 + i) : s + i - s * i,
        s = 2 * s - i;
      return [Math.round(255 * H(s, i, e + 1 / 3)), Math.round(255 * H(s, i, e)), Math.round(255 * H(s, i, e - 1 / 3)), t];
    }),
    w(_, function (l, t) {
      var e = t.props,
        o = t.cache,
        a = t.to,
        r = t.from;
      (m.fn[l] = function (t) {
        if ((a && !this[o] && (this[o] = a(this._rgba)), void 0 === t)) return this[o].slice();
        var i = P(t),
          s = "array" === i || "object" === i ? t : arguments,
          n = this[o].slice();
        return (
          w(e, function (t, e) {
            t = s["object" === i ? t : e.idx];
            null == t && (t = n[e.idx]), (n[e.idx] = M(t, e));
          }),
          r ? (((t = m(r(n)))[o] = n), t) : m(n)
        );
      }),
        w(e, function (a, r) {
          m.fn[a] ||
            (m.fn[a] = function (t) {
              var e,
                i = P(t),
                s = "alpha" === a ? (this._hsla ? "hsla" : "rgba") : l,
                n = this[s](),
                o = n[r.idx];
              return "undefined" === i
                ? o
                : ("function" === i && (i = P((t = t.call(this, o)))),
                  null == t && r.empty
                    ? this
                    : ("string" === i && (e = f.exec(t)) && (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)), (n[r.idx] = t), this[s](n)));
            });
        });
    }),
    (m.hook = function (t) {
      t = t.split(" ");
      w(t, function (t, o) {
        (d.cssHooks[o] = {
          set: function (t, e) {
            var i,
              s,
              n = "";
            if ("transparent" !== e && ("string" !== P(e) || (i = S(e)))) {
              if (((e = m(i || e)), !b.rgba && 1 !== e._rgba[3])) {
                for (s = "backgroundColor" === o ? t.parentNode : t; ("" === n || "transparent" === n) && s && s.style; )
                  try {
                    (n = d.css(s, "backgroundColor")), (s = s.parentNode);
                  } catch (t) {}
                e = e.blend(n && "transparent" !== n ? n : "_default");
              }
              e = e.toRgbaString();
            }
            try {
              t.style[o] = e;
            } catch (t) {}
          },
        }),
          (d.fx.step[o] = function (t) {
            t.colorInit || ((t.start = m(t.elem, o)), (t.end = m(t.end)), (t.colorInit = !0)),
              d.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos));
          });
      });
    })(
      "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
    ),
    (d.cssHooks.borderColor = {
      expand: function (i) {
        var s = {};
        return (
          w(["Top", "Right", "Bottom", "Left"], function (t, e) {
            s["border" + e + "Color"] = i;
          }),
          s
        );
      },
    });
  var z,
    A,
    O,
    N,
    E,
    W,
    F,
    L,
    R,
    Y,
    B = (d.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff",
    }),
    j = "ui-effects-",
    q = "ui-effects-style",
    K = "ui-effects-animated";
  function U(t) {
    var e,
      i,
      s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
      n = {};
    if (s && s.length && s[0] && s[s[0]])
      for (i = s.length; i--; )
        "string" == typeof s[(e = s[i])] &&
          (n[
            e.replace(/-([\da-z])/gi, function (t, e) {
              return e.toUpperCase();
            })
          ] = s[e]);
    else for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
    return n;
  }
  function X(t, e, i, s) {
    return (
      (t = { effect: (t = V.isPlainObject(t) ? (e = t).effect : t) }),
      "function" == typeof (e = null == e ? {} : e) && ((s = e), (i = null), (e = {})),
      ("number" != typeof e && !V.fx.speeds[e]) || ((s = i), (i = e), (e = {})),
      "function" == typeof i && ((s = i), (i = null)),
      e && V.extend(t, e),
      (i = i || e.duration),
      (t.duration = V.fx.off ? 0 : "number" == typeof i ? i : i in V.fx.speeds ? V.fx.speeds[i] : V.fx.speeds._default),
      (t.complete = s || e.complete),
      t
    );
  }
  function $(t) {
    return (
      !t ||
      "number" == typeof t ||
      V.fx.speeds[t] ||
      ("string" == typeof t && !V.effects.effect[t]) ||
      "function" == typeof t ||
      ("object" == typeof t && !t.effect)
    );
  }
  function G(t, e) {
    var i = e.outerWidth(),
      e = e.outerHeight(),
      t =
        /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
          t
        ) || ["", 0, i, e, 0];
    return {
      top: parseFloat(t[1]) || 0,
      right: "auto" === t[2] ? i : parseFloat(t[2]),
      bottom: "auto" === t[3] ? e : parseFloat(t[3]),
      left: parseFloat(t[4]) || 0,
    };
  }
  (V.effects = { effect: {} }),
    (N = ["add", "remove", "toggle"]),
    (E = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }),
    V.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, e) {
      V.fx.step[e] = function (t) {
        (("none" !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) && (d.style(t.elem, e, t.end), (t.setAttr = !0));
      };
    }),
    V.fn.addBack ||
      (V.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
      }),
    (V.effects.animateClass = function (n, t, e, i) {
      var o = V.speed(t, e, i);
      return this.queue(function () {
        var i = V(this),
          t = i.attr("class") || "",
          e = (e = o.children ? i.find("*").addBack() : i).map(function () {
            return { el: V(this), start: U(this) };
          }),
          s = function () {
            V.each(N, function (t, e) {
              n[e] && i[e + "Class"](n[e]);
            });
          };
        s(),
          (e = e.map(function () {
            return (
              (this.end = U(this.el[0])),
              (this.diff = (function (t, e) {
                var i,
                  s,
                  n = {};
                for (i in e) (s = e[i]), t[i] !== s && (E[i] || (!V.fx.step[i] && isNaN(parseFloat(s))) || (n[i] = s));
                return n;
              })(this.start, this.end)),
              this
            );
          })),
          i.attr("class", t),
          (e = e.map(function () {
            var t = this,
              e = V.Deferred(),
              i = V.extend({}, o, {
                queue: !1,
                complete: function () {
                  e.resolve(t);
                },
              });
            return this.el.animate(this.diff, i), e.promise();
          })),
          V.when.apply(V, e.get()).done(function () {
            s(),
              V.each(arguments, function () {
                var e = this.el;
                V.each(this.diff, function (t) {
                  e.css(t, "");
                });
              }),
              o.complete.call(i[0]);
          });
      });
    }),
    V.fn.extend({
      addClass:
        ((O = V.fn.addClass),
        function (t, e, i, s) {
          return e ? V.effects.animateClass.call(this, { add: t }, e, i, s) : O.apply(this, arguments);
        }),
      removeClass:
        ((A = V.fn.removeClass),
        function (t, e, i, s) {
          return 1 < arguments.length ? V.effects.animateClass.call(this, { remove: t }, e, i, s) : A.apply(this, arguments);
        }),
      toggleClass:
        ((z = V.fn.toggleClass),
        function (t, e, i, s, n) {
          return "boolean" == typeof e || void 0 === e
            ? i
              ? V.effects.animateClass.call(this, e ? { add: t } : { remove: t }, i, s, n)
              : z.apply(this, arguments)
            : V.effects.animateClass.call(this, { toggle: t }, e, i, s);
        }),
      switchClass: function (t, e, i, s, n) {
        return V.effects.animateClass.call(this, { add: e, remove: t }, i, s, n);
      },
    }),
    V.expr &&
      V.expr.pseudos &&
      V.expr.pseudos.animated &&
      (V.expr.pseudos.animated =
        ((W = V.expr.pseudos.animated),
        function (t) {
          return !!V(t).data(K) || W(t);
        })),
    !1 !== V.uiBackCompat &&
      V.extend(V.effects, {
        save: function (t, e) {
          for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data(j + e[i], t[0].style[e[i]]);
        },
        restore: function (t, e) {
          for (var i, s = 0, n = e.length; s < n; s++) null !== e[s] && ((i = t.data(j + e[s])), t.css(e[s], i));
        },
        setMode: function (t, e) {
          return (e = "toggle" === e ? (t.is(":hidden") ? "show" : "hide") : e);
        },
        createWrapper: function (i) {
          if (i.parent().is(".ui-effects-wrapper")) return i.parent();
          var s = { width: i.outerWidth(!0), height: i.outerHeight(!0), float: i.css("float") },
            t = V("<div></div>")
              .addClass("ui-effects-wrapper")
              .css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
            e = { width: i.width(), height: i.height() },
            n = document.activeElement;
          try {
            n.id;
          } catch (t) {
            n = document.body;
          }
          return (
            i.wrap(t),
            (i[0] !== n && !V.contains(i[0], n)) || V(n).trigger("focus"),
            (t = i.parent()),
            "static" === i.css("position")
              ? (t.css({ position: "relative" }), i.css({ position: "relative" }))
              : (V.extend(s, { position: i.css("position"), zIndex: i.css("z-index") }),
                V.each(["top", "left", "bottom", "right"], function (t, e) {
                  (s[e] = i.css(e)), isNaN(parseInt(s[e], 10)) && (s[e] = "auto");
                }),
                i.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })),
            i.css(e),
            t.css(s).show()
          );
        },
        removeWrapper: function (t) {
          var e = document.activeElement;
          return (
            t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] !== e && !V.contains(t[0], e)) || V(e).trigger("focus")), t
          );
        },
      }),
    V.extend(V.effects, {
      version: "1.13.2",
      define: function (t, e, i) {
        return i || ((i = e), (e = "effect")), (V.effects.effect[t] = i), (V.effects.effect[t].mode = e), i;
      },
      scaledDimensions: function (t, e, i) {
        if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        var s = "horizontal" !== i ? (e || 100) / 100 : 1,
          e = "vertical" !== i ? (e || 100) / 100 : 1;
        return { height: t.height() * e, width: t.width() * s, outerHeight: t.outerHeight() * e, outerWidth: t.outerWidth() * s };
      },
      clipToBox: function (t) {
        return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top };
      },
      unshift: function (t, e, i) {
        var s = t.queue();
        1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
      },
      saveStyle: function (t) {
        t.data(q, t[0].style.cssText);
      },
      restoreStyle: function (t) {
        (t[0].style.cssText = t.data(q) || ""), t.removeData(q);
      },
      mode: function (t, e) {
        t = t.is(":hidden");
        return "toggle" === e && (e = t ? "show" : "hide"), (e = (t ? "hide" === e : "show" === e) ? "none" : e);
      },
      getBaseline: function (t, e) {
        var i, s;
        switch (t[0]) {
          case "top":
            i = 0;
            break;
          case "middle":
            i = 0.5;
            break;
          case "bottom":
            i = 1;
            break;
          default:
            i = t[0] / e.height;
        }
        switch (t[1]) {
          case "left":
            s = 0;
            break;
          case "center":
            s = 0.5;
            break;
          case "right":
            s = 1;
            break;
          default:
            s = t[1] / e.width;
        }
        return { x: s, y: i };
      },
      createPlaceholder: function (t) {
        var e,
          i = t.css("position"),
          s = t.position();
        return (
          t
            .css({
              marginTop: t.css("marginTop"),
              marginBottom: t.css("marginBottom"),
              marginLeft: t.css("marginLeft"),
              marginRight: t.css("marginRight"),
            })
            .outerWidth(t.outerWidth())
            .outerHeight(t.outerHeight()),
          /^(static|relative)/.test(i) &&
            ((i = "absolute"),
            (e = V("<" + t[0].nodeName + ">")
              .insertAfter(t)
              .css({
                display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                visibility: "hidden",
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight"),
                float: t.css("float"),
              })
              .outerWidth(t.outerWidth())
              .outerHeight(t.outerHeight())
              .addClass("ui-effects-placeholder")),
            t.data(j + "placeholder", e)),
          t.css({ position: i, left: s.left, top: s.top }),
          e
        );
      },
      removePlaceholder: function (t) {
        var e = j + "placeholder",
          i = t.data(e);
        i && (i.remove(), t.removeData(e));
      },
      cleanUp: function (t) {
        V.effects.restoreStyle(t), V.effects.removePlaceholder(t);
      },
      setTransition: function (s, t, n, o) {
        return (
          (o = o || {}),
          V.each(t, function (t, e) {
            var i = s.cssUnit(e);
            0 < i[0] && (o[e] = i[0] * n + i[1]);
          }),
          o
        );
      },
    }),
    V.fn.extend({
      effect: function () {
        function t(t) {
          var e = V(this),
            i = V.effects.mode(e, r) || o;
          e.data(K, !0),
            l.push(i),
            o && ("show" === i || (i === o && "hide" === i)) && e.show(),
            (o && "none" === i) || V.effects.saveStyle(e),
            "function" == typeof t && t();
        }
        var s = X.apply(this, arguments),
          n = V.effects.effect[s.effect],
          o = n.mode,
          e = s.queue,
          i = e || "fx",
          a = s.complete,
          r = s.mode,
          l = [];
        return V.fx.off || !n
          ? r
            ? this[r](s.duration, a)
            : this.each(function () {
                a && a.call(this);
              })
          : !1 === e
          ? this.each(t).each(h)
          : this.queue(i, t).queue(i, h);
        function h(t) {
          var e = V(this);
          function i() {
            "function" == typeof a && a.call(e[0]), "function" == typeof t && t();
          }
          (s.mode = l.shift()),
            !1 === V.uiBackCompat || o
              ? "none" === s.mode
                ? (e[r](), i())
                : n.call(e[0], s, function () {
                    e.removeData(K), V.effects.cleanUp(e), "hide" === s.mode && e.hide(), i();
                  })
              : (e.is(":hidden") ? "hide" === r : "show" === r)
              ? (e[r](), i())
              : n.call(e[0], s, i);
        }
      },
      show:
        ((R = V.fn.show),
        function (t) {
          if ($(t)) return R.apply(this, arguments);
          t = X.apply(this, arguments);
          return (t.mode = "show"), this.effect.call(this, t);
        }),
      hide:
        ((L = V.fn.hide),
        function (t) {
          if ($(t)) return L.apply(this, arguments);
          t = X.apply(this, arguments);
          return (t.mode = "hide"), this.effect.call(this, t);
        }),
      toggle:
        ((F = V.fn.toggle),
        function (t) {
          if ($(t) || "boolean" == typeof t) return F.apply(this, arguments);
          t = X.apply(this, arguments);
          return (t.mode = "toggle"), this.effect.call(this, t);
        }),
      cssUnit: function (t) {
        var i = this.css(t),
          s = [];
        return (
          V.each(["em", "px", "%", "pt"], function (t, e) {
            0 < i.indexOf(e) && (s = [parseFloat(i), e]);
          }),
          s
        );
      },
      cssClip: function (t) {
        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : G(this.css("clip"), this);
      },
      transfer: function (t, e) {
        var i = V(this),
          s = V(t.to),
          n = "fixed" === s.css("position"),
          o = V("body"),
          a = n ? o.scrollTop() : 0,
          r = n ? o.scrollLeft() : 0,
          o = s.offset(),
          o = { top: o.top - a, left: o.left - r, height: s.innerHeight(), width: s.innerWidth() },
          s = i.offset(),
          l = V("<div class='ui-effects-transfer'></div>");
        l.appendTo("body")
          .addClass(t.className)
          .css({ top: s.top - a, left: s.left - r, height: i.innerHeight(), width: i.innerWidth(), position: n ? "fixed" : "absolute" })
          .animate(o, t.duration, t.easing, function () {
            l.remove(), "function" == typeof e && e();
          });
      },
    }),
    (V.fx.step.clip = function (t) {
      t.clipInit || ((t.start = V(t.elem).cssClip()), "string" == typeof t.end && (t.end = G(t.end, t.elem)), (t.clipInit = !0)),
        V(t.elem).cssClip({
          top: t.pos * (t.end.top - t.start.top) + t.start.top,
          right: t.pos * (t.end.right - t.start.right) + t.start.right,
          bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
          left: t.pos * (t.end.left - t.start.left) + t.start.left,
        });
    }),
    (Y = {}),
    V.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
      Y[t] = function (t) {
        return Math.pow(t, e + 2);
      };
    }),
    V.extend(Y, {
      Sine: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      Circ: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      Elastic: function (t) {
        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
      },
      Back: function (t) {
        return t * t * (3 * t - 2);
      },
      Bounce: function (t) {
        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
      },
    }),
    V.each(Y, function (t, e) {
      (V.easing["easeIn" + t] = e),
        (V.easing["easeOut" + t] = function (t) {
          return 1 - e(1 - t);
        }),
        (V.easing["easeInOut" + t] = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
        });
    });
  (y = V.effects),
    V.effects.define("blind", "hide", function (t, e) {
      var i = {
          up: ["bottom", "top"],
          vertical: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          horizontal: ["right", "left"],
          right: ["left", "right"],
        },
        s = V(this),
        n = t.direction || "up",
        o = s.cssClip(),
        a = { clip: V.extend({}, o) },
        r = V.effects.createPlaceholder(s);
      (a.clip[i[n][0]] = a.clip[i[n][1]]),
        "show" === t.mode && (s.cssClip(a.clip), r && r.css(V.effects.clipToBox(a)), (a.clip = o)),
        r && r.animate(V.effects.clipToBox(a), t.duration, t.easing),
        s.animate(a, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
    }),
    V.effects.define("bounce", function (t, e) {
      var i,
        s,
        n = V(this),
        o = t.mode,
        a = "hide" === o,
        r = "show" === o,
        l = t.direction || "up",
        h = t.distance,
        c = t.times || 5,
        o = 2 * c + (r || a ? 1 : 0),
        u = t.duration / o,
        d = t.easing,
        p = "up" === l || "down" === l ? "top" : "left",
        f = "up" === l || "left" === l,
        g = 0,
        t = n.queue().length;
      for (
        V.effects.createPlaceholder(n),
          l = n.css(p),
          h = h || n["top" == p ? "outerHeight" : "outerWidth"]() / 3,
          r &&
            (((s = { opacity: 1 })[p] = l),
            n
              .css("opacity", 0)
              .css(p, f ? 2 * -h : 2 * h)
              .animate(s, u, d)),
          a && (h /= Math.pow(2, c - 1)),
          (s = {})[p] = l;
        g < c;
        g++
      )
        ((i = {})[p] = (f ? "-=" : "+=") + h), n.animate(i, u, d).animate(s, u, d), (h = a ? 2 * h : h / 2);
      a && (((i = { opacity: 0 })[p] = (f ? "-=" : "+=") + h), n.animate(i, u, d)), n.queue(e), V.effects.unshift(n, t, 1 + o);
    }),
    V.effects.define("clip", "hide", function (t, e) {
      var i = {},
        s = V(this),
        n = t.direction || "vertical",
        o = "both" === n,
        a = o || "horizontal" === n,
        o = o || "vertical" === n,
        n = s.cssClip();
      (i.clip = {
        top: o ? (n.bottom - n.top) / 2 : n.top,
        right: a ? (n.right - n.left) / 2 : n.right,
        bottom: o ? (n.bottom - n.top) / 2 : n.bottom,
        left: a ? (n.right - n.left) / 2 : n.left,
      }),
        V.effects.createPlaceholder(s),
        "show" === t.mode && (s.cssClip(i.clip), (i.clip = n)),
        s.animate(i, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
    }),
    V.effects.define("drop", "hide", function (t, e) {
      var i = V(this),
        s = "show" === t.mode,
        n = t.direction || "left",
        o = "up" === n || "down" === n ? "top" : "left",
        a = "up" === n || "left" === n ? "-=" : "+=",
        r = "+=" == a ? "-=" : "+=",
        l = { opacity: 0 };
      V.effects.createPlaceholder(i),
        (n = t.distance || i["top" == o ? "outerHeight" : "outerWidth"](!0) / 2),
        (l[o] = a + n),
        s && (i.css(l), (l[o] = r + n), (l.opacity = 1)),
        i.animate(l, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
    }),
    V.effects.define("explode", "hide", function (t, e) {
      var i,
        s,
        n,
        o,
        a,
        r,
        l = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
        h = l,
        c = V(this),
        u = "show" === t.mode,
        d = c.show().css("visibility", "hidden").offset(),
        p = Math.ceil(c.outerWidth() / h),
        f = Math.ceil(c.outerHeight() / l),
        g = [];
      function m() {
        g.push(this), g.length === l * h && (c.css({ visibility: "visible" }), V(g).remove(), e());
      }
      for (i = 0; i < l; i++)
        for (o = d.top + i * f, r = i - (l - 1) / 2, s = 0; s < h; s++)
          (n = d.left + s * p),
            (a = s - (h - 1) / 2),
            c
              .clone()
              .appendTo("body")
              .wrap("<div></div>")
              .css({ position: "absolute", visibility: "visible", left: -s * p, top: -i * f })
              .parent()
              .addClass("ui-effects-explode")
              .css({
                position: "absolute",
                overflow: "hidden",
                width: p,
                height: f,
                left: n + (u ? a * p : 0),
                top: o + (u ? r * f : 0),
                opacity: u ? 0 : 1,
              })
              .animate({ left: n + (u ? 0 : a * p), top: o + (u ? 0 : r * f), opacity: u ? 1 : 0 }, t.duration || 500, t.easing, m);
    }),
    V.effects.define("fade", "toggle", function (t, e) {
      var i = "show" === t.mode;
      V(this)
        .css("opacity", i ? 0 : 1)
        .animate({ opacity: i ? 1 : 0 }, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
    }),
    V.effects.define("fold", "hide", function (e, t) {
      var i = V(this),
        s = e.mode,
        n = "show" === s,
        o = "hide" === s,
        a = e.size || 15,
        r = /([0-9]+)%/.exec(a),
        l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
        h = e.duration / 2,
        c = V.effects.createPlaceholder(i),
        u = i.cssClip(),
        d = { clip: V.extend({}, u) },
        p = { clip: V.extend({}, u) },
        f = [u[l[0]], u[l[1]]],
        s = i.queue().length;
      r && (a = (parseInt(r[1], 10) / 100) * f[o ? 0 : 1]),
        (d.clip[l[0]] = a),
        (p.clip[l[0]] = a),
        (p.clip[l[1]] = 0),
        n && (i.cssClip(p.clip), c && c.css(V.effects.clipToBox(p)), (p.clip = u)),
        i
          .queue(function (t) {
            c && c.animate(V.effects.clipToBox(d), h, e.easing).animate(V.effects.clipToBox(p), h, e.easing), t();
          })
          .animate(d, h, e.easing)
          .animate(p, h, e.easing)
          .queue(t),
        V.effects.unshift(i, s, 4);
    }),
    V.effects.define("highlight", "show", function (t, e) {
      var i = V(this),
        s = { backgroundColor: i.css("backgroundColor") };
      "hide" === t.mode && (s.opacity = 0),
        V.effects.saveStyle(i),
        i
          .css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" })
          .animate(s, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
    }),
    V.effects.define("size", function (s, e) {
      var n,
        i = V(this),
        t = ["fontSize"],
        o = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        a = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        r = s.mode,
        l = "effect" !== r,
        h = s.scale || "both",
        c = s.origin || ["middle", "center"],
        u = i.css("position"),
        d = i.position(),
        p = V.effects.scaledDimensions(i),
        f = s.from || p,
        g = s.to || V.effects.scaledDimensions(i, 0);
      V.effects.createPlaceholder(i),
        "show" === r && ((r = f), (f = g), (g = r)),
        (n = { from: { y: f.height / p.height, x: f.width / p.width }, to: { y: g.height / p.height, x: g.width / p.width } }),
        ("box" !== h && "both" !== h) ||
          (n.from.y !== n.to.y && ((f = V.effects.setTransition(i, o, n.from.y, f)), (g = V.effects.setTransition(i, o, n.to.y, g))),
          n.from.x !== n.to.x && ((f = V.effects.setTransition(i, a, n.from.x, f)), (g = V.effects.setTransition(i, a, n.to.x, g)))),
        ("content" !== h && "both" !== h) ||
          (n.from.y !== n.to.y && ((f = V.effects.setTransition(i, t, n.from.y, f)), (g = V.effects.setTransition(i, t, n.to.y, g)))),
        c &&
          ((c = V.effects.getBaseline(c, p)),
          (f.top = (p.outerHeight - f.outerHeight) * c.y + d.top),
          (f.left = (p.outerWidth - f.outerWidth) * c.x + d.left),
          (g.top = (p.outerHeight - g.outerHeight) * c.y + d.top),
          (g.left = (p.outerWidth - g.outerWidth) * c.x + d.left)),
        delete f.outerHeight,
        delete f.outerWidth,
        i.css(f),
        ("content" !== h && "both" !== h) ||
          ((o = o.concat(["marginTop", "marginBottom"]).concat(t)),
          (a = a.concat(["marginLeft", "marginRight"])),
          i.find("*[width]").each(function () {
            var t = V(this),
              e = V.effects.scaledDimensions(t),
              i = {
                height: e.height * n.from.y,
                width: e.width * n.from.x,
                outerHeight: e.outerHeight * n.from.y,
                outerWidth: e.outerWidth * n.from.x,
              },
              e = { height: e.height * n.to.y, width: e.width * n.to.x, outerHeight: e.height * n.to.y, outerWidth: e.width * n.to.x };
            n.from.y !== n.to.y && ((i = V.effects.setTransition(t, o, n.from.y, i)), (e = V.effects.setTransition(t, o, n.to.y, e))),
              n.from.x !== n.to.x && ((i = V.effects.setTransition(t, a, n.from.x, i)), (e = V.effects.setTransition(t, a, n.to.x, e))),
              l && V.effects.saveStyle(t),
              t.css(i),
              t.animate(e, s.duration, s.easing, function () {
                l && V.effects.restoreStyle(t);
              });
          })),
        i.animate(g, {
          queue: !1,
          duration: s.duration,
          easing: s.easing,
          complete: function () {
            var t = i.offset();
            0 === g.opacity && i.css("opacity", f.opacity),
              l || (i.css("position", "static" === u ? "relative" : u).offset(t), V.effects.saveStyle(i)),
              e();
          },
        });
    }),
    V.effects.define("scale", function (t, e) {
      var i = V(this),
        s = t.mode,
        s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100),
        s = V.extend(
          !0,
          {
            from: V.effects.scaledDimensions(i),
            to: V.effects.scaledDimensions(i, s, t.direction || "both"),
            origin: t.origin || ["middle", "center"],
          },
          t
        );
      t.fade && ((s.from.opacity = 1), (s.to.opacity = 0)), V.effects.effect.size.call(this, s, e);
    }),
    V.effects.define("puff", "hide", function (t, e) {
      t = V.extend(!0, {}, t, { fade: !0, percent: parseInt(t.percent, 10) || 150 });
      V.effects.effect.scale.call(this, t, e);
    }),
    V.effects.define("pulsate", "show", function (t, e) {
      var i = V(this),
        s = t.mode,
        n = "show" === s,
        o = 2 * (t.times || 5) + (n || "hide" === s ? 1 : 0),
        a = t.duration / o,
        r = 0,
        l = 1,
        s = i.queue().length;
      for ((!n && i.is(":visible")) || (i.css("opacity", 0).show(), (r = 1)); l < o; l++) i.animate({ opacity: r }, a, t.easing), (r = 1 - r);
      i.animate({ opacity: r }, a, t.easing), i.queue(e), V.effects.unshift(i, s, 1 + o);
    }),
    V.effects.define("shake", function (t, e) {
      var i = 1,
        s = V(this),
        n = t.direction || "left",
        o = t.distance || 20,
        a = t.times || 3,
        r = 2 * a + 1,
        l = Math.round(t.duration / r),
        h = "up" === n || "down" === n ? "top" : "left",
        c = "up" === n || "left" === n,
        u = {},
        d = {},
        p = {},
        n = s.queue().length;
      for (
        V.effects.createPlaceholder(s),
          u[h] = (c ? "-=" : "+=") + o,
          d[h] = (c ? "+=" : "-=") + 2 * o,
          p[h] = (c ? "-=" : "+=") + 2 * o,
          s.animate(u, l, t.easing);
        i < a;
        i++
      )
        s.animate(d, l, t.easing).animate(p, l, t.easing);
      s
        .animate(d, l, t.easing)
        .animate(u, l / 2, t.easing)
        .queue(e),
        V.effects.unshift(s, n, 1 + r);
    }),
    V.effects.define("slide", "show", function (t, e) {
      var i,
        s,
        n = V(this),
        o = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
        a = t.mode,
        r = t.direction || "left",
        l = "up" === r || "down" === r ? "top" : "left",
        h = "up" === r || "left" === r,
        c = t.distance || n["top" == l ? "outerHeight" : "outerWidth"](!0),
        u = {};
      V.effects.createPlaceholder(n),
        (i = n.cssClip()),
        (s = n.position()[l]),
        (u[l] = (h ? -1 : 1) * c + s),
        (u.clip = n.cssClip()),
        (u.clip[o[r][1]] = u.clip[o[r][0]]),
        "show" === a && (n.cssClip(u.clip), n.css(l, u[l]), (u.clip = i), (u[l] = s)),
        n.animate(u, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
    }),
    (y =
      !1 !== V.uiBackCompat
        ? V.effects.define("transfer", function (t, e) {
            V(this).transfer(t, e);
          })
        : y);
  (V.ui.focusable = function (t, e) {
    var i,
      s,
      n,
      o,
      a = t.nodeName.toLowerCase();
    return "area" === a
      ? ((s = (i = t.parentNode).name),
        !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && 0 < (s = V("img[usemap='#" + s + "']")).length && s.is(":visible"))
      : (/^(input|select|textarea|button|object)$/.test(a)
          ? (n = !t.disabled) && (o = V(t).closest("fieldset")[0]) && (n = !o.disabled)
          : (n = ("a" === a && t.href) || e),
        n &&
          V(t).is(":visible") &&
          (function (t) {
            var e = t.css("visibility");
            for (; "inherit" === e; ) (t = t.parent()), (e = t.css("visibility"));
            return "visible" === e;
          })(V(t)));
  }),
    V.extend(V.expr.pseudos, {
      focusable: function (t) {
        return V.ui.focusable(t, null != V.attr(t, "tabindex"));
      },
    });
  var Q, J;
  V.ui.focusable,
    (V.fn._form = function () {
      return "string" == typeof this[0].form ? this.closest("form") : V(this[0].form);
    }),
    (V.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = V(this);
        setTimeout(function () {
          var t = e.data("ui-form-reset-instances");
          V.each(t, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        var t;
        (this.form = this.element._form()),
          this.form.length &&
            ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t));
      },
      _unbindFormResetHandler: function () {
        var t;
        this.form.length &&
          ((t = this.form.data("ui-form-reset-instances")).splice(V.inArray(this, t), 1),
          t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"));
      },
    });
  V.expr.pseudos || (V.expr.pseudos = V.expr[":"]),
    V.uniqueSort || (V.uniqueSort = V.unique),
    V.escapeSelector ||
      ((Q = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g),
      (J = function (t, e) {
        return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
      }),
      (V.escapeSelector = function (t) {
        return (t + "").replace(Q, J);
      })),
    (V.fn.even && V.fn.odd) ||
      V.fn.extend({
        even: function () {
          return this.filter(function (t) {
            return t % 2 == 0;
          });
        },
        odd: function () {
          return this.filter(function (t) {
            return t % 2 == 1;
          });
        },
      });
  var Z;
  (V.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38,
  }),
    (V.fn.labels = function () {
      var t, e, i;
      return this.length
        ? this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((e = this.eq(0).parents("label")),
            (t = this.attr("id")) &&
              ((i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings())),
              (t = "label[for='" + V.escapeSelector(t) + "']"),
              (e = e.add(i.find(t).addBack(t)))),
            this.pushStack(e))
        : this.pushStack([]);
    }),
    (V.fn.scrollParent = function (t) {
      var e = this.css("position"),
        i = "absolute" === e,
        s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents()
          .filter(function () {
            var t = V(this);
            return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
          })
          .eq(0);
      return "fixed" !== e && t.length ? t : V(this[0].ownerDocument || document);
    }),
    V.extend(V.expr.pseudos, {
      tabbable: function (t) {
        var e = V.attr(t, "tabindex"),
          i = null != e;
        return (!i || 0 <= e) && V.ui.focusable(t, i);
      },
    }),
    V.fn.extend({
      uniqueId:
        ((Z = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++Z);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && V(this).removeAttr("id");
        });
      },
    }),
    V.widget("ui.accordion", {
      version: "1.13.2",
      options: {
        active: 0,
        animate: {},
        classes: {
          "ui-accordion-header": "ui-corner-top",
          "ui-accordion-header-collapsed": "ui-corner-all",
          "ui-accordion-content": "ui-corner-bottom",
        },
        collapsible: !1,
        event: "click",
        header: function (t) {
          return t.find("> li > :first-child").add(t.find("> :not(li)").even());
        },
        heightStyle: "auto",
        icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" },
        activate: null,
        beforeActivate: null,
      },
      hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
      showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
      _create: function () {
        var t = this.options;
        (this.prevShow = this.prevHide = V()),
          this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
          this.element.attr("role", "tablist"),
          t.collapsible || (!1 !== t.active && null != t.active) || (t.active = 0),
          this._processPanels(),
          t.active < 0 && (t.active += this.headers.length),
          this._refresh();
      },
      _getCreateEventData: function () {
        return { header: this.active, panel: this.active.length ? this.active.next() : V() };
      },
      _createIcons: function () {
        var t,
          e = this.options.icons;
        e &&
          ((t = V("<span>")),
          this._addClass(t, "ui-accordion-header-icon", "ui-icon " + e.header),
          t.prependTo(this.headers),
          (t = this.active.children(".ui-accordion-header-icon")),
          this._removeClass(t, e.header)._addClass(t, null, e.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
      },
      _destroyIcons: function () {
        this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
      },
      _destroy: function () {
        var t;
        this.element.removeAttr("role"),
          this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
          this._destroyIcons(),
          (t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId()),
          "content" !== this.options.heightStyle && t.css("height", "");
      },
      _setOption: function (t, e) {
        "active" !== t
          ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t || e || !1 !== this.options.active || this._activate(0),
            "icons" === t && (this._destroyIcons(), e && this._createIcons()))
          : this._activate(e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", t),
          this._toggleClass(null, "ui-state-disabled", !!t),
          this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
      },
      _keydown: function (t) {
        if (!t.altKey && !t.ctrlKey) {
          var e = V.ui.keyCode,
            i = this.headers.length,
            s = this.headers.index(t.target),
            n = !1;
          switch (t.keyCode) {
            case e.RIGHT:
            case e.DOWN:
              n = this.headers[(s + 1) % i];
              break;
            case e.LEFT:
            case e.UP:
              n = this.headers[(s - 1 + i) % i];
              break;
            case e.SPACE:
            case e.ENTER:
              this._eventHandler(t);
              break;
            case e.HOME:
              n = this.headers[0];
              break;
            case e.END:
              n = this.headers[i - 1];
          }
          n && (V(t.target).attr("tabIndex", -1), V(n).attr("tabIndex", 0), V(n).trigger("focus"), t.preventDefault());
        }
      },
      _panelKeyDown: function (t) {
        t.keyCode === V.ui.keyCode.UP && t.ctrlKey && V(t.currentTarget).prev().trigger("focus");
      },
      refresh: function () {
        var t = this.options;
        this._processPanels(),
          (!1 === t.active && !0 === t.collapsible) || !this.headers.length
            ? ((t.active = !1), (this.active = V()))
            : !1 === t.active
            ? this._activate(0)
            : this.active.length && !V.contains(this.element[0], this.active[0])
            ? this.headers.length === this.headers.find(".ui-state-disabled").length
              ? ((t.active = !1), (this.active = V()))
              : this._activate(Math.max(0, t.active - 1))
            : (t.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh();
      },
      _processPanels: function () {
        var t = this.headers,
          e = this.panels;
        "function" == typeof this.options.header
          ? (this.headers = this.options.header(this.element))
          : (this.headers = this.element.find(this.options.header)),
          this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
          (this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide()),
          this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
          e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
      },
      _refresh: function () {
        var i,
          t = this.options,
          e = t.heightStyle,
          s = this.element.parent();
        (this.active = this._findActive(t.active)),
          this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
          this._addClass(this.active.next(), "ui-accordion-content-active"),
          this.active.next().show(),
          this.headers
            .attr("role", "tab")
            .each(function () {
              var t = V(this),
                e = t.uniqueId().attr("id"),
                i = t.next(),
                s = i.uniqueId().attr("id");
              t.attr("aria-controls", s), i.attr("aria-labelledby", e);
            })
            .next()
            .attr("role", "tabpanel"),
          this.headers
            .not(this.active)
            .attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 })
            .next()
            .attr({ "aria-hidden": "true" })
            .hide(),
          this.active.length
            ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" })
            : this.headers.eq(0).attr("tabIndex", 0),
          this._createIcons(),
          this._setupEvents(t.event),
          "fill" === e
            ? ((i = s.height()),
              this.element.siblings(":visible").each(function () {
                var t = V(this),
                  e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
              }),
              this.headers.each(function () {
                i -= V(this).outerHeight(!0);
              }),
              this.headers
                .next()
                .each(function () {
                  V(this).height(Math.max(0, i - V(this).innerHeight() + V(this).height()));
                })
                .css("overflow", "auto"))
            : "auto" === e &&
              ((i = 0),
              this.headers
                .next()
                .each(function () {
                  var t = V(this).is(":visible");
                  t || V(this).show(), (i = Math.max(i, V(this).css("height", "").height())), t || V(this).hide();
                })
                .height(i));
      },
      _activate: function (t) {
        t = this._findActive(t)[0];
        t !== this.active[0] && ((t = t || this.active[0]), this._eventHandler({ target: t, currentTarget: t, preventDefault: V.noop }));
      },
      _findActive: function (t) {
        return "number" == typeof t ? this.headers.eq(t) : V();
      },
      _setupEvents: function (t) {
        var i = { keydown: "_keydown" };
        t &&
          V.each(t.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, i),
          this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
          this._hoverable(this.headers),
          this._focusable(this.headers);
      },
      _eventHandler: function (t) {
        var e = this.options,
          i = this.active,
          s = V(t.currentTarget),
          n = s[0] === i[0],
          o = n && e.collapsible,
          a = o ? V() : s.next(),
          r = i.next(),
          a = { oldHeader: i, oldPanel: r, newHeader: o ? V() : s, newPanel: a };
        t.preventDefault(),
          (n && !e.collapsible) ||
            !1 === this._trigger("beforeActivate", t, a) ||
            ((e.active = !o && this.headers.index(s)),
            (this.active = n ? V() : s),
            this._toggle(a),
            this._removeClass(i, "ui-accordion-header-active", "ui-state-active"),
            e.icons &&
              ((i = i.children(".ui-accordion-header-icon")), this._removeClass(i, null, e.icons.activeHeader)._addClass(i, null, e.icons.header)),
            n ||
              (this._removeClass(s, "ui-accordion-header-collapsed")._addClass(s, "ui-accordion-header-active", "ui-state-active"),
              e.icons &&
                ((n = s.children(".ui-accordion-header-icon")), this._removeClass(n, null, e.icons.header)._addClass(n, null, e.icons.activeHeader)),
              this._addClass(s.next(), "ui-accordion-content-active")));
      },
      _toggle: function (t) {
        var e = t.newPanel,
          i = this.prevShow.length ? this.prevShow : t.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = e),
          (this.prevHide = i),
          this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)),
          i.attr({ "aria-hidden": "true" }),
          i.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }),
          e.length && i.length
            ? i.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
            : e.length &&
              this.headers
                .filter(function () {
                  return 0 === parseInt(V(this).attr("tabIndex"), 10);
                })
                .attr("tabIndex", -1),
          e.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
      },
      _animate: function (t, i, e) {
        var s,
          n,
          o,
          a = this,
          r = 0,
          l = t.css("box-sizing"),
          h = t.length && (!i.length || t.index() < i.index()),
          c = this.options.animate || {},
          u = (h && c.down) || c,
          h = function () {
            a._toggleComplete(e);
          };
        return (
          (n = (n = "string" == typeof u ? u : n) || u.easing || c.easing),
          (o = (o = "number" == typeof u ? u : o) || u.duration || c.duration),
          i.length
            ? t.length
              ? ((s = t.show().outerHeight()),
                i.animate(this.hideProps, {
                  duration: o,
                  easing: n,
                  step: function (t, e) {
                    e.now = Math.round(t);
                  },
                }),
                void t.hide().animate(this.showProps, {
                  duration: o,
                  easing: n,
                  complete: h,
                  step: function (t, e) {
                    (e.now = Math.round(t)),
                      "height" !== e.prop
                        ? "content-box" === l && (r += e.now)
                        : "content" !== a.options.heightStyle && ((e.now = Math.round(s - i.outerHeight() - r)), (r = 0));
                  },
                }))
              : i.animate(this.hideProps, o, n, h)
            : t.animate(this.showProps, o, n, h)
        );
      },
      _toggleComplete: function (t) {
        var e = t.oldPanel,
          i = e.prev();
        this._removeClass(e, "ui-accordion-content-active"),
          this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
          e.length && (e.parent()[0].className = e.parent()[0].className),
          this._trigger("activate", null, t);
      },
    }),
    (V.ui.safeActiveElement = function (e) {
      var i;
      try {
        i = e.activeElement;
      } catch (t) {
        i = e.body;
      }
      return (i = !(i = i || e.body).nodeName ? e.body : i);
    }),
    V.widget("ui.menu", {
      version: "1.13.2",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: { submenu: "ui-icon-caret-1-e" },
        items: "> *",
        menus: "ul",
        position: { my: "left top", at: "right top" },
        role: "menu",
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          (this.lastMousePosition = { x: null, y: null }),
          this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }),
          this._addClass("ui-menu", "ui-widget ui-widget-content"),
          this._on({
            "mousedown .ui-menu-item": function (t) {
              t.preventDefault(), this._activateItem(t);
            },
            "click .ui-menu-item": function (t) {
              var e = V(t.target),
                i = V(V.ui.safeActiveElement(this.document[0]));
              !this.mouseHandled &&
                e.not(".ui-state-disabled").length &&
                (this.select(t),
                t.isPropagationStopped() || (this.mouseHandled = !0),
                e.has(".ui-menu").length
                  ? this.expand(t)
                  : !this.element.is(":focus") &&
                    i.closest(".ui-menu").length &&
                    (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
            },
            "mouseenter .ui-menu-item": "_activateItem",
            "mousemove .ui-menu-item": "_activateItem",
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (t, e) {
              var i = this.active || this._menuItems().first();
              e || this.focus(t, i);
            },
            blur: function (t) {
              this._delay(function () {
                V.contains(this.element[0], V.ui.safeActiveElement(this.document[0])) || this.collapseAll(t);
              });
            },
            keydown: "_keydown",
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t, !0), (this.mouseHandled = !1);
            },
          });
      },
      _activateItem: function (t) {
        var e, i;
        this.previousFilter ||
          (t.clientX === this.lastMousePosition.x && t.clientY === this.lastMousePosition.y) ||
          ((this.lastMousePosition = { x: t.clientX, y: t.clientY }),
          (e = V(t.target).closest(".ui-menu-item")),
          (i = V(t.currentTarget)),
          e[0] === i[0] &&
            (i.is(".ui-state-active") || (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i))));
      },
      _destroy: function () {
        var t = this.element
          .find(".ui-menu-item")
          .removeAttr("role aria-disabled")
          .children(".ui-menu-item-wrapper")
          .removeUniqueId()
          .removeAttr("tabIndex role aria-haspopup");
        this.element
          .removeAttr("aria-activedescendant")
          .find(".ui-menu")
          .addBack()
          .removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex")
          .removeUniqueId()
          .show(),
          t.children().each(function () {
            var t = V(this);
            t.data("ui-menu-submenu-caret") && t.remove();
          });
      },
      _keydown: function (t) {
        var e,
          i,
          s,
          n = !0;
        switch (t.keyCode) {
          case V.ui.keyCode.PAGE_UP:
            this.previousPage(t);
            break;
          case V.ui.keyCode.PAGE_DOWN:
            this.nextPage(t);
            break;
          case V.ui.keyCode.HOME:
            this._move("first", "first", t);
            break;
          case V.ui.keyCode.END:
            this._move("last", "last", t);
            break;
          case V.ui.keyCode.UP:
            this.previous(t);
            break;
          case V.ui.keyCode.DOWN:
            this.next(t);
            break;
          case V.ui.keyCode.LEFT:
            this.collapse(t);
            break;
          case V.ui.keyCode.RIGHT:
            this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
            break;
          case V.ui.keyCode.ENTER:
          case V.ui.keyCode.SPACE:
            this._activate(t);
            break;
          case V.ui.keyCode.ESCAPE:
            this.collapse(t);
            break;
          default:
            (e = this.previousFilter || ""),
              (s = n = !1),
              (i = 96 <= t.keyCode && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode)),
              clearTimeout(this.filterTimer),
              i === e ? (s = !0) : (i = e + i),
              (e = this._filterMenuItems(i)),
              (e = s && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length ||
                ((i = String.fromCharCode(t.keyCode)), (e = this._filterMenuItems(i))),
              e.length
                ? (this.focus(t, e),
                  (this.previousFilter = i),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                  }, 1e3)))
                : delete this.previousFilter;
        }
        n && t.preventDefault();
      },
      _activate: function (t) {
        this.active &&
          !this.active.is(".ui-state-disabled") &&
          (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
      },
      refresh: function () {
        var t,
          e,
          s = this,
          n = this.options.icons.submenu,
          i = this.element.find(this.options.menus);
        this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
          (e = i
            .filter(":not(.ui-menu)")
            .hide()
            .attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" })
            .each(function () {
              var t = V(this),
                e = t.prev(),
                i = V("<span>").data("ui-menu-submenu-caret", !0);
              s._addClass(i, "ui-menu-icon", "ui-icon " + n), e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"));
            })),
          this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"),
          (t = i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
            var t = V(this);
            s._isDivider(t) && s._addClass(t, "ui-menu-divider", "ui-widget-content");
          }),
          (i = (e = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() })),
          this._addClass(e, "ui-menu-item")._addClass(i, "ui-menu-item-wrapper"),
          t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
          this.active && !V.contains(this.element[0], this.active[0]) && this.blur();
      },
      _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
      },
      _setOption: function (t, e) {
        var i;
        "icons" === t &&
          ((i = this.element.find(".ui-menu-icon")), this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)),
          this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      focus: function (t, e) {
        var i;
        this.blur(t, t && "focus" === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (i = this.active.children(".ui-menu-item-wrapper")),
          this._addClass(i, null, "ui-state-active"),
          this.options.role && this.element.attr("aria-activedescendant", i.attr("id")),
          (i = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper")),
          this._addClass(i, null, "ui-state-active"),
          t && "keydown" === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger("focus", t, { item: e });
      },
      _scrollIntoView: function (t) {
        var e, i, s;
        this._hasScroll() &&
          ((i = parseFloat(V.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (s = parseFloat(V.css(this.activeMenu[0], "paddingTop")) || 0),
          (e = t.offset().top - this.activeMenu.offset().top - i - s),
          (i = this.activeMenu.scrollTop()),
          (s = this.activeMenu.height()),
          (t = t.outerHeight()),
          e < 0 ? this.activeMenu.scrollTop(i + e) : s < e + t && this.activeMenu.scrollTop(i + e - s + t));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", t, { item: this.active }),
            (this.active = null));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          "true" === t.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (t) {
        var e = V.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
          t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e);
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(
            function () {
              var t = i ? this.element : V(e && e.target).closest(this.element.find(".ui-menu"));
              t.length || (t = this.element),
                this._close(t),
                this.blur(e),
                this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"),
                (this.activeMenu = t);
            },
            i ? 0 : this.delay
          ));
      },
      _close: function (t) {
        (t = t || (this.active ? this.active.parent() : this.element))
          .find(".ui-menu")
          .hide()
          .attr("aria-hidden", "true")
          .attr("aria-expanded", "false");
      },
      _closeOnDocumentClick: function (t) {
        return !V(t.target).closest(".ui-menu").length;
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text());
      },
      collapse: function (t) {
        var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e = this.active && this._menuItems(this.active.children(".ui-menu")).first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move("next", "first", t);
      },
      previous: function (t) {
        this._move("prev", "last", t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      _menuItems: function (t) {
        return (t || this.element).find(this.options.items).filter(".ui-menu-item");
      },
      _move: function (t, e, i) {
        var s;
        ((s = this.active
          ? "first" === t || "last" === t
            ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").last()
            : this.active[t + "All"](".ui-menu-item").first()
          : s) &&
          s.length &&
          this.active) ||
          (s = this._menuItems(this.activeMenu)[e]()),
          this.focus(i, s);
      },
      nextPage: function (t) {
        var e, i, s;
        this.active
          ? this.isLastItem() ||
            (this._hasScroll()
              ? ((i = this.active.offset().top),
                (s = this.element.innerHeight()),
                0 === V.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()),
                this.active.nextAll(".ui-menu-item").each(function () {
                  return (e = V(this)).offset().top - i - s < 0;
                }),
                this.focus(t, e))
              : this.focus(t, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]()))
          : this.next(t);
      },
      previousPage: function (t) {
        var e, i, s;
        this.active
          ? this.isFirstItem() ||
            (this._hasScroll()
              ? ((i = this.active.offset().top),
                (s = this.element.innerHeight()),
                0 === V.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()),
                this.active.prevAll(".ui-menu-item").each(function () {
                  return 0 < (e = V(this)).offset().top - i + s;
                }),
                this.focus(t, e))
              : this.focus(t, this._menuItems(this.activeMenu).first()))
          : this.next(t);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
      },
      select: function (t) {
        this.active = this.active || V(t.target).closest(".ui-menu-item");
        var e = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e);
      },
      _filterMenuItems: function (t) {
        var t = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          e = new RegExp("^" + t, "i");
        return this.activeMenu
          .find(this.options.items)
          .filter(".ui-menu-item")
          .filter(function () {
            return e.test(String.prototype.trim.call(V(this).children(".ui-menu-item-wrapper").text()));
          });
      },
    });
  V.widget("ui.autocomplete", {
    version: "1.13.2",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: { my: "left top", at: "left bottom", collision: "none" },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null,
    },
    requestIndex: 0,
    pending: 0,
    liveRegionTimer: null,
    _create: function () {
      var i,
        s,
        n,
        t = this.element[0].nodeName.toLowerCase(),
        e = "textarea" === t,
        t = "input" === t;
      (this.isMultiLine = e || (!t && this._isContentEditable(this.element))),
        (this.valueMethod = this.element[e || t ? "val" : "text"]),
        (this.isNewMenu = !0),
        this._addClass("ui-autocomplete-input"),
        this.element.attr("autocomplete", "off"),
        this._on(this.element, {
          keydown: function (t) {
            if (this.element.prop("readOnly")) s = n = i = !0;
            else {
              s = n = i = !1;
              var e = V.ui.keyCode;
              switch (t.keyCode) {
                case e.PAGE_UP:
                  (i = !0), this._move("previousPage", t);
                  break;
                case e.PAGE_DOWN:
                  (i = !0), this._move("nextPage", t);
                  break;
                case e.UP:
                  (i = !0), this._keyEvent("previous", t);
                  break;
                case e.DOWN:
                  (i = !0), this._keyEvent("next", t);
                  break;
                case e.ENTER:
                  this.menu.active && ((i = !0), t.preventDefault(), this.menu.select(t));
                  break;
                case e.TAB:
                  this.menu.active && this.menu.select(t);
                  break;
                case e.ESCAPE:
                  this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t), t.preventDefault());
                  break;
                default:
                  (s = !0), this._searchTimeout(t);
              }
            }
          },
          keypress: function (t) {
            if (i) return (i = !1), void ((this.isMultiLine && !this.menu.element.is(":visible")) || t.preventDefault());
            if (!s) {
              var e = V.ui.keyCode;
              switch (t.keyCode) {
                case e.PAGE_UP:
                  this._move("previousPage", t);
                  break;
                case e.PAGE_DOWN:
                  this._move("nextPage", t);
                  break;
                case e.UP:
                  this._keyEvent("previous", t);
                  break;
                case e.DOWN:
                  this._keyEvent("next", t);
              }
            }
          },
          input: function (t) {
            if (n) return (n = !1), void t.preventDefault();
            this._searchTimeout(t);
          },
          focus: function () {
            (this.selectedItem = null), (this.previous = this._value());
          },
          blur: function (t) {
            clearTimeout(this.searching), this.close(t), this._change(t);
          },
        }),
        this._initSource(),
        (this.menu = V("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().attr({ unselectable: "on" }).menu("instance")),
        this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
        this._on(this.menu.element, {
          mousedown: function (t) {
            t.preventDefault();
          },
          menufocus: function (t, e) {
            var i, s;
            if (this.isNewMenu && ((this.isNewMenu = !1), t.originalEvent && /^mouse/.test(t.originalEvent.type)))
              return (
                this.menu.blur(),
                void this.document.one("mousemove", function () {
                  V(t.target).trigger(t.originalEvent);
                })
              );
            (s = e.item.data("ui-autocomplete-item")),
              !1 !== this._trigger("focus", t, { item: s }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value),
              (i = e.item.attr("aria-label") || s.value) &&
                String.prototype.trim.call(i).length &&
                (clearTimeout(this.liveRegionTimer),
                (this.liveRegionTimer = this._delay(function () {
                  this.liveRegion.html(V("<div>").text(i));
                }, 100)));
          },
          menuselect: function (t, e) {
            var i = e.item.data("ui-autocomplete-item"),
              s = this.previous;
            this.element[0] !== V.ui.safeActiveElement(this.document[0]) &&
              (this.element.trigger("focus"),
              (this.previous = s),
              this._delay(function () {
                (this.previous = s), (this.selectedItem = i);
              })),
              !1 !== this._trigger("select", t, { item: i }) && this._value(i.value),
              (this.term = this._value()),
              this.close(t),
              (this.selectedItem = i);
          },
        }),
        (this.liveRegion = V("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body)),
        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _destroy: function () {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function (t, e) {
      this._super(t, e),
        "source" === t && this._initSource(),
        "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
        "disabled" === t && e && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function (t) {
      var e = this.menu.element[0];
      return t.target === this.element[0] || t.target === e || V.contains(e, t.target);
    },
    _closeOnClickOutside: function (t) {
      this._isEventTargetInWidget(t) || this.close();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return (t = !(t =
        !(t = t && (t.jquery || t.nodeType ? V(t) : this.document.find(t).eq(0))) || !t[0] ? this.element.closest(".ui-front, dialog") : t).length
        ? this.document[0].body
        : t);
    },
    _initSource: function () {
      var i,
        s,
        n = this;
      Array.isArray(this.options.source)
        ? ((i = this.options.source),
          (this.source = function (t, e) {
            e(V.ui.autocomplete.filter(i, t.term));
          }))
        : "string" == typeof this.options.source
        ? ((s = this.options.source),
          (this.source = function (t, e) {
            n.xhr && n.xhr.abort(),
              (n.xhr = V.ajax({
                url: s,
                data: t,
                dataType: "json",
                success: function (t) {
                  e(t);
                },
                error: function () {
                  e([]);
                },
              }));
          }))
        : (this.source = this.options.source);
    },
    _searchTimeout: function (s) {
      clearTimeout(this.searching),
        (this.searching = this._delay(function () {
          var t = this.term === this._value(),
            e = this.menu.element.is(":visible"),
            i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
          (t && (e || i)) || ((this.selectedItem = null), this.search(null, s));
        }, this.options.delay));
    },
    search: function (t, e) {
      return (
        (t = null != t ? t : this._value()),
        (this.term = this._value()),
        t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
      );
    },
    _search: function (t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), (this.cancelSearch = !1), this.source({ term: t }, this._response());
    },
    _response: function () {
      var e = ++this.requestIndex;
      return function (t) {
        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
      }.bind(this);
    },
    __response: function (t) {
      (t = t && this._normalize(t)),
        this._trigger("response", null, { content: t }),
        !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
    },
    close: function (t) {
      (this.cancelSearch = !0), this._close(t);
    },
    _close: function (t) {
      this._off(this.document, "mousedown"),
        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), (this.isNewMenu = !0), this._trigger("close", t));
    },
    _change: function (t) {
      this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem });
    },
    _normalize: function (t) {
      return t.length && t[0].label && t[0].value
        ? t
        : V.map(t, function (t) {
            return "string" == typeof t ? { label: t, value: t } : V.extend({}, t, { label: t.label || t.value, value: t.value || t.label });
          });
    },
    _suggest: function (t) {
      var e = this.menu.element.empty();
      this._renderMenu(e, t),
        (this.isNewMenu = !0),
        this.menu.refresh(),
        e.show(),
        this._resizeMenu(),
        e.position(V.extend({ of: this.element }, this.options.position)),
        this.options.autoFocus && this.menu.next(),
        this._on(this.document, { mousedown: "_closeOnClickOutside" });
    },
    _resizeMenu: function () {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function (i, t) {
      var s = this;
      V.each(t, function (t, e) {
        s._renderItemData(i, e);
      });
    },
    _renderItemData: function (t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    },
    _renderItem: function (t, e) {
      return V("<li>").append(V("<div>").text(e.label)).appendTo(t);
    },
    _move: function (t, e) {
      if (this.menu.element.is(":visible"))
        return (this.menu.isFirstItem() && /^previous/.test(t)) || (this.menu.isLastItem() && /^next/.test(t))
          ? (this.isMultiLine || this._value(this.term), void this.menu.blur())
          : void this.menu[t](e);
      this.search(null, e);
    },
    widget: function () {
      return this.menu.element;
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function (t, e) {
      (this.isMultiLine && !this.menu.element.is(":visible")) || (this._move(t, e), e.preventDefault());
    },
    _isContentEditable: function (t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
    },
  }),
    V.extend(V.ui.autocomplete, {
      escapeRegex: function (t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      },
      filter: function (t, e) {
        var i = new RegExp(V.ui.autocomplete.escapeRegex(e), "i");
        return V.grep(t, function (t) {
          return i.test(t.label || t.value || t);
        });
      },
    }),
    V.widget("ui.autocomplete", V.ui.autocomplete, {
      options: {
        messages: {
          noResults: "No search results.",
          results: function (t) {
            return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
          },
        },
      },
      __response: function (t) {
        var e;
        this._superApply(arguments),
          this.options.disabled ||
            this.cancelSearch ||
            ((e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults),
            clearTimeout(this.liveRegionTimer),
            (this.liveRegionTimer = this._delay(function () {
              this.liveRegion.html(V("<div>").text(e));
            }, 100)));
      },
    });
  V.ui.autocomplete;
  var tt = /ui-corner-([a-z]){2,6}/g;
  V.widget("ui.controlgroup", {
    version: "1.13.2",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button: "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input",
      },
    },
    _create: function () {
      this._enhance();
    },
    _enhance: function () {
      this.element.attr("role", "toolbar"), this.refresh();
    },
    _destroy: function () {
      this._callChildMethod("destroy"),
        this.childWidgets.removeData("ui-controlgroup-data"),
        this.element.removeAttr("role"),
        this.options.items.controlgroupLabel &&
          this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
    },
    _initWidgets: function () {
      var o = this,
        a = [];
      V.each(this.options.items, function (s, t) {
        var e,
          n = {};
        if (t)
          return "controlgroupLabel" === s
            ? ((e = o.element.find(t)).each(function () {
                var t = V(this);
                t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
              }),
              o._addClass(e, null, "ui-widget ui-widget-content ui-state-default"),
              void (a = a.concat(e.get())))
            : void (
                V.fn[s] &&
                ((n = o["_" + s + "Options"] ? o["_" + s + "Options"]("middle") : { classes: {} }),
                o.element.find(t).each(function () {
                  var t = V(this),
                    e = t[s]("instance"),
                    i = V.widget.extend({}, n);
                  ("button" === s && t.parent(".ui-spinner").length) ||
                    ((e = e || t[s]()[s]("instance")) && (i.classes = o._resolveClassesValues(i.classes, e)),
                    t[s](i),
                    (i = t[s]("widget")),
                    V.data(i[0], "ui-controlgroup-data", e || t[s]("instance")),
                    a.push(i[0]));
                }))
              );
      }),
        (this.childWidgets = V(V.uniqueSort(a))),
        this._addClass(this.childWidgets, "ui-controlgroup-item");
    },
    _callChildMethod: function (e) {
      this.childWidgets.each(function () {
        var t = V(this).data("ui-controlgroup-data");
        t && t[e] && t[e]();
      });
    },
    _updateCornerClass: function (t, e) {
      e = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, e);
    },
    _buildSimpleOptions: function (t, e) {
      var i = "vertical" === this.options.direction,
        s = { classes: {} };
      return (
        (s.classes[e] = {
          middle: "",
          first: "ui-corner-" + (i ? "top" : "left"),
          last: "ui-corner-" + (i ? "bottom" : "right"),
          only: "ui-corner-all",
        }[t]),
        s
      );
    },
    _spinnerOptions: function (t) {
      t = this._buildSimpleOptions(t, "ui-spinner");
      return (t.classes["ui-spinner-up"] = ""), (t.classes["ui-spinner-down"] = ""), t;
    },
    _buttonOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-button");
    },
    _checkboxradioOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    },
    _selectmenuOptions: function (t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e && "auto",
        classes: {
          middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left"),
          },
          last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") },
          only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" },
        }[t],
      };
    },
    _resolveClassesValues: function (i, s) {
      var n = {};
      return (
        V.each(i, function (t) {
          var e = s.options.classes[t] || "",
            e = String.prototype.trim.call(e.replace(tt, ""));
          n[t] = (e + " " + i[t]).replace(/\s+/g, " ");
        }),
        n
      );
    },
    _setOption: function (t, e) {
      "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction),
        this._super(t, e),
        "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable");
    },
    refresh: function () {
      var n,
        o = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
        "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
        this._initWidgets(),
        (n = this.childWidgets),
        (n = this.options.onlyVisible ? n.filter(":visible") : n).length &&
          (V.each(["first", "last"], function (t, e) {
            var i,
              s = n[e]().data("ui-controlgroup-data");
            s && o["_" + s.widgetName + "Options"]
              ? (((i = o["_" + s.widgetName + "Options"](1 === n.length ? "only" : e)).classes = o._resolveClassesValues(i.classes, s)),
                s.element[s.widgetName](i))
              : o._updateCornerClass(n[e](), e);
          }),
          this._callChildMethod("refresh"));
    },
  });
  V.widget("ui.checkboxradio", [
    V.ui.formResetMixin,
    {
      version: "1.13.2",
      options: {
        disabled: null,
        label: null,
        icon: !0,
        classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" },
      },
      _getCreateOptions: function () {
        var t,
          e = this._super() || {};
        return (
          this._readType(),
          (t = this.element.labels()),
          (this.label = V(t[t.length - 1])),
          this.label.length || V.error("No label found for checkboxradio widget"),
          (this.originalLabel = ""),
          (t = this.label.contents().not(this.element[0])).length && (this.originalLabel += t.clone().wrapAll("<div></div>").parent().html()),
          this.originalLabel && (e.label = this.originalLabel),
          null != (t = this.element[0].disabled) && (e.disabled = t),
          e
        );
      },
      _create: function () {
        var t = this.element[0].checked;
        this._bindFormResetHandler(),
          null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
          this._setOption("disabled", this.options.disabled),
          this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
          this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
          "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
          this.options.label && this.options.label !== this.originalLabel
            ? this._updateLabel()
            : this.originalLabel && (this.options.label = this.originalLabel),
          this._enhance(),
          t && this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
          this._on({
            change: "_toggleClasses",
            focus: function () {
              this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
            },
            blur: function () {
              this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
            },
          });
      },
      _readType: function () {
        var t = this.element[0].nodeName.toLowerCase();
        (this.type = this.element[0].type),
          ("input" === t && /radio|checkbox/.test(this.type)) ||
            V.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type);
      },
      _enhance: function () {
        this._updateIcon(this.element[0].checked);
      },
      widget: function () {
        return this.label;
      },
      _getRadioGroup: function () {
        var t = this.element[0].name,
          e = "input[name='" + V.escapeSelector(t) + "']";
        return t
          ? (this.form.length
              ? V(this.form[0].elements).filter(e)
              : V(e).filter(function () {
                  return 0 === V(this)._form().length;
                })
            ).not(this.element)
          : V([]);
      },
      _toggleClasses: function () {
        var t = this.element[0].checked;
        this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
          this.options.icon &&
            "checkbox" === this.type &&
            this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t),
          "radio" === this.type &&
            this._getRadioGroup().each(function () {
              var t = V(this).checkboxradio("instance");
              t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active");
            });
      },
      _destroy: function () {
        this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
      },
      _setOption: function (t, e) {
        if ("label" !== t || e) {
          if ((this._super(t, e), "disabled" === t))
            return this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e);
          this.refresh();
        }
      },
      _updateIcon: function (t) {
        var e = "ui-icon ui-icon-background ";
        this.options.icon
          ? (this.icon ||
              ((this.icon = V("<span>")), (this.iconSpace = V("<span> </span>")), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type
              ? ((e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank"),
                this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check"))
              : (e += "ui-icon-blank"),
            this._addClass(this.icon, "ui-checkboxradio-icon", e),
            t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
            this.icon.prependTo(this.label).after(this.iconSpace))
          : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
      },
      _updateLabel: function () {
        var t = this.label.contents().not(this.element[0]);
        this.icon && (t = t.not(this.icon[0])), (t = this.iconSpace ? t.not(this.iconSpace[0]) : t).remove(), this.label.append(this.options.label);
      },
      refresh: function () {
        var t = this.element[0].checked,
          e = this.element[0].disabled;
        this._updateIcon(t),
          this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
          null !== this.options.label && this._updateLabel(),
          e !== this.options.disabled && this._setOptions({ disabled: e });
      },
    },
  ]);
  var et;
  V.ui.checkboxradio;
  V.widget("ui.button", {
    version: "1.13.2",
    defaultElement: "<button>",
    options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 },
    _getCreateOptions: function () {
      var t,
        e = this._super() || {};
      return (
        (this.isInput = this.element.is("input")),
        null != (t = this.element[0].disabled) && (e.disabled = t),
        (this.originalLabel = this.isInput ? this.element.val() : this.element.html()),
        this.originalLabel && (e.label = this.originalLabel),
        e
      );
    },
    _create: function () {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
        null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
        (this.hasTitle = !!this.element.attr("title")),
        this.options.label &&
          this.options.label !== this.originalLabel &&
          (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
        this._addClass("ui-button", "ui-widget"),
        this._setOption("disabled", this.options.disabled),
        this._enhance(),
        this.element.is("a") &&
          this._on({
            keyup: function (t) {
              t.keyCode === V.ui.keyCode.SPACE &&
                (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
            },
          });
    },
    _enhance: function () {
      this.element.is("button") || this.element.attr("role", "button"),
        this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
    },
    _updateTooltip: function () {
      (this.title = this.element.attr("title")), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
    },
    _updateIcon: function (t, e) {
      var i = "iconPosition" !== t,
        s = i ? this.options.iconPosition : e,
        t = "top" === s || "bottom" === s;
      this.icon
        ? i && this._removeClass(this.icon, null, this.options.icon)
        : ((this.icon = V("<span>")),
          this._addClass(this.icon, "ui-button-icon", "ui-icon"),
          this.options.showLabel || this._addClass("ui-button-icon-only")),
        i && this._addClass(this.icon, null, e),
        this._attachIcon(s),
        t
          ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove())
          : (this.iconSpace || ((this.iconSpace = V("<span> </span>")), this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(s));
    },
    _destroy: function () {
      this.element.removeAttr("role"),
        this.icon && this.icon.remove(),
        this.iconSpace && this.iconSpace.remove(),
        this.hasTitle || this.element.removeAttr("title");
    },
    _attachIconSpace: function (t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
    },
    _attachIcon: function (t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
    },
    _setOptions: function (t) {
      var e = (void 0 === t.showLabel ? this.options : t).showLabel,
        i = (void 0 === t.icon ? this.options : t).icon;
      e || i || (t.showLabel = !0), this._super(t);
    },
    _setOption: function (t, e) {
      "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
        "iconPosition" === t && this._updateIcon(t, e),
        "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()),
        "label" === t &&
          (this.isInput
            ? this.element.val(e)
            : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))),
        this._super(t, e),
        "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e) && this.element.trigger("blur"));
    },
    refresh: function () {
      var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip();
    },
  }),
    !1 !== V.uiBackCompat &&
      (V.widget("ui.button", V.ui.button, {
        options: { text: !0, icons: { primary: null, secondary: null } },
        _create: function () {
          this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
            this.options.icon || (!this.options.icons.primary && !this.options.icons.secondary)
              ? this.options.icon && (this.options.icons.primary = this.options.icon)
              : this.options.icons.primary
              ? (this.options.icon = this.options.icons.primary)
              : ((this.options.icon = this.options.icons.secondary), (this.options.iconPosition = "end")),
            this._super();
        },
        _setOption: function (t, e) {
          "text" !== t
            ? ("showLabel" === t && (this.options.text = e),
              "icon" === t && (this.options.icons.primary = e),
              "icons" === t &&
                (e.primary
                  ? (this._super("icon", e.primary), this._super("iconPosition", "beginning"))
                  : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))),
              this._superApply(arguments))
            : this._super("showLabel", e);
        },
      }),
      (V.fn.button =
        ((et = V.fn.button),
        function (i) {
          var t = "string" == typeof i,
            s = Array.prototype.slice.call(arguments, 1),
            n = this;
          return (
            t
              ? this.length || "instance" !== i
                ? this.each(function () {
                    var t = V(this).attr("type"),
                      e = V.data(this, "ui-" + ("checkbox" !== t && "radio" !== t ? "button" : "checkboxradio"));
                    return "instance" === i
                      ? ((n = e), !1)
                      : e
                      ? "function" != typeof e[i] || "_" === i.charAt(0)
                        ? V.error("no such method '" + i + "' for button widget instance")
                        : (t = e[i].apply(e, s)) !== e && void 0 !== t
                        ? ((n = t && t.jquery ? n.pushStack(t.get()) : t), !1)
                        : void 0
                      : V.error("cannot call methods on button prior to initialization; attempted to call method '" + i + "'");
                  })
                : (n = void 0)
              : (s.length && (i = V.widget.extend.apply(null, [i].concat(s))),
                this.each(function () {
                  var t = V(this).attr("type"),
                    e = "checkbox" !== t && "radio" !== t ? "button" : "checkboxradio",
                    t = V.data(this, "ui-" + e);
                  t
                    ? (t.option(i || {}), t._init && t._init())
                    : "button" != e
                    ? V(this).checkboxradio(V.extend({ icon: !1 }, i))
                    : et.call(V(this), i);
                })),
            n
          );
        })),
      (V.fn.buttonset = function () {
        return (
          V.ui.controlgroup || V.error("Controlgroup widget missing"),
          "option" === arguments[0] && "items" === arguments[1] && arguments[2]
            ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]])
            : "option" === arguments[0] && "items" === arguments[1]
            ? this.controlgroup.apply(this, [arguments[0], "items.button"])
            : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }),
              this.controlgroup.apply(this, arguments))
        );
      }));
  var it;
  V.ui.button;
  function st() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
        selectMonthLabel: "Select month",
        selectYearLabel: "Select year",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        onUpdateDatepicker: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      V.extend(this._defaults, this.regional[""]),
      (this.regional.en = V.extend(!0, {}, this.regional[""])),
      (this.regional["en-US"] = V.extend(!0, {}, this.regional.en)),
      (this.dpDiv = nt(
        V("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")
      ));
  }
  function nt(t) {
    var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t
      .on("mouseout", e, function () {
        V(this).removeClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") && V(this).removeClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") && V(this).removeClass("ui-datepicker-next-hover");
      })
      .on("mouseover", e, ot);
  }
  function ot() {
    V.datepicker._isDisabledDatepicker((it.inline ? it.dpDiv.parent() : it.input)[0]) ||
      (V(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
      V(this).addClass("ui-state-hover"),
      -1 !== this.className.indexOf("ui-datepicker-prev") && V(this).addClass("ui-datepicker-prev-hover"),
      -1 !== this.className.indexOf("ui-datepicker-next") && V(this).addClass("ui-datepicker-next-hover"));
  }
  function at(t, e) {
    for (var i in (V.extend(t, e), e)) null == e[i] && (t[i] = e[i]);
    return t;
  }
  V.extend(V.ui, { datepicker: { version: "1.13.2" } }),
    V.extend(st.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (t) {
        return at(this._defaults, t || {}), this;
      },
      _attachDatepicker: function (t, e) {
        var i,
          s = t.nodeName.toLowerCase(),
          n = "div" === s || "span" === s;
        t.id || ((this.uuid += 1), (t.id = "dp" + this.uuid)),
          ((i = this._newInst(V(t), n)).settings = V.extend({}, e || {})),
          "input" === s ? this._connectDatepicker(t, i) : n && this._inlineDatepicker(t, i);
      },
      _newInst: function (t, e) {
        return {
          id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
          input: t,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: e,
          dpDiv: e
            ? nt(V("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (t, e) {
        var i = V(t);
        (e.append = V([])),
          (e.trigger = V([])),
          i.hasClass(this.markerClassName) ||
            (this._attachments(i, e),
            i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
            this._autoSize(e),
            V.data(t, "datepicker", e),
            e.settings.disabled && this._disableDatepicker(t));
      },
      _attachments: function (t, e) {
        var i,
          s = this._get(e, "appendText"),
          n = this._get(e, "isRTL");
        e.append && e.append.remove(),
          s && ((e.append = V("<span>").addClass(this._appendClass).text(s)), t[n ? "before" : "after"](e.append)),
          t.off("focus", this._showDatepicker),
          e.trigger && e.trigger.remove(),
          ("focus" !== (i = this._get(e, "showOn")) && "both" !== i) || t.on("focus", this._showDatepicker),
          ("button" !== i && "both" !== i) ||
            ((s = this._get(e, "buttonText")),
            (i = this._get(e, "buttonImage")),
            this._get(e, "buttonImageOnly")
              ? (e.trigger = V("<img>").addClass(this._triggerClass).attr({ src: i, alt: s, title: s }))
              : ((e.trigger = V("<button type='button'>").addClass(this._triggerClass)),
                i ? e.trigger.html(V("<img>").attr({ src: i, alt: s, title: s })) : e.trigger.text(s)),
            t[n ? "before" : "after"](e.trigger),
            e.trigger.on("click", function () {
              return (
                V.datepicker._datepickerShowing && V.datepicker._lastInput === t[0]
                  ? V.datepicker._hideDatepicker()
                  : (V.datepicker._datepickerShowing && V.datepicker._lastInput !== t[0] && V.datepicker._hideDatepicker(),
                    V.datepicker._showDatepicker(t[0])),
                !1
              );
            }));
      },
      _autoSize: function (t) {
        var e, i, s, n, o, a;
        this._get(t, "autoSize") &&
          !t.inline &&
          ((o = new Date(2009, 11, 20)),
          (a = this._get(t, "dateFormat")).match(/[DM]/) &&
            ((e = function (t) {
              for (n = s = i = 0; n < t.length; n++) t[n].length > i && ((i = t[n].length), (s = n));
              return s;
            }),
            o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))),
            o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
          t.input.attr("size", this._formatDate(t, o).length));
      },
      _inlineDatepicker: function (t, e) {
        var i = V(t);
        i.hasClass(this.markerClassName) ||
          (i.addClass(this.markerClassName).append(e.dpDiv),
          V.data(t, "datepicker", e),
          this._setDate(e, this._getDefaultDate(e), !0),
          this._updateDatepicker(e),
          this._updateAlternate(e),
          e.settings.disabled && this._disableDatepicker(t),
          e.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (t, e, i, s, n) {
        var o,
          a = this._dialogInst;
        return (
          a ||
            ((this.uuid += 1),
            (o = "dp" + this.uuid),
            (this._dialogInput = V("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>")),
            this._dialogInput.on("keydown", this._doKeyDown),
            V("body").append(this._dialogInput),
            ((a = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}),
            V.data(this._dialogInput[0], "datepicker", a)),
          at(a.settings, s || {}),
          (e = e && e.constructor === Date ? this._formatDate(a, e) : e),
          this._dialogInput.val(e),
          (this._pos = n ? (n.length ? n : [n.pageX, n.pageY]) : null),
          this._pos ||
            ((o = document.documentElement.clientWidth),
            (s = document.documentElement.clientHeight),
            (e = document.documentElement.scrollLeft || document.body.scrollLeft),
            (n = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [o / 2 - 100 + e, s / 2 - 150 + n])),
          this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
          (a.settings.onSelect = i),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          V.blockUI && V.blockUI(this.dpDiv),
          V.data(this._dialogInput[0], "datepicker", a),
          this
        );
      },
      _destroyDatepicker: function (t) {
        var e,
          i = V(t),
          s = V.data(t, "datepicker");
        i.hasClass(this.markerClassName) &&
          ((e = t.nodeName.toLowerCase()),
          V.removeData(t, "datepicker"),
          "input" === e
            ? (s.append.remove(),
              s.trigger.remove(),
              i
                .removeClass(this.markerClassName)
                .off("focus", this._showDatepicker)
                .off("keydown", this._doKeyDown)
                .off("keypress", this._doKeyPress)
                .off("keyup", this._doKeyUp))
            : ("div" !== e && "span" !== e) || i.removeClass(this.markerClassName).empty(),
          it === s && ((it = null), (this._curInst = null)));
      },
      _enableDatepicker: function (e) {
        var t,
          i = V(e),
          s = V.data(e, "datepicker");
        i.hasClass(this.markerClassName) &&
          ("input" === (t = e.nodeName.toLowerCase())
            ? ((e.disabled = !1),
              s.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" !== t && "span" !== t) ||
              ((i = i.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"),
              i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
          (this._disabledInputs = V.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })));
      },
      _disableDatepicker: function (e) {
        var t,
          i = V(e),
          s = V.data(e, "datepicker");
        i.hasClass(this.markerClassName) &&
          ("input" === (t = e.nodeName.toLowerCase())
            ? ((e.disabled = !0),
              s.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" !== t && "span" !== t) ||
              ((i = i.children("." + this._inlineClass)).children().addClass("ui-state-disabled"),
              i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
          (this._disabledInputs = V.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })),
          (this._disabledInputs[this._disabledInputs.length] = e));
      },
      _isDisabledDatepicker: function (t) {
        if (!t) return !1;
        for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] === t) return !0;
        return !1;
      },
      _getInst: function (t) {
        try {
          return V.data(t, "datepicker");
        } catch (t) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (t, e, i) {
        var s,
          n,
          o = this._getInst(t);
        if (2 === arguments.length && "string" == typeof e)
          return "defaults" === e ? V.extend({}, V.datepicker._defaults) : o ? ("all" === e ? V.extend({}, o.settings) : this._get(o, e)) : null;
        (s = e || {}),
          "string" == typeof e && ((s = {})[e] = i),
          o &&
            (this._curInst === o && this._hideDatepicker(),
            (n = this._getDateDatepicker(t, !0)),
            (e = this._getMinMaxDate(o, "min")),
            (i = this._getMinMaxDate(o, "max")),
            at(o.settings, s),
            null !== e && void 0 !== s.dateFormat && void 0 === s.minDate && (o.settings.minDate = this._formatDate(o, e)),
            null !== i && void 0 !== s.dateFormat && void 0 === s.maxDate && (o.settings.maxDate = this._formatDate(o, i)),
            "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
            this._attachments(V(t), o),
            this._autoSize(o),
            this._setDate(o, n),
            this._updateAlternate(o),
            this._updateDatepicker(o));
      },
      _changeDatepicker: function (t, e, i) {
        this._optionDatepicker(t, e, i);
      },
      _refreshDatepicker: function (t) {
        t = this._getInst(t);
        t && this._updateDatepicker(t);
      },
      _setDateDatepicker: function (t, e) {
        t = this._getInst(t);
        t && (this._setDate(t, e), this._updateDatepicker(t), this._updateAlternate(t));
      },
      _getDateDatepicker: function (t, e) {
        t = this._getInst(t);
        return t && !t.inline && this._setDateFromField(t, e), t ? this._getDate(t) : null;
      },
      _doKeyDown: function (t) {
        var e,
          i,
          s = V.datepicker._getInst(t.target),
          n = !0,
          o = s.dpDiv.is(".ui-datepicker-rtl");
        if (((s._keyEvent = !0), V.datepicker._datepickerShowing))
          switch (t.keyCode) {
            case 9:
              V.datepicker._hideDatepicker(), (n = !1);
              break;
            case 13:
              return (
                (i = V("td." + V.datepicker._dayOverClass + ":not(." + V.datepicker._currentClass + ")", s.dpDiv))[0] &&
                  V.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]),
                (e = V.datepicker._get(s, "onSelect"))
                  ? ((i = V.datepicker._formatDate(s)), e.apply(s.input ? s.input[0] : null, [i, s]))
                  : V.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              V.datepicker._hideDatepicker();
              break;
            case 33:
              V.datepicker._adjustDate(t.target, t.ctrlKey ? -V.datepicker._get(s, "stepBigMonths") : -V.datepicker._get(s, "stepMonths"), "M");
              break;
            case 34:
              V.datepicker._adjustDate(t.target, t.ctrlKey ? +V.datepicker._get(s, "stepBigMonths") : +V.datepicker._get(s, "stepMonths"), "M");
              break;
            case 35:
              (t.ctrlKey || t.metaKey) && V.datepicker._clearDate(t.target), (n = t.ctrlKey || t.metaKey);
              break;
            case 36:
              (t.ctrlKey || t.metaKey) && V.datepicker._gotoToday(t.target), (n = t.ctrlKey || t.metaKey);
              break;
            case 37:
              (t.ctrlKey || t.metaKey) && V.datepicker._adjustDate(t.target, o ? 1 : -1, "D"),
                (n = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  V.datepicker._adjustDate(t.target, t.ctrlKey ? -V.datepicker._get(s, "stepBigMonths") : -V.datepicker._get(s, "stepMonths"), "M");
              break;
            case 38:
              (t.ctrlKey || t.metaKey) && V.datepicker._adjustDate(t.target, -7, "D"), (n = t.ctrlKey || t.metaKey);
              break;
            case 39:
              (t.ctrlKey || t.metaKey) && V.datepicker._adjustDate(t.target, o ? -1 : 1, "D"),
                (n = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  V.datepicker._adjustDate(t.target, t.ctrlKey ? +V.datepicker._get(s, "stepBigMonths") : +V.datepicker._get(s, "stepMonths"), "M");
              break;
            case 40:
              (t.ctrlKey || t.metaKey) && V.datepicker._adjustDate(t.target, 7, "D"), (n = t.ctrlKey || t.metaKey);
              break;
            default:
              n = !1;
          }
        else 36 === t.keyCode && t.ctrlKey ? V.datepicker._showDatepicker(this) : (n = !1);
        n && (t.preventDefault(), t.stopPropagation());
      },
      _doKeyPress: function (t) {
        var e,
          i = V.datepicker._getInst(t.target);
        if (V.datepicker._get(i, "constrainInput"))
          return (
            (e = V.datepicker._possibleChars(V.datepicker._get(i, "dateFormat"))),
            (i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode)),
            t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)
          );
      },
      _doKeyUp: function (t) {
        t = V.datepicker._getInst(t.target);
        if (t.input.val() !== t.lastVal)
          try {
            V.datepicker.parseDate(V.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, V.datepicker._getFormatConfig(t)) &&
              (V.datepicker._setDateFromField(t), V.datepicker._updateAlternate(t), V.datepicker._updateDatepicker(t));
          } catch (t) {}
        return !0;
      },
      _showDatepicker: function (t) {
        var e, i, s, n;
        "input" !== (t = t.target || t).nodeName.toLowerCase() && (t = V("input", t.parentNode)[0]),
          V.datepicker._isDisabledDatepicker(t) ||
            V.datepicker._lastInput === t ||
            ((n = V.datepicker._getInst(t)),
            V.datepicker._curInst &&
              V.datepicker._curInst !== n &&
              (V.datepicker._curInst.dpDiv.stop(!0, !0),
              n && V.datepicker._datepickerShowing && V.datepicker._hideDatepicker(V.datepicker._curInst.input[0])),
            !1 !== (i = (s = V.datepicker._get(n, "beforeShow")) ? s.apply(t, [t, n]) : {}) &&
              (at(n.settings, i),
              (n.lastVal = null),
              (V.datepicker._lastInput = t),
              V.datepicker._setDateFromField(n),
              V.datepicker._inDialog && (t.value = ""),
              V.datepicker._pos || ((V.datepicker._pos = V.datepicker._findPos(t)), (V.datepicker._pos[1] += t.offsetHeight)),
              (e = !1),
              V(t)
                .parents()
                .each(function () {
                  return !(e |= "fixed" === V(this).css("position"));
                }),
              (s = { left: V.datepicker._pos[0], top: V.datepicker._pos[1] }),
              (V.datepicker._pos = null),
              n.dpDiv.empty(),
              n.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }),
              V.datepicker._updateDatepicker(n),
              (s = V.datepicker._checkOffset(n, s, e)),
              n.dpDiv.css({
                position: V.datepicker._inDialog && V.blockUI ? "static" : e ? "fixed" : "absolute",
                display: "none",
                left: s.left + "px",
                top: s.top + "px",
              }),
              n.inline ||
                ((i = V.datepicker._get(n, "showAnim")),
                (s = V.datepicker._get(n, "duration")),
                n.dpDiv.css(
                  "z-index",
                  (function (t) {
                    for (var e, i; t.length && t[0] !== document; ) {
                      if (
                        ("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) &&
                        ((i = parseInt(t.css("zIndex"), 10)), !isNaN(i) && 0 !== i)
                      )
                        return i;
                      t = t.parent();
                    }
                    return 0;
                  })(V(t)) + 1
                ),
                (V.datepicker._datepickerShowing = !0),
                V.effects && V.effects.effect[i] ? n.dpDiv.show(i, V.datepicker._get(n, "showOptions"), s) : n.dpDiv[i || "show"](i ? s : null),
                V.datepicker._shouldFocusInput(n) && n.input.trigger("focus"),
                (V.datepicker._curInst = n))));
      },
      _updateDatepicker: function (t) {
        (this.maxRows = 4), (it = t).dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
        var e,
          i = this._getNumberOfMonths(t),
          s = i[1],
          n = t.dpDiv.find("." + this._dayOverClass + " a"),
          o = V.datepicker._get(t, "onUpdateDatepicker");
        0 < n.length && ot.apply(n.get(0)),
          t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
          1 < s && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"),
          t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
          t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
          t === V.datepicker._curInst && V.datepicker._datepickerShowing && V.datepicker._shouldFocusInput(t) && t.input.trigger("focus"),
          t.yearshtml &&
            ((e = t.yearshtml),
            setTimeout(function () {
              e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year").first().replaceWith(t.yearshtml),
                (e = t.yearshtml = null);
            }, 0)),
          o && o.apply(t.input ? t.input[0] : null, [t]);
      },
      _shouldFocusInput: function (t) {
        return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
      },
      _checkOffset: function (t, e, i) {
        var s = t.dpDiv.outerWidth(),
          n = t.dpDiv.outerHeight(),
          o = t.input ? t.input.outerWidth() : 0,
          a = t.input ? t.input.outerHeight() : 0,
          r = document.documentElement.clientWidth + (i ? 0 : V(document).scrollLeft()),
          l = document.documentElement.clientHeight + (i ? 0 : V(document).scrollTop());
        return (
          (e.left -= this._get(t, "isRTL") ? s - o : 0),
          (e.left -= i && e.left === t.input.offset().left ? V(document).scrollLeft() : 0),
          (e.top -= i && e.top === t.input.offset().top + a ? V(document).scrollTop() : 0),
          (e.left -= Math.min(e.left, e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0)),
          (e.top -= Math.min(e.top, e.top + n > l && n < l ? Math.abs(n + a) : 0)),
          e
        );
      },
      _findPos: function (t) {
        for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || V.expr.pseudos.hidden(t)); )
          t = t[i ? "previousSibling" : "nextSibling"];
        return [(e = V(t).offset()).left, e.top];
      },
      _hideDatepicker: function (t) {
        var e,
          i,
          s = this._curInst;
        !s ||
          (t && s !== V.data(t, "datepicker")) ||
          (this._datepickerShowing &&
            ((e = this._get(s, "showAnim")),
            (i = this._get(s, "duration")),
            (t = function () {
              V.datepicker._tidyDialog(s);
            }),
            V.effects && (V.effects.effect[e] || V.effects[e])
              ? s.dpDiv.hide(e, V.datepicker._get(s, "showOptions"), i, t)
              : s.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, t),
            e || t(),
            (this._datepickerShowing = !1),
            (t = this._get(s, "onClose")) && t.apply(s.input ? s.input[0] : null, [s.input ? s.input.val() : "", s]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), V.blockUI && (V.unblockUI(), V("body").append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (t) {
        t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (t) {
        var e;
        V.datepicker._curInst &&
          ((e = V(t.target)),
          (t = V.datepicker._getInst(e[0])),
          ((e[0].id === V.datepicker._mainDivId ||
            0 !== e.parents("#" + V.datepicker._mainDivId).length ||
            e.hasClass(V.datepicker.markerClassName) ||
            e.closest("." + V.datepicker._triggerClass).length ||
            !V.datepicker._datepickerShowing ||
            (V.datepicker._inDialog && V.blockUI)) &&
            (!e.hasClass(V.datepicker.markerClassName) || V.datepicker._curInst === t)) ||
            V.datepicker._hideDatepicker());
      },
      _adjustDate: function (t, e, i) {
        var s = V(t),
          t = this._getInst(s[0]);
        this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(t, e, i), this._updateDatepicker(t));
      },
      _gotoToday: function (t) {
        var e = V(t),
          i = this._getInst(e[0]);
        this._get(i, "gotoCurrent") && i.currentDay
          ? ((i.selectedDay = i.currentDay), (i.drawMonth = i.selectedMonth = i.currentMonth), (i.drawYear = i.selectedYear = i.currentYear))
          : ((t = new Date()),
            (i.selectedDay = t.getDate()),
            (i.drawMonth = i.selectedMonth = t.getMonth()),
            (i.drawYear = i.selectedYear = t.getFullYear())),
          this._notifyChange(i),
          this._adjustDate(e);
      },
      _selectMonthYear: function (t, e, i) {
        var s = V(t),
          t = this._getInst(s[0]);
        (t["selected" + ("M" === i ? "Month" : "Year")] = t["draw" + ("M" === i ? "Month" : "Year")] =
          parseInt(e.options[e.selectedIndex].value, 10)),
          this._notifyChange(t),
          this._adjustDate(s);
      },
      _selectDay: function (t, e, i, s) {
        var n = V(t);
        V(s).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(n[0]) ||
          (((n = this._getInst(n[0])).selectedDay = n.currentDay = parseInt(V("a", s).attr("data-date"))),
          (n.selectedMonth = n.currentMonth = e),
          (n.selectedYear = n.currentYear = i),
          this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)));
      },
      _clearDate: function (t) {
        t = V(t);
        this._selectDate(t, "");
      },
      _selectDate: function (t, e) {
        var i = V(t),
          t = this._getInst(i[0]);
        (e = null != e ? e : this._formatDate(t)),
          t.input && t.input.val(e),
          this._updateAlternate(t),
          (i = this._get(t, "onSelect")) ? i.apply(t.input ? t.input[0] : null, [e, t]) : t.input && t.input.trigger("change"),
          t.inline
            ? this._updateDatepicker(t)
            : (this._hideDatepicker(),
              (this._lastInput = t.input[0]),
              "object" != typeof t.input[0] && t.input.trigger("focus"),
              (this._lastInput = null));
      },
      _updateAlternate: function (t) {
        var e,
          i,
          s = this._get(t, "altField");
        s &&
          ((e = this._get(t, "altFormat") || this._get(t, "dateFormat")),
          (i = this._getDate(t)),
          (t = this.formatDate(e, i, this._getFormatConfig(t))),
          V(document).find(s).val(t));
      },
      noWeekends: function (t) {
        t = t.getDay();
        return [0 < t && t < 6, ""];
      },
      iso8601Week: function (t) {
        var e = new Date(t.getTime());
        return (
          e.setDate(e.getDate() + 4 - (e.getDay() || 7)),
          (t = e.getTime()),
          e.setMonth(0),
          e.setDate(1),
          Math.floor(Math.round((t - e) / 864e5) / 7) + 1
        );
      },
      parseDate: function (e, n, t) {
        if (null == e || null == n) throw "Invalid arguments";
        if ("" === (n = "object" == typeof n ? n.toString() : n + "")) return null;
        for (
          var i,
            s,
            o,
            a = 0,
            r = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            r = "string" != typeof r ? r : (new Date().getFullYear() % 100) + parseInt(r, 10),
            l = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
            h = (t ? t.dayNames : null) || this._defaults.dayNames,
            c = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
            u = (t ? t.monthNames : null) || this._defaults.monthNames,
            d = -1,
            p = -1,
            f = -1,
            g = -1,
            m = !1,
            _ = function (t) {
              t = w + 1 < e.length && e.charAt(w + 1) === t;
              return t && w++, t;
            },
            v = function (t) {
              var e = _(t),
                e = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                e = new RegExp("^\\d{" + ("y" === t ? e : 1) + "," + e + "}"),
                e = n.substring(a).match(e);
              if (!e) throw "Missing number at position " + a;
              return (a += e[0].length), parseInt(e[0], 10);
            },
            b = function (t, e, i) {
              var s = -1,
                e = V.map(_(t) ? i : e, function (t, e) {
                  return [[e, t]];
                }).sort(function (t, e) {
                  return -(t[1].length - e[1].length);
                });
              if (
                (V.each(e, function (t, e) {
                  var i = e[1];
                  if (n.substr(a, i.length).toLowerCase() === i.toLowerCase()) return (s = e[0]), (a += i.length), !1;
                }),
                -1 !== s)
              )
                return s + 1;
              throw "Unknown name at position " + a;
            },
            y = function () {
              if (n.charAt(a) !== e.charAt(w)) throw "Unexpected literal at position " + a;
              a++;
            },
            w = 0;
          w < e.length;
          w++
        )
          if (m) "'" !== e.charAt(w) || _("'") ? y() : (m = !1);
          else
            switch (e.charAt(w)) {
              case "d":
                f = v("d");
                break;
              case "D":
                b("D", l, h);
                break;
              case "o":
                g = v("o");
                break;
              case "m":
                p = v("m");
                break;
              case "M":
                p = b("M", c, u);
                break;
              case "y":
                d = v("y");
                break;
              case "@":
                (d = (o = new Date(v("@"))).getFullYear()), (p = o.getMonth() + 1), (f = o.getDate());
                break;
              case "!":
                (d = (o = new Date((v("!") - this._ticksTo1970) / 1e4)).getFullYear()), (p = o.getMonth() + 1), (f = o.getDate());
                break;
              case "'":
                _("'") ? y() : (m = !0);
                break;
              default:
                y();
            }
        if (a < n.length && ((s = n.substr(a)), !/^\s+/.test(s))) throw "Extra/unparsed characters found in date: " + s;
        if (
          (-1 === d
            ? (d = new Date().getFullYear())
            : d < 100 && (d += new Date().getFullYear() - (new Date().getFullYear() % 100) + (d <= r ? 0 : -100)),
          -1 < g)
        )
          for (p = 1, f = g; ; ) {
            if (f <= (i = this._getDaysInMonth(d, p - 1))) break;
            p++, (f -= i);
          }
        if ((o = this._daylightSavingAdjust(new Date(d, p - 1, f))).getFullYear() !== d || o.getMonth() + 1 !== p || o.getDate() !== f)
          throw "Invalid date";
        return o;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
      formatDate: function (e, t, i) {
        if (!t) return "";
        function s(t, e, i) {
          var s = "" + e;
          if (c(t)) for (; s.length < i; ) s = "0" + s;
          return s;
        }
        function n(t, e, i, s) {
          return (c(t) ? s : i)[e];
        }
        var o,
          a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          r = (i ? i.dayNames : null) || this._defaults.dayNames,
          l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          h = (i ? i.monthNames : null) || this._defaults.monthNames,
          c = function (t) {
            t = o + 1 < e.length && e.charAt(o + 1) === t;
            return t && o++, t;
          },
          u = "",
          d = !1;
        if (t)
          for (o = 0; o < e.length; o++)
            if (d) "'" !== e.charAt(o) || c("'") ? (u += e.charAt(o)) : (d = !1);
            else
              switch (e.charAt(o)) {
                case "d":
                  u += s("d", t.getDate(), 2);
                  break;
                case "D":
                  u += n("D", t.getDay(), a, r);
                  break;
                case "o":
                  u += s(
                    "o",
                    Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5),
                    3
                  );
                  break;
                case "m":
                  u += s("m", t.getMonth() + 1, 2);
                  break;
                case "M":
                  u += n("M", t.getMonth(), l, h);
                  break;
                case "y":
                  u += c("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + (t.getFullYear() % 100);
                  break;
                case "@":
                  u += t.getTime();
                  break;
                case "!":
                  u += 1e4 * t.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  c("'") ? (u += "'") : (d = !0);
                  break;
                default:
                  u += e.charAt(o);
              }
        return u;
      },
      _possibleChars: function (e) {
        for (
          var t = "",
            i = !1,
            s = function (t) {
              t = n + 1 < e.length && e.charAt(n + 1) === t;
              return t && n++, t;
            },
            n = 0;
          n < e.length;
          n++
        )
          if (i) "'" !== e.charAt(n) || s("'") ? (t += e.charAt(n)) : (i = !1);
          else
            switch (e.charAt(n)) {
              case "d":
              case "m":
              case "y":
              case "@":
                t += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                s("'") ? (t += "'") : (i = !0);
                break;
              default:
                t += e.charAt(n);
            }
        return t;
      },
      _get: function (t, e) {
        return (void 0 !== t.settings[e] ? t.settings : this._defaults)[e];
      },
      _setDateFromField: function (t, e) {
        if (t.input.val() !== t.lastVal) {
          var i = this._get(t, "dateFormat"),
            s = (t.lastVal = t.input ? t.input.val() : null),
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);
          try {
            o = this.parseDate(i, s, a) || n;
          } catch (t) {
            s = e ? "" : s;
          }
          (t.selectedDay = o.getDate()),
            (t.drawMonth = t.selectedMonth = o.getMonth()),
            (t.drawYear = t.selectedYear = o.getFullYear()),
            (t.currentDay = s ? o.getDate() : 0),
            (t.currentMonth = s ? o.getMonth() : 0),
            (t.currentYear = s ? o.getFullYear() : 0),
            this._adjustInstDate(t);
        }
      },
      _getDefaultDate: function (t) {
        return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
      },
      _determineDate: function (r, t, e) {
        var i,
          s,
          t =
            null == t || "" === t
              ? e
              : "string" == typeof t
              ? (function (t) {
                  try {
                    return V.datepicker.parseDate(V.datepicker._get(r, "dateFormat"), t, V.datepicker._getFormatConfig(r));
                  } catch (t) {}
                  for (
                    var e = (t.toLowerCase().match(/^c/) ? V.datepicker._getDate(r) : null) || new Date(),
                      i = e.getFullYear(),
                      s = e.getMonth(),
                      n = e.getDate(),
                      o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      a = o.exec(t);
                    a;

                  ) {
                    switch (a[2] || "d") {
                      case "d":
                      case "D":
                        n += parseInt(a[1], 10);
                        break;
                      case "w":
                      case "W":
                        n += 7 * parseInt(a[1], 10);
                        break;
                      case "m":
                      case "M":
                        (s += parseInt(a[1], 10)), (n = Math.min(n, V.datepicker._getDaysInMonth(i, s)));
                        break;
                      case "y":
                      case "Y":
                        (i += parseInt(a[1], 10)), (n = Math.min(n, V.datepicker._getDaysInMonth(i, s)));
                    }
                    a = o.exec(t);
                  }
                  return new Date(i, s, n);
                })(t)
              : "number" == typeof t
              ? isNaN(t)
                ? e
                : ((i = t), (s = new Date()).setDate(s.getDate() + i), s)
              : new Date(t.getTime());
        return (
          (t = t && "Invalid Date" === t.toString() ? e : t) && (t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0)),
          this._daylightSavingAdjust(t)
        );
      },
      _daylightSavingAdjust: function (t) {
        return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null;
      },
      _setDate: function (t, e, i) {
        var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          e = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
        (t.selectedDay = t.currentDay = e.getDate()),
          (t.drawMonth = t.selectedMonth = t.currentMonth = e.getMonth()),
          (t.drawYear = t.selectedYear = t.currentYear = e.getFullYear()),
          (n === t.selectedMonth && o === t.selectedYear) || i || this._notifyChange(t),
          this._adjustInstDate(t),
          t.input && t.input.val(s ? "" : this._formatDate(t));
      },
      _getDate: function (t) {
        return !t.currentYear || (t.input && "" === t.input.val())
          ? null
          : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      },
      _attachHandlers: function (t) {
        var e = this._get(t, "stepMonths"),
          i = "#" + t.id.replace(/\\\\/g, "\\");
        t.dpDiv.find("[data-handler]").map(function () {
          var t = {
            prev: function () {
              V.datepicker._adjustDate(i, -e, "M");
            },
            next: function () {
              V.datepicker._adjustDate(i, +e, "M");
            },
            hide: function () {
              V.datepicker._hideDatepicker();
            },
            today: function () {
              V.datepicker._gotoToday(i);
            },
            selectDay: function () {
              return V.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
            },
            selectMonth: function () {
              return V.datepicker._selectMonthYear(i, this, "M"), !1;
            },
            selectYear: function () {
              return V.datepicker._selectMonthYear(i, this, "Y"), !1;
            },
          };
          V(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
        });
      },
      _generateHTML: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c,
          u,
          d,
          p,
          f,
          g,
          m,
          _,
          v,
          b,
          y,
          w,
          x,
          k,
          C,
          D,
          I,
          T,
          P,
          M,
          S,
          H,
          z,
          A = new Date(),
          O = this._daylightSavingAdjust(new Date(A.getFullYear(), A.getMonth(), A.getDate())),
          N = this._get(t, "isRTL"),
          E = this._get(t, "showButtonPanel"),
          W = this._get(t, "hideIfNoPrevNext"),
          F = this._get(t, "navigationAsDateFormat"),
          L = this._getNumberOfMonths(t),
          R = this._get(t, "showCurrentAtPos"),
          A = this._get(t, "stepMonths"),
          Y = 1 !== L[0] || 1 !== L[1],
          B = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
          j = this._getMinMaxDate(t, "min"),
          q = this._getMinMaxDate(t, "max"),
          K = t.drawMonth - R,
          U = t.drawYear;
        if ((K < 0 && ((K += 12), U--), q))
          for (
            e = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth() - L[0] * L[1] + 1, q.getDate())), e = j && e < j ? j : e;
            this._daylightSavingAdjust(new Date(U, K, 1)) > e;

          )
            --K < 0 && ((K = 11), U--);
        for (
          t.drawMonth = K,
            t.drawYear = U,
            R = this._get(t, "prevText"),
            R = F ? this.formatDate(R, this._daylightSavingAdjust(new Date(U, K - A, 1)), this._getFormatConfig(t)) : R,
            i = this._canAdjustMonth(t, -1, U, K)
              ? V("<a>")
                  .attr({ class: "ui-datepicker-prev ui-corner-all", "data-handler": "prev", "data-event": "click", title: R })
                  .append(
                    V("<span>")
                      .addClass("ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w"))
                      .text(R)
                  )[0].outerHTML
              : W
              ? ""
              : V("<a>")
                  .attr({ class: "ui-datepicker-prev ui-corner-all ui-state-disabled", title: R })
                  .append(
                    V("<span>")
                      .addClass("ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w"))
                      .text(R)
                  )[0].outerHTML,
            R = this._get(t, "nextText"),
            R = F ? this.formatDate(R, this._daylightSavingAdjust(new Date(U, K + A, 1)), this._getFormatConfig(t)) : R,
            s = this._canAdjustMonth(t, 1, U, K)
              ? V("<a>")
                  .attr({ class: "ui-datepicker-next ui-corner-all", "data-handler": "next", "data-event": "click", title: R })
                  .append(
                    V("<span>")
                      .addClass("ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e"))
                      .text(R)
                  )[0].outerHTML
              : W
              ? ""
              : V("<a>")
                  .attr({ class: "ui-datepicker-next ui-corner-all ui-state-disabled", title: R })
                  .append(
                    V("<span>")
                      .attr("class", "ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e"))
                      .text(R)
                  )[0].outerHTML,
            A = this._get(t, "currentText"),
            W = this._get(t, "gotoCurrent") && t.currentDay ? B : O,
            A = F ? this.formatDate(A, W, this._getFormatConfig(t)) : A,
            R = "",
            t.inline ||
              (R = V("<button>")
                .attr({
                  type: "button",
                  class: "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
                  "data-handler": "hide",
                  "data-event": "click",
                })
                .text(this._get(t, "closeText"))[0].outerHTML),
            F = "",
            E &&
              (F = V("<div class='ui-datepicker-buttonpane ui-widget-content'>")
                .append(N ? R : "")
                .append(
                  this._isInRange(t, W)
                    ? V("<button>")
                        .attr({
                          type: "button",
                          class: "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
                          "data-handler": "today",
                          "data-event": "click",
                        })
                        .text(A)
                    : ""
                )
                .append(N ? "" : R)[0].outerHTML),
            n = parseInt(this._get(t, "firstDay"), 10),
            n = isNaN(n) ? 0 : n,
            o = this._get(t, "showWeek"),
            a = this._get(t, "dayNames"),
            r = this._get(t, "dayNamesMin"),
            l = this._get(t, "monthNames"),
            h = this._get(t, "monthNamesShort"),
            c = this._get(t, "beforeShowDay"),
            u = this._get(t, "showOtherMonths"),
            d = this._get(t, "selectOtherMonths"),
            p = this._getDefaultDate(t),
            f = "",
            m = 0;
          m < L[0];
          m++
        ) {
          for (_ = "", this.maxRows = 4, v = 0; v < L[1]; v++) {
            if (((b = this._daylightSavingAdjust(new Date(U, K, t.selectedDay))), (y = " ui-corner-all"), (w = ""), Y)) {
              if (((w += "<div class='ui-datepicker-group"), 1 < L[1]))
                switch (v) {
                  case 0:
                    (w += " ui-datepicker-group-first"), (y = " ui-corner-" + (N ? "right" : "left"));
                    break;
                  case L[1] - 1:
                    (w += " ui-datepicker-group-last"), (y = " ui-corner-" + (N ? "left" : "right"));
                    break;
                  default:
                    (w += " ui-datepicker-group-middle"), (y = "");
                }
              w += "'>";
            }
            for (
              w +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                y +
                "'>" +
                (/all|left/.test(y) && 0 === m ? (N ? s : i) : "") +
                (/all|right/.test(y) && 0 === m ? (N ? i : s) : "") +
                this._generateMonthYearHeader(t, K, U, j, q, 0 < m || 0 < v, l, h) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                x = o ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                g = 0;
              g < 7;
              g++
            )
              x +=
                "<th scope='col'" +
                (5 <= (g + n + 6) % 7 ? " class='ui-datepicker-week-end'" : "") +
                "><span title='" +
                a[(k = (g + n) % 7)] +
                "'>" +
                r[k] +
                "</span></th>";
            for (
              w += x + "</tr></thead><tbody>",
                D = this._getDaysInMonth(U, K),
                U === t.selectedYear && K === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, D)),
                C = (this._getFirstDayOfMonth(U, K) - n + 7) % 7,
                D = Math.ceil((C + D) / 7),
                I = Y && this.maxRows > D ? this.maxRows : D,
                this.maxRows = I,
                T = this._daylightSavingAdjust(new Date(U, K, 1 - C)),
                P = 0;
              P < I;
              P++
            ) {
              for (w += "<tr>", M = o ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(T) + "</td>" : "", g = 0; g < 7; g++)
                (S = c ? c.apply(t.input ? t.input[0] : null, [T]) : [!0, ""]),
                  (z = ((H = T.getMonth() !== K) && !d) || !S[0] || (j && T < j) || (q && q < T)),
                  (M +=
                    "<td class='" +
                    (5 <= (g + n + 6) % 7 ? " ui-datepicker-week-end" : "") +
                    (H ? " ui-datepicker-other-month" : "") +
                    ((T.getTime() === b.getTime() && K === t.selectedMonth && t._keyEvent) ||
                    (p.getTime() === T.getTime() && p.getTime() === b.getTime())
                      ? " " + this._dayOverClass
                      : "") +
                    (z ? " " + this._unselectableClass + " ui-state-disabled" : "") +
                    (H && !u
                      ? ""
                      : " " +
                        S[1] +
                        (T.getTime() === B.getTime() ? " " + this._currentClass : "") +
                        (T.getTime() === O.getTime() ? " ui-datepicker-today" : "")) +
                    "'" +
                    ((H && !u) || !S[2] ? "" : " title='" + S[2].replace(/'/g, "&#39;") + "'") +
                    (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + T.getMonth() + "' data-year='" + T.getFullYear() + "'") +
                    ">" +
                    (H && !u
                      ? "&#xa0;"
                      : z
                      ? "<span class='ui-state-default'>" + T.getDate() + "</span>"
                      : "<a class='ui-state-default" +
                        (T.getTime() === O.getTime() ? " ui-state-highlight" : "") +
                        (T.getTime() === B.getTime() ? " ui-state-active" : "") +
                        (H ? " ui-priority-secondary" : "") +
                        "' href='#' aria-current='" +
                        (T.getTime() === B.getTime() ? "true" : "false") +
                        "' data-date='" +
                        T.getDate() +
                        "'>" +
                        T.getDate() +
                        "</a>") +
                    "</td>"),
                  T.setDate(T.getDate() + 1),
                  (T = this._daylightSavingAdjust(T));
              w += M + "</tr>";
            }
            11 < ++K && ((K = 0), U++),
              (_ += w +=
                "</tbody></table>" + (Y ? "</div>" + (0 < L[0] && v === L[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""));
          }
          f += _;
        }
        return (f += F), (t._keyEvent = !1), f;
      },
      _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
        var l,
          h,
          c,
          u,
          d,
          p,
          f = this._get(t, "changeMonth"),
          g = this._get(t, "changeYear"),
          m = this._get(t, "showMonthAfterYear"),
          _ = this._get(t, "selectMonthLabel"),
          v = this._get(t, "selectYearLabel"),
          b = "<div class='ui-datepicker-title'>",
          y = "";
        if (o || !f) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
        else {
          for (
            l = s && s.getFullYear() === i,
              h = n && n.getFullYear() === i,
              y += "<select class='ui-datepicker-month' aria-label='" + _ + "' data-handler='selectMonth' data-event='change'>",
              c = 0;
            c < 12;
            c++
          )
            (!l || c >= s.getMonth()) &&
              (!h || c <= n.getMonth()) &&
              (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
          y += "</select>";
        }
        if ((m || (b += y + (!o && f && g ? "" : "&#xa0;")), !t.yearshtml))
          if (((t.yearshtml = ""), o || !g)) b += "<span class='ui-datepicker-year'>" + i + "</span>";
          else {
            for (
              a = this._get(t, "yearRange").split(":"),
                u = new Date().getFullYear(),
                d = (_ = function (t) {
                  t = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? u + parseInt(t, 10) : parseInt(t, 10);
                  return isNaN(t) ? u : t;
                })(a[0]),
                p = Math.max(d, _(a[1] || "")),
                d = s ? Math.max(d, s.getFullYear()) : d,
                p = n ? Math.min(p, n.getFullYear()) : p,
                t.yearshtml += "<select class='ui-datepicker-year' aria-label='" + v + "' data-handler='selectYear' data-event='change'>";
              d <= p;
              d++
            )
              t.yearshtml += "<option value='" + d + "'" + (d === i ? " selected='selected'" : "") + ">" + d + "</option>";
            (t.yearshtml += "</select>"), (b += t.yearshtml), (t.yearshtml = null);
          }
        return (b += this._get(t, "yearSuffix")), m && (b += (!o && f && g ? "" : "&#xa0;") + y), (b += "</div>");
      },
      _adjustInstDate: function (t, e, i) {
        var s = t.selectedYear + ("Y" === i ? e : 0),
          n = t.selectedMonth + ("M" === i ? e : 0),
          e = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
          e = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, e)));
        (t.selectedDay = e.getDate()),
          (t.drawMonth = t.selectedMonth = e.getMonth()),
          (t.drawYear = t.selectedYear = e.getFullYear()),
          ("M" !== i && "Y" !== i) || this._notifyChange(t);
      },
      _restrictMinMax: function (t, e) {
        var i = this._getMinMaxDate(t, "min"),
          t = this._getMinMaxDate(t, "max"),
          e = i && e < i ? i : e;
        return t && t < e ? t : e;
      },
      _notifyChange: function (t) {
        var e = this._get(t, "onChangeMonthYear");
        e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
      },
      _getNumberOfMonths: function (t) {
        t = this._get(t, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
      },
      _getMinMaxDate: function (t, e) {
        return this._determineDate(t, this._get(t, e + "Date"), null);
      },
      _getDaysInMonth: function (t, e) {
        return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
      },
      _getFirstDayOfMonth: function (t, e) {
        return new Date(t, e, 1).getDay();
      },
      _canAdjustMonth: function (t, e, i, s) {
        var n = this._getNumberOfMonths(t),
          n = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
        return e < 0 && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(t, n);
      },
      _isInRange: function (t, e) {
        var i = this._getMinMaxDate(t, "min"),
          s = this._getMinMaxDate(t, "max"),
          n = null,
          o = null,
          a = this._get(t, "yearRange");
        return (
          a &&
            ((t = a.split(":")),
            (a = new Date().getFullYear()),
            (n = parseInt(t[0], 10)),
            (o = parseInt(t[1], 10)),
            t[0].match(/[+\-].*/) && (n += a),
            t[1].match(/[+\-].*/) && (o += a)),
          (!i || e.getTime() >= i.getTime()) && (!s || e.getTime() <= s.getTime()) && (!n || e.getFullYear() >= n) && (!o || e.getFullYear() <= o)
        );
      },
      _getFormatConfig: function (t) {
        var e = this._get(t, "shortYearCutoff");
        return {
          shortYearCutoff: (e = "string" != typeof e ? e : (new Date().getFullYear() % 100) + parseInt(e, 10)),
          dayNamesShort: this._get(t, "dayNamesShort"),
          dayNames: this._get(t, "dayNames"),
          monthNamesShort: this._get(t, "monthNamesShort"),
          monthNames: this._get(t, "monthNames"),
        };
      },
      _formatDate: function (t, e, i, s) {
        e || ((t.currentDay = t.selectedDay), (t.currentMonth = t.selectedMonth), (t.currentYear = t.selectedYear));
        e = e
          ? "object" == typeof e
            ? e
            : this._daylightSavingAdjust(new Date(s, i, e))
          : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
        return this.formatDate(this._get(t, "dateFormat"), e, this._getFormatConfig(t));
      },
    }),
    (V.fn.datepicker = function (t) {
      if (!this.length) return this;
      V.datepicker.initialized || (V(document).on("mousedown", V.datepicker._checkExternalClick), (V.datepicker.initialized = !0)),
        0 === V("#" + V.datepicker._mainDivId).length && V("body").append(V.datepicker.dpDiv);
      var e = Array.prototype.slice.call(arguments, 1);
      return ("string" == typeof t && ("isDisabled" === t || "getDate" === t || "widget" === t)) ||
        ("option" === t && 2 === arguments.length && "string" == typeof arguments[1])
        ? V.datepicker["_" + t + "Datepicker"].apply(V.datepicker, [this[0]].concat(e))
        : this.each(function () {
            "string" == typeof t
              ? V.datepicker["_" + t + "Datepicker"].apply(V.datepicker, [this].concat(e))
              : V.datepicker._attachDatepicker(this, t);
          });
    }),
    (V.datepicker = new st()),
    (V.datepicker.initialized = !1),
    (V.datepicker.uuid = new Date().getTime()),
    (V.datepicker.version = "1.13.2");
  V.datepicker, (V.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var rt = !1;
  V(document).on("mouseup", function () {
    rt = !1;
  });
  V.widget("ui.mouse", {
    version: "1.13.2",
    options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
    _mouseInit: function () {
      var e = this;
      this.element
        .on("mousedown." + this.widgetName, function (t) {
          return e._mouseDown(t);
        })
        .on("click." + this.widgetName, function (t) {
          if (!0 === V.data(t.target, e.widgetName + ".preventClickEvent"))
            return V.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1;
        }),
        (this.started = !1);
    },
    _mouseDestroy: function () {
      this.element.off("." + this.widgetName),
        this._mouseMoveDelegate &&
          this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function (t) {
      if (!rt) {
        (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
        var e = this,
          i = 1 === t.which,
          s = !("string" != typeof this.options.cancel || !t.target.nodeName) && V(t.target).closest(this.options.cancel).length;
        return i && !s && this._mouseCapture(t)
          ? ((this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                e.mouseDelayMet = !0;
              }, this.options.delay)),
            this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = !1 !== this._mouseStart(t)), !this._mouseStarted)
              ? (t.preventDefault(), !0)
              : (!0 === V.data(t.target, this.widgetName + ".preventClickEvent") && V.removeData(t.target, this.widgetName + ".preventClickEvent"),
                (this._mouseMoveDelegate = function (t) {
                  return e._mouseMove(t);
                }),
                (this._mouseUpDelegate = function (t) {
                  return e._mouseUp(t);
                }),
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                (rt = !0)))
          : !0;
      }
    },
    _mouseMove: function (t) {
      if (this._mouseMoved) {
        if (V.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
        if (!t.which)
          if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(t);
      }
      return (
        (t.which || t.button) && (this._mouseMoved = !0),
        this._mouseStarted
          ? (this._mouseDrag(t), t.preventDefault())
          : (this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t)), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
      );
    },
    _mouseUp: function (t) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
        this._mouseStarted &&
          ((this._mouseStarted = !1),
          t.target === this._mouseDownEvent.target && V.data(t.target, this.widgetName + ".preventClickEvent", !0),
          this._mouseStop(t)),
        this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
        (this.ignoreMissingWhich = !1),
        (rt = !1),
        t.preventDefault();
    },
    _mouseDistanceMet: function (t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet;
    },
    _mouseStart: function () {},
    _mouseDrag: function () {},
    _mouseStop: function () {},
    _mouseCapture: function () {
      return !0;
    },
  }),
    (V.ui.plugin = {
      add: function (t, e, i) {
        var s,
          n = V.ui[t].prototype;
        for (s in i) (n.plugins[s] = n.plugins[s] || []), n.plugins[s].push([e, i[s]]);
      },
      call: function (t, e, i, s) {
        var n,
          o = t.plugins[e];
        if (o && (s || (t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)))
          for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i);
      },
    }),
    (V.ui.safeBlur = function (t) {
      t && "body" !== t.nodeName.toLowerCase() && V(t).trigger("blur");
    });
  V.widget("ui.draggable", V.ui.mouse, {
    version: "1.13.2",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null,
    },
    _create: function () {
      "original" === this.options.helper && this._setPositionRelative(),
        this.options.addClasses && this._addClass("ui-draggable"),
        this._setHandleClassName(),
        this._mouseInit();
    },
    _setOption: function (t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function () {
      (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0) : (this._removeHandleClassName(), this._mouseDestroy());
    },
    _mouseCapture: function (t) {
      var e = this.options;
      return (
        !(this.helper || e.disabled || 0 < V(t.target).closest(".ui-resizable-handle").length) &&
        ((this.handle = this._getHandle(t)),
        !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
      );
    },
    _blockFrames: function (t) {
      this.iframeBlocks = this.document.find(t).map(function () {
        var t = V(this);
        return V("<div>")
          .css("position", "absolute")
          .appendTo(t.parent())
          .outerWidth(t.outerWidth())
          .outerHeight(t.outerHeight())
          .offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function (t) {
      var e = V.ui.safeActiveElement(this.document[0]);
      V(t.target).closest(e).length || V.ui.safeBlur(e);
    },
    _mouseStart: function (t) {
      var e = this.options;
      return (
        (this.helper = this._createHelper(t)),
        this._addClass(this.helper, "ui-draggable-dragging"),
        this._cacheHelperProportions(),
        V.ui.ddmanager && (V.ui.ddmanager.current = this),
        this._cacheMargins(),
        (this.cssPosition = this.helper.css("position")),
        (this.scrollParent = this.helper.scrollParent(!0)),
        (this.offsetParent = this.helper.offsetParent()),
        (this.hasFixedAncestor =
          0 <
          this.helper.parents().filter(function () {
            return "fixed" === V(this).css("position");
          }).length),
        (this.positionAbs = this.element.offset()),
        this._refreshOffsets(t),
        (this.originalPosition = this.position = this._generatePosition(t, !1)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
        this._setContainment(),
        !1 === this._trigger("start", t)
          ? (this._clear(), !1)
          : (this._cacheHelperProportions(),
            V.ui.ddmanager && !e.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            V.ui.ddmanager && V.ui.ddmanager.dragStart(this, t),
            !0)
      );
    },
    _refreshOffsets: function (t) {
      (this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset(),
      }),
        (this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top });
    },
    _mouseDrag: function (t, e) {
      if (
        (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
        (this.position = this._generatePosition(t, !0)),
        (this.positionAbs = this._convertPositionTo("absolute")),
        !e)
      ) {
        e = this._uiHash();
        if (!1 === this._trigger("drag", t, e)) return this._mouseUp(new V.Event("mouseup", t)), !1;
        this.position = e.position;
      }
      return (
        (this.helper[0].style.left = this.position.left + "px"),
        (this.helper[0].style.top = this.position.top + "px"),
        V.ui.ddmanager && V.ui.ddmanager.drag(this, t),
        !1
      );
    },
    _mouseStop: function (t) {
      var e = this,
        i = !1;
      return (
        V.ui.ddmanager && !this.options.dropBehaviour && (i = V.ui.ddmanager.drop(this, t)),
        this.dropped && ((i = this.dropped), (this.dropped = !1)),
        ("invalid" === this.options.revert && !i) ||
        ("valid" === this.options.revert && i) ||
        !0 === this.options.revert ||
        ("function" == typeof this.options.revert && this.options.revert.call(this.element, i))
          ? V(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
              !1 !== e._trigger("stop", t) && e._clear();
            })
          : !1 !== this._trigger("stop", t) && this._clear(),
        !1
      );
    },
    _mouseUp: function (t) {
      return (
        this._unblockFrames(),
        V.ui.ddmanager && V.ui.ddmanager.dragStop(this, t),
        this.handleElement.is(t.target) && this.element.trigger("focus"),
        V.ui.mouse.prototype._mouseUp.call(this, t)
      );
    },
    cancel: function () {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new V.Event("mouseup", { target: this.element[0] })) : this._clear(), this;
    },
    _getHandle: function (t) {
      return !this.options.handle || !!V(t.target).closest(this.element.find(this.options.handle)).length;
    },
    _setHandleClassName: function () {
      (this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element),
        this._addClass(this.handleElement, "ui-draggable-handle");
    },
    _removeHandleClassName: function () {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    },
    _createHelper: function (t) {
      var e = this.options,
        i = "function" == typeof e.helper,
        t = i ? V(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
      return (
        t.parents("body").length || t.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo),
        i && t[0] === this.element[0] && this._setPositionRelative(),
        t[0] === this.element[0] || /(fixed|absolute)/.test(t.css("position")) || t.css("position", "absolute"),
        t
      );
    },
    _setPositionRelative: function () {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function (t) {
      "string" == typeof t && (t = t.split(" ")),
        "left" in (t = Array.isArray(t) ? { left: +t[0], top: +t[1] || 0 } : t) && (this.offset.click.left = t.left + this.margins.left),
        "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
        "top" in t && (this.offset.click.top = t.top + this.margins.top),
        "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _isRootNode: function (t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0];
    },
    _getParentOffset: function () {
      var t = this.offsetParent.offset(),
        e = this.document[0];
      return (
        "absolute" === this.cssPosition &&
          this.scrollParent[0] !== e &&
          V.contains(this.scrollParent[0], this.offsetParent[0]) &&
          ((t.left += this.scrollParent.scrollLeft()), (t.top += this.scrollParent.scrollTop())),
        {
          top:
            (t = this._isRootNode(this.offsetParent[0]) ? { top: 0, left: 0 } : t).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
        }
      );
    },
    _getRelativeOffset: function () {
      if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
      var t = this.element.position(),
        e = this._isRootNode(this.scrollParent[0]);
      return {
        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()),
      };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    },
    _setContainment: function () {
      var t,
        e,
        i,
        s = this.options,
        n = this.document[0];
      (this.relativeContainer = null),
        s.containment
          ? "window" !== s.containment
            ? "document" !== s.containment
              ? s.containment.constructor !== Array
                ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode),
                  (i = (e = V(s.containment))[0]) &&
                    ((t = /(scroll|auto)/.test(e.css("overflow"))),
                    (this.containment = [
                      (parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0),
                      (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0),
                      (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) -
                        (parseInt(e.css("borderRightWidth"), 10) || 0) -
                        (parseInt(e.css("paddingRight"), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left -
                        this.margins.right,
                      (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) -
                        (parseInt(e.css("borderBottomWidth"), 10) || 0) -
                        (parseInt(e.css("paddingBottom"), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top -
                        this.margins.bottom,
                    ]),
                    (this.relativeContainer = e)))
                : (this.containment = s.containment)
              : (this.containment = [
                  0,
                  0,
                  V(n).width() - this.helperProportions.width - this.margins.left,
                  (V(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
                ])
            : (this.containment = [
                V(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                V(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                V(window).scrollLeft() + V(window).width() - this.helperProportions.width - this.margins.left,
                V(window).scrollTop() + (V(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
              ])
          : (this.containment = null);
    },
    _convertPositionTo: function (t, e) {
      e = e || this.position;
      var i = "absolute" === t ? 1 : -1,
        t = this._isRootNode(this.scrollParent[0]);
      return {
        top:
          e.top +
          this.offset.relative.top * i +
          this.offset.parent.top * i -
          ("fixed" === this.cssPosition ? -this.offset.scroll.top : t ? 0 : this.offset.scroll.top) * i,
        left:
          e.left +
          this.offset.relative.left * i +
          this.offset.parent.left * i -
          ("fixed" === this.cssPosition ? -this.offset.scroll.left : t ? 0 : this.offset.scroll.left) * i,
      };
    },
    _generatePosition: function (t, e) {
      var i,
        s = this.options,
        n = this._isRootNode(this.scrollParent[0]),
        o = t.pageX,
        a = t.pageY;
      return (
        (n && this.offset.scroll) || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }),
        e &&
          (this.containment &&
            ((i = this.relativeContainer
              ? ((i = this.relativeContainer.offset()),
                [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top])
              : this.containment),
            t.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (a = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (a = i[3] + this.offset.click.top)),
          s.grid &&
            ((t = s.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY),
            (a =
              !i || t - this.offset.click.top >= i[1] || t - this.offset.click.top > i[3]
                ? t
                : t - this.offset.click.top >= i[1]
                ? t - s.grid[1]
                : t + s.grid[1]),
            (t = s.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX),
            (o =
              !i || t - this.offset.click.left >= i[0] || t - this.offset.click.left > i[2]
                ? t
                : t - this.offset.click.left >= i[0]
                ? t - s.grid[0]
                : t + s.grid[0])),
          "y" === s.axis && (o = this.originalPageX),
          "x" === s.axis && (a = this.originalPageY)),
        {
          top:
            a -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top),
          left:
            o -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left),
        }
      );
    },
    _clear: function () {
      this._removeClass(this.helper, "ui-draggable-dragging"),
        this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
        (this.helper = null),
        (this.cancelHelperRemoval = !1),
        this.destroyOnClear && this.destroy();
    },
    _trigger: function (t, e, i) {
      return (
        (i = i || this._uiHash()),
        V.ui.plugin.call(this, t, [e, i, this], !0),
        /^(drag|start|stop)/.test(t) && ((this.positionAbs = this._convertPositionTo("absolute")), (i.offset = this.positionAbs)),
        V.Widget.prototype._trigger.call(this, t, e, i)
      );
    },
    plugins: {},
    _uiHash: function () {
      return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
    },
  }),
    V.ui.plugin.add("draggable", "connectToSortable", {
      start: function (e, t, i) {
        var s = V.extend({}, t, { item: i.element });
        (i.sortables = []),
          V(i.options.connectToSortable).each(function () {
            var t = V(this).sortable("instance");
            t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, s));
          });
      },
      stop: function (e, t, i) {
        var s = V.extend({}, t, { item: i.element });
        (i.cancelHelperRemoval = !1),
          V.each(i.sortables, function () {
            var t = this;
            t.isOver
              ? ((t.isOver = 0),
                (i.cancelHelperRemoval = !0),
                (t.cancelHelperRemoval = !1),
                (t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }),
                t._mouseStop(e),
                (t.options.helper = t.options._helper))
              : ((t.cancelHelperRemoval = !0), t._trigger("deactivate", e, s));
          });
      },
      drag: function (i, s, n) {
        V.each(n.sortables, function () {
          var t = !1,
            e = this;
          (e.positionAbs = n.positionAbs),
            (e.helperProportions = n.helperProportions),
            (e.offset.click = n.offset.click),
            e._intersectsWith(e.containerCache) &&
              ((t = !0),
              V.each(n.sortables, function () {
                return (
                  (this.positionAbs = n.positionAbs),
                  (this.helperProportions = n.helperProportions),
                  (this.offset.click = n.offset.click),
                  (t = this !== e && this._intersectsWith(this.containerCache) && V.contains(e.element[0], this.element[0]) ? !1 : t)
                );
              })),
            t
              ? (e.isOver ||
                  ((e.isOver = 1),
                  (n._parent = s.helper.parent()),
                  (e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0)),
                  (e.options._helper = e.options.helper),
                  (e.options.helper = function () {
                    return s.helper[0];
                  }),
                  (i.target = e.currentItem[0]),
                  e._mouseCapture(i, !0),
                  e._mouseStart(i, !0, !0),
                  (e.offset.click.top = n.offset.click.top),
                  (e.offset.click.left = n.offset.click.left),
                  (e.offset.parent.left -= n.offset.parent.left - e.offset.parent.left),
                  (e.offset.parent.top -= n.offset.parent.top - e.offset.parent.top),
                  n._trigger("toSortable", i),
                  (n.dropped = e.element),
                  V.each(n.sortables, function () {
                    this.refreshPositions();
                  }),
                  (n.currentItem = n.element),
                  (e.fromOutside = n)),
                e.currentItem && (e._mouseDrag(i), (s.position = e.position)))
              : e.isOver &&
                ((e.isOver = 0),
                (e.cancelHelperRemoval = !0),
                (e.options._revert = e.options.revert),
                (e.options.revert = !1),
                e._trigger("out", i, e._uiHash(e)),
                e._mouseStop(i, !0),
                (e.options.revert = e.options._revert),
                (e.options.helper = e.options._helper),
                e.placeholder && e.placeholder.remove(),
                s.helper.appendTo(n._parent),
                n._refreshOffsets(i),
                (s.position = n._generatePosition(i, !0)),
                n._trigger("fromSortable", i),
                (n.dropped = !1),
                V.each(n.sortables, function () {
                  this.refreshPositions();
                }));
        });
      },
    }),
    V.ui.plugin.add("draggable", "cursor", {
      start: function (t, e, i) {
        var s = V("body"),
          i = i.options;
        s.css("cursor") && (i._cursor = s.css("cursor")), s.css("cursor", i.cursor);
      },
      stop: function (t, e, i) {
        i = i.options;
        i._cursor && V("body").css("cursor", i._cursor);
      },
    }),
    V.ui.plugin.add("draggable", "opacity", {
      start: function (t, e, i) {
        (e = V(e.helper)), (i = i.options);
        e.css("opacity") && (i._opacity = e.css("opacity")), e.css("opacity", i.opacity);
      },
      stop: function (t, e, i) {
        i = i.options;
        i._opacity && V(e.helper).css("opacity", i._opacity);
      },
    }),
    V.ui.plugin.add("draggable", "scroll", {
      start: function (t, e, i) {
        i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
          i.scrollParentNotHidden[0] !== i.document[0] &&
            "HTML" !== i.scrollParentNotHidden[0].tagName &&
            (i.overflowOffset = i.scrollParentNotHidden.offset());
      },
      drag: function (t, e, i) {
        var s = i.options,
          n = !1,
          o = i.scrollParentNotHidden[0],
          a = i.document[0];
        o !== a && "HTML" !== o.tagName
          ? ((s.axis && "x" === s.axis) ||
              (i.overflowOffset.top + o.offsetHeight - t.pageY < s.scrollSensitivity
                ? (o.scrollTop = n = o.scrollTop + s.scrollSpeed)
                : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (o.scrollTop = n = o.scrollTop - s.scrollSpeed)),
            (s.axis && "y" === s.axis) ||
              (i.overflowOffset.left + o.offsetWidth - t.pageX < s.scrollSensitivity
                ? (o.scrollLeft = n = o.scrollLeft + s.scrollSpeed)
                : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed)))
          : ((s.axis && "x" === s.axis) ||
              (t.pageY - V(a).scrollTop() < s.scrollSensitivity
                ? (n = V(a).scrollTop(V(a).scrollTop() - s.scrollSpeed))
                : V(window).height() - (t.pageY - V(a).scrollTop()) < s.scrollSensitivity && (n = V(a).scrollTop(V(a).scrollTop() + s.scrollSpeed))),
            (s.axis && "y" === s.axis) ||
              (t.pageX - V(a).scrollLeft() < s.scrollSensitivity
                ? (n = V(a).scrollLeft(V(a).scrollLeft() - s.scrollSpeed))
                : V(window).width() - (t.pageX - V(a).scrollLeft()) < s.scrollSensitivity &&
                  (n = V(a).scrollLeft(V(a).scrollLeft() + s.scrollSpeed)))),
          !1 !== n && V.ui.ddmanager && !s.dropBehaviour && V.ui.ddmanager.prepareOffsets(i, t);
      },
    }),
    V.ui.plugin.add("draggable", "snap", {
      start: function (t, e, i) {
        var s = i.options;
        (i.snapElements = []),
          V(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
            var t = V(this),
              e = t.offset();
            this !== i.element[0] && i.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: e.top, left: e.left });
          });
      },
      drag: function (t, e, i) {
        for (
          var s,
            n,
            o,
            a,
            r,
            l,
            h,
            c,
            u,
            d = i.options,
            p = d.snapTolerance,
            f = e.offset.left,
            g = f + i.helperProportions.width,
            m = e.offset.top,
            _ = m + i.helperProportions.height,
            v = i.snapElements.length - 1;
          0 <= v;
          v--
        )
          (l = (r = i.snapElements[v].left - i.margins.left) + i.snapElements[v].width),
            (c = (h = i.snapElements[v].top - i.margins.top) + i.snapElements[v].height),
            g < r - p || l + p < f || _ < h - p || c + p < m || !V.contains(i.snapElements[v].item.ownerDocument, i.snapElements[v].item)
              ? (i.snapElements[v].snapping &&
                  i.options.snap.release &&
                  i.options.snap.release.call(i.element, t, V.extend(i._uiHash(), { snapItem: i.snapElements[v].item })),
                (i.snapElements[v].snapping = !1))
              : ("inner" !== d.snapMode &&
                  ((s = Math.abs(h - _) <= p),
                  (n = Math.abs(c - m) <= p),
                  (o = Math.abs(r - g) <= p),
                  (a = Math.abs(l - f) <= p),
                  s && (e.position.top = i._convertPositionTo("relative", { top: h - i.helperProportions.height, left: 0 }).top),
                  n && (e.position.top = i._convertPositionTo("relative", { top: c, left: 0 }).top),
                  o && (e.position.left = i._convertPositionTo("relative", { top: 0, left: r - i.helperProportions.width }).left),
                  a && (e.position.left = i._convertPositionTo("relative", { top: 0, left: l }).left)),
                (u = s || n || o || a),
                "outer" !== d.snapMode &&
                  ((s = Math.abs(h - m) <= p),
                  (n = Math.abs(c - _) <= p),
                  (o = Math.abs(r - f) <= p),
                  (a = Math.abs(l - g) <= p),
                  s && (e.position.top = i._convertPositionTo("relative", { top: h, left: 0 }).top),
                  n && (e.position.top = i._convertPositionTo("relative", { top: c - i.helperProportions.height, left: 0 }).top),
                  o && (e.position.left = i._convertPositionTo("relative", { top: 0, left: r }).left),
                  a && (e.position.left = i._convertPositionTo("relative", { top: 0, left: l - i.helperProportions.width }).left)),
                !i.snapElements[v].snapping &&
                  (s || n || o || a || u) &&
                  i.options.snap.snap &&
                  i.options.snap.snap.call(i.element, t, V.extend(i._uiHash(), { snapItem: i.snapElements[v].item })),
                (i.snapElements[v].snapping = s || n || o || a || u));
      },
    }),
    V.ui.plugin.add("draggable", "stack", {
      start: function (t, e, i) {
        var s,
          i = i.options,
          i = V.makeArray(V(i.stack)).sort(function (t, e) {
            return (parseInt(V(t).css("zIndex"), 10) || 0) - (parseInt(V(e).css("zIndex"), 10) || 0);
          });
        i.length &&
          ((s = parseInt(V(i[0]).css("zIndex"), 10) || 0),
          V(i).each(function (t) {
            V(this).css("zIndex", s + t);
          }),
          this.css("zIndex", s + i.length));
      },
    }),
    V.ui.plugin.add("draggable", "zIndex", {
      start: function (t, e, i) {
        (e = V(e.helper)), (i = i.options);
        e.css("zIndex") && (i._zIndex = e.css("zIndex")), e.css("zIndex", i.zIndex);
      },
      stop: function (t, e, i) {
        i = i.options;
        i._zIndex && V(e.helper).css("zIndex", i._zIndex);
      },
    });
  V.ui.draggable;
  V.widget("ui.resizable", V.ui.mouse, {
    version: "1.13.2",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null,
    },
    _num: function (t) {
      return parseFloat(t) || 0;
    },
    _isNumber: function (t) {
      return !isNaN(parseFloat(t));
    },
    _hasScroll: function (t, e) {
      if ("hidden" === V(t).css("overflow")) return !1;
      var i = e && "left" === e ? "scrollLeft" : "scrollTop",
        e = !1;
      if (0 < t[i]) return !0;
      try {
        (t[i] = 1), (e = 0 < t[i]), (t[i] = 0);
      } catch (t) {}
      return e;
    },
    _create: function () {
      var t,
        e = this.options,
        i = this;
      this._addClass("ui-resizable"),
        V.extend(this, {
          _aspectRatio: !!e.aspectRatio,
          aspectRatio: e.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null,
        }),
        this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) &&
          (this.element.wrap(
            V("<div class='ui-wrapper'></div>").css({
              overflow: "hidden",
              position: this.element.css("position"),
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              top: this.element.css("top"),
              left: this.element.css("left"),
            })
          ),
          (this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"))),
          (this.elementIsWrapper = !0),
          (t = {
            marginTop: this.originalElement.css("marginTop"),
            marginRight: this.originalElement.css("marginRight"),
            marginBottom: this.originalElement.css("marginBottom"),
            marginLeft: this.originalElement.css("marginLeft"),
          }),
          this.element.css(t),
          this.originalElement.css("margin", 0),
          (this.originalResizeStyle = this.originalElement.css("resize")),
          this.originalElement.css("resize", "none"),
          this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })),
          this.originalElement.css(t),
          this._proportionallyResize()),
        this._setupHandles(),
        e.autoHide &&
          V(this.element)
            .on("mouseenter", function () {
              e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show());
            })
            .on("mouseleave", function () {
              e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide());
            }),
        this._mouseInit();
    },
    _destroy: function () {
      this._mouseDestroy(), this._addedHandles.remove();
      function t(t) {
        V(t).removeData("resizable").removeData("ui-resizable").off(".resizable");
      }
      var e;
      return (
        this.elementIsWrapper &&
          (t(this.element),
          (e = this.element),
          this.originalElement
            .css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") })
            .insertAfter(e),
          e.remove()),
        this.originalElement.css("resize", this.originalResizeStyle),
        t(this.originalElement),
        this
      );
    },
    _setOption: function (t, e) {
      switch ((this._super(t, e), t)) {
        case "handles":
          this._removeHandles(), this._setupHandles();
          break;
        case "aspectRatio":
          this._aspectRatio = !!e;
      }
    },
    _setupHandles: function () {
      var t,
        e,
        i,
        s,
        n,
        o = this.options,
        a = this;
      if (
        ((this.handles =
          o.handles ||
          (V(".ui-resizable-handle", this.element).length
            ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw",
              }
            : "e,s,se")),
        (this._handles = V()),
        (this._addedHandles = V()),
        this.handles.constructor === String)
      )
        for (
          "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, e = 0;
          e < i.length;
          e++
        )
          (s = "ui-resizable-" + (t = String.prototype.trim.call(i[e]))),
            (n = V("<div>")),
            this._addClass(n, "ui-resizable-handle " + s),
            n.css({ zIndex: o.zIndex }),
            (this.handles[t] = ".ui-resizable-" + t),
            this.element.children(this.handles[t]).length || (this.element.append(n), (this._addedHandles = this._addedHandles.add(n)));
      (this._renderAxis = function (t) {
        var e, i, s;
        for (e in ((t = t || this.element), this.handles))
          this.handles[e].constructor === String
            ? (this.handles[e] = this.element.children(this.handles[e]).first().show())
            : (this.handles[e].jquery || this.handles[e].nodeType) &&
              ((this.handles[e] = V(this.handles[e])), this._on(this.handles[e], { mousedown: a._mouseDown })),
            this.elementIsWrapper &&
              this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) &&
              ((i = V(this.handles[e], this.element)),
              (s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth()),
              (i = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join("")),
              t.css(i, s),
              this._proportionallyResize()),
            (this._handles = this._handles.add(this.handles[e]));
      }),
        this._renderAxis(this.element),
        (this._handles = this._handles.add(this.element.find(".ui-resizable-handle"))),
        this._handles.disableSelection(),
        this._handles.on("mouseover", function () {
          a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), (a.axis = n && n[1] ? n[1] : "se"));
        }),
        o.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
    },
    _removeHandles: function () {
      this._addedHandles.remove();
    },
    _mouseCapture: function (t) {
      var e,
        i,
        s = !1;
      for (e in this.handles) ((i = V(this.handles[e])[0]) !== t.target && !V.contains(i, t.target)) || (s = !0);
      return !this.options.disabled && s;
    },
    _mouseStart: function (t) {
      var e,
        i,
        s = this.options,
        n = this.element;
      return (
        (this.resizing = !0),
        this._renderProxy(),
        (e = this._num(this.helper.css("left"))),
        (i = this._num(this.helper.css("top"))),
        s.containment && ((e += V(s.containment).scrollLeft() || 0), (i += V(s.containment).scrollTop() || 0)),
        (this.offset = this.helper.offset()),
        (this.position = { left: e, top: i }),
        (this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: n.width(), height: n.height() }),
        (this.originalSize = this._helper ? { width: n.outerWidth(), height: n.outerHeight() } : { width: n.width(), height: n.height() }),
        (this.sizeDiff = { width: n.outerWidth() - n.width(), height: n.outerHeight() - n.height() }),
        (this.originalPosition = { left: e, top: i }),
        (this.originalMousePosition = { left: t.pageX, top: t.pageY }),
        (this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1),
        (s = V(".ui-resizable-" + this.axis).css("cursor")),
        V("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
        this._addClass("ui-resizable-resizing"),
        this._propagate("start", t),
        !0
      );
    },
    _mouseDrag: function (t) {
      var e = this.originalMousePosition,
        i = this.axis,
        s = t.pageX - e.left || 0,
        e = t.pageY - e.top || 0,
        i = this._change[i];
      return (
        this._updatePrevProperties(),
        i &&
          ((e = i.apply(this, [t, s, e])),
          this._updateVirtualBoundaries(t.shiftKey),
          (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)),
          (e = this._respectSize(e, t)),
          this._updateCache(e),
          this._propagate("resize", t),
          (e = this._applyChanges()),
          !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
          V.isEmptyObject(e) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())),
        !1
      );
    },
    _mouseStop: function (t) {
      this.resizing = !1;
      var e,
        i,
        s,
        n = this.options,
        o = this;
      return (
        this._helper &&
          ((s =
            (e = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left")
              ? 0
              : o.sizeDiff.height),
          (i = e ? 0 : o.sizeDiff.width),
          (e = { width: o.helper.width() - i, height: o.helper.height() - s }),
          (i = parseFloat(o.element.css("left")) + (o.position.left - o.originalPosition.left) || null),
          (s = parseFloat(o.element.css("top")) + (o.position.top - o.originalPosition.top) || null),
          n.animate || this.element.css(V.extend(e, { top: s, left: i })),
          o.helper.height(o.size.height),
          o.helper.width(o.size.width),
          this._helper && !n.animate && this._proportionallyResize()),
        V("body").css("cursor", "auto"),
        this._removeClass("ui-resizable-resizing"),
        this._propagate("stop", t),
        this._helper && this.helper.remove(),
        !1
      );
    },
    _updatePrevProperties: function () {
      (this.prevPosition = { top: this.position.top, left: this.position.left }),
        (this.prevSize = { width: this.size.width, height: this.size.height });
    },
    _applyChanges: function () {
      var t = {};
      return (
        this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
        this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
        this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
        this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
        this.helper.css(t),
        t
      );
    },
    _updateVirtualBoundaries: function (t) {
      var e,
        i,
        s = this.options,
        n = {
          minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
          maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
          minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
          maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0,
        };
      (this._aspectRatio || t) &&
        ((e = n.minHeight * this.aspectRatio),
        (i = n.minWidth / this.aspectRatio),
        (s = n.maxHeight * this.aspectRatio),
        (t = n.maxWidth / this.aspectRatio),
        e > n.minWidth && (n.minWidth = e),
        i > n.minHeight && (n.minHeight = i),
        s < n.maxWidth && (n.maxWidth = s),
        t < n.maxHeight && (n.maxHeight = t)),
        (this._vBoundaries = n);
    },
    _updateCache: function (t) {
      (this.offset = this.helper.offset()),
        this._isNumber(t.left) && (this.position.left = t.left),
        this._isNumber(t.top) && (this.position.top = t.top),
        this._isNumber(t.height) && (this.size.height = t.height),
        this._isNumber(t.width) && (this.size.width = t.width);
    },
    _updateRatio: function (t) {
      var e = this.position,
        i = this.size,
        s = this.axis;
      return (
        this._isNumber(t.height) ? (t.width = t.height * this.aspectRatio) : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
        "sw" === s && ((t.left = e.left + (i.width - t.width)), (t.top = null)),
        "nw" === s && ((t.top = e.top + (i.height - t.height)), (t.left = e.left + (i.width - t.width))),
        t
      );
    },
    _respectSize: function (t) {
      var e = this._vBoundaries,
        i = this.axis,
        s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
        n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
        o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
        a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
        r = this.originalPosition.left + this.originalSize.width,
        l = this.originalPosition.top + this.originalSize.height,
        h = /sw|nw|w/.test(i),
        i = /nw|ne|n/.test(i);
      return (
        o && (t.width = e.minWidth),
        a && (t.height = e.minHeight),
        s && (t.width = e.maxWidth),
        n && (t.height = e.maxHeight),
        o && h && (t.left = r - e.minWidth),
        s && h && (t.left = r - e.maxWidth),
        a && i && (t.top = l - e.minHeight),
        n && i && (t.top = l - e.maxHeight),
        t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : (t.top = null),
        t
      );
    },
    _getPaddingPlusBorderDimensions: function (t) {
      for (
        var e = 0,
          i = [],
          s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")],
          n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")];
        e < 4;
        e++
      )
        (i[e] = parseFloat(s[e]) || 0), (i[e] += parseFloat(n[e]) || 0);
      return { height: i[0] + i[2], width: i[1] + i[3] };
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length)
        for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++)
          (t = this._proportionallyResizeElements[e]),
            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
            t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 });
    },
    _renderProxy: function () {
      var t = this.element,
        e = this.options;
      (this.elementOffset = t.offset()),
        this._helper
          ? ((this.helper = this.helper || V("<div></div>").css({ overflow: "hidden" })),
            this._addClass(this.helper, this._helper),
            this.helper.css({
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              position: "absolute",
              left: this.elementOffset.left + "px",
              top: this.elementOffset.top + "px",
              zIndex: ++e.zIndex,
            }),
            this.helper.appendTo("body").disableSelection())
          : (this.helper = this.element);
    },
    _change: {
      e: function (t, e) {
        return { width: this.originalSize.width + e };
      },
      w: function (t, e) {
        var i = this.originalSize;
        return { left: this.originalPosition.left + e, width: i.width - e };
      },
      n: function (t, e, i) {
        var s = this.originalSize;
        return { top: this.originalPosition.top + i, height: s.height - i };
      },
      s: function (t, e, i) {
        return { height: this.originalSize.height + i };
      },
      se: function (t, e, i) {
        return V.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]));
      },
      sw: function (t, e, i) {
        return V.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]));
      },
      ne: function (t, e, i) {
        return V.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]));
      },
      nw: function (t, e, i) {
        return V.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]));
      },
    },
    _propagate: function (t, e) {
      V.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition,
      };
    },
  }),
    V.ui.plugin.add("resizable", "animate", {
      stop: function (e) {
        var i = V(this).resizable("instance"),
          t = i.options,
          s = i._proportionallyResizeElements,
          n = s.length && /textarea/i.test(s[0].nodeName),
          o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
          a = n ? 0 : i.sizeDiff.width,
          n = { width: i.size.width - a, height: i.size.height - o },
          a = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
          o = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(V.extend(n, o && a ? { top: o, left: a } : {}), {
          duration: t.animateDuration,
          easing: t.animateEasing,
          step: function () {
            var t = {
              width: parseFloat(i.element.css("width")),
              height: parseFloat(i.element.css("height")),
              top: parseFloat(i.element.css("top")),
              left: parseFloat(i.element.css("left")),
            };
            s && s.length && V(s[0]).css({ width: t.width, height: t.height }), i._updateCache(t), i._propagate("resize", e);
          },
        });
      },
    }),
    V.ui.plugin.add("resizable", "containment", {
      start: function () {
        var i,
          s,
          n = V(this).resizable("instance"),
          t = n.options,
          e = n.element,
          o = t.containment,
          a = o instanceof V ? o.get(0) : /parent/.test(o) ? e.parent().get(0) : o;
        a &&
          ((n.containerElement = V(a)),
          /document/.test(o) || o === document
            ? ((n.containerOffset = { left: 0, top: 0 }),
              (n.containerPosition = { left: 0, top: 0 }),
              (n.parentData = {
                element: V(document),
                left: 0,
                top: 0,
                width: V(document).width(),
                height: V(document).height() || document.body.parentNode.scrollHeight,
              }))
            : ((i = V(a)),
              (s = []),
              V(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
                s[t] = n._num(i.css("padding" + e));
              }),
              (n.containerOffset = i.offset()),
              (n.containerPosition = i.position()),
              (n.containerSize = { height: i.innerHeight() - s[3], width: i.innerWidth() - s[1] }),
              (t = n.containerOffset),
              (e = n.containerSize.height),
              (o = n.containerSize.width),
              (o = n._hasScroll(a, "left") ? a.scrollWidth : o),
              (e = n._hasScroll(a) ? a.scrollHeight : e),
              (n.parentData = { element: a, left: t.left, top: t.top, width: o, height: e })));
      },
      resize: function (t) {
        var e = V(this).resizable("instance"),
          i = e.options,
          s = e.containerOffset,
          n = e.position,
          o = e._aspectRatio || t.shiftKey,
          a = { top: 0, left: 0 },
          r = e.containerElement,
          t = !0;
        r[0] !== document && /static/.test(r.css("position")) && (a = s),
          n.left < (e._helper ? s.left : 0) &&
            ((e.size.width = e.size.width + (e._helper ? e.position.left - s.left : e.position.left - a.left)),
            o && ((e.size.height = e.size.width / e.aspectRatio), (t = !1)),
            (e.position.left = i.helper ? s.left : 0)),
          n.top < (e._helper ? s.top : 0) &&
            ((e.size.height = e.size.height + (e._helper ? e.position.top - s.top : e.position.top)),
            o && ((e.size.width = e.size.height * e.aspectRatio), (t = !1)),
            (e.position.top = e._helper ? s.top : 0)),
          (i = e.containerElement.get(0) === e.element.parent().get(0)),
          (n = /relative|absolute/.test(e.containerElement.css("position"))),
          i && n
            ? ((e.offset.left = e.parentData.left + e.position.left), (e.offset.top = e.parentData.top + e.position.top))
            : ((e.offset.left = e.element.offset().left), (e.offset.top = e.element.offset().top)),
          (n = Math.abs(e.sizeDiff.width + (e._helper ? e.offset.left - a.left : e.offset.left - s.left))),
          (s = Math.abs(e.sizeDiff.height + (e._helper ? e.offset.top - a.top : e.offset.top - s.top))),
          n + e.size.width >= e.parentData.width &&
            ((e.size.width = e.parentData.width - n), o && ((e.size.height = e.size.width / e.aspectRatio), (t = !1))),
          s + e.size.height >= e.parentData.height &&
            ((e.size.height = e.parentData.height - s), o && ((e.size.width = e.size.height * e.aspectRatio), (t = !1))),
          t ||
            ((e.position.left = e.prevPosition.left),
            (e.position.top = e.prevPosition.top),
            (e.size.width = e.prevSize.width),
            (e.size.height = e.prevSize.height));
      },
      stop: function () {
        var t = V(this).resizable("instance"),
          e = t.options,
          i = t.containerOffset,
          s = t.containerPosition,
          n = t.containerElement,
          o = V(t.helper),
          a = o.offset(),
          r = o.outerWidth() - t.sizeDiff.width,
          o = o.outerHeight() - t.sizeDiff.height;
        t._helper && !e.animate && /relative/.test(n.css("position")) && V(this).css({ left: a.left - s.left - i.left, width: r, height: o }),
          t._helper && !e.animate && /static/.test(n.css("position")) && V(this).css({ left: a.left - s.left - i.left, width: r, height: o });
      },
    }),
    V.ui.plugin.add("resizable", "alsoResize", {
      start: function () {
        var t = V(this).resizable("instance").options;
        V(t.alsoResize).each(function () {
          var t = V(this);
          t.data("ui-resizable-alsoresize", {
            width: parseFloat(t.width()),
            height: parseFloat(t.height()),
            left: parseFloat(t.css("left")),
            top: parseFloat(t.css("top")),
          });
        });
      },
      resize: function (t, i) {
        var e = V(this).resizable("instance"),
          s = e.options,
          n = e.originalSize,
          o = e.originalPosition,
          a = {
            height: e.size.height - n.height || 0,
            width: e.size.width - n.width || 0,
            top: e.position.top - o.top || 0,
            left: e.position.left - o.left || 0,
          };
        V(s.alsoResize).each(function () {
          var t = V(this),
            s = V(this).data("ui-resizable-alsoresize"),
            n = {},
            e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
          V.each(e, function (t, e) {
            var i = (s[e] || 0) + (a[e] || 0);
            i && 0 <= i && (n[e] = i || null);
          }),
            t.css(n);
        });
      },
      stop: function () {
        V(this).removeData("ui-resizable-alsoresize");
      },
    }),
    V.ui.plugin.add("resizable", "ghost", {
      start: function () {
        var t = V(this).resizable("instance"),
          e = t.size;
        (t.ghost = t.originalElement.clone()),
          t.ghost.css({ opacity: 0.25, display: "block", position: "relative", height: e.height, width: e.width, margin: 0, left: 0, top: 0 }),
          t._addClass(t.ghost, "ui-resizable-ghost"),
          !1 !== V.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost),
          t.ghost.appendTo(t.helper);
      },
      resize: function () {
        var t = V(this).resizable("instance");
        t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width });
      },
      stop: function () {
        var t = V(this).resizable("instance");
        t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
      },
    }),
    V.ui.plugin.add("resizable", "grid", {
      resize: function () {
        var t,
          e = V(this).resizable("instance"),
          i = e.options,
          s = e.size,
          n = e.originalSize,
          o = e.originalPosition,
          a = e.axis,
          r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
          l = r[0] || 1,
          h = r[1] || 1,
          c = Math.round((s.width - n.width) / l) * l,
          u = Math.round((s.height - n.height) / h) * h,
          d = n.width + c,
          p = n.height + u,
          f = i.maxWidth && i.maxWidth < d,
          g = i.maxHeight && i.maxHeight < p,
          m = i.minWidth && i.minWidth > d,
          s = i.minHeight && i.minHeight > p;
        (i.grid = r),
          m && (d += l),
          s && (p += h),
          f && (d -= l),
          g && (p -= h),
          /^(se|s|e)$/.test(a)
            ? ((e.size.width = d), (e.size.height = p))
            : /^(ne)$/.test(a)
            ? ((e.size.width = d), (e.size.height = p), (e.position.top = o.top - u))
            : /^(sw)$/.test(a)
            ? ((e.size.width = d), (e.size.height = p), (e.position.left = o.left - c))
            : ((p - h <= 0 || d - l <= 0) && (t = e._getPaddingPlusBorderDimensions(this)),
              0 < p - h
                ? ((e.size.height = p), (e.position.top = o.top - u))
                : ((p = h - t.height), (e.size.height = p), (e.position.top = o.top + n.height - p)),
              0 < d - l
                ? ((e.size.width = d), (e.position.left = o.left - c))
                : ((d = l - t.width), (e.size.width = d), (e.position.left = o.left + n.width - d)));
      },
    });
  V.ui.resizable;
  V.widget("ui.dialog", {
    version: "1.13.2",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function (t) {
          var e = V(this).css(t).offset().top;
          e < 0 && V(this).css("top", t.top - e);
        },
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null,
    },
    sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
    resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
    _create: function () {
      (this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height,
      }),
        (this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }),
        (this.originalTitle = this.element.attr("title")),
        null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
        this.options.disabled && (this.options.disabled = !1),
        this._createWrapper(),
        this.element.show().removeAttr("title").appendTo(this.uiDialog),
        this._addClass("ui-dialog-content", "ui-widget-content"),
        this._createTitlebar(),
        this._createButtonPane(),
        this.options.draggable && V.fn.draggable && this._makeDraggable(),
        this.options.resizable && V.fn.resizable && this._makeResizable(),
        (this._isOpen = !1),
        this._trackFocus();
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t.jquery || t.nodeType) ? V(t) : this.document.find(t || "body").eq(0);
    },
    _destroy: function () {
      var t,
        e = this.originalPosition;
      this._untrackInstance(),
        this._destroyOverlay(),
        this.element.removeUniqueId().css(this.originalCss).detach(),
        this.uiDialog.remove(),
        this.originalTitle && this.element.attr("title", this.originalTitle),
        (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
    },
    widget: function () {
      return this.uiDialog;
    },
    disable: V.noop,
    enable: V.noop,
    close: function (t) {
      var e = this;
      this._isOpen &&
        !1 !== this._trigger("beforeClose", t) &&
        ((this._isOpen = !1),
        (this._focusedElement = null),
        this._destroyOverlay(),
        this._untrackInstance(),
        this.opener.filter(":focusable").trigger("focus").length || V.ui.safeBlur(V.ui.safeActiveElement(this.document[0])),
        this._hide(this.uiDialog, this.options.hide, function () {
          e._trigger("close", t);
        }));
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function () {
      this._moveToTop();
    },
    _moveToTop: function (t, e) {
      var i = !1,
        s = this.uiDialog
          .siblings(".ui-front:visible")
          .map(function () {
            return +V(this).css("z-index");
          })
          .get(),
        s = Math.max.apply(null, s);
      return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), (i = !0)), i && !e && this._trigger("focus", t), i;
    },
    open: function () {
      var t = this;
      this._isOpen
        ? this._moveToTop() && this._focusTabbable()
        : ((this._isOpen = !0),
          (this.opener = V(V.ui.safeActiveElement(this.document[0]))),
          this._size(),
          this._position(),
          this._createOverlay(),
          this._moveToTop(null, !0),
          this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
          this._show(this.uiDialog, this.options.show, function () {
            t._focusTabbable(), t._trigger("focus");
          }),
          this._makeFocusTarget(),
          this._trigger("open"));
    },
    _focusTabbable: function () {
      var t = this._focusedElement;
      (t = !(t = !(t = !(t = !(t = t || this.element.find("[autofocus]")).length ? this.element.find(":tabbable") : t).length
        ? this.uiDialogButtonPane.find(":tabbable")
        : t).length
        ? this.uiDialogTitlebarClose.filter(":tabbable")
        : t).length
        ? this.uiDialog
        : t)
        .eq(0)
        .trigger("focus");
    },
    _restoreTabbableFocus: function () {
      var t = V.ui.safeActiveElement(this.document[0]);
      this.uiDialog[0] === t || V.contains(this.uiDialog[0], t) || this._focusTabbable();
    },
    _keepFocus: function (t) {
      t.preventDefault(), this._restoreTabbableFocus(), this._delay(this._restoreTabbableFocus);
    },
    _createWrapper: function () {
      (this.uiDialog = V("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo())),
        this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
        this._on(this.uiDialog, {
          keydown: function (t) {
            if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === V.ui.keyCode.ESCAPE)
              return t.preventDefault(), void this.close(t);
            var e, i, s;
            t.keyCode !== V.ui.keyCode.TAB ||
              t.isDefaultPrevented() ||
              ((e = this.uiDialog.find(":tabbable")),
              (i = e.first()),
              (s = e.last()),
              (t.target !== s[0] && t.target !== this.uiDialog[0]) || t.shiftKey
                ? (t.target !== i[0] && t.target !== this.uiDialog[0]) ||
                  !t.shiftKey ||
                  (this._delay(function () {
                    s.trigger("focus");
                  }),
                  t.preventDefault())
                : (this._delay(function () {
                    i.trigger("focus");
                  }),
                  t.preventDefault()));
          },
          mousedown: function (t) {
            this._moveToTop(t) && this._focusTabbable();
          },
        }),
        this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
    },
    _createTitlebar: function () {
      var t;
      (this.uiDialogTitlebar = V("<div>")),
        this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
        this._on(this.uiDialogTitlebar, {
          mousedown: function (t) {
            V(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
          },
        }),
        (this.uiDialogTitlebarClose = V("<button type='button'></button>")
          .button({ label: V("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 })
          .appendTo(this.uiDialogTitlebar)),
        this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
        this._on(this.uiDialogTitlebarClose, {
          click: function (t) {
            t.preventDefault(), this.close(t);
          },
        }),
        (t = V("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
        this._addClass(t, "ui-dialog-title"),
        this._title(t),
        this.uiDialogTitlebar.prependTo(this.uiDialog),
        this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
    },
    _title: function (t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;");
    },
    _createButtonPane: function () {
      (this.uiDialogButtonPane = V("<div>")),
        this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
        (this.uiButtonSet = V("<div>").appendTo(this.uiDialogButtonPane)),
        this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
        this._createButtons();
    },
    _createButtons: function () {
      var s = this,
        t = this.options.buttons;
      this.uiDialogButtonPane.remove(),
        this.uiButtonSet.empty(),
        V.isEmptyObject(t) || (Array.isArray(t) && !t.length)
          ? this._removeClass(this.uiDialog, "ui-dialog-buttons")
          : (V.each(t, function (t, e) {
              var i;
              (e = V.extend({ type: "button" }, (e = "function" == typeof e ? { click: e, text: t } : e))),
                (i = e.click),
                (t = { icon: e.icon, iconPosition: e.iconPosition, showLabel: e.showLabel, icons: e.icons, text: e.text }),
                delete e.click,
                delete e.icon,
                delete e.iconPosition,
                delete e.showLabel,
                delete e.icons,
                "boolean" == typeof e.text && delete e.text,
                V("<button></button>", e)
                  .button(t)
                  .appendTo(s.uiButtonSet)
                  .on("click", function () {
                    i.apply(s.element[0], arguments);
                  });
            }),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog));
    },
    _makeDraggable: function () {
      var n = this,
        o = this.options;
      function a(t) {
        return { position: t.position, offset: t.offset };
      }
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function (t, e) {
          n._addClass(V(this), "ui-dialog-dragging"), n._blockFrames(), n._trigger("dragStart", t, a(e));
        },
        drag: function (t, e) {
          n._trigger("drag", t, a(e));
        },
        stop: function (t, e) {
          var i = e.offset.left - n.document.scrollLeft(),
            s = e.offset.top - n.document.scrollTop();
          (o.position = { my: "left top", at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= s ? "+" : "") + s, of: n.window }),
            n._removeClass(V(this), "ui-dialog-dragging"),
            n._unblockFrames(),
            n._trigger("dragStop", t, a(e));
        },
      });
    },
    _makeResizable: function () {
      var n = this,
        o = this.options,
        t = o.resizable,
        e = this.uiDialog.css("position"),
        t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
      function a(t) {
        return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size };
      }
      this.uiDialog
        .resizable({
          cancel: ".ui-dialog-content",
          containment: "document",
          alsoResize: this.element,
          maxWidth: o.maxWidth,
          maxHeight: o.maxHeight,
          minWidth: o.minWidth,
          minHeight: this._minHeight(),
          handles: t,
          start: function (t, e) {
            n._addClass(V(this), "ui-dialog-resizing"), n._blockFrames(), n._trigger("resizeStart", t, a(e));
          },
          resize: function (t, e) {
            n._trigger("resize", t, a(e));
          },
          stop: function (t, e) {
            var i = n.uiDialog.offset(),
              s = i.left - n.document.scrollLeft(),
              i = i.top - n.document.scrollTop();
            (o.height = n.uiDialog.height()),
              (o.width = n.uiDialog.width()),
              (o.position = { my: "left top", at: "left" + (0 <= s ? "+" : "") + s + " top" + (0 <= i ? "+" : "") + i, of: n.window }),
              n._removeClass(V(this), "ui-dialog-resizing"),
              n._unblockFrames(),
              n._trigger("resizeStop", t, a(e));
          },
        })
        .css("position", e);
    },
    _trackFocus: function () {
      this._on(this.widget(), {
        focusin: function (t) {
          this._makeFocusTarget(), (this._focusedElement = V(t.target));
        },
      });
    },
    _makeFocusTarget: function () {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    },
    _untrackInstance: function () {
      var t = this._trackingInstances(),
        e = V.inArray(this, t);
      -1 !== e && t.splice(e, 1);
    },
    _trackingInstances: function () {
      var t = this.document.data("ui-dialog-instances");
      return t || this.document.data("ui-dialog-instances", (t = [])), t;
    },
    _minHeight: function () {
      var t = this.options;
      return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
    },
    _position: function () {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
    },
    _setOptions: function (t) {
      var i = this,
        s = !1,
        n = {};
      V.each(t, function (t, e) {
        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
      }),
        s && (this._size(), this._position()),
        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
    },
    _setOption: function (t, e) {
      var i,
        s = this.uiDialog;
      "disabled" !== t &&
        (this._super(t, e),
        "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
        "buttons" === t && this._createButtons(),
        "closeText" === t &&
          this.uiDialogTitlebarClose.button({
            label: V("<a>")
              .text("" + this.options.closeText)
              .html(),
          }),
        "draggable" === t && ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"), !i && e && this._makeDraggable()),
        "position" === t && this._position(),
        "resizable" === t &&
          ((i = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"),
          i && "string" == typeof e && s.resizable("option", "handles", e),
          i || !1 === e || this._makeResizable()),
        "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    },
    _size: function () {
      var t,
        e,
        i,
        s = this.options;
      this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
        s.minWidth > s.width && (s.width = s.minWidth),
        (t = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight()),
        (e = Math.max(0, s.minHeight - t)),
        (i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none"),
        "auto" === s.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - t)),
        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
    _blockFrames: function () {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var t = V(this);
        return V("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function (t) {
      return !!V(t.target).closest(".ui-dialog").length || !!V(t.target).closest(".ui-datepicker").length;
    },
    _createOverlay: function () {
      var i, s;
      this.options.modal &&
        ((i = V.fn.jquery.substring(0, 4)),
        (s = !0),
        this._delay(function () {
          s = !1;
        }),
        this.document.data("ui-dialog-overlays") ||
          this.document.on(
            "focusin.ui-dialog",
            function (t) {
              var e;
              s ||
                (e = this._trackingInstances()[0])._allowInteraction(t) ||
                (t.preventDefault(), e._focusTabbable(), ("3.4." !== i && "3.5." !== i) || e._delay(e._restoreTabbableFocus));
            }.bind(this)
          ),
        (this.overlay = V("<div>").appendTo(this._appendTo())),
        this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
        this._on(this.overlay, { mousedown: "_keepFocus" }),
        this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1));
    },
    _destroyOverlay: function () {
      var t;
      this.options.modal &&
        this.overlay &&
        ((t = this.document.data("ui-dialog-overlays") - 1)
          ? this.document.data("ui-dialog-overlays", t)
          : (this.document.off("focusin.ui-dialog"), this.document.removeData("ui-dialog-overlays")),
        this.overlay.remove(),
        (this.overlay = null));
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.dialog", V.ui.dialog, {
        options: { dialogClass: "" },
        _createWrapper: function () {
          this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function (t, e) {
          "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments);
        },
      });
  V.ui.dialog;
  function lt(t, e, i) {
    return e <= t && t < e + i;
  }
  V.widget("ui.droppable", {
    version: "1.13.2",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      addClasses: !0,
      greedy: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null,
    },
    _create: function () {
      var t,
        e = this.options,
        i = e.accept;
      (this.isover = !1),
        (this.isout = !0),
        (this.accept =
          "function" == typeof i
            ? i
            : function (t) {
                return t.is(i);
              }),
        (this.proportions = function () {
          if (!arguments.length) return (t = t || { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight });
          t = arguments[0];
        }),
        this._addToManager(e.scope),
        e.addClasses && this._addClass("ui-droppable");
    },
    _addToManager: function (t) {
      (V.ui.ddmanager.droppables[t] = V.ui.ddmanager.droppables[t] || []), V.ui.ddmanager.droppables[t].push(this);
    },
    _splice: function (t) {
      for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
    },
    _destroy: function () {
      var t = V.ui.ddmanager.droppables[this.options.scope];
      this._splice(t);
    },
    _setOption: function (t, e) {
      var i;
      "accept" === t
        ? (this.accept =
            "function" == typeof e
              ? e
              : function (t) {
                  return t.is(e);
                })
        : "scope" === t && ((i = V.ui.ddmanager.droppables[this.options.scope]), this._splice(i), this._addToManager(e)),
        this._super(t, e);
    },
    _activate: function (t) {
      var e = V.ui.ddmanager.current;
      this._addActiveClass(), e && this._trigger("activate", t, this.ui(e));
    },
    _deactivate: function (t) {
      var e = V.ui.ddmanager.current;
      this._removeActiveClass(), e && this._trigger("deactivate", t, this.ui(e));
    },
    _over: function (t) {
      var e = V.ui.ddmanager.current;
      e &&
        (e.currentItem || e.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], e.currentItem || e.element) &&
        (this._addHoverClass(), this._trigger("over", t, this.ui(e)));
    },
    _out: function (t) {
      var e = V.ui.ddmanager.current;
      e &&
        (e.currentItem || e.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], e.currentItem || e.element) &&
        (this._removeHoverClass(), this._trigger("out", t, this.ui(e)));
    },
    _drop: function (e, t) {
      var i = t || V.ui.ddmanager.current,
        s = !1;
      return (
        !(!i || (i.currentItem || i.element)[0] === this.element[0]) &&
        (this.element
          .find(":data(ui-droppable)")
          .not(".ui-draggable-dragging")
          .each(function () {
            var t = V(this).droppable("instance");
            if (
              t.options.greedy &&
              !t.options.disabled &&
              t.options.scope === i.options.scope &&
              t.accept.call(t.element[0], i.currentItem || i.element) &&
              V.ui.intersect(i, V.extend(t, { offset: t.element.offset() }), t.options.tolerance, e)
            )
              return !(s = !0);
          }),
        !s &&
          !!this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(i)), this.element))
      );
    },
    ui: function (t) {
      return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs };
    },
    _addHoverClass: function () {
      this._addClass("ui-droppable-hover");
    },
    _removeHoverClass: function () {
      this._removeClass("ui-droppable-hover");
    },
    _addActiveClass: function () {
      this._addClass("ui-droppable-active");
    },
    _removeActiveClass: function () {
      this._removeClass("ui-droppable-active");
    },
  }),
    (V.ui.intersect = function (t, e, i, s) {
      if (!e.offset) return !1;
      var n = (t.positionAbs || t.position.absolute).left + t.margins.left,
        o = (t.positionAbs || t.position.absolute).top + t.margins.top,
        a = n + t.helperProportions.width,
        r = o + t.helperProportions.height,
        l = e.offset.left,
        h = e.offset.top,
        c = l + e.proportions().width,
        u = h + e.proportions().height;
      switch (i) {
        case "fit":
          return l <= n && a <= c && h <= o && r <= u;
        case "intersect":
          return (
            l < n + t.helperProportions.width / 2 &&
            a - t.helperProportions.width / 2 < c &&
            h < o + t.helperProportions.height / 2 &&
            r - t.helperProportions.height / 2 < u
          );
        case "pointer":
          return lt(s.pageY, h, e.proportions().height) && lt(s.pageX, l, e.proportions().width);
        case "touch":
          return ((h <= o && o <= u) || (h <= r && r <= u) || (o < h && u < r)) && ((l <= n && n <= c) || (l <= a && a <= c) || (n < l && c < a));
        default:
          return !1;
      }
    }),
    !(V.ui.ddmanager = {
      current: null,
      droppables: { default: [] },
      prepareOffsets: function (t, e) {
        var i,
          s,
          n = V.ui.ddmanager.droppables[t.options.scope] || [],
          o = e ? e.type : null,
          a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
        t: for (i = 0; i < n.length; i++)
          if (!(n[i].options.disabled || (t && !n[i].accept.call(n[i].element[0], t.currentItem || t.element)))) {
            for (s = 0; s < a.length; s++)
              if (a[s] === n[i].element[0]) {
                n[i].proportions().height = 0;
                continue t;
              }
            (n[i].visible = "none" !== n[i].element.css("display")),
              n[i].visible &&
                ("mousedown" === o && n[i]._activate.call(n[i], e),
                (n[i].offset = n[i].element.offset()),
                n[i].proportions({ width: n[i].element[0].offsetWidth, height: n[i].element[0].offsetHeight }));
          }
      },
      drop: function (t, e) {
        var i = !1;
        return (
          V.each((V.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
            this.options &&
              (!this.options.disabled && this.visible && V.ui.intersect(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i),
              !this.options.disabled &&
                this.visible &&
                this.accept.call(this.element[0], t.currentItem || t.element) &&
                ((this.isout = !0), (this.isover = !1), this._deactivate.call(this, e)));
          }),
          i
        );
      },
      dragStart: function (t, e) {
        t.element.parentsUntil("body").on("scroll.droppable", function () {
          t.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t, e);
        });
      },
      drag: function (n, o) {
        n.options.refreshPositions && V.ui.ddmanager.prepareOffsets(n, o),
          V.each(V.ui.ddmanager.droppables[n.options.scope] || [], function () {
            var t, e, i, s;
            this.options.disabled ||
              this.greedyChild ||
              !this.visible ||
              ((s = !(i = V.ui.intersect(n, this, this.options.tolerance, o)) && this.isover ? "isout" : i && !this.isover ? "isover" : null) &&
                (this.options.greedy &&
                  ((e = this.options.scope),
                  (i = this.element.parents(":data(ui-droppable)").filter(function () {
                    return V(this).droppable("instance").options.scope === e;
                  })).length && ((t = V(i[0]).droppable("instance")).greedyChild = "isover" === s)),
                t && "isover" === s && ((t.isover = !1), (t.isout = !0), t._out.call(t, o)),
                (this[s] = !0),
                (this["isout" === s ? "isover" : "isout"] = !1),
                this["isover" === s ? "_over" : "_out"].call(this, o),
                t && "isout" === s && ((t.isout = !1), (t.isover = !0), t._over.call(t, o))));
          });
      },
      dragStop: function (t, e) {
        t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t, e);
      },
    }) !== V.uiBackCompat &&
      V.widget("ui.droppable", V.ui.droppable, {
        options: { hoverClass: !1, activeClass: !1 },
        _addActiveClass: function () {
          this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function () {
          this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function () {
          this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function () {
          this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
        },
      });
  V.ui.droppable,
    V.widget("ui.progressbar", {
      version: "1.13.2",
      options: {
        classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" },
        max: 100,
        value: 0,
        change: null,
        complete: null,
      },
      min: 0,
      _create: function () {
        (this.oldValue = this.options.value = this._constrainedValue()),
          this.element.attr({ role: "progressbar", "aria-valuemin": this.min }),
          this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
          (this.valueDiv = V("<div>").appendTo(this.element)),
          this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
          this._refreshValue();
      },
      _destroy: function () {
        this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
      },
      value: function (t) {
        if (void 0 === t) return this.options.value;
        (this.options.value = this._constrainedValue(t)), this._refreshValue();
      },
      _constrainedValue: function (t) {
        return (
          void 0 === t && (t = this.options.value),
          (this.indeterminate = !1 === t),
          "number" != typeof t && (t = 0),
          !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        );
      },
      _setOptions: function (t) {
        var e = t.value;
        delete t.value, this._super(t), (this.options.value = this._constrainedValue(e)), this._refreshValue();
      },
      _setOption: function (t, e) {
        "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _percentage: function () {
        return this.indeterminate ? 100 : (100 * (this.options.value - this.min)) / (this.options.max - this.min);
      },
      _refreshValue: function () {
        var t = this.options.value,
          e = this._percentage();
        this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"),
          this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass(
            "ui-progressbar-indeterminate",
            null,
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr("aria-valuenow"),
              this.overlayDiv || ((this.overlayDiv = V("<div>").appendTo(this.valueDiv)), this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
            : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }),
              this.overlayDiv && (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== t && ((this.oldValue = t), this._trigger("change")),
          t === this.options.max && this._trigger("complete");
      },
    }),
    V.widget("ui.selectable", V.ui.mouse, {
      version: "1.13.2",
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null,
      },
      _create: function () {
        var i = this;
        this._addClass("ui-selectable"),
          (this.dragged = !1),
          (this.refresh = function () {
            (i.elementPos = V(i.element[0]).offset()),
              (i.selectees = V(i.options.filter, i.element[0])),
              i._addClass(i.selectees, "ui-selectee"),
              i.selectees.each(function () {
                var t = V(this),
                  e = t.offset(),
                  e = { left: e.left - i.elementPos.left, top: e.top - i.elementPos.top };
                V.data(this, "selectable-item", {
                  element: this,
                  $element: t,
                  left: e.left,
                  top: e.top,
                  right: e.left + t.outerWidth(),
                  bottom: e.top + t.outerHeight(),
                  startselected: !1,
                  selected: t.hasClass("ui-selected"),
                  selecting: t.hasClass("ui-selecting"),
                  unselecting: t.hasClass("ui-unselecting"),
                });
              });
          }),
          this.refresh(),
          this._mouseInit(),
          (this.helper = V("<div>")),
          this._addClass(this.helper, "ui-selectable-helper");
      },
      _destroy: function () {
        this.selectees.removeData("selectable-item"), this._mouseDestroy();
      },
      _mouseStart: function (i) {
        var s = this,
          t = this.options;
        (this.opos = [i.pageX, i.pageY]),
          (this.elementPos = V(this.element[0]).offset()),
          this.options.disabled ||
            ((this.selectees = V(t.filter, this.element[0])),
            this._trigger("start", i),
            V(t.appendTo).append(this.helper),
            this.helper.css({ left: i.pageX, top: i.pageY, width: 0, height: 0 }),
            t.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function () {
              var t = V.data(this, "selectable-item");
              (t.startselected = !0),
                i.metaKey ||
                  i.ctrlKey ||
                  (s._removeClass(t.$element, "ui-selected"),
                  (t.selected = !1),
                  s._addClass(t.$element, "ui-unselecting"),
                  (t.unselecting = !0),
                  s._trigger("unselecting", i, { unselecting: t.element }));
            }),
            V(i.target)
              .parents()
              .addBack()
              .each(function () {
                var t,
                  e = V.data(this, "selectable-item");
                if (e)
                  return (
                    (t = (!i.metaKey && !i.ctrlKey) || !e.$element.hasClass("ui-selected")),
                    s._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"),
                    (e.unselecting = !t),
                    (e.selecting = t),
                    (e.selected = t)
                      ? s._trigger("selecting", i, { selecting: e.element })
                      : s._trigger("unselecting", i, { unselecting: e.element }),
                    !1
                  );
              }));
      },
      _mouseDrag: function (s) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var t,
            n = this,
            o = this.options,
            a = this.opos[0],
            r = this.opos[1],
            l = s.pageX,
            h = s.pageY;
          return (
            l < a && ((t = l), (l = a), (a = t)),
            h < r && ((t = h), (h = r), (r = t)),
            this.helper.css({ left: a, top: r, width: l - a, height: h - r }),
            this.selectees.each(function () {
              var t = V.data(this, "selectable-item"),
                e = !1,
                i = {};
              t &&
                t.element !== n.element[0] &&
                ((i.left = t.left + n.elementPos.left),
                (i.right = t.right + n.elementPos.left),
                (i.top = t.top + n.elementPos.top),
                (i.bottom = t.bottom + n.elementPos.top),
                "touch" === o.tolerance
                  ? (e = !(i.left > l || i.right < a || i.top > h || i.bottom < r))
                  : "fit" === o.tolerance && (e = i.left > a && i.right < l && i.top > r && i.bottom < h),
                e
                  ? (t.selected && (n._removeClass(t.$element, "ui-selected"), (t.selected = !1)),
                    t.unselecting && (n._removeClass(t.$element, "ui-unselecting"), (t.unselecting = !1)),
                    t.selecting ||
                      (n._addClass(t.$element, "ui-selecting"), (t.selecting = !0), n._trigger("selecting", s, { selecting: t.element })))
                  : (t.selecting &&
                      ((s.metaKey || s.ctrlKey) && t.startselected
                        ? (n._removeClass(t.$element, "ui-selecting"), (t.selecting = !1), n._addClass(t.$element, "ui-selected"), (t.selected = !0))
                        : (n._removeClass(t.$element, "ui-selecting"),
                          (t.selecting = !1),
                          t.startselected && (n._addClass(t.$element, "ui-unselecting"), (t.unselecting = !0)),
                          n._trigger("unselecting", s, { unselecting: t.element }))),
                    t.selected &&
                      (s.metaKey ||
                        s.ctrlKey ||
                        t.startselected ||
                        (n._removeClass(t.$element, "ui-selected"),
                        (t.selected = !1),
                        n._addClass(t.$element, "ui-unselecting"),
                        (t.unselecting = !0),
                        n._trigger("unselecting", s, { unselecting: t.element })))));
            }),
            !1
          );
        }
      },
      _mouseStop: function (e) {
        var i = this;
        return (
          (this.dragged = !1),
          V(".ui-unselecting", this.element[0]).each(function () {
            var t = V.data(this, "selectable-item");
            i._removeClass(t.$element, "ui-unselecting"),
              (t.unselecting = !1),
              (t.startselected = !1),
              i._trigger("unselected", e, { unselected: t.element });
          }),
          V(".ui-selecting", this.element[0]).each(function () {
            var t = V.data(this, "selectable-item");
            i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"),
              (t.selecting = !1),
              (t.selected = !0),
              (t.startselected = !0),
              i._trigger("selected", e, { selected: t.element });
          }),
          this._trigger("stop", e),
          this.helper.remove(),
          !1
        );
      },
    }),
    V.widget("ui.selectmenu", [
      V.ui.formResetMixin,
      {
        version: "1.13.2",
        defaultElement: "<select>",
        options: {
          appendTo: null,
          classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" },
          disabled: null,
          icons: { button: "ui-icon-triangle-1-s" },
          position: { my: "left top", at: "left bottom", collision: "none" },
          width: !1,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null,
        },
        _create: function () {
          var t = this.element.uniqueId().attr("id");
          (this.ids = { element: t, button: t + "-button", menu: t + "-menu" }),
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            (this._rendered = !1),
            (this.menuItems = V());
        },
        _drawButton: function () {
          var t,
            e = this,
            i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
          (this.labels = this.element.labels().attr("for", this.ids.button)),
            this._on(this.labels, {
              click: function (t) {
                this.button.trigger("focus"), t.preventDefault();
              },
            }),
            this.element.hide(),
            (this.button = V("<span>", {
              tabindex: this.options.disabled ? -1 : 0,
              id: this.ids.button,
              role: "combobox",
              "aria-expanded": "false",
              "aria-autocomplete": "list",
              "aria-owns": this.ids.menu,
              "aria-haspopup": "true",
              title: this.element.attr("title"),
            }).insertAfter(this.element)),
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
            (t = V("<span>").appendTo(this.button)),
            this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
            (this.buttonItem = this._renderButtonItem(i).appendTo(this.button)),
            !1 !== this.options.width && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", function () {
              e._rendered || e._refreshMenu();
            });
        },
        _drawMenu: function () {
          var i = this;
          (this.menu = V("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu })),
            (this.menuWrap = V("<div>").append(this.menu)),
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
            this.menuWrap.appendTo(this._appendTo()),
            (this.menuInstance = this.menu
              .menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function (t, e) {
                  t.preventDefault(), i._setSelection(), i._select(e.item.data("ui-selectmenu-item"), t);
                },
                focus: function (t, e) {
                  e = e.item.data("ui-selectmenu-item");
                  null != i.focusIndex && e.index !== i.focusIndex && (i._trigger("focus", t, { item: e }), i.isOpen || i._select(e, t)),
                    (i.focusIndex = e.index),
                    i.button.attr("aria-activedescendant", i.menuItems.eq(e.index).attr("id"));
                },
              })
              .menu("instance")),
            this.menuInstance._off(this.menu, "mouseleave"),
            (this.menuInstance._closeOnDocumentClick = function () {
              return !1;
            }),
            (this.menuInstance._isDivider = function () {
              return !1;
            });
        },
        refresh: function () {
          this._refreshMenu(),
            this.buttonItem.replaceWith((this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}))),
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function () {
          var t = this.element.find("option");
          this.menu.empty(),
            this._parseOptions(t),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            (this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper")),
            (this._rendered = !0),
            t.length &&
              ((t = this._getSelectedItem()),
              this.menuInstance.focus(null, t),
              this._setAria(t.data("ui-selectmenu-item")),
              this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function (t) {
          this.options.disabled ||
            (this._rendered
              ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
                this.menuInstance.focus(null, this._getSelectedItem()))
              : this._refreshMenu(),
            this.menuItems.length &&
              ((this.isOpen = !0),
              this._toggleAttr(),
              this._resizeMenu(),
              this._position(),
              this._on(this.document, this._documentClick),
              this._trigger("open", t)));
        },
        _position: function () {
          this.menuWrap.position(V.extend({ of: this.button }, this.options.position));
        },
        close: function (t) {
          this.isOpen && ((this.isOpen = !1), this._toggleAttr(), (this.range = null), this._off(this.document), this._trigger("close", t));
        },
        widget: function () {
          return this.button;
        },
        menuWidget: function () {
          return this.menu;
        },
        _renderButtonItem: function (t) {
          var e = V("<span>");
          return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e;
        },
        _renderMenu: function (s, t) {
          var n = this,
            o = "";
          V.each(t, function (t, e) {
            var i;
            e.optgroup !== o &&
              ((i = V("<li>", { text: e.optgroup })),
              n._addClass(
                i,
                "ui-selectmenu-optgroup",
                "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")
              ),
              i.appendTo(s),
              (o = e.optgroup)),
              n._renderItemData(s, e);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function (t, e) {
          var i = V("<li>"),
            s = V("<div>", { title: e.element.attr("title") });
          return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(s, e.label), i.append(s).appendTo(t);
        },
        _setText: function (t, e) {
          e ? t.text(e) : t.html("&#160;");
        },
        _move: function (t, e) {
          var i,
            s = ".ui-menu-item";
          this.isOpen
            ? (i = this.menuItems.eq(this.focusIndex).parent("li"))
            : ((i = this.menuItems.eq(this.element[0].selectedIndex).parent("li")), (s += ":not(.ui-state-disabled)")),
            (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length &&
              this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function () {
          return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function (t) {
          this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function () {
          var t;
          this.range &&
            (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(),
            this.button.trigger("focus"));
        },
        _documentClick: {
          mousedown: function (t) {
            this.isOpen && (V(t.target).closest(".ui-selectmenu-menu, #" + V.escapeSelector(this.ids.button)).length || this.close(t));
          },
        },
        _buttonEvents: {
          mousedown: function () {
            var t;
            window.getSelection
              ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0))
              : (this.range = document.selection.createRange());
          },
          click: function (t) {
            this._setSelection(), this._toggle(t);
          },
          keydown: function (t) {
            var e = !0;
            switch (t.keyCode) {
              case V.ui.keyCode.TAB:
              case V.ui.keyCode.ESCAPE:
                this.close(t), (e = !1);
                break;
              case V.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(t);
                break;
              case V.ui.keyCode.UP:
                t.altKey ? this._toggle(t) : this._move("prev", t);
                break;
              case V.ui.keyCode.DOWN:
                t.altKey ? this._toggle(t) : this._move("next", t);
                break;
              case V.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                break;
              case V.ui.keyCode.LEFT:
                this._move("prev", t);
                break;
              case V.ui.keyCode.RIGHT:
                this._move("next", t);
                break;
              case V.ui.keyCode.HOME:
              case V.ui.keyCode.PAGE_UP:
                this._move("first", t);
                break;
              case V.ui.keyCode.END:
              case V.ui.keyCode.PAGE_DOWN:
                this._move("last", t);
                break;
              default:
                this.menu.trigger(t), (e = !1);
            }
            e && t.preventDefault();
          },
        },
        _selectFocusedItem: function (t) {
          var e = this.menuItems.eq(this.focusIndex).parent("li");
          e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function (t, e) {
          var i = this.element[0].selectedIndex;
          (this.element[0].selectedIndex = t.index),
            this.buttonItem.replaceWith((this.buttonItem = this._renderButtonItem(t))),
            this._setAria(t),
            this._trigger("select", e, { item: t }),
            t.index !== i && this._trigger("change", e, { item: t }),
            this.close(e);
        },
        _setAria: function (t) {
          t = this.menuItems.eq(t.index).attr("id");
          this.button.attr({ "aria-labelledby": t, "aria-activedescendant": t }), this.menu.attr("aria-activedescendant", t);
        },
        _setOption: function (t, e) {
          var i;
          "icons" === t &&
            ((i = this.button.find("span.ui-icon")), this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)),
            this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.menuInstance.option("disabled", t),
            this.button.attr("aria-disabled", t),
            this._toggleClass(this.button, null, "ui-state-disabled", t),
            this.element.prop("disabled", t),
            t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
        },
        _appendTo: function () {
          var t = this.options.appendTo;
          return (t = !(t =
            !(t = t && (t.jquery || t.nodeType ? V(t) : this.document.find(t).eq(0))) || !t[0] ? this.element.closest(".ui-front, dialog") : t).length
            ? this.document[0].body
            : t);
        },
        _toggleAttr: function () {
          this.button.attr("aria-expanded", this.isOpen),
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))
              ._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))
              ._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function () {
          var t = this.options.width;
          !1 !== t
            ? (null === t && ((t = this.element.show().outerWidth()), this.element.hide()), this.button.outerWidth(t))
            : this.button.css("width", "");
        },
        _resizeMenu: function () {
          this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function () {
          var t = this._super();
          return (t.disabled = this.element.prop("disabled")), t;
        },
        _parseOptions: function (t) {
          var i = this,
            s = [];
          t.each(function (t, e) {
            e.hidden || s.push(i._parseOption(V(e), t));
          }),
            (this.items = s);
        },
        _parseOption: function (t, e) {
          var i = t.parent("optgroup");
          return {
            element: t,
            index: e,
            value: t.val(),
            label: t.text(),
            optgroup: i.attr("label") || "",
            disabled: i.prop("disabled") || t.prop("disabled"),
          };
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr("for", this.ids.element);
        },
      },
    ]),
    V.widget("ui.slider", V.ui.mouse, {
      version: "1.13.2",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" },
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
          this._refresh(),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
      },
      _createHandles: function () {
        var t,
          e = this.options,
          i = this.element.find(".ui-slider-handle"),
          s = [],
          n = (e.values && e.values.length) || 1;
        for (i.length > n && (i.slice(n).remove(), (i = i.slice(0, n))), t = i.length; t < n; t++) s.push("<span tabindex='0'></span>");
        (this.handles = i.add(V(s.join("")).appendTo(this.element))),
          this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (t) {
            V(this).data("ui-slider-handle-index", t).attr("tabIndex", 0);
          });
      },
      _createRange: function () {
        var t = this.options;
        t.range
          ? (!0 === t.range &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : Array.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" }))
              : ((this.range = V("<div>").appendTo(this.element)), this._addClass(this.range, "ui-slider-range")),
            ("min" !== t.range && "max" !== t.range) || this._addClass(this.range, "ui-slider-range-" + t.range))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var i,
          s,
          n,
          o,
          e,
          a,
          r = this,
          l = this.options;
        return (
          !l.disabled &&
          ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
          (this.elementOffset = this.element.offset()),
          (a = { x: t.pageX, y: t.pageY }),
          (i = this._normValueFromMouse(a)),
          (s = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (t) {
            var e = Math.abs(i - r.values(t));
            (e < s || (s === e && (t === r._lastChangedValue || r.values(t) === l.min))) && ((s = e), (n = V(this)), (o = t));
          }),
          !1 !== this._start(t, o) &&
            ((this._mouseSliding = !0),
            (this._handleIndex = o),
            this._addClass(n, null, "ui-state-active"),
            n.trigger("focus"),
            (e = n.offset()),
            (a = !V(t.target).parents().addBack().is(".ui-slider-handle")),
            (this._clickOffset = a
              ? { left: 0, top: 0 }
              : {
                  left: t.pageX - e.left - n.width() / 2,
                  top:
                    t.pageY -
                    e.top -
                    n.height() / 2 -
                    (parseInt(n.css("borderTopWidth"), 10) || 0) -
                    (parseInt(n.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(n.css("marginTop"), 10) || 0),
                }),
            this.handles.hasClass("ui-state-hover") || this._slide(t, o, i),
            (this._animateOff = !0)))
        );
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          e = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, e), !1;
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, "ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1)
        );
      },
      _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e,
          t =
            "horizontal" === this.orientation
              ? ((e = this.elementSize.width), t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0))
              : ((e = this.elementSize.height), t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
          t = t / e;
        return (
          (t = 1 < t ? 1 : t) < 0 && (t = 0),
          "vertical" === this.orientation && (t = 1 - t),
          (e = this._valueMax() - this._valueMin()),
          (e = this._valueMin() + t * e),
          this._trimAlignValue(e)
        );
      },
      _uiHash: function (t, e, i) {
        var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() };
        return this._hasMultipleValues() && ((s.value = void 0 !== e ? e : this.values(t)), (s.values = i || this.values())), s;
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length;
      },
      _start: function (t, e) {
        return this._trigger("start", t, this._uiHash(e));
      },
      _slide: function (t, e, i) {
        var s,
          n = this.value(),
          o = this.values();
        this._hasMultipleValues() &&
          ((s = this.values(e ? 0 : 1)),
          (n = this.values(e)),
          2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)),
          (o[e] = i)),
          i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
      },
      _stop: function (t, e) {
        this._trigger("stop", t, this._uiHash(e));
      },
      _change: function (t, e) {
        this._keySliding || this._mouseSliding || ((this._lastChangedValue = e), this._trigger("change", t, this._uiHash(e)));
      },
      value: function (t) {
        return arguments.length ? ((this.options.value = this._trimAlignValue(t)), this._refreshValue(), void this._change(null, 0)) : this._value();
      },
      values: function (t, e) {
        var i, s, n;
        if (1 < arguments.length) return (this.options.values[t] = this._trimAlignValue(e)), this._refreshValue(), void this._change(null, t);
        if (!arguments.length) return this._values();
        if (!Array.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();
        for (i = this.options.values, s = t, n = 0; n < i.length; n += 1) (i[n] = this._trimAlignValue(s[n])), this._change(null, n);
        this._refreshValue();
      },
      _setOption: function (t, e) {
        var i,
          s = 0;
        switch (
          ("range" === t &&
            !0 === this.options.range &&
            ("min" === e
              ? ((this.options.value = this._values(0)), (this.options.values = null))
              : "max" === e && ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
          Array.isArray(this.options.values) && (s = this.options.values.length),
          this._super(t, e),
          t)
        ) {
          case "orientation":
            this._detectOrientation(),
              this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(e),
              this.handles.css("horizontal" === e ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
            break;
          case "values":
            for (this._animateOff = !0, this._refreshValue(), i = s - 1; 0 <= i; i--) this._change(null, i);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i;
        if (arguments.length) return (t = this.options.values[t]), (t = this._trimAlignValue(t));
        if (this._hasMultipleValues()) {
          for (e = this.options.values.slice(), i = 0; i < e.length; i += 1) e[i] = this._trimAlignValue(e[i]);
          return e;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (t <= this._valueMin()) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = 0 < this.options.step ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          t = t - i;
        return 2 * Math.abs(i) >= e && (t += 0 < i ? e : -e), parseFloat(t.toFixed(5));
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step;
        (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (t = null !== this.options.min ? Math.max(t, this._precisionOf(this.options.min)) : t);
      },
      _precisionOf: function (t) {
        var e = t.toString(),
          t = e.indexOf(".");
        return -1 === t ? 0 : e.length - t - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshRange: function (t) {
        "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" });
      },
      _refreshValue: function () {
        var e,
          i,
          t,
          s,
          n,
          o = this.options.range,
          a = this.options,
          r = this,
          l = !this._animateOff && a.animate,
          h = {};
        this._hasMultipleValues()
          ? this.handles.each(function (t) {
              (i = ((r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin())) * 100),
                (h["horizontal" === r.orientation ? "left" : "bottom"] = i + "%"),
                V(this).stop(1, 1)[l ? "animate" : "css"](h, a.animate),
                !0 === r.options.range &&
                  ("horizontal" === r.orientation
                    ? (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, a.animate),
                      1 === t && r.range[l ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: a.animate }))
                    : (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, a.animate),
                      1 === t && r.range[l ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: a.animate }))),
                (e = i);
            })
          : ((t = this.value()),
            (s = this._valueMin()),
            (n = this._valueMax()),
            (i = n !== s ? ((t - s) / (n - s)) * 100 : 0),
            (h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%"),
            this.handle.stop(1, 1)[l ? "animate" : "css"](h, a.animate),
            "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, a.animate),
            "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: 100 - i + "%" }, a.animate),
            "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, a.animate),
            "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: 100 - i + "%" }, a.animate));
      },
      _handleEvents: {
        keydown: function (t) {
          var e,
            i,
            s,
            n = V(t.target).data("ui-slider-handle-index");
          switch (t.keyCode) {
            case V.ui.keyCode.HOME:
            case V.ui.keyCode.END:
            case V.ui.keyCode.PAGE_UP:
            case V.ui.keyCode.PAGE_DOWN:
            case V.ui.keyCode.UP:
            case V.ui.keyCode.RIGHT:
            case V.ui.keyCode.DOWN:
            case V.ui.keyCode.LEFT:
              if (
                (t.preventDefault(),
                !this._keySliding && ((this._keySliding = !0), this._addClass(V(t.target), null, "ui-state-active"), !1 === this._start(t, n)))
              )
                return;
          }
          switch (((s = this.options.step), (e = i = this._hasMultipleValues() ? this.values(n) : this.value()), t.keyCode)) {
            case V.ui.keyCode.HOME:
              i = this._valueMin();
              break;
            case V.ui.keyCode.END:
              i = this._valueMax();
              break;
            case V.ui.keyCode.PAGE_UP:
              i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case V.ui.keyCode.PAGE_DOWN:
              i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case V.ui.keyCode.UP:
            case V.ui.keyCode.RIGHT:
              if (e === this._valueMax()) return;
              i = this._trimAlignValue(e + s);
              break;
            case V.ui.keyCode.DOWN:
            case V.ui.keyCode.LEFT:
              if (e === this._valueMin()) return;
              i = this._trimAlignValue(e - s);
          }
          this._slide(t, n, i);
        },
        keyup: function (t) {
          var e = V(t.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1), this._stop(t, e), this._change(t, e), this._removeClass(V(t.target), null, "ui-state-active"));
        },
      },
    }),
    V.widget("ui.sortable", V.ui.mouse, {
      version: "1.13.2",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null,
      },
      _isOverAxis: function (t, e, i) {
        return e <= t && t < e + i;
      },
      _isFloating: function (t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
      },
      _create: function () {
        (this.containerCache = {}),
          this._addClass("ui-sortable"),
          this.refresh(),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          this._setHandleClassName(),
          (this.ready = !0);
      },
      _setOption: function (t, e) {
        this._super(t, e), "handle" === t && this._setHandleClassName();
      },
      _setHandleClassName: function () {
        var t = this;
        this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
          V.each(this.items, function () {
            t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
          });
      },
      _destroy: function () {
        this._mouseDestroy();
        for (var t = this.items.length - 1; 0 <= t; t--) this.items[t].item.removeData(this.widgetName + "-item");
        return this;
      },
      _mouseCapture: function (t, e) {
        var i = null,
          s = !1,
          n = this;
        return (
          !this.reverting &&
          !this.options.disabled &&
          "static" !== this.options.type &&
          (this._refreshItems(t),
          V(t.target)
            .parents()
            .each(function () {
              if (V.data(this, n.widgetName + "-item") === n) return (i = V(this)), !1;
            }),
          !!(i = V.data(t.target, n.widgetName + "-item") === n ? V(t.target) : i) &&
            !(
              this.options.handle &&
              !e &&
              (V(this.options.handle, i)
                .find("*")
                .addBack()
                .each(function () {
                  this === t.target && (s = !0);
                }),
              !s)
            ) &&
            ((this.currentItem = i), this._removeCurrentsFromItems(), !0))
        );
      },
      _mouseStart: function (t, e, i) {
        var s,
          n,
          o = this.options;
        if (
          ((this.currentContainer = this).refreshPositions(),
          (this.appendTo = V("parent" !== o.appendTo ? o.appendTo : this.currentItem.parent())),
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.offset = this.currentItem.offset()),
          (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
          V.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, relative: this._getRelativeOffset() }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
          (this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          (this.scrollParent = this.placeholder.scrollParent()),
          V.extend(this.offset, { parent: this._getParentOffset() }),
          o.containment && this._setContainment(),
          o.cursor &&
            "auto" !== o.cursor &&
            ((n = this.document.find("body")),
            (this.storedCursor = n.css("cursor")),
            n.css("cursor", o.cursor),
            (this.storedStylesheet = V("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(n))),
          o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)),
          o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)),
          this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", t, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !i)
        )
          for (s = this.containers.length - 1; 0 <= s; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
        return (
          V.ui.ddmanager && (V.ui.ddmanager.current = this),
          V.ui.ddmanager && !o.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t),
          (this.dragging = !0),
          this._addClass(this.helper, "ui-sortable-helper"),
          this.helper.parent().is(this.appendTo) || (this.helper.detach().appendTo(this.appendTo), (this.offset.parent = this._getParentOffset())),
          (this.position = this.originalPosition = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          (this.lastPositionAbs = this.positionAbs = this._convertPositionTo("absolute")),
          this._mouseDrag(t),
          !0
        );
      },
      _scroll: function (t) {
        var e = this.options,
          i = !1;
        return (
          this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName
            ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < e.scrollSensitivity
                ? (this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop + e.scrollSpeed)
                : t.pageY - this.overflowOffset.top < e.scrollSensitivity &&
                  (this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop - e.scrollSpeed),
              this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < e.scrollSensitivity
                ? (this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft + e.scrollSpeed)
                : t.pageX - this.overflowOffset.left < e.scrollSensitivity &&
                  (this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft - e.scrollSpeed))
            : (t.pageY - this.document.scrollTop() < e.scrollSensitivity
                ? (i = this.document.scrollTop(this.document.scrollTop() - e.scrollSpeed))
                : this.window.height() - (t.pageY - this.document.scrollTop()) < e.scrollSensitivity &&
                  (i = this.document.scrollTop(this.document.scrollTop() + e.scrollSpeed)),
              t.pageX - this.document.scrollLeft() < e.scrollSensitivity
                ? (i = this.document.scrollLeft(this.document.scrollLeft() - e.scrollSpeed))
                : this.window.width() - (t.pageX - this.document.scrollLeft()) < e.scrollSensitivity &&
                  (i = this.document.scrollLeft(this.document.scrollLeft() + e.scrollSpeed))),
          i
        );
      },
      _mouseDrag: function (t) {
        var e,
          i,
          s,
          n,
          o = this.options;
        for (
          this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            (this.options.axis && "y" === this.options.axis) || (this.helper[0].style.left = this.position.left + "px"),
            (this.options.axis && "x" === this.options.axis) || (this.helper[0].style.top = this.position.top + "px"),
            o.scroll &&
              !1 !== this._scroll(t) &&
              (this._refreshItemPositions(!0), V.ui.ddmanager && !o.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t)),
            this.dragDirection = { vertical: this._getDragVerticalDirection(), horizontal: this._getDragHorizontalDirection() },
            e = this.items.length - 1;
          0 <= e;
          e--
        )
          if (
            ((s = (i = this.items[e]).item[0]),
            (n = this._intersectsWithPointer(i)) &&
              i.instance === this.currentContainer &&
              !(
                s === this.currentItem[0] ||
                this.placeholder[1 === n ? "next" : "prev"]()[0] === s ||
                V.contains(this.placeholder[0], s) ||
                ("semi-dynamic" === this.options.type && V.contains(this.element[0], s))
              ))
          ) {
            if (((this.direction = 1 === n ? "down" : "up"), "pointer" !== this.options.tolerance && !this._intersectsWithSides(i))) break;
            this._rearrange(t, i), this._trigger("change", t, this._uiHash());
            break;
          }
        return (
          this._contactContainers(t),
          V.ui.ddmanager && V.ui.ddmanager.drag(this, t),
          this._trigger("sort", t, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (t, e) {
        var i, s, n, o;
        if (t)
          return (
            V.ui.ddmanager && !this.options.dropBehaviour && V.ui.ddmanager.drop(this, t),
            this.options.revert
              ? ((s = (i = this).placeholder.offset()),
                (o = {}),
                ((n = this.options.axis) && "x" !== n) ||
                  (o.left =
                    s.left -
                    this.offset.parent.left -
                    this.margins.left +
                    (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                (n && "y" !== n) ||
                  (o.top =
                    s.top -
                    this.offset.parent.top -
                    this.margins.top +
                    (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                (this.reverting = !0),
                V(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                  i._clear(t);
                }))
              : this._clear(t, e),
            !1
          );
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp(new V.Event("mouseup", { target: null })),
            "original" === this.options.helper
              ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper"))
              : this.currentItem.show();
          for (var t = this.containers.length - 1; 0 <= t; t--)
            this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
              this.containers[t].containerCache.over &&
                (this.containers[t]._trigger("out", null, this._uiHash(this)), (this.containers[t].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            V.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }),
            this.domPosition.prev ? V(this.domPosition.prev).after(this.currentItem) : V(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (e) {
        var t = this._getItemsAsjQuery(e && e.connected),
          i = [];
        return (
          (e = e || {}),
          V(t).each(function () {
            var t = (V(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
            t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]));
          }),
          !i.length && e.key && i.push(e.key + "="),
          i.join("&")
        );
      },
      toArray: function (t) {
        var e = this._getItemsAsjQuery(t && t.connected),
          i = [];
        return (
          (t = t || {}),
          e.each(function () {
            i.push(V(t.item || this).attr(t.attribute || "id") || "");
          }),
          i
        );
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          l = r + t.height,
          h = this.offset.click.top,
          c = this.offset.click.left,
          h = "x" === this.options.axis || (r < s + h && s + h < l),
          c = "y" === this.options.axis || (o < e + c && e + c < a);
        return "pointer" === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ("pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"])
          ? h && c
          : o < e + this.helperProportions.width / 2 &&
              i - this.helperProportions.width / 2 < a &&
              r < s + this.helperProportions.height / 2 &&
              n - this.helperProportions.height / 2 < l;
      },
      _intersectsWithPointer: function (t) {
        var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          t = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
        return (
          !(!e || !t) &&
          ((e = this.dragDirection.vertical),
          (t = this.dragDirection.horizontal),
          this.floating ? ("right" === t || "down" === e ? 2 : 1) : e && ("down" === e ? 2 : 1))
        );
      },
      _intersectsWithSides: function (t) {
        var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          s = this.dragDirection.vertical,
          t = this.dragDirection.horizontal;
        return this.floating && t ? ("right" === t && i) || ("left" === t && !i) : s && (("down" === s && e) || ("up" === s && !e));
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 != t && (0 < t ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 != t && (0 < t ? "right" : "left");
      },
      refresh: function (t) {
        return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
      },
      _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
      },
      _getItemsAsjQuery: function (t) {
        var e,
          i,
          s,
          n,
          o = [],
          a = [],
          r = this._connectWith();
        if (r && t)
          for (e = r.length - 1; 0 <= e; e--)
            for (i = (s = V(r[e], this.document[0])).length - 1; 0 <= i; i--)
              (n = V.data(s[i], this.widgetFullName)) &&
                n !== this &&
                !n.options.disabled &&
                a.push([
                  "function" == typeof n.options.items
                    ? n.options.items.call(n.element)
                    : V(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
                  n,
                ]);
        function l() {
          o.push(this);
        }
        for (
          a.push([
            "function" == typeof this.options.items
              ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem })
              : V(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
            this,
          ]),
            e = a.length - 1;
          0 <= e;
          e--
        )
          a[e][0].each(l);
        return V(o);
      },
      _removeCurrentsFromItems: function () {
        var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = V.grep(this.items, function (t) {
          for (var e = 0; e < i.length; e++) if (i[e] === t.item[0]) return !1;
          return !0;
        });
      },
      _refreshItems: function (t) {
        (this.items = []), (this.containers = [this]);
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h = this.items,
          c = [
            [
              "function" == typeof this.options.items
                ? this.options.items.call(this.element[0], t, { item: this.currentItem })
                : V(this.options.items, this.element),
              this,
            ],
          ],
          u = this._connectWith();
        if (u && this.ready)
          for (e = u.length - 1; 0 <= e; e--)
            for (i = (s = V(u[e], this.document[0])).length - 1; 0 <= i; i--)
              (n = V.data(s[i], this.widgetFullName)) &&
                n !== this &&
                !n.options.disabled &&
                (c.push([
                  "function" == typeof n.options.items
                    ? n.options.items.call(n.element[0], t, { item: this.currentItem })
                    : V(n.options.items, n.element),
                  n,
                ]),
                this.containers.push(n));
        for (e = c.length - 1; 0 <= e; e--)
          for (o = c[e][1], l = (a = c[e][(i = 0)]).length; i < l; i++)
            (r = V(a[i])).data(this.widgetName + "-item", o), h.push({ item: r, instance: o, width: 0, height: 0, left: 0, top: 0 });
      },
      _refreshItemPositions: function (t) {
        for (var e, i, s = this.items.length - 1; 0 <= s; s--)
          (e = this.items[s]),
            (this.currentContainer && e.instance !== this.currentContainer && e.item[0] !== this.currentItem[0]) ||
              ((i = this.options.toleranceElement ? V(this.options.toleranceElement, e.item) : e.item),
              t || ((e.width = i.outerWidth()), (e.height = i.outerHeight())),
              (i = i.offset()),
              (e.left = i.left),
              (e.top = i.top));
      },
      refreshPositions: function (t) {
        var e, i;
        if (
          ((this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item))),
          this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
          this._refreshItemPositions(t),
          this.options.custom && this.options.custom.refreshContainers)
        )
          this.options.custom.refreshContainers.call(this);
        else
          for (e = this.containers.length - 1; 0 <= e; e--)
            (i = this.containers[e].element.offset()),
              (this.containers[e].containerCache.left = i.left),
              (this.containers[e].containerCache.top = i.top),
              (this.containers[e].containerCache.width = this.containers[e].element.outerWidth()),
              (this.containers[e].containerCache.height = this.containers[e].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (i) {
        var s,
          n,
          o = (i = i || this).options;
        (o.placeholder && o.placeholder.constructor !== String) ||
          ((s = o.placeholder),
          (n = i.currentItem[0].nodeName.toLowerCase()),
          (o.placeholder = {
            element: function () {
              var t = V("<" + n + ">", i.document[0]);
              return (
                i._addClass(t, "ui-sortable-placeholder", s || i.currentItem[0].className)._removeClass(t, "ui-sortable-helper"),
                "tbody" === n
                  ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), V("<tr>", i.document[0]).appendTo(t))
                  : "tr" === n
                  ? i._createTrPlaceholder(i.currentItem, t)
                  : "img" === n && t.attr("src", i.currentItem.attr("src")),
                s || t.css("visibility", "hidden"),
                t
              );
            },
            update: function (t, e) {
              (s && !o.forcePlaceholderSize) ||
                ((e.height() && (!o.forcePlaceholderSize || ("tbody" !== n && "tr" !== n))) ||
                  e.height(
                    i.currentItem.innerHeight() -
                      parseInt(i.currentItem.css("paddingTop") || 0, 10) -
                      parseInt(i.currentItem.css("paddingBottom") || 0, 10)
                  ),
                e.width() ||
                  e.width(
                    i.currentItem.innerWidth() -
                      parseInt(i.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(i.currentItem.css("paddingRight") || 0, 10)
                  ));
            },
          })),
          (i.placeholder = V(o.placeholder.element.call(i.element, i.currentItem))),
          i.currentItem.after(i.placeholder),
          o.placeholder.update(i, i.placeholder);
      },
      _createTrPlaceholder: function (t, e) {
        var i = this;
        t.children().each(function () {
          V("<td>&#160;</td>", i.document[0])
            .attr("colspan", V(this).attr("colspan") || 1)
            .appendTo(e);
        });
      },
      _contactContainers: function (t) {
        for (var e, i, s, n, o, a, r, l, h, c = null, u = null, d = this.containers.length - 1; 0 <= d; d--)
          V.contains(this.currentItem[0], this.containers[d].element[0]) ||
            (this._intersectsWith(this.containers[d].containerCache)
              ? (c && V.contains(this.containers[d].element[0], c.element[0])) || ((c = this.containers[d]), (u = d))
              : this.containers[d].containerCache.over &&
                (this.containers[d]._trigger("out", t, this._uiHash(this)), (this.containers[d].containerCache.over = 0)));
        if (c)
          if (1 === this.containers.length)
            this.containers[u].containerCache.over ||
              (this.containers[u]._trigger("over", t, this._uiHash(this)), (this.containers[u].containerCache.over = 1));
          else {
            for (
              i = 1e4,
                s = null,
                n = (l = c.floating || this._isFloating(this.currentItem)) ? "left" : "top",
                o = l ? "width" : "height",
                h = l ? "pageX" : "pageY",
                e = this.items.length - 1;
              0 <= e;
              e--
            )
              V.contains(this.containers[u].element[0], this.items[e].item[0]) &&
                this.items[e].item[0] !== this.currentItem[0] &&
                ((a = this.items[e].item.offset()[n]),
                (r = !1),
                t[h] - a > this.items[e][o] / 2 && (r = !0),
                Math.abs(t[h] - a) < i && ((i = Math.abs(t[h] - a)), (s = this.items[e]), (this.direction = r ? "up" : "down")));
            (s || this.options.dropOnEmpty) &&
              (this.currentContainer !== this.containers[u]
                ? (s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[u].element, !0),
                  this._trigger("change", t, this._uiHash()),
                  this.containers[u]._trigger("change", t, this._uiHash(this)),
                  (this.currentContainer = this.containers[u]),
                  this.options.placeholder.update(this.currentContainer, this.placeholder),
                  (this.scrollParent = this.placeholder.scrollParent()),
                  this.scrollParent[0] !== this.document[0] &&
                    "HTML" !== this.scrollParent[0].tagName &&
                    (this.overflowOffset = this.scrollParent.offset()),
                  this.containers[u]._trigger("over", t, this._uiHash(this)),
                  (this.containers[u].containerCache.over = 1))
                : this.currentContainer.containerCache.over ||
                  (this.containers[u]._trigger("over", t, this._uiHash()), (this.currentContainer.containerCache.over = 1)));
          }
      },
      _createHelper: function (t) {
        var e = this.options,
          t =
            "function" == typeof e.helper
              ? V(e.helper.apply(this.element[0], [t, this.currentItem]))
              : "clone" === e.helper
              ? this.currentItem.clone()
              : this.currentItem;
        return (
          t.parents("body").length || this.appendTo[0].appendChild(t[0]),
          t[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          (t[0].style.width && !e.forceHelperSize) || t.width(this.currentItem.width()),
          (t[0].style.height && !e.forceHelperSize) || t.height(this.currentItem.height()),
          t
        );
      },
      _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")),
          "left" in (t = Array.isArray(t) ? { left: +t[0], top: +t[1] || 0 } : t) && (this.offset.click.left = t.left + this.margins.left),
          "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
          "top" in t && (this.offset.click.top = t.top + this.margins.top),
          "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== this.document[0] &&
            V.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()), (t.top += this.scrollParent.scrollTop())),
          {
            top:
              (t =
                this.offsetParent[0] === this.document[0].body ||
                (this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && V.ui.ie)
                  ? { top: 0, left: 0 }
                  : t).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.currentItem.position();
        return {
          top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft(),
        };
      },
      _cacheMargins: function () {
        this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
      },
      _setContainment: function () {
        var t,
          e,
          i = this.options;
        "parent" === i.containment && (i.containment = this.helper[0].parentNode),
          ("document" !== i.containment && "window" !== i.containment) ||
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              "document" === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
              ("document" === i.containment
                ? this.document.height() || document.body.parentNode.scrollHeight
                : this.window.height() || this.document[0].body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(i.containment) ||
            ((t = V(i.containment)[0]),
            (e = V(i.containment).offset()),
            (i = "hidden" !== V(t).css("overflow")),
            (this.containment = [
              e.left + (parseInt(V(t).css("borderLeftWidth"), 10) || 0) + (parseInt(V(t).css("paddingLeft"), 10) || 0) - this.margins.left,
              e.top + (parseInt(V(t).css("borderTopWidth"), 10) || 0) + (parseInt(V(t).css("paddingTop"), 10) || 0) - this.margins.top,
              e.left +
                (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
                (parseInt(V(t).css("borderLeftWidth"), 10) || 0) -
                (parseInt(V(t).css("paddingRight"), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              e.top +
                (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) -
                (parseInt(V(t).css("borderTopWidth"), 10) || 0) -
                (parseInt(V(t).css("paddingBottom"), 10) || 0) -
                this.helperProportions.height -
                this.margins.top,
            ]));
      },
      _convertPositionTo: function (t, e) {
        e = e || this.position;
        var i = "absolute" === t ? 1 : -1,
          s =
            "absolute" !== this.cssPosition || (this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          t = /(html|body)/i.test(s[0].tagName);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : t ? 0 : s.scrollTop()) * i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : t ? 0 : s.scrollLeft()) * i,
        };
      },
      _generatePosition: function (t) {
        var e = this.options,
          i = t.pageX,
          s = t.pageY,
          n =
            "absolute" !== this.cssPosition || (this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
        return (
          "relative" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (t.pageX - this.offset.click.left < this.containment[0] && (i = this.containment[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > this.containment[2] && (i = this.containment[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)),
            e.grid &&
              ((t = this.originalPageY + Math.round((s - this.originalPageY) / e.grid[1]) * e.grid[1]),
              (s =
                !this.containment || (t - this.offset.click.top >= this.containment[1] && t - this.offset.click.top <= this.containment[3])
                  ? t
                  : t - this.offset.click.top >= this.containment[1]
                  ? t - e.grid[1]
                  : t + e.grid[1]),
              (t = this.originalPageX + Math.round((i - this.originalPageX) / e.grid[0]) * e.grid[0]),
              (i =
                !this.containment || (t - this.offset.click.left >= this.containment[0] && t - this.offset.click.left <= this.containment[2])
                  ? t
                  : t - this.offset.click.left >= this.containment[0]
                  ? t - e.grid[0]
                  : t + e.grid[0]))),
          {
            top:
              s -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()),
            left:
              i -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()),
          }
        );
      },
      _rearrange: function (t, e, i, s) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
          (this.counter = this.counter ? ++this.counter : 1);
        var n = this.counter;
        this._delay(function () {
          n === this.counter && this.refreshPositions(!s);
        });
      },
      _clear: function (t, e) {
        this.reverting = !1;
        var i,
          s = [];
        if (
          (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (i in this._storedCSS) ("auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i]) || (this._storedCSS[i] = "");
          this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
        } else this.currentItem.show();
        function n(e, i, s) {
          return function (t) {
            s._trigger(e, t, i._uiHash(i));
          };
        }
        for (
          this.fromOutside &&
            !e &&
            s.push(function (t) {
              this._trigger("receive", t, this._uiHash(this.fromOutside));
            }),
            (!this.fromOutside &&
              this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              s.push(function (t) {
                this._trigger("update", t, this._uiHash());
              }),
            this !== this.currentContainer &&
              (e ||
                (s.push(function (t) {
                  this._trigger("remove", t, this._uiHash());
                }),
                s.push(
                  function (e) {
                    return function (t) {
                      e._trigger("receive", t, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ),
                s.push(
                  function (e) {
                    return function (t) {
                      e._trigger("update", t, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ))),
            i = this.containers.length - 1;
          0 <= i;
          i--
        )
          e || s.push(n("deactivate", this, this.containers[i])),
            this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), (this.containers[i].containerCache.over = 0));
        if (
          (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()),
          this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
          (this.dragging = !1),
          e || this._trigger("beforeStop", t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), (this.helper = null)),
          !e)
        ) {
          for (i = 0; i < s.length; i++) s[i].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return (this.fromOutside = !1), !this.cancelHelperRemoval;
      },
      _trigger: function () {
        !1 === V.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
      },
      _uiHash: function (t) {
        var e = t || this;
        return {
          helper: e.helper,
          placeholder: e.placeholder || V([]),
          position: e.position,
          originalPosition: e.originalPosition,
          offset: e.positionAbs,
          item: e.currentItem,
          sender: t ? t.element : null,
        };
      },
    });
  function ht(e) {
    return function () {
      var t = this.element.val();
      e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change");
    };
  }
  V.widget("ui.spinner", {
    version: "1.13.2",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" },
      culture: null,
      icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null,
    },
    _create: function () {
      this._setOption("max", this.options.max),
        this._setOption("min", this.options.min),
        this._setOption("step", this.options.step),
        "" !== this.value() && this._value(this.element.val(), !0),
        this._draw(),
        this._on(this._events),
        this._refresh(),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _getCreateOptions: function () {
      var s = this._super(),
        n = this.element;
      return (
        V.each(["min", "max", "step"], function (t, e) {
          var i = n.attr(e);
          null != i && i.length && (s[e] = i);
        }),
        s
      );
    },
    _events: {
      keydown: function (t) {
        this._start(t) && this._keydown(t) && t.preventDefault();
      },
      keyup: "_stop",
      focus: function () {
        this.previous = this.element.val();
      },
      blur: function (t) {
        this.cancelBlur
          ? delete this.cancelBlur
          : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t));
      },
      mousewheel: function (t, e) {
        var i = V.ui.safeActiveElement(this.document[0]);
        if (this.element[0] === i && e) {
          if (!this.spinning && !this._start(t)) return !1;
          this._spin((0 < e ? 1 : -1) * this.options.step, t),
            clearTimeout(this.mousewheelTimer),
            (this.mousewheelTimer = this._delay(function () {
              this.spinning && this._stop(t);
            }, 100)),
            t.preventDefault();
        }
      },
      "mousedown .ui-spinner-button": function (t) {
        var e;
        function i() {
          this.element[0] === V.ui.safeActiveElement(this.document[0]) ||
            (this.element.trigger("focus"),
            (this.previous = e),
            this._delay(function () {
              this.previous = e;
            }));
        }
        (e = this.element[0] === V.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val()),
          t.preventDefault(),
          i.call(this),
          (this.cancelBlur = !0),
          this._delay(function () {
            delete this.cancelBlur, i.call(this);
          }),
          !1 !== this._start(t) && this._repeat(null, V(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function (t) {
        if (V(t.currentTarget).hasClass("ui-state-active"))
          return !1 !== this._start(t) && void this._repeat(null, V(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
      },
      "mouseleave .ui-spinner-button": "_stop",
    },
    _enhance: function () {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
    },
    _draw: function () {
      this._enhance(),
        this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
        this._addClass("ui-spinner-input"),
        this.element.attr("role", "spinbutton"),
        (this.buttons = this.uiSpinner
          .children("a")
          .attr("tabIndex", -1)
          .attr("aria-hidden", !0)
          .button({ classes: { "ui-button": "" } })),
        this._removeClass(this.buttons, "ui-corner-all"),
        this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
        this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
        this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }),
        this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }),
        this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
          0 < this.uiSpinner.height() &&
          this.uiSpinner.height(this.uiSpinner.height());
    },
    _keydown: function (t) {
      var e = this.options,
        i = V.ui.keyCode;
      switch (t.keyCode) {
        case i.UP:
          return this._repeat(null, 1, t), !0;
        case i.DOWN:
          return this._repeat(null, -1, t), !0;
        case i.PAGE_UP:
          return this._repeat(null, e.page, t), !0;
        case i.PAGE_DOWN:
          return this._repeat(null, -e.page, t), !0;
      }
      return !1;
    },
    _start: function (t) {
      return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), (this.spinning = !0));
    },
    _repeat: function (t, e, i) {
      (t = t || 500),
        clearTimeout(this.timer),
        (this.timer = this._delay(function () {
          this._repeat(40, e, i);
        }, t)),
        this._spin(e * this.options.step, i);
    },
    _spin: function (t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1),
        (i = this._adjustValue(i + t * this._increment(this.counter))),
        (this.spinning && !1 === this._trigger("spin", e, { value: i })) || (this._value(i), this.counter++);
    },
    _increment: function (t) {
      var e = this.options.incremental;
      return e ? ("function" == typeof e ? e(t) : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)) : 1;
    },
    _precision: function () {
      var t = this._precisionOf(this.options.step);
      return (t = null !== this.options.min ? Math.max(t, this._precisionOf(this.options.min)) : t);
    },
    _precisionOf: function (t) {
      var e = t.toString(),
        t = e.indexOf(".");
      return -1 === t ? 0 : e.length - t - 1;
    },
    _adjustValue: function (t) {
      var e = this.options,
        i = null !== e.min ? e.min : 0,
        s = t - i;
      return (
        (t = i + Math.round(s / e.step) * e.step),
        (t = parseFloat(t.toFixed(this._precision()))),
        null !== e.max && t > e.max ? e.max : null !== e.min && t < e.min ? e.min : t
      );
    },
    _stop: function (t) {
      this.spinning &&
        (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), (this.counter = 0), (this.spinning = !1), this._trigger("stop", t));
    },
    _setOption: function (t, e) {
      var i;
      if ("culture" === t || "numberFormat" === t)
        return (i = this._parse(this.element.val())), (this.options[t] = e), void this.element.val(this._format(i));
      ("max" !== t && "min" !== t && "step" !== t) || ("string" == typeof e && (e = this._parse(e))),
        "icons" === t &&
          ((i = this.buttons.first().find(".ui-icon")),
          this._removeClass(i, null, this.options.icons.up),
          this._addClass(i, null, e.up),
          (i = this.buttons.last().find(".ui-icon")),
          this._removeClass(i, null, this.options.icons.down),
          this._addClass(i, null, e.down)),
        this._super(t, e);
    },
    _setOptionDisabled: function (t) {
      this._super(t),
        this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
        this.element.prop("disabled", !!t),
        this.buttons.button(t ? "disable" : "enable");
    },
    _setOptions: ht(function (t) {
      this._super(t);
    }),
    _parse: function (t) {
      return "" ===
        (t =
          "string" == typeof t && "" !== t
            ? window.Globalize && this.options.numberFormat
              ? Globalize.parseFloat(t, 10, this.options.culture)
              : +t
            : t) || isNaN(t)
        ? null
        : t;
    },
    _format: function (t) {
      return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
    },
    _refresh: function () {
      this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) });
    },
    isValid: function () {
      var t = this.value();
      return null !== t && t === this._adjustValue(t);
    },
    _value: function (t, e) {
      var i;
      "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), (t = this._format(i))), this.element.val(t), this._refresh();
    },
    _destroy: function () {
      this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),
        this.uiSpinner.replaceWith(this.element);
    },
    stepUp: ht(function (t) {
      this._stepUp(t);
    }),
    _stepUp: function (t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    },
    stepDown: ht(function (t) {
      this._stepDown(t);
    }),
    _stepDown: function (t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
    },
    pageUp: ht(function (t) {
      this._stepUp((t || 1) * this.options.page);
    }),
    pageDown: ht(function (t) {
      this._stepDown((t || 1) * this.options.page);
    }),
    value: function (t) {
      if (!arguments.length) return this._parse(this.element.val());
      ht(this._value).call(this, t);
    },
    widget: function () {
      return this.uiSpinner;
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.spinner", V.ui.spinner, {
        _enhance: function () {
          this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        },
        _uiSpinnerHtml: function () {
          return "<span>";
        },
        _buttonHtml: function () {
          return "<a></a><a></a>";
        },
      });
  var ct;
  V.ui.spinner;
  V.widget("ui.tabs", {
    version: "1.13.2",
    delay: 300,
    options: {
      active: null,
      classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null,
    },
    _isLocal:
      ((ct = /#.*$/),
      function (t) {
        var e = t.href.replace(ct, ""),
          i = location.href.replace(ct, "");
        try {
          e = decodeURIComponent(e);
        } catch (t) {}
        try {
          i = decodeURIComponent(i);
        } catch (t) {}
        return 1 < t.hash.length && e === i;
      }),
    _create: function () {
      var e = this,
        t = this.options;
      (this.running = !1),
        this._addClass("ui-tabs", "ui-widget ui-widget-content"),
        this._toggleClass("ui-tabs-collapsible", null, t.collapsible),
        this._processTabs(),
        (t.active = this._initialActive()),
        Array.isArray(t.disabled) &&
          (t.disabled = V.uniqueSort(
            t.disabled.concat(
              V.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t);
              })
            )
          ).sort()),
        !1 !== this.options.active && this.anchors.length ? (this.active = this._findActive(t.active)) : (this.active = V()),
        this._refresh(),
        this.active.length && this.load(t.active);
    },
    _initialActive: function () {
      var i = this.options.active,
        t = this.options.collapsible,
        s = location.hash.substring(1);
      return (
        null === i &&
          (s &&
            this.tabs.each(function (t, e) {
              if (V(e).attr("aria-controls") === s) return (i = t), !1;
            }),
          (null !== (i = null === i ? this.tabs.index(this.tabs.filter(".ui-tabs-active")) : i) && -1 !== i) || (i = !!this.tabs.length && 0)),
        !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0),
        (i = !t && !1 === i && this.anchors.length ? 0 : i)
      );
    },
    _getCreateEventData: function () {
      return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : V() };
    },
    _tabKeydown: function (t) {
      var e = V(V.ui.safeActiveElement(this.document[0])).closest("li"),
        i = this.tabs.index(e),
        s = !0;
      if (!this._handlePageNav(t)) {
        switch (t.keyCode) {
          case V.ui.keyCode.RIGHT:
          case V.ui.keyCode.DOWN:
            i++;
            break;
          case V.ui.keyCode.UP:
          case V.ui.keyCode.LEFT:
            (s = !1), i--;
            break;
          case V.ui.keyCode.END:
            i = this.anchors.length - 1;
            break;
          case V.ui.keyCode.HOME:
            i = 0;
            break;
          case V.ui.keyCode.SPACE:
            return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
          case V.ui.keyCode.ENTER:
            return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
          default:
            return;
        }
        t.preventDefault(),
          clearTimeout(this.activating),
          (i = this._focusNextTab(i, s)),
          t.ctrlKey ||
            t.metaKey ||
            (e.attr("aria-selected", "false"),
            this.tabs.eq(i).attr("aria-selected", "true"),
            (this.activating = this._delay(function () {
              this.option("active", i);
            }, this.delay)));
      }
    },
    _panelKeydown: function (t) {
      this._handlePageNav(t) || (t.ctrlKey && t.keyCode === V.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus")));
    },
    _handlePageNav: function (t) {
      return t.altKey && t.keyCode === V.ui.keyCode.PAGE_UP
        ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
        : t.altKey && t.keyCode === V.ui.keyCode.PAGE_DOWN
        ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
        : void 0;
    },
    _findNextTab: function (t, e) {
      var i = this.tabs.length - 1;
      for (; -1 !== V.inArray((t = (t = i < t ? 0 : t) < 0 ? i : t), this.options.disabled); ) t = e ? t + 1 : t - 1;
      return t;
    },
    _focusNextTab: function (t, e) {
      return (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t;
    },
    _setOption: function (t, e) {
      "active" !== t
        ? (this._super(t, e),
          "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)),
          "event" === t && this._setupEvents(e),
          "heightStyle" === t && this._setupHeightStyle(e))
        : this._activate(e);
    },
    _sanitizeSelector: function (t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function () {
      var t = this.options,
        e = this.tablist.children(":has(a[href])");
      (t.disabled = V.map(e.filter(".ui-state-disabled"), function (t) {
        return e.index(t);
      })),
        this._processTabs(),
        !1 !== t.active && this.anchors.length
          ? this.active.length && !V.contains(this.tablist[0], this.active[0])
            ? this.tabs.length === t.disabled.length
              ? ((t.active = !1), (this.active = V()))
              : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))
            : (t.active = this.tabs.index(this.active))
          : ((t.active = !1), (this.active = V())),
        this._refresh();
    },
    _refresh: function () {
      this._setOptionDisabled(this.options.disabled),
        this._setupEvents(this.options.event),
        this._setupHeightStyle(this.options.heightStyle),
        this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }),
        this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }),
        this.active.length
          ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" }))
          : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function () {
      var l = this,
        t = this.tabs,
        e = this.anchors,
        i = this.panels;
      (this.tablist = this._getList().attr("role", "tablist")),
        this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
        this.tablist
          .on("mousedown" + this.eventNamespace, "> li", function (t) {
            V(this).is(".ui-state-disabled") && t.preventDefault();
          })
          .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
            V(this).closest("li").is(".ui-state-disabled") && this.blur();
          }),
        (this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 })),
        this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
        (this.anchors = this.tabs
          .map(function () {
            return V("a", this)[0];
          })
          .attr({ tabIndex: -1 })),
        this._addClass(this.anchors, "ui-tabs-anchor"),
        (this.panels = V()),
        this.anchors.each(function (t, e) {
          var i,
            s,
            n,
            o = V(e).uniqueId().attr("id"),
            a = V(e).closest("li"),
            r = a.attr("aria-controls");
          l._isLocal(e)
            ? ((n = (i = e.hash).substring(1)), (s = l.element.find(l._sanitizeSelector(i))))
            : ((n = a.attr("aria-controls") || V({}).uniqueId()[0].id),
              (s = l.element.find((i = "#" + n))).length || (s = l._createPanel(n)).insertAfter(l.panels[t - 1] || l.tablist),
              s.attr("aria-live", "polite")),
            s.length && (l.panels = l.panels.add(s)),
            r && a.data("ui-tabs-aria-controls", r),
            a.attr({ "aria-controls": n, "aria-labelledby": o }),
            s.attr("aria-labelledby", o);
        }),
        this.panels.attr("role", "tabpanel"),
        this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
        t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)));
    },
    _getList: function () {
      return this.tablist || this.element.find("ol, ul").eq(0);
    },
    _createPanel: function (t) {
      return V("<div>").attr("id", t).data("ui-tabs-destroy", !0);
    },
    _setOptionDisabled: function (t) {
      var e, i;
      for (Array.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1)), i = 0; (e = this.tabs[i]); i++)
        (e = V(e)),
          !0 === t || -1 !== V.inArray(i, t)
            ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled"))
            : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
      (this.options.disabled = t), this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t);
    },
    _setupEvents: function (t) {
      var i = {};
      t &&
        V.each(t.split(" "), function (t, e) {
          i[e] = "_eventHandler";
        }),
        this._off(this.anchors.add(this.tabs).add(this.panels)),
        this._on(!0, this.anchors, {
          click: function (t) {
            t.preventDefault();
          },
        }),
        this._on(this.anchors, i),
        this._on(this.tabs, { keydown: "_tabKeydown" }),
        this._on(this.panels, { keydown: "_panelKeydown" }),
        this._focusable(this.tabs),
        this._hoverable(this.tabs);
    },
    _setupHeightStyle: function (t) {
      var i,
        e = this.element.parent();
      "fill" === t
        ? ((i = e.height()),
          (i -= this.element.outerHeight() - this.element.height()),
          this.element.siblings(":visible").each(function () {
            var t = V(this),
              e = t.css("position");
            "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
          }),
          this.element
            .children()
            .not(this.panels)
            .each(function () {
              i -= V(this).outerHeight(!0);
            }),
          this.panels
            .each(function () {
              V(this).height(Math.max(0, i - V(this).innerHeight() + V(this).height()));
            })
            .css("overflow", "auto"))
        : "auto" === t &&
          ((i = 0),
          this.panels
            .each(function () {
              i = Math.max(i, V(this).height("").height());
            })
            .height(i));
    },
    _eventHandler: function (t) {
      var e = this.options,
        i = this.active,
        s = V(t.currentTarget).closest("li"),
        n = s[0] === i[0],
        o = n && e.collapsible,
        a = o ? V() : this._getPanelForTab(s),
        r = i.length ? this._getPanelForTab(i) : V(),
        i = { oldTab: i, oldPanel: r, newTab: o ? V() : s, newPanel: a };
      t.preventDefault(),
        s.hasClass("ui-state-disabled") ||
          s.hasClass("ui-tabs-loading") ||
          this.running ||
          (n && !e.collapsible) ||
          !1 === this._trigger("beforeActivate", t, i) ||
          ((e.active = !o && this.tabs.index(s)),
          (this.active = n ? V() : s),
          this.xhr && this.xhr.abort(),
          r.length || a.length || V.error("jQuery UI Tabs: Mismatching fragment identifier."),
          a.length && this.load(this.tabs.index(s), t),
          this._toggle(t, i));
    },
    _toggle: function (t, e) {
      var i = this,
        s = e.newPanel,
        n = e.oldPanel;
      function o() {
        (i.running = !1), i._trigger("activate", t, e);
      }
      function a() {
        i._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
          s.length && i.options.show ? i._show(s, i.options.show, o) : (s.show(), o());
      }
      (this.running = !0),
        n.length && this.options.hide
          ? this._hide(n, this.options.hide, function () {
              i._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a();
            })
          : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n.hide(), a()),
        n.attr("aria-hidden", "true"),
        e.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
        s.length && n.length
          ? e.oldTab.attr("tabIndex", -1)
          : s.length &&
            this.tabs
              .filter(function () {
                return 0 === V(this).attr("tabIndex");
              })
              .attr("tabIndex", -1),
        s.attr("aria-hidden", "false"),
        e.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
    },
    _activate: function (t) {
      var t = this._findActive(t);
      t[0] !== this.active[0] &&
        ((t = (t = !t.length ? this.active : t).find(".ui-tabs-anchor")[0]),
        this._eventHandler({ target: t, currentTarget: t, preventDefault: V.noop }));
    },
    _findActive: function (t) {
      return !1 === t ? V() : this.tabs.eq(t);
    },
    _getIndex: function (t) {
      return (t = "string" == typeof t ? this.anchors.index(this.anchors.filter("[href$='" + V.escapeSelector(t) + "']")) : t);
    },
    _destroy: function () {
      this.xhr && this.xhr.abort(),
        this.tablist.removeAttr("role").off(this.eventNamespace),
        this.anchors.removeAttr("role tabIndex").removeUniqueId(),
        this.tabs.add(this.panels).each(function () {
          V.data(this, "ui-tabs-destroy")
            ? V(this).remove()
            : V(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
        }),
        this.tabs.each(function () {
          var t = V(this),
            e = t.data("ui-tabs-aria-controls");
          e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls");
        }),
        this.panels.show(),
        "content" !== this.options.heightStyle && this.panels.css("height", "");
    },
    enable: function (i) {
      var t = this.options.disabled;
      !1 !== t &&
        ((t =
          void 0 !== i &&
          ((i = this._getIndex(i)),
          Array.isArray(t)
            ? V.map(t, function (t) {
                return t !== i ? t : null;
              })
            : V.map(this.tabs, function (t, e) {
                return e !== i ? e : null;
              }))),
        this._setOptionDisabled(t));
    },
    disable: function (t) {
      var e = this.options.disabled;
      if (!0 !== e) {
        if (void 0 === t) e = !0;
        else {
          if (((t = this._getIndex(t)), -1 !== V.inArray(t, e))) return;
          e = Array.isArray(e) ? V.merge([t], e).sort() : [t];
        }
        this._setOptionDisabled(e);
      }
    },
    load: function (t, s) {
      t = this._getIndex(t);
      function n(t, e) {
        "abort" === e && o.panels.stop(!1, !0), o._removeClass(i, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === o.xhr && delete o.xhr;
      }
      var o = this,
        i = this.tabs.eq(t),
        t = i.find(".ui-tabs-anchor"),
        a = this._getPanelForTab(i),
        r = { tab: i, panel: a };
      this._isLocal(t[0]) ||
        ((this.xhr = V.ajax(this._ajaxSettings(t, s, r))),
        this.xhr &&
          "canceled" !== this.xhr.statusText &&
          (this._addClass(i, "ui-tabs-loading"),
          a.attr("aria-busy", "true"),
          this.xhr
            .done(function (t, e, i) {
              setTimeout(function () {
                a.html(t), o._trigger("load", s, r), n(i, e);
              }, 1);
            })
            .fail(function (t, e) {
              setTimeout(function () {
                n(t, e);
              }, 1);
            })));
    },
    _ajaxSettings: function (t, i, s) {
      var n = this;
      return {
        url: t.attr("href").replace(/#.*$/, ""),
        beforeSend: function (t, e) {
          return n._trigger("beforeLoad", i, V.extend({ jqXHR: t, ajaxSettings: e }, s));
        },
      };
    },
    _getPanelForTab: function (t) {
      t = V(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + t));
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.tabs", V.ui.tabs, {
        _processTabs: function () {
          this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        },
      });
  V.ui.tabs;
  V.widget("ui.tooltip", {
    version: "1.13.2",
    options: {
      classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
      content: function () {
        var t = V(this).attr("title");
        return V("<a>").text(t).html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" },
      show: !0,
      track: !1,
      close: null,
      open: null,
    },
    _addDescribedBy: function (t, e) {
      var i = (t.attr("aria-describedby") || "").split(/\s+/);
      i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", String.prototype.trim.call(i.join(" ")));
    },
    _removeDescribedBy: function (t) {
      var e = t.data("ui-tooltip-id"),
        i = (t.attr("aria-describedby") || "").split(/\s+/),
        e = V.inArray(e, i);
      -1 !== e && i.splice(e, 1),
        t.removeData("ui-tooltip-id"),
        (i = String.prototype.trim.call(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby");
    },
    _create: function () {
      this._on({ mouseover: "open", focusin: "open" }),
        (this.tooltips = {}),
        (this.parents = {}),
        (this.liveRegion = V("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body)),
        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
        (this.disabledTitles = V([]));
    },
    _setOption: function (t, e) {
      var i = this;
      this._super(t, e),
        "content" === t &&
          V.each(this.tooltips, function (t, e) {
            i._updateContent(e.element);
          });
    },
    _setOptionDisabled: function (t) {
      this[t ? "_disable" : "_enable"]();
    },
    _disable: function () {
      var s = this;
      V.each(this.tooltips, function (t, e) {
        var i = V.Event("blur");
        (i.target = i.currentTarget = e.element[0]), s.close(i, !0);
      }),
        (this.disabledTitles = this.disabledTitles.add(
          this.element
            .find(this.options.items)
            .addBack()
            .filter(function () {
              var t = V(this);
              if (t.is("[title]")) return t.data("ui-tooltip-title", t.attr("title")).removeAttr("title");
            })
        ));
    },
    _enable: function () {
      this.disabledTitles.each(function () {
        var t = V(this);
        t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"));
      }),
        (this.disabledTitles = V([]));
    },
    open: function (t) {
      var i = this,
        e = V(t ? t.target : this.element).closest(this.options.items);
      e.length &&
        !e.data("ui-tooltip-id") &&
        (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")),
        e.data("ui-tooltip-open", !0),
        t &&
          "mouseover" === t.type &&
          e.parents().each(function () {
            var t,
              e = V(this);
            e.data("ui-tooltip-open") && (((t = V.Event("blur")).target = t.currentTarget = this), i.close(t, !0)),
              e.attr("title") && (e.uniqueId(), (i.parents[this.id] = { element: this, title: e.attr("title") }), e.attr("title", ""));
          }),
        this._registerCloseHandlers(t, e),
        this._updateContent(e, t));
    },
    _updateContent: function (e, i) {
      var t = this.options.content,
        s = this,
        n = i ? i.type : null;
      if ("string" == typeof t || t.nodeType || t.jquery) return this._open(i, e, t);
      (t = t.call(e[0], function (t) {
        s._delay(function () {
          e.data("ui-tooltip-open") && (i && (i.type = n), this._open(i, e, t));
        });
      })) && this._open(i, e, t);
    },
    _open: function (t, e, i) {
      var s,
        n,
        o,
        a = V.extend({}, this.options.position);
      function r(t) {
        (a.of = t), n.is(":hidden") || n.position(a);
      }
      i &&
        ((s = this._find(e))
          ? s.tooltip.find(".ui-tooltip-content").html(i)
          : (e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")),
            (s = this._tooltip(e)),
            (n = s.tooltip),
            this._addDescribedBy(e, n.attr("id")),
            n.find(".ui-tooltip-content").html(i),
            this.liveRegion.children().hide(),
            (i = V("<div>").html(n.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),
            i.removeAttr("id").find("[id]").removeAttr("id"),
            i.appendTo(this.liveRegion),
            this.options.track && t && /^mouse/.test(t.type)
              ? (this._on(this.document, { mousemove: r }), r(t))
              : n.position(V.extend({ of: e }, this.options.position)),
            n.hide(),
            this._show(n, this.options.show),
            this.options.track &&
              this.options.show &&
              this.options.show.delay &&
              (o = this.delayedShow =
                setInterval(function () {
                  n.is(":visible") && (r(a.of), clearInterval(o));
                }, 13)),
            this._trigger("open", t, { tooltip: n })));
    },
    _registerCloseHandlers: function (t, e) {
      var i = {
        keyup: function (t) {
          t.keyCode === V.ui.keyCode.ESCAPE && (((t = V.Event(t)).currentTarget = e[0]), this.close(t, !0));
        },
      };
      e[0] !== this.element[0] &&
        (i.remove = function () {
          var t = this._find(e);
          t && this._removeTooltip(t.tooltip);
        }),
        (t && "mouseover" !== t.type) || (i.mouseleave = "close"),
        (t && "focusin" !== t.type) || (i.focusout = "close"),
        this._on(!0, e, i);
    },
    close: function (t) {
      var e,
        i = this,
        s = V(t ? t.currentTarget : this.element),
        n = this._find(s);
      n
        ? ((e = n.tooltip),
          n.closing ||
            (clearInterval(this.delayedShow),
            s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")),
            this._removeDescribedBy(s),
            (n.hiding = !0),
            e.stop(!0),
            this._hide(e, this.options.hide, function () {
              i._removeTooltip(V(this));
            }),
            s.removeData("ui-tooltip-open"),
            this._off(s, "mouseleave focusout keyup"),
            s[0] !== this.element[0] && this._off(s, "remove"),
            this._off(this.document, "mousemove"),
            t &&
              "mouseleave" === t.type &&
              V.each(this.parents, function (t, e) {
                V(e.element).attr("title", e.title), delete i.parents[t];
              }),
            (n.closing = !0),
            this._trigger("close", t, { tooltip: e }),
            n.hiding || (n.closing = !1)))
        : s.removeData("ui-tooltip-open");
    },
    _tooltip: function (t) {
      var e = V("<div>").attr("role", "tooltip"),
        i = V("<div>").appendTo(e),
        s = e.uniqueId().attr("id");
      return (
        this._addClass(i, "ui-tooltip-content"),
        this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"),
        e.appendTo(this._appendTo(t)),
        (this.tooltips[s] = { element: t, tooltip: e })
      );
    },
    _find: function (t) {
      t = t.data("ui-tooltip-id");
      return t ? this.tooltips[t] : null;
    },
    _removeTooltip: function (t) {
      clearInterval(this.delayedShow), t.remove(), delete this.tooltips[t.attr("id")];
    },
    _appendTo: function (t) {
      t = t.closest(".ui-front, dialog");
      return (t = !t.length ? this.document[0].body : t);
    },
    _destroy: function () {
      var s = this;
      V.each(this.tooltips, function (t, e) {
        var i = V.Event("blur"),
          e = e.element;
        (i.target = i.currentTarget = e[0]),
          s.close(i, !0),
          V("#" + t).remove(),
          e.data("ui-tooltip-title") && (e.attr("title") || e.attr("title", e.data("ui-tooltip-title")), e.removeData("ui-tooltip-title"));
      }),
        this.liveRegion.remove();
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.tooltip", V.ui.tooltip, {
        options: { tooltipClass: null },
        _tooltip: function () {
          var t = this._superApply(arguments);
          return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
        },
      });
  V.ui.tooltip;
});
(function ($) {
  $.fn.customCaretInput = function (options) {
    var settings = $.extend(
      {
        caretID: "caret",
        callback: null,
      },
      options
    );

    function getCaretPosition(input) {
      var caretPosition = 0;
      var sel = window.getSelection();

      if (sel.rangeCount > 0) {
        var range = sel.getRangeAt(0);
        var preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(input);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretPosition = preCaretRange.toString().length;
      }

      return caretPosition;
    }

    return this.each(function () {
      var $input = $(this);

      $input.on("keydown", function (event) {
        var caret = "<div id='" + settings.caretID + "'></div>";
        var caretPosition = getCaretPosition(this);
        var content = $input.val();
        var output = content.substr(0, caretPosition) + caret + content.substr(caretPosition);
        $input.next(".custom-caret-clone").remove();
        $('<div class="custom-caret-clone">' + output + "</div>").insertAfter($input);

        if ($.isFunction(settings.callback)) {
          settings.callback.call(this);
        }
      });

      $input.focusout(function () {
        $(this).next(".custom-caret-clone").remove();
      });
    });
  };
})(jQuery);
