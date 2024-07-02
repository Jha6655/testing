var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "section-4__description",
    },
    [
      _c(
        "div",
        {
          staticClass: "section-4__description-box",
        },
        [
          _c("TheBox", {
            attrs: {
              delay: 0.5,
              speed: 2,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass: "section-4__description-arrow",
          attrs: {
            width: "14",
            height: "13",
            viewBox: "0 0 14 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
        },
        [
          _c("rect", {
            attrs: {
              x: "12.0596",
              y: "6.15234",
              width: "0.894397",
              height: "8.04957",
              transform: "rotate(45 12.0596 6.15234)",
              fill: "#383838",
            },
          }),
          _vm._v(" "),
          _c("rect", {
            attrs: {
              x: "6.5528",
              y: "0.447266",
              width: "0.894397",
              height: "11.6723",
              fill: "#383838",
            },
          }),
          _vm._v(" "),
          _c("rect", {
            attrs: {
              x: "7.63281",
              y: "11.8447",
              width: "0.894397",
              height: "8.04957",
              transform: "rotate(135 7.63281 11.8447)",
              fill: "#383838",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "AnimateFrom",
        {
          staticClass: "section-4__description-text p2",
          attrs: {
            "is-percent": true,
            y: 20,
          },
        },
        [_vm._v("\n    " + _vm._s(_vm.text) + "\n  ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }