var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "container",
      staticClass: "start-screen-wrapper",
    },
    [
      _c(
        "div",
        {
          staticClass: "start-screen",
          class: {
            "night-mode": _vm.isNightMode,
            "faq-opened": _vm.isFaqOpened,
          },
        },
        [
          _c("StartScreenCanvas"),
          _vm._v(" "),
          _c("StartScreenHeader"),
          _vm._v(" "),
          _c("StartScreenFooter"),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }