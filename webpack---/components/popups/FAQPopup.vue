import { render, staticRenderFns } from "./FAQPopup.vue?vue&type=template&id=55603bb3&scoped=true&"
import script from "./FAQPopup.vue?vue&type=script&lang=js&"
export * from "./FAQPopup.vue?vue&type=script&lang=js&"
import style0 from "./FAQPopup.vue?vue&type=style&index=0&id=55603bb3&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "55603bb3",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('55603bb3')) {
      api.createRecord('55603bb3', component.options)
    } else {
      api.reload('55603bb3', component.options)
    }
    module.hot.accept("./FAQPopup.vue?vue&type=template&id=55603bb3&scoped=true&", function () {
      api.rerender('55603bb3', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/popups/FAQPopup.vue"
export default component.exports