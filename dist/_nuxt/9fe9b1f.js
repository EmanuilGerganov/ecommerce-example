(window.webpackJsonp=window.webpackJsonp||[]).push([[21,5],{325:function(t,e,r){"use strict";r.r(e);var n={components:{},props:{article:{type:Object,required:!0,default:void 0},typeOfLoading:{type:String,required:!1,default:"lazy"}}},c=r(28),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"mx-auto w-4/5",attrs:{"data-cy":"article"}},[r("div",{},[r("div",{staticClass:"mb-3"},[r("nuxt-link",{attrs:{to:"/blog/"+t.article.slug+"/"}},[r("img",{staticClass:"h-auto",attrs:{width:"500",height:"333",loading:t.typeOfLoading,title:t.article.title,src:"ecommerce-example/article-image.jpg",alt:t.article.title}})])],1),t._v(" "),r("span",[t._v("\n      "+t._s(t.articlePublishedDate)+"\n      ")]),t._v(" "),r("h2",{staticClass:"line-clamp-1 text-xl sm:text-xl hover:text-indigo-600 transition duration-200 font-bold text-gray-900 mt-3"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"text-gray-700 my-5 line-clamp-3"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),r("nuxt-link",{staticClass:"bg-herb-prime hover:bg-herb-hover p-3 text-white font-medium",attrs:{"data-cy":"read-more",to:"/blog/"+t.article.slug+"/"}},[t._v("\n      Read more\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,r){"use strict";r.r(e);r(46),r(31),r(38),r(17),r(54),r(32),r(55);var n=r(25),c=r(11),l=(r(49),r(59));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={name:"BlogHomePage",fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("actFetchArticles");case 2:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["articles"]))},f=d,m=r(28),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{id:"main"}},[t._m(0),t._v(" "),r("div",{staticClass:"grid md:grid-cols-2 gap-8"},t._l(t.articles,(function(article,t){return r("BlogCard",{key:article.id,attrs:{article:article,"type-of-loading":t>1?"lazy":"eager"}})})),1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",{staticClass:"heading"},[t._v("BLOG HEADING")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogCard:r(325).default})}}]);