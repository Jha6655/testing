var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _vm.isButton
    ? _c(
        "button",
        {
          staticClass: "link-switcher p2",
          on: {
            mouseenter: _vm.onMouseover,
            mouseleave: _vm.onMouseleave,
          },
        },
        [
          _c(
            "span",
            {
              staticClass: "link-switcher__icon",
            },
            [_c("LinkSwitcherIcon")],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "link-switcher__text",
            },
            [_vm._v(_vm._s(_vm.text))]
          ),
        ]
      )
    : _c(
        "NuxtLink",
        {
          staticClass: "link-switcher p2",
          attrs: {
            to: _vm.link,
          },
          nativeOn: {
            mouseenter: function ($event) {
              return _vm.onMouseover.apply(null, arguments)
            },
            mouseleave: function ($event) {
              return _vm.onMouseleave.apply(null, arguments)
            },
          },
        },
        [
          _c(
            "span",
            {
              staticClass: "link-switcher__icon",
            },
            [_c("LinkSwitcherIcon")],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "link-switcher__text",
            },
            [_vm._v(_vm._s(_vm.text))]
          ),
        ]
      )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }