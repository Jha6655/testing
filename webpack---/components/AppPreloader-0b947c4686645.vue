var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "preloader",
      staticClass: "preloader",
    },
    [
      _c(
        "div",
        {
          staticClass: "preloader__inner",
        },
        [
          _c(
            "h4",
            {
              ref: "text",
              staticClass: "preloader__text",
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.resultText))]),
              _vm._v(" "),
              _c(
                "span",
                {
                  ref: "lastWord",
                },
                [_vm._v(" " + _vm._s(_vm.resultWord) + "|")]
              ),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", {
        ref: "progress",
        staticClass: "preloader__progress",
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }