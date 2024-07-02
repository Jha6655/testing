var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "service-page",
    },
    [
      _c("TheHeader"),
      _vm._v(" "),
      _c("TvFrame"),
      _vm._v(" "),
      _c("HeaderPlug"),
      _vm._v(" "),
      _c("section", {
        ref: "content",
        staticClass: "service-page__inner",
        domProps: {
          innerHTML: _vm._s(_vm.content),
        },
      }),
      _vm._v(" "),
      _c("TheFooter"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }