import { render, staticRenderFns } from "./nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true&"
import script from "./nuxt-build-indicator.vue?vue&type=script&lang=js&"
export * from "./nuxt-build-indicator.vue?vue&type=script&lang=js&"
import style0 from "./nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "71e9e103",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('71e9e103')) {
      api.createRecord('71e9e103', component.options)
    } else {
      api.reload('71e9e103', component.options)
    }
    module.hot.accept("./nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true&", function () {
      api.rerender('71e9e103', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = ".nuxt/components/nuxt-build-indicator.vue"
export default component.exports