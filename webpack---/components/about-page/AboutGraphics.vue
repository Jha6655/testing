import { render, staticRenderFns } from "./AboutGraphics.vue?vue&type=template&id=539eb3da&scoped=true&"
import script from "./AboutGraphics.vue?vue&type=script&lang=js&"
export * from "./AboutGraphics.vue?vue&type=script&lang=js&"
import style0 from "./AboutGraphics.vue?vue&type=style&index=0&id=539eb3da&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "539eb3da",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('539eb3da')) {
      api.createRecord('539eb3da', component.options)
    } else {
      api.reload('539eb3da', component.options)
    }
    module.hot.accept("./AboutGraphics.vue?vue&type=template&id=539eb3da&scoped=true&", function () {
      api.rerender('539eb3da', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/about-page/AboutGraphics.vue"
export default component.exports