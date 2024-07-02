import { render, staticRenderFns } from "./StartScreen.vue?vue&type=template&id=34202237&scoped=true&"
import script from "./StartScreen.vue?vue&type=script&lang=js&"
export * from "./StartScreen.vue?vue&type=script&lang=js&"
import style0 from "./StartScreen.vue?vue&type=style&index=0&id=34202237&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "34202237",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('34202237')) {
      api.createRecord('34202237', component.options)
    } else {
      api.reload('34202237', component.options)
    }
    module.hot.accept("./StartScreen.vue?vue&type=template&id=34202237&scoped=true&", function () {
      api.rerender('34202237', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/StartScreen.vue"
export default component.exports