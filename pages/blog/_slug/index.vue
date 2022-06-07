<template>
  <main id="main" class="lg:max-w-screen-xl mx-auto pt-10 mb-20">
    <template v-if="$fetchState.pending">
      <header>
        <h1 class="heading">
          <content-placeholders :rounded="true">
            <h1><content-placeholders-heading style="height: 48px" /></h1>
          </content-placeholders>
        </h1>
      </header>
      <content-placeholders :rounded="true">
        <content-placeholders-text :lines="20" />
        <content-placeholders-img />
        <content-placeholders-text :lines="20" />
        <content-placeholders-img />
        <content-placeholders-text :lines="20" />
      </content-placeholders>
    </template>
    <template v-else-if="$fetchState.error">
      <h1>Post #{{ $route.params.slug }} not found</h1>
    </template>
    <template v-else>
      <header>
        <h1 class="heading">
          {{ article.title }}
        </h1>
      </header>
      <article class="p-2 prose max-w-none text-left" v-html="articleContent" />
    </template>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BlogArticle',
  async fetch() {
    await this.$store.dispatch('actFetchCurrentArticle', this.$route.params.slug)
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
  computed: {
    ...mapState({ article: 'currentArticle' }),
  },
  jsonld() {
    const blogPost = this.article
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: blogPost.title,
          alternativeHeadline: blogPost.description,
          image: blogPost.image?.url,
          genre: 'билки билкови тинктури хомеопатия билколечение алтернативна медицина',
          keywords: 'билки здраве билколечение билкови тинктури',
          // wordcount: words.length,
          publisher: {
            '@type': 'Organization',
            name: 'bilkovitinkturi.bg',
            url: 'https://bilkovitinkturi.bg/',
          },
          author: {
            '@type': 'Person',
            name: 'bilkovitinkturi.bg',
            url: 'https://bilkovitinkturi.bg/',
          },
          url: 'https://bilkovitinkturi.bg/blog/' + blogPost.slug,
          datePublished: blogPost.publishedAt,
          dateCreated: blogPost.created_at,
          dateModified: blogPost.updated_at,
          description: blogPost.description,
          inLanguage: 'bg-Cyrl-Bulgaria',
          isFamilyFriendly: true,
          copyrightYear: new Date().getFullYear(),
          mainEntityOfPage: true,
        },
      ],
    }
  },
}
</script>
