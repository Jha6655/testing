var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "el",
      staticClass: "faq__item",
    },
    [
      _c(
        "h3",
        {
          staticClass: "faq__item-title p1",
          attrs: {
            tabindex: "0",
            role: "button",
          },
          on: {
            click: _vm.toggleOpen,
          },
        },
        [
          _c(
            "span",
            {
              staticClass: "faq__item-title-text",
            },
            [_vm._v(_vm._s(_vm.title))]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "text",
          staticClass: "faq__item-text-wrapper",
        },
        [
          _c(
            "p",
            {
              staticClass: "faq__item-text p2",
            },
            [_vm._v("\n      " + _vm._s(_vm.text) + "\n    ")]
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "faq__item-pb",
          }),
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "faq__item-border",
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }