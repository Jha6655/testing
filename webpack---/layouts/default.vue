import { render, staticRenderFns } from "./default.vue?vue&type=template&id=314f53c6&scoped=true&"
import script from "./default.vue?vue&type=script&lang=js&"
export * from "./default.vue?vue&type=script&lang=js&"
import style0 from "./default.vue?vue&type=style&index=0&id=314f53c6&scoped=true&lang=scss&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "314f53c6",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('314f53c6')) {
      api.createRecord('314f53c6', component.options)
    } else {
      api.reload('314f53c6', component.options)
    }
    module.hot.accept("./default.vue?vue&type=template&id=314f53c6&scoped=true&", function () {
      api.rerender('314f53c6', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "layouts/default.vue"
export default component.exports