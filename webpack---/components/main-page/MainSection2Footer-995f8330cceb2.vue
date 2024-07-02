var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "footer",
    {
      ref: "footer",
      staticClass: "section-2__footer",
    },
    [
      _c(
        "AnimateFrom",
        {
          staticClass: "section-2__footer-text-1 p2",
          attrs: {
            tag: "p",
            delay: 0.6,
            y: 20,
            "is-scroll-trigger": _vm.readyToAnimate,
          },
        },
        [_vm._v("1 place")]
      ),
      _vm._v(" "),
      _c(
        "AnimateFrom",
        {
          staticClass: "section-2__footer-text-2 p2",
          attrs: {
            tag: "p",
            delay: 0.8,
            y: 20,
            "is-scroll-trigger": _vm.readyToAnimate,
          },
        },
        [
          _c("span", [_vm._v("to pitch your ideas to")]),
          _vm._v(" "),
          _c("span", [_vm._v("creatives and producers")]),
        ]
      ),
      _vm._v(" "),
      _c(
        "AnimateFrom",
        {
          staticClass: "section-2__footer-text-3 p2",
          attrs: {
            tag: "p",
            delay: 1.0,
            y: 20,
            "is-scroll-trigger": _vm.readyToAnimate,
          },
        },
        [_vm._v("Scroll Down")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }