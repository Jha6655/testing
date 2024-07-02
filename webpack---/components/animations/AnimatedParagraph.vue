import { render, staticRenderFns } from "./AnimatedParagraph.vue?vue&type=template&id=6c75c986&"
import script from "./AnimatedParagraph.vue?vue&type=script&lang=js&"
export * from "./AnimatedParagraph.vue?vue&type=script&lang=js&"


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
    if (!api.isRecorded('6c75c986')) {
      api.createRecord('6c75c986', component.options)
    } else {
      api.reload('6c75c986', component.options)
    }
    module.hot.accept("./AnimatedParagraph.vue?vue&type=template&id=6c75c986&", function () {
      api.rerender('6c75c986', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/animations/AnimatedParagraph.vue"
export default component.exports