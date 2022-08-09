<template>
  <main id="main" class="px-5 lg:max-w-screen-xl">
    <header>
      <h1 class="heading">GET IN TOUCH</h1>
    </header>
    <!-- Form example -->
    <div class="grid justify-center">
      <span class="text-xl font-bold">
        Hello 👋,
        <span class="font-normal">Please fill out the form to message us</span>
      </span>
      {{ errors.length ? errors : '' }}
      <form class="mt-6" @submit.prevent="sendEmail">
        <div class="flex gap-3">
          <div class="w-full">
            <label
              for="firstname"
              type="text"
              class="block text-xs font-bold text-gray-600 uppercase"
              >Name</label
            >
            <input
              id="firstname"
              v-model="firstName"
              type="text"
              name="firstname"
              placeholder="John"
              autocomplete="given-name"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
          </div>
          <div class="w-full">
            <label for="lastname" class="block text-xs font-bold text-gray-600 uppercase"
              >Surname</label
            >
            <input
              id="lastname"
              v-model="lastName"
              type="text"
              name="lastname"
              placeholder="Doe"
              autocomplete="family-name"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
          </div>
        </div>
        <label for="email" class="block mt-2 text-xs font-bold text-gray-600 uppercase"
          >E-mail</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="ivanpetrov@gmail.com"
          autocomplete="email"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />

        <label for="text" class="block mt-2 text-xs font-bold text-gray-600 uppercase"
          >Write your message here</label
        >
        <textarea
          id="message"
          v-model="message"
          rows="10"
          name="message"
          type="text"
          placeholder="С какво можем да Ви бъдем полезни * "
          autocomplete="text"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />
        <button
          type="submit"
          class="btn btn-block text-white border-0 bg-herb-prime hover:bg-herb-hover mt-3"
        >
          SEND
        </button>
        <small class="font-bold flex justify-between mt-2 text-xs text-gray-500 hover:text-black">
         You can find us on social media!
        </small>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'KontaktiPage',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      errors: [],
    }
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
      }
      this.$http
        .post('https://herbitinkturi.bg/admin/jobs/email', params)
        .then((response) => {
          console.log(response.status === 200)
          this.firstName = ''
          this.lastName = ''
          this.message = ''
          this.email = ''
          alert('Благодарим Ви, че се свързахте с нас ! Вашето запитване е изпратено успешно!')
          this.$router.push('/')
        })
        .catch((error) =>
          this.errors.push(
            'За съжаление Вашето запитване не може да бъде изпратено в момента. Моля, свържете се с нас по телефона или в социалните мрежи. Съжаляваме за причиненото неудобство.',
            error
          )
        )
    },
  },
}
</script>
