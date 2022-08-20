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
        src="ecommerce-example/tea2.jpg"
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
      <!-- <section id="categories" class="py-5 justify-center text-center">
        <h3 class="heading">КАТЕГОРИИ</h3>
        <div class="flex flex-wrap gap-5 justify-center mt-5">
          <CategoryCard
            v-for="category in homeCategories"
            :key="category.curosor"
            :category="category"
            :f-state="$fetchState"
            class="p-5 sm:p-0"
          />
        </div>
        <UIBasicButton link-destination="/kategorii/"> Виж ВСИЧКИ КАТЕГОРИИ </UIBasicButton>
      </section> -->
      <section id="blog" class="py-5 justify-center text-center">
        <h3 class="heading">Latest posts</h3>
        <div
          class="grid gap-7 lg:grid-cols-3 py-4 mt-5 overflow-hidden md:container md:mx-auto text-left"
        >
          <BlogCard
            v-for="article in lastArticles"
            :key="article.slug"
            :article="article"
            type-of-loading="lazy"
            class="flex items-center justify-center"
          />
        </div>
        <UIBasicButton link-destination="/blog/"> ALL ARTICLES </UIBasicButton>
      </section>
      <section id="partners" class="bg-section-blue py-5 w-full">
        <h3 class="heading">Partners</h3>
        <div
          class="flex flex-wrap-reverse justify-center justify-items-center gap-10 md:gap-28"
        >
          <div class="space-y-10 text-center">
            <div class="p-5 lg:p-0 prose prose-lg md:prose-xl text-left">
              Eкипът на herbtinkturi.bg и
              <a class="text-pink-700" href="https://irisolog.bg/">
                Кабинет Ирисова диагностика
              </a>
              разширяват структурата и процеса си на работа, така че да бъдем
              максимално ползотворни в мисията си към здравето на нашите
              пациенти.
            </div>
            <UIBasicButton link-destination="/partniori/">
              СТАНИ НАШ ПАРТНЬОР
            </UIBasicButton>
            <!-- <nuxt-link
              to="/partniori"
              class="mx-auto mt-3 btn bg-white font-bold border-solid border-2 border-herb-prime text-herb-prime hover:text-white hover:bg-herb-prime rounded-full"
            >

            </nuxt-link> -->
            <!-- <nuxt-link
                to="/partniori"
                class="btn flex mx-auto bg-herb-prime hover:bg-herb-hover border-0 font-bold text-white rounded-full"
              >
                СТАНИ НАШ ПАРТНЬОР
              </nuxt-link> -->
          </div>
          <img
            data-cy="partners-image"
            class="mx-auto lg:m-0 grid-row"
            width="640"
            height="414"
            loading="lazy"
            src="ecommerce-example/partniori.webp"
            alt="Parthners"
            title="Партньори"
            sizes="xs:360px md:640px"
          />
        </div>
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

  // async fetch() {
  //   // await this.$store.dispatch('actFetchBestSelling')
  //   // await this.$store.dispatch('actFetchHomeCategories')
  //   const lart = await this.$store.dispatch('actFetchLastArticles')
  //   this.lastArticles = lart
  // },
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
            "Специално подбрана комбинация от билки. Чисти билкови екстракти.",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Билкови тинктури Специално подбрана комбинация от билки. Чисти билкови екстракти.",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Специално подбрана комбинация от билки. Чисти билкови екстракти.",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://herbitinkturi.bg",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      homeCategories: (state) => state.homeCategories,
      lastArticles: (state) => state.lastArticles,
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
    ". categories ."
    ". blog ."
    "partners partners partners"
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
#categories {
  grid-area: categories;
}
#blog {
  grid-area: blog;
}
#partners {
  grid-area: partners;
}
#bulletin {
  grid-area: bulletin;
  background-color: grey;
}
</style>
