var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "HeaderWrapper",
    {
      staticClass: "header-plug",
    },
    [
      _c(
        "div",
        {
          staticClass: "header-plug__navigation",
        },
        [_c("HeaderNavigation")],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }