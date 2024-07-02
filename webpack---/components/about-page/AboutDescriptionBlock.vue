import { render, staticRenderFns } from "./AboutDescriptionBlock.vue?vue&type=template&id=00dcd679&scoped=true&"
import script from "./AboutDescriptionBlock.vue?vue&type=script&lang=js&"
export * from "./AboutDescriptionBlock.vue?vue&type=script&lang=js&"
import style0 from "./AboutDescriptionBlock.vue?vue&type=style&index=0&id=00dcd679&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "00dcd679",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('00dcd679')) {
      api.createRecord('00dcd679', component.options)
    } else {
      api.reload('00dcd679', component.options)
    }
    module.hot.accept("./AboutDescriptionBlock.vue?vue&type=template&id=00dcd679&scoped=true&", function () {
      api.rerender('00dcd679', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/about-page/AboutDescriptionBlock.vue"
export default component.exports