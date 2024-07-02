import { render, staticRenderFns } from "./TvFrame.vue?vue&type=template&id=c35d7200&scoped=true&"
import script from "./TvFrame.vue?vue&type=script&lang=js&"
export * from "./TvFrame.vue?vue&type=script&lang=js&"
import style0 from "./TvFrame.vue?vue&type=style&index=0&id=c35d7200&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "c35d7200",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c35d7200')) {
      api.createRecord('c35d7200', component.options)
    } else {
      api.reload('c35d7200', component.options)
    }
    module.hot.accept("./TvFrame.vue?vue&type=template&id=c35d7200&scoped=true&", function () {
      api.rerender('c35d7200', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/TvFrame.vue"
export default component.exports