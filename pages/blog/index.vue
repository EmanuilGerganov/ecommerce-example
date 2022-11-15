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
  head: {
    title:
      "Blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea —  example.com",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea, asperiores rerum eveniet quisquam aliquam deserunt vitae totam vel odio quas, doloremque nemo commodi!",
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Lorem ipsum dolor sit amet Blog — example.com",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea, asperiores rerum eveniet quisquam aliquam deserunt vitae totam vel",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://example.com/blog",
      },
    ],
  },
};
</script>
