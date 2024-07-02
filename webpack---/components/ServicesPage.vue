import { render, staticRenderFns } from "./ServicesPage.vue?vue&type=template&id=66206868&scoped=true&"
import script from "./ServicesPage.vue?vue&type=script&lang=js&"
export * from "./ServicesPage.vue?vue&type=script&lang=js&"
import style0 from "./ServicesPage.vue?vue&type=style&index=0&id=66206868&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "66206868",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('66206868')) {
      api.createRecord('66206868', component.options)
    } else {
      api.reload('66206868', component.options)
    }
    module.hot.accept("./ServicesPage.vue?vue&type=template&id=66206868&scoped=true&", function () {
      api.rerender('66206868', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/ServicesPage.vue"
export default component.exports