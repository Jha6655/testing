import { render, staticRenderFns } from "./FooterDevelopers.vue?vue&type=template&id=492ce13f&scoped=true&"
import script from "./FooterDevelopers.vue?vue&type=script&lang=js&"
export * from "./FooterDevelopers.vue?vue&type=script&lang=js&"
import style0 from "./FooterDevelopers.vue?vue&type=style&index=0&id=492ce13f&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "492ce13f",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('492ce13f')) {
      api.createRecord('492ce13f', component.options)
    } else {
      api.reload('492ce13f', component.options)
    }
    module.hot.accept("./FooterDevelopers.vue?vue&type=template&id=492ce13f&scoped=true&", function () {
      api.rerender('492ce13f', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/FooterDevelopers.vue"
export default component.exports