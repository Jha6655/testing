import { render, staticRenderFns } from "./CustomCursor.vue?vue&type=template&id=37e7b582&scoped=true&"
import script from "./CustomCursor.vue?vue&type=script&lang=js&"
export * from "./CustomCursor.vue?vue&type=script&lang=js&"
import style0 from "./CustomCursor.vue?vue&type=style&index=0&id=37e7b582&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "37e7b582",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('37e7b582')) {
      api.createRecord('37e7b582', component.options)
    } else {
      api.reload('37e7b582', component.options)
    }
    module.hot.accept("./CustomCursor.vue?vue&type=template&id=37e7b582&scoped=true&", function () {
      api.rerender('37e7b582', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/CustomCursor.vue"
export default component.exports