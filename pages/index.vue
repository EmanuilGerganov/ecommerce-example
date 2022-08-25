<template>
  <div>
    <UIHeroHeader />
    <section
      id="about"
      class="py-5 mx-auto max-w-lg sm:max-w-4xl lg:max-w-[1570px] grid gap-5 md:grid-cols-2 items-center px-3 text-center"
    >
      <img
        width="650"
        height="400"
        loading="eager"
        src="/ecommerce-example/tea2.jpg"
        alt="Билкови тинктури Терис"
        class="mx-auto mt-12"
        title="Билкови тинктури - подари си здраве"
      />
      <div class="order-first items-center lg:order-last min-h-[540px] text-lg">
        <div class="text-left">
          <h2
            class="text-2xl text-center my-10 font-bold styled pb-4 relative uppercase heading text-herb-prime"
          >
            100% HEADING TITLE TWO
          </h2>
          <p class="p-1 mb-6">
            <span class="font-bold text-herb-prime">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            Tempora, omnis ratione in laudantium maxime ipsum, facilis
            blanditiis quod laboriosam labore aut! Voluptatem ea similique
            molestias voluptas consectetur cumque optio nisi.
          </p>
          <p class="p-1 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="font-bold text-herb-prime"
              >Tempora, omnis ratione in laudantium maxime ipsum,</span
            >
            facilis blanditiis quod laboriosam labore aut! Voluptatem ea
            similique molestias voluptas consectetur cumque optio nisi.
          </p>
          <p class="p-1 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            omnis ratione in laudantium maxime ipsum, facilis blanditiis quod
            laboriosam labore aut!
            <span class="font-bold text-herb-prime"
              >Voluptatem ea similique molestias voluptas consectetur cumque
              optio nisi.</span
            >
          </p>
        </div>
        <UIBasicButton link-destination="/about/"> Learn more </UIBasicButton>
      </div>
    </section>

    <div id="content">
      <section
        v-if="products"
        id="products"
        class="space-y-5 sm:space-y-10 py-5 text-center"
      >
        <h3 class="heading">BEST SELLING PRODUCTS</h3>
        <div class="text-center grid lg:grid-cols-3 gap-5 justify-center">
          <LazyProductsCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            type-of-loading="lazy"
          />
        </div>
        <UIBasicButton link-destination="/products/">
          All Products
        </UIBasicButton>
      </section>
      <LazyStamps id="stamps" class="w-full bg-section-blue py-5" />
      <section id="video" class="py-5">
        <h3 class="heading">
          HEADING THREE<br />
          Example lazy youtube video component.
        </h3>
        <YoutubeVideo class="mx-auto w-full" />
      </section>
      <section id="blog" class="py-5 justify-center text-center">
        <h3 class="heading">Latest posts</h3>
        <div
          class="grid gap-7 lg:grid-cols-3 py-4 mt-5 overflow-hidden md:container md:mx-auto text-left"
        >
          <BlogCard
            v-for="article in articles"
            :key="article.slug"
            :article="article"
            type-of-loading="lazy"
            class="flex items-center justify-center"
          />
        </div>
        <UIBasicButton link-destination="/blog/"> ALL ARTICLES </UIBasicButton>
      </section>
      <LazyEmailBulletin id="bulletin" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "HomePage",

  components: {
    // BlogCard: () => import('~/components/BlogCard.vue'),
    // CategoryCard: () => import('~/components/CategoryCard.vue'),
    // YoutubeVideo: () => import('~/components/YoutubeVideo.vue'),
    // EmailBulletin: () => import('~/components/EmailBulletin.vue'),
  },
  head() {
    return {
      link: [
        {
          rel: "preload",
          as: "image",
          href: "/hero-large.webp",
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur corporis modi nemo commodi possimus rem voluptatem?",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur corporis modi nemo commodi possimus rem voluptatem?",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://www.ecommerce-example.com",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles.slice(-3),
      products: (state) => state.products.slice(-3),
    }),
  },
  // backgroundStyles() {
  //   const heroSm = this.$img('/hero-small.webp')
  //   const heroMd = this.$img('/hero-medium.webp')
  //   const heroLg = this.$img('/hero-large.webp')
  //   const heroXl = this.$img('/hero-extra-large.webp')

  //   let imgUrl = ''
  //   if (this.sm) imgUrl = heroSm
  //   else if (this.md) imgUrl = heroMd
  //   else if (this.lg) imgUrl = heroLg
  //   else imgUrl = heroXl

  //   return {
  //     backgroundImage: `url('${imgUrl}')`,
  //   }
  // },
};
</script>

<style scoped>
#content {
  display: grid;
  grid-template-areas:
    "about about about"
    ". products ."
    "stamps stamps stamps"
    "video video video"
    ". blog ."
    "bulletin bulletin bulletin";
  grid-template-columns: 1fr 90% 1fr;
  justify-items: center;
  justify-content: center;
  align-items: center;
}
#about {
  grid-area: about;
}
#products {
  grid-area: products;
}
#stamps {
  grid-area: stamps;
}
#video {
  grid-area: video;
}
#blog {
  grid-area: blog;
}
#bulletin {
  grid-area: bulletin;
  background-color: grey;
}
</style>
