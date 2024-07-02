import { render, staticRenderFns } from "./LinkSwitcher.vue?vue&type=template&id=760660a8&scoped=true&"
import script from "./LinkSwitcher.vue?vue&type=script&lang=js&"
export * from "./LinkSwitcher.vue?vue&type=script&lang=js&"
import style0 from "./LinkSwitcher.vue?vue&type=style&index=0&id=760660a8&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "760660a8",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('760660a8')) {
      api.createRecord('760660a8', component.options)
    } else {
      api.reload('760660a8', component.options)
    }
    module.hot.accept("./LinkSwitcher.vue?vue&type=template&id=760660a8&scoped=true&", function () {
      api.rerender('760660a8', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/links/LinkSwitcher.vue"
export default component.exports