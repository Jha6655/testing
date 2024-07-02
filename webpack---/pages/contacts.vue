import { render, staticRenderFns } from "./contacts.vue?vue&type=template&id=538b2768&scoped=true&"
import script from "./contacts.vue?vue&type=script&lang=js&"
export * from "./contacts.vue?vue&type=script&lang=js&"
import style0 from "./contacts.vue?vue&type=style&index=0&id=538b2768&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "538b2768",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('538b2768')) {
      api.createRecord('538b2768', component.options)
    } else {
      api.reload('538b2768', component.options)
    }
    module.hot.accept("./contacts.vue?vue&type=template&id=538b2768&scoped=true&", function () {
      api.rerender('538b2768', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "pages/contacts.vue"
export default component.exports