import { render, staticRenderFns } from "./ContactsFooter.vue?vue&type=template&id=742fa5af&scoped=true&"
import script from "./ContactsFooter.vue?vue&type=script&lang=js&"
export * from "./ContactsFooter.vue?vue&type=script&lang=js&"
import style0 from "./ContactsFooter.vue?vue&type=style&index=0&id=742fa5af&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "742fa5af",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('742fa5af')) {
      api.createRecord('742fa5af', component.options)
    } else {
      api.reload('742fa5af', component.options)
    }
    module.hot.accept("./ContactsFooter.vue?vue&type=template&id=742fa5af&scoped=true&", function () {
      api.rerender('742fa5af', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/contacts-page/ContactsFooter.vue"
export default component.exports