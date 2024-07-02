import { render, staticRenderFns } from "./NumberLabel.vue?vue&type=template&id=30e524c0&"
import script from "./NumberLabel.vue?vue&type=script&lang=js&"
export * from "./NumberLabel.vue?vue&type=script&lang=js&"


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
    if (!api.isRecorded('30e524c0')) {
      api.createRecord('30e524c0', component.options)
    } else {
      api.reload('30e524c0', component.options)
    }
    module.hot.accept("./NumberLabel.vue?vue&type=template&id=30e524c0&", function () {
      api.rerender('30e524c0', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/NumberLabel.vue"
export default component.exports