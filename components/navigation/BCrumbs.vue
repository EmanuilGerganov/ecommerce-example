<template>
  <nav class="text-lg sm:text-base font-semibold uppercase mx-auto">
    <ol class="pl-3 list-none" vocab="https://schema.org/" typeof="BreadcrumbList">
      <li property="itemListElement" class="inline" typeof="ListItem">
        <nuxt-link property="item" typeof="WebPage" to="/">
          <span property="name">Home</span>
        </nuxt-link>
        <meta property="position" content="1" />
      </li>
      <li
        v-for="(page, index) in breadcrumbs"
        :key="page.id"
        class="inline"
        property="itemListElement"
        typeof="ListItem"
      >
        <span>/</span>
        <nuxt-link property="item" typeof="WebPage" :to="`${page.to}`">
          <span property="name">
            {{ page.title }}
          </span>
        </nuxt-link>
        <meta property="position" :content="index + 2" />
      </li>
    </ol>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['breadcrumbs']),
  },
}
</script>
<style>
ol {
  color: #403739;
  font-family: sans-serif;
}
</style>
