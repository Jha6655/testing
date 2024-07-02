var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "button",
    {
      staticClass: "sound-switcher",
      class: {
        active: !_vm.isMute,
      },
      on: {
        click: _vm.toggleSound,
      },
    },
    [
      _c(
        "span",
        {
          staticClass: "sound-switcher__text p2",
        },
        [_vm._v("Sound")]
      ),
      _vm._v(" "),
      _c("SoundSwitcherIcon"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }