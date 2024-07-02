var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "InputLabel",
    {
      attrs: {
        placeholder: _vm.placeholder,
        "is-active": !_vm.isEmpty,
        "is-error": _vm.isError,
        "for-textarea": true,
      },
    },
    [
      _c("textarea", {
        staticClass: "textarea p2",
        attrs: {
          autocomplete: "off",
          name: _vm.name,
        },
        domProps: {
          value: _vm.value,
        },
        on: {
          focus: _vm.onFocus,
          blur: _vm.onBlur,
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }