var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "title",
      staticClass: "title h1",
    },
    [
      _c(
        "div",
        {
          staticClass: "texts",
        },
        _vm._l(10, function (index) {
          return _c(
            "div",
            {
              key: index,
              staticClass: "text",
            },
            [
              _c(
                "div",
                {
                  staticClass: "text-inner text-inner--animated",
                  class: "text-" + index,
                },
                [
                  _vm._v("\n        " + _vm._s(_vm.title1)),
                  _c("br"),
                  _vm._v("\n        " + _vm._s(_vm.title2)),
                  _c("br"),
                  _vm._v("\n        " + _vm._s(_vm.title3) + "\n      "),
                ]
              ),
            ]
          )
        }),
        0
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }