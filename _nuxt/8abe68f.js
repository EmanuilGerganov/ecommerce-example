(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{359:function(e,t,n){"use strict";n.r(t);var r=n(11),o=(n(49),n(82),{name:"KontaktiPage",data:function(){return{firstName:"",lastName:"",email:"",message:"",errors:[]}},head:{title:"Свържете се с нас ",meta:[{hid:"description",name:"description",content:"Свържете се с нас - Специално подбрана комбинация от билки."},{hid:"og:type",name:"og:type",content:"website"},{hid:"og:title",name:"og:title",content:"Свържете се с нас "},{hid:"og:description",name:"og:description",content:"Свържете се с нас - Специално подбрана комбинация от билки."},{hid:"og:url",name:"og:url",content:"https://herbitinkturi.bg/contacts/"}]},methods:{sendEmail:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={name:e.firstName+" "+e.lastName,email:e.email,message:"Име: ".concat(e.firstName," ").concat(e.lastName," <br><br><br>\n        ").concat(e.message)},e.$http.post("https://herbitinkturi.bg/admin/jobs/email",n).then((function(t){console.log(200===t.status),e.firstName="",e.lastName="",e.message="",e.email="",alert("Благодарим Ви, че се свързахте с нас ! Вашето запитване е изпратено успешно!"),e.$router.push("/")})).catch((function(t){return e.errors.push("За съжаление Вашето запитване не може да бъде изпратено в момента. Моля, свържете се с нас по телефона или в социалните мрежи. Съжаляваме за причиненото неудобство.",t)}));case 2:case"end":return t.stop()}}),t)})))()}}}),l=n(28),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"px-5 lg:max-w-screen-xl",attrs:{id:"main"}},[e._m(0),e._v(" "),n("div",{staticClass:"grid justify-center"},[e._m(1),e._v("\n    "+e._s(e.errors.length?e.errors:"")+"\n    "),n("form",{staticClass:"mt-6",on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[n("div",{staticClass:"flex gap-3"},[n("div",{staticClass:"w-full"},[n("label",{staticClass:"block text-xs font-bold text-gray-600 uppercase",attrs:{for:"firstname",type:"text"}},[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],staticClass:"block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",attrs:{id:"firstname",type:"text",name:"firstname",placeholder:"John",autocomplete:"given-name",required:""},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"w-full"},[n("label",{staticClass:"block text-xs font-bold text-gray-600 uppercase",attrs:{for:"lastname"}},[e._v("Surname")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",attrs:{id:"lastname",type:"text",name:"lastname",placeholder:"Doe",autocomplete:"family-name",required:""},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}})])]),e._v(" "),n("label",{staticClass:"block mt-2 text-xs font-bold text-gray-600 uppercase",attrs:{for:"email"}},[e._v("E-mail")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",attrs:{id:"email",type:"email",name:"email",placeholder:"ivanpetrov@gmail.com",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("label",{staticClass:"block mt-2 text-xs font-bold text-gray-600 uppercase",attrs:{for:"text"}},[e._v("Write your message here")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",attrs:{id:"message",rows:"10",name:"message",type:"text",placeholder:"С какво можем да Ви бъдем полезни * ",autocomplete:"text",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),n("button",{staticClass:"btn btn-block text-white border-0 bg-herb-prime hover:bg-herb-hover mt-3",attrs:{type:"submit"}},[e._v("\n        SEND\n      ")]),e._v(" "),n("small",{staticClass:"font-bold flex justify-between mt-2 text-xs text-gray-500 hover:text-black"},[e._v("\n       You can find us on social media!\n      ")])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",{staticClass:"heading"},[e._v("GET IN TOUCH")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"text-xl font-bold"},[e._v("\n      Hello 👋,\n      "),n("span",{staticClass:"font-normal"},[e._v("Please fill out the form to message us")])])}],!1,null,null,null);t.default=component.exports}}]);