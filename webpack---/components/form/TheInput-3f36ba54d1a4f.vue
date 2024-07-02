var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "InputLabel",
    {
      attrs: {
        "is-active": !_vm.isEmpty,
        "is-error": _vm.isError,
        placeholder: _vm.placeholder,
      },
    },
    [
      _c("input", {
        ref: "input",
        staticClass: "input p2",
        attrs: {
          type: "text",
          name: _vm.name,
          autocomplete: "off",
        },
        domProps: {
          value: _vm.value,
        },
        on: {
          focus: function ($event) {
            return _vm.onFocus($event)
          },
          blur: function ($event) {
            return _vm.onBlur($event)
          },
          input: function ($event) {
            return _vm.onInput($event)
          },
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }