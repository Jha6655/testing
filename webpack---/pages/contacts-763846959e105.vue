var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "contacts-page",
    },
    [
      _c("HeaderPlug"),
      _vm._v(" "),
      _c("TheHeader"),
      _vm._v(" "),
      _c("TvFrame"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "contacts-page__content content",
        },
        [
          _c(
            "div",
            {
              ref: "label1",
              staticClass: "content__part-1",
            },
            [
              _c("DotLabel", {
                attrs: {
                  text: "Contact Us",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "label2",
              staticClass: "content__part-2",
            },
            [
              _c(
                "p",
                {
                  staticClass: "contacts-page__form-description p2",
                },
                [_vm._v("For connection with us")]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "content__part-3",
            },
            [
              _c(
                "div",
                {
                  ref: "text",
                  staticClass: "content__text p2",
                },
                [
                  _c("div", {
                    domProps: {
                      innerHTML: _vm._s(_vm.contacts_page.description),
                    },
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.contacts_page.title))]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  ref: "email",
                  staticClass: "content__email-wrapper",
                },
                [
                  _c("NavLink", {
                    attrs: {
                      link: "mailto:press@netpitch.io",
                      "is-external": true,
                      text: _vm.contacts_page.email,
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "footer",
                {
                  ref: "footer",
                  staticClass: "content__footer",
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "content__footer-icon",
                      attrs: {
                        width: "27",
                        height: "27",
                        viewBox: "0 0 27 27",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      _c("path", {
                        attrs: {
                          d: "M0.5 14H26.5",
                          stroke: "white",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M5 4C8 5.5 15.6 7.6 22 4",
                          stroke: "white",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M22 22.9883C19 21.4883 11.4 19.3883 5 22.9883",
                          stroke: "white",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M13.4998 0.5C7.49981 4.83333 2.5 15.5 12.4998 26.5",
                          stroke: "white",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M14.0002 0.5C20.0002 4.83333 25 15.5 15.0002 26.5",
                          stroke: "white",
                        },
                      }),
                      _vm._v(" "),
                      _c("circle", {
                        attrs: {
                          cx: "13.5",
                          cy: "13.5",
                          r: "13",
                          stroke: "white",
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "content__footer-text p2",
                    },
                    [_vm._v("California / USA")]
                  ),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "content__part-4",
            },
            [
              _c("TheForm", {
                attrs: {
                  start: _vm.startFormAnimation,
                  "is-hidden": _vm.isFormSent,
                  "empty-form": _vm.emptyForm,
                },
                on: {
                  success: _vm.onSuccess,
                },
              }),
              _vm._v(" "),
              _c(
                "transition",
                {
                  attrs: {
                    name: "fade",
                  },
                },
                [
                  _vm.isFormSent
                    ? _c("ThanksBlock", {
                        attrs: {
                          "is-visible": true,
                        },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "canvasContainer",
              staticClass: "content__part-5",
            },
            [
              _c(
                "div",
                {
                  ref: "gameWrapper",
                  staticClass: "contacts__snake",
                },
                [_c("AppSnake")],
                1
              ),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "contacts-page__footer",
        },
        [
          _c("ContactsFooter", {
            attrs: {
              "animate-footer": _vm.animateFooter,
              socials: _vm.contacts_page.socials,
            },
          }),
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