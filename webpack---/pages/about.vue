import { render, staticRenderFns } from "./about.vue?vue&type=template&id=0a606064&"
import script from "./about.vue?vue&type=script&lang=js&"
export * from "./about.vue?vue&type=script&lang=js&"


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
    if (!api.isRecorded('0a606064')) {
      api.createRecord('0a606064', component.options)
    } else {
      api.reload('0a606064', component.options)
    }
    module.hot.accept("./about.vue?vue&type=template&id=0a606064&", function () {
      api.rerender('0a606064', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "pages/about.vue"
export default component.exports