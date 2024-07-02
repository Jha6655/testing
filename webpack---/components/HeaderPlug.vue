import { render, staticRenderFns } from "./HeaderPlug.vue?vue&type=template&id=5ea93854&scoped=true&"
import script from "./HeaderPlug.vue?vue&type=script&lang=js&"
export * from "./HeaderPlug.vue?vue&type=script&lang=js&"
import style0 from "./HeaderPlug.vue?vue&type=style&index=0&id=5ea93854&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "5ea93854",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5ea93854')) {
      api.createRecord('5ea93854', component.options)
    } else {
      api.reload('5ea93854', component.options)
    }
    module.hot.accept("./HeaderPlug.vue?vue&type=template&id=5ea93854&scoped=true&", function () {
      api.rerender('5ea93854', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/HeaderPlug.vue"
export default component.exports