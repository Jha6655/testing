var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _vm.isExternal
    ? _c(
        "a",
        {
          staticClass: "nav-link p2",
          attrs: {
            href: _vm.link,
            rel: "noopener noreferrer",
            target: "_blank",
          },
        },
        [_vm._v(_vm._s(_vm.text))]
      )
    : _vm.isButton
    ? _c(
        "button",
        {
          staticClass: "nav-link p2",
          on: {
            click: function ($event) {
              return _vm.$emit("clickHandler")
            },
          },
        },
        [_vm._v("\n  " + _vm._s(_vm.text) + "\n")]
      )
    : _c(
        "NuxtLink",
        {
          staticClass: "nav-link p2",
          attrs: {
            to: _vm.link,
          },
        },
        [_vm._v(_vm._s(_vm.text))]
      )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }