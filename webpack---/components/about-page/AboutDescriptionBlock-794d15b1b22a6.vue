var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "section",
    {
      staticClass: "about-page__description-block description-block",
    },
    [
      _c(
        "div",
        {
          staticClass: "description-block__left",
        },
        [
          _c("NumberLabel", {
            attrs: {
              text: _vm.label,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "description-block__right",
        },
        [
          _c(
            "div",
            {
              staticClass: "description-block__title-wrapper",
            },
            [
              _c("TheBox", {
                staticClass: "description-block__border",
                attrs: {
                  "is-scroll-trigger": _vm.isAboutUsTitleAnimate,
                },
              }),
              _vm._v(" "),
              _c(
                "TypedAnimation",
                {
                  staticClass: "description-block__title h2",
                  attrs: {
                    "type-speed": 0.02,
                    "is-scroll-trigger": _vm.isAboutUsTitleAnimate,
                    component: "h2",
                  },
                },
                [_vm._v("\n        " + _vm._s(_vm.description1) + "\n      ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "AnimatedParagraph",
            {
              staticClass: "description-block__text p2",
            },
            [_vm._v("\n      " + _vm._s(_vm.description2) + "\n    ")]
          ),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }