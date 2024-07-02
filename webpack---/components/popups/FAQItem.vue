import { render, staticRenderFns } from "./FAQItem.vue?vue&type=template&id=a5afd848&scoped=true&"
import script from "./FAQItem.vue?vue&type=script&lang=js&"
export * from "./FAQItem.vue?vue&type=script&lang=js&"
import style0 from "./FAQItem.vue?vue&type=style&index=0&id=a5afd848&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "a5afd848",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('a5afd848')) {
      api.createRecord('a5afd848', component.options)
    } else {
      api.reload('a5afd848', component.options)
    }
    module.hot.accept("./FAQItem.vue?vue&type=template&id=a5afd848&scoped=true&", function () {
      api.rerender('a5afd848', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/popups/FAQItem.vue"
export default component.exports