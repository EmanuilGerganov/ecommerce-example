<template>
  <main id="main">
    <div class="product-page-layout">
      <header id="head">
        <div
          class="grid my-5 mx-auto max-w-[1570px] text-lg font-semibold uppercase sm:text-base md:grid-cols-2 md:items-center md:text-left"
        >
          <template v-if="$fetchState.pending">
            <content-placeholders :rounded="true" class="mx-auto w-[350px] h-[350px]">
              <content-placeholders-img />
            </content-placeholders>
          </template>
          <template v-else>
            <img
              height="350"
              width="350"
              preload
              class="mx-auto"
              :src="`images${product.media[0].url.split('https://api.herbitinkturi.bg')[1]}`"
              :title="product.name"
              alt="Снимка на продукт"
              loading="eager"
            />
          </template>
          <div class="flex flex-col gap-2 px-10">
            <h1 class="text-2xl font-bold text-black">
              <template v-if="$fetchState.pending">
                <content-placeholders :rounded="true">
                  <content-placeholders-heading style="width: 350px; height: 50px; margin: auto" />
                </content-placeholders>
              </template>
              <template v-else>
                {{ product.name }}
              </template>
            </h1>
            <UIStarRating v-model="rating" />
            <div class="font-normal text-md">
              Code: {{ $fetchState.pending ? '-------' : product.variants[0].sku }}
            </div>
            <div v-if="gtin" class="font-normal text-md">
              GTIN: {{ $fetchState.pending ? '-------' : gtin }}
            </div>
            <div class="font-medium text-md">
              Единична цена: {{ $fetchState.pending ? '-------' : singlePrice | money }}
            </div>
            <div class="text-lg">Количество</div>
            <div
              class="self-start rounded-[60px] border-[1px] border-solid btn-group border-herb-prime"
            >
              <button
                class="w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-herb-prime hover:text-white hover:bg-herb-hover"
                @click="() => decrementProductCount()"
              >
                -
              </button>
              <div class="w-16 h-16 text-black bg-transparent border-0 btn btn-disabled text-xl">
                {{ productCount }}
              </div>
              <button
                class="w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-herb-prime hover:text-white hover:bg-herb-hover"
                @click="() => incrementProductCount()"
              >
                +
              </button>
            </div>

            <div class="text-lg">ОБЩА ЦЕНА:{{ priceTotalMessage }}</div>
            <button
              data-cy="add"
              class="font-bold text-white rounded-full border-0 btn bg-herb-prime hover:bg-herb-hover"
              @click="() => addToCart(product)"
            >
              <ShoppingCart class="mr-2 w-7 h-7" />
              ADD
            </button>
          </div>
        </div>
      </header>
      <section id="info" class="py-5 w-full bg-section-blue">
        <UIProductTabs />
      </section>
      <section id="stamps">
        <Stamps class="py-5" />
      </section>
      <section v-if="productTabs && productTabs[0]" id="questions" class="w-full bg-section-blue">
        <h2 class="heading">ЧЕСТО ЗАДАВАНИ ВЪПРОСИ</h2>
        <div
          v-for="question in questions"
          :key="question.id + product.name"
          class="prose sm:hidden prose-sm prose-lg"
        >
          <h3 class="px-2">
            {{ question.question }}
          </h3>
          <div class="px-3" v-html="question.answer" />
        </div>

        <div class="grid gap-5 justify-center py-10">
          <div
            v-for="question in questions[1].questions"
            :key="question.id"
            tabindex="0"
            class="hidden items-center max-w-5xl border sm:block collapse rounded-box border-base-300 collapse-arrow"
          >
            <div class="text-xl font-semibold collapse-title">
              {{ question.question }}
            </div>
            <div
              class="flex-col prose prose-lg collapse-content md:prose-xl"
              v-html="question.answer"
            />
          </div>
        </div>
      </section>
      <section
        v-if="productTabs && sameCategoryProducts && !$fetchState.pending"
        id="related"
        class="my-20"
      >
        <h2 class="uppercase heading">Related products</h2>
        <LzyComponent>
          <ProductsCarousel :products="sameCategoryProducts" />
        </LzyComponent>
      </section>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
