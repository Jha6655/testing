var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "error-page",
    },
    [
      _c("TheHeader"),
      _vm._v(" "),
      _c("GlitchText", {
        attrs: {
          delay: 3,
          stagger: 0.1,
          "offset-x": 200,
          "offset-y": 50,
          title1: _vm.error.title_1,
          title2: _vm.error.title_2,
          title3: _vm.error.title_3,
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "error-page__button",
        },
        [
          _c("CTAButton", {
            attrs: {
              "is-scroll-trigger": _vm.isButtonAnimation,
              text: "Go Back",
            },
            nativeOn: {
              click: function ($event) {
                return _vm.clickBackButton.apply(null, arguments)
              },
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }