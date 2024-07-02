var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _vm.isButton
    ? _c(
        "button",
        {
          ref: "button",
          staticClass: "cta-button a1",
        },
        [
          _c("span", {
            staticClass: "cta-button__cover",
          }),
          _vm._v(" "),
          _c("span", {
            ref: "border",
            staticClass: "cta-button__border",
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              ref: "text",
              staticClass: "cta-button__text",
            },
            [_vm._v(_vm._s(_vm.text))]
          ),
        ]
      )
    : _c(
        "NuxtLink",
        {
          ref: "button",
          staticClass: "cta-button a1",
          attrs: {
            to: _vm.href,
          },
        },
        [
          _c("span", {
            staticClass: "cta-button__cover",
          }),
          _vm._v(" "),
          _c("span", {
            ref: "border",
            staticClass: "cta-button__border",
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              ref: "text",
              staticClass: "cta-button__text",
            },
            [_vm._v(_vm._s(_vm.text))]
          ),
        ]
      )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }