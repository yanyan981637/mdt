function addGoogleMapJS() {
    var e = GOOGLE_MAP_API_JS;
    GOOGLE_MAP_API_KEY && (e += "&key=" + GOOGLE_MAP_API_KEY), document.write('<script src="' + e + '"></script>')
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(A, e) {
    "use strict";

    function v(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function u(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function t(e, n, r) {
        return he.isFunction(n) ? he.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? he.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? he.grep(e, function(e) {
            return -1 < ae.call(n, e) !== r
        }) : Ce.test(n) ? he.filter(n, e, r) : (n = he.filter(n, e), he.grep(e, function(e) {
            return -1 < ae.call(n, e) !== r && 1 === e.nodeType
        }))
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function l(e) {
        var n = {};
        return he.each(e.match(je) || [], function(e, t) {
            n[t] = !0
        }), n
    }

    function f(e) {
        return e
    }

    function p(e) {
        throw e
    }

    function s(e, t, n) {
        var r;
        try {
            e && he.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && he.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function r() {
        te.removeEventListener("DOMContentLoaded", r), A.removeEventListener("load", r), he.ready()
    }

    function i() {
        this.expando = he.expando + i.uid++
    }

    function o(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
    }

    function c(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Me, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = o(n)
                } catch (ne) {}
                Pe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function d(e, t, n, r) {
        var i, o = 1,
            a = 20,
            u = r ? function() {
                return r.cur()
            } : function() {
                return he.css(e, t, "")
            },
            s = u(),
            c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            l = (he.cssNumber[t] || "px" !== c && +s) && He.exec(he.css(e, t));
        if (l && l[3] !== c)
            for (c = c || l[3], n = n || [], l = +s || 1; l /= o = o || ".5", he.style(e, t, l + c), o !== (o = u() / s) && 1 !== o && --a;);
        return n && (l = +l || +s || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
    }

    function h(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = We[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = he.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), We[r] = i)
    }

    function m(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = qe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && $e(r) && (i[o] = h(r))) : "none" !== n && (i[o] = "none", qe.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function g(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, r = e.length; n < r; n++) qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"))
    }

    function b(e, t, n, r, i) {
        for (var o, a, u, s, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === he.type(o)) he.merge(p, o.nodeType ? [o] : o);
                else if (Ke.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), u = (ze.exec(o) || ["", ""])[1].toLowerCase(), s = Ve[u] || Ve._default, a.innerHTML = s[1] + he.htmlPrefilter(o) + s[2], l = s[0]; l--;) a = a.lastChild;
            he.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && -1 < he.inArray(o, r)) i && i.push(o);
            else if (c = he.contains(o.ownerDocument, o), a = g(f.appendChild(o), "script"), c && y(a), n)
            for (l = 0; o = a[l++];) Ue.test(o.type || "") && n.push(o);
        return f
    }

    function a() {
        return !0
    }

    function x() {
        return !1
    }

    function w() {
        try {
            return te.activeElement
        } catch (A) {}
    }

    function T(e, t, n, r, i, o) {
        var a, u;
        if ("object" == typeof t) {
            for (u in "string" != typeof n && (r = r || n, n = void 0), t) T(e, u, n, r, t[u], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = x;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return he().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = he.guid++)), e.each(function() {
            he.event.add(this, t, i, r, n)
        })
    }

    function C(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
    }

    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function S(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function k(e, t) {
        var n, r, i, o, a, u, s, c;
        if (1 === t.nodeType) {
            if (qe.hasData(e) && (o = qe.access(e), a = qe.set(t, o), c = o.events))
                for (i in delete a.handle, a.events = {}, c)
                    for (n = 0, r = c[i].length; n < r; n++) he.event.add(t, i, c[i][n]);
            Pe.hasData(e) && (u = Pe.access(e), s = he.extend({}, u), Pe.set(t, s))
        }
    }

    function _(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function j(n, r, i, o) {
        r = ie.apply([], r);
        var e, t, a, u, s, c, l = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = he.isFunction(d);
        if (h || 1 < f && "string" == typeof d && !pe.checkClone && rt.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), j(t, r, i, o)
        });
        if (f && (t = (e = b(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (u = (a = he.map(g(e, "script"), E)).length; l < f; l++) s = e, l !== p && (s = he.clone(s, !0, !0), u && he.merge(a, g(s, "script"))), i.call(n[l], s, l);
            if (u)
                for (c = a[a.length - 1].ownerDocument, he.map(a, S), l = 0; l < u; l++) s = a[l], Ue.test(s.type || "") && !qe.access(s, "globalEval") && he.contains(c, s) && (s.src ? he._evalUrl && he._evalUrl(s.src) : v(s.textContent.replace(ot, ""), c))
        }
        return n
    }

    function D(e, t, n) {
        for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(g(r)), r.parentNode && (n && he.contains(r.ownerDocument, r) && y(g(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function N(e, t, n) {
        var r, i, o, a, u = e.style;
        return (n = n || st(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && ut.test(a) && at.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function O(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function L(e) {
        if (e in dt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;)
            if ((e = pt[n] + t) in dt) return e
    }

    function q(e, t, n) {
        var r = He.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function P(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += he.css(e, n + Re[o], !0, i)), r ? ("content" === n && (a -= he.css(e, "padding" + Re[o], !0, i)), "margin" !== n && (a -= he.css(e, "border" + Re[o] + "Width", !0, i))) : (a += he.css(e, "padding" + Re[o], !0, i), "padding" !== n && (a += he.css(e, "border" + Re[o] + "Width", !0, i)));
        return a
    }

    function F(e, t, n) {
        var r, i = !0,
            o = st(e),
            a = "border-box" === he.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
            if (((r = N(e, t, o)) < 0 || null == r) && (r = e.style[t]), ut.test(r)) return r;
            i = a && (pe.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + P(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function M(e, t, n, r, i) {
        return new M.prototype.init(e, t, n, r, i)
    }

    function I() {
        vt && (A.requestAnimationFrame(I), he.fx.tick())
    }

    function H() {
        return A.setTimeout(function() {
            ht = void 0
        }), ht = he.now()
    }

    function R(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function $(e, t, n) {
        for (var r, i = (G.tweeners[t] || []).concat(G.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function B(e, t, n) {
        var r, i, o, a, u, s, c, l, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            v = e.nodeType && $e(e),
            g = qe.get(e, "fxshow");
        for (r in n.queue || (null == (a = he._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                a.unqueued || u()
            }), a.unqueued++, p.always(function() {
                p.always(function() {
                    a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
                })
            })), t)
            if (i = t[r], yt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    v = !0
                }
                d[r] = g && g[r] || he.style(e, r)
            } if ((s = !he.isEmptyObject(t)) || !he.isEmptyObject(d))
            for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = qe.get(e, "display")), "none" === (l = he.css(e, "display")) && (c ? l = c : (m([e], !0), c = e.style.display || c, l = he.css(e, "display"), m([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === he.css(e, "float") && (s || (p.done(function() {
                    h.display = c
                }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), s = !1, d) s || (g ? "hidden" in g && (v = g.hidden) : g = qe.access(e, "fxshow", {
                display: c
            }), o && (g.hidden = !v), v && m([e], !0), p.done(function() {
                for (r in v || m([e]), qe.remove(e, "fxshow"), d) he.style(e, r, d[r])
            })), s = $(v ? g[r] : 0, r, p), r in g || (g[r] = s.start, v && (s.end = s.start, s.start = 0))
    }

    function W(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (i = t[r = he.camelCase(n)], o = e[n], he.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = he.cssHooks[r]) && "expand" in a)
                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
            else t[r] = i
    }

    function G(o, e, t) {
        var n, a, r = 0,
            i = G.prefilters.length,
            u = he.Deferred().always(function() {
                delete s.elem
            }),
            s = function() {
                if (a) return !1;
                for (var e = ht || H(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), r = 0, i = c.tweens.length; r < i; r++) c.tweens[r].run(n);
                return u.notifyWith(o, [c, n, t]), n < 1 && i ? t : (u.resolveWith(o, [c]), !1)
            },
            c = u.promise({
                elem: o,
                props: he.extend({}, e),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ht || H(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = he.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (u.notifyWith(o, [c, 1, 0]), u.resolveWith(o, [c, e])) : u.rejectWith(o, [c, e]), this
                }
            }),
            l = c.props;
        for (W(l, c.opts.specialEasing); r < i; r++)
            if (n = G.prefilters[r].call(c, o, l, c.opts)) return he.isFunction(n.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(n.stop, n)), n;
        return he.map(l, $, c), he.isFunction(c.opts.start) && c.opts.start.call(o, c), he.fx.timer(he.extend(s, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function z(e) {
        return (e.match(je) || []).join(" ")
    }

    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function V(n, e, r, i) {
        var t;
        if (he.isArray(e)) he.each(e, function(e, t) {
            r || jt.test(n) ? i(n, t) : V(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== he.type(e)) i(n, e);
        else
            for (t in e) V(n + "[" + t + "]", e[t], r, i)
    }

    function Y(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(je) || [];
            if (he.isFunction(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function X(t, i, o, a) {
        function u(e) {
            var r;
            return s[e] = !0, he.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || c || s[n] ? c ? !(r = n) : void 0 : (i.dataTypes.unshift(n), u(n), !1)
            }), r
        }
        var s = {},
            c = t === $t;
        return u(i.dataTypes[0]) || !s["*"] && u("*")
    }

    function K(e, t) {
        var n, r, i = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && he.extend(!0, e, r), e
    }

    function Q(e, t, n) {
        for (var r, i, o, a, u = e.contents, s = e.dataTypes;
            "*" === s[0];) s.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in u)
                if (u[i] && u[i].test(r)) {
                    s.unshift(i);
                    break
                } if (s[0] in n) o = s[0];
        else {
            for (i in n) {
                if (!s[0] || e.converters[i + " " + s[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== s[0] && s.unshift(o), n[o]
    }

    function J(e, t, n, r) {
        var i, o, a, u, s, c = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = l.shift())
                if ("*" === o) o = s;
                else if ("*" !== s && s !== o) {
            if (!(a = c[s + " " + o] || c["* " + o]))
                for (i in c)
                    if ((u = i.split(" "))[1] === o && (a = c[s + " " + u[0]] || c["* " + u[0]])) {
                        !0 === a ? a = c[i] : !0 !== c[i] && (o = u[0], l.unshift(u[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (ce) {
                    return {
                        state: "parsererror",
                        error: a ? ce : "No conversion from " + s + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Z(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var ee = [],
        te = A.document,
        ne = Object.getPrototypeOf,
        re = ee.slice,
        ie = ee.concat,
        oe = ee.push,
        ae = ee.indexOf,
        ue = {},
        se = ue.toString,
        ce = ue.hasOwnProperty,
        le = ce.toString,
        fe = le.call(Object),
        pe = {},
        de = "3.1.1",
        he = function(e, t) {
            return new he.fn.init(e, t)
        },
        ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ge = /^-ms-/,
        me = /-([a-z])/g,
        ye = function(e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: de,
        constructor: he,
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(n) {
            return this.pushStack(he.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function(e) {
        var t, n, r, i, o, a, u = e || {},
            s = 1,
            c = arguments.length,
            l = !1;
        for ("boolean" == typeof u && (l = u, u = arguments[s] || {}, s++), "object" == typeof u || he.isFunction(u) || (u = {}), s === c && (u = this, s--); s < c; s++)
            if (null != (t = arguments[s]))
                for (n in t) r = u[n], u !== (i = t[n]) && (l && i && (he.isPlainObject(i) || (o = he.isArray(i))) ? (o ? (o = !1, a = r && he.isArray(r) ? r : []) : a = r && he.isPlainObject(r) ? r : {}, u[n] = he.extend(l, a, i)) : void 0 !== i && (u[n] = i));
        return u
    }, he.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== se.call(e) || (t = ne(e)) && ("function" != typeof(n = ce.call(t, "constructor") && t.constructor) || le.call(n) !== fe))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[se.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            v(e)
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(me, ye)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (u(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ve, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (u(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (u(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return ie.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return r = re.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(re.call(arguments)))
            }).guid = e.guid = e.guid || he.guid++, i
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function(n) {
        function x(e, t, n, r) {
            var i, o, a, u, s, c, l, f = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== L && O(t), t = t || L, P)) {
                if (11 !== p && (s = me.exec(e)))
                    if (i = s[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && H(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (s[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = s[3]) && T.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n
                    } if (T.qsa && !U[e + " "] && (!F || !F.test(e))) {
                    if (1 !== p) f = t, l = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(we, Te) : t.setAttribute("id", u = R), o = (c = S(e)).length; o--;) c[o] = "#" + u + " " + h(c[o]);
                        l = c.join(","), f = ye.test(e) && d(t.parentNode) || t
                    }
                    if (l) try {
                        return J.apply(n, f.querySelectorAll(l)), n
                    } catch (W) {} finally {
                        u === R && t.removeAttribute("id")
                    }
                }
            }
            return _(e.replace(ue, "$1"), t, n, r)
        }

        function e() {
            function n(e, t) {
                return r.push(e + " ") > A.cacheLength && delete n[r.shift()], n[e + " "] = t
            }
            var r = [];
            return n
        }

        function s(e) {
            return e[R] = !0, e
        }

        function i(e) {
            var t = L.createElement("fieldset");
            try {
                return !!e(t)
            } catch (T) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) A.attrHandle[n[r]] = t
        }

        function c(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function r(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function o(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function a(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ce(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function u(a) {
            return s(function(o) {
                return o = +o, s(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function l() {}

        function h(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function f(u, e, t) {
            var s = e.dir,
                c = e.next,
                l = c || s,
                f = t && "parentNode" === l,
                p = W++;
            return e.first ? function(e, t, n) {
                for (; e = e[s];)
                    if (1 === e.nodeType || f) return u(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [B, p];
                if (n) {
                    for (; e = e[s];)
                        if ((1 === e.nodeType || f) && u(e, t, n)) return !0
                } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || f)
                            if (i = (o = e[R] || (e[R] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[s] || e;
                            else {
                                if ((r = i[l]) && r[0] === B && r[1] === p) return a[2] = r[2];
                                if ((i[l] = a)[2] = u(e, t, n)) return !0
                            } return !1
            }
        }

        function p(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function y(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) x(e, t[r], n);
            return n
        }

        function w(e, t, n, r, i) {
            for (var o, a = [], u = 0, s = e.length, c = null != t; u < s; u++)(o = e[u]) && (n && !n(o, r, i) || (a.push(o), c && t.push(u)));
            return a
        }

        function b(d, h, v, g, m, e) {
            return g && !g[R] && (g = b(g)), m && !m[R] && (m = b(m, e)), s(function(e, t, n, r) {
                var i, o, a, u = [],
                    s = [],
                    c = t.length,
                    l = e || y(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? l : w(l, u, d, n, r),
                    p = v ? m || (e ? d : c || g) ? [] : t : f;
                if (v && v(f, p, n, r), g)
                    for (i = w(p, s), g(i, [], n, r), o = i.length; o--;)(a = i[o]) && (p[s[o]] = !(f[s[o]] = a));
                if (e) {
                    if (m || d) {
                        if (m) {
                            for (i = [], o = p.length; o--;)(a = p[o]) && i.push(f[o] = a);
                            m(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(a = p[o]) && -1 < (i = m ? ee(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = w(p === t ? p.splice(c, p.length) : p), m ? m(null, t, p, r) : J.apply(t, p)
            })
        }

        function v(e) {
            for (var i, t, n, r = e.length, o = A.relative[e[0].type], a = o || A.relative[" "], u = o ? 1 : 0, s = f(function(e) {
                    return e === i
                }, a, !0), c = f(function(e) {
                    return -1 < ee(i, e)
                }, a, !0), l = [function(e, t, n) {
                    var r = !o && (n || t !== j) || ((i = t).nodeType ? s(e, t, n) : c(e, t, n));
                    return i = null, r
                }]; u < r; u++)
                if (t = A.relative[e[u].type]) l = [f(p(l), t)];
                else {
                    if ((t = A.filter[e[u].type].apply(null, e[u].matches))[R]) {
                        for (n = ++u; n < r && !A.relative[e[n].type]; n++);
                        return b(1 < u && p(l), 1 < u && h(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(ue, "$1"), t, u < n && v(e.slice(u, n)), n < r && v(e = e.slice(n)), n < r && h(e))
                    }
                    l.push(t)
                } return p(l)
        }

        function g(g, m) {
            var y = 0 < m.length,
                b = 0 < g.length,
                e = function(e, t, n, r, i) {
                    var o, a, u, s = 0,
                        c = "0",
                        l = e && [],
                        f = [],
                        p = j,
                        d = e || b && A.find.TAG("*", i),
                        h = B += null == p ? 1 : Math.random() || .1,
                        v = d.length;
                    for (i && (j = t === L || t || i); c !== v && null != (o = d[c]); c++) {
                        if (b && o) {
                            for (a = 0, t || o.ownerDocument === L || (O(o), n = !P); u = g[a++];)
                                if (u(o, t || L, n)) {
                                    r.push(o);
                                    break
                                } i && (B = h)
                        }
                        y && ((o = !u && o) && s--, e && l.push(o))
                    }
                    if (s += c, y && c !== s) {
                        for (a = 0; u = m[a++];) u(l, f, t, n);
                        if (e) {
                            if (0 < s)
                                for (; c--;) l[c] || f[c] || (f[c] = K.call(r));
                            f = w(f)
                        }
                        J.apply(r, f), i && !e && 0 < f.length && 1 < s + m.length && x.uniqueSort(r)
                    }
                    return i && (B = h, j = p), l
                };
            return y ? s(e) : e
        }
        var m, T, A, C, E, S, k, _, j, D, N, O, L, q, P, F, M, I, H, R = "sizzle" + 1 * new Date,
            $ = n.document,
            B = 0,
            W = 0,
            G = e(),
            z = e(),
            U = e(),
            V = function(e, t) {
                return e === t && (N = !0), 0
            },
            Y = {}.hasOwnProperty,
            X = [],
            K = X.pop,
            Q = X.push,
            J = X.push,
            Z = X.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            se = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            pe = new RegExp("^" + re + "$"),
            de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ae = function() {
                O()
            },
            Ce = f(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(X = Z.call($.childNodes), $.childNodes), X[$.childNodes.length].nodeType
        } catch (We) {
            J = {
                apply: X.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        for (m in T = x.support = {}, E = x.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, O = x.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : $;
                return r !== L && 9 === r.nodeType && r.documentElement && (q = (L = r).documentElement, P = !E(L), $ !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ae, !1) : n.attachEvent && n.attachEvent("onunload", Ae)), T.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), T.getElementsByTagName = i(function(e) {
                    return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
                }), T.getElementsByClassName = ge.test(L.getElementsByClassName), T.getById = i(function(e) {
                    return q.appendChild(e).id = R, !L.getElementsByName || !L.getElementsByName(R).length
                }), T.getById ? (A.filter.ID = function(e) {
                    var t = e.replace(be, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, A.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (A.filter.ID = function(e) {
                    var n = e.replace(be, xe);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, A.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), A.find.TAG = T.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, A.find.CLASS = T.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && P) return t.getElementsByClassName(e)
                }, M = [], F = [], (T.qsa = ge.test(L.querySelectorAll)) && (i(function(e) {
                    q.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || F.push(".#.+[+~]")
                }), i(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = L.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), q.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (T.matchesSelector = ge.test(I = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                    T.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), M.push("!=", oe)
                }), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(q.compareDocumentPosition), H = t || ge.test(q.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, V = t ? function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === $ && H($, e) ? -1 : t === L || t.ownerDocument === $ && H($, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        u = [t];
                    if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (i === o) return c(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; a[r] === u[r];) r++;
                    return r ? c(a[r], u[r]) : a[r] === $ ? -1 : u[r] === $ ? 1 : 0
                }), L
            }, x.matches = function(e, t) {
                return x(e, null, null, t)
            }, x.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== L && O(e), t = t.replace(le, "='$1']"), T.matchesSelector && P && !U[t + " "] && (!M || !M.test(t)) && (!F || !F.test(t))) try {
                    var n = I.call(e, t);
                    if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (C) {}
                return 0 < x(t, L, null, [e]).length
            }, x.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && O(e), H(e, t)
            }, x.attr = function(e, t) {
                (e.ownerDocument || e) !== L && O(e);
                var n = A.attrHandle[t.toLowerCase()],
                    r = n && Y.call(A.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== r ? r : T.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, x.escape = function(e) {
                return (e + "").replace(we, Te)
            }, x.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, x.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (N = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(V), N) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return D = null, e
            }, C = x.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += C(t);
                return n
            }, (A = x.selectors = {
                cacheLength: 50,
                createPseudo: s,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = G[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && G(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = x.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, v, g) {
                        var m = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === v && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, u, s, c = m !== y ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                p = !n && !b,
                                d = !1;
                            if (l) {
                                if (m) {
                                    for (; c;) {
                                        for (a = e; a = a[c];)
                                            if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        s = c = "only" === h && !s && "nextSibling"
                                    }
                                    return !0
                                }
                                if (s = [y ? l.firstChild : l.lastChild], y && p) {
                                    for (d = (u = (r = (i = (o = (a = l)[R] || (a[R] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === B && r[1]) && r[2], a = u && l.childNodes[u]; a = ++u && a && a[c] || (d = u = 0) || s.pop();)
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [B, u, d];
                                            break
                                        }
                                } else if (p && (d = u = (r = (i = (o = (a = e)[R] || (a[R] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === B && r[1]), !1 === d)
                                    for (;
                                        (a = ++u && a && a[c] || (d = u = 0) || s.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[R] || (a[R] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [B, d]), a !== e)););
                                return (d -= g) === v || d % v == 0 && 0 <= d / v
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = A.pseudos[e] || A.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                        return a[R] ? a(o) : 1 < a.length ? (t = [e, e, "", o], A.setFilters.hasOwnProperty(e.toLowerCase()) ? s(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = ee(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: s(function(e) {
                        var r = [],
                            i = [],
                            u = k(e.replace(ue, "$1"));
                        return u[R] ? s(function(e, t, n, r) {
                            for (var i, o = u(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, u(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: s(function(t) {
                        return function(e) {
                            return 0 < x(t, e).length
                        }
                    }),
                    contains: s(function(t) {
                        return t = t.replace(be, xe),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || C(e)).indexOf(t)
                            }
                    }),
                    lang: s(function(n) {
                        return pe.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(be, xe).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === q
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: a(!1),
                    disabled: a(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !A.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ve.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = A.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) A.pseudos[m] = r(m);
        for (m in {
                submit: !0,
                reset: !0
            }) A.pseudos[m] = o(m);
        return l.prototype = A.filters = A.pseudos, A.setFilters = new l, S = x.tokenize = function(e, t) {
            var n, r, i, o, a, u, s, c = z[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], s = A.preFilter; a;) {
                for (o in n && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(i = [])), n = !1, (r = ce.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(ue, " ")
                    }), a = a.slice(n.length)), A.filter) !(r = de[o].exec(a)) || s[o] && !(r = s[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? x.error(e) : z(e, u).slice(0)
        }, k = x.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;)(o = v(t[n]))[R] ? r.push(o) : i.push(o);
                (o = U(e, g(i, r))).selector = e
            }
            return o
        }, _ = x.select = function(e, t, n, r) {
            var i, o, a, u, s, c = "function" == typeof e && e,
                l = !r && S(e = c.selector || e);
            if (n = n || [], 1 === l.length) {
                if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && P && A.relative[o[1].type]) {
                    if (!(t = (A.find.ID(a.matches[0].replace(be, xe), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !A.relative[u = a.type]);)
                    if ((s = A.find[u]) && (r = s(a.matches[0].replace(be, xe), ye.test(o[0].type) && d(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && h(o))) return J.apply(n, r), n;
                        break
                    }
            }
            return (c || k(e, l))(r, t, !P, n, !t || ye.test(e) && d(t.parentNode) || t), n
        }, T.sortStable = R.split("").sort(V).join("") === R, T.detectDuplicates = !!N, O(), T.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(te, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), x
    }(A);
    he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
    var xe = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && he(e).is(n)) break;
                    r.push(e)
                } return r
        },
        we = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Te = he.expr.match.needsContext,
        Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ce = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (he.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
            return 1 < r ? he.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
        }
    });
    var Ee, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Ee, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Se.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ae.test(r[1]) && he.isPlainObject(t))
                    for (r in t) he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = te.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, Ee = he(te);
    var ke = /^(?:parents|prev(?:Until|All))/,
        _e = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && he(e);
            if (!Te.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? he.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || he.merge([], e.childNodes)
        }
    }, function(r, i) {
        he.fn[r] = function(e, t) {
            var n = he.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = he.filter(t, n)), 1 < this.length && (_e[r] || he.uniqueSort(n), ke.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var je = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(r) {
        r = "string" == typeof r ? l(r) : he.extend({}, r);
        var i, e, t, n, o = [],
            a = [],
            u = -1,
            s = function() {
                for (n = r.once, t = i = !0; a.length; u = -1)
                    for (e = a.shift(); ++u < o.length;) !1 === o[u].apply(e[0], e[1]) && r.stopOnFalse && (u = o.length, e = !1);
                r.memory || (e = !1), i = !1, n && (o = e ? [] : "")
            },
            c = {
                add: function() {
                    return o && (e && !i && (u = o.length - 1, a.push(e)), function n(e) {
                        he.each(e, function(e, t) {
                            he.isFunction(t) ? r.unique && c.has(t) || o.push(t) : t && t.length && "string" !== he.type(t) && n(t)
                        })
                    }(arguments), e && !i && s()), this
                },
                remove: function() {
                    return he.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = he.inArray(t, o, n));) o.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < he.inArray(e, o) : 0 < o.length
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return n = a = [], o = e = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return n = a = [], e || i || (o = e = ""), this
                },
                locked: function() {
                    return !!n
                },
                fireWith: function(e, t) {
                    return n || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), i || s()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return c
    }, he.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                    ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return u.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return he.Deferred(function(r) {
                            he.each(o, function(e, t) {
                                var n = he.isFunction(i[t[4]]) && i[t[4]];
                                u[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        function s(i, o, a, u) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < c)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(t) ? u ? t.call(e, s(c, o, f, u), s(c, o, p, u)) : (c++, t.call(e, s(c, o, f, u), s(c, o, p, u), s(c, o, f, o.notifyWith))) : (a !== f && (n = void 0, r = [e]), (u || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = u ? e : function() {
                                        try {
                                            e()
                                        } catch (A) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(A, t.stackTrace), c <= i + 1 && (a !== p && (n = void 0, r = [A]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (he.Deferred.getStackHook && (t.stackTrace = he.Deferred.getStackHook()), A.setTimeout(t))
                            }
                        }
                        var c = 0;
                        return he.Deferred(function(e) {
                            o[0][3].add(s(0, e, he.isFunction(r) ? r : f, e.notifyWith)), o[1][3].add(s(0, e, he.isFunction(t) ? t : f)), o[2][3].add(s(0, e, he.isFunction(n) ? n : p))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? he.extend(e, a) : a
                    }
                },
                u = {};
            return he.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[0][2].lock), n.add(t[3].fire), u[t[0]] = function() {
                    return u[t[0] + "With"](this === u ? void 0 : this, arguments), this
                }, u[t[0] + "With"] = n.fireWith
            }), a.promise(u), e && e.call(u, u), u
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = re.call(arguments),
                o = he.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? re.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (s(e, o.done(a(t)).resolve, o.reject), "pending" === o.state() || he.isFunction(i[t] && i[t].then))) return o.then();
            for (; t--;) s(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(e, t) {
        A.console && A.console.warn && e && De.test(e.name) && A.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, he.readyException = function(e) {
        A.setTimeout(function() {
            throw e
        })
    };
    var Ne = he.Deferred();
    he.fn.ready = function(e) {
        return Ne.then(e)["catch"](function(e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? he.readyWait++ : he.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || ((he.isReady = !0) !== e && 0 < --he.readyWait || Ne.resolveWith(te, [he]))
        }
    }), he.ready.then = Ne.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? A.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", r), A.addEventListener("load", r));
    var Oe = function(e, t, n, r, i, o, a) {
            var u = 0,
                s = e.length,
                c = null == n;
            if ("object" === he.type(n))
                for (u in i = !0, n) Oe(e, t, u, n[u], !0, o, a);
            else if (void 0 !== r && (i = !0, he.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(he(e), n)
                })), t))
                for (; u < s; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
            return i ? e : c ? t.call(e) : s ? t(e[0], n) : o
        },
        Le = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    i.uid = 1, i.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[he.camelCase(t)] = n;
            else
                for (r in t) i[he.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    he.isArray(t) ? t = t.map(he.camelCase) : t = (t = he.camelCase(t)) in r ? [t] : t.match(je) || [], n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var qe = new i,
        Pe = new i,
        Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return Pe.hasData(e) || qe.hasData(e)
        },
        data: function(e, t, n) {
            return Pe.access(e, t, n)
        },
        removeData: function(e, t) {
            Pe.remove(e, t)
        },
        _data: function(e, t, n) {
            return qe.access(e, t, n)
        },
        _removeData: function(e, t) {
            qe.remove(e, t)
        }
    }), he.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Pe.get(o), 1 === o.nodeType && !qe.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--;) a[t] && (0 === (r = a[t].name).indexOf("data-") && (r = he.camelCase(r.slice(5)), c(o, r, i[r])));
                    qe.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Pe.set(this, n)
            }) : Oe(this, function(e) {
                var t;
                if (o && void 0 === e) {
                    if (void 0 !== (t = Pe.get(o, n))) return t;
                    if (void 0 !== (t = c(o, n))) return t
                } else this.each(function() {
                    Pe.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Pe.remove(this, e)
            })
        }
    }), he.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = qe.get(e, t), n && (!r || he.isArray(n) ? r = qe.access(e, t, he.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = he._queueHooks(e, t),
                a = function() {
                    he.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return qe.get(e, n) || qe.access(e, n, {
                empty: he.Callbacks("once memory").add(function() {
                    qe.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? he.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = he.queue(this, t, n);
                he._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && he.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = he.Deferred(),
                o = this,
                a = this.length,
                u = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = qe.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        He = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
        Re = ["Top", "Right", "Bottom", "Left"],
        $e = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        },
        Be = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        },
        We = {};
    he.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $e(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var Ge = /^(?:checkbox|radio)$/i,
        ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Ye, Xe, Ke = /<|&#?\w+;/;
    Ye = te.createDocumentFragment().appendChild(te.createElement("div")), (Xe = te.createElement("input")).setAttribute("type", "radio"), Xe.setAttribute("checked", "checked"), Xe.setAttribute("name", "t"), Ye.appendChild(Xe), pe.checkClone = Ye.cloneNode(!0).cloneNode(!0).lastChild.checked, Ye.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!Ye.cloneNode(!0).lastChild.defaultValue;
    var Qe = te.documentElement,
        Je = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, u, s, c, l, f, p, d, h, v, g = qe.get(t);
            if (g)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && he.find.matchesSelector(Qe, i), n.guid || (n.guid = he.guid++), (s = g.events) || (s = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                        return void 0 !== he && he.event.triggered !== e.type ? he.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(je) || [""]).length; c--;) d = v = (u = et.exec(e[c]) || [])[1], h = (u[2] || "").split(".").sort(), d && (f = he.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = he.event.special[d] || {}, l = he.extend({
                    type: d,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && he.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = s[d]) || ((p = s[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), he.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, u, s, c, l, f, p, d, h, v, g = qe.hasData(e) && qe.get(e);
            if (g && (s = g.events)) {
                for (c = (t = (t || "").match(je) || [""]).length; c--;)
                    if (d = v = (u = et.exec(t[c]) || [])[1], h = (u[2] || "").split(".").sort(), d) {
                        for (f = he.event.special[d] || {}, p = s[d = (r ? f.delegateType : f.bindType) || d] || [], u = u[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) l = p[o], !i && v !== l.origType || n && n.guid !== l.guid || u && !u.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || he.removeEvent(e, d, g.handle), delete s[d])
                    } else
                        for (d in s) he.event.remove(e, d + t[c], n, r, !0);
                he.isEmptyObject(s) && qe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, u = he.event.fix(e),
                s = new Array(arguments.length),
                c = (qe.get(this, "events") || {})[u.type] || [],
                l = he.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                for (a = he.event.handlers.call(this, u, c), t = 0;
                    (i = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, u = [],
                s = t.delegateCount,
                c = e.target;
            if (s && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < s; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < he(i, this).index(c) : he.find(i, this, null, [c]).length), a[i] && o.push(r);
                        o.length && u.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, s < t.length && u.push({
                elem: c,
                handlers: t.slice(s)
            }), u
        },
        addProp: function(t, e) {
            Object.defineProperty(he.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return he.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function(e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? a : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = a, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = a, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = a, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
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
        "char": !0,
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        he.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this,
                    r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === n || he.contains(n, r)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), he.fn.extend({
        on: function(e, t, n, r) {
            return T(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return T(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = x), this.each(function() {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, u = e.cloneNode(!0),
                s = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (a = g(u), r = 0, i = (o = g(e)).length; r < i; r++) _(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || g(e), a = a || g(u), r = 0, i = o.length; r < i; r++) k(o[r], a[r]);
                else k(e, u);
            return 0 < (a = g(u, "script")).length && y(a, !s && g(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Le(n)) {
                    if (t = n[qe.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                        n[qe.expando] = void 0
                    }
                    n[Pe.expando] && (n[Pe.expando] = void 0)
                }
        }
    }), he.fn.extend({
        detach: function(e) {
            return D(this, e, !0)
        },
        remove: function(e) {
            return D(this, e)
        },
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return j(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || C(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t)
            })
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !nt.test(e) && !Ve[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (ne) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return j(this, arguments, function(e) {
                var t = this.parentNode;
                he.inArray(this, n) < 0 && (he.cleanData(g(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        he.fn[e] = function(e) {
            for (var t, n = [], r = he(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), he(r[o])[a](t), oe.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var at = /^margin/,
        ut = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
        st = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = A), t.getComputedStyle(e)
        };
    ! function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(o);
                var e = A.getComputedStyle(a);
                t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Qe.removeChild(o), a = null
            }
        }
        var t, n, r, i, o = te.createElement("div"),
            a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), he.extend(pe, {
            pixelPosition: function() {
                return e(), t
            },
            boxSizingReliable: function() {
                return e(), n
            },
            pixelMarginRight: function() {
                return e(), r
            },
            reliableMarginLeft: function() {
                return e(), i
            }
        }))
    }();
    var ct = /^(none|table(?!-c[ea]).+)/,
        lt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ft = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pt = ["Webkit", "Moz", "ms"],
        dt = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = N(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, u = he.camelCase(t),
                    s = e.style;
                return t = he.cssProps[u] || (he.cssProps[u] = L(u) || u), a = he.cssHooks[t] || he.cssHooks[u], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : s[t] : ("string" === (o = typeof n) && (i = He.exec(n)) && i[1] && (n = d(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (he.cssNumber[u] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, u = he.camelCase(t);
            return t = he.cssProps[u] || (he.cssProps[u] = L(u) || u), (a = he.cssHooks[t] || he.cssHooks[u]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = N(e, t, r)), "normal" === i && t in ft && (i = ft[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), he.each(["height", "width"], function(e, a) {
        he.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !ct.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, a, n) : Be(e, lt, function() {
                    return F(e, a, n)
                })
            },
            set: function(e, t, n) {
                var r, i = n && st(e),
                    o = n && P(e, a, n, "border-box" === he.css(e, "boxSizing", !1, i), i);
                return o && (r = He.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = he.css(e, a)), q(e, t, o)
            }
        }
    }), he.cssHooks.marginLeft = O(pe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        he.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, at.test(i) || (he.cssHooks[i + o].set = q)
    }), he.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (he.isArray(t)) {
                    for (r = st(e), i = t.length; a < i; a++) o[t[a]] = he.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), (he.Tween = M).prototype = {
        constructor: M,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (he.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = M.prototype.init, he.fx.step = {};
    var ht, vt, gt, mt, yt = /^(?:toggle|show|hide)$/,
        bt = /queueHooks$/;
    he.Animation = he.extend(G, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return d(n.elem, e, He.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(t)
        },
        prefilters: [B],
        prefilter: function(e, t) {
            t ? G.prefilters.unshift(e) : G.prefilters.push(e)
        }
    }), he.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return he.fx.off || te.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            he.isFunction(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue)
        }, r
    }, he.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter($e).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = he.isEmptyObject(t),
                o = he.speed(e, n, r),
                a = function() {
                    var e = G(this, he.extend({}, t), o);
                    (i || qe.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = he.timers,
                    r = qe.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && bt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || he.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = qe.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = he.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, he.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), he.each(["toggle", "show", "hide"], function(e, r) {
        var i = he.fn[r];
        he.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(R(r, !0), e, t, n)
        }
    }), he.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        he.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), he.timers = [], he.fx.tick = function() {
        var e, t = 0,
            n = he.timers;
        for (ht = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(), ht = void 0
    }, he.fx.timer = function(e) {
        he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
    }, he.fx.interval = 13, he.fx.start = function() {
        vt || (vt = A.requestAnimationFrame ? A.requestAnimationFrame(I) : A.setInterval(he.fx.tick, he.fx.interval))
    }, he.fx.stop = function() {
        A.cancelAnimationFrame ? A.cancelAnimationFrame(vt) : A.clearInterval(vt), vt = null
    }, he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, he.fn.delay = function(r, e) {
        return r = he.fx && he.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = A.setTimeout(e, r);
            t.stop = function() {
                A.clearTimeout(n)
            }
        })
    }, gt = te.createElement("input"), mt = te.createElement("select").appendChild(te.createElement("option")), gt.type = "checkbox", pe.checkOn = "" !== gt.value, pe.optSelected = mt.selected, (gt = te.createElement("input")).value = "t", gt.type = "radio", pe.radioValue = "t" === gt.value;
    var xt, wt = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return Oe(this, he.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? xt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = he.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(je);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), xt = {
        set: function(e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = wt[t] || he.find.attr;
        wt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = wt[o], wt[o] = r, r = null != a(e, t, n) ? o : null, wt[o] = i), r
        }
    });
    var Tt = /^(?:input|select|textarea|button)$/i,
        At = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return Oe(this, he.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), pe.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, u, s = 0;
            if (he.isFunction(t)) return this.each(function(e) {
                he(this).addClass(t.call(this, e, U(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(je) || []; n = this[s++];)
                    if (i = U(n), r = 1 === n.nodeType && " " + z(i) + " ") {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (u = z(r)) && n.setAttribute("class", u)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, u, s = 0;
            if (he.isFunction(t)) return this.each(function(e) {
                he(this).removeClass(t.call(this, e, U(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(je) || []; n = this[s++];)
                    if (i = U(n), r = 1 === n.nodeType && " " + z(i) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (u = z(r)) && n.setAttribute("class", u)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : he.isFunction(i) ? this.each(function(e) {
                he(this).toggleClass(i.call(this, e, U(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o)
                    for (t = 0, n = he(this), r = i.match(je) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = U(this)) && qe.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : qe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + z(U(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    he.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = he.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, he(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : he.isArray(t) && (t = he.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = he.valHooks[t.type] || he.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(Ct, "") : null == e ? "" : e : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : z(he.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        u = a ? null : [],
                        s = a ? o + 1 : i.length;
                    for (r = o < 0 ? s : a ? o : 0; r < s; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), a) return t;
                            u.push(t)
                        } return u
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < he.inArray(he.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), he.each(["radio", "checkbox"], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (he.isArray(t)) return e.checked = -1 < he.inArray(he(e).val(), t)
            }
        }, pe.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, u, s, c, l, f = [n || te],
                p = ce.call(e, "type") ? e.type : e,
                d = ce.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = n = n || te, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(p + he.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), s = p.indexOf(":") < 0 && "on" + p, (e = e[he.expando] ? e : new he.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : he.makeArray(t, [e]), l = he.event.special[p] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !he.isWindow(n)) {
                    for (u = l.delegateType || p, Et.test(u + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                    a === (n.ownerDocument || te) && f.push(a.defaultView || a.parentWindow || A)
                }
                for (i = 0;
                    (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? u : l.bindType || p, (c = (qe.get(o, "events") || {})[e.type] && qe.get(o, "handle")) && c.apply(o, t), (c = s && o[s]) && c.apply && Le(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !Le(n) || s && he.isFunction(n[p]) && !he.isWindow(n) && ((a = n[s]) && (n[s] = null), n[he.event.triggered = p](), he.event.triggered = void 0, a && (n[s] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(r, null, t)
        }
    }), he.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        he.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in A, pe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            he.event.simulate(r, e.target, he.event.fix(e))
        };
        he.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = qe.access(e, r);
                t || e.addEventListener(n, i, !0), qe.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = qe.access(e, r) - 1;
                t ? qe.access(e, r, t) : (e.removeEventListener(n, i, !0), qe.remove(e, r))
            }
        }
    });
    var St = A.location,
        kt = he.now(),
        _t = /\?/;
    he.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new A.DOMParser).parseFromString(e, "text/xml")
        } catch (te) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + e), t
    };
    var jt = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = he.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) V(n, e[n], t, i);
        return r.join("&")
    }, he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Ot.test(this.nodeName) && !Nt.test(e) && (this.checked || !Ge.test(e))
            }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        qt = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Rt = {},
        $t = {},
        Bt = "*/".concat("*"),
        Wt = te.createElement("a");
    Wt.href = St.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: Mt.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, he.ajaxSettings), t) : K(he.ajaxSettings, e)
        },
        ajaxPrefilter: Y(Rt),
        ajaxTransport: Y($t),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, o, a, u, s, c = t;
                h || (h = !0, d && A.clearTimeout(d), l = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (u = Q(g, T, n)), u = J(g, u, T, i), i ? (g.ifModified && ((s = T.getResponseHeader("Last-Modified")) && (he.lastModified[f] = s), (s = T.getResponseHeader("etag")) && (he.etag[f] = s)), 204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = u.state, o = u.data, i = !(a = u.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || c) + "", i ? b.resolveWith(m, [o, c, T]) : b.rejectWith(m, [T, c, a]), T.statusCode(w), w = void 0, v && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : a]), x.fireWith(m, [T, c]), v && (y.trigger("ajaxComplete", [T, g]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var l, f, p, r, d, i, h, v, o, a, g = he.ajaxSetup({}, t),
                m = g.context || g,
                y = g.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                b = he.Deferred(),
                x = he.Callbacks("once memory"),
                w = g.statusCode || {},
                u = {},
                s = {},
                c = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!r)
                                for (r = {}; t = Ft.exec(p);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, u[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || c;
                        return l && l.abort(t), n(0, t), this
                    }
                };
            if (b.promise(T), g.url = ((e || g.url || St.href) + "").replace(Ht, St.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(je) || [""], null == g.crossDomain) {
                i = te.createElement("a");
                try {
                    i.href = g.url, i.href = i.href, g.crossDomain = Wt.protocol + "//" + Wt.host != i.protocol + "//" + i.host
                } catch (we) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = he.param(g.data, g.traditional)), X(Rt, g, t, T), h) return T;
            for (o in (v = he.event && g.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !It.test(g.type), f = g.url.replace(qt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Lt, "+")) : (a = g.url.slice(f.length), g.data && (f += (_t.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (f = f.replace(Pt, "$1"), a = (_t.test(f) ? "&" : "?") + "_=" + kt++ + a), g.url = f + a), g.ifModified && (he.lastModified[f] && T.setRequestHeader("If-Modified-Since", he.lastModified[f]), he.etag[f] && T.setRequestHeader("If-None-Match", he.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(o, g.headers[o]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, T, g) || h)) return T.abort();
            if (c = "abort", x.add(g.complete), T.done(g.success), T.fail(g.error), l = X($t, g, t, T)) {
                if (T.readyState = 1, v && y.trigger("ajaxSend", [T, g]), h) return T;
                g.async && 0 < g.timeout && (d = A.setTimeout(function() {
                    T.abort("timeout")
                }, g.timeout));
                try {
                    h = !1, l.send(u, n)
                } catch (we) {
                    if (h) throw we;
                    n(-1, we)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function(e, i) {
        he[i] = function(e, t, n, r) {
            return he.isFunction(t) && (r = r || n, n = t, t = void 0), he.ajax(he.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, he.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return he.isFunction(n) ? this.each(function(e) {
                he(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = he(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = he.isFunction(t);
            return this.each(function(e) {
                he(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function() {
        try {
            return new A.XMLHttpRequest
        } catch (e) {}
    };
    var Gt = {
            0: 200,
            1223: 204
        },
        zt = he.ajaxSettings.xhr();
    pe.cors = !!zt && "withCredentials" in zt, pe.ajax = zt = !!zt, he.ajaxTransport(function(i) {
        var o, a;
        if (pe.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Gt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && A.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (ae) {
                    if (o) throw ae
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), he.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = he("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), te.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Vt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || he.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = he.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || he.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = A[r], A[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? he(A).removeProp(r) : A[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Vt.push(r)), o && he.isFunction(i) && i(o[0]), o = i = void 0
        }), "script"
    }), pe.createHTMLDocument = ((Ut = te.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), he.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (pe.createHTMLDocument ? ((r = (t = te.implementation.createHTMLDocument("")).createElement("base")).href = te.location.href, t.head.appendChild(r)) : t = te), o = !n && [], (i = Ae.exec(e)) ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes)));
        var r, i, o
    }, he.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            u = e.indexOf(" ");
        return -1 < u && (r = z(e.slice(u)), e = e.slice(0, u)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && he.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function(t) {
        return he.grep(he.timers, function(e) {
            return t === e.elem
        }).length
    }, he.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, u, s, c = he.css(e, "position"),
                l = he(e),
                f = {};
            "static" === c && (e.style.position = "relative"), u = l.offset(), o = he.css(e, "top"), s = he.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + s).indexOf("auto") ? (a = (r = l.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, u))), null != t.top && (f.top = t.top - u.top + a), null != t.left && (f.left = t.left - u.left + i), "using" in t ? t.using.call(e, f) : l.css(f)
        }
    }, he.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                he.offset.setOffset(this, t, e)
            });
            var e, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect()).width || r.height ? (n = Z(i = o.ownerDocument), e = i.documentElement, {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + he.css(e[0], "borderTopWidth", !0),
                    left: r.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - he.css(n, "marginTop", !0),
                    left: t.left - r.left - he.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Qe
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        he.fn[t] = function(e) {
            return Oe(this, function(e, t, n) {
                var r = Z(e);
                return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), he.each(["top", "left"], function(e, n) {
        he.cssHooks[n] = O(pe.pixelPosition, function(e, t) {
            if (t) return t = N(e, n), ut.test(t) ? he(e).position()[n] + "px" : t
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function(a, u) {
        he.each({
            padding: "inner" + a,
            content: u,
            "": "outer" + a
        }, function(r, o) {
            he.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return Oe(this, function(e, t, n) {
                    var r;
                    return he.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? he.css(e, t, i) : he.style(e, t, n, i)
                }, u, n ? e : void 0, n)
            }
        })
    }), he.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var Xt = A.jQuery,
        Kt = A.$;
    return he.noConflict = function(e) {
        return A.$ === he && (A.$ = Kt), e && A.jQuery === he && (A.jQuery = Xt), he
    }, e || (A.jQuery = A.$ = he), he
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.ES6Promise = t()
}(this, function() {
    "use strict";

    function n(e) {
        return "function" == typeof e || "object" == typeof e && null !== e
    }

    function c(e) {
        return "function" == typeof e
    }

    function e(e) {
        z = e
    }

    function t(e) {
        U = e
    }

    function r() {
        return function() {
            return process.nextTick(s)
        }
    }

    function i() {
        return void 0 !== G ? function() {
            G(s)
        } : u()
    }

    function o() {
        var e = 0,
            t = new X(s),
            n = document.createTextNode("");
        return t.observe(n, {
                characterData: !0
            }),
            function() {
                n.data = e = ++e % 2
            }
    }

    function a() {
        var e = new MessageChannel;
        return e.port1.onmessage = s,
            function() {
                return e.port2.postMessage(0)
            }
    }

    function u() {
        var e = setTimeout;
        return function() {
            return e(s, 1)
        }
    }

    function s() {
        for (var e = 0; e < W; e += 2) {
            (0, J[e])(J[e + 1]), J[e] = undefined, J[e + 1] = undefined
        }
        W = 0
    }

    function l() {
        try {
            var e = require("vertx");
            return G = e.runOnLoop || e.runOnContext, i()
        } catch (t) {
            return u()
        }
    }

    function f(e, t) {
        var n = arguments,
            r = this,
            i = new this.constructor(d);
        i[ee] === undefined && O(i);
        var o, a = r._state;
        return a ? (o = n[a - 1], U(function() {
            return j(a, i, o, r._result)
        })) : E(r, i, e, t), i
    }

    function p(e) {
        var t = this;
        if (e && "object" == typeof e && e.constructor === t) return e;
        var n = new t(d);
        return w(n, e), n
    }

    function d() {}

    function h() {
        return new TypeError("You cannot resolve a promise with itself")
    }

    function v() {
        return new TypeError("A promises callback cannot return that same promise.")
    }

    function g(e) {
        try {
            return e.then
        } catch (t) {
            return ie.error = t, ie
        }
    }

    function m(e, t, n, r) {
        try {
            e.call(t, n, r)
        } catch (i) {
            return i
        }
    }

    function y(e, r, i) {
        U(function(t) {
            var n = !1,
                e = m(i, r, function(e) {
                    n || (n = !0, r !== e ? w(t, e) : A(t, e))
                }, function(e) {
                    n || (n = !0, C(t, e))
                }, "Settle: " + (t._label || " unknown promise"));
            !n && e && (n = !0, C(t, e))
        }, e)
    }

    function b(t, e) {
        e._state === ne ? A(t, e._result) : e._state === re ? C(t, e._result) : E(e, undefined, function(e) {
            return w(t, e)
        }, function(e) {
            return C(t, e)
        })
    }

    function x(e, t, n) {
        t.constructor === e.constructor && n === f && t.constructor.resolve === p ? b(e, t) : n === ie ? C(e, ie.error) : n === undefined ? A(e, t) : c(n) ? y(e, t, n) : A(e, t)
    }

    function w(e, t) {
        e === t ? C(e, h()) : n(t) ? x(e, t, g(t)) : A(e, t)
    }

    function T(e) {
        e._onerror && e._onerror(e._result), S(e)
    }

    function A(e, t) {
        e._state === te && (e._result = t, e._state = ne, 0 !== e._subscribers.length && U(S, e))
    }

    function C(e, t) {
        e._state === te && (e._state = re, e._result = t, U(T, e))
    }

    function E(e, t, n, r) {
        var i = e._subscribers,
            o = i.length;
        e._onerror = null, i[o] = t, i[o + ne] = n, i[o + re] = r, 0 === o && e._state && U(S, e)
    }

    function S(e) {
        var t = e._subscribers,
            n = e._state;
        if (0 !== t.length) {
            for (var r = undefined, i = undefined, o = e._result, a = 0; a < t.length; a += 3) r = t[a], i = t[a + n], r ? j(n, r, i, o) : i(o);
            e._subscribers.length = 0
        }
    }

    function k() {
        this.error = null
    }

    function _(e, t) {
        try {
            return e(t)
        } catch (n) {
            return oe.error = n, oe
        }
    }

    function j(e, t, n, r) {
        var i = c(n),
            o = undefined,
            a = undefined,
            u = undefined,
            s = undefined;
        if (i) {
            if ((o = _(n, r)) === oe ? (s = !0, a = o.error, o = null) : u = !0, t === o) return void C(t, v())
        } else o = r, u = !0;
        t._state !== te || (i && u ? w(t, o) : s ? C(t, a) : e === ne ? A(t, o) : e === re && C(t, o))
    }

    function D(t, e) {
        try {
            e(function n(e) {
                w(t, e)
            }, function r(e) {
                C(t, e)
            })
        } catch (i) {
            C(t, i)
        }
    }

    function N() {
        return ae++
    }

    function O(e) {
        e[ee] = ae++, e._state = undefined, e._result = undefined, e._subscribers = []
    }

    function L(e, t) {
        this._instanceConstructor = e, this.promise = new e(d), this.promise[ee] || O(this.promise), B(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && A(this.promise, this._result))) : C(this.promise, q())
    }

    function q() {
        return new Error("Array Methods must be provided an Array")
    }

    function P(e) {
        return new L(this, e).promise
    }

    function F(i) {
        var o = this;
        return B(i) ? new o(function(e, t) {
            for (var n = i.length, r = 0; r < n; r++) o.resolve(i[r]).then(e, t)
        }) : new o(function(e, t) {
            return t(new TypeError("You must pass an array to race."))
        })
    }

    function M(e) {
        var t = new this(d);
        return C(t, e), t
    }

    function I() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }

    function H() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }

    function R(e) {
        this[ee] = N(), this._result = this._state = undefined, this._subscribers = [], d !== e && ("function" != typeof e && I(), this instanceof R ? D(this, e) : H())
    }

    function $() {
        var e = undefined;
        if ("undefined" != typeof global) e = global;
        else if ("undefined" != typeof self) e = self;
        else try {
            e = Function("return this")()
        } catch (r) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var t = e.Promise;
        if (t) {
            var n = null;
            try {
                n = Object.prototype.toString.call(t.resolve())
            } catch (r) {}
            if ("[object Promise]" === n && !t.cast) return
        }
        e.Promise = R
    }
    undefined;
    var B = Array.isArray ? Array.isArray : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        W = 0,
        G = undefined,
        z = undefined,
        U = function U(e, t) {
            J[W] = e, J[W + 1] = t, 2 === (W += 2) && (z ? z(s) : Z())
        },
        V = "undefined" != typeof window ? window : undefined,
        Y = V || {},
        X = Y.MutationObserver || Y.WebKitMutationObserver,
        K = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
        Q = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        J = new Array(1e3),
        Z = undefined;
    Z = K ? r() : X ? o() : Q ? a() : V === undefined && "function" == typeof require ? l() : u();
    var ee = Math.random().toString(36).substring(16),
        te = void 0,
        ne = 1,
        re = 2,
        ie = new k,
        oe = new k,
        ae = 0;
    return L.prototype._enumerate = function() {
        for (var e = this.length, t = this._input, n = 0; this._state === te && n < e; n++) this._eachEntry(t[n], n)
    }, L.prototype._eachEntry = function(t, e) {
        var n = this._instanceConstructor,
            r = n.resolve;
        if (r === p) {
            var i = g(t);
            if (i === f && t._state !== te) this._settledAt(t._state, e, t._result);
            else if ("function" != typeof i) this._remaining--, this._result[e] = t;
            else if (n === R) {
                var o = new n(d);
                x(o, t, i), this._willSettleAt(o, e)
            } else this._willSettleAt(new n(function(e) {
                return e(t)
            }), e)
        } else this._willSettleAt(r(t), e)
    }, L.prototype._settledAt = function(e, t, n) {
        var r = this.promise;
        r._state === te && (this._remaining--, e === re ? C(r, n) : this._result[t] = n), 0 === this._remaining && A(r, this._result)
    }, L.prototype._willSettleAt = function(e, t) {
        var n = this;
        E(e, undefined, function(e) {
            return n._settledAt(ne, t, e)
        }, function(e) {
            return n._settledAt(re, t, e)
        })
    }, R.all = P, R.race = F, R.resolve = p, R.reject = M, R._setScheduler = e, R._setAsap = t, R._asap = U, R.prototype = {
        constructor: R,
        then: f,
        "catch": function ue(e) {
            return this.then(null, e)
        }
    }, R.polyfill = $, R.Promise = R
}), ES6Promise.polyfill();
var Elevator = function(e) {
    "use strict";

    function r(e, t, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
    }

    function t(e, t) {
        for (var n in t) {
            e[n] === undefined && "function" != typeof n && (e[n] = t[n])
        }
        return e
    }

    function n(e) {
        for (var t = 0; e;) t += e.offsetTop || 0, e = e.offsetParent;
        return C && (t -= C), t
    }

    function i(e) {
        x || (x = e);
        var t = e - x,
            n = r(t, w, T - w, y);
        window.scrollTo(0, n), t < y ? m = requestAnimationFrame(i) : s()
    }

    function o() {
        return window.requestAnimationFrame && window.Audio && window.addEventListener
    }

    function a() {
        w = x = null, E = !1
    }

    function u() {
        A && (T = n(A))
    }

    function s() {
        a(), d && (d.pause(), d.currentTime = 0), h && h.play(), v && v()
    }

    function c() {
        E && (cancelAnimationFrame(m), a(), d && (d.pause(), d.currentTime = 0), u(), window.scrollTo(0, T))
    }

    function l(e) {
        e.addEventListener ? e.addEventListener("click", S.elevate, !1) : e.attachEvent("onclick", function() {
            u(), document.documentElement.scrollTop = T, document.body.scrollTop = T, window.scroll(0, T)
        })
    }

    function f(e) {
        g = document.body, (e = t(e, {
            duration: undefined,
            mainAudio: !1,
            endAudio: !1,
            preloadAudio: !0,
            loopAudio: !0,
            startCallback: null,
            endCallback: null
        })).element && l(e.element), o() && (e.duration && (b = !0, y = e.duration), e.targetElement && (A = e.targetElement), e.verticalPadding && (C = e.verticalPadding), window.addEventListener("blur", c, !1), e.mainAudio && ((d = new Audio(e.mainAudio)).setAttribute("preload", e.preloadAudio), d.setAttribute("loop", e.loopAudio)), e.endAudio && (h = new Audio(e.endAudio)).setAttribute("preload", "true"), e.endCallback && (v = e.endCallback), e.startCallback && (p = e.startCallback))
    }
    var p, d, h, v, g = null,
        m = null,
        y = null,
        b = !1,
        x = null,
        w = null,
        T = 0,
        A = null,
        C = null,
        E = !1,
        S = this;
    this.elevate = function() {
        E || (E = !0, w = document.documentElement.scrollTop || g.scrollTop, u(), b || (y = 1.5 * Math.abs(T - w)), requestAnimationFrame(i), d && d.play(), p && p())
    }, f(e)
};
(function() {
    function e(u) {
        function s(e, t, n, r, i, o) {
            for (; 0 <= i && i < o; i += u) {
                var a = r ? r[i] : i;
                n = t(n, e[a], a, e)
            }
            return n
        }
        return function(e, t, n, r) {
            t = b(t, r, 4);
            var i = !S(e) && y.keys(e),
                o = (i || e).length,
                a = 0 < u ? 0 : o - 1;
            return arguments.length < 3 && (n = e[i ? i[a] : a], a += u), s(e, t, n, i, a, o)
        }
    }

    function t(o) {
        return function(e, t, n) {
            t = x(t, n);
            for (var r = E(e), i = 0 < o ? 0 : r - 1; 0 <= i && i < r; i += o)
                if (t(e[i], i, e)) return i;
            return -1
        }
    }

    function n(o, a, u) {
        return function(e, t, n) {
            var r = 0,
                i = E(e);
            if ("number" == typeof n) 0 < o ? r = 0 <= n ? n : Math.max(n + i, r) : i = 0 <= n ? Math.min(n + 1, i) : n + i + 1;
            else if (u && n && i) return e[n = u(e, t)] === t ? n : -1;
            if (t != t) return 0 <= (n = a(l.call(e, r, i), y.isNaN)) ? n + r : -1;
            for (n = 0 < o ? r : i - 1; 0 <= n && n < i; n += o)
                if (e[n] === t) return n;
            return -1
        }
    }

    function r(e, t) {
        var n = N.length,
            r = e.constructor,
            i = y.isFunction(r) && r.prototype || c,
            o = "constructor";
        for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;)(o = N[n]) in e && e[o] !== i[o] && !y.contains(t, o) && t.push(o)
    }
    var i = this,
        o = i._,
        a = Array.prototype,
        c = Object.prototype,
        u = Function.prototype,
        s = a.push,
        l = a.slice,
        f = c.toString,
        p = c.hasOwnProperty,
        d = Array.isArray,
        h = Object.keys,
        v = u.bind,
        g = Object.create,
        m = function() {},
        y = function(e) {
            return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : i._ = y, y.VERSION = "1.8.3";
    var b = function(i, o, e) {
            if (void 0 === o) return i;
            switch (null == e ? 3 : e) {
                case 1:
                    return function(e) {
                        return i.call(o, e)
                    };
                case 2:
                    return function(e, t) {
                        return i.call(o, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return i.call(o, e, t, n)
                    };
                case 4:
                    return function(e, t, n, r) {
                        return i.call(o, e, t, n, r)
                    }
            }
            return function() {
                return i.apply(o, arguments)
            }
        },
        x = function(e, t, n) {
            return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
        };
    y.iteratee = function(e, t) {
        return x(e, t, 1 / 0)
    };
    var w = function(s, c) {
            return function(e) {
                var t = arguments.length;
                if (t < 2 || null == e) return e;
                for (var n = 1; n < t; n++)
                    for (var r = arguments[n], i = s(r), o = i.length, a = 0; a < o; a++) {
                        var u = i[a];
                        c && void 0 !== e[u] || (e[u] = r[u])
                    }
                return e
            }
        },
        T = function(e) {
            if (!y.isObject(e)) return {};
            if (g) return g(e);
            m.prototype = e;
            var t = new m;
            return m.prototype = null, t
        },
        A = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        },
        C = Math.pow(2, 53) - 1,
        E = A("length"),
        S = function(e) {
            var t = E(e);
            return "number" == typeof t && 0 <= t && t <= C
        };
    y.each = y.forEach = function(e, t, n) {
        var r, i;
        if (t = b(t, n), S(e))
            for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
        else {
            var o = y.keys(e);
            for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
        }
        return e
    }, y.map = y.collect = function(e, t, n) {
        t = x(t, n);
        for (var r = !S(e) && y.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
            var u = r ? r[a] : a;
            o[a] = t(e[u], u, e)
        }
        return o
    }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
        var r;
        return void 0 !== (r = S(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n)) && -1 !== r ? e[r] : void 0
    }, y.filter = y.select = function(e, r, t) {
        var i = [];
        return r = x(r, t), y.each(e, function(e, t, n) {
            r(e, t, n) && i.push(e)
        }), i
    }, y.reject = function(e, t, n) {
        return y.filter(e, y.negate(x(t)), n)
    }, y.every = y.all = function(e, t, n) {
        t = x(t, n);
        for (var r = !S(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if (!t(e[a], a, e)) return !1
        }
        return !0
    }, y.some = y.any = function(e, t, n) {
        t = x(t, n);
        for (var r = !S(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if (t(e[a], a, e)) return !0
        }
        return !1
    }, y.contains = y.includes = y.include = function(e, t, n, r) {
        return S(e) || (e = y.values(e)), ("number" != typeof n || r) && (n = 0), 0 <= y.indexOf(e, t, n)
    }, y.invoke = function(e, n) {
        var r = l.call(arguments, 2),
            i = y.isFunction(n);
        return y.map(e, function(e) {
            var t = i ? n : e[n];
            return null == t ? t : t.apply(e, r)
        })
    }, y.pluck = function(e, t) {
        return y.map(e, y.property(t))
    }, y.where = function(e, t) {
        return y.filter(e, y.matcher(t))
    }, y.findWhere = function(e, t) {
        return y.find(e, y.matcher(t))
    }, y.max = function(e, r, t) {
        var n, i, o = -1 / 0,
            a = -1 / 0;
        if (null == r && null != e)
            for (var u = 0, s = (e = S(e) ? e : y.values(e)).length; u < s; u++) n = e[u], o < n && (o = n);
        else r = x(r, t), y.each(e, function(e, t, n) {
            i = r(e, t, n), (a < i || i === -1 / 0 && o === -1 / 0) && (o = e, a = i)
        });
        return o
    }, y.min = function(e, r, t) {
        var n, i, o = 1 / 0,
            a = 1 / 0;
        if (null == r && null != e)
            for (var u = 0, s = (e = S(e) ? e : y.values(e)).length; u < s; u++)(n = e[u]) < o && (o = n);
        else r = x(r, t), y.each(e, function(e, t, n) {
            ((i = r(e, t, n)) < a || 1 / 0 === i && 1 / 0 === o) && (o = e, a = i)
        });
        return o
    }, y.shuffle = function(e) {
        for (var t, n = S(e) ? e : y.values(e), r = n.length, i = Array(r), o = 0; o < r; o++)(t = y.random(0, o)) !== o && (i[o] = i[t]), i[t] = n[o];
        return i
    }, y.sample = function(e, t, n) {
        return null == t || n ? (S(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
    }, y.sortBy = function(e, r, t) {
        return r = x(r, t), y.pluck(y.map(e, function(e, t, n) {
            return {
                value: e,
                index: t,
                criteria: r(e, t, n)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (r < n || void 0 === n) return 1;
                if (n < r || void 0 === r) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var k = function(a) {
        return function(r, i, e) {
            var o = {};
            return i = x(i, e), y.each(r, function(e, t) {
                var n = i(e, t, r);
                a(o, e, n)
            }), o
        }
    };
    y.groupBy = k(function(e, t, n) {
        y.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), y.indexBy = k(function(e, t, n) {
        e[n] = t
    }), y.countBy = k(function(e, t, n) {
        y.has(e, n) ? e[n]++ : e[n] = 1
    }), y.toArray = function(e) {
        return e ? y.isArray(e) ? l.call(e) : S(e) ? y.map(e, y.identity) : y.values(e) : []
    }, y.size = function(e) {
        return null == e ? 0 : S(e) ? e.length : y.keys(e).length
    }, y.partition = function(e, r, t) {
        r = x(r, t);
        var i = [],
            o = [];
        return y.each(e, function(e, t, n) {
            (r(e, t, n) ? i : o).push(e)
        }), [i, o]
    }, y.first = y.head = y.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : y.initial(e, e.length - t)
    }, y.initial = function(e, t, n) {
        return l.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }, y.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
    }, y.rest = y.tail = y.drop = function(e, t, n) {
        return l.call(e, null == t || n ? 1 : t)
    }, y.compact = function(e) {
        return y.filter(e, y.identity)
    };
    var _ = function(e, t, n, r) {
        for (var i = [], o = 0, a = r || 0, u = E(e); a < u; a++) {
            var s = e[a];
            if (S(s) && (y.isArray(s) || y.isArguments(s))) {
                t || (s = _(s, t, n));
                var c = 0,
                    l = s.length;
                for (i.length += l; c < l;) i[o++] = s[c++]
            } else n || (i[o++] = s)
        }
        return i
    };
    y.flatten = function(e, t) {
        return _(e, t, !1)
    }, y.without = function(e) {
        return y.difference(e, l.call(arguments, 1))
    }, y.uniq = y.unique = function(e, t, n, r) {
        y.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = x(n, r));
        for (var i = [], o = [], a = 0, u = E(e); a < u; a++) {
            var s = e[a],
                c = n ? n(s, a, e) : s;
            t ? (a && o === c || i.push(s), o = c) : n ? y.contains(o, c) || (o.push(c), i.push(s)) : y.contains(i, s) || i.push(s)
        }
        return i
    }, y.union = function() {
        return y.uniq(_(arguments, !0, !0))
    }, y.intersection = function(e) {
        for (var t = [], n = arguments.length, r = 0, i = E(e); r < i; r++) {
            var o = e[r];
            if (!y.contains(t, o)) {
                for (var a = 1; a < n && y.contains(arguments[a], o); a++);
                a === n && t.push(o)
            }
        }
        return t
    }, y.difference = function(e) {
        var t = _(arguments, !0, !0, 1);
        return y.filter(e, function(e) {
            return !y.contains(t, e)
        })
    }, y.zip = function() {
        return y.unzip(arguments)
    }, y.unzip = function(e) {
        for (var t = e && y.max(e, E).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = y.pluck(e, r);
        return n
    }, y.object = function(e, t) {
        for (var n = {}, r = 0, i = E(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, r) {
        for (var i = (n = x(n, r, 1))(t), o = 0, a = E(e); o < a;) {
            var u = Math.floor((o + a) / 2);
            n(e[u]) < i ? o = u + 1 : a = u
        }
        return o
    }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
        return i
    };
    var j = function(e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);
        var o = T(e.prototype),
            a = e.apply(o, i);
        return y.isObject(a) ? a : o
    };
    y.bind = function(e, t) {
        if (v && e.bind === v) return v.apply(e, l.call(arguments, 1));
        if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = l.call(arguments, 2),
            r = function() {
                return j(e, r, t, this, n.concat(l.call(arguments)))
            };
        return r
    }, y.partial = function(i) {
        var o = l.call(arguments, 1),
            a = function() {
                for (var e = 0, t = o.length, n = Array(t), r = 0; r < t; r++) n[r] = o[r] === y ? arguments[e++] : o[r];
                for (; e < arguments.length;) n.push(arguments[e++]);
                return j(i, a, this, this, n)
            };
        return a
    }, y.bindAll = function(e) {
        var t, n, r = arguments.length;
        if (r <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < r; t++) e[n = arguments[t]] = y.bind(e[n], e);
        return e
    }, y.memoize = function(r, i) {
        var o = function(e) {
            var t = o.cache,
                n = "" + (i ? i.apply(this, arguments) : e);
            return y.has(t, n) || (t[n] = r.apply(this, arguments)), t[n]
        };
        return o.cache = {}, o
    }, y.delay = function(e, t) {
        var n = l.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(n, r, i) {
        var o, a, u, s = null,
            c = 0;
        i || (i = {});
        var l = function() {
            c = !1 === i.leading ? 0 : y.now(), s = null, u = n.apply(o, a), s || (o = a = null)
        };
        return function() {
            var e = y.now();
            c || !1 !== i.leading || (c = e);
            var t = r - (e - c);
            return o = this, a = arguments, t <= 0 || r < t ? (s && (clearTimeout(s), s = null), c = e, u = n.apply(o, a), s || (o = a = null)) : s || !1 === i.trailing || (s = setTimeout(l, t)), u
        }
    }, y.debounce = function(t, n, r) {
        var i, o, a, u, s, c = function() {
            var e = y.now() - u;
            e < n && 0 <= e ? i = setTimeout(c, n - e) : (i = null, r || (s = t.apply(a, o), i || (a = o = null)))
        };
        return function() {
            a = this, o = arguments, u = y.now();
            var e = r && !i;
            return i || (i = setTimeout(c, n)), e && (s = t.apply(a, o), a = o = null), s
        }
    }, y.wrap = function(e, t) {
        return y.partial(t, e)
    }, y.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }, y.compose = function() {
        var n = arguments,
            r = n.length - 1;
        return function() {
            for (var e = r, t = n[r].apply(this, arguments); e--;) t = n[e].call(this, t);
            return t
        }
    }, y.after = function(e, t) {
        return function() {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, y.before = function(e, t) {
        var n;
        return function() {
            return 0 < --e && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
        }
    }, y.once = y.partial(y.before, 2);
    var D = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        N = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(e) {
        if (!y.isObject(e)) return [];
        if (h) return h(e);
        var t = [];
        for (var n in e) y.has(e, n) && t.push(n);
        return D && r(e, t), t
    }, y.allKeys = function(e) {
        if (!y.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return D && r(e, t), t
    }, y.values = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
        return r
    }, y.mapObject = function(e, t, n) {
        t = x(t, n);
        for (var r, i = y.keys(e), o = i.length, a = {}, u = 0; u < o; u++) a[r = i[u]] = t(e[r], r, e);
        return a
    }, y.pairs = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, y.invert = function(e) {
        for (var t = {}, n = y.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
    }, y.functions = y.methods = function(e) {
        var t = [];
        for (var n in e) y.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, y.extend = w(y.allKeys), y.extendOwn = y.assign = w(y.keys), y.findKey = function(e, t, n) {
        t = x(t, n);
        for (var r, i = y.keys(e), o = 0, a = i.length; o < a; o++)
            if (t(e[r = i[o]], r, e)) return r
    }, y.pick = function(e, t, n) {
        var r, i, o = {},
            a = e;
        if (null == a) return o;
        y.isFunction(t) ? (i = y.allKeys(a), r = b(t, n)) : (i = _(arguments, !1, !1, 1), r = function(e, t, n) {
            return t in n
        }, a = Object(a));
        for (var u = 0, s = i.length; u < s; u++) {
            var c = i[u],
                l = a[c];
            r(l, c, a) && (o[c] = l)
        }
        return o
    }, y.omit = function(e, t, n) {
        if (y.isFunction(t)) t = y.negate(t);
        else {
            var r = y.map(_(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !y.contains(r, t)
            }
        }
        return y.pick(e, t, n)
    }, y.defaults = w(y.allKeys, !0), y.create = function(e, t) {
        var n = T(e);
        return t && y.extendOwn(n, t), n
    }, y.clone = function(e) {
        return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
    }, y.tap = function(e, t) {
        return t(e), e
    }, y.isMatch = function(e, t) {
        var n = y.keys(t),
            r = n.length;
        if (null == e) return !r;
        for (var i = Object(e), o = 0; o < r; o++) {
            var a = n[o];
            if (t[a] !== i[a] || !(a in i)) return !1
        }
        return !0
    };
    var O = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
        var i = f.call(e);
        if (i !== f.call(t)) return !1;
        switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t
        }
        var o = "[object Array]" === i;
        if (!o) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var a = e.constructor,
                u = t.constructor;
            if (a !== u && !(y.isFunction(a) && a instanceof a && y.isFunction(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1
        }
        r = r || [];
        for (var s = (n = n || []).length; s--;)
            if (n[s] === e) return r[s] === t;
        if (n.push(e), r.push(t), o) {
            if ((s = e.length) !== t.length) return !1;
            for (; s--;)
                if (!O(e[s], t[s], n, r)) return !1
        } else {
            var c, l = y.keys(e);
            if (s = l.length, y.keys(t).length !== s) return !1;
            for (; s--;)
                if (c = l[s], !y.has(t, c) || !O(e[c], t[c], n, r)) return !1
        }
        return n.pop(), r.pop(), !0
    };
    y.isEqual = function(e, t) {
        return O(e, t)
    }, y.isEmpty = function(e) {
        return null == e || (S(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
    }, y.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, y.isArray = d || function(e) {
        return "[object Array]" === f.call(e)
    }, y.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        y["is" + t] = function(e) {
            return f.call(e) === "[object " + t + "]"
        }
    }), y.isArguments(arguments) || (y.isArguments = function(e) {
        return y.has(e, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
        return "function" == typeof e || !1
    }), y.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, y.isNaN = function(e) {
        return y.isNumber(e) && e !== +e
    }, y.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === f.call(e)
    }, y.isNull = function(e) {
        return null === e
    }, y.isUndefined = function(e) {
        return void 0 === e
    }, y.has = function(e, t) {
        return null != e && p.call(e, t)
    }, y.noConflict = function() {
        return i._ = o, this
    }, y.identity = function(e) {
        return e
    }, y.constant = function(e) {
        return function() {
            return e
        }
    }, y.noop = function() {}, y.property = A, y.propertyOf = function(t) {
        return null == t ? function() {} : function(e) {
            return t[e]
        }
    }, y.matcher = y.matches = function(t) {
        return t = y.extendOwn({}, t),
            function(e) {
                return y.isMatch(e, t)
            }
    }, y.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = b(t, n, 1);
        for (var i = 0; i < e; i++) r[i] = t(i);
        return r
    }, y.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, y.now = Date.now || function() {
        return (new Date).getTime()
    };
    var L = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        q = y.invert(L),
        P = function(t) {
            var n = function(e) {
                    return t[e]
                },
                e = "(?:" + y.keys(t).join("|") + ")",
                r = RegExp(e),
                i = RegExp(e, "g");
            return function(e) {
                return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, n) : e
            }
        };
    y.escape = P(L), y.unescape = P(q), y.result = function(e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n), y.isFunction(r) ? r.call(e) : r
    };
    var F = 0;
    y.uniqueId = function(e) {
        var t = ++F + "";
        return e ? e + t : t
    }, y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var M = /(.)^/,
        I = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        H = /\\|'|\r|\n|\u2028|\u2029/g,
        R = function(e) {
            return "\\" + I[e]
        };
    y.template = function(o, e, t) {
        !e && t && (e = t), e = y.defaults({}, e, y.templateSettings);
        var n = RegExp([(e.escape || M).source, (e.interpolate || M).source, (e.evaluate || M).source].join("|") + "|$", "g"),
            a = 0,
            u = "__p+='";
        o.replace(n, function(e, t, n, r, i) {
            return u += o.slice(a, i).replace(H, R), a = i + e.length, t ? u += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : n ? u += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : r && (u += "';\n" + r + "\n__p+='"), e
        }), u += "';\n", e.variable || (u = "with(obj||{}){\n" + u + "}\n"), u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
            var r = new Function(e.variable || "obj", "_", u)
        } catch (c) {
            throw c.source = u, c
        }
        var i = function(e) {
                return r.call(this, e, y)
            },
            s = e.variable || "obj";
        return i.source = "function(" + s + "){\n" + u + "}", i
    }, y.chain = function(e) {
        var t = y(e);
        return t._chain = !0, t
    };
    var $ = function(e, t) {
        return e._chain ? y(t).chain() : t
    };
    y.mixin = function(n) {
        y.each(y.functions(n), function(e) {
            var t = y[e] = n[e];
            y.prototype[e] = function() {
                var e = [this._wrapped];
                return s.apply(e, arguments), $(this, t.apply(y, e))
            }
        })
    }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var n = a[t];
        y.prototype[t] = function() {
            var e = this._wrapped;
            return n.apply(e, arguments), "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0], $(this, e)
        }
    }), y.each(["concat", "join", "slice"], function(e) {
        var t = a[e];
        y.prototype[e] = function() {
            return $(this, t.apply(this._wrapped, arguments))
        }
    }), y.prototype.value = function() {
        return this._wrapped
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}).call(this),
    function() {
        function calculateAverageSwapPerDay(e) {
            var t = e.Time.match(/^([0-9]+)-([0-9]+)-([0-9])+/),
                n = new Date(t[1], parseInt(t[2]) - 1, t[2]),
                r = Math.round(Math.abs((n.getTime() - GOGORO_LAUNCH_DATE.getTime()) / ONE_DAY));
            return Math.floor(e.Swap / r)
        }

        function init() {
            refreshDataTimer || (refreshDataTimer = setInterval(fetchData, ONE_HOUR)), fetchData().then(updateDynamicVar)
        }

        function refreshElements() {
            $elements = $("[data-dynamic-var]")
        }

        function fetchData() {
            return $.getJSON(API_URL).then(deconstructData)
        }

        function deconstructData(e) {
            var t = e.environmental_impact;
            return comingSoonStationsCount = e.gostation.coming_soon_num, inOperationStationsCount = e.gostation.in_operation_num, environmentalImpactRows = t.reduce(function(e, t) {
                var n = t.Time.match(/(\d{2}) (\d{2}):\d{2}:\d{2}/),
                    r = [parseInt(n[1], 10), parseInt(n[2], 10)];
                return t.Swap *= 2, t.SwapAvg30Days *= 2, t.AVG_SWAP_PER_DAY = calculateAverageSwapPerDay(t), e[r] = t, e
            }, {}), swapOnLastDay = t[t.length - 1].Swap - t[t.length - 25].Swap, {
                environmentalImpactRows: environmentalImpactRows,
                comingSoonStationsCount: comingSoonStationsCount,
                inOperationStationsCount: inOperationStationsCount
            }
        }

        function getCurrentKey(e, t) {
            var n = new Date;
            t = t || 0;
            var r = n.getTimezoneOffset(),
                i = new Date(n.getTime() + r * ONE_MINUTE - 2 * ONE_DAY + t * ONE_DAY + (8 + (e || 0)) * ONE_HOUR).toString().match(/(\d{2}) \d+ (\d{2}):\d{2}:\d{2}/);
            return [parseInt(i[1], 10), parseInt(i[2], 10)]
        }

        function getHourPercent() {
            var e = new Date;
            return (1e3 * (60 * e.getMinutes() + e.getSeconds()) + e.getMilliseconds()) / 36e5
        }

        function getCurrentValues() {
            for (var o, a, e = 0;
                (!o || !a) && e < 5;) o = environmentalImpactRows[getCurrentKey(0, -e)], a = environmentalImpactRows[getCurrentKey(1, -e)], e++;
            var u = getHourPercent();
            return AVAILABLE_DATA_FROM_ROW.reduce(function(e, t) {
                var n = o[t],
                    r = n + (a[t] - n) * u,
                    i = Math.round(r, 10);
                return "Swap" == t && (i = i % 2 == 0 ? i : i - 1), e[t] = i, e
            }, {
                inOperationStationsCount: inOperationStationsCount,
                comingSoonStationsCount: comingSoonStationsCount,
                stationsCount: inOperationStationsCount + comingSoonStationsCount,
                swapOnLastDay: swapOnLastDay
            })
        }

        function updateDynamicVar() {
            dynamicVarTimer || (dynamicVarTimer = setInterval(function() {
                var values = getCurrentValues();
                $elements.each(function() {
                    var type = $(this).data("dynamic-var"),
                        value = values[type],
                        evaluate = $(this).data("dynamic-eval");
                    evaluate && (value = eval(evaluate.replace("$", value))), $(this).text(value.withComma())
                })
            }, 1e3))
        }
        var $elements = $("[data-dynamic-var]"),
            API_URL = "",
            ONE_MINUTE = 6e4,
            ONE_HOUR = 60 * ONE_MINUTE,
            ONE_DAY = 24 * ONE_HOUR,
            GOGORO_LAUNCH_DATE = new Date(2015, 6, 25),
            AVAILABLE_DATA_FROM_ROW = ["Swap", "Mileage", "GAS_L", "GAS_G", "CO2", "NOX", "AVG_SWAP_PER_DAY", "SwapAvg30Days"],
            environmentalImpactRows = null,
            inOperationStationsCount = null,
            comingSoonStationsCount = null,
            swapOnLastDay = null,
            refreshDataTimer = null,
            dynamicVarTimer = null;
        $elements.length && init(), window.EnvironmentalImpact = {
            refreshElements: refreshElements,
            fetchData: fetchData
        }
    }(), $("[data-elevator]").on("click", function(e) {
        e.preventDefault(), new Elevator({
            targetElement: $(this.hash).get(0),
            duration: $(this).data("duration") || 1e3,
            verticalPadding: $(this).data("offset") || 0
        }).elevate()
    }),
    function() {
        var e = document.documentElement.getAttribute("lang"),
            n = window.location.pathname;
        if ([/^\/tw\/?$/, "/tw/smartscooter/2-series/deluxe", "/tw/smartscooter/2-series/deluxe-lifestyle", /\/tw\/(campaign|about|press|career|term-of-use|privacy-policy|mygogoro-legal-agreement|disclaimer|sexual-harassment|smart-energy\/gocharger-mobile|)/].reduce(function(e, t) {
                return e && !n.match(t)
            }, "en" !== e)) {
            var t = document.createElement("ggr-chatbot");
            document.body.appendChild(t)
        }
    }(),
    function(e) {
        window.Sage = {
            common: {
                init: function() {},
                finalize: function() {}
            },
            about_us: {
                init: function() {}
            }
        };
        var n = {
            fire: function(e, t, n) {
                var r = Sage;
                t = t === undefined ? "init" : t, "" !== e && r[e] && "function" == typeof r[e][t] && r[e][t](n)
            },
            loadEvents: function() {
                n.fire("common"), e.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(e, t) {
                    n.fire(t), n.fire(t, "finalize")
                }), n.fire("common", "finalize")
            }
        };
        e(function() {
            n.loadEvents()
        })
    }(jQuery);
var GOOGLE_MAP_API_JS = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places",
    GOOGLE_MAP_API_DEV_KEY = "",
    GOOGLE_MA_API_PROD_KEY = "";
window.GOOGLE_MAP_API_KEY = "www.xxx.com" !== window.location.hostname ? GOOGLE_MAP_API_DEV_KEY : GOOGLE_MA_API_PROD_KEY,
    function(r) {
        function i(e, t, n, r) {
            e.on("click", function() {
                dataLayer.push({
                    eventCategory: t,
                    eventAction: n,
                    eventLabel: r,
                    event: "click-ga"
                })
            })
        }

        function e() {
            r(".hero-slide-wrap").each(function(e) {
                var t = ("0" + (e + 1)).slice(-2),
                    n = r(this).find("h1 span").text();
                i(r(this), "home_banner", "cut-" + t, n)
            })
        }

        function t() {
            r(".campaign-item").each(function(e) {
                var t = ("0" + (e + 1)).slice(-2),
                    n = r(this).find(".campaign-item-heading").text();
                i(r(this), "home_product", "product-" + t, n)
            })
        }

        function n() {
            r(["facebook", "youtube", "instagram", "blog", "twitter", "linkedin"]).each(function() {
                i(r(".directory-social-" + this + "-link"), "Social", "01-click", "01-click-" + this)
            })
        }

        function o() {
            r("#ggr_directory .directory-subscribe-form").on("success", function() {
                dataLayer.push({
                    eventCategory: "edm",
                    eventAction: "edm_action",
                    eventLabel: "edm-action-add",
                    event: "click-ga"
                })
            })
        }

        function a() {
            r("body").on("book-a-ride-finish", function() {
                dataLayer.push({
                    eventCategory: "Booking",
                    eventAction: "01-submit",
                    eventLabel: "01-submit_booking-ride",
                    event: "click-ga"
                })
            })
        }
        switch (window.location.pathname) {
            case "/tw/":
                e(), t();
                break;
            case "/tw/book-a-ride/":
                a()
        }
        n(), o()
    }(jQuery), jQuery.extend({
        getQueryParameters: function(e) {
            return (e || document.location.search).replace(/(^\?)/, "").split("&").map(function(e) {
                return this[(e = e.split("="))[0]] = e[1], this
            }.bind({}))[0]
        }
    }), Number.prototype.withComma = function() {
        return String(this).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }, Array.prototype.shuffle = function() {
        var e, t, n;
        for (n = this.length; n; n--) e = Math.floor(Math.random() * n), t = this[n - 1], this[n - 1] = this[e], this[e] = t;
        return this
    }, Array.prototype.find || (Array.prototype.find = function(e) {
        for (var t = this.length, n = 0; n < t; n++)
            if (e(this[n])) return this[n]
    }), Array.prototype.all = function(e) {
        for (var t = this.length, n = 0; n < t; n++)
            if (!e(this[n])) return !1;
        return !0
    },
    function() {
        var e = window.location.search.substring(1);
        if (!e) return window.params = {};
        window.params = e.split("&").reduce(function(e, t) {
            var n = t.split("="),
                r = n[0],
                i = n[1];
            return void 0 !== i && (i = decodeURI(i)), e[r] = i, e
        }, {})
    }(), window.utils = {
        debounce: function(i, o, a) {
            var u;
            return function() {
                var e = this,
                    t = arguments,
                    n = function() {
                        u = null, a || i.apply(e, t)
                    },
                    r = a && !u;
                clearTimeout(u), u = setTimeout(n, o), r && i.apply(e, t)
            }
        },
        onResize: function(t, e) {
            var n = $(window).width();
            $(window).on("resize", this.debounce(function() {
                var e = $(window).width();
                e !== n && (n = e, t())
            }, e))
        },
        Cookies: {
            get: function(e) {
                for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r += 1) {
                    for (var i = n[r];
                        " " === i.charAt(0);) i = i.substring(1);
                    if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
                }
                return ""
            },
            set: function(e, t, n) {
                var r = new Date;
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
                var i = "expires=" + r.toUTCString();
                document.cookie = e + "=" + t + ";" + i + ";path=/"
            }
        }
    },
    function(t) {
        t("#btn-close-ie-alert-box").on("click", function(e) {
            e.preventDefault(), t("#ie-upgrade-box").animate({
                opacity: 0
            }, 500, function() {
                t(this).hide()
            })
        })
    }(jQuery);