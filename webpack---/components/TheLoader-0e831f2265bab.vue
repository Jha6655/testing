var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "loader",
    },
    [
      _c("div", {
        ref: "loader",
        staticClass: "loader__inner",
      }),
      _vm._v(" "),
      false
        ? _c("img", {
            staticClass: "loader__image",
            attrs: {
              src: "/img/no-signal.gif",
              alt: "no-signal",
            },
          })
        : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }