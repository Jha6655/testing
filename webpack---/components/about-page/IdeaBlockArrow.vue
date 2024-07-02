import { render, staticRenderFns } from "./IdeaBlockArrow.vue?vue&type=template&id=9e40fdf0&scoped=true&"
import script from "./IdeaBlockArrow.vue?vue&type=script&lang=js&"
export * from "./IdeaBlockArrow.vue?vue&type=script&lang=js&"
import style0 from "./IdeaBlockArrow.vue?vue&type=style&index=0&id=9e40fdf0&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "9e40fdf0",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('9e40fdf0')) {
      api.createRecord('9e40fdf0', component.options)
    } else {
      api.reload('9e40fdf0', component.options)
    }
    module.hot.accept("./IdeaBlockArrow.vue?vue&type=template&id=9e40fdf0&scoped=true&", function () {
      api.rerender('9e40fdf0', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/about-page/IdeaBlockArrow.vue"
export default component.exports