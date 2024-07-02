import { render, staticRenderFns } from "./StartScreenHeader.vue?vue&type=template&id=36cf41b8&scoped=true&"
import script from "./StartScreenHeader.vue?vue&type=script&lang=js&"
export * from "./StartScreenHeader.vue?vue&type=script&lang=js&"
import style0 from "./StartScreenHeader.vue?vue&type=style&index=0&id=36cf41b8&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "36cf41b8",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('36cf41b8')) {
      api.createRecord('36cf41b8', component.options)
    } else {
      api.reload('36cf41b8', component.options)
    }
    module.hot.accept("./StartScreenHeader.vue?vue&type=template&id=36cf41b8&scoped=true&", function () {
      api.rerender('36cf41b8', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/StartScreenHeader.vue"
export default component.exports