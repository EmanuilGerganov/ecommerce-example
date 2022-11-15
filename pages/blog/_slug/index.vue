<template>
  <main id="main" class="lg:max-w-screen-xl mx-auto pt-10 mb-20">
    <template>
      <header>
        <h1 class="heading">
          {{ article.title }}
        </h1>
      </header>
      <article class="p-5 m-auto prose sm:prose-lg max-w-screen-xl text-left">
        <div v-for="i in 5" class="" v-html="createHeadingTags(i + 1)" />
      </article>
    </template>
  </main>
</template>

<script>
export default {
  async fetch() {
    this.article = this.$store.state.articles.find(
      (blogArticle) => blogArticle.slug === this.$route.params.slug
    );
  },
  data: () => ({
    article: {
      title: "",
      description: "",
    },
  }),
  methods: {
    createHeadingTags(index) {
      const heading = `<h${index} class="text-center">Heading for article Number ${index}</h${index}>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eum
          quidem explicabimgo beatae, dolorem deserunt rem laboriosam voluptas
          excepturi voluptatem libero? Molestiae ipsam temporibus doloribus.
          Expedita ullam quidem consequatur suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eum
          quidem explicabimgo beatae, dolorem deserunt rem laboriosam voluptas
          excepturi voluptatem libero? Molestiae ipsam temporibus doloribus.
          Expedita ullam quidem consequatur suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eum
          quidem explicabimgo beatae, dolorem deserunt rem laboriosam voluptas
          excepturi voluptatem libero? Molestiae ipsam temporibus doloribus.
          Expedita ullam quidem consequatur suscipit.</p>
        <img height="900" width="1200" src="/ecommerce-example/blog${index}.jpg" alt="" />`;

      return heading;
    },
  },
  head() {
    if (!this.article) return false;
    else {
      return {
        title: this.article.title,
        meta: [
          {
            hid: "title",
            name: "title",
            content: this.article.title,
          },
          {
            hid: "og:title",
            name: "og:title",
            content: this.article.title,
          },
          {
            hid: "description",
            name: "description",
            content: this.article.description,
          },
          {
            hid: "og:description",
            name: "og:description",
            content: this.article.description,
          },
          {
            hid: "og:type",
            name: "og:type",
            content: "article",
          },
        ],
      };
    }
  },
};
</script>
