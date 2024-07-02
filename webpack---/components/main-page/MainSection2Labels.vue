import { render, staticRenderFns } from "./MainSection2Labels.vue?vue&type=template&id=02a4962c&scoped=true&"
import script from "./MainSection2Labels.vue?vue&type=script&lang=js&"
export * from "./MainSection2Labels.vue?vue&type=script&lang=js&"
import style0 from "./MainSection2Labels.vue?vue&type=style&index=0&id=02a4962c&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "02a4962c",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('02a4962c')) {
      api.createRecord('02a4962c', component.options)
    } else {
      api.reload('02a4962c', component.options)
    }
    module.hot.accept("./MainSection2Labels.vue?vue&type=template&id=02a4962c&scoped=true&", function () {
      api.rerender('02a4962c', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/MainSection2Labels.vue"
export default component.exports