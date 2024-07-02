import { render, staticRenderFns } from "./AboutIdeaBlock.vue?vue&type=template&id=06a91204&scoped=true&"
import script from "./AboutIdeaBlock.vue?vue&type=script&lang=js&"
export * from "./AboutIdeaBlock.vue?vue&type=script&lang=js&"
import style0 from "./AboutIdeaBlock.vue?vue&type=style&index=0&id=06a91204&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "06a91204",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('06a91204')) {
      api.createRecord('06a91204', component.options)
    } else {
      api.reload('06a91204', component.options)
    }
    module.hot.accept("./AboutIdeaBlock.vue?vue&type=template&id=06a91204&scoped=true&", function () {
      api.rerender('06a91204', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/about-page/AboutIdeaBlock.vue"
export default component.exports