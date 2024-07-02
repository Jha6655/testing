import { render, staticRenderFns } from "./CTAButton.vue?vue&type=template&id=dc5dcaee&scoped=true&"
import script from "./CTAButton.vue?vue&type=script&lang=js&"
export * from "./CTAButton.vue?vue&type=script&lang=js&"
import style0 from "./CTAButton.vue?vue&type=style&index=0&id=dc5dcaee&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "dc5dcaee",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('dc5dcaee')) {
      api.createRecord('dc5dcaee', component.options)
    } else {
      api.reload('dc5dcaee', component.options)
    }
    module.hot.accept("./CTAButton.vue?vue&type=template&id=dc5dcaee&scoped=true&", function () {
      api.rerender('dc5dcaee', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/buttons/CTAButton.vue"
export default component.exports