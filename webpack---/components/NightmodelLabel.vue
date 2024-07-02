import { render, staticRenderFns } from "./NightmodelLabel.vue?vue&type=template&id=77298d58&scoped=true&"
import script from "./NightmodelLabel.vue?vue&type=script&lang=js&"
export * from "./NightmodelLabel.vue?vue&type=script&lang=js&"
import style0 from "./NightmodelLabel.vue?vue&type=style&index=0&id=77298d58&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "77298d58",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('77298d58')) {
      api.createRecord('77298d58', component.options)
    } else {
      api.reload('77298d58', component.options)
    }
    module.hot.accept("./NightmodelLabel.vue?vue&type=template&id=77298d58&scoped=true&", function () {
      api.rerender('77298d58', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/NightmodelLabel.vue"
export default component.exports