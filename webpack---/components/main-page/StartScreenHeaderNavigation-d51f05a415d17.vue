var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "ul",
    {
      staticClass: "start-header__navigation-list",
    },
    [
      _c(
        "li",
        {
          staticClass: "start-header__navigation-item",
        },
        [
          _c("LinkSwitcher", {
            attrs: {
              link: "/about",
              text: "About us",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "start-header__navigation-item",
        },
        [
          _c("LinkSwitcher", {
            attrs: {
              link: "/contacts",
              text: "Contacts",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "start-header__navigation-item",
        },
        [
          _c("LinkSwitcher", {
            attrs: {
              link: "/faq",
              text: "FAQ",
              "is-button": true,
            },
            nativeOn: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.toggleFAQ.apply(null, arguments)
              },
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