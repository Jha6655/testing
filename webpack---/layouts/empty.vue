import { render, staticRenderFns } from "./empty.vue?vue&type=template&id=2cc34029&"
import script from "./empty.vue?vue&type=script&lang=js&"
export * from "./empty.vue?vue&type=script&lang=js&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2cc34029')) {
      api.createRecord('2cc34029', component.options)
    } else {
      api.reload('2cc34029', component.options)
    }
    module.hot.accept("./empty.vue?vue&type=template&id=2cc34029&", function () {
      api.rerender('2cc34029', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "layouts/empty.vue"
export default component.exports