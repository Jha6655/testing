var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "section",
    {
      staticClass: "section-2__content",
    },
    [
      _c(
        "div",
        {
          staticClass: "section-2__snake",
        },
        [_c("AppSnake")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "title",
          staticClass: "section-2__title",
        },
        [
          _c("TypedAnimationLastWord", {
            staticClass: "h2",
            attrs: {
              tag: "h2",
              "start-animation": _vm.animateContent,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("MainSection2Labels", {
        attrs: {
          labels: _vm.labels,
        },
      }),
      _vm._v(" "),
      _c(
        "footer",
        {
          staticClass: "section-2__footer",
        },
        [
          _c(
            "AnimateFrom",
            {
              staticClass: "section-2__footer-text p2",
              attrs: {
                tag: "p",
                "is-percent": true,
                y: 20,
                delay: 0.6,
                "is-scroll-trigger": _vm.animateContent,
              },
            },
            _vm._l(_vm.description, function (string, index) {
              return _c(
                "span",
                {
                  key: index,
                },
                [_vm._v("\n        " + _vm._s(string) + "\n      ")]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "AnimateFrom",
            {
              staticClass: "section-2__footer-text--mobile p2",
              attrs: {
                tag: "p",
                "is-percent": true,
                y: 20,
                delay: 0.6,
                "is-scroll-trigger": _vm.animateContent,
              },
            },
            _vm._l(_vm.description, function (string, index) {
              return _c(
                "span",
                {
                  key: index,
                },
                [_vm._v("\n        " + _vm._s(string) + "\n      ")]
              )
            }),
            0
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }