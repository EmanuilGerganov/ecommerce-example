(window.webpackJsonp=window.webpackJsonp||[]).push([[8,10],{316:function(t,e,r){"use strict";var n=r(20),o=r(4),l=r(8),c=r(93),f=r(27),m=r(21),d=r(158),v=r(58),_=r(123),h=r(212),I=r(10),N=r(80).f,E=r(39).f,x=r(23).f,S=r(317),w=r(318).trim,y="Number",F=o.Number,T=F.prototype,A=o.TypeError,C=l("".slice),k=l("".charCodeAt),L=function(t){var e=h(t,"number");return"bigint"==typeof e?e:U(e)},U=function(t){var e,r,n,o,l,c,f,code,m=h(t,"number");if(_(m))throw A("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=w(m),43===(e=k(m,0))||45===e){if(88===(r=k(m,2))||120===r)return NaN}else if(48===e){switch(k(m,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(c=(l=C(m,2)).length,f=0;f<c;f++)if((code=k(l,f))<48||code>o)return NaN;return parseInt(l,n)}return+m};if(c(y,!F(" 0o1")||!F("0b1")||F("+0x1"))){for(var M,O=function(t){var e=arguments.length<1?0:F(L(t)),r=this;return v(T,r)&&I((function(){S(r)}))?d(Object(e),r,O):e},R=n?N(F):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;R.length>V;V++)m(F,M=R[V])&&!m(O,M)&&x(O,M,E(F,M));O.prototype=T,T.constructor=O,f(o,y,O)}},317:function(t,e,r){var n=r(8);t.exports=n(1..valueOf)},318:function(t,e,r){var n=r(8),o=r(33),l=r(22),c=r(319),f=n("".replace),m="["+c+"]",d=RegExp("^"+m+m+"*"),v=RegExp(m+m+"*$"),_=function(t){return function(e){var r=l(o(e));return 1&t&&(r=f(r,d,"")),2&t&&(r=f(r,v,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},319:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},334:function(t,e,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("579e155b",content,!0,{sourceMap:!1})},341:function(t,e,r){"use strict";r.r(e);r(316);var n={props:{w:{type:Number,required:!1,default:96},heading:{type:String,required:!0},image:{type:String,required:!0}}},o=r(28),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-2 mx-auto text-center sm:p-10"},[r("img",{staticClass:"mx-auto h-24 mb-3",attrs:{loading:"lazy",width:t.w,height:"96",src:t.image,title:t.heading,alt:""}}),t._v(" "),r("div",{staticClass:"uppercase font-bold mb-2"},[t._v("\n    "+t._s(t.heading)+"\n  ")]),t._v(" "),r("span",{staticClass:"text-lg"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,r){"use strict";r(334)},350:function(t,e,r){var n=r(56)((function(i){return i[1]}));n.push([t.i,"#stamps{color:#403739}",""]),n.locals={},t.exports=n},360:function(t,e,r){"use strict";r.r(e);var n={name:"FeatureStamps"},o=(r(349),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-xl",attrs:{id:"stamps"}},[r("UIFeatureStamp",{attrs:{image:"/packs2.svg",heading:"Delivery",w:142}},[t._v("\n    Lorem ipsum dolor sit amet\n  ")]),t._v(" "),r("UIFeatureStamp",{attrs:{image:"/service.svg",heading:"Service",w:110}},[t._v("\n    Lorem ipsum dolor\n  ")]),t._v(" "),r("UIFeatureStamp",{attrs:{image:"/truck.svg",heading:"Transport"}},[t._v("\n    Lorem ipsum dolor sit amet\n  ")]),t._v(" "),r("UIFeatureStamp",{attrs:{image:"/list.svg",heading:"Tasks"}},[t._v("\n    Lorem ipsum dolor sit\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UIFeatureStamp:r(341).default})}}]);