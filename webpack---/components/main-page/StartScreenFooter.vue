import { render, staticRenderFns } from "./StartScreenFooter.vue?vue&type=template&id=7934099c&scoped=true&"
import script from "./StartScreenFooter.vue?vue&type=script&lang=js&"
export * from "./StartScreenFooter.vue?vue&type=script&lang=js&"
import style0 from "./StartScreenFooter.vue?vue&type=style&index=0&id=7934099c&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "7934099c",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7934099c')) {
      api.createRecord('7934099c', component.options)
    } else {
      api.reload('7934099c', component.options)
    }
    module.hot.accept("./StartScreenFooter.vue?vue&type=template&id=7934099c&scoped=true&", function () {
      api.rerender('7934099c', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/StartScreenFooter.vue"
export default component.exports