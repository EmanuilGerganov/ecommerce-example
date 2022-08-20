(window.webpackJsonp=window.webpackJsonp||[]).push([[26,7,15],{320:function(t,e,r){"use strict";r.r(e);r(46),r(31),r(38),r(17),r(54),r(32),r(55);var o=r(25),n=r(48),c=r(159);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(n.b)({name:"ProductCard",components:{CartOutline:c.a},props:{product:{type:Object,required:!0,default:function(){}},typeOfLoading:{type:String,required:!1,default:"lazy"}},methods:{addToCart:function(){var t=l(l({},this.product),{},{quantity:1});this.$store.commit("cart/ADD_PRODUCT",t),this.$store.commit("cart/SET_MODAL_DATA",t),this.$store.commit("cart/TOGGLE_MODAL",!0)}}}),f=r(28),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5 text-center",attrs:{"data-cy":"product"}},[r("nuxt-link",{attrs:{to:"/products/"+t.product.slug+"/"}},[r("img",{staticClass:"mx-auto h-[20rem] w-[20rem] duration-700 transform hover:scale-110",attrs:{loading:t.typeOfLoading,height:"350",width:"350",title:t.product.title,src:"ecommerce-example/oil.jpg",alt:t.product.title+" example.com"}})]),t._v(" "),r("div",{staticClass:"mt-3 mx-auto",attrs:{"data-cy":"product-card-info"}},[r("div",{staticClass:"md:line-clamp-1 font-bold text-xl mb-2 uppercase",attrs:{"data-cy":"product-card-name"}},[t._v("\n      "+t._s(t.product.title)+"\n    ")]),t._v(" "),r("span",{staticClass:"text-lg",attrs:{"data-cy":"product-card-price"}},[t._v("\n      "+t._s(t.product.price.toLocaleString("en-US",{style:"currency",currency:"EUR"}))+"\n    ")])]),t._v(" "),r("button",{staticClass:"btn mt-5 border-0 peer text-white font-bold bg-herb-prime hover:bg-herb-hover rounded-full",on:{click:function(){return t.addToCart()}}},[r("CartOutline",{staticClass:"mr-2"}),t._v("\n    ADD\n  ")],1)],1)}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,r){"use strict";r.r(e);r(38),r(17),r(70),r(81);var o=r(48),n=r(94),c=Object(o.b)({setup:function(){var t=Object(o.f)(),input=Object(o.d)(null),e=Object(o.a)((function(){return t.state.products}));return Object(n.onStartTyping)((function(){input.value.active||input.value.focus(),t.commit("TOGGLE_NAVBAR",!1)})),t.commit("SET_BREADCRUMBS",[{title:"PRODUCTS",to:"/products/"}]),{input:input,products:e}},data:function(){return{search:"",query:""}},computed:{filteredProductList:function(){var t=this;return this.products?this.products.filter((function(e){return JSON.stringify(e).toLowerCase().includes(t.query.toLowerCase())})):[]},activeSidebar:function(){return this.$store.state.navbar}},watch:{search:function(t){this.query=t}},methods:{toggleSidebar:function(t){this.$store.commit("TOGGLE_NAVBAR",t)}}}),d=r(28),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex text-lg sm:text-2xl my-5 sm:my-10 justify-center items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"input",staticClass:"text-bold border-b-2 border-solid border-colors-green-600",attrs:{type:"text",placeholder:"Find a product"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},[t._l(t.filteredProductList,(function(t,e){return r("ProductsCard",{key:t.id,attrs:{product:t,"type-of-loading":e>7?"lazy":"eager"}})}))],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsCard:r(320).default})},356:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{search:""}},head:{title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea —  example.com",meta:[{hid:"description",name:"description",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea, asperiores rerum eveniet quisquam aliquam deserunt vitae totam vel odio quas, doloremque nemo commodi!"},{hid:"og:type",name:"og:type",content:"website"},{hid:"og:title",name:"og:title",content:"【Lorem ipsum dolor sit amet — example.com"},{hid:"og:description",name:"og:description",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea, asperiores rerum eveniet quisquam aliquam deserunt vitae totam vel"},{hid:"og:url",name:"og:url",content:"https://example.com/products"}]}},n=r(28),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{id:"main"}},[t._m(0),t._v(" "),r("UIProductsView")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",{staticClass:"heading"},[t._v("Products heading")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UIProductsView:r(336).default})}}]);