(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6842c7e1"],{1535:function(t,e,s){},a517:function(t,e,s){"use strict";var a=s("1535"),o=s.n(a);o.a},b06b:function(t,e,s){"use strict";var a=s("0967"),o=s("2b0e");e["a"]=function(t,e){var s=window.open;if(!0===a["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)s=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==o["a"].prototype.$q.electron)return o["a"].prototype.$q.electron.shell.openExternal(t);var i=s(t,"_blank");if(i)return i.focus(),i;e&&e()}},d665:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{staticClass:"black"},[s("div",{staticClass:"row wrap justify-center xs-gutter"},[s("div",{staticClass:"col-xs-11 shadow-24 white-back"},[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-6 desktop-only self-center"},[s("img",{staticClass:"responsive img",attrs:{src:"statics/ride/ride1.jpg",alt:"RFH Logo"}})]),s("div",{staticClass:"col-xs-11 col-md-5 text-center self-center"},[s("h3",{staticClass:"desktop-only"},[t._v("Ride Day Information")]),s("h4",{staticClass:"mobile-only"},[t._v("Ride Day Information")]),s("p",[t._v("Registration opens at 6:00 AM")]),s("hr",{staticClass:"width_90"}),t._l(t.routes,function(e){return s("span",[s("h5",[t._v(t._s(e.length)+" Start Time")]),s("p",[t._v(t._s(e.startTime))])])}),s("hr",{staticClass:"width_90"}),s("p",[t._v("*Please be at the start line ready to ride at least 15 minutes before posted start time.")])],2),s("div",{staticClass:"col-xs-10"},[s("h3",{staticClass:"desktop-only text-center"},[t._v("Directions (Kuna City Hall)")]),s("h4",{staticClass:"mobile-only text-center"},[t._v("Directions (Kuna City Hall)")]),s("iframe",{staticClass:"frame shadow-24 route",attrs:{src:"//www.google.com/maps/embed/v1/place?q=Kuna%20City%20Hall\n                &zoom=13\n                &attribution_source=Google+Maps+Embed+API\n                &attribution_web_url=https://developers.google.com/maps/documentation/embed/\n                &key=AIzaSyBLaoSdXeLvOkN5Tp5YkPZ35gXfi5-LhsI",allowfullscreen:""}})])])])])])},o=[],i=s("b06b"),r={name:"Ride",data:function(){return{}},computed:{routes:function(){return this.$store.state.routes.routes}},methods:{openURL:i["a"]}},n=r,l=(s("a517"),s("2877")),c=Object(l["a"])(n,a,o,!1,null,"7ede49a2",null);e["default"]=c.exports}}]);