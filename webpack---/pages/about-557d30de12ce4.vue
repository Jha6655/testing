var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "about-page",
    },
    [
      _c("HeaderPlug"),
      _vm._v(" "),
      _c("TheHeader"),
      _vm._v(" "),
      _c("TvFrame"),
      _vm._v(" "),
      _c("AboutStartScreen", {
        attrs: {
          title1: _vm.about.title_1,
          title2: _vm.about.title_2,
        },
      }),
      _vm._v(" "),
      _c("AboutDescriptionBlock", {
        attrs: {
          label: _vm.about.label_1,
          description1: _vm.about.description_1,
          description2: _vm.about.description_2,
        },
      }),
      _vm._v(" "),
      _c("AboutScrollBlock", {
        attrs: {
          features: _vm.about.features,
        },
      }),
      _vm._v(" "),
      _c("AboutIdeaBlock", {
        attrs: {
          label: _vm.about.label_3,
          title1: _vm.about.title_down_1,
          title2: _vm.about.title_down_2,
        },
      }),
      _vm._v(" "),
      _c("TheFooter"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }