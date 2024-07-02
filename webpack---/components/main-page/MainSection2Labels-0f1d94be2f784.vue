var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "labels",
      staticClass: "section-2__labels",
    },
    _vm._l(_vm.labels, function (label, index) {
      return _c("NumberLabel", {
        key: index,
        class: "section-2__label-" + (index + 1),
        attrs: {
          delay: 0.7 + index * 0.2,
          text: "(" + (index + 1) + ") " + label,
        },
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }