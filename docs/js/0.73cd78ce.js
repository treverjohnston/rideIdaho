(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"56b4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{staticClass:"bg-neutral-2"},[s("div",{staticClass:"bg-neutral-9"},[s("div",{staticClass:"row wrap justify-center bg-neutral-9 text-neutral-1"},[s("div",{staticClass:"col-xs-12 text-center"},[s("h3",[t._v("2021 Registration")]),s("hr",{staticClass:"hr"})])]),s("div",{staticClass:"row wrap justify-center bg-neutral-9 text-neutral-1"},[s("div",{staticClass:"col-xs-12 col-sm-8 text-justify q-pa-lg"},[s("div",[s("h5",{staticClass:"desktop-only"},[t._v("Online Registration opens January 1, 2021. Online registration closes\n                        at\n                        midnight\n                        on June 24, 2021. You may also register in person at packet pick-up and at the ride.")]),s("span",{staticClass:"mobile-only text-h6"},[t._v("Online Registration opens January 1, 2021. Online registration\n                        closes at\n                        midnight\n                        on June 24, 2021. You may also register in person at packet pick-up and at the ride.")])])]),s("div",{staticClass:"col-xs-12 col-sm-8 text-justify q-pa-lg"},[t.openRegistration?t._e():s("div",[s("h5",{staticClass:"desktop-only"},[t._v("Early packet pickup will be on Friday, June 25, 2021 from 4:00 PM\n                        to 7:00 PM at Meridian Cycles, 1203 N. Main St., Meridian, Idaho")]),s("span",{staticClass:"mobile-only text-h6"},[t._v("Early packet pickup will be on Friday, June 25, 2021 from 4:00\n                        PM\n                        to 7:00 PM at Meridian Cycles, 1203 N. Main St., Meridian, Idaho")])])])])]),t.openRegistration?s("div",{staticClass:" q-pb-xl"},[s("div",{attrs:{id:"athleteRegIframe"}})]):s("div",{staticClass:" q-pt-lg"},[s("RouteCarousel",{attrs:{onRegisterPage:!0}})],1)])},n=[],o=(s("551c"),s("06db"),s("b06b")),i=s("fe92"),r={name:"Register",data:function(){return{}},computed:{openRegistration:function(){var t=new Date("June 25, 2021 00:00:00"),e=new Date("January 1, 2021 00:00:00"),s=new Date;return s>e&&s<t}},components:{RouteCarousel:i["a"]},methods:{openURL:o["a"],bikeReg:function(){if(this.openRegistration){var t=new Promise((function(t,e){var s=document.createElement("script");s.setAttribute("src","https://www.bikereg.com/Scripts/athleteRegWidget.js"),s.setAttribute("id","athleteRegWidget"),s.setAttribute("data-event","ride-for-hope-idaho");var a=document.getElementById("athleteRegIframe");a.appendChild(s)}));return t}}},mounted:function(){this.bikeReg()}},l=r,c=(s("feac"),s("2877")),u=Object(c["a"])(l,a,n,!1,null,"0740458a",null);e["default"]=u.exports},5850:function(t,e,s){},fe92:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-center text-neutral-8"},[s("q-list",{staticClass:"col-md-4 desktop-only q-mr-lg",attrs:{separator:""}},t._l(t.routes,(function(e){return s("div",[t.selected==e.id?s("q-item",{staticClass:"route-item"},[s("q-item-section",{on:{click:function(s){t.selected=e.id}}},[s("p",{directives:[{name:"anime",rawName:"v-anime",value:{translateX:{value:["-30px","0px"],duration:4e3}},expression:"{ translateX: { value: ['-30px', '0px'], duration: 4000, }}"}],staticClass:"text-bold router-tab selected shadow-16 text-neutral-8"},[t._v("\n                        "+t._s(e.length)+"\n                    ")])])],1):s("q-item",{staticClass:"route-item",attrs:{clickable:""}},[s("q-item-section",{staticClass:"router-tab non-hoverable",on:{click:function(s){t.selected=e.id}}},[s("p",{staticClass:"text-bold non-selected"},[t._v("\n                        "+t._s(e.length)+"\n                    ")])])],1)],1)})),0),s("div",{staticClass:"col-sm-6 desktop-only q-ml-lg"},[s("q-card",{staticClass:"spacers shadow-24 text-neutral-8 bg-neutral-3"},[s("q-card-section",[s("div",{staticClass:"text-h4 text-bold"},[t._v(t._s(t.routes[t.selected].length))])]),s("q-separator",{attrs:{dark:"",inset:""}}),s("q-card-section",{staticClass:"sub"},[s("span",{staticClass:"text-h5"},[t._v("\n                    "+t._s(t.routes[t.selected].shortDescription)+"\n                ")])])],1),t.openRegistration||t.onRegisterPage?s("q-btn",{staticClass:"quote-btn shadow-24 float-right gray-bg q-mt-md text-neutral-9 ",attrs:{color:"primary-3",size:"lg","no-caps":""},on:{click:function(e){t.registrationClosedDialog=!t.registrationClosedDialog}}},[t._v("\n            Register\n        ")]):s("q-btn",{staticClass:"quote-btn shadow-24 float-right gray-bg q-mt-md text-neutral-9 ",attrs:{to:"register",color:"primary-3",size:"lg","no-caps":""}},[t._v("\n            Register\n        ")]),s("q-btn",{staticClass:"quote-btn shadow-24 float-right gray-bg q-mt-md q-mr-lg",attrs:{to:t.routes[t.selected].url,color:"text-neutral-9",size:"lg","no-caps":"",outline:""}},[t._v("\n            More Info\n        ")])],1),s("div",{staticClass:"mobile-only col-xs-12"},[s("div",{staticClass:"row justify-center q-gutter-md"},t._l(t.routes,(function(e){return s("q-card",{staticClass:"white-border bg-neutral-2 col-xs-11 col-sm-5 mobile-border mobile-only q-mb-md"},[s("q-card-section",{staticClass:"text-center"},[s("q-btn",{staticClass:"route-btn",attrs:{"no-caps":"",outline:"",color:"primary-4"},on:{click:function(s){t.$router.push(e.url.trim("/"))}}},[s("span",{staticClass:"text-h4"},[t._v(t._s(e.length))])])],1),s("q-card-section",[s("span",{staticClass:"text-center text-body1 text-neutral-8"},[t._v("\n                        "+t._s(e.shortDescription))])]),s("q-card-section",{staticClass:"text-center"},[s("q-btn",{staticClass:"text-neutral-8 q-mr-md",attrs:{to:t.routes[t.selected].url,color:"neutral-9",size:"md",outline:"","no-caps":""}},[t._v("\n                        More Info\n                    ")]),t.openRegistration||t.onRegisterPage?s("q-btn",{staticClass:"text-neutral-9 ",attrs:{color:"primary-3",size:"md","no-caps":""},on:{click:function(e){t.registrationClosedDialog=!t.registrationClosedDialog}}},[t._v("\n                        Register\n                    ")]):s("q-btn",{staticClass:"text-neutral-9 ",attrs:{to:"register",color:"primary-3",size:"md","no-caps":""}},[t._v("\n                        Register\n                    ")])],1)],1)})),1)]),s("q-dialog",{model:{value:t.registrationClosedDialog,callback:function(e){t.registrationClosedDialog=e},expression:"registrationClosedDialog"}},[s("q-card",[s("q-toolbar",[s("q-avatar",[s("img",{attrs:{src:"statics/logos/RFHIdahoLogo.png"}})]),s("q-toolbar-title",[s("span",{staticClass:"text-weight-bold"},[t._v("Ride For Hope Idaho")])]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),s("q-card-section",[s("span",{staticClass:"text-body1"},[t._v("\n                    Online registration for the 2021 Ride For Hope Idaho is open between January 1 and June 24, 2021.\n                ")])]),s("q-card-section",[s("span",{staticClass:"text-body1"},[t._v("\n                    In-person registration is available at packet pickup on June 25, or on the day of the ride, June 26.\n                ")])]),s("q-card-section",[s("span",{staticClass:"text-body1"},[t._v("\n                    If you are looking to help the cause without riding, you can donate directly to Genesis Community Health with the button below, or contact us to volunteer.\n                ")])]),s("q-card-section",{staticClass:"text-center"},[s("q-btn",{staticClass:"cbtnm",attrs:{"no-caps":"",color:"primary-3",to:"contact"}},[t._v("Contact")]),s("q-btn",{staticClass:"cbtnm q-ml-md q-mr-md",attrs:{"no-caps":"",color:"accent-4"},on:{click:function(e){return t.openURL("https://genesiscommunityhealth.com/donate/")}}},[t._v("Donate")]),s("q-btn",{staticClass:"cbtnm",attrs:{"no-caps":"",color:"neutral-3"},on:{click:function(e){t.registrationClosedDialog=!1}}},[t._v("Close")])],1)],1)],1)],1)},n=[],o=s("b06b"),i={name:"RouteCarousel",data:function(){return{selected:0,registrationClosedDialog:!1}},props:{onRegisterPage:{type:Boolean}},components:{},computed:{routes:function(){return this.$store.state.routes.routes},openRegistration:function(){return this.$store.state.state.openRegistration}},methods:{openURL:o["a"]},mounted:function(){}},r=i,l=s("2877"),c=Object(l["a"])(r,a,n,!1,null,"86cb7f9c",null);e["a"]=c.exports},feac:function(t,e,s){"use strict";var a=s("5850"),n=s.n(a);n.a}}]);