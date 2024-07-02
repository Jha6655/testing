var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "section",
    {
      staticClass: "about-page__start-screen start-screen",
    },
    [
      _c("AnimatedLine", {
        staticClass: "start-screen__line",
        attrs: {
          "is-scroll-trigger": _vm.animateLine,
          direction: "down",
        },
      }),
      _vm._v(" "),
      _c(
        "TypedAnimation",
        {
          staticClass: "start-screen__title h1",
          attrs: {
            "is-scroll-trigger": _vm.animateTitle,
            callback: _vm.startAnimateSecondTitle,
            component: "h1",
          },
        },
        [
          _vm._v("\n    " + _vm._s(_vm.title1)),
          _c("br"),
          _vm._v("\n    " + _vm._s(_vm.title2) + "\n  "),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "start-screen__scroll p2",
        },
        [
          _c(
            "AnimateFade",
            {
              staticClass: "start-screen__scroll-inner",
              attrs: {
                "is-scroll-trigger": _vm.animateScroll,
                delay: 1,
                component: "div",
              },
            },
            [
              _c(
                "p",
                {
                  staticClass: "start-screen__scroll-text",
                },
                [_vm._v("Scroll Down")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  ref: "arrows",
                  staticClass: "start-screen__scroll-icon",
                },
                [
                  _c("span", [_vm._v(">")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(">")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(">")]),
                ]
              ),
            ]
          ),
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