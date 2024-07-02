import { render, staticRenderFns } from "./AboutScrollBlock.vue?vue&type=template&id=4b18c830&scoped=true&"
import script from "./AboutScrollBlock.vue?vue&type=script&lang=js&"
export * from "./AboutScrollBlock.vue?vue&type=script&lang=js&"
import style0 from "./AboutScrollBlock.vue?vue&type=style&index=0&id=4b18c830&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "4b18c830",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4b18c830')) {
      api.createRecord('4b18c830', component.options)
    } else {
      api.reload('4b18c830', component.options)
    }
    module.hot.accept("./AboutScrollBlock.vue?vue&type=template&id=4b18c830&scoped=true&", function () {
      api.rerender('4b18c830', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/about-page/AboutScrollBlock.vue"
export default component.exports