var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "iframe-popup",
    },
    [
      _c("div", {
        staticClass: "iframe-popup__bg",
        on: {
          click: _vm.closePopup,
        },
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "iframe-popup__close-button",
          on: {
            click: _vm.closePopup,
          },
        },
        [_vm._v("[x]")]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "iframe-popup__content",
        domProps: {
          innerHTML: _vm._s(_vm.iframe),
        },
        on: {
          click: _vm.closePopup,
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }