import { render, staticRenderFns } from "./WheelBlock.vue?vue&type=template&id=dbf938fe&scoped=true&"
import script from "./WheelBlock.vue?vue&type=script&lang=js&"
export * from "./WheelBlock.vue?vue&type=script&lang=js&"
import style0 from "./WheelBlock.vue?vue&type=style&index=0&id=dbf938fe&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "dbf938fe",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('dbf938fe')) {
      api.createRecord('dbf938fe', component.options)
    } else {
      api.reload('dbf938fe', component.options)
    }
    module.hot.accept("./WheelBlock.vue?vue&type=template&id=dbf938fe&scoped=true&", function () {
      api.rerender('dbf938fe', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/wheel/WheelBlock.vue"
export default component.exports