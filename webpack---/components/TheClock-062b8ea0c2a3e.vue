var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "p",
    {
      staticClass: "clock p2",
      class: {
        light: _vm.isLight,
      },
    },
    [_vm._v(_vm._s(_vm.fullTime))]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }