var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "main-page__section-2",
    },
    [
      _c("MainSection2SubmitLabel", {
        attrs: {
          delay: 0.5,
        },
        on: {
          endAnimation: _vm.endLabelAnimation,
        },
      }),
      _vm._v(" "),
      _c("MainSection2Content", {
        attrs: {
          "animate-content": _vm.readyLabelsAnimation,
        },
      }),
      _vm._v(" "),
      _c("MainSection2Footer", {
        attrs: {
          "ready-to-animate": _vm.readyLabelsAnimation,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }