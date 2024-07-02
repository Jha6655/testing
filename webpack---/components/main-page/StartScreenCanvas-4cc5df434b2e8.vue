var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "container",
      staticClass: "start-screen__canvas-wrapper",
    },
    [
      _c(
        "video",
        {
          ref: "videodom",
          staticStyle: {
            visibility: "hidden",
            position: "absolute",
            "pointer-events": "none",
          },
          attrs: {
            playsinline: "",
            loop: "",
            muted: "",
            crossOrigin: "anonymous",
          },
          domProps: {
            muted: true,
          },
        },
        [
          _c("source", {
            attrs: {
              src: "/models/tv_square.mp4",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "label",
          staticClass: "start-screen__mode-switcher",
          class: {
            hidden: _vm.isHidden,
          },
        },
        [_c("NightmodeLabel")],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }