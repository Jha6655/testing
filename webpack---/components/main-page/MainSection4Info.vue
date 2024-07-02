import { render, staticRenderFns } from "./MainSection4Info.vue?vue&type=template&id=6c176ac6&scoped=true&"
import script from "./MainSection4Info.vue?vue&type=script&lang=js&"
export * from "./MainSection4Info.vue?vue&type=script&lang=js&"
import style0 from "./MainSection4Info.vue?vue&type=style&index=0&id=6c176ac6&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "6c176ac6",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('6c176ac6')) {
      api.createRecord('6c176ac6', component.options)
    } else {
      api.reload('6c176ac6', component.options)
    }
    module.hot.accept("./MainSection4Info.vue?vue&type=template&id=6c176ac6&scoped=true&", function () {
      api.rerender('6c176ac6', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/MainSection4Info.vue"
export default component.exports