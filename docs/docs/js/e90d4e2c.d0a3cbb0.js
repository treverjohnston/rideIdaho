(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e90d4e2c"],{"1ff6":function(o,t,e){"use strict";var r=e("7ab9"),a=e.n(r);a.a},"7ab9":function(o,t,e){},b06b:function(o,t,e){"use strict";var r=e("0967"),a=e("2b0e");t["a"]=function(o,t){var e=window.open;if(!0===r["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)e=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(o,{openExternal:!0})}else if(void 0!==a["a"].prototype.$q.electron)return a["a"].prototype.$q.electron.shell.openExternal(o);var n=e(o,"_blank");if(n)return n.focus(),n;t&&t()}},c75a:function(o,t,e){"use strict";e.r(t);var r=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("q-layout",{staticClass:"donate"},[e("div",{staticClass:"row wrap"},[e("div",{ref:"test",staticClass:"col-xs-12"})])])},a=[],n=e("b06b"),s={name:"Donate",data:function(){return{}},computed:{routes:function(){return this.$store.state.routes.routes}},methods:{openURL:n["a"]}},i=s,c=(e("1ff6"),e("2877")),p=Object(c["a"])(i,r,a,!1,null,"6ec8c444",null);t["default"]=p.exports}}]);