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
      {{ errors.length ? errors : "" }}
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
            <label
              for="lastname"
              class="block text-xs font-bold text-gray-600 uppercase"
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
        <label
          for="email"
          class="block mt-2 text-xs font-bold text-gray-600 uppercase"
          >E-mail</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          autocomplete="email"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />

        <label
          for="text"
          class="block mt-2 text-xs font-bold text-gray-600 uppercase"
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
        <small
          class="font-bold flex justify-between mt-2 text-xs text-gray-500 hover:text-black"
        >
          You can find us on social media!
        </small>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      errors: [],
    };
  },
  head: {
    title: "Get in touch",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Get in touch - Lorem ipsum example.",
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Get in touch",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Get in touch - Lorem ipsum example.",
      },
      {
        hid: "og:url",
        name: "og:url",
        content:
          "https://emanuilgerganov.github.io/ecommerce-example/contacts/",
      },
    ],
  },
  methods: {
    async sendEmail() {
      const params = {
        name: this.firstName + " " + this.lastName,
        email: this.email,
        message: `Name: ${this.firstName} ${this.lastName} <br><br><br>
        ${this.message}`,
      };
      this.$http
        .post("https://someMailBackend.com/email", params)
        .then((response) => {
          this.firstName = "";
          this.lastName = "";
          this.message = "";
          this.email = "";
          alert(
            "Thank you for getting in touch with us ! We will process your request as soon as we can !"
          );
          this.$router.push("/");
        })
        .catch((error) =>
          this.errors.push(
            "We were unable to process you request. Please try again later",
            error
          )
        );
    },
  },
};
</script>
