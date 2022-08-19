<template>
  <article data-cy="article" class="mx-auto w-4/5">
    <div class="">
      <div class="mb-3">
        <nuxt-link :to="`/blog/${article.slug}/`">
          <img
            width="500"
            height="333"
            :loading="typeOfLoading"
            :title="article.title"
            src="/article-image.jpg"
            class="h-auto"
            :alt="article.title"
          />
        </nuxt-link>
      </div>

      <span>
        <!-- <Calendar class="inline-block" /> -->
        <!-- <svg-icon class="inline-block" name="calendar-month" width="24px" height="24px" /> -->
        <!-- <time> -->
        {{ articlePublishedDate }}
        <!-- </time> -->
      </span>
      <!-- <span class="float-right">
        <svg-icon class="inline-block" name="clipboard-text-multiple" width="24px" height="24px" />
        <time datetime="">{{ time }} минути</time>
      </span> -->

      <h2
        class="line-clamp-1 text-xl sm:text-xl hover:text-indigo-600 transition duration-200 font-bold text-gray-900 mt-3"
      >
        {{ article.title }}
      </h2>
      <div class="text-gray-700 my-5 line-clamp-3">
        {{ article.description }}
      </div>
      <nuxt-link
        data-cy="read-more"
        :to="`/blog/${article.slug}/`"
        class="bg-herb-prime hover:bg-herb-hover p-3 text-white font-medium"
      >
        Read more
      </nuxt-link>
    </div>
  </article>
</template>

<script>
// import Calendar from '~icons/iconoir/calendar'
export default {
  components: {
    // Calendar,
  },
  props: {
    article: {
      type: Object,
      required: true,
      default: undefined,
    },
    typeOfLoading: {
      type: String,
      required: false,
      default: "lazy",
    },
  },
   // computed: {
  // articlePublishedDate() {
  //   if (!this.article.publish_at) return ''
  //   return this.article.publish_at.slice(0, 10)
  // },
  // src() {
  //   let src = ''
  //   if (this.article.image.formats.small?.url) {
  //     src = this.$config.apiURL + this.article.image.formats.small.url
  //   } else {
  //     src = this.$config.apiURL + this.article.image.url
  //   }
  //   return src
  // },
  // },
  // created() {
  //   const regex = /(<([^>]+)>)/gi
  //   const wordPerMinute = 225
  //   const words = this.article.content.trim().replace(regex, '').split(/\s+/).length
  //   this.time = Math.ceil(words / wordPerMinute)
  // },
};
</script>
