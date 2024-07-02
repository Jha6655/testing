import { render, staticRenderFns } from "./MainSection4.vue?vue&type=template&id=03803c4f&scoped=true&"
import script from "./MainSection4.vue?vue&type=script&lang=js&"
export * from "./MainSection4.vue?vue&type=script&lang=js&"
import style0 from "./MainSection4.vue?vue&type=style&index=0&id=03803c4f&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "03803c4f",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('03803c4f')) {
      api.createRecord('03803c4f', component.options)
    } else {
      api.reload('03803c4f', component.options)
    }
    module.hot.accept("./MainSection4.vue?vue&type=template&id=03803c4f&scoped=true&", function () {
      api.rerender('03803c4f', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/MainSection4.vue"
export default component.exports