import { render, staticRenderFns } from "./SoundSwitcherIcon.vue?vue&type=template&id=87500f60&scoped=true&"
import script from "./SoundSwitcherIcon.vue?vue&type=script&lang=js&"
export * from "./SoundSwitcherIcon.vue?vue&type=script&lang=js&"
import style0 from "./SoundSwitcherIcon.vue?vue&type=style&index=0&id=87500f60&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "87500f60",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('87500f60')) {
      api.createRecord('87500f60', component.options)
    } else {
      api.reload('87500f60', component.options)
    }
    module.hot.accept("./SoundSwitcherIcon.vue?vue&type=template&id=87500f60&scoped=true&", function () {
      api.rerender('87500f60', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/buttons/SoundSwitcherIcon.vue"
export default component.exports