// import ShoppingCart from '~icons/feather/shopping-cart'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'ProductDetailsPage',
  components: {
    // ShoppingCart, 
  },
  data() {
    return {
      rating: 5,
      productCount: 1,
    }
  },
  async fetch() {
    // има ли продукт, ако няма го фетчваме. 
    await this.$store.dispatch('actFetchCurrentProduct', this.$route.params.slug)
    await this.$store.dispatch(
      'actFetchSameCategoryProducts',
      this.$store.state.currentProduct.collections[0].id
    )
  },
  head() {
    if (!this.product) return
    if (this.product) {
      const description = this.seoDescription
        ? this.replaceAll(this.seoDescription, '"', "'")
        : this.replaceAll(`Продукт ${this.product.name}`, '"', "'")
      const title = this.product.seoTitle
        ? this.replaceAll(this.product.seoTitle, '"', "'")
        : this.replaceAll(this.product.name, '"', "'")

      return {
        title,
        meta: [
          {
            hid: 'og:title',
            name: 'og:title',
            content: title,
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: description,
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: `https://herbitinkturi.bg${this.$route.fullPath}`,
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: this.$img(this.product.media[0].url),
          },
          {
            hid: 'og:price:amount',
            name: 'og:price:amount',
            content: this.singlePrice,
          },
          {
            hid: 'og:price:currency',
            name: 'og:price:currency',
            content: 'BGN',
          },
          {
            hid: 'product:brand',
            name: 'product:brand',
            content: 'Билкови тинктури Терис',
          },
          {
            hid: 'product:availability',
            name: 'product:availability',
            content: 'in stock',
          },
          {
            hid: 'product:condition',
            name: 'product:condition',
            content: 'new',
          },
          {
            hid: 'product:gtin',
            name: 'product:gtin',
            content: this.gtin ? this.gtin : '',
          },
          {
            hid: 'product:price:amount',
            name: 'product:price:amount',
            content: this.singlePrice,
          },
          {
            hid: 'product:price:currency',
            name: 'product:price:currency',
            content: 'BGN',
          },
          {
            hid: 'description',
            name: 'description',
            content: description,
          },
        ],
      }
    }
  },
  computed: {
    ...mapState({
      product: (state) => state.currentProduct,
      sameCategoryProducts: (state) => state.sameCategoryProducts,
      productTabs: (state) => state.productTabs,
    }),
    questions() {
      return this.productTabs[0].details
    },
    // tabs() {
    //   return this.productTabs[0].tabs
    // },
    singlePrice() {
      return this.product.pricing.priceRangeUndiscounted.start.gross.amount
    },
    priceTotalMessage() {
      return this.product
        ? (
            this.product.pricing.priceRangeUndiscounted.start.gross.amount * this.productCount
          ).toLocaleString('bg-BG', {
            style: 'currency',
            currency: 'BGN',
          })
        : '-----'
    },
  },
  methods: {
    async addToCart(product) {
      const item = { ...product }
      await this.$store.dispatch('cart/addProductToCart', {
        product: { node: item },
        quantity: this.productCount,
      })
      const message = {
        product: { price: this.singlePrice, quantity: this.productCount },
        productName: this.product.name,
        productImageUrl: this.product.media[0].url,
        productPrice: this.singlePrice,
        productQuantity: this.productCount,
      }

      this.$store.commit('SET_PRODUCT_ADD_MESSAGE', message)
      this.$store.commit('TOGGLE_MODAL', true)
    },
    incrementProductCount() {
      this.productCount++
    },
    decrementProductCount() {
      if (this.productCount > 1) this.productCount--
    },
  },

  jsonld() {
    // const regexRemoveHtml = /(<([^>]+)>)/gi
    // const productDescription = this.productTabs?.[0]?.tabs[0].body.replace(regexRemoveHtml, '')
    if (!this.product && !this.$store.state.products) {
      return {
        '@context': 'http://schema.org',
        '@graph': [
          // {
          //   "@type": "BreadcrumbList",
          //   itemListElement: items
          // },
          {
            '@type': 'Product',
          },
        ],
      }
    }
    const product = this.product
      ? this.product
      : this.$store.state.products[
          this.$store.state.products.findIndex((prod) => prod.node.slug === this.$route.params.slug)
        ].node

    return {
      '@context': 'http://schema.org',
      '@graph': [
        // {
        //   "@type": "BreadcrumbList",
        //   itemListElement: items
        // },
        {
          '@type': 'Product',
          name: this.replaceAll(product.name, '"', "'"),
          brand: {
            '@type': 'Brand',
            name: 'Терис',
          },
          description: this.replaceAll(product.seoDescription, '"', "'"),
          alternativeHeadline: this.replaceAll(product.description, '"', "'"),
          sku: product?.variants[0].sku,
          productID: product?.variants[0].sku,
          url: this.$route.fullPath,
          gtin13: this.gtin ? this.gtin : '',
          image: product?.media[0].url,
          offers: {
            '@type': 'Offer',
            url: this.$route.fullPath,
            priceCurrency: 'BGN',
            availability: 'http://schema.org/InStock',
            price: product?.pricing.priceRangeUndiscounted.start.gross.amount,
            priceValidUntil: '2022-01-01',
            condition: 'https://schema.org/NewCondition',
          },
          review: {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: 5,
              bestRating: 5,
            },
            author: {
              '@type': 'Person',
              name: 'Irena Hristova',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            ratingCount: '15',
          },
          countryOfOrigin: {
            '@type': 'Country',
            name: 'Bulgaria',
          },
        },
      ],
    }
  },
})
</script>
