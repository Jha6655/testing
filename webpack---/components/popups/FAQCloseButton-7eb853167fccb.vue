var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "button",
    {
      staticClass: "faq__close-button",
      attrs: {
        "aria-label": "close modal",
      },
      on: {
        click: _vm.closeFAQ,
      },
    },
    [_c("span"), _vm._v(" "), _c("span")]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }