import { render, staticRenderFns } from "./GlitchText.vue?vue&type=template&id=fdd508de&scoped=true&"
import script from "./GlitchText.vue?vue&type=script&lang=js&"
export * from "./GlitchText.vue?vue&type=script&lang=js&"
import style0 from "./GlitchText.vue?vue&type=style&index=0&id=fdd508de&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "fdd508de",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('fdd508de')) {
      api.createRecord('fdd508de', component.options)
    } else {
      api.reload('fdd508de', component.options)
    }
    module.hot.accept("./GlitchText.vue?vue&type=template&id=fdd508de&scoped=true&", function () {
      api.rerender('fdd508de', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/glitch/GlitchText.vue"
export default component.exports