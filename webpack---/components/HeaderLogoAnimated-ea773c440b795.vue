var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "nuxt-link",
    {
      staticClass: "header__logo",
      attrs: {
        to: "/",
      },
    },
    [_c("AnimatedLogo")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }