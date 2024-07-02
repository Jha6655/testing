var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "thanks",
      class: {
        visible: _vm.isVisible,
      },
    },
    [
      _c(
        "TypedAnimation",
        {
          staticClass: "thanks__title h3",
          attrs: {
            "is-scroll-trigger": _vm.isVisible,
            delay: 0.5,
          },
          on: {
            onComplete: _vm.showSmile,
          },
        },
        [_vm._v("\n    Thank You For"), _c("br"), _vm._v("\n    Request!\n  ")]
      ),
      _vm._v(" "),
      _c("img", {
        staticClass: "thanks__icon",
        class: {
          visible: _vm.isIconVisible,
        },
        attrs: {
          src: "/img/smile.svg",
          alt: "thank you for request",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }