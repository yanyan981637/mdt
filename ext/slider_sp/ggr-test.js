        var an = !1,
            sn = on,
            cn = "data-v-37150210",
            ln = null,
            un = Vt(en, nn, rn, an, sn, cn, ln),
            fn = un.exports,
            dn = 300,
            pn = ".gc-nav-against",
            gn = {
                i18n: Ut,
                mixins: [St],
                components: {
                    Logo: ne,
                    Menuicon: de,
                    MyGogoro: je,
                    NavItem: Ae,
                    SeriesMenu: tn,
                    ShoppingCart: fn
                },
                props: {
                    lang: {
                        type: String,
                        required: !0
                    },
                    theme: {
                        type: String,
                        required: !1,
                        default: "light"
                    },
                    scrollingOpacity: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    },
                    urlPrefix: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    },
                    isStore: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isMenuOpen: !1,
                        isScooterMenuOpen: !1,
                        selectedSeries: "menu",
                        pageOffsetY: 0,
                        againstElement: null,
                        againstElementPosition: null,
                        themeState: this.theme
                    }
                },
                watch: {
                    isMenuOpen: function(t) {
                        this.isScooterMenuOpen = t
                    },
                    isScooterMenuOpen: function(t) {
                        !this.isMenuOpen && t && (this.isMenuOpen = !0)
                    },
                    anyMenuToggle: function(t) {
                        t ? document.documentElement.classList.add("ggr-nav-noscroll") : document.documentElement.classList.remove("ggr-nav-noscroll")
                    },
                    top: function(t) {
                        var e = this.navHeight,
                            n = this.navLeft;
                        !n && Math.abs(t) >= e ? (this.navLeft = !0, this.isScooterMenuOpen = !1, document.body.dispatchEvent($t("gc-nav-leave"))) : n && Math.abs(t) < e && (this.navLeft = !1, document.body.dispatchEvent($t("gc-nav-enter")))
                    }
                },
                computed: {
                    anyMenuToggle: function() {
                        return this.isScooterMenuOpen || this.isMenuOpen
                    },
                    loginEnabled: function() {
                        return "tc" === this.lang
                    },
                    backgroundColor: function() {
                        var t;
                        if (t = this.isDark ? "rgba(18,18,21" : "rgba(255,255,255", this.scrollingOpacity) {
                            var e = Math.min(dn, this.pageOffsetY) / dn;
                            return "".concat(t, ",").concat(e, ")")
                        }
                        return "".concat(t, ",1)")
                    },
                    top: function() {
                        var t = this.navHeight,
                            e = this.againstElementPosition,
                            n = 0;
                        return e && (n = Math.min(0, e.top - t), n = Math.max(n, -t)), n
                    }
                },
                methods: {
                    urlFor: Pt,
                    updateOffset: function() {
                        this.navHeight = this.$refs.nav.offsetHeight, this.pageOffsetY = window.pageYOffset, this.againstElement && (this.againstElementPosition = this.againstElement.getBoundingClientRect())
                    },
                    changeTheme: function(t) {
                        this.themeState = t, this.$nextTick(function() {
                            return At()
                        })
                    },
                    resetMenu: function() {
                        var t = this;
                        this.$nextTick(function() {
                            var e = window.innerWidth;
                            t.isScooterMenuOpen = !1, t.selectedSeries = e > 543 ? "s-performance" : "menu"
                        })
                    },
                    resetAgainst: function() {
                        this.navLeft = !1, this.againstElement = document.querySelector(pn), this.againstElementPosition = void 0
                    }
                },
                beforeMount: function() {
                    var t = this;
                    this.$bus.$on("open-nav-menu", function(e) {
                        t.selectedSeries = e, setTimeout(function() {
                            t.isScooterMenuOpen = !0
                        }, 50)
                    })
                },
                mounted: function() {
                    var t = this;
                    this.resetAgainst(), window.addEventListener("scroll", this.updateOffset), window.GGR_NAV = {
                        changeTheme: this.changeTheme.bind(this),
                        resetAgainst: this.resetAgainst.bind(this)
                    }, this.resetMenu(), window.addEventListener("resize", function() {
                        t.isMenuOpen = !1
                    }), window.addEventListener("resize", Rt(this.resetMenu, 250)), At(), document.body.dispatchEvent($t("gc-nav-loaded"))
                }
            },
            Mn = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("nav", {
                    staticClass: "ggr-nav",
                    class: {
                        "ggr-nav--dark": t.isDark, "ggr-nav--light": t.isLight, "ggr-nav--static-bg": !t.scrollingOpacity, "ggr-nav--scrolling-bg": t.scrollingOpacity
                    }
                }, [t.isDark ? n("v-style", [t._v("\n    :root  {\n    --nav-header-bg-color: var(--color-dark-black);\n\n    --nav-list-bg-color: #202023;\n    --nav-sm-list-bg-color: var(--color-dark-black);\n\n    --nav-link-color: var(--color-white);\n    --nav-secondary-text-color: var(--color-gray);\n\n    --nav-series-bg-color: #202023;\n    --nav-model-menu-bg-color: var(--color-opacity-charcoal);\n    }\n\n  ")]) : t._e(), t.isLight ? n("v-style", [t._v("\n    :root  {\n      --nav-header-bg-color: var(--color-white);\n      --nav-list-bg-color: var(--color-light-gray);\n      --nav-sm-list-bg-color: var(--color-white);\n\n      --nav-link-color: var(--color-charcoal);\n      --nav-secondary-text-color: var(--color-gray);\n\n      --nav-series-bg-color: var(--color-charcoal);\n      --nav-model-menu-bg-color: var(--color-opacity-light-gray);\n    }\n  ")]) : t._e(), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.isMenuOpen,
                        expression: "isMenuOpen"
                    }],
                    staticClass: "nav-menustate gc-hide",
                    attrs: {
                        type: "checkbox",
                        id: "nav-menustate"
                    },
                    domProps: {
                        checked: Array.isArray(t.isMenuOpen) ? t._i(t.isMenuOpen, null) > -1 : t.isMenuOpen
                    },
                    on: {
                        change: function(e) {
                            var n = t.isMenuOpen,
                                r = e.target,
                                i = !!r.checked;
                            if (Array.isArray(n)) {
                                var o = null,
                                    a = t._i(n, o);
                                r.checked ? a < 0 && (t.isMenuOpen = n.concat([o])) : a > -1 && (t.isMenuOpen = n.slice(0, a).concat(n.slice(a + 1)))
                            } else t.isMenuOpen = i
                        }
                    }
                }), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.isScooterMenuOpen,
                        expression: "isScooterMenuOpen"
                    }],
                    staticClass: "gc-hide",
                    attrs: {
                        type: "checkbox",
                        id: "scooter-menu-toggle"
                    },
                    domProps: {
                        checked: Array.isArray(t.isScooterMenuOpen) ? t._i(t.isScooterMenuOpen, null) > -1 : t.isScooterMenuOpen
                    },
                    on: {
                        change: function(e) {
                            var n = t.isScooterMenuOpen,
                                r = e.target,
                                i = !!r.checked;
                            if (Array.isArray(n)) {
                                var o = null,
                                    a = t._i(n, o);
                                r.checked ? a < 0 && (t.isScooterMenuOpen = n.concat([o])) : a > -1 && (t.isScooterMenuOpen = n.slice(0, a).concat(n.slice(a + 1)))
                            } else t.isScooterMenuOpen = i
                        }
                    }
                }), n("label", {
                    staticClass: "close-scooter-menu",
                    attrs: {
                        for: "nav-menustate"
                    }
                }), n("div", {
                    ref: "nav",
                    staticClass: "ggr-nav-container",
                    style: {
                        transform: "translateY(" + t.top + "px)",
                        backgroundColor: t.backgroundColor
                    }
                }, [n("div", {
                    staticClass: "ggr-header-container"
                }, [n("div", {
                    staticClass: "gc-container"
                }, [n("ul", {
                    staticClass: "ggr-header"
                }, [n("li", {
                    staticClass: "ggr-header-item menuicon-item"
                }, [n("menuicon", {
                    attrs: {
                        isMenuOpen: t.isMenuOpen
                    }
                })], 1), n("li", {
                    staticClass: "ggr-header-item logo-item"
                }, [n("logo", {
                    attrs: {
                        "root-url": t.urlFor(t.t("rootUrl"), {
                            onlyPath: !t.urlPrefix
                        })
                    }
                })], 1), n("li", {
                    staticClass: "ggr-header-item my-gogoro-item"
                }, [t.isStore ? n("shopping-cart") : t._e(), n("my-gogoro")], 1)])])]), n("transition", {
                    attrs: {
                        name: "nav-list"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isMenuOpen,
                        expression: "isMenuOpen"
                    }],
                    staticClass: "ggr-nav-list-container"
                }, [n("div", {
                    staticClass: "gc-container"
                }, [n("ul", {
                    staticClass: "ggr-nav-list"
                }, [n("li", {
                    staticClass: "ggr-nav-item ggr-nav-item--logo gc-desktop-visible"
                }, [n("logo", {
                    attrs: {
                        "root-url": t.urlFor(t.t("rootUrl"), {
                            onlyPath: !t.urlPrefix
                        })
                    }
                })], 1), t._l(t.t("navLinks"), function(e) {
                    return n("nav-item", {
                        key: e.name,
                        class: (r = {
                            "ggr-nav-item--active": t.isScooterMenuOpen && "ggr-nav-item--scooter" == e.class
                        }, r[e.class || ""] = !0, r),
                        attrs: {
                            item: e
                        }
                    }, [n(e.after, {
                        tag: "component",
                        attrs: {
                            slot: "after"
                        },
                        slot: "after"
                    })], 1);
                    var r
                }), n("nav-item", {
                    staticClass: "ggr-nav-item--divider gc-desktop-visible"
                }), t.isStore ? n("nav-item", {
                    staticClass: "ggr-nav-item--secondary ggr-nav-item--shopping gc-desktop-visible"
                }, [n("shopping-cart")], 1) : t._l(t.t("secondaryNavLinks"), function(t) {
                    return n("nav-item", {
                        key: t.name,
                        staticClass: "ggr-nav-item--secondary",
                        attrs: {
                            item: t
                        }
                    })
                }), t.loginEnabled ? n("nav-item", {
                    staticClass: "ggr-nav-item--secondary ggr-nav-item--login gc-desktop-visible"
                }, [n("my-gogoro")], 1) : t._e()], 2)])])])], 1)], 1)
            },
            vn = [];