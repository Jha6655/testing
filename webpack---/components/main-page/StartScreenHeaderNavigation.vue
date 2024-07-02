import { render, staticRenderFns } from "./StartScreenHeaderNavigation.vue?vue&type=template&id=4a566750&scoped=true&"
import script from "./StartScreenHeaderNavigation.vue?vue&type=script&lang=js&"
export * from "./StartScreenHeaderNavigation.vue?vue&type=script&lang=js&"
import style0 from "./StartScreenHeaderNavigation.vue?vue&type=style&index=0&id=4a566750&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "4a566750",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4a566750')) {
      api.createRecord('4a566750', component.options)
    } else {
      api.reload('4a566750', component.options)
    }
    module.hot.accept("./StartScreenHeaderNavigation.vue?vue&type=template&id=4a566750&scoped=true&", function () {
      api.rerender('4a566750', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/StartScreenHeaderNavigation.vue"
export default component.exports