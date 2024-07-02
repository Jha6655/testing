var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "ul",
    {
      staticClass: "header__navigation",
    },
    [
      _vm._l(_vm.menu, function (_ref) {
        var link = _ref.link,
          text = _ref.text,
          id = _ref.id
        return _c(
          "li",
          {
            key: id,
            staticClass: "header__navigation-item p2",
          },
          [
            _c("NavLink", {
              attrs: {
                link: link,
                text: text,
              },
            }),
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "header__navigation-item p2",
        },
        [
          _c("NavLink", {
            attrs: {
              "is-button": true,
              text: "FAQ",
            },
            on: {
              clickHandler: _vm.toggleFAQ,
            },
          }),
        ],
        1
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }