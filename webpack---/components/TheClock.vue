import { render, staticRenderFns } from "./TheClock.vue?vue&type=template&id=43f4bbf8&scoped=true&"
import script from "./TheClock.vue?vue&type=script&lang=js&"
export * from "./TheClock.vue?vue&type=script&lang=js&"
import style0 from "./TheClock.vue?vue&type=style&index=0&id=43f4bbf8&scoped=true&lang=scss&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "43f4bbf8",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('43f4bbf8')) {
      api.createRecord('43f4bbf8', component.options)
    } else {
      api.reload('43f4bbf8', component.options)
    }
    module.hot.accept("./TheClock.vue?vue&type=template&id=43f4bbf8&scoped=true&", function () {
      api.rerender('43f4bbf8', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/TheClock.vue"
export default component.exports