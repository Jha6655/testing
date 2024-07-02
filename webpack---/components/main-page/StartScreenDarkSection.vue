import { render, staticRenderFns } from "./StartScreenDarkSection.vue?vue&type=template&id=50e76888&scoped=true&"
import script from "./StartScreenDarkSection.vue?vue&type=script&lang=js&"
export * from "./StartScreenDarkSection.vue?vue&type=script&lang=js&"
import style0 from "./StartScreenDarkSection.vue?vue&type=style&index=0&id=50e76888&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "50e76888",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('50e76888')) {
      api.createRecord('50e76888', component.options)
    } else {
      api.reload('50e76888', component.options)
    }
    module.hot.accept("./StartScreenDarkSection.vue?vue&type=template&id=50e76888&scoped=true&", function () {
      api.rerender('50e76888', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/StartScreenDarkSection.vue"
export default component.exports