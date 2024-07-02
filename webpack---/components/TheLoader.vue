import { render, staticRenderFns } from "./TheLoader.vue?vue&type=template&id=0dfb4719&scoped=true&"
import script from "./TheLoader.vue?vue&type=script&lang=js&"
export * from "./TheLoader.vue?vue&type=script&lang=js&"
import style0 from "./TheLoader.vue?vue&type=style&index=0&id=0dfb4719&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "0dfb4719",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0dfb4719')) {
      api.createRecord('0dfb4719', component.options)
    } else {
      api.reload('0dfb4719', component.options)
    }
    module.hot.accept("./TheLoader.vue?vue&type=template&id=0dfb4719&scoped=true&", function () {
      api.rerender('0dfb4719', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/TheLoader.vue"
export default component.exports