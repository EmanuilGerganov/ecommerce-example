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
            src="/ecommerce-example/article-image.jpg"
            class="h-auto"
            :alt="article.title"
          />
        </nuxt-link>
      </div>

      <span>
        {{ articlePublishedDate }}
      </span>

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
};
</script>
