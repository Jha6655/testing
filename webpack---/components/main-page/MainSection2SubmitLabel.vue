import { render, staticRenderFns } from "./MainSection2SubmitLabel.vue?vue&type=template&id=724dc742&scoped=true&"
import script from "./MainSection2SubmitLabel.vue?vue&type=script&lang=js&"
export * from "./MainSection2SubmitLabel.vue?vue&type=script&lang=js&"
import style0 from "./MainSection2SubmitLabel.vue?vue&type=style&index=0&id=724dc742&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "724dc742",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('724dc742')) {
      api.createRecord('724dc742', component.options)
    } else {
      api.reload('724dc742', component.options)
    }
    module.hot.accept("./MainSection2SubmitLabel.vue?vue&type=template&id=724dc742&scoped=true&", function () {
      api.rerender('724dc742', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/MainSection2SubmitLabel.vue"
export default component.exports