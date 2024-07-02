var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "main-page",
    },
    [
      _vm.isTV
        ? _c("StartScreen")
        : _c(
            "StartScreenDarkSection",
            [
              _c("TheHeader", {
                attrs: {
                  "no-animation": true,
                },
              }),
              _vm._v(" "),
              _c("TvFrame"),
              _vm._v(" "),
              _c("HeaderPlug"),
              _vm._v(" "),
              _c("MainSection2"),
              _vm._v(" "),
              _c("MainSectionSlider"),
              _vm._v(" "),
              _c("MainSection4"),
              _vm._v(" "),
              _c("TheFooter"),
            ],
            1
          ),
      _vm._v(" "),
      _vm.iframe ? _c("IFramePopup") : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }