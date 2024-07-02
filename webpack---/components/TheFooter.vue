import { render, staticRenderFns } from "./TheFooter.vue?vue&type=template&id=50f6c8a1&scoped=true&"
import script from "./TheFooter.vue?vue&type=script&lang=js&"
export * from "./TheFooter.vue?vue&type=script&lang=js&"
import style0 from "./TheFooter.vue?vue&type=style&index=0&id=50f6c8a1&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "50f6c8a1",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('50f6c8a1')) {
      api.createRecord('50f6c8a1', component.options)
    } else {
      api.reload('50f6c8a1', component.options)
    }
    module.hot.accept("./TheFooter.vue?vue&type=template&id=50f6c8a1&scoped=true&", function () {
      api.rerender('50f6c8a1', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/TheFooter.vue"
export default component.exports