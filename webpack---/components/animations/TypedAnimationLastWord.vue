import { render, staticRenderFns } from "./TypedAnimationLastWord.vue?vue&type=template&id=8cbab5a2&scoped=true&"
import script from "./TypedAnimationLastWord.vue?vue&type=script&lang=js&"
export * from "./TypedAnimationLastWord.vue?vue&type=script&lang=js&"
import style0 from "./TypedAnimationLastWord.vue?vue&type=style&index=0&id=8cbab5a2&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "8cbab5a2",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('8cbab5a2')) {
      api.createRecord('8cbab5a2', component.options)
    } else {
      api.reload('8cbab5a2', component.options)
    }
    module.hot.accept("./TypedAnimationLastWord.vue?vue&type=template&id=8cbab5a2&scoped=true&", function () {
      api.rerender('8cbab5a2', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/animations/TypedAnimationLastWord.vue"
export default component.exports