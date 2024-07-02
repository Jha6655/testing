var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "section",
    {
      staticClass: "section-4",
    },
    [
      _c("MainSection4Info"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "section-4__title-wrapper",
        },
        [
          _c("WheelBlock", {
            attrs: {
              text: _vm.main_page.wheel_title,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("MainSection4Description", {
        attrs: {
          text: _vm.main_page.wheel_description,
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "section-4__button",
        },
        [
          _c("CTAButton", {
            attrs: {
              delay: 0.5,
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