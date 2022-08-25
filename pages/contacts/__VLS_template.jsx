export default (await import('vue')).defineComponent({
name: 'KontaktiPage',
data() {
return {
firstName: '',
lastName: '',
email: '',
message: '',
errors: [],
};
},
head: {
title: 'Свържете се с нас ',
meta: [
{
hid: 'description',
name: 'description',
content: 'Свържете се с нас - Специално подбрана комбинация от билки.',
},
{
hid: 'og:type',
name: 'og:type',
content: 'website',
},
{
hid: 'og:title',
name: 'og:title',
content: 'Свържете се с нас ',
},
{
hid: 'og:description',
name: 'og:description',
content: 'Свържете се с нас - Специално подбрана комбинация от билки.',
},
{
hid: 'og:url',
name: 'og:url',
content: 'https://herbitinkturi.bg/contacts/',
},
],
},
methods: {
async sendEmail() {
const params = {
name: this.firstName + ' ' + this.lastName,
email: this.email,
message: `Име: ${this.firstName} ${this.lastName} <br><br><br>
        ${this.message}`,
};
this.$http
.post('https://herbitinkturi.bg/admin/jobs/email', params)
.then((response) => {
console.log(response.status === 200);
this.firstName = '';
this.lastName = '';
this.message = '';
this.email = '';
alert('Благодарим Ви, че се свързахте с нас ! Вашето запитване е изпратено успешно!');
this.$router.push('/');
})
.catch((error) => this.errors.push(
'За съжаление Вашето запитване не може да бъде изпратено в момента. Моля, свържете се с нас по телефона или в социалните мрежи. Съжаляваме за причиненото неудобство.',
error
)
);
},
},
});
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js';
const __VLS_types: typeof import('./__VLS_types.js');

const __VLS_options = {
...({
name: 'KontaktiPage',
data() {
return {
firstName: '',
lastName: '',
email: '',
message: '',
errors: [],
};
},
head: {
title: 'Свържете се с нас ',
meta: [
{
hid: 'description',
name: 'description',
content: 'Свържете се с нас - Специално подбрана комбинация от билки.',
},
{
hid: 'og:type',
name: 'og:type',
content: 'website',
},
{
hid: 'og:title',
name: 'og:title',
content: 'Свържете се с нас ',
},
{
hid: 'og:description',
name: 'og:description',
content: 'Свържете се с нас - Специално подбрана комбинация от билки.',
},
{
hid: 'og:url',
name: 'og:url',
content: 'https://herbitinkturi.bg/contacts/',
},
],
},
methods: {
async sendEmail() {
const params = {
name: this.firstName + ' ' + this.lastName,
email: this.email,
message: `Име: ${this.firstName} ${this.lastName} <br><br><br>
        ${this.message}`,
};
this.$http
.post('https://herbitinkturi.bg/admin/jobs/email', params)
.then((response) => {
console.log(response.status === 200);
this.firstName = '';
this.lastName = '';
this.message = '';
this.email = '';
alert('Благодарим Ви, че се свързахте с нас ! Вашето запитване е изпратено успешно!');
this.$router.push('/');
})
.catch((error) => this.errors.push(
'За съжаление Вашето запитване не може да бъде изпратено в момента. Моля, свържете се с нас по телефона или в социалните мрежи. Съжаляваме за причиненото неудобство.',
error
)
);
},
},
}),
};

const __VLS_name = (await import('./__VLS_types.js')).getNameOption({
name: 'KontaktiPage',
data() {
return {
firstName: '',
lastName: '',
email: '',
message: '',
errors: [],
};
},
head: {
title: 'Свържете се с нас ',
meta: [
{
hid: 'description',
name: 'description',
content: 'Свържете се с нас - Специално подбрана комбинация от билки.',
},
{
hid: 'og:type',
name: 'og:type',
content: 'website',
},
{
hid: 'og:title',
name: 'og:title',
content: 'Свържете се с нас ',
},
{
hid: 'og:description',
name: 'og:description',
content: 'Свържете се с нас - Специално подбрана комбинация от билки.',
},
{
hid: 'og:url',
name: 'og:url',
content: 'https://herbitinkturi.bg/contacts/',
},
],
},
methods: {
async sendEmail() {
const params = {
name: this.firstName + ' ' + this.lastName,
email: this.email,
message: `Име: ${this.firstName} ${this.lastName} <br><br><br>
        ${this.message}`,
};
this.$http
.post('https://herbitinkturi.bg/admin/jobs/email', params)
.then((response) => {
console.log(response.status === 200);
this.firstName = '';
this.lastName = '';
this.message = '';
this.email = '';
alert('Благодарим Ви, че се свързахте с нас ! Вашето запитване е изпратено успешно!');
this.$router.push('/');
})
.catch((error) => this.errors.push(
'За съжаление Вашето запитване не може да бъде изпратено в момента. Моля, свържете се с нас по телефона или в социалните мрежи. Съжаляваме за причиненото неудобство.',
error
)
);
},
},
} as const);
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components. /* __VLS_.SearchTexts.Components */;
({} as __VLS_types.GlobalAttrs). /* __VLS_.SearchTexts.GlobalAttrs */;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
{
<main id={"\u006d\u0061\u0069\u006e"} class={"\u0070\u0078\u002d\u0035\u0020\u006c\u0067\u003a\u006d\u0061\u0078\u002d\u0077\u002d\u0073\u0063\u0072\u0065\u0065\u006e\u002d\u0078\u006c"}></main>;
{
<header></header>;
{
<h1 class={"\u0068\u0065\u0061\u0064\u0069\u006e\u0067"}></h1>;
}
}
{
<div class={"\u0067\u0072\u0069\u0064\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u0065\u006e\u0074\u0065\u0072"}></div>;
{
<span class={"\u0074\u0065\u0078\u0074\u002d\u0078\u006c\u0020\u0066\u006f\u006e\u0074\u002d\u0062\u006f\u006c\u0064"}></span>;
{
<span class={"\u0066\u006f\u006e\u0074\u002d\u006e\u006f\u0072\u006d\u0061\u006c"}></span>;
}
}
(__VLS_ctx.errors.length ? __VLS_ctx.errors : '');
[errors, errors,];
{
<form class={"\u006d\u0074\u002d\u0036"}></form>;
const __VLS_8: {
'submit': __VLS_types.FillingEventArg<
__VLS_types.GlobalAttrs['onSubmit']
>;
} = {
submit: (__VLS_ctx.sendEmail)
};
[sendEmail,];
{
<div class={"\u0066\u006c\u0065\u0078\u0020\u0067\u0061\u0070\u002d\u0033"}></div>;
{
<div class={"\u0077\u002d\u0066\u0075\u006c\u006c"}></div>;
{
<label for={"\u0066\u0069\u0072\u0073\u0074\u006e\u0061\u006d\u0065"} type={"\u0074\u0065\u0078\u0074"} class={"\u0062\u006c\u006f\u0063\u006b\u0020\u0074\u0065\u0078\u0074\u002d\u0078\u0073\u0020\u0066\u006f\u006e\u0074\u002d\u0062\u006f\u006c\u0064\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0036\u0030\u0030\u0020\u0075\u0070\u0070\u0065\u0072\u0063\u0061\u0073\u0065"}></label>;
}
{
<input id={"\u0066\u0069\u0072\u0073\u0074\u006e\u0061\u006d\u0065"} value={(__VLS_ctx.firstName)} type={"\u0074\u0065\u0078\u0074"} name={"\u0066\u0069\u0072\u0073\u0074\u006e\u0061\u006d\u0065"} placeholder={"\u004a\u006f\u0068\u006e"} autocomplete={"\u0067\u0069\u0076\u0065\u006e\u002d\u006e\u0061\u006d\u0065"} class={"\u0062\u006c\u006f\u0063\u006b\u0020\u0077\u002d\u0066\u0075\u006c\u006c\u0020\u0070\u002d\u0033\u0020\u006d\u0074\u002d\u0032\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0037\u0030\u0030\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0032\u0030\u0030\u0020\u0061\u0070\u0070\u0065\u0061\u0072\u0061\u006e\u0063\u0065\u002d\u006e\u006f\u006e\u0065\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u006f\u0075\u0074\u006c\u0069\u006e\u0065\u002d\u006e\u006f\u006e\u0065\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0033\u0030\u0030\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0069\u006e\u006e\u0065\u0072"} required={true} />;
[firstName,];
}
}
{
<div class={"\u0077\u002d\u0066\u0075\u006c\u006c"}></div>;
{
<label for={"\u006c\u0061\u0073\u0074\u006e\u0061\u006d\u0065"} class={"\u0062\u006c\u006f\u0063\u006b\u0020\u0074\u0065\u0078\u0074\u002d\u0078\u0073\u0020\u0066\u006f\u006e\u0074\u002d\u0062\u006f\u006c\u0064\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0036\u0030\u0030\u0020\u0075\u0070\u0070\u0065\u0072\u0063\u0061\u0073\u0065"}></label>;
}
{
<input id={"\u006c\u0061\u0073\u0074\u006e\u0061\u006d\u0065"} value={(__VLS_ctx.lastName)} type={"\u0074\u0065\u0078\u0074"} name={"\u006c\u0061\u0073\u0074\u006e\u0061\u006d\u0065"} placeholder={"\u0044\u006f\u0065"} autocomplete={"\u0066\u0061\u006d\u0069\u006c\u0079\u002d\u006e\u0061\u006d\u0065"} class={"\u0062\u006c\u006f\u0063\u006b\u0020\u0077\u002d\u0066\u0075\u006c\u006c\u0020\u0070\u002d\u0033\u0020\u006d\u0074\u002d\u0032\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0037\u0030\u0030\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0032\u0030\u0030\u0020\u0061\u0070\u0070\u0065\u0061\u0072\u0061\u006e\u0063\u0065\u002d\u006e\u006f\u006e\u0065\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u006f\u0075\u0074\u006c\u0069\u006e\u0065\u002d\u006e\u006f\u006e\u0065\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0033\u0030\u0030\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0069\u006e\u006e\u0065\u0072"} required={true} />;
[lastName,];
}
}
}
{
<label for={"\u0065\u006d\u0061\u0069\u006c"} class={"\u0062\u006c\u006f\u0063\u006b\u0020\u006d\u0074\u002d\u0032\u0020\u0074\u0065\u0078\u0074\u002d\u0078\u0073\u0020\u0066\u006f\u006e\u0074\u002d\u0062\u006f\u006c\u0064\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0036\u0030\u0030\u0020\u0075\u0070\u0070\u0065\u0072\u0063\u0061\u0073\u0065"}></label>;
}
{
<input id={"\u0065\u006d\u0061\u0069\u006c"} value={(__VLS_ctx.email)} type={"\u0065\u006d\u0061\u0069\u006c"} name={"\u0065\u006d\u0061\u0069\u006c"} placeholder={"\u0069\u0076\u0061\u006e\u0070\u0065\u0074\u0072\u006f\u0076\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d"} autocomplete={"\u0065\u006d\u0061\u0069\u006c"} class={"\u0062\u006c\u006f\u0063\u006b\u0020\u0077\u002d\u0066\u0075\u006c\u006c\u0020\u0070\u002d\u0033\u0020\u006d\u0074\u002d\u0032\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0037\u0030\u0030\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0032\u0030\u0030\u0020\u0061\u0070\u0070\u0065\u0061\u0072\u0061\u006e\u0063\u0065\u002d\u006e\u006f\u006e\u0065\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u006f\u0075\u0074\u006c\u0069\u006e\u0065\u002d\u006e\u006f\u006e\u0065\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0033\u0030\u0030\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0069\u006e\u006e\u0065\u0072"} required={true} />;
[email,];
}
{
<label for={"\u0074\u0065\u0078\u0074"} class={"\u0062\u006c\u006f\u0063\u006b\u0020\u006d\u0074\u002d\u0032\u0020\u0074\u0065\u0078\u0074\u002d\u0078\u0073\u0020\u0066\u006f\u006e\u0074\u002d\u0062\u006f\u006c\u0064\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0036\u0030\u0030\u0020\u0075\u0070\u0070\u0065\u0072\u0063\u0061\u0073\u0065"}></label>;
}
{
<textarea id={"\u006d\u0065\u0073\u0073\u0061\u0067\u0065"} value={(__VLS_ctx.message)} rows={"\u0031\u0030"} name={"\u006d\u0065\u0073\u0073\u0061\u0067\u0065"} type={"\u0074\u0065\u0078\u0074"} placeholder={"\u0421\u0020\u043a\u0430\u043a\u0432\u043e\u0020\u043c\u043e\u0436\u0435\u043c\u0020\u0434\u0430\u0020\u0412\u0438\u0020\u0431\u044a\u0434\u0435\u043c\u0020\u043f\u043e\u043b\u0435\u0437\u043d\u0438\u0020\u002a\u0020"} autocomplete={"\u0074\u0065\u0078\u0074"} class={"\u0062\u006c\u006f\u0063\u006b\u0020\u0077\u002d\u0066\u0075\u006c\u006c\u0020\u0070\u002d\u0033\u0020\u006d\u0074\u002d\u0032\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0037\u0030\u0030\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0032\u0030\u0030\u0020\u0061\u0070\u0070\u0065\u0061\u0072\u0061\u006e\u0063\u0065\u002d\u006e\u006f\u006e\u0065\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u006f\u0075\u0074\u006c\u0069\u006e\u0065\u002d\u006e\u006f\u006e\u0065\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0033\u0030\u0030\u0020\u0066\u006f\u0063\u0075\u0073\u003a\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0069\u006e\u006e\u0065\u0072"} required={true} />;
[message,];
}
{
<button type={"\u0073\u0075\u0062\u006d\u0069\u0074"} class={"\u0062\u0074\u006e\u0020\u0062\u0074\u006e\u002d\u0062\u006c\u006f\u0063\u006b\u0020\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0030\u0020\u0062\u0067\u002d\u0068\u0065\u0072\u0062\u002d\u0070\u0072\u0069\u006d\u0065\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u0067\u002d\u0068\u0065\u0072\u0062\u002d\u0068\u006f\u0076\u0065\u0072\u0020\u006d\u0074\u002d\u0033"}></button>;
}
{
<small class={"\u0066\u006f\u006e\u0074\u002d\u0062\u006f\u006c\u0064\u0020\u0066\u006c\u0065\u0078\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0062\u0065\u0074\u0077\u0065\u0065\u006e\u0020\u006d\u0074\u002d\u0032\u0020\u0074\u0065\u0078\u0074\u002d\u0078\u0073\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0035\u0030\u0030\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0074\u0065\u0078\u0074\u002d\u0062\u006c\u0061\u0063\u006b"}></small>;
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_component!: typeof import('./index.vue')['default'];
