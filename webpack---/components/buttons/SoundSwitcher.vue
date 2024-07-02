import { render, staticRenderFns } from "./SoundSwitcher.vue?vue&type=template&id=69263892&scoped=true&"
import script from "./SoundSwitcher.vue?vue&type=script&lang=js&"
export * from "./SoundSwitcher.vue?vue&type=script&lang=js&"
import style0 from "./SoundSwitcher.vue?vue&type=style&index=0&id=69263892&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "69263892",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('69263892')) {
      api.createRecord('69263892', component.options)
    } else {
      api.reload('69263892', component.options)
    }
    module.hot.accept("./SoundSwitcher.vue?vue&type=template&id=69263892&scoped=true&", function () {
      api.rerender('69263892', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/buttons/SoundSwitcher.vue"
export default component.exports