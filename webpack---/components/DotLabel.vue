import { render, staticRenderFns } from "./DotLabel.vue?vue&type=template&id=3eeaaa06&scoped=true&"
import script from "./DotLabel.vue?vue&type=script&lang=js&"
export * from "./DotLabel.vue?vue&type=script&lang=js&"
import style0 from "./DotLabel.vue?vue&type=style&index=0&id=3eeaaa06&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "3eeaaa06",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3eeaaa06')) {
      api.createRecord('3eeaaa06', component.options)
    } else {
      api.reload('3eeaaa06', component.options)
    }
    module.hot.accept("./DotLabel.vue?vue&type=template&id=3eeaaa06&scoped=true&", function () {
      api.rerender('3eeaaa06', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/DotLabel.vue"
export default component.exports