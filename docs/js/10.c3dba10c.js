(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"264e":function(e,t,s){},a358:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{staticClass:"gallery"},[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-11 col-sm-8 col-md-6 text-center"},[s("iframe",{attrs:{width:"100%",height:"315",src:"https://www.youtube.com/embed/7lIGXzunu2A?rel=0",frameborder:"0",allowfullscreen:""}})])]),s("div",{staticClass:"row justify-center"},[s("q-carousel",{staticClass:"col-xs-11 carousel",attrs:{swipeable:"",animated:"",thumbnails:"",infinite:""},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[e._l(e.pictures,(function(e){return s("q-carousel-slide",{attrs:{name:e.id,"img-src":e.url}})})),e._v("\\\n        ")],2)],1)])},a=[],r={name:"Gallery",data:function(){return{slide:1}},computed:{pictures:function(){return this.$store.state.gallery.newGallery}},mounted:function(){this.$store.state.gallery.newGallery.length<=1&&this.$store.commit("gallery/addToNewGallery")}},i=r,n=(s("da39"),s("a6c2")),c=Object(n["a"])(i,l,a,!1,null,"591e3c1f",null);t["default"]=c.exports},da39:function(e,t,s){"use strict";var l=s("264e"),a=s.n(l);a.a}}]);