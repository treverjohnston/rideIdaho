(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0d283e14"],{"1a34":function(t,a,e){},"2f14":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{staticClass:"black"},[t.openRegistration?t._e():e("div",{staticClass:"row wrap justify-center"},[e("div",{staticClass:"col-xs-11 col-md-10 white-back shadow-24 text-center"},[e("hr",{staticClass:"hr",attrs:{color:"red"}}),e("h4",{staticClass:"fancy"},[t._v("Raffle tickets are available for purchase once registration opens")]),e("hr",{staticClass:"hr",attrs:{color:"red"}})])]),t.openRegistration?e("div",{staticClass:"row wrap justify-center desktop-only"},[e("div",{staticClass:"col-xs-11 col-md-10 white-back shadow-24 text-center"},[e("hr",{staticClass:"hr",attrs:{color:"red"}}),e("h3",{staticClass:"headline text-bold"},[t._v("2209 RAFFLE ITEMS ANNOUNCED AT EVENT")]),e("h4",{staticClass:"fancy"},[t._v("Raffle tickets are available for purchase: ")]),e("h4",[t._v("1 ticket for $3")]),e("h4",[t._v("2 tickets for $5")]),e("h4",[t._v("4 tickets for $10")]),e("h4",[t._v("10 tickets for $20")]),e("h4",{staticClass:"fancy"},[t._v("Additional meal tickets are also available for $10")]),e("q-btn",{staticClass:"btn shadow-24",attrs:{"no-caps":""},on:{click:function(a){return t.openURL(t.merchandiseUrl)}}},[t._v("\n                Purchase Raffle Tickets")]),e("hr",{staticClass:"hr",attrs:{color:"red"}})],1)]):t._e(),t.openRegistration?e("div",{staticClass:"row wrap justify-center mobile-only"},[e("div",{staticClass:"col-xs-11 white-back shadow-24 text-center"},[e("hr",{staticClass:"hr",attrs:{color:"red"}}),e("h4",{staticClass:"headline text-bold"},[t._v("2020 RAFFLE ITEMS ANNOUNCED AT EVENT")]),e("h5",{staticClass:"fancy "},[t._v("Raffle tickets are available for purchase: ")]),e("h5",[t._v("1 ticket for $3")]),e("h5",[t._v("2 tickets for $5")]),e("h5",[t._v("4 tickets for $10")]),e("h5",[t._v("10 tickets for $20")]),e("h5",{staticClass:"fancy"},[t._v("Additional meal tickets are also available for $10")]),e("q-btn",{staticClass:"btn shadow-24",attrs:{"no-caps":""},on:{click:function(a){return t.openURL(t.merchandiseUrl)}}},[t._v("\n                Purchase Raffle Tickets")]),e("hr",{staticClass:"hr",attrs:{color:"red"}})],1)]):t._e()])},r=[],o=e("b06b"),i={name:"Raffle",data:function(){return{}},computed:{items:function(){return this.$store.state.raffle.raffles},openRegistration:function(){return this.$store.state.state.openRegistration},merchandiseUrl:function(){return this.$store.state.state.merchandiseUrl}},methods:{openURL:o["a"]}},c=i,n=(e("f81a"),e("2877")),l=Object(n["a"])(c,s,r,!1,null,"53e7f646",null);a["default"]=l.exports},b06b:function(t,a,e){"use strict";var s=e("0967"),r=e("2b0e");a["a"]=function(t,a){var e=window.open;if(!0===s["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)e=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==r["a"].prototype.$q.electron)return r["a"].prototype.$q.electron.shell.openExternal(t);var o=e(t,"_blank");if(o)return o.focus(),o;a&&a()}},f81a:function(t,a,e){"use strict";var s=e("1a34"),r=e.n(s);r.a}}]);