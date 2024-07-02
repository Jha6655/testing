var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "section",
    {
      staticClass: "about-page__idea-block idea-block",
    },
    [
      _c("IdeaBlockArrow"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "idea-block__label",
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
        "TypeAnimation",
        {
          staticClass: "idea-block__title h1",
          attrs: {
            component: "h2",
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
          staticClass: "idea-block__cta-description",
        },
        [
          _c("AnimatedLine", {
            staticClass: "idea-block__cta-line",
            attrs: {
              delay: 0.6,
            },
          }),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "p2 idea-block__cta-plug-text",
            },
            [_vm._v("Just push the button")]
          ),
          _vm._v(" "),
          _c(
            "AnimatedParagraph",
            {
              staticClass: "p2 idea-block__cta-text",
              attrs: {
                delay: 0.5,
              },
            },
            [_vm._v("Just push the button")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "idea-block__button",
        },
        [
          _c("CTAButton", {
            attrs: {
              delay: 0.5,
              text: "Netpitch",
              href: "/contacts",
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