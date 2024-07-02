var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "TemplateFooter",
    {
      staticClass: "contacts-footer",
      attrs: {
        "is-scroll-trigger": _vm.animateFooter,
      },
    },
    [
      _c(
        "div",
        {
          staticClass: "footer__socials",
        },
        _vm._l(_vm.socials, function (_ref) {
          var id = _ref.id,
            name = _ref.name,
            link = _ref.link
          return _c("NavLinkExternal", {
            key: id,
            ref: "socials",
            refInFor: true,
            attrs: {
              text: name,
              link: link,
            },
          })
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "footer__logo",
        },
        [
          _c("TheLogo", {
            attrs: {
              image: "/img/logo-white.svg",
            },
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }