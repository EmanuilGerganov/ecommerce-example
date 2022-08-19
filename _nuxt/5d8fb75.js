(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{321:function(t,r,e){"use strict";e.r(r);e(46),e(31),e(38),e(17),e(56),e(32),e(57);var c=e(25),o=e(48),n=e(159);function l(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var m=Object(o.b)({name:"ProductCard",components:{CartOutline:n.a},props:{product:{type:Object,required:!0,default:function(){}},typeOfLoading:{type:String,required:!1,default:"lazy"}},methods:{addToCart:function(){var t=d(d({},this.product),{},{quantity:1});this.$store.commit("cart/ADD_PRODUCT",t),this.$store.commit("cart/SET_MODAL_DATA",t),this.$store.commit("cart/TOGGLE_MODAL",!0)}}}),O=e(28),component=Object(O.a)(m,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"mt-5 text-center",attrs:{"data-cy":"product"}},[e("nuxt-link",{attrs:{to:"/products/"+t.product.slug+"/"}},[e("img",{staticClass:"mx-auto h-[20rem] w-[20rem] duration-700 transform hover:scale-110",attrs:{loading:t.typeOfLoading,height:"350",width:"350",title:t.product.title,src:"/oil.jpg",alt:t.product.title+" example.com"}})]),t._v(" "),e("div",{staticClass:"mt-3 mx-auto",attrs:{"data-cy":"product-card-info"}},[e("div",{staticClass:"md:line-clamp-1 font-bold text-xl mb-2 uppercase",attrs:{"data-cy":"product-card-name"}},[t._v("\n      "+t._s(t.product.title)+"\n    ")]),t._v(" "),e("span",{staticClass:"text-lg",attrs:{"data-cy":"product-card-price"}},[t._v("\n      "+t._s(t.product.price.toLocaleString("en-US",{style:"currency",currency:"EUR"}))+"\n    ")])]),t._v(" "),e("button",{staticClass:"btn mt-5 border-0 peer text-white font-bold bg-herb-prime hover:bg-herb-hover rounded-full",on:{click:function(){return t.addToCart()}}},[e("CartOutline",{staticClass:"mr-2"}),t._v("\n    ADD\n  ")],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);