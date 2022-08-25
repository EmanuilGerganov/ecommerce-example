<template>
  <main id="main">
    <header>
      <h1 class="heading">BLOG HEADING</h1>
    </header>
    <div class="grid md:grid-cols-2 gap-8">
      <BlogCard
        v-for="(article, index) in articles"
        :key="article.id"
        :article="article"
        :type-of-loading="index > 1 ? 'lazy' : 'eager'"
      />
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["articles"]),
  },
};
</script>
