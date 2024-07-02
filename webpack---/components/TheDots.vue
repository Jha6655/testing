import { render, staticRenderFns } from "./TheDots.vue?vue&type=template&id=7d6eeb50&scoped=true&"
import script from "./TheDots.vue?vue&type=script&lang=js&"
export * from "./TheDots.vue?vue&type=script&lang=js&"
import style0 from "./TheDots.vue?vue&type=style&index=0&id=7d6eeb50&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "7d6eeb50",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7d6eeb50')) {
      api.createRecord('7d6eeb50', component.options)
    } else {
      api.reload('7d6eeb50', component.options)
    }
    module.hot.accept("./TheDots.vue?vue&type=template&id=7d6eeb50&scoped=true&", function () {
      api.rerender('7d6eeb50', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/TheDots.vue"
export default component.exports