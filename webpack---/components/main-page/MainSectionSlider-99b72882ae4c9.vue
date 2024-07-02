var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "section",
    {
      staticClass: "section-3",
    },
    [
      _c(
        "header",
        {
          staticClass: "section-3__header",
        },
        [
          _c(
            "div",
            {
              staticClass: "section-3__title-wrapper",
            },
            [
              _c(
                "TypedAnimation",
                {
                  staticClass: "section-3__title h2",
                  attrs: {
                    component: "h2",
                  },
                },
                [_vm._v("\n        " + _vm._s(_vm.projects_title) + "\n      ")]
              ),
              _vm._v(" "),
              _c("TheBox", {
                attrs: {
                  delay: 0.2,
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "AnimateFrom",
            {
              staticClass: "section-3__text p2",
              attrs: {
                tag: "p",
                y: 20,
                "is-alpha": true,
              },
            },
            [_vm._v("\n      " + _vm._s(_vm.projects_description) + "\n    ")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "wrapper",
          staticClass: "section-slider__slider-wrapper",
        },
        [
          _c("SliderJS", {
            attrs: {
              projects: _vm.projects,
            },
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }