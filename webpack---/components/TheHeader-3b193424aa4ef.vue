var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "HeaderWrapper",
    {
      ref: "header",
      staticClass: "header",
    },
    [
      _c(
        "nav",
        {
          staticClass: "header__left",
        },
        [_c("HeaderNavigation")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "logo",
          staticClass: "header__center",
        },
        [
          _c(
            "a",
            {
              staticClass: "header__logo",
              attrs: {
                href: "/",
              },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.clickLogo.apply(null, arguments)
                },
              },
            },
            [_c("AnimatedLogo")],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "clock",
          staticClass: "header__right",
        },
        [_c("TheClock")],
        1
      ),
      _vm._v(" "),
      _c("TheDots", {
        staticClass: "header__dots",
        attrs: {
          "is-light": true,
          "start-animation": _vm.startDotsAnimation,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }