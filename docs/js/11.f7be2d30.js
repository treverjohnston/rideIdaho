(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"10e3":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"background"},[e.loggedIn?e._e():s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-10"},[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-10 col-md-6"},[s("q-input",{attrs:{filled:"",label:"Email","lazy-rules":"",rules:[function(e){return e&&e.length>0||""}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),s("q-input",{attrs:{filled:"",label:"Password",type:"password","lazy-rules":"",rules:[function(e){return e&&e.length>0||""}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)]),s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-6"},[s("q-btn",{staticClass:"q-mt-sm",attrs:{color:"blue"},on:{click:e.login}},[e._v("Login")])],1)])])]),e.admin?void 0:e._e(),s("q-dialog",{model:{value:e.editModal,callback:function(t){e.editModal=t},expression:"editModal"}},[s("div",{staticClass:"editModal text-center"},[s("q-input",{attrs:{dark:"",type:"text",label:"Name"},model:{value:e.chosenItemName,callback:function(t){e.chosenItemName=t},expression:"chosenItemName"}}),s("q-input",{attrs:{dark:"",type:"text",label:"Description"},model:{value:e.chosenItemDescription,callback:function(t){e.chosenItemDescription=t},expression:"chosenItemDescription"}}),s("q-input",{attrs:{dark:"",type:"text",label:"Logo"},model:{value:e.chosenItemLogo,callback:function(t){e.chosenItemLogo=t},expression:"chosenItemLogo"}}),s("q-input",{attrs:{dark:"",type:"text",label:"URL"},model:{value:e.chosenItemLink,callback:function(t){e.chosenItemLink=t},expression:"chosenItemLink"}}),s("q-input",{attrs:{dark:"",type:"text",label:"Level"},model:{value:e.chosenItemLevel,callback:function(t){e.chosenItemLevel=t},expression:"chosenItemLevel"}}),s("q-btn",{staticClass:"q-mt-sm",attrs:{color:"red","no-caps":""},on:{click:e.editSponsor}},[e._v("Submit Edits")]),s("q-btn",{staticClass:"q-mt-sm",attrs:{color:"red"},on:{click:function(t){return e.deleteSponsor(e.chosenItemId)}}},[e._v("Delete")])],1)])],2)},i=[],n=(s("49ca"),s("1a43"),s("dcba")),l={name:"Admin",data:function(){return{email:"",password:"",name:"",chosenItemName:"",logo:"",chosenItemLogo:"",link:"",chosenItemLink:"",level:"5",chosenItemLevel:"5",description:"",chosenItemDescription:"",visible:!1,addingSponsor:!1,editModal:!1}},components:{},computed:{loggedIn:function(){return this.$store.state.auth.loggedIn},sponsors:function(){return this.$store.state.sponsors.allSponsors},admin:function(){return this.$store.state.auth.admin}},mounted:function(){this.$store.dispatch("auth/getAuth"),this.$store.dispatch("sponsors/getSponsors")},methods:{openURL:n["a"],pickSponsor:function(e){this.chosenItemName=e.name,this.chosenItemLogo=e.logo,this.chosenItemLink=e.link,this.chosenItemLevel=e.level,this.chosenItemDescription=e.description,this.chosenItemId=e._id,this.editModal=!0},editSponsor:function(){var e={name:this.chosenItemName,description:this.chosenItemDescription,logo:this.chosenItemLogo,link:this.chosenItemLink,level:this.chosenItemLevel,_id:this.chosenItemId};this.$store.dispatch("sponsors/editSponsor",e),this.editModal=!1},deleteSponsor:function(e){this.$store.dispatch("sponsors/deleteSponsor",e),this.editModal=!1},login:function(){var e={email:this.email,password:this.password};this.$store.dispatch("auth/login",e),this.loggedIn&&this.$router.push("/admin/reports")},toggleVisiblity:function(e,t){var s={_id:e,visible:!t};this.$store.dispatch("sponsors/toggleVisibility",s)},addSponsor:function(){var e={name:this.name,logo:this.logo,link:this.link,level:this.level,description:this.description,visible:this.visible};this.$store.dispatch("sponsors/addSponsor",e),this.name="",this.logo="",this.link="",this.level="5",this.description="",this.visible=!1,this.addingSponsor=!1}}},a=l,c=(s("6fd2"),s("a6c2")),r=Object(c["a"])(a,o,i,!1,null,null,null);t["default"]=r.exports},"210d":function(e,t,s){},"6fd2":function(e,t,s){"use strict";var o=s("210d"),i=s.n(o);i.a}}]);