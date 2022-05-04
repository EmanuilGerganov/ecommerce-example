<template>
  <main id="main">
    <header>
      <h1 class="heading">BLOG HEADING</h1>
    </header>
    <div v-if="$fetchState.pending" class="grid md:grid-cols-2 gap-8">
      <BlogSkeleton v-for="n in 6" :key="n" />
    </div>
    <div v-else class="grid md:grid-cols-2 gap-8">
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
  name: "BlogHomePage",
  async fetch() {
    await this.$store.dispatch("actFetchArticles");
  },
  computed: {
    ...mapState(["articles"]),
  },
};
</script>
