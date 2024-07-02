var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "div",
    {
      staticClass: "developers",
    },
    [
      _c(
        "span",
        {
          staticClass: "developers__label",
        },
        [_vm._v("Created by ")]
      ),
      _vm._v(" "),
      _c("NavLinkEternal", {
        staticClass: "developers__link",
        attrs: {
          link: "https://thefirstthelast.agency/?utm_source=HindLaskosEntertaiment&utm_medium=article&utm_campaign=promo",
          text: "The First The Last",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }