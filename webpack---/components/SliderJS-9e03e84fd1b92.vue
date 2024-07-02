var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "slider",
      staticClass: "slider swiper",
    },
    [
      _c(
        "div",
        {
          ref: "wrapper",
          staticClass: "slider__wrapper swiper-wrapper",
        },
        _vm._l(_vm.doubledProjects, function (slide, index) {
          return _c(
            "div",
            {
              key: slide.id + index,
              staticClass: "slide swiper-slide",
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: slide.file
                      ? _vm.$config.apiUrl + slide.file
                      : slide.link,
                    target: "_blank",
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "slide__image",
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: _vm.$config.apiUrl + slide.photo,
                          alt: slide.name,
                        },
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "slide__image-cover",
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "slide__title p2",
                    },
                    [_vm._v("\n          " + _vm._s(slide.name) + "\n        ")]
                  ),
                ]
              ),
              _vm._v(" "),
              slide.iframe
                ? _c(
                    "button",
                    {
                      staticClass: "slide__button",
                      on: {
                        click: function () {
                          return _vm.openPopup(slide.iframe)
                        },
                      },
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "slide__button-text",
                        },
                        [_vm._v("Video")]
                      ),
                      _vm._v(" "),
                      _c(
                        "svg",
                        {
                          staticClass: "slide__button-icon",
                          attrs: {
                            width: "65",
                            height: "65",
                            viewBox: "0 0 65 65",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        },
                        [
                          _c("circle", {
                            attrs: {
                              cx: "33.2072",
                              cy: "32.4625",
                              r: "30.6393",
                              transform: "rotate(-2 33.2072 32.4625)",
                              fill: "white",
                            },
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d: "M29.2007 39.976L28.6864 25.2471L42.8973 32.1243L29.2007 39.976Z",
                              fill: "#101011",
                            },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
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