import { render, staticRenderFns } from "./TheLogo.vue?vue&type=template&id=b3de179e&scoped=true&"
import script from "./TheLogo.vue?vue&type=script&lang=js&"
export * from "./TheLogo.vue?vue&type=script&lang=js&"
import style0 from "./TheLogo.vue?vue&type=style&index=0&id=b3de179e&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "b3de179e",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('b3de179e')) {
      api.createRecord('b3de179e', component.options)
    } else {
      api.reload('b3de179e', component.options)
    }
    module.hot.accept("./TheLogo.vue?vue&type=template&id=b3de179e&scoped=true&", function () {
      api.rerender('b3de179e', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/TheLogo.vue"
export default component.exports