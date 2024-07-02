import { render, staticRenderFns } from "./MainSection2Label.vue?vue&type=template&id=20ffc5d7&"
import script from "./MainSection2Label.vue?vue&type=script&lang=js&"
export * from "./MainSection2Label.vue?vue&type=script&lang=js&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('20ffc5d7')) {
      api.createRecord('20ffc5d7', component.options)
    } else {
      api.reload('20ffc5d7', component.options)
    }
    module.hot.accept("./MainSection2Label.vue?vue&type=template&id=20ffc5d7&", function () {
      api.rerender('20ffc5d7', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/MainSection2Label.vue"
export default component.exports