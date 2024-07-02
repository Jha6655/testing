import { render, staticRenderFns } from "./InputLabel.vue?vue&type=template&id=c67156ac&scoped=true&"
import script from "./InputLabel.vue?vue&type=script&lang=js&"
export * from "./InputLabel.vue?vue&type=script&lang=js&"
import style0 from "./InputLabel.vue?vue&type=style&index=0&id=c67156ac&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "c67156ac",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c67156ac')) {
      api.createRecord('c67156ac', component.options)
    } else {
      api.reload('c67156ac', component.options)
    }
    module.hot.accept("./InputLabel.vue?vue&type=template&id=c67156ac&scoped=true&", function () {
      api.rerender('c67156ac', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/form/InputLabel.vue"
export default component.exports