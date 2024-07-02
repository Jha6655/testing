var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      ref: "popup",
      staticClass: "popup faq",
    },
    [
      _c("FAQCloseButton"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "faq__inner",
        },
        [
          _c(
            "div",
            {
              staticClass: "faq__content",
            },
            _vm._l(_vm.items, function (_ref) {
              var id = _ref.id,
                title = _ref.title,
                text = _ref.text,
                isActive = _ref.isActive
              return _c("FAQItem", {
                key: id,
                attrs: {
                  title: title,
                  text: text,
                  "is-active": isActive,
                },
              })
            }),
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }