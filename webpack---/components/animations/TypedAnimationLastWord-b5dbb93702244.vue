var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    _vm.tag,
    {
      ref: "text",
      tag: "component",
      staticClass: "typed__text",
    },
    [
      _c("span", [_vm._v(_vm._s(_vm.resultText))]),
      _vm._v(" "),
      _c(
        "span",
        {
          ref: "lastWord",
        },
        [_vm._v(_vm._s(_vm.resultWord)), _c("span", [_vm._v("|")])]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }