var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "nightmode-label",
    },
    [
      _c(
        "svg",
        {
          staticClass: "nightmode-label__icon",
          attrs: {
            width: "35",
            height: "75",
            viewBox: "0 0 35 75",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
        },
        [
          _c("path", {
            attrs: {
              opacity: "0.3",
              d: "M35 72L30.1455 68.8748L29.8662 74.6415L35 72ZM35 3L29.8221 0.446117L30.1993 6.20728L35 3ZM30.5539 71.2847C20.7118 70.305 13.4635 66.05 8.66893 59.9053C3.86743 53.7518 1.5 45.6676 1.5 37H0.5C0.5 45.8421 2.91483 54.1565 7.88054 60.5205C12.8532 66.8933 20.357 71.2746 30.4548 72.2798L30.5539 71.2847ZM1.5 37C1.5 19.9994 14.1641 5.95586 30.573 3.78986L30.4421 2.79846C13.5424 5.02925 0.5 19.4911 0.5 37H1.5Z",
              fill: "#101011",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "nightmode-label__text p2",
        },
        [_vm._v("Switch Day 'N' Night")]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }