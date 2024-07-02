var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "section",
      staticClass: "rotate-text",
    },
    [
      _c(
        "TypedAnimation",
        {
          staticClass: "rotate-text__title rotate-title",
          attrs: {
            component: "h2",
          },
        },
        [_vm._v("\n    " + _vm._s(_vm.text) + "\n  ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "rotate-text__wheel-wrapper",
        },
        [
          _c(
            "div",
            {
              ref: "wheel",
              staticClass: "rotate-text__wheel",
              class: {
                active: _vm.questComplete,
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "rotate-text__wheel-inner",
                },
                [
                  _c(
                    "TypedAnimation",
                    {
                      staticClass: "rotate-text__wheel-text rotate-title",
                      attrs: {
                        trigger: {
                          el: _vm.$refs.section,
                        },
                      },
                    },
                    [_vm._v("\n          " + _vm._s(_vm.text) + "\n        ")]
                  ),
                ],
                1
              ),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }