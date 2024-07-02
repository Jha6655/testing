var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "NuxtLink",
    {
      staticClass: "header__logo",
      attrs: {
        to: "/",
      },
    },
    [
      _c("img", {
        staticClass: "header__logo-image",
        attrs: {
          src: _vm.image,
          alt: "Hind Laskos Entertaiment",
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }