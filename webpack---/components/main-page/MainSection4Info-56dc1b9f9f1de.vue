var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "section-4__info",
    },
    [
      _c("TheBox", {
        attrs: {
          delay: 0.2,
          speed: 2,
        },
      }),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass: "section-4__info-logo",
          attrs: {
            width: "35",
            height: "24",
            viewBox: "0 0 35 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
        },
        [
          _c("path", {
            attrs: {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7.00007 0H6.51558e-05V8.40061H3.05983e-07L0 15.4006H6.51558e-05V23.8H7.00007V15.4006L14.0001 15.4006V16.7999H14.0001V23.7999H14.0001V23.8H21.0001V23.7999H35.0001V16.7999H21.0001V0H14.0001V8.40061L7.00007 8.40061V0Z",
              fill: "#383838",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "AnimateFade",
        {
          staticClass: "section-4__info-text p2",
        },
        [
          _vm._v("\n    Communicate company"),
          _c("br"),
          _vm._v("\n    information\n  "),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }