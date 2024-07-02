var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "header",
    {
      staticClass: "start-header",
    },
    [
      _c(
        "nav",
        {
          staticClass: "start-header__navigation",
        },
        [_c("StartScreenHeaderNavigation")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isNightMode,
              expression: "!isNightMode",
            },
          ],
          staticClass: "start-header__logo",
        },
        [_c("AnimatedLogo")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isNightMode,
              expression: "isNightMode",
            },
          ],
          staticClass: "start-header__logo start-header__logo--nightmode",
        },
        [_c("AnimatedLogo")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "start-header__sound",
        },
        [_c("SoundSwitcher")],
        1
      ),
      _vm._v(" "),
      _c("TheDots", {
        staticClass: "start-header__dots",
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }