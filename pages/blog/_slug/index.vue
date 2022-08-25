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
  // head() {
  //   if (!this.article) return false
  //   else {
  //     return {
  //       title: title,
  //       meta: [
  //         {
  //           hid: 'title',
  //           name: 'title',
  //           content: title,
  //         },
  //         {
  //           hid: 'og:title',
  //           name: 'og:title',
  //           content: title,
  //         },
  //         {
  //           hid: 'description',
  //           name: 'description',
  //           content: description,
  //         },
  //         {
  //           hid: 'og:description',
  //           name: 'og:description',
  //           content: description,
  //         },
  //         {
  //           hid: 'og:image',
  //           name: 'og:image',
  //           content: ogImageUrl,
  //         },
  //         {
  //           hid: 'og:type',
  //           name: 'og:type',
  //           content: 'article',
  //         },
  //       ],
  //     }
  //   }
  // },
  // computed: {
  //   article() {
  //     const article = this.$store.state.articles.find(
  //       (blogArticle) => blogArticle.slug === this.$route.params.slug
  //     );
  //     return article;
  //   },
  // },
  // jsonld() {
  //   const blogPost = this.article;
  //   return {
  //     "@context": "http://schema.org",
  //     "@graph": [
  //       {
  //         "@type": "BlogPosting",
  //         headline: blogPost.title,
  //         alternativeHeadline: blogPost.description,
  //         image: blogPost.image?.url,
  //         genre:
  //           "билки билкови тинктури хомеопатия билколечение алтернативна медицина",
  //         keywords: "билки здраве билколечение билкови тинктури",
  //         // wordcount: words.length,
  //         publisher: {
  //           "@type": "Organization",
  //           name: "herbitinkturi.bg",
  //           url: "https://herbitinkturi.bg/",
  //         },
  //         author: {
  //           "@type": "Person",
  //           name: "herbitinkturi.bg",
  //           url: "https://herbitinkturi.bg/",
  //         },
  //         url: "https://herbitinkturi.bg/blog/" + blogPost.slug,
  //         datePublished: blogPost.publishedAt,
  //         dateCreated: blogPost.created_at,
  //         dateModified: blogPost.updated_at,
  //         description: blogPost.description,
  //         inLanguage: "bg-Cyrl-Bulgaria",
  //         isFamilyFriendly: true,
  //         copyrightYear: new Date().getFullYear(),
  //         mainEntityOfPage: true,
  //       },
  //     ],
  //   };
  // },
};
</script>
