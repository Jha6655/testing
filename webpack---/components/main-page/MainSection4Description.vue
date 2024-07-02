import { render, staticRenderFns } from "./MainSection4Description.vue?vue&type=template&id=fc8ec346&scoped=true&"
import script from "./MainSection4Description.vue?vue&type=script&lang=js&"
export * from "./MainSection4Description.vue?vue&type=script&lang=js&"
import style0 from "./MainSection4Description.vue?vue&type=style&index=0&id=fc8ec346&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "fc8ec346",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('fc8ec346')) {
      api.createRecord('fc8ec346', component.options)
    } else {
      api.reload('fc8ec346', component.options)
    }
    module.hot.accept("./MainSection4Description.vue?vue&type=template&id=fc8ec346&scoped=true&", function () {
      api.rerender('fc8ec346', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/MainSection4Description.vue"
export default component.exports