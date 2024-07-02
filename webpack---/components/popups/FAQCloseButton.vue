import { render, staticRenderFns } from "./FAQCloseButton.vue?vue&type=template&id=372f1411&scoped=true&"
import script from "./FAQCloseButton.vue?vue&type=script&lang=js&"
export * from "./FAQCloseButton.vue?vue&type=script&lang=js&"
import style0 from "./FAQCloseButton.vue?vue&type=style&index=0&id=372f1411&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "372f1411",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('372f1411')) {
      api.createRecord('372f1411', component.options)
    } else {
      api.reload('372f1411', component.options)
    }
    module.hot.accept("./FAQCloseButton.vue?vue&type=template&id=372f1411&scoped=true&", function () {
      api.rerender('372f1411', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/popups/FAQCloseButton.vue"
export default component.exports