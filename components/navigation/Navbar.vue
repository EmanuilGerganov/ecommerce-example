<template>
  <div class="main-navigation">
    <div
      class="z-30 navbar bg-white/70 shadow-md fixed top-0 h-16 lg:h-24 w-screen myBlur"
    >
      <div
        class="px-3 flex justify-between items-center lg:max-w-[1570px] w-full mx-auto whitespace-nowrap"
      >
        <div class="flex flex-row items-center justify-center gap-1">
          <button
            data-cy="hamburger-menu"
            class="lg:hidden nav-icon h-10 w-10 flex items-center justify-center"
            aria-label="Open Menu"
            @click="toggleSidebar(!activeSidebar)"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              font-size="16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              />
            </svg>
          </button>
          <nuxt-link to="/" class="my-2">
            <img
              data-cy="nav-logo"
              width="105"
              height="35"
              loading="eager"
              title="Company Logo"
              alt="Logo"
              src="/ecommerce-example/company-logo.png"
            />
          </nuxt-link>
        </div>
        <ul
          data-cy="menu-lg"
          class="hidden text-xl gap-4 uppercase font-semibold lg:grid navigation"
        >
          <li>
            <nuxt-link to="/" class="li-nuxt-link"> HOME </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/products/" class="li-nuxt-link">
              PRODUCTS
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about/" class="li-nuxt-link"> ABOUT </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog/" class="li-nuxt-link"> BLOG </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contacts/" class="li-nuxt-link">
              CONTACTS
            </nuxt-link>
          </li>
        </ul>
        <div class="flex gap-1">
          <a
            href="tel:0888777999"
            aria-label="Call us"
            role="button"
            class="nav-icon h-7 w-7 flex items-center justify-center"
          >
            <PhoneOutline />
          </a>
          <nuxt-link
            to="/cart/"
            class="indicator nav-icon mr-2"
            aria-label="View cart"
          >
            <CartOutline />
            <div class="indicator-item bg-herb-prime text-white rounded-full">
              <span class="text-sm">{{ totalQuantity }}</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <LazyNavigationSidebar v-show="activeSidebar" />
  </div>
</template>

<script>
import PhoneOutline from "~icons/mdi/phone-outline";
import CartOutline from "~icons/mdi/cart-outline";
import { mapState } from "vuex";

export default {
  components: {
    PhoneOutline,
    CartOutline,
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.user.me,
      activeSidebar: (state) => state.navbar,
      totalQuantity: (state) => state.cart.totalQuantity,
    }),
  },
  methods: {
    toggleSidebar(value) {
      this.$store.commit("TOGGLE_NAVBAR", value);
    },
  },
};
</script>
<style>
.navigation {
  grid-template-columns: auto auto auto auto auto auto auto;
  gap: 1rem;
}

.myBlur {
  backdrop-filter: blur(16px);
}

.nav-icon {
  @apply bg-gray-200 p-2 hover:bg-gray-400 rounded-full h-10 w-10 items-center justify-center;
}
.nav-icon > i {
  @apply text-black;
}
.nav-icon:focus i {
  @apply text-white;
}
.indicator-item.bg-herb-prime.text-white.rounded-full {
  border: 1px solid #408000;
  top: 5px;
  width: 22px;
  background-color: #ffffff;
  color: #1f2937;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-family: sans-serif;
  font-size: 0.5rem;
}
</style>
