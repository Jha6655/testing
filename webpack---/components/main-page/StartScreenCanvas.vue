import { render, staticRenderFns } from "./StartScreenCanvas.vue?vue&type=template&id=741cd722&scoped=true&"
import script from "./StartScreenCanvas.vue?vue&type=script&lang=js&"
export * from "./StartScreenCanvas.vue?vue&type=script&lang=js&"
import style0 from "./StartScreenCanvas.vue?vue&type=style&index=0&id=741cd722&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "741cd722",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('741cd722')) {
      api.createRecord('741cd722', component.options)
    } else {
      api.reload('741cd722', component.options)
    }
    module.hot.accept("./StartScreenCanvas.vue?vue&type=template&id=741cd722&scoped=true&", function () {
      api.rerender('741cd722', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/StartScreenCanvas.vue"
export default component.exports