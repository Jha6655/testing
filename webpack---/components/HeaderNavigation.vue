import { render, staticRenderFns } from "./HeaderNavigation.vue?vue&type=template&id=3dec695c&scoped=true&"
import script from "./HeaderNavigation.vue?vue&type=script&lang=js&"
export * from "./HeaderNavigation.vue?vue&type=script&lang=js&"
import style0 from "./HeaderNavigation.vue?vue&type=style&index=0&id=3dec695c&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "3dec695c",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3dec695c')) {
      api.createRecord('3dec695c', component.options)
    } else {
      api.reload('3dec695c', component.options)
    }
    module.hot.accept("./HeaderNavigation.vue?vue&type=template&id=3dec695c&scoped=true&", function () {
      api.rerender('3dec695c', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/HeaderNavigation.vue"
export default component.exports