var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "transition",
    {
      attrs: {
        appear: "",
      },
    },
    [
      _vm.building
        ? _c(
            "div",
            {
              staticClass: "nuxt__build_indicator",
              style: _vm.indicatorStyle,
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    viewBox: "0 0 96 72",
                    version: "1",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                },
                [
                  _c(
                    "g",
                    {
                      attrs: {
                        fill: "none",
                        "fill-rule": "evenodd",
                      },
                    },
                    [
                      _c("path", {
                        attrs: {
                          d: "M6 66h23l1-3 21-37L40 6 6 66zM79 66h11L62 17l-5 9 22 37v3zM54 31L35 66h38z",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M29 69v-1-2H6L40 6l11 20 3-6L44 3s-2-3-4-3-3 1-5 3L1 63c0 1-2 3 0 6 0 1 2 2 5 2h28c-3 0-4-1-5-2z",
                          fill: "#00C58E",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M95 63L67 14c0-1-2-3-5-3-1 0-3 0-4 3l-4 6 3 6 5-9 28 49H79a5 5 0 0 1 0 3c-2 2-5 2-5 2h16c1 0 4 0 5-2 1-1 2-3 0-6z",
                          fill: "#00C58E",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M79 69v-1-2-3L57 26l-3-6-3 6-21 37-1 3a5 5 0 0 0 0 3c1 1 2 2 5 2h40s3 0 5-2zM54 31l19 35H35l19-35z",
                          fill: "#FFF",
                          "fill-rule": "nonzero",
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _vm._v("\n    " + _vm._s(_vm.animatedProgress) + "%\n  "),
            ]
          )
        : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }