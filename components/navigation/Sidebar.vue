<template>
  <!-- SIDEBAR -->
  <div>
    <div class="z-10 fixed inset-0" @keydown.esc="() => close(false)">
      <!-- background opacity div, close menu when clicked -->
      <div class="absolute inset-0 bg-black opacity-1" tabindex="0" @click="() => close(false)" />
    </div>
    <aside
      data-cy="mobile-menu"
      class="transform top-0 left-0 bg-white fixed h-full overflow-auto ease-in-out z-30 -translate-x-100% min-w-[70%] max-w-80%"
    >
      <UIHomeLogo size="small" loading="eager" class="flex flex-col items-center mb-10" />
      <UIHeaderLink icon="home" to="/"> Начало </UIHeaderLink>
      <UIHeaderLink icon="view-grid" to="/produkti/"> Продукти </UIHeaderLink>
      <UIHeaderLink icon="account-group" to="/za-nas/"> За нас </UIHeaderLink>
      <UIHeaderLink icon="book-open-page-variant" to="/blog/"> Блог </UIHeaderLink>
      <UIHeaderLink icon="hand-heart" to="/partniori/"> Партньори </UIHeaderLink>
      <UIHeaderLink icon="contacts" to="/kontakti/"> Контакти </UIHeaderLink>
    </aside>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TheSidebar',
  methods: {
    close() {
      this.$store.commit('TOGGLE_NAVBAR', false)
    },
  },
})
</script>
