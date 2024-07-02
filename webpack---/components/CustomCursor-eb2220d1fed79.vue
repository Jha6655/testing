// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/sass-resources-loader/lib/loader.js??ref--7-oneOf-1-4!../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomCursor.vue?vue&type=style&index=0&id=37e7b582&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("29db5fa2", content, false, {"sourceMap":true});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/sass-resources-loader/lib/loader.js??ref--7-oneOf-1-4!../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomCursor.vue?vue&type=style&index=0&id=37e7b582&lang=scss&scoped=true&", function() {
     var newContent = require("!!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/sass-resources-loader/lib/loader.js??ref--7-oneOf-1-4!../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomCursor.vue?vue&type=style&index=0&id=37e7b582&lang=scss&scoped=true&");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}