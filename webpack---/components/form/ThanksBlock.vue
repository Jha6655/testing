import { render, staticRenderFns } from "./ThanksBlock.vue?vue&type=template&id=785b0b14&scoped=true&"
import script from "./ThanksBlock.vue?vue&type=script&lang=js&"
export * from "./ThanksBlock.vue?vue&type=script&lang=js&"
import style0 from "./ThanksBlock.vue?vue&type=style&index=0&id=785b0b14&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "785b0b14",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('785b0b14')) {
      api.createRecord('785b0b14', component.options)
    } else {
      api.reload('785b0b14', component.options)
    }
    module.hot.accept("./ThanksBlock.vue?vue&type=template&id=785b0b14&scoped=true&", function () {
      api.rerender('785b0b14', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/form/ThanksBlock.vue"
export default component.exports