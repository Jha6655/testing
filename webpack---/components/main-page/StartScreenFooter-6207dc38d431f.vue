var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "footer",
    {
      staticClass: "start-screen__footer",
    },
    [
      _c(
        "div",
        {
          staticClass: "start-screen__footer-left p2",
        },
        [
          _vm._v(
            "\n    // Positioned at the axis of talent and content across film\n  "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "start-screen__footer-center",
        },
        [_c("StartScreenFooterScrolldown")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "start-screen__footer-right",
        },
        [_c("TheClock")],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }