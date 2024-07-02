var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c("FooterTemplate", [
    _c(
      "div",
      {
        ref: "logo",
        staticClass: "footer__logo",
      },
      [
        _c("AnimatedLogo", {
          attrs: {
            speed: 1.2,
            direction: -1,
          },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }