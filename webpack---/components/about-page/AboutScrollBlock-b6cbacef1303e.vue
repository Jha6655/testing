var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "trigger",
      staticClass: "about-page__scroll-block",
    },
    [
      _c(
        "div",
        {
          ref: "block",
          staticClass: "scroll-block",
        },
        [
          _c(
            "div",
            {
              staticClass: "scroll-block__left",
            },
            [
              _c("div", {
                ref: "graphics",
                staticClass: "scroll-block__graphics",
              }),
              _vm._v(" "),
              _c("div", {
                ref: "tabs",
                staticClass: "scroll-block__graphics-tabs",
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "right",
              staticClass: "scroll-block__right",
            },
            [
              _c(
                "div",
                {
                  ref: "container",
                  staticClass: "scroll-block__slides",
                },
                _vm._l(_vm.features, function (_ref) {
                  var description = _ref.description,
                    title = _ref.title,
                    id = _ref.id
                  return _c(
                    "div",
                    {
                      key: id,
                      staticClass: "scroll-block__slide",
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "scroll-block__slide-description p2",
                        },
                        [_vm._v(_vm._s(description))]
                      ),
                      _vm._v(" "),
                      _c(
                        "h3",
                        {
                          staticClass: "scroll-block__slide-title h3",
                        },
                        [_vm._v(_vm._s(title))]
                      ),
                    ]
                  )
                }),
                0
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }