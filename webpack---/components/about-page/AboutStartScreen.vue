import { render, staticRenderFns } from "./AboutStartScreen.vue?vue&type=template&id=65380e96&scoped=true&"
import script from "./AboutStartScreen.vue?vue&type=script&lang=js&"
export * from "./AboutStartScreen.vue?vue&type=script&lang=js&"
import style0 from "./AboutStartScreen.vue?vue&type=style&index=0&id=65380e96&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "65380e96",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('65380e96')) {
      api.createRecord('65380e96', component.options)
    } else {
      api.reload('65380e96', component.options)
    }
    module.hot.accept("./AboutStartScreen.vue?vue&type=template&id=65380e96&scoped=true&", function () {
      api.rerender('65380e96', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/about-page/AboutStartScreen.vue"
export default component.exports