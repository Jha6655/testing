var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c("NavLink", {
    attrs: {
      "is-external": true,
      link: _vm.link,
      text: _vm.text,
    },
  })
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }