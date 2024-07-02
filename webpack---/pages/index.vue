import { render, staticRenderFns } from "./index.vue?vue&type=template&id=2a183b29&"
import script from "./index.vue?vue&type=script&lang=js&"
export * from "./index.vue?vue&type=script&lang=js&"


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
    if (!api.isRecorded('2a183b29')) {
      api.createRecord('2a183b29', component.options)
    } else {
      api.reload('2a183b29', component.options)
    }
    module.hot.accept("./index.vue?vue&type=template&id=2a183b29&", function () {
      api.rerender('2a183b29', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "pages/index.vue"
export default component.exports