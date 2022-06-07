<template>
  <div>
    <a class="skip-link" tabindex="0" href="#main">Към главното съдържание</a>
    <div class="default-layout h-screen">
      <NavigationNavbar class="layout-nav" />
      <div class="layout-main">
        <NavigationBCrumbs
          v-if="$route.path !== '/'"
          class="max-w-[1570px] my-5"
        />
        <Nuxt keep-alive />
        <footer class="layout-footer">
          <FooterNav />

          <div class="bg-bilkov-dark-press text-white">
            <div
              class="flex flex-wrap uppercase text-center py-3 sm:py-4 mx-auto justify-center items-center font-semibold gap-4"
            >
              <nuxt-link to="/pravila-i-usloviya/"
                >HOW TO USE</nuxt-link
              >
              <nuxt-link to="/pravila-za-poveritelnost/"
                >SECURITY</nuxt-link
              >
              <nuxt-link to="/gdpr/">GDPR</nuxt-link>
              <nuxt-link to="/faq/">FAQ</nuxt-link>
            </div>
            <div class="h-12 flex justify-center items-center normal-case">
              ©2022 All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>

      <ReusableModal v-if="isModalOpen" />
    </div>
    <div v-show="false" class="top" @click="scrollToTop">
      <svg
        width="79"
        height="79"
        viewBox="0 0 79 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M53.914 20.107C47.6926 10.3927 41.3807 2.38065 41.3178 2.30072L39.5003 0L37.683 2.30087C37.6201 2.38065 31.3082 10.3927 25.0868 20.1072C16.574 33.3991 12.2578 43.4634 12.2578 50.0206C12.2578 65.9999 24.4787 79 39.5005 79C54.5222 79 66.7431 65.9999 66.7431 50.0206C66.743 43.4634 62.4268 33.3991 53.914 20.107Z"
          fill="#48A500"
        />
        <path
          d="M28 48L30.115 50.115L38.5 41.745V60H41.5V41.745L49.87 50.13L52 48L40 36L28 48Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  components: {
    FooterNav: () => import("~/components/navigation/FooterNav.vue"),
  },
  computed: {
    cartLines() {
      return this.$store.getters.getCartLines;
    },
    imageURL() {
      return this.$img("https://bilkovitinkturi.bg/og-image.jpg");
    },
    isModalOpen() {
      return this.$store.state.modal;
    },
  },
  watch: {
    $route() {
      this.$store.commit("TOGGLE_NAVBAR", false);
    },
  },
  //   mounted() {
  //     const items =
  //       localStorage.getItem("cart") === null
  //         ? "{}"
  //         : localStorage.getItem("cart");
  //     const cartItems = JSON.parse(items);
  //     this.$store.commit("cart/SET_CART", cartItems);
  //   },
  methods: {
    scrollToTop() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>
<style>
.top {
  position: fixed;
  bottom: 20px;
  right: 2px;
  z-index: 99;
  border: none;
  outline: none;
  cursor: pointer;
  scroll-behavior: smooth;
}

.styled::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background-color: #48a500;
  bottom: 0;
  left: calc(50% - 25px);
}

.skip-link {
  background: #319795;
  color: #fff;
  font-weight: 700;
  z-index: 999;
  left: 50%;
  visibility: hidden;
  opacity: 0;
  padding: 20px;
  position: absolute;
  transition: transform 0.3s;
  transform: translateY(-100%);
}

.skip-link:focus,
.skip-link:active,
.skip-link:visited {
  transform: translateY(200%);
  opacity: 1;
  visibility: visible;
}

html {
  font-family: "Montserrat", system-ui, sans-serif;
}

.button-width {
  width: clamp(70%, 80%, 85%);
}
.move {
  transform: translate(-50%, -50%);
}
.play-button {
  text-shadow: 0 0 0.5em black;
}
.TextInput {
  padding-bottom: 18px;
}
.TextInput input {
  position: relative;
  padding-top: 2rem;
}
.TextInput input.has-value,
.TextInput input:focus {
  outline: none;
}
.TextInput input.has-value ~ label,
.TextInput input:focus ~ label {
  font-size: 0.6rem;
  margin-top: 0;
  transition: all 0.2s ease-in-out;
}

.page-enter {
  opacity: 0;
  transform: translateX(10%);
}
.page-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-leave-to {
  opacity: 0;
}
.page-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
iframe {
  max-width: 100%;
}
.default-layout {
  display: grid;
  grid-template-areas:
    "nav"
    "main";
  grid-template-rows: 70px 1fr;
}

/* try to remove media query and use responsive size in template-rows */
@media (min-width: 1024px) {
  .default-layout {
    grid-template-rows: 96px 1fr;
  }
}
a.li-nuxt-link {
  font-family: system-ui;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1em;
  color: #403739;
}

.layout-navbar {
  grid-area: nav;
}
.layout-main {
  grid-area: main;
  overflow-x: visible;
}

#main {
  margin-bottom: 5rem;
  width: 100%;
  max-width: 1570px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.75rem;
}

.primary-button {
  @apply btn btn-block bg-bilkov-prime hover:bg-bilkov-cviat-hover border-0 font-bold text-white rounded-full;
}
.secondary-button {
  @apply btn btn-block bg-white hover:bg-bilkov-prime hover:text-white text-bilkov-prime rounded-full p-3 border-bilkov-prime border-2 border-solid;
}
.slick-slider > .slick-prev::before,
.slick-slider > .slick-next::before {
  @apply text-bilkov-prime text-5xl md:text-6xl;
}
.slick-slider > .slick-next {
  @apply w-[50px] h-[50px] z-10 right-3;
}
.slick-slider > .slick-prev {
  @apply w-[50px] h-[50px] z-10 left-3;
}
.heading {
  @apply text-2xl text-center my-10 styled font-bold pb-4 relative uppercase;
}
.leaf-button {
  @apply flex items-center justify-center justify-items-center mb-5 hover:skew-x-12;
}
.side-nav-links {
  @apply font-bold uppercase flex items-center ml-2 py-2;
}

.sidebar-footer {
  @apply absolute bottom-2 w-11/12 grid grid-flow-col justify-evenly items-center;
}
.li-nuxt-link {
  @apply pb-2 transition-transform duration-300;
}
.li-nuxt-link::after {
  @apply content-[''] block w-0 h-[2px] transition-[width_0.5s] bg-bilkov-prime;
}

.li-nuxt-link:hover::after {
  @apply w-full;
}
li > a.nuxt-link-exact-active {
  @apply text-bilkov-prime;
}

.nav-icons > a.nuxt-link-exact-active {
  @apply bg-bilkov-prime;
}
.nav-icons > a.nuxt-link-exact-active > img {
  @apply invert;
}
.nav-icons > a.nuxt-link-exact-active > div {
  @apply bg-gray-200 text-black;
}
picture img {
  margin: auto;
}
.slick-initialized {
  margin: auto;
}
</style>
