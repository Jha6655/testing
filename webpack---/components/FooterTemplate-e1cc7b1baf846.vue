var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "footer",
    {
      ref: "footer",
      staticClass: "footer",
    },
    [
      _c("NavLink", {
        ref: "policy",
        staticClass: "footer__left-1",
        attrs: {
          link: "/privacy-policy",
          text: "Privacy policy",
        },
      }),
      _vm._v(" "),
      _c("NavLink", {
        ref: "terms",
        staticClass: "footer__left-2",
        attrs: {
          link: "/terms-of-use",
          text: "Terms of use",
        },
      }),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "footer__right p2",
        },
        [
          _c("div", {
            ref: "border",
            staticClass: "footer__right-border--mobile",
          }),
          _vm._v(" "),
          _c("FooterDevelopers", {
            ref: "developers",
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("TheDots", {
        staticClass: "footer__dots",
        attrs: {
          "is-light": true,
          "start-animation": _vm.startDotsAnimation,
        },
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }