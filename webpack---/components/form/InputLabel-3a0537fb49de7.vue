var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "label",
    {
      staticClass: "input-label",
      class: {
        error: _vm.isError,
        active: _vm.isActive,
        "textarea-label": _vm.forTextarea,
      },
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "input-placeholder p2",
        },
        [_vm._v(_vm._s(_vm.placeholder))]
      ),
      _vm._v(" "),
      _c("span", {
        staticClass: "input-border",
      }),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass: "error-icon",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
        },
        [
          _c("rect", {
            attrs: {
              x: "11.3135",
              y: "3.53552",
              width: "1",
              height: "11",
              transform: "rotate(45 11.3135 3.53552)",
              fill: "#FD4E28",
            },
          }),
          _vm._v(" "),
          _c("rect", {
            attrs: {
              x: "12.0205",
              y: "11.3137",
              width: "1",
              height: "11",
              transform: "rotate(135 12.0205 11.3137)",
              fill: "#FD4E28",
            },
          }),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }