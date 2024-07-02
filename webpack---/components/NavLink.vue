import { render, staticRenderFns } from "./NavLink.vue?vue&type=template&id=219235b2&scoped=true&"
import script from "./NavLink.vue?vue&type=script&lang=js&"
export * from "./NavLink.vue?vue&type=script&lang=js&"
import style0 from "./NavLink.vue?vue&type=style&index=0&id=219235b2&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "219235b2",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('219235b2')) {
      api.createRecord('219235b2', component.options)
    } else {
      api.reload('219235b2', component.options)
    }
    module.hot.accept("./NavLink.vue?vue&type=template&id=219235b2&scoped=true&", function () {
      api.rerender('219235b2', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/NavLink.vue"
export default component.exports