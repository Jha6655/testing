var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "box",
      staticClass: "box",
    },
    [
      _c("div", {
        ref: "top",
        staticClass: "border-top",
      }),
      _vm._v(" "),
      _c("div", {
        ref: "right",
        staticClass: "border-right",
      }),
      _vm._v(" "),
      _c("div", {
        ref: "bottom",
        staticClass: "border-bottom",
      }),
      _vm._v(" "),
      _c("div", {
        ref: "left",
        staticClass: "border-left",
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }