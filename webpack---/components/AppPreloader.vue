import { render, staticRenderFns } from "./AppPreloader.vue?vue&type=template&id=edead8a0&scoped=true&"
import script from "./AppPreloader.vue?vue&type=script&lang=js&"
export * from "./AppPreloader.vue?vue&type=script&lang=js&"
import style0 from "./AppPreloader.vue?vue&type=style&index=0&id=edead8a0&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "edead8a0",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('edead8a0')) {
      api.createRecord('edead8a0', component.options)
    } else {
      api.reload('edead8a0', component.options)
    }
    module.hot.accept("./AppPreloader.vue?vue&type=template&id=edead8a0&scoped=true&", function () {
      api.rerender('edead8a0', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/AppPreloader.vue"
export default component.exports