<template>
  <div>
    <div class="flex text-lg sm:text-2xl my-5 sm:my-10 justify-center items-center">
      <input
        ref="input"
        v-model="search"
        class="text-bold border-b-2 border-solid border-colors-green-600"
        type="text"
        placeholder="Find a product"
      />
    </div>
    <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <template v-if="$fetchState.pending">
        <ProductsSkeleton v-for="n in 8" :key="n" />
      </template>
      <template v-else>
        <ProductsCard
          v-for="(product, index) in filteredProductList"
          :key="product.id"
          :product="product"
          :type-of-loading="index > 7 ? 'lazy' : 'eager'"
        />
      </template>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed, useStore } from '@nuxtjs/composition-api'
import { onStartTyping } from '@vueuse/core'

export default defineComponent({
  props: ['$fetchState'],
  setup() {
    const store = useStore()

    const input = ref(null)
    // const {
    //   actions: { toggleSidebar },
    // } = useNavigation()

    const products = computed(() => store.state.products)

    // debouncedWatch(
    //   search,
    //   () => {
    //     query.value = search.value;
    //   },
    //   { debounce: 200 }
    // );

    onStartTyping(() => {
      if (!input.value.active) input.value.focus()
      store.commit('TOGGLE_NAVBAR', false)
    })

    store.commit('SET_BREADCRUMBS', [{ title: 'PRODUCTS', to: '/products/' }])
    return {
      input,
      products,
    }
  },
  data() {
    return {
      search: '',
      query: '',
    }
  },
  computed: {
    filteredProductList() {
      return this.products
        ? this.products.filter((prod) =>
            JSON.stringify(prod).toLowerCase().includes(this.query.toLowerCase())
          )
        : []
    },
    activeSidebar() {
      return this.$store.state.navbar
    },
  },
  watch: {
    search(newValue) {
      this.query = newValue
    },
  },
  methods: {
    toggleSidebar(value) {
      this.$store.commit('TOGGLE_NAVBAR', value)
    },
  },
})
</script>
