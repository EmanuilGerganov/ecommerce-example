(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8,10,14,17],{315:function(t,e,r){"use strict";var n=r(20),o=r(5),c=r(8),l=r(93),d=r(27),m=r(21),h=r(158),f=r(58),v=r(123),x=r(212),_=r(10),y=r(80).f,C=r(39).f,w=r(23).f,O=r(316),I=r(317).trim,A="Number",P=o.Number,M=P.prototype,S=o.TypeError,E=c("".slice),k=c("".charCodeAt),N=function(t){var e=x(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,n,o,c,l,d,code,m=x(t,"number");if(v(m))throw S("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=I(m),43===(e=k(m,0))||45===e){if(88===(r=k(m,2))||120===r)return NaN}else if(48===e){switch(k(m,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(l=(c=E(m,2)).length,d=0;d<l;d++)if((code=k(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+m};if(l(A,!P(" 0o1")||!P("0b1")||P("+0x1"))){for(var T,$=function(t){var e=arguments.length<1?0:P(N(t)),r=this;return f(M,r)&&_((function(){O(r)}))?h(Object(e),r,$):e},R=n?y(P):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;R.length>L;L++)m(P,T=R[L])&&!m($,T)&&w($,T,C(P,T));$.prototype=M,M.constructor=$,d(o,A,$)}},316:function(t,e,r){var n=r(8);t.exports=n(1..valueOf)},317:function(t,e,r){var n=r(8),o=r(33),c=r(22),l=r(318),d=n("".replace),m="["+l+"]",h=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),v=function(t){return function(e){var r=c(o(e));return 1&t&&(r=d(r,h,"")),2&t&&(r=d(r,f,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},318:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},319:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("7c34c168",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r(319)},323:function(t,e,r){var n=r(54)((function(i){return i[1]}));n.push([t.i,'.activetab{margin-bottom:-1px;background-color:#fff;border:1px solid #8bb2cf;border-bottom-color:transparent;border-top-right-radius:5px;border-top-left-radius:5px}.tabcontent{border:1px solid #8bb2cf}@media (max-width:949px){.tabs-layout{display:flex;flex-direction:column;padding:20px}}@media (min-width:950px){.tabs-layout{display:grid;grid-template-areas:"tab1 tab2 tab3 tab4" "cont cont cont cont";grid-template-columns:repeat(4,1fr);padding:40px}}.tab-content{grid-area:cont;width:100%}#tab1{grid-area:tab1}#tab2{grid-area:tab2}#tab3{grid-area:tab3}#tab4{grid-area:tab4}',""]),n.locals={},t.exports=n},324:function(t,e,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("579e155b",content,!0,{sourceMap:!1})},328:function(t,e,r){"use strict";r.r(e);var n=r(48),o=r(94),c={components:{InformationOutline:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.5em",height:"1.5em"}},[e("path",{attrs:{fill:"currentColor",d:"M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"}})])},name:"mdi-information-outline"},FlowerOutline:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.5em",height:"1.5em"}},[e("path",{attrs:{fill:"currentColor",d:"M8.66 13.07c-1.74 0-3.16-1.41-3.16-3.14c0-.71.26-1.39.69-1.93c-.42-.54-.69-1.22-.69-1.93c0-1.73 1.43-3.14 3.16-3.14l.43.03A3.15 3.15 0 0 1 12 1c1.31 0 2.44.81 2.91 1.96l.43-.03c1.73 0 3.16 1.41 3.16 3.14c0 .71-.26 1.39-.69 1.93c.42.54.69 1.22.69 1.93c0 1.73-1.43 3.14-3.16 3.14l-.43-.03A3.15 3.15 0 0 1 12 15a3.15 3.15 0 0 1-2.91-1.96l-.43.03M12 13c.62 0 1.12-.5 1.14-1.1l-.11-1.09c-.32.12-.67.19-1.03.19s-.7-.07-1-.19l-.14 1.09c.02.6.52 1.1 1.14 1.1m3.34-1.93c.63 0 1.16-.51 1.16-1.15c0-.42-.27-.84-.67-1.03l-.88-.42c-.12.74-.51 1.38-1.06 1.83l.81.57c.18.13.4.2.64.2m-.65-5.94l-.82.56c.56.45.95 1.09 1.07 1.81l.88-.4c.41-.2.68-.6.68-1.03c0-.63-.53-1.14-1.16-1.14c-.23 0-.45.07-.65.2M12 3c-.62 0-1.12.5-1.14 1.1L11 5.19c.3-.12.64-.19 1-.19s.71.07 1.03.19l.11-1.09C13.12 3.5 12.62 3 12 3M8.66 4.93c-.63 0-1.16.51-1.16 1.14c0 .43.27.83.67 1.03l.88.4c.12-.72.51-1.36 1.06-1.81l-.81-.56c-.18-.13-.4-.2-.64-.2M8.17 8.9c-.4.2-.67.6-.67 1.02c0 .63.53 1.14 1.16 1.14c.23 0 .45-.06.65-.2l.81-.55c-.56-.45-.95-1.09-1.07-1.81l-.88.4M12 22a9 9 0 0 1-9-9a9 9 0 0 1 9 9a9 9 0 0 1 9-9a9 9 0 0 1-9 9m2.44-2.44a7.04 7.04 0 0 0 4.12-4.12c-1.9.7-3.41 2.22-4.12 4.12m-9-4.12a7.04 7.04 0 0 0 4.12 4.12c-.7-1.9-2.22-3.41-4.12-4.12Z"}})])},name:"mdi-flower-outline"},FormatListBulleted:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.5em",height:"1.5em"}},[e("path",{attrs:{fill:"currentColor",d:"M7 5h14v2H7V5m0 8v-2h14v2H7M4 4.5A1.5 1.5 0 0 1 5.5 6A1.5 1.5 0 0 1 4 7.5A1.5 1.5 0 0 1 2.5 6A1.5 1.5 0 0 1 4 4.5m0 6A1.5 1.5 0 0 1 5.5 12A1.5 1.5 0 0 1 4 13.5A1.5 1.5 0 0 1 2.5 12A1.5 1.5 0 0 1 4 10.5M7 19v-2h14v2H7m-3-2.5A1.5 1.5 0 0 1 5.5 18A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18A1.5 1.5 0 0 1 4 16.5Z"}})])},name:"mdi-format-list-bulleted"},ClipboardListOutline:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.5em",height:"1.5em"}},[e("path",{attrs:{fill:"currentColor",d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M7 7h10V5h2v14H5V5h2v2m5 10v-2h5v2h-5m0-6V9h5v2h-5m-4 1V9H7V8h2v4H8m1.25 2c.41 0 .75.34.75.75c0 .2-.08.39-.21.52L8.12 17H10v1H7v-.92L9 15H7v-1h2.25"}})])},name:"mdi-clipboard-list-outline"}},setup:function(t,e){Object(n.f)();return{isMobile:Object(o.useBreakpoints)(o.breakpointsTailwind).smaller("lg"),tabs:["INFO","HOW TO USE","INGREDIENTS","RECOMMENDED FOR"],tabIndex:Object(n.d)(0),tabImages:["/usage.jpg","/how-to.jpg","/ingredients.jpg","/recommend.webp"],icons:["InformationOutline","FormatListBulleted","FlowerOutline","ClipboardListOutline"]}}},l=c,d=(r(322),r(28)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-screen-2xl mx-auto tabs-layout"},[t._l(4,(function(e,n){return[r("div",{key:e,staticClass:"flex cursor-pointer justify-items-center justify-center items-center space-x-6 py-4 transition-colors duration-500",class:n==t.tabIndex?"bg-white activetab -mb-1 z-10":"",attrs:{id:e},on:{click:function(e){t.tabIndex=n}}},[r(t.icons[n],{tag:"component"}),t._v(" "),r("span",{staticClass:"xl:text-xl font-semibold col-span-3"},[t._v("\n        "+t._s(t.tabs[n])+"\n      ")])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isMobile||t.tabIndex===n,expression:"isMobile || tabIndex === index"}],staticClass:"mx-auto space-y-10 bg-white tab-content"},[r("div",{staticClass:"grid p-3 lg:grid-cols-2 tabcontent"},[r("div",{staticClass:"prose order-last sm:order-first py-8 xl:px-12"},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem\n          odio quibusdam voluptate! Beatae, deserunt veniam. Nam temporibus\n          expedita sint, repellendus quasi animi cupiditate, praesentium\n          tempora provident, neque eum sequi.\n        ")]),t._v(" "),r("img",{staticClass:"rounded-2xl my-8 p-8 w-full",attrs:{src:t.tabImages[n],width:"500",height:"500",title:t.tabs[n]}})])])]}))],2)}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,r){"use strict";r.r(e);r(315);var n={props:{value:{type:Number,required:!1,default:5}}},o=r(28),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center md:justify-start"},t._l(5,(function(i){return r("button",{key:i,class:{"mr-1":i<5},attrs:{type:"button"},on:{click:function(e){return t.$emit("input",i)}}},[r("svg",{staticClass:"block h-5 w-5",class:[t.value>=i?"text-herb-prime":"text-gray-100"],attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"}})])])})),0)}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,r){"use strict";r.r(e);r(315);var n={props:{w:{type:Number,required:!1,default:96},heading:{type:String,required:!0},image:{type:String,required:!0}}},o=r(28),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-2 mx-auto text-center sm:p-10"},[r("img",{staticClass:"mx-auto h-24 mb-3",attrs:{loading:"lazy",width:t.w,height:"96",src:t.image,title:t.heading,alt:""}}),t._v(" "),r("div",{staticClass:"uppercase font-bold mb-2"},[t._v("\n    "+t._s(t.heading)+"\n  ")]),t._v(" "),r("span",{staticClass:"text-lg"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,r){"use strict";r(324)},334:function(t,e,r){var n=r(54)((function(i){return i[1]}));n.push([t.i,"#stamps{color:#403739}",""]),n.locals={},t.exports=n},341:function(t,e,r){"use strict";r.r(e);var n={name:"FeatureStamps"},o=(r(333),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-xl",attrs:{id:"stamps"}},[r("UIFeatureStamp",{attrs:{image:"/packs2.svg",heading:"Delivery",w:142}},[t._v("\n    Lorem ipsum dolor sit amet\n  ")]),t._v(" "),r("UIFeatureStamp",{attrs:{image:"/service.svg",heading:"Service",w:110}},[t._v("\n    Lorem ipsum dolor\n  ")]),t._v(" "),r("UIFeatureStamp",{attrs:{image:"/truck.svg",heading:"Transport"}},[t._v("\n    Lorem ipsum dolor sit amet\n  ")]),t._v(" "),r("UIFeatureStamp",{attrs:{image:"/list.svg",heading:"Tasks"}},[t._v("\n    Lorem ipsum dolor sit\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UIFeatureStamp:r(331).default})},348:function(t,e,r){r(349)},349:function(t,e,r){"use strict";var n=r(6),o=r(5),c=r(9),l=r(8),d=r(33),m=r(13),h=r(125),f=r(22),v=r(61),x=r(126),_=r(214),y=r(14),C=r(40),w=y("replace"),O=RegExp.prototype,I=o.TypeError,A=l(x),P=l("".indexOf),M=l("".replace),S=l("".slice),E=Math.max,k=function(t,e,r){return r>t.length?-1:""===e?r:P(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,o,l,x,y,N,j,T,$=d(this),R=0,L=0,F="";if(null!=t){if((r=h(t))&&(n=f(d("flags"in O?t.flags:A(t))),!~P(n,"g")))throw I("`.replaceAll` does not allow non-global regexes");if(o=v(t,w))return c(o,t,$,e);if(C&&r)return M(f($),t,e)}for(l=f($),x=f(t),(y=m(e))||(e=f(e)),N=x.length,j=E(1,N),R=k(l,x,0);-1!==R;)T=y?f(e(x,R,l)):_(x,l,R,[],void 0,e),F+=S(l,L,R)+T,L=R+N,R=k(l,x,R+j);return L<l.length&&(F+=S(l,L)),F}})},350:function(t,e,r){"use strict";var n=r(6),o=r(71).findIndex,c=r(124),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},363:function(t,e,r){"use strict";r.r(e);r(46),r(38),r(17),r(56),r(32),r(57);var n=r(25),o=r(11),c=(r(35),r(72),r(348),r(34),r(350),r(31),r(62),r(49),r(48)),l=r(59);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(c.b)({name:"ProductDetailsPage",components:{},data:function(){return{rating:5,productCount:1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("actFetchCurrentProduct",t.$route.params.slug);case 2:return e.next=4,t.$store.dispatch("actFetchSameCategoryProducts",t.$store.state.currentProduct.collections[0].id);case 4:case"end":return e.stop()}}),e)})))()},head:function(){if(this.product&&this.product){var t=this.seoDescription?this.replaceAll(this.seoDescription,'"',"'"):this.replaceAll("Продукт ".concat(this.product.name),'"',"'"),title=this.product.seoTitle?this.replaceAll(this.product.seoTitle,'"',"'"):this.replaceAll(this.product.name,'"',"'");return{title:title,meta:[{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",name:"og:url",content:"https://herbitinkturi.bg".concat(this.$route.fullPath)},{hid:"og:image",name:"og:image",content:this.$img(this.product.media[0].url)},{hid:"og:price:amount",name:"og:price:amount",content:this.singlePrice},{hid:"og:price:currency",name:"og:price:currency",content:"BGN"},{hid:"product:brand",name:"product:brand",content:"Билкови тинктури Терис"},{hid:"product:availability",name:"product:availability",content:"in stock"},{hid:"product:condition",name:"product:condition",content:"new"},{hid:"product:gtin",name:"product:gtin",content:this.gtin?this.gtin:""},{hid:"product:price:amount",name:"product:price:amount",content:this.singlePrice},{hid:"product:price:currency",name:"product:price:currency",content:"BGN"},{hid:"description",name:"description",content:t}]}}},computed:m(m({},Object(l.b)({product:function(t){return t.currentProduct},sameCategoryProducts:function(t){return t.sameCategoryProducts},productTabs:function(t){return t.productTabs}})),{},{questions:function(){return this.productTabs[0].details},singlePrice:function(){return this.product.pricing.priceRangeUndiscounted.start.gross.amount},priceTotalMessage:function(){return this.product?(this.product.pricing.priceRangeUndiscounted.start.gross.amount*this.productCount).toLocaleString("bg-BG",{style:"currency",currency:"BGN"}):"-----"}}),methods:{addToCart:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=m({},t),r.next=3,e.$store.dispatch("cart/addProductToCart",{product:{node:n},quantity:e.productCount});case 3:o={product:{price:e.singlePrice,quantity:e.productCount},productName:e.product.name,productImageUrl:e.product.media[0].url,productPrice:e.singlePrice,productQuantity:e.productCount},e.$store.commit("SET_PRODUCT_ADD_MESSAGE",o),e.$store.commit("TOGGLE_MODAL",!0);case 6:case"end":return r.stop()}}),r)})))()},incrementProductCount:function(){this.productCount++},decrementProductCount:function(){this.productCount>1&&this.productCount--}},jsonld:function(){var t=this;if(!this.product&&!this.$store.state.products)return{"@context":"http://schema.org","@graph":[{"@type":"Product"}]};var e=this.product?this.product:this.$store.state.products[this.$store.state.products.findIndex((function(e){return e.node.slug===t.$route.params.slug}))].node;return{"@context":"http://schema.org","@graph":[{"@type":"Product",name:this.replaceAll(e.name,'"',"'"),brand:{"@type":"Brand",name:"Терис"},description:this.replaceAll(e.seoDescription,'"',"'"),alternativeHeadline:this.replaceAll(e.description,'"',"'"),sku:null==e?void 0:e.variants[0].sku,productID:null==e?void 0:e.variants[0].sku,url:this.$route.fullPath,gtin13:this.gtin?this.gtin:"",image:null==e?void 0:e.media[0].url,offers:{"@type":"Offer",url:this.$route.fullPath,priceCurrency:"BGN",availability:"http://schema.org/InStock",price:null==e?void 0:e.pricing.priceRangeUndiscounted.start.gross.amount,priceValidUntil:"2022-01-01",condition:"https://schema.org/NewCondition"},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:5,bestRating:5},author:{"@type":"Person",name:"Irena Hristova"}},aggregateRating:{"@type":"AggregateRating",ratingValue:"5",ratingCount:"15"},countryOfOrigin:{"@type":"Country",name:"Bulgaria"}}]}}}),f=r(28),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{id:"main"}},[r("div",{staticClass:"product-page-layout"},[r("header",{attrs:{id:"head"}},[r("div",{staticClass:"grid my-5 mx-auto max-w-[1570px] text-lg font-semibold uppercase sm:text-base md:grid-cols-2 md:items-center md:text-left"},[t.$fetchState.pending?[r("content-placeholders",{staticClass:"mx-auto w-[350px] h-[350px]",attrs:{rounded:!0}},[r("content-placeholders-img")],1)]:[r("img",{staticClass:"mx-auto",attrs:{height:"350",width:"350",preload:"",src:"images"+t.product.media[0].url.split("https://api.herbitinkturi.bg")[1],title:t.product.name,alt:"Снимка на продукт",loading:"eager"}})],t._v(" "),r("div",{staticClass:"flex flex-col gap-2 px-10"},[r("h1",{staticClass:"text-2xl font-bold text-black"},[t.$fetchState.pending?[r("content-placeholders",{attrs:{rounded:!0}},[r("content-placeholders-heading",{staticStyle:{width:"350px",height:"50px",margin:"auto"}})],1)]:[t._v("\n              "+t._s(t.product.name)+"\n            ")]],2),t._v(" "),r("UIStarRating",{model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),t._v(" "),r("div",{staticClass:"font-normal text-md"},[t._v("\n            Code: "+t._s(t.$fetchState.pending?"-------":t.product.variants[0].sku)+"\n          ")]),t._v(" "),t.gtin?r("div",{staticClass:"font-normal text-md"},[t._v("\n            GTIN: "+t._s(t.$fetchState.pending?"-------":t.gtin)+"\n          ")]):t._e(),t._v(" "),r("div",{staticClass:"font-medium text-md"},[t._v("\n            Единична цена: "+t._s(t._f("money")(t.$fetchState.pending?"-------":t.singlePrice))+"\n          ")]),t._v(" "),r("div",{staticClass:"text-lg"},[t._v("Количество")]),t._v(" "),r("div",{staticClass:"self-start rounded-[60px] border-[1px] border-solid btn-group border-herb-prime"},[r("button",{staticClass:"w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-herb-prime hover:text-white hover:bg-herb-hover",on:{click:function(){return t.decrementProductCount()}}},[t._v("\n              -\n            ")]),t._v(" "),r("div",{staticClass:"w-16 h-16 text-black bg-transparent border-0 btn btn-disabled text-xl"},[t._v("\n              "+t._s(t.productCount)+"\n            ")]),t._v(" "),r("button",{staticClass:"w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-herb-prime hover:text-white hover:bg-herb-hover",on:{click:function(){return t.incrementProductCount()}}},[t._v("\n              +\n            ")])]),t._v(" "),r("div",{staticClass:"text-lg"},[t._v("ОБЩА ЦЕНА:"+t._s(t.priceTotalMessage))]),t._v(" "),r("button",{staticClass:"font-bold text-white rounded-full border-0 btn bg-herb-prime hover:bg-herb-hover",attrs:{"data-cy":"add"},on:{click:function(){return t.addToCart(t.product)}}},[r("ShoppingCart",{staticClass:"mr-2 w-7 h-7"}),t._v("\n            ADD\n          ")],1)],1)],2)]),t._v(" "),r("section",{staticClass:"py-5 w-full bg-section-blue",attrs:{id:"info"}},[r("UIProductTabs")],1),t._v(" "),r("section",{attrs:{id:"stamps"}},[r("Stamps",{staticClass:"py-5"})],1),t._v(" "),t.productTabs&&t.productTabs[0]?r("section",{staticClass:"w-full bg-section-blue",attrs:{id:"questions"}},[r("h2",{staticClass:"heading"},[t._v("ЧЕСТО ЗАДАВАНИ ВЪПРОСИ")]),t._v(" "),t._l(t.questions,(function(e){return r("div",{key:e.id+t.product.name,staticClass:"prose sm:hidden prose-sm prose-lg"},[r("h3",{staticClass:"px-2"},[t._v("\n          "+t._s(e.question)+"\n        ")]),t._v(" "),r("div",{staticClass:"px-3",domProps:{innerHTML:t._s(e.answer)}})])})),t._v(" "),r("div",{staticClass:"grid gap-5 justify-center py-10"},t._l(t.questions[1].questions,(function(e){return r("div",{key:e.id,staticClass:"hidden items-center max-w-5xl border sm:block collapse rounded-box border-base-300 collapse-arrow",attrs:{tabindex:"0"}},[r("div",{staticClass:"text-xl font-semibold collapse-title"},[t._v("\n            "+t._s(e.question)+"\n          ")]),t._v(" "),r("div",{staticClass:"flex-col prose prose-lg collapse-content md:prose-xl",domProps:{innerHTML:t._s(e.answer)}})])})),0)],2):t._e(),t._v(" "),t.productTabs&&t.sameCategoryProducts&&!t.$fetchState.pending?r("section",{staticClass:"my-20",attrs:{id:"related"}},[r("h2",{staticClass:"uppercase heading"},[t._v("Related products")]),t._v(" "),r("LzyComponent",[r("ProductsCarousel",{attrs:{products:t.sameCategoryProducts}})],1)],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UIStarRating:r(330).default,UIProductTabs:r(328).default,Stamps:r(341).default})}}]);