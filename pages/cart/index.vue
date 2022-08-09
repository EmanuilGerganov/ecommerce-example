<template>
  <main id="main" class="lg:max-w-screen-xl mx-auto min-h-screen">
    <!-- <NavigationBreadcrumbs :title="this.$route.name" /> -->
    <EmptyCart v-if="cartIsEmpty" class="p-3" />
    <Items v-else class="p-3" />
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CardPage',
  components: {
    EmptyCart: () => import('~/components/cart/EmptyCart.vue'),
    Items: () => import('~/components/cart/CartItems.vue'),
  },
  computed: {
    ...mapState({
      items: (state) => state.cart.items,
    }),
    cartIsEmpty() {
      return (
        this.$store.state.cart.items === undefined ||
        !Object.keys(this.$store.state?.cart?.items).length
      )
    },
  },
  created() {
    this.$store.commit('SET_BREADCRUMBS', [{ title: 'КОЛИЧКА', to: '/cart/' }])
  },
}
</script>
