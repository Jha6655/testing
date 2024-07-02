// Imports
var ___CSS_LOADER_API_IMPORT___ = require("../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header__logo[data-v-8f33751a] {\n  pointer-events: all;\n}\n.header__logo-image[data-v-8f33751a] {\n  display: block;\n  width: 100%;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://components/HeaderLogo.vue"],"names":[],"mappings":"AA4BA;EACE,mBAAA;AA3BF;AAoCA;EACE,cAAA;EACA,WAAA;EACA,YAAA;AAlCF","sourcesContent":["@import '../assets/scss/utils/breakpoints';\n@import '../assets/scss/utils/vars';\n@import '../assets/scss/utils/placeholders';\n@import '../assets/scss/utils/functions';\n@import '../assets/scss/utils/mixins';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.header__logo {\n  pointer-events: all;\n  //width: 2.5rem;\n  @include min(lg) {\n    //width: 3.3rem;\n  }\n  @include max(xs) {\n    //width: 3rem;\n  }\n}\n.header__logo-image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;
