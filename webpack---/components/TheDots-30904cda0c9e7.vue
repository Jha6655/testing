var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "dots",
      class: {
        light: _vm.isLight,
      },
    },
    [
      _c("div", {
        ref: "left",
        staticClass: "dot",
      }),
      _vm._v(" "),
      _c("div", {
        ref: "right",
        staticClass: "dot",
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }