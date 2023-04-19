! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.inView = t() : e.inView = t()
}(this, function() {
    return function(i) {
        function o(e) {
            if (s[e]) return s[e].exports;
            var t = s[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return i[e].call(t.exports, t, t.exports, o), t.loaded = !0, t.exports
        }
        var s = {};
        return o.m = i, o.c = s, o.p = "", o(0)
    }([function(e, t, i) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var s = o(i(2));
        e.exports = s["default"]
    }, function(e) {
        function t(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        e.exports = t
    }, function(e, t, i) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(i(9)),
            l = o(i(3)),
            a = i(4),
            s = function() {
                if ("undefined" != typeof window) {
                    var e = 100,
                        t = ["scroll", "resize", "load"],
                        i = {
                            history: []
                        },
                        o = {
                            offset: {},
                            threshold: 0,
                            test: a.inViewport
                        },
                        s = (0, r["default"])(function() {
                            i.history.forEach(function(e) {
                                i[e].check()
                            })
                        }, e);
                    t.forEach(function(e) {
                        return addEventListener(e, s)
                    }), window.MutationObserver && new MutationObserver(s).observe(document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    });
                    var n = function(e) {
                        if ("string" == typeof e) {
                            var t = [].slice.call(document.querySelectorAll(e));
                            return -1 < i.history.indexOf(e) ? i[e].elements = t : (i[e] = (0, l["default"])(t, o), i.history.push(e)), i[e]
                        }
                    };
                    return n.offset = function(t) {
                        if (void 0 === t) return o.offset;
                        var i = function(e) {
                            return "number" == typeof e
                        };
                        return ["top", "right", "bottom", "left"].forEach(i(t) ? function(e) {
                            return o.offset[e] = t
                        } : function(e) {
                            return i(t[e]) ? o.offset[e] = t[e] : null
                        }), o.offset
                    }, n.threshold = function(e) {
                        return "number" == typeof e && 0 <= e && e <= 1 ? o.threshold = e : o.threshold
                    }, n.test = function(e) {
                        return "function" == typeof e ? o.test = e : o.test
                    }, n.is = function(e) {
                        return o.test(e, o)
                    }, n.offset(0), n
                }
            };
        t["default"] = s()
    }, function(e, t) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function o(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var o = t[i];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(e, t, i) {
                    return t && o(e.prototype, t), i && o(e, i), e
                }
            }(),
            i = function() {
                function i(e, t) {
                    o(this, i), this.options = t, this.elements = e, this.current = [], this.handlers = {
                        enter: [],
                        exit: []
                    }, this.singles = {
                        enter: [],
                        exit: []
                    }
                }
                return s(i, [{
                    key: "check",
                    value: function() {
                        var n = this;
                        return this.elements.forEach(function(e) {
                            var t = n.options.test(e, n.options),
                                i = n.current.indexOf(e),
                                o = -1 < i,
                                s = !t && o;
                            t && !o && (n.current.push(e), n.emit("enter", e)), s && (n.current.splice(i, 1), n.emit("exit", e))
                        }), this
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        return this.handlers[e].push(t), this
                    }
                }, {
                    key: "once",
                    value: function(e, t) {
                        return this.singles[e].unshift(t), this
                    }
                }, {
                    key: "emit",
                    value: function(e, t) {
                        for (; this.singles[e].length;) this.singles[e].pop()(t);
                        for (var i = this.handlers[e].length; - 1 < --i;) this.handlers[e][i](t);
                        return this
                    }
                }]), i
            }();
        t["default"] = function(e, t) {
            return new i(e, t)
        }
    }, function(e, t) {
        "use strict";

        function i(e, t) {
            var i = e.getBoundingClientRect(),
                o = i.top,
                s = i.right,
                n = i.bottom,
                r = i.left,
                l = i.width,
                a = i.height,
                d = {
                    t: n,
                    r: window.innerWidth - r,
                    b: window.innerHeight - o,
                    l: s
                },
                c = {
                    x: t.threshold * l,
                    y: t.threshold * a
                };
            return d.t > t.offset.top + c.y && d.r > t.offset.right + c.x && d.b > t.offset.bottom + c.y && d.l > t.offset.left + c.x
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.inViewport = i
    }, function(i, e) {
        (function(e) {
            var t = "object" == typeof e && e && e.Object === Object && e;
            i.exports = t
        }).call(e, function() {
            return this
        }())
    }, function(e, t, i) {
        var o = i(5),
            s = "object" == typeof self && self && self.Object === Object && self,
            n = o || s || Function("return this")();
        e.exports = n
    }, function(e, t, i) {
        function o(o, i, e) {
            function s(e) {
                var t = u,
                    i = A;
                return u = A = void 0, w = e, f = o.apply(i, t)
            }

            function n(e) {
                return w = e, v = setTimeout(l, i), k ? s(e) : f
            }

            function t(e) {
                var t = i - (e - y);
                return g ? x(t, h - (e - w)) : t
            }

            function r(e) {
                var t = e - y;
                return void 0 === y || i <= t || t < 0 || g && h <= e - w
            }

            function l() {
                var e = S();
                return r(e) ? a(e) : void(v = setTimeout(l, t(e)))
            }

            function a(e) {
                return v = void 0, T && u ? s(e) : (u = A = void 0, f)
            }

            function d() {
                void 0 !== v && clearTimeout(v), u = y = A = v = void(w = 0)
            }

            function c() {
                return void 0 === v ? f : a(S())
            }

            function p() {
                var e = S(),
                    t = r(e);
                if (u = arguments, A = this, y = e, t) {
                    if (void 0 === v) return n(y);
                    if (g) return v = setTimeout(l, i), s(y)
                }
                return void 0 === v && (v = setTimeout(l, i)), f
            }
            var u, A, h, f, v, y, w = 0,
                k = !1,
                g = !1,
                T = !0;
            if ("function" != typeof o) throw new TypeError($);
            return i = b(i) || 0, m(e) && (k = !!e.leading, h = (g = "maxWait" in e) ? C(b(e.maxWait) || 0, i) : h, T = "trailing" in e ? !!e.trailing : T), p.cancel = d, p.flush = c, p
        }
        var m = i(1),
            S = i(8),
            b = i(10),
            $ = "Expected a function",
            C = Math.max,
            x = Math.min;
        e.exports = o
    }, function(e, t, i) {
        var o = i(6),
            s = function() {
                return o.Date.now()
            };
        e.exports = s
    }, function(e, t, i) {
        function o(e, t, i) {
            var o = !0,
                s = !0;
            if ("function" != typeof e) throw new TypeError(l);
            return r(i) && (o = "leading" in i ? !!i.leading : o, s = "trailing" in i ? !!i.trailing : s), n(e, t, {
                leading: o,
                maxWait: t,
                trailing: s
            })
        }
        var n = i(7),
            r = i(1),
            l = "Expected a function";
        e.exports = o
    }, function(e) {
        function t(e) {
            return e
        }
        e.exports = t
    }])
});
var videoAutoPlay = new Promise(function(e) {
    var t = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        i = document.documentElement,
        o = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==",
        s = document.createElement("video");
    s.setAttribute("autoplay", ""), s.setAttribute("muted", ""), s.setAttribute("playsinline", ""), s.style.cssText = "display:none", s.src = o, i.appendChild(s);
    var n = !1;
    s.addEventListener("play", function() {
        n = !0
    }), t ? n = !0 : s.play(), setTimeout(function() {
        n ? i.classList.add("videoautoplay") : i.classList.add("no-videoautoplay"), e(n)
    }, 0)
});
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var l = window.Slick || {};
    (l = function() {
        function e(e, t) {
            var i, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(e),
                appendDots: c(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, c.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = c(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, i = c(e).data("slick") || {}, o.options = c.extend({}, o.defaults, t, i), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = c.proxy(o.autoPlay, o), o.autoPlayClear = c.proxy(o.autoPlayClear, o), o.autoPlayIterator = c.proxy(o.autoPlayIterator, o), o.changeSlide = c.proxy(o.changeSlide, o), o.clickHandler = c.proxy(o.clickHandler, o), o.selectHandler = c.proxy(o.selectHandler, o), o.setPosition = c.proxy(o.setPosition, o), o.swipeHandler = c.proxy(o.swipeHandler, o), o.dragHandler = c.proxy(o.dragHandler, o), o.keyHandler = c.proxy(o.keyHandler, o), o.instanceUid = s++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
        }
        var s = 0;
        return e
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, l.prototype.addSlide = l.prototype.slickAdd = function(e, t, i) {
        var o = this;
        if ("boolean" == typeof t) i = t, t = null;
        else if (t < 0 || t >= o.slideCount) return !1;
        o.unload(), "number" == typeof t ? 0 === t && 0 === o.$slides.length ? c(e).appendTo(o.$slideTrack) : i ? c(e).insertBefore(o.$slides.eq(t)) : c(e).insertAfter(o.$slides.eq(t)) : !0 === i ? c(e).prependTo(o.$slideTrack) : c(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, l.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, l.prototype.animateSlide = function(e, t) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, t) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, t) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), c({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? i[o.animType] = "translate(" + e + "px, 0px)" : i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i)
            },
            complete: function() {
                t && t.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(i), t && setTimeout(function() {
            o.disableTransition(), t.call()
        }, o.options.speed))
    }, l.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = c(t).not(e.$slider)), t
    }, l.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, l.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, l.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, l.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, l.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, l.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, l.prototype.buildDots = function() {
        var e, t, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, l.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, l.prototype.buildRows = function() {
        var e, t, i, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), 1 < l.options.rows) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), e = 0; e < s; e++) {
                var a = document.createElement("div");
                for (t = 0; t < l.options.rows; t++) {
                    var d = document.createElement("div");
                    for (i = 0; i < l.options.slidesPerRow; i++) {
                        var c = e * r + (t * l.options.slidesPerRow + i);
                        n.get(c) && d.appendChild(n.get(c))
                    }
                    a.appendChild(d)
                }
                o.appendChild(a)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, l.prototype.checkResponsive = function(e, t) {
        var i, o, s, n = this,
            r = !1,
            l = n.$slider.width(),
            a = window.innerWidth || c(window).width();
        if ("window" === n.respondTo ? s = a : "slider" === n.respondTo ? s = l : "min" === n.respondTo && (s = Math.min(a, l)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
            for (i in o = null, n.breakpoints) n.breakpoints.hasOwnProperty(i) && (!1 === n.originalSettings.mobileFirst ? s < n.breakpoints[i] && (o = n.breakpoints[i]) : s > n.breakpoints[i] && (o = n.breakpoints[i]));
            null !== o ? null !== n.activeBreakpoint ? (o !== n.activeBreakpoint || t) && (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = c.extend({}, n.originalSettings, n.breakpointSettings[o]), !0 === e && (n.currentSlide = n.options.initialSlide), n.refresh(e)), r = o) : (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = c.extend({}, n.originalSettings, n.breakpointSettings[o]), !0 === e && (n.currentSlide = n.options.initialSlide), n.refresh(e)), r = o) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === e && (n.currentSlide = n.options.initialSlide), n.refresh(e), r = o), e || !1 === r || n.$slider.trigger("breakpoint", [n, r])
        }
    }, l.prototype.changeSlide = function(e, t) {
        var i, o, s = this,
            n = c(e.currentTarget);
        switch (n.is("a") && e.preventDefault(), n.is("li") || (n = n.closest("li")), i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, t);
                break;
            case "next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, t);
                break;
            case "index":
                var r = 0 === e.data.index ? 0 : e.data.index || n.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(r), !1, t), n.children().trigger("focus");
                break;
            default:
                return
        }
    }, l.prototype.checkNavigable = function(e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = i;
                    break
                }
                i = t[o]
            }
        return e
    }, l.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, l.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, l.prototype.cleanUpRows = function() {
        var e, t = this;
        1 < t.options.rows && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, l.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, l.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, l.prototype.disableTransition = function(e) {
        var t = this,
            i = {};
        i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, l.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, l.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, l.prototype.filterSlides = l.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, l.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function() {
                i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
            }, 0)
        })
    }, l.prototype.getCurrent = l.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, l.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            o = 0;
        if (!0 === e.options.infinite)
            for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) o = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return o - 1
    }, l.prototype.getLeft = function(e) {
        var t, i, o, s = this,
            n = 0;
        return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = i * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (n = s.slideOffset = 0), !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + n, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (s.$list.width() - o.outerWidth()) / 2)), t
    }, l.prototype.getOption = l.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, l.prototype.getNavigableIndexes = function() {
        var e, t = this,
            i = 0,
            o = 0,
            s = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, o = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) s.push(i), i = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return s
    }, l.prototype.getSlick = function() {
        return this
    }, l.prototype.getSlideCount = function() {
        var i, o, s = this;
        return o = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(e, t) {
            return t.offsetLeft - o + c(t).outerWidth() / 2 > -1 * s.swipeLeft ? (i = t, !1) : void 0
        }), Math.abs(c(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, l.prototype.goTo = l.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, l.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, l.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
            c(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + e
            })
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(e) {
            c(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + e,
                id: "slick-slide" + t.instanceUid + e
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, l.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, l.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, l.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }, l.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, l.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, l.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, l.prototype.lazyLoad = function() {
        function e(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this),
                    t = c(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, e, t])
                    })
                }, i.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, t])
                }, i.src = t
            })
        }
        var t, i, o = this;
        !0 === o.options.centerMode ? !0 === o.options.infinite ? i = (t = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (t = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (t = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(t + o.options.slidesToShow), !0 === o.options.fade && (0 < t && t--, i <= o.slideCount && i++)), e(o.$slider.find(".slick-slide").slice(t, i)), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, l.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, l.prototype.next = l.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, l.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, l.prototype.pause = l.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, l.prototype.play = l.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, l.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
    }, l.prototype.prev = l.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, l.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, l.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, i, o, s = this,
            n = c("img[data-lazy]", s.$slider);
        n.length ? (t = n.first(), i = t.attr("data-lazy"), (o = document.createElement("img")).onload = function() {
            t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, i]), s.progressiveLazyLoad()
        }, o.onerror = function() {
            e < 3 ? setTimeout(function() {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i]), s.progressiveLazyLoad())
        }, o.src = i) : s.$slider.trigger("allImagesLoaded", [s])
    }, l.prototype.refresh = function(e) {
        var t, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), t = o.currentSlide, o.destroy(!0), c.extend(o, o.initials, {
                currentSlide: t
            }), o.init(),
            e || o.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
    }, l.prototype.registerBreakpoints = function() {
        var e, t, i, o = this,
            s = o.options.responsive || null;
        if ("array" === c.type(s) && s.length) {
            for (e in o.respondTo = o.options.respondTo || "window", s)
                if (i = o.breakpoints.length - 1, t = s[e].breakpoint, s.hasOwnProperty(e)) {
                    for (; 0 <= i;) o.breakpoints[i] && o.breakpoints[i] === t && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(t), o.breakpointSettings[t] = s[e].settings
                } o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, l.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, l.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, l.prototype.removeSlide = l.prototype.slickRemove = function(e, t, i) {
        var o = this;
        return "boolean" == typeof e ? e = !0 === (t = e) ? 0 : o.slideCount - 1 : e = !0 === t ? --e : e, !(o.slideCount < 1 || e < 0 || e > o.slideCount - 1) && (o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
    }, l.prototype.setCSS = function(e) {
        var t, i, o = this,
            s = {};
        !0 === o.options.rtl && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", s[o.positionProp] = e, !1 === o.transformsEnabled || (!(s = {}) === o.cssTransitions ? s[o.animType] = "translate(" + t + ", " + i + ")" : s[o.animType] = "translate3d(" + t + ", " + i + ", 0px)"), o.$slideTrack.css(s)
    }, l.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, l.prototype.setFade = function() {
        var i, o = this;
        o.$slides.each(function(e, t) {
            i = o.slideWidth * e * -1, !0 === o.options.rtl ? c(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            })
        }), o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        })
    }, l.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, l.prototype.setOption = l.prototype.slickSetOption = function(e, t, i) {
        var o, s, n, r, l, a = this,
            d = !1;
        if ("object" === c.type(e) ? (n = arguments[0], d = t, l = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[0], r = arguments[1], d = i, "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? l = "responsive" : "undefined" != typeof arguments[1] && (l = "single")), "single" === l) a.options[n] = r;
        else if ("multiple" === l) c.each(n, function(e, t) {
            a.options[e] = t
        });
        else if ("responsive" === l)
            for (s in r)
                if ("array" !== c.type(a.options.responsive)) a.options.responsive = [r[s]];
                else {
                    for (o = a.options.responsive.length - 1; 0 <= o;) a.options.responsive[o].breakpoint === r[s].breakpoint && a.options.responsive.splice(o, 1), o--;
                    a.options.responsive.push(r[s])
                } d && (a.unload(), a.reinit())
    }, l.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, l.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, l.prototype.setSlideClasses = function(e) {
        var t, i, o, s, n = this;
        i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), !0 === n.options.centerMode ? (t = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (t <= e && e <= n.slideCount - 1 - t ? n.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + e, i.slice(o - t + 1, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? i.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
    }, l.prototype.setupInfinite = function() {
        var e, t, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (t = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - i; e -= 1) t = e - 1, c(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i; e += 1) t = e, c(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }, l.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, l.prototype.selectHandler = function(e) {
        var t = this,
            i = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(o), void t.asNavFor(o)) : void t.slideHandler(o)
    }, l.prototype.slideHandler = function(e, t, i) {
        var o, s, n, r, l, a = null,
            d = this;
        return t = t || !1, !0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e || d.slideCount <= d.options.slidesToShow ? void 0 : (!1 === t && d.asNavFor(e), o = e, a = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll) ? void(!1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
            d.postSlide(o)
        }) : d.postSlide(o))) : !1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll) ? void(!1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
            d.postSlide(o)
        }) : d.postSlide(o))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), s = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), n = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && ((l = (l = d.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), !0 === d.options.fade ? (!0 !== i ? (d.fadeSlideOut(n), d.fadeSlide(s, function() {
            d.postSlide(s)
        })) : d.postSlide(s), void d.animateHeight()) : void(!0 !== i ? d.animateSlide(a, function() {
            d.postSlide(s)
        }) : d.postSlide(s))))
    }, l.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, l.prototype.swipeDirection = function() {
        var e, t, i, o, s = this;
        return e = s.touchObject.startX - s.touchObject.curX, t = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(t, e), (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && 0 <= o ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && 315 <= o ? !1 === s.options.rtl ? "left" : "right" : 135 <= o && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? 35 <= o && o <= 135 ? "down" : "up" : "vertical"
    }, l.prototype.swipeEnd = function() {
        var e, t, i = this;
        if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (t = i.swipeDirection()) {
                case "left":
                case "down":
                    e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != t && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, t]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, l.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, l.prototype.swipeMove = function(e) {
        var t, i, o, s, n, r = this;
        return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || n && 1 !== n.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < r.touchObject.swipeLength && e.preventDefault(), s = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + o * s : r.swipeLeft = t + o * (r.$list.height() / r.listWidth) * s, !0 === r.options.verticalSwiping && (r.swipeLeft = t + o * s), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
    }, l.prototype.swipeStart = function(e) {
        var t, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
    }, l.prototype.unfilterSlides = l.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, l.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, l.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, l.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, l.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, l.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, c.fn.slick = function(e) {
        var t, i, o = this,
            s = e,
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (t = 0; t < r; t++)
            if ("object" == typeof s || void 0 === s ? o[t].slick = new l(o[t], s) : i = o[t].slick[s].apply(o[t].slick, n), void 0 !== i) return i;
        return o
    }
}),
function(e, t) {
    function i() {
        o.slick(n)
    }

    function s(e) {
        t.GGR_NAV.changeTheme("light" == e ? "dark" : "light")
    }
    var o = e(".hero-list"),
        n = {
            slidesToShow: 1,
            dots: !0,
            centerMode: !0,
            centerPadding: 0,
            arrows: !1,
            fade: !0,
            autoplay: !1
        };
    1 <= o.children().length && (i(), o.on("beforeChange", function(e, t, i, o) {
        s(t.$slides.eq(o).data("theme"))
    })), e(".hero-video").each(function(e, t) {
        t.play()
    })
}(jQuery, window),
function() {
    function e() {
        t.slick(i)
    }
    var t = jQuery(".blog-post-list"),
        i = {
            slidesToShow: 1,
            dots: !0,
            centerMode: !0,
            centerPadding: 0,
            arrows: !1,
            fade: !0,
            autoplay: !0,
            autoplaySpeed: 7e3
        };
    1 <= t.children().length && e()
}(), inView.offset({
        top: 0,
        bottom: .5 * $(window).height(),
        right: 0,
        left: 0
    }),
    function(s) {
        function e() {
            var e = new TimelineMax({
                    repeat: -1
                }),
                t = s(".impact-co2-cloud"),
                i = s(".impact-co2-arrow");
            return e.fromTo(i, 1.25, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Linear.easeNone
            }).to(i, 1.25, {
                opacity: 0,
                ease: Linear.easeNone
            }).to(i, 2, {
                y: "+=15",
                ease: Linear.easeOut
            }, 0).add((new TimelineMax).fromTo(t, 1.25, {
                y: 0
            }, {
                y: "+=4",
                ease: Linear.easeInOut
            }).to(t, 1.25, {
                y: 0,
                ease: Linear.easeInOut
            }), 0)
        }

        function t() {
            function e(e) {
                var t = e.find(".impact-battery-energy");
                return (new TimelineMax).set(t, {
                    opacity: 0
                }).to(e, 1, {
                    y: i,
                    ease: Linear.easeInOut
                }).fromTo(e, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power0.easeNone
                }, 0).to(e, 1, {
                    y: 0,
                    ease: Linear.easeInOut
                }, 4).to(e, .5, {
                    opacity: 0,
                    ease: Linear.easeInOut
                }, 4.5).set(t, {
                    opacity: 1
                }, 1.5).fromTo(t, 2, {
                    y: 30
                }, {
                    y: 0,
                    ease: Power0.easeNone
                }, 1.5)
            }
            var t = new TimelineMax({
                    repeat: -1,
                    delay: 1,
                    repeatDelay: 1
                }),
                i = 120,
                o = s(".impact-battery");
            return t.add(e(o.eq(0))).add(e(o.eq(1)), .3)
        }

        function i() {
            var e = new TimelineMax({
                    repeat: -1
                }),
                t = s(".impact-earth"),
                i = t.find(".impact-earth-track"),
                o = new TimelineMax({
                    repeat: 1
                }).to(t, 1, {
                    y: -3,
                    ease: Power0.easeNone
                }).to(t, 1, {
                    y: 0,
                    ease: Power0.easeNone
                });
            return e.add(o).to(i, 8, {
                rotation: -360,
                ease: Power0.easeNone
            }, 0)
        }

        function o(e) {
            r.removeClass("active"), r.eq(e).addClass("active"), l.removeClass("active"), l.eq(e).addClass("active"), animations[e].restart(!0), a = e
        }

        function n() {
            function e() {
                i || (i = setInterval(function() {
                    o((a + 1) % 3)
                }, 6500))
            }
            var t = s(".impact-dot,.impact-item-list"),
                i = null;
            t.on("mouseenter", function() {
                clearInterval(i), i = null
            }).on("mouseleave", e), e()
        }
        window.animations = [e(), t(), i()];
        var r = s(".impact-dot"),
            l = s(".impact-item"),
            a = 0;
        r.on("click", function() {
            var e = s(this);
            o(r.index(e))
        }), inView(".section-impact").on("enter", function(e) {
            s(e).addClass("inview"), n()
        })
    }(jQuery);
var $quoteTextList = $(".quote-text-list"),
    $quoteLogoList = $(".quote-logo-list");
$quoteLogoList.slick({
    asNavFor: ".quote-text-list",
    dots: !1,
    arrows: !1,
    centerMode: !1,
    focusOnSelect: !0,
    variableWidth: !0,
    infinite: !0,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            centerMode: !0,
            centerPadding: "40px",
            slidesToShow: 3
        }
    }, {
        breakpoint: 480,
        settings: {
            centerMode: !0,
            centerPadding: "40px",
            slidesToShow: 1
        }
    }]
}), $quoteTextList.slick({
    autoplay: !0,
    autoplaySpeed: 5e3,
    asNavFor: ".quote-logo-list",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: !0,
    arrows: !1,
    dots: !1
});