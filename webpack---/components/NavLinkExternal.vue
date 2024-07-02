import { render, staticRenderFns } from "./NavLinkExternal.vue?vue&type=template&id=415a561d&"
import script from "./NavLinkExternal.vue?vue&type=script&lang=js&"
export * from "./NavLinkExternal.vue?vue&type=script&lang=js&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
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
    if (!api.isRecorded('415a561d')) {
      api.createRecord('415a561d', component.options)
    } else {
      api.reload('415a561d', component.options)
    }
    module.hot.accept("./NavLinkExternal.vue?vue&type=template&id=415a561d&", function () {
      api.rerender('415a561d', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/NavLinkExternal.vue"
export default component.exports