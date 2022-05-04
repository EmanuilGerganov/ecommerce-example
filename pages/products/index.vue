<template>
  <main id="main">
    <header>
      <h1 class="heading">PRODUCTS HEADING</h1>
    </header>
    <UIProductsView :$fetch-state="$fetchState" />
  </main>
</template>
<script defer async>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProduktiSlug',
  data() {
    return {
      search: '',
    }
  },
  async fetch() {
    await this.$store.dispatch('actFetchProducts')
  },
  head: {
    title: '【 Онлайн магазини за билкови тинктури 】 — bilkovitinkturi.bg | Билкови тинктури',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '☛ Разнообразие от【 билкови тинктури 】✔ 100% гаранция за качество и произход ✔ 100% натуралени продукти ❰❰ bilkovitinkturi.bg ❱❱ Поръчай сега на ☎ 0899919725 ',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '【 Онлайн магазини за билкови тинктури 】 — bilkovitinkturi.bg',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          ' ☛ Разнообразие от【 билкови тинктури 】✔ 100% гаранция за качество и произход ✔ 100% натуралени продукти ❰❰ bilkovitinkturi.bg ❱❱ Поръчай сега на ☎ 0899919725',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://bilkovitinkturi.bg/produkti',
      },
    ],
  },
})
</script>
