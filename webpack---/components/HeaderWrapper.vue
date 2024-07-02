import { render, staticRenderFns } from "./HeaderWrapper.vue?vue&type=template&id=7c79dcfb&scoped=true&"
import script from "./HeaderWrapper.vue?vue&type=script&lang=js&"
export * from "./HeaderWrapper.vue?vue&type=script&lang=js&"
import style0 from "./HeaderWrapper.vue?vue&type=style&index=0&id=7c79dcfb&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "7c79dcfb",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7c79dcfb')) {
      api.createRecord('7c79dcfb', component.options)
    } else {
      api.reload('7c79dcfb', component.options)
    }
    module.hot.accept("./HeaderWrapper.vue?vue&type=template&id=7c79dcfb&scoped=true&", function () {
      api.rerender('7c79dcfb', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/HeaderWrapper.vue"
export default component.exports