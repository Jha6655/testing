var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "start-header__dots",
      class: {
        light: _vm.isLight,
      },
    },
    [
      _c("div", {
        staticClass: "start-header__dot",
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "start-header__dot",
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }