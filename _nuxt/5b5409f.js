(window.webpackJsonp=window.webpackJsonp||[]).push([[6,11,13],{315:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("75224308",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(315)},324:function(t,e,n){var o=n(56)((function(i){return i[1]}));o.push([t.i,"span.spaceing{font-size:12px;font-weight:700;letter-spacing:.1em}",""]),o.locals={},t.exports=o},326:function(t,e,n){"use strict";n.r(e);var o={props:{loading:{type:String,required:!1,default:"lazy"}}},l=(n(323),n(28)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"my-4",attrs:{to:"/"}},[n("img",{staticClass:"mb-3",attrs:{width:"125",height:"150",src:"/ecommerce-example/logo-nobg.png",title:"Our logo",alt:"Company logo",format:"webp",loading:t.loading}}),t._v(" "),n("span",{staticClass:"spaceing uppercase"},[t._v(" Company slogan")])])}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){"use strict";n.r(e);var o={components:{},props:{to:{type:String,required:!0,default:"/"},icon:{type:String,required:!0,default:""}}},l=n(28),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{staticClass:"side-nav-links",attrs:{to:t.to,"data-cy":"mobile-links"}},[t._t("default",(function(){return[t._v("Link")]}))],2)}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,n){"use strict";n.r(e);var o=n(48),l=Object(o.b)({name:"TheSidebar",methods:{close:function(){this.$store.commit("TOGGLE_NAVBAR",!1)}}}),r=n(28),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"z-10 fixed inset-0",on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:function(){return t.close(!1)}.apply(null,arguments)}}},[n("div",{staticClass:"absolute inset-0 bg-black opacity-1",attrs:{tabindex:"0"},on:{click:function(){return t.close(!1)}}})]),t._v(" "),n("aside",{staticClass:"transform top-0 left-0 bg-white fixed h-full overflow-auto ease-in-out z-30 -translate-x-100% min-w-[70%] max-w-80%",attrs:{"data-cy":"mobile-menu"}},[n("UIHomeLogo",{staticClass:"flex flex-col items-center mb-10",attrs:{size:"small",loading:"eager"}}),t._v(" "),n("UIHeaderLink",{attrs:{icon:"home",to:"/"}},[t._v(" Home ")]),t._v(" "),n("UIHeaderLink",{attrs:{icon:"view-grid",to:"/products/"}},[t._v(" Products ")]),t._v(" "),n("UIHeaderLink",{attrs:{icon:"account-group",to:"/about/"}},[t._v(" About us ")]),t._v(" "),n("UIHeaderLink",{attrs:{icon:"book-open-page-variant",to:"/blog/"}},[t._v(" Blog ")]),t._v(" "),n("UIHeaderLink",{attrs:{icon:"hand-heart",to:"/partniori/"}},[t._v(" Партньори ")]),t._v(" "),n("UIHeaderLink",{attrs:{icon:"contacts",to:"/contacts/"}},[t._v(" Contacts ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UIHomeLogo:n(326).default,UIHeaderLink:n(342).default})}}]);