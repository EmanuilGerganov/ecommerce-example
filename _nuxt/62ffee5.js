(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5,9,12,18],{322:function(t,e,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("24746002",content,!0,{sourceMap:!1})},325:function(t,e,r){"use strict";r.r(e);var n={components:{},props:{article:{type:Object,required:!0,default:void 0},typeOfLoading:{type:String,required:!1,default:"lazy"}}},l=r(28),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"mx-auto w-4/5",attrs:{"data-cy":"article"}},[r("div",{},[r("div",{staticClass:"mb-3"},[r("nuxt-link",{attrs:{to:"/blog/"+t.article.slug+"/"}},[r("img",{staticClass:"h-auto",attrs:{width:"500",height:"333",loading:t.typeOfLoading,title:t.article.title,src:"/article-image.jpg",alt:t.article.title}})])],1),t._v(" "),r("span",[t._v("\n      "+t._s(t.articlePublishedDate)+"\n      ")]),t._v(" "),r("h2",{staticClass:"line-clamp-1 text-xl sm:text-xl hover:text-indigo-600 transition duration-200 font-bold text-gray-900 mt-3"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"text-gray-700 my-5 line-clamp-3"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),r("nuxt-link",{staticClass:"bg-herb-prime hover:bg-herb-hover p-3 text-white font-medium",attrs:{"data-cy":"read-more",to:"/blog/"+t.article.slug+"/"}},[t._v("\n      Read more\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,r){"use strict";r(322)},330:function(t,e,r){var n=r(56)((function(i){return i[1]}));n.push([t.i,'.the-hero{background-image:url("/tea.jpg")}',""]),n.locals={},t.exports=n},332:function(t,e,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("d1e6725c",content,!0,{sourceMap:!1})},338:function(t,e,r){"use strict";r.r(e);var n={},l=(r(329),r(28)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"xl:bg-hero-position bg-cover h-heroBg the-hero",attrs:{"aria-labelledby":"heroHeader"}},[r("div",{staticClass:"grid w-full max-w-lg sm:max-w-4xl lg:max-w-[1570px] md:grid-cols-2 mx-auto px-3 items-center h-full"},[r("div",{staticClass:"h-auto grid justify-center space-y-16"},[r("h1",{staticClass:"text-4xl font-bold w-full h-auto",attrs:{id:"heroHeader"}},[t._v("Main heading")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"w-full h-auto"},[r("nuxt-link",{staticClass:"text-white px-6 py-1.5 rounded-full shadow-lg bg-gradient-to-r from-herb-prime ",attrs:{to:"/products/"}},[r("span",{staticClass:"font-bold h-6 w-48"},[t._v("Call to action")])])],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-2xl w-11/12 h-auto"},[t._v("\n        Lorem ipsum dolor sit amet consectetur."),r("br"),t._v("\n        Quisquam eum aliquam.\n      ")])}],!1,null,null,null);e.default=component.exports},339:function(t,e,r){"use strict";r.r(e);var n={props:{linkDestination:{type:String,default:"#"}}},l=r(28),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"mt-3 btn bg-white font-bold border-solid border-2 border-herb-prime text-herb-prime hover:text-white hover:bg-herb-prime rounded-full w-full max-w-xs",attrs:{to:t.linkDestination}},[r("span",{staticClass:"font-bold text-lg"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,r){"use strict";r.r(e);var n=r(48),l=Object(n.b)({setup:function(){var t=Object(n.d)(!1);return{isShown:t,showVideo:function(){t.value=!0}}}}),o=r(28),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isShown?r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/IUN664s7N-c",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):r("div",{staticClass:"relative cursor-pointer",attrs:{"data-cy":"youtube-image"},on:{click:t.showVideo}},[r("img",{attrs:{loading:"lazy",width:"640",height:"360",src:"/sddefault.jpg",alt:"Youtube video example",title:"Example video title"}}),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"absolute left-1/2 top-1/2 move animate-pulse"},[r("span",{staticClass:"play-button text-6xl text-white text-center"},[t._v("▶")])])}],!1,null,null,null);e.default=component.exports},345:function(t,e,r){"use strict";r(332)},346:function(t,e,r){var n=r(56)((function(i){return i[1]}));n.push([t.i,'#content[data-v-54158502]{display:grid;grid-template-areas:"about about about" ". products ." "stamps stamps stamps" "video video video" ". categories ." ". blog ." "partners partners partners" "bulletin bulletin bulletin";grid-template-columns:1fr 90% 1fr;justify-items:center;justify-content:center;align-items:center}#about[data-v-54158502]{grid-area:about}#products[data-v-54158502]{grid-area:products}#stamps[data-v-54158502]{grid-area:stamps}#video[data-v-54158502]{grid-area:video}#categories[data-v-54158502]{grid-area:categories}#blog[data-v-54158502]{grid-area:blog}#partners[data-v-54158502]{grid-area:partners}#bulletin[data-v-54158502]{grid-area:bulletin;background-color:grey}',""]),n.locals={},t.exports=n},359:function(t,e,r){"use strict";r.r(e);r(46),r(31),r(38),r(17),r(54),r(32),r(55);var n=r(25),l=(r(60),r(59));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"HomePage",components:{},head:function(){return{link:[{rel:"preload",as:"image",href:"/hero-large.webp"}],meta:[{hid:"description",name:"description",content:"Специално подбрана комбинация от билки. Чисти билкови екстракти."},{hid:"og:type",name:"og:type",content:"website"},{hid:"og:title",name:"og:title",content:"Билкови тинктури Специално подбрана комбинация от билки. Чисти билкови екстракти."},{hid:"og:description",name:"og:description",content:"Специално подбрана комбинация от билки. Чисти билкови екстракти."},{hid:"og:url",name:"og:url",content:"https://herbitinkturi.bg"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({homeCategories:function(t){return t.homeCategories},lastArticles:function(t){return t.lastArticles},products:function(t){return t.products.slice(-3)}}))},d=c,m=(r(345),r(28)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("UIHeroHeader"),t._v(" "),r("section",{staticClass:"py-5 mx-auto max-w-lg sm:max-w-4xl lg:max-w-[1570px] grid gap-5 md:grid-cols-2 items-center px-3 text-center",attrs:{id:"about"}},[r("img",{staticClass:"mx-auto mt-12",attrs:{width:"650",height:"400",loading:"eager",src:"/tea2.jpg",alt:"Билкови тинктури Терис",title:"Билкови тинктури - подари си здраве"}}),t._v(" "),r("div",{staticClass:"order-first items-center lg:order-last min-h-[540px] text-lg"},[t._m(0),t._v(" "),r("UIBasicButton",{attrs:{"link-destination":"/about/"}},[t._v(" Learn more ")])],1)]),t._v(" "),r("div",{attrs:{id:"content"}},[t.products?r("section",{staticClass:"space-y-5 sm:space-y-10 py-5 text-center",attrs:{id:"products"}},[r("h3",{staticClass:"heading"},[t._v("BEST SELLING PRODUCTS")]),t._v(" "),r("div",{staticClass:"text-center grid lg:grid-cols-3 gap-5 justify-center"},t._l(t.products,(function(t){return r("LazyProductsCard",{key:t.id,attrs:{product:t,"type-of-loading":"lazy"}})})),1),t._v(" "),r("UIBasicButton",{attrs:{"link-destination":"/products/"}},[t._v("\n        All Products\n      ")])],1):t._e(),t._v(" "),r("LazyStamps",{staticClass:"w-full bg-section-blue py-5",attrs:{id:"stamps"}}),t._v(" "),r("section",{staticClass:"py-5",attrs:{id:"video"}},[t._m(1),t._v(" "),r("YoutubeVideo",{staticClass:"mx-auto w-full"})],1),t._v(" "),r("section",{staticClass:"py-5 justify-center text-center",attrs:{id:"blog"}},[r("h3",{staticClass:"heading"},[t._v("Latest posts")]),t._v(" "),r("div",{staticClass:"grid gap-7 lg:grid-cols-3 py-4 mt-5 overflow-hidden md:container md:mx-auto text-left"},t._l(t.lastArticles,(function(article){return r("BlogCard",{key:article.slug,staticClass:"flex items-center justify-center",attrs:{article:article,"type-of-loading":"lazy"}})})),1),t._v(" "),r("UIBasicButton",{attrs:{"link-destination":"/blog/"}},[t._v(" ALL ARTICLES ")])],1),t._v(" "),r("section",{staticClass:"bg-section-blue py-5 w-full",attrs:{id:"partners"}},[r("h3",{staticClass:"heading"},[t._v("Partners")]),t._v(" "),r("div",{staticClass:"flex flex-wrap-reverse justify-center justify-items-center gap-10 md:gap-28"},[r("div",{staticClass:"space-y-10 text-center"},[t._m(2),t._v(" "),r("UIBasicButton",{attrs:{"link-destination":"/partniori/"}},[t._v("\n            СТАНИ НАШ ПАРТНЬОР\n          ")])],1),t._v(" "),r("img",{staticClass:"mx-auto lg:m-0 grid-row",attrs:{"data-cy":"partners-image",width:"640",height:"414",loading:"lazy",src:"/partniori.webp",alt:"Parthners",title:"Партньори",sizes:"xs:360px md:640px"}})])]),t._v(" "),r("LazyEmailBulletin",{attrs:{id:"bulletin"}})],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-left"},[r("h2",{staticClass:"text-2xl text-center my-10 font-bold styled pb-4 relative uppercase heading text-herb-prime"},[t._v("\n          100% HEADING TITLE TWO\n        ")]),t._v(" "),r("p",{staticClass:"p-1 mb-6"},[r("span",{staticClass:"font-bold text-herb-prime"},[t._v("\n            Lorem ipsum dolor sit amet consectetur adipisicing elit.\n          ")]),t._v("\n          Tempora, omnis ratione in laudantium maxime ipsum, facilis\n          blanditiis quod laboriosam labore aut! Voluptatem ea similique\n          molestias voluptas consectetur cumque optio nisi.\n        ")]),t._v(" "),r("p",{staticClass:"p-1 mb-6"},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit.\n          "),r("span",{staticClass:"font-bold text-herb-prime"},[t._v("Tempora, omnis ratione in laudantium maxime ipsum,")]),t._v("\n          facilis blanditiis quod laboriosam labore aut! Voluptatem ea\n          similique molestias voluptas consectetur cumque optio nisi.\n        ")]),t._v(" "),r("p",{staticClass:"p-1 mb-6"},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,\n          omnis ratione in laudantium maxime ipsum, facilis blanditiis quod\n          laboriosam labore aut!\n          "),r("span",{staticClass:"font-bold text-herb-prime"},[t._v("Voluptatem ea similique molestias voluptas consectetur cumque\n            optio nisi.")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"heading"},[t._v("\n        HEADING THREE"),r("br"),t._v("\n        Example lazy youtube video component.\n      ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-5 lg:p-0 prose prose-lg md:prose-xl text-left"},[t._v("\n            Eкипът на herbtinkturi.bg и\n            "),r("a",{staticClass:"text-pink-700",attrs:{href:"https://irisolog.bg/"}},[t._v("\n              Кабинет Ирисова диагностика\n            ")]),t._v("\n            разширяват структурата и процеса си на работа, така че да бъдем\n            максимално ползотворни в мисията си към здравето на нашите\n            пациенти.\n          ")])}],!1,null,"54158502",null);e.default=component.exports;installComponents(component,{UIHeroHeader:r(338).default,UIBasicButton:r(339).default,YoutubeVideo:r(340).default,BlogCard:r(325).default})}}]);