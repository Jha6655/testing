import { render, staticRenderFns } from "./SliderJS.vue?vue&type=template&id=195d1145&scoped=true&"
import script from "./SliderJS.vue?vue&type=script&lang=js&"
export * from "./SliderJS.vue?vue&type=script&lang=js&"
import style0 from "./SliderJS.vue?vue&type=style&index=0&id=195d1145&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "195d1145",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('195d1145')) {
      api.createRecord('195d1145', component.options)
    } else {
      api.reload('195d1145', component.options)
    }
    module.hot.accept("./SliderJS.vue?vue&type=template&id=195d1145&scoped=true&", function () {
      api.rerender('195d1145', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/SliderJS.vue"
export default component.exports