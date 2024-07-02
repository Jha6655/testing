import { render, staticRenderFns } from "./AppSnake.vue?vue&type=template&id=09ed52ae&scoped=true&"
import script from "./AppSnake.vue?vue&type=script&lang=js&"
export * from "./AppSnake.vue?vue&type=script&lang=js&"
import style0 from "./AppSnake.vue?vue&type=style&index=0&id=09ed52ae&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "09ed52ae",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('09ed52ae')) {
      api.createRecord('09ed52ae', component.options)
    } else {
      api.reload('09ed52ae', component.options)
    }
    module.hot.accept("./AppSnake.vue?vue&type=template&id=09ed52ae&scoped=true&", function () {
      api.rerender('09ed52ae', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/snake/AppSnake.vue"
export default component.exports