<template>
  <div class="main-navigation">
    <div class="z-30 navbar bg-white/70 shadow-md fixed top-0 h-16 lg:h-24 w-screen myBlur">
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
            <nuxt-img
              data-cy="nav-logo"
              format="avif"
              preload
              width="85"
              height="35"
              loading="eager"
              title="ТЕРИС ЛОГО"
              alt="Лого"
              src="/LOGO_TERIS_black_PNG2.webp"
            />
          </nuxt-link>
        </div>
        <ul
          data-cy="menu-lg"
          class="hidden text-xl gap-4 uppercase font-semibold lg:grid navigation"
        >
          <li>
            <nuxt-link to="/" class="li-nuxt-link"> НАЧАЛО </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/produkti/" class="li-nuxt-link"> ПРОДУКТИ </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/kategorii/" class="li-nuxt-link"> КАТЕГОРИИ </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/za-nas/" class="li-nuxt-link"> ЗА НАС </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog/" class="li-nuxt-link"> БЛОГ </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/partniori/" class="li-nuxt-link"> Партньори </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/kontakti/" class="li-nuxt-link"> КОНТАКТИ </nuxt-link>
          </li>
        </ul>
        <div class="flex gap-1">
          <!-- <nuxt-link :to="isLoggedIn ? '/profil/' : '/vpisvane/'" class="nav-icon h-10 w-10">
            <template v-if="isLoggedIn"> {{ isLoggedIn.email.slice(0, 2) }} </template>
            <template v-else>
              <nuxt-picture legacyFormat="webp"
                format="avif"

                loading="eager"
                width="24"
                height="24"
                src="/svg/account-circle.svg"
                title="Влез в профил"
                alt="Профил"
              />
            </template>
          </nuxt-link> -->

          <a
            href="tel:0899919725"
            aria-label="Обади ни се"
            role="button"
            class="nav-icon h-7 w-7 flex items-center justify-center"
          >
            <!-- <PhoneIcon data-cy="nav-phone" /> -->
            <!-- <nuxt-img
            class="nav-icon h-10 w-10"
            @click="$fb.track('Contact', { content_name: 'Обаждане на клиент през менюто' })"
          >
            <nuxt-img
              data-cy="nav-phone"

              preload
              format="webp"
              loading="eager"
              class=""
              alt="Телефон"
              title="Обади ни се"
              width="24"
              height="24"
              src="/svg/phone.svg"
            /> -->
          </a>
          <nuxt-link to="/cart/" class="indicator nav-icon mr-2" aria-label="Виж количка">
            <!-- <ShoppingCart data-cy="nav-cart" /> -->
            <div class="indicator-item bg-bilkov-prime text-white rounded-full">
              <span class="text-sm">{{ totalQuantity || 0 }}</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <LazyNavigationSidebar v-show="activeSidebar" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import PhoneIcon from '~icons/feather/phone-call'
// import ShoppingCart from '~icons/feather/shopping-cart'

export default {
  components: {
    // ShoppingCart,
    // PhoneIcon,
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.user.me,
      activeSidebar: (state) => state.navbar,
      totalQuantity: (state) => state.cart.totalQuantity,
    }),
  },
  // watch: {
  //   totalQuantity(newVal, oldVal) {
  //     if (newVal > 1) {
  //       const discount = 0.05
  //       this.$store.commit('cart/SET_TOTAL_PRICE_DISCOUNT', discount)
  //     } else {
  //       // const discount = 1.05
  //       this.$store.commit('cart/SET_TOTAL_PRICE_DISCOUNT', false)
  //     }
  //   },
  // },
  methods: {
    toggleSidebar(value) {
      this.$store.commit('TOGGLE_NAVBAR', value)
    },
  },
}
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
.indicator-item.bg-bilkov-prime.text-white.rounded-full {
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
