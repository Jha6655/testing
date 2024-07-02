import { render, staticRenderFns } from "./MainSection2Footer.vue?vue&type=template&id=8ed28470&scoped=true&"
import script from "./MainSection2Footer.vue?vue&type=script&lang=js&"
export * from "./MainSection2Footer.vue?vue&type=script&lang=js&"
import style0 from "./MainSection2Footer.vue?vue&type=style&index=0&id=8ed28470&lang=scss&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "8ed28470",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("/home/gitlab-runner/hle-front/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('8ed28470')) {
      api.createRecord('8ed28470', component.options)
    } else {
      api.reload('8ed28470', component.options)
    }
    module.hot.accept("./MainSection2Footer.vue?vue&type=template&id=8ed28470&scoped=true&", function () {
      api.rerender('8ed28470', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "components/main-page/MainSection2Footer.vue"
export default component.exports