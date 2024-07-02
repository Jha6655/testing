import { render, staticRenderFns } from "./MainSection2.vue?vue&type=template&id=03640d4d&scoped=true&"
import script from "./MainSection2.vue?vue&type=script&lang=js&"
export * from "./MainSection2.vue?vue&type=script&lang=js&"
import style0 from "./MainSection2.vue?vue&type=style&index=0&id=03640d4d&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "03640d4d",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('03640d4d')) {
      api.createRecord('03640d4d', component.options)
    } else {
      api.reload('03640d4d', component.options)
    }
    module.hot.accept("./MainSection2.vue?vue&type=template&id=03640d4d&scoped=true&", function () {
      api.rerender('03640d4d', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/MainSection2.vue"
export default component.exports