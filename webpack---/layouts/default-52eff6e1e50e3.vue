var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "layout",
      attrs: {
        id: "scroller",
      },
    },
    [
      _c("AppPreloader", {
        ref: "preloader",
      }),
      _vm._v(" "),
      _c(
        "main",
        {
          ref: "page",
          staticClass: "layout__page",
        },
        [_c("Nuxt")],
        1
      ),
      _vm._v(" "),
      _c("FAQPopup"),
      _vm._v(" "),
      _c("TheLoader"),
      _vm._v(" "),
      _c("CustomCursor"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }