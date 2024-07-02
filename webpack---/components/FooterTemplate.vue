import { render, staticRenderFns } from "./FooterTemplate.vue?vue&type=template&id=03e322d0&scoped=true&"
import script from "./FooterTemplate.vue?vue&type=script&lang=js&"
export * from "./FooterTemplate.vue?vue&type=script&lang=js&"
import style0 from "./FooterTemplate.vue?vue&type=style&index=0&id=03e322d0&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "03e322d0",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('03e322d0')) {
      api.createRecord('03e322d0', component.options)
    } else {
      api.reload('03e322d0', component.options)
    }
    module.hot.accept("./FooterTemplate.vue?vue&type=template&id=03e322d0&scoped=true&", function () {
      api.rerender('03e322d0', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/FooterTemplate.vue"
export default component.exports