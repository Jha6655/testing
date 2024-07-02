import { render, staticRenderFns } from "./StartScreenFooterScrolldown.vue?vue&type=template&id=751b1c41&scoped=true&"
import script from "./StartScreenFooterScrolldown.vue?vue&type=script&lang=js&"
export * from "./StartScreenFooterScrolldown.vue?vue&type=script&lang=js&"
import style0 from "./StartScreenFooterScrolldown.vue?vue&type=style&index=0&id=751b1c41&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "751b1c41",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('751b1c41')) {
      api.createRecord('751b1c41', component.options)
    } else {
      api.reload('751b1c41', component.options)
    }
    module.hot.accept("./StartScreenFooterScrolldown.vue?vue&type=template&id=751b1c41&scoped=true&", function () {
      api.rerender('751b1c41', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/StartScreenFooterScrolldown.vue"
export default component.exports