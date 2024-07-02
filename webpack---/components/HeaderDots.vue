import { render, staticRenderFns } from "./HeaderDots.vue?vue&type=template&id=e07786dc&scoped=true&"
import script from "./HeaderDots.vue?vue&type=script&lang=js&"
export * from "./HeaderDots.vue?vue&type=script&lang=js&"
import style0 from "./HeaderDots.vue?vue&type=style&index=0&id=e07786dc&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "e07786dc",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('e07786dc')) {
      api.createRecord('e07786dc', component.options)
    } else {
      api.reload('e07786dc', component.options)
    }
    module.hot.accept("./HeaderDots.vue?vue&type=template&id=e07786dc&scoped=true&", function () {
      api.rerender('e07786dc', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/HeaderDots.vue"
export default component.exports