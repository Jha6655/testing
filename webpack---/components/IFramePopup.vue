import { render, staticRenderFns } from "./IFramePopup.vue?vue&type=template&id=e3580306&scoped=true&"
import script from "./IFramePopup.vue?vue&type=script&lang=js&"
export * from "./IFramePopup.vue?vue&type=script&lang=js&"
import style0 from "./IFramePopup.vue?vue&type=style&index=0&id=e3580306&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "e3580306",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('e3580306')) {
      api.createRecord('e3580306', component.options)
    } else {
      api.reload('e3580306', component.options)
    }
    module.hot.accept("./IFramePopup.vue?vue&type=template&id=e3580306&scoped=true&", function () {
      api.rerender('e3580306', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/IFramePopup.vue"
export default component.exports