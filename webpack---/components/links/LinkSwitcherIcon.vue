import { render, staticRenderFns } from "./LinkSwitcherIcon.vue?vue&type=template&id=5376e1c5&scoped=true&"
import script from "./LinkSwitcherIcon.vue?vue&type=script&lang=js&"
export * from "./LinkSwitcherIcon.vue?vue&type=script&lang=js&"
import style0 from "./LinkSwitcherIcon.vue?vue&type=style&index=0&id=5376e1c5&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "5376e1c5",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5376e1c5')) {
      api.createRecord('5376e1c5', component.options)
    } else {
      api.reload('5376e1c5', component.options)
    }
    module.hot.accept("./LinkSwitcherIcon.vue?vue&type=template&id=5376e1c5&scoped=true&", function () {
      api.rerender('5376e1c5', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/links/LinkSwitcherIcon.vue"
export default component.exports