import { render, staticRenderFns } from "./TheBox.vue?vue&type=template&id=159fb896&scoped=true&"
import script from "./TheBox.vue?vue&type=script&lang=js&"
export * from "./TheBox.vue?vue&type=script&lang=js&"
import style0 from "./TheBox.vue?vue&type=style&index=0&id=159fb896&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "159fb896",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('159fb896')) {
      api.createRecord('159fb896', component.options)
    } else {
      api.reload('159fb896', component.options)
    }
    module.hot.accept("./TheBox.vue?vue&type=template&id=159fb896&scoped=true&", function () {
      api.rerender('159fb896', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/TheBox.vue"
export default component.exports