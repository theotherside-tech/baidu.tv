(function(t){function e(e){for(var r,n,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},o=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0961":function(t,e,a){},"30fd":function(t,e,a){t.exports=a.p+"img/baidu-2.5bc82acf.png"},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"app"}},[a("router-view")],1)])},o=[],n=(a("0961"),{data:()=>({type:!1}),methods:{showAlertHandler(t){this.type=!0,setTimeout(()=>{this.type=!1},1e3)}}}),i=n,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),m=Object(l["a"])(i,s,o,!1,null,null,null),v=m.exports;u()(m,{VApp:d["a"]});var p=a("8c4f"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-custom-header"),r("v-content",[r("v-container",{attrs:{fluid:""}},[t.type?r("v-alert",{attrs:{type:"success"}},[t._v("\n      Data saved.\n    ")]):t._e()],1),r("v-container",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 img-baidu"},[r("img",{attrs:{src:a("c40e"),alt:"img"}})])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("h2",[t._v("BAIDU TV")]),r("p",[t._v("\n            With Baidu control, you are in charge of the screen time, and control the amount and types of videos your kids view.\n          ")]),r("br"),r("img",{staticClass:"img-baidu1",attrs:{src:a("5b67"),alt:"img"}}),r("br")]),r("div",{staticClass:"col-md-6 baidu-img"},[r("img",{staticClass:"img-baidu2",attrs:{src:a("30fd"),alt:"img"}})])])])],1),r("v-custom-footer")],1)},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{attrs:{id:"nav"}},[a("v-toolbar",[a("v-toolbar-title",{staticClass:"baidu-title"},[t._v("BAIDU TV")]),a("div",{staticClass:"flex-grow-1"}),a("router-link",{staticClass:"baidu-menu",attrs:{to:"/"}},[a("v-btn",{attrs:{text:""}},[t._v("BaiduControl")])],1),a("router-link",{attrs:{to:"/aboutUS"}},[a("v-btn",{attrs:{text:""}},[t._v("AboutUS")])],1),a("router-link",{attrs:{to:"/legal"}},[a("v-btn",{attrs:{text:""}},[t._v("Legal")])],1),a("router-link",{attrs:{to:"/login"}},[a("v-btn",{attrs:{text:""}},[t._v("Login")])],1),a("router-link",{attrs:{to:"/register"}},[a("v-btn",{attrs:{text:""}},[t._v("Register")])],1)],1)],1)])},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"logobar"}},[r("img",{staticClass:"logo",attrs:{src:a("cf05"),alt:"Smiley face"}})])}],y=a("8336"),w=a("71d9"),C=a("2a7f"),x={},k=Object(l["a"])(x,h,b,!1,null,null,null),_=k.exports;u()(k,{VBtn:y["a"],VToolbar:w["a"],VToolbarTitle:C["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{app:""}},[a("small",[t._v("© Baidu TV")])])},S=[],P=a("553a"),T={},E=Object(l["a"])(T,V,S,!1,null,null,null),O=E.exports;u()(E,{VFooter:P["a"]});var A={components:{VCustomHeader:_,VCustomFooter:O}},j=A,B=a("0798"),$=a("a523"),M=a("a75b"),F=Object(l["a"])(j,g,f,!1,null,null,null),N=F.exports;u()(F,{VAlert:B["a"],VContainer:$["a"],VContent:M["a"]});var H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-custom-header"),r("v-content",[r("v-container",{attrs:{fluid:""}},[t.type?r("v-alert",{attrs:{type:"success"}},[t._v("\n      Data saved.\n    ")]):t._e()],1),r("v-container",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 img-baidu"},[r("img",{attrs:{src:a("c40e"),alt:"img"}})])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("h2",[t._v("TERMA AND CONDITIONS")]),r("p",[t._v("\n            Baidu TV allows you to limit the screen time of your kids by providing them with a tablet applications that has your kid’s tablet “run out of battery” whenever you need them to stop watching.\n      It is different from the concept of many other screen time management systems which us a combination of preset parameters to “lock” the usage – with the kid figuring out pretty much instantly that parents have a control app that allows extension of the screen time, and as a result, parents are being bugged all the time until they give in.\n      Baidu TV does not “lock” the tablet by forceful action – the tablet simply runs “out of battery” and needs to be recharged (a perfect excuse to blame the unavailability on the laws of physics and the basic principle that batteries have limited storage).\n      When charging turns to supercharging\n      Want to still use the reward of screen time as a “bounty” for knowledge and\n      skills? Baidu TV allows a “supercharge” mode that allows charging to occur\n      faster if your kid excels at some quizzes that are available.\n      Know the different between inertia and gravity? Simple math equations? The\n      right answer puts the tablet right into supercharge mode, and it is\n      available for another time frame the parents define as a reward – without\n      letting the kid know that they are the ones in control.\n      All of the options are related by you.\n          ")]),r("br")])])])],1),r("v-custom-footer")],1)},G=[],I={components:{VCustomHeader:_,VCustomFooter:O}},U=I,W=Object(l["a"])(U,H,G,!1,null,null,null),q=W.exports;u()(W,{VAlert:B["a"],VContainer:$["a"],VContent:M["a"]});var D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-custom-header"),r("v-content",[r("v-container",{attrs:{fluid:""}},[t.type?r("v-alert",{attrs:{type:"success"}},[t._v("\n      Data saved.\n    ")]):t._e()],1),r("v-container",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 img-baidu"},[r("img",{attrs:{src:a("c40e"),alt:"img"}})])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("h2",[t._v("ABOUT US")]),r("p",[t._v("\n            Baidu TV allows you to limit the screen time of your kids by providing them with a tablet applications that has your kid’s tablet “run out of battery” whenever you need them to stop watching.\n      It is different from the concept of many other screen time management systems which us a combination of preset parameters to “lock” the usage – with the kid figuring out pretty much instantly that parents have a control app that allows extension of the screen time, and as a result, parents are being bugged all the time until they give in.\n      Baidu TV does not “lock” the tablet by forceful action – the tablet simply runs “out of battery” and needs to be recharged (a perfect excuse to blame the unavailability on the laws of physics and the basic principle that batteries have limited storage).\n      When charging turns to supercharging\n      Want to still use the reward of screen time as a “bounty” for knowledge and\n      skills? Baidu TV allows a “supercharge” mode that allows charging to occur\n      faster if your kid excels at some quizzes that are available.\n      Know the different between inertia and gravity? Simple math equations? The\n      right answer puts the tablet right into supercharge mode, and it is\n      available for another time frame the parents define as a reward – without\n      letting the kid know that they are the ones in control.\n      All of the options are related by you.\n          ")]),r("br")]),r("div",{staticClass:"col-md-6"},[r("img",{staticClass:"img-aboutus",attrs:{src:a("958a"),alt:"img"}})])])])],1),r("v-custom-footer")],1)},L=[],z={components:{VCustomHeader:_,VCustomFooter:O}},R=z,K=Object(l["a"])(R,D,L,!1,null,null,null),J=K.exports;u()(K,{VAlert:B["a"],VContainer:$["a"],VContent:M["a"]});var X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"login-layout"},[r("v-content",[r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"login-div",attrs:{cols:"12",sm:"9",md:"7",lg:"4"}},[r("div",{staticClass:"row"},[r("v-form",{ref:"loginForm",staticClass:"col-8"},[r("div",{staticClass:"text-center"},[r("v-avatar",{attrs:{size:"100"}},[r("img",{attrs:{src:a("cf05")}})])],1),r("div",{staticClass:"text-center mt-5 mb-5"},[r("h1",[t._v("Login")])]),r("div",{staticClass:"text-center"},[r("p",[t._v("Please Enter the registration Email Address")])]),r("v-text-field",{attrs:{label:"Email...",name:"email","prepend-icon":"email",Xrules:[function(t){return!!t||"Email is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],type:"text",autofocus:""}}),r("v-text-field",{attrs:{id:"password",label:"Password...",name:"password","prepend-icon":"lock",rules:[function(t){return!!t||"Password is required"}],type:"password"}}),r("v-card-actions",{staticClass:"pr-3 pb-3 pt-5"},[r("div",{staticClass:"flex-grow-1"}),r("v-btn",{attrs:{color:"green"},on:{click:t.loginHandle}},[t._v("Login")])],1)],1)],1)])],1)],1)],1)],1)},Y=[],Q=a("8212"),Z=a("99d9"),tt=a("62ad"),et=a("4bd4"),at=a("a722"),rt=a("0fd9"),st=a("8654"),ot={},nt=Object(l["a"])(ot,X,Y,!1,null,null,null),it=nt.exports;u()(nt,{VAvatar:Q["a"],VBtn:y["a"],VCardActions:Z["a"],VCol:tt["a"],VContainer:$["a"],VContent:M["a"],VForm:et["a"],VLayout:at["a"],VRow:rt["a"],VTextField:st["a"]});var lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"login-layout"},[r("v-content",[r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"register-div",attrs:{cols:"12",sm:"9",md:"7",lg:"6"}},[r("div",{staticClass:"row"},[r("v-form",{ref:"loginForm",staticClass:"col-10"},[r("div",{staticClass:"text-center"},[r("v-avatar",{attrs:{size:"100"}},[r("img",{attrs:{src:a("cf05")}})])],1),r("div",{staticClass:"text-center mt-5 mb-5"},[r("h1",[t._v("Register")])]),1==t.currentPage?r("div",{staticClass:"page1"},[r("div",{staticClass:"text-center"},[r("p",[t._v("Create New Account")])]),r("div",{staticClass:"col-10 main-form"},[r("v-text-field",{attrs:{label:"Email...",name:"email","prepend-icon":"email",Xrules:[function(t){return!!t||"Email is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],type:"text",autofocus:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email","string"===typeof e?e.trim():e)},expression:"user.email"}}),r("v-text-field",{attrs:{id:"password",label:"Password...",name:"password","prepend-icon":"lock",rules:[function(t){return!!t||"Password is required"}],type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password","string"===typeof e?e.trim():e)},expression:"user.password"}})],1),r("div",{staticClass:"or-div"},[r("hr"),r("h3",[t._v("Or Using")]),r("hr")]),r("v-card-actions",{staticClass:"pr-3 pb-3 pt-5"},[r("v-btn",{staticClass:"btn-facebook",attrs:{color:"primary",dark:"",large:""},on:{click:t.loginWithFacebook}},[r("v-icon",[t._v("mdi-facebook-box")]),t._v("| Facebook")],1),r("v-btn",{staticClass:"btn-google",attrs:{color:"error",dark:"",large:""},on:{click:t.loginWithGoogle}},[r("v-icon",[t._v("mdi-google")]),t._v("+ | Google")],1)],1)],1):t._e(),2==t.currentPage?r("div",{staticClass:"page2"},[r("div",{staticClass:"col-6 border-form left-form"},[r("v-text-field",{attrs:{label:"Your Name...",name:"name",type:"text",autofocus:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name","string"===typeof e?e.trim():e)},expression:"user.name"}}),r("v-text-field",{attrs:{id:"kidName",label:"Name of your kid...",name:"kidName",type:"text"},model:{value:t.user.kidName,callback:function(e){t.$set(t.user,"kidName","string"===typeof e?e.trim():e)},expression:"user.kidName"}})],1),r("div",{staticClass:"col-6 right-form"},[r("v-text-field",{attrs:{label:"Age...",name:"age",type:"number",autofocus:""},model:{value:t.user.age,callback:function(e){t.$set(t.user,"age","string"===typeof e?e.trim():e)},expression:"user.age"}}),r("p",[t._v("Gender")]),r("div",{staticClass:"row"},[r("v-checkbox",{attrs:{label:"Boy",value:"Boy"},model:{value:t.boySelect,callback:function(e){t.boySelect=e},expression:"boySelect"}}),r("v-checkbox",{attrs:{label:"Girl",value:"Girl"},model:{value:t.girlSelect,callback:function(e){t.girlSelect=e},expression:"girlSelect"}})],1),r("p",[t._v("More kids")]),r("div",{staticClass:"row"},[r("v-checkbox",{staticClass:"pr-10",attrs:{label:"BoyMore",value:"BoyMore"},model:{value:t.boyMoreSelect,callback:function(e){t.boyMoreSelect=e},expression:"boyMoreSelect"}}),r("v-checkbox",{attrs:{label:"GirlMore",value:"GirlMore"},model:{value:t.girlMoreSelect,callback:function(e){t.girlMoreSelect=e},expression:"girlMoreSelect"}})],1)],1)]):t._e(),3==t.currentPage?r("div",{staticClass:"page3"},[r("div",{staticClass:"col-6 m-auto"},[r("p",[t._v("EACH KID INTERESTS")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 text-center"},[r("img",{staticClass:"cartoon",attrs:{src:a("8e7d")}}),r("p",[t._v("Cartoons")])]),r("div",{staticClass:"col-6 text-center"},[r("img",{staticClass:"game",attrs:{src:a("8689")}}),r("p",[t._v("Games")])])])])]):t._e(),r("v-card-actions",{staticClass:"pr-3 pb-3 pt-5"},[r("div",{staticClass:"flex-grow-1"}),3!=t.currentPage?r("v-btn",{attrs:{color:"green"},on:{click:t.nextPage}},[t._v("Next")]):t._e(),3==t.currentPage?r("v-btn",{attrs:{color:"green"},on:{click:t.loginHandle}},[t._v("Submit")]):t._e()],1)],1)],1)])],1)],1)],1)],1)},ct=[],ut={data(){return{user:{email:"",password:"",name:"",kidName:"",age:""},currentPage:0,boySelect:!1,girlSelect:!1,boyMoreSelect:!1,girlMoreSelect:!1}},mounted(){window.addEventListener("keyup",this.enterHandle),this.currentPage=1},destroyed(){window.removeEventListener("keyup",this.enterHandle)},created(){this.user.email="test@test.com",this.user.password="123",this.$refs.loginForm&&this.$refs.loginForm.reset()},methods:{enterHandle(t){"Enter"==t.code&&(3!==this.currentPage?this.nextPage():this.loginHandle())},nextPage(){this.currentPage<3&&(this.currentPage+=1)},loginHandle(){},loginWithFacebook(){},loginWithGoogle(){}}},dt=ut,mt=a("ac7c"),vt=a("132d"),pt=Object(l["a"])(dt,lt,ct,!1,null,null,null),gt=pt.exports;u()(pt,{VAvatar:Q["a"],VBtn:y["a"],VCardActions:Z["a"],VCheckbox:mt["a"],VCol:tt["a"],VContainer:$["a"],VContent:M["a"],VForm:et["a"],VIcon:vt["a"],VLayout:at["a"],VRow:rt["a"],VTextField:st["a"]}),r["a"].use(p["a"]);var ft=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"baiduControl",component:N},{path:"/legal",name:"legal",component:q},{path:"/aboutUS",name:"aboutUS",component:J},{path:"/login",name:"login",component:it},{path:"/register",name:"register",component:gt}]}),ht=a("2f62");r["a"].use(ht["a"]);var bt=new ht["a"].Store({state:{},mutations:{},actions:{}}),yt=a("f309");r["a"].use(yt["a"]);var wt=new yt["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:ft,store:bt,vuetify:wt,render:t=>t(v)}).$mount("#app")},"5b67":function(t,e,a){t.exports=a.p+"img/baidu-1.4e430149.png"},8689:function(t,e,a){t.exports=a.p+"img/game-img.af4bb710.png"},"8e7d":function(t,e,a){t.exports=a.p+"img/funny-img.ec07f857.png"},"958a":function(t,e,a){t.exports=a.p+"img/aboutus.2a204938.png"},c40e:function(t,e,a){t.exports=a.p+"img/baidu.ee1525c6.png"},cf05:function(t,e,a){t.exports=a.p+"img/logo.30acae29.png"}});
//# sourceMappingURL=app.659afeeb.js.map