(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5b4b0d63"],{"0234":function(e,t,n){"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushParams=l,t.popParams=c,t.withParams=p,t._setTarget=t.target=void 0;var u=[],i=null;t.target=i;var s=function(e){t.target=i=e};function l(){null!==i&&u.push(i),t.target=i={}}function c(){var e=i,n=t.target=i=u.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(e)),e}function f(e){if("object"!==o(e)||Array.isArray(e))throw new Error("params must be an object");t.target=i=r({},i,e)}function d(e,t){return m(function(n){return function(){n(e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t.apply(this,a)}})}function m(e){var t=e(f);return function(){l();try{for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(this,n)}finally{c()}}}function p(e,t){return"object"===o(e)&&void 0!==t?d(e,t):m(e)}t._setTarget=s},1331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=(0,r.regex)("integer",/^-?[0-9]*$/);t.default=a},"2a12":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(e){return(0,r.withParams)({type:"maxLength",max:e},function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e})};t.default=a},3360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"and"},function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.length>0&&t.reduce(function(t,n){return t&&n.apply(e,r)},!0)})};t.default=a},"3a54":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=(0,r.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(e){return(0,r.withParams)({type:"maxValue",max:e},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})};t.default=a},4819:function(e,t,n){},"5d75":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,o=(0,r.regex)("email",a);t.default=o},"5db3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(e){return(0,r.withParams)({type:"minLength",min:e},function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e})};t.default=a},6235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=(0,r.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(e){return(0,r.withParams)({type:"not"},function(t,n){return!(0,r.req)(t)||!e.call(this,t,n)})};t.default=a},"772d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/i,o=(0,r.regex)("url",a);t.default=o},"78ef":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}}),t.regex=t.ref=t.len=t.req=void 0;var r=a(n("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var i=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=i;var s=function(e,t,n){return"function"===typeof e?e.call(t,n):n[e]};t.ref=s;var l=function(e,t){return(0,r.default)({type:e},function(e){return!u(e)||t.test(e)})};t.regex=l},8750:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",VUE_ROUTER_MODE:"hash",VUE_ROUTER_BASE:"",APP_URL:"undefined"}).BUILD?n("cb69").withParams:n("0234").withParams,a=r;t.default=a},"91d3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var n="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(o)})};t.default=a;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},function(t,n){return!(0,r.ref)(e,this,n)||(0,r.req)(t)})};t.default=a},b06b:function(e,t,n){"use strict";var r=n("0967"),a=n("2b0e");t["a"]=function(e,t){var n=window.open;if(!0===r["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)n=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(e,{openExternal:!0})}else if(void 0!==a["a"].prototype.$q.electron)return a["a"].prototype.$q.electron.shell.openExternal(e);var o=n(e,"_blank");if(o)return o.focus(),o;t&&t()}},b5ae:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return _.default}}),t.helpers=void 0;var r=q(n("6235")),a=q(n("3a54")),o=q(n("45b8")),u=q(n("ec11")),i=q(n("5d75")),s=q(n("c99d")),l=q(n("91d3")),c=q(n("2a12")),f=q(n("5db3")),d=q(n("d4f4")),m=q(n("aa82")),p=q(n("e652")),v=q(n("b6cb")),b=q(n("772d")),y=q(n("d294")),g=q(n("3360")),h=q(n("6417")),j=q(n("eb66")),P=q(n("46bc")),w=q(n("1331")),_=q(n("c301")),O=x(n("78ef"));function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function q(e){return e&&e.__esModule?e:{default:e}}t.helpers=O},b6cb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(e){return(0,r.withParams)({type:"sameAs",eq:e},function(t,n){return t===(0,r.ref)(e,this,n)})};t.default=a},c301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c3df:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{staticClass:"black"},[n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"col-xs-11 col-md-10 white-back shadow-24"},[n("div",{staticClass:"row wrap justify-center"},[n("div",{staticClass:"col-xs-12 text-center"},[n("h3",[e._v("Contact Us")]),n("hr",{staticClass:"hr"}),n("h5",{staticClass:"desktop-only"},[e._v("Please contact us anytime with any questions or inquiries!")]),n("h6",{staticClass:"mobile-only"},[e._v("Please contact us anytime with any questions or inquiries!")])])]),n("div",{staticClass:"row justify-center bot desktop-only xs-gutter"},[n("div",{staticClass:"col-xs-5 self-center space"},[n("img",{staticClass:"responsive img",attrs:{src:"statics/logos/RFHIdahoLogo.png",alt:"Ride for hope idaho logo"}})]),n("div",{staticClass:"col-xs-5 self-center"},[n("q-input",{attrs:{label:"Name",name:"name",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("q-input",{attrs:{label:"Email",name:"email",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{attrs:{label:"Phone",name:"phone",type:"tel"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("q-input",{attrs:{label:"Subject",name:"subject",type:"text"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}}),n("q-input",{attrs:{type:"textarea",name:"message",label:"Message","max-height":100,"min-rows":5},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("q-btn",{staticClass:"q-mt-sm",attrs:{outline:"",color:"black"},on:{click:e.sendEmail}},[e._v("Send")]),n("div",{staticClass:"hidden"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"_replyto"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",name:"phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],attrs:{type:"text",name:"subject"},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"textarea",name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])],1)]),n("div",{staticClass:"row wrap justify-center mobile-only"},[n("div",{staticClass:"col-xs-11"},[n("q-input",{attrs:{label:"Name",name:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("q-input",{attrs:{label:"Email",name:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{attrs:{label:"Phone",name:"phone"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("q-input",{attrs:{label:"Subject",name:"subject"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}}),n("q-input",{attrs:{type:"textarea",name:"message",label:"Message","max-height":100,"min-rows":5},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("q-btn",{staticClass:"q-mt-sm",attrs:{outline:"",color:"black"},on:{click:e.sendEmail}},[e._v("Send")]),n("div",{staticClass:"hidden"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"_replyto"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",name:"phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],attrs:{type:"text",name:"subject"},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"textarea",name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])],1),n("div",{staticClass:"col-xs-10 bot"},[n("img",{staticClass:"responsive img",attrs:{src:"statics/logos/RFHIdahoLogo.png",alt:"Ride for hope idaho logo"}})])])])])])},a=[],o=(n("7f7f"),n("b5ae")),u=n("b06b"),i={name:"Contact",data:function(){return{name:"",email:"",phone:"",subject:"",message:""}},validations:{name:{required:o["required"]},email:{required:o["required"],email:o["email"]},subject:{required:o["required"]},message:{required:o["required"]}},methods:{openURL:u["a"],sendEmail:function(){if(this.$v.name.$touch(),this.$v.email.$touch(),this.$v.subject.$touch(),this.$v.message.$touch(),this.$v.name.$error||this.$v.email.$error||this.$v.subject.$error||this.$v.message.$error)Notify.create({html:"Something went wrong, please try again. Be sure to check all fields are filled out correctly.",backgroundColor:"red"});else{var e={name:this.name,email:this.email,phone:this.phone,subject:this.subject,message:this.message,from:"rfhi"};this.$store.dispatch("state/sendEmail",e)}}}},s=i,l=(n("da08"),n("2877")),c=Object(l["a"])(s,r,a,!1,null,"3ea9bc2c",null);t["default"]=c.exports},c99d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=(0,r.withParams)({type:"ipAddress"},function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)});t.default=a;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,n){"use strict";(function(e){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===n(e)&&void 0!==t?t:e(function(){})},o=r.vuelidate?r.vuelidate.withParams:a;t.withParams=o}).call(this,n("c8ba"))},d294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"or"},function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.length>0&&t.reduce(function(t,n){return t||n.apply(e,r)},!1)})};t.default=a},d4f4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=(0,r.withParams)({type:"required"},r.req);t.default=a},da08:function(e,t,n){"use strict";var r=n("4819"),a=n.n(r);a.a},e652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},function(t,n){return!!(0,r.ref)(e,this,n)||(0,r.req)(t)})};t.default=a},eb66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(e){return(0,r.withParams)({type:"minValue",min:e},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})};t.default=a},ec11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),a=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+e<=+n&&+t>=+n})};t.default=a}}]);