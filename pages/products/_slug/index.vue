<template>
  <main>
    <div id="product-page-layout">
      <header id="product">
        <div
          class="grid my-5 mx-auto text-lg font-semibold uppercase sm:text-base md:grid-cols-2 md:items-center md:text-left"
        >
          <template>
            <img
              height="350"
              width="350"
              preload
              class="mx-auto"
              src="/oil.jpg"
              :title="product.title"
              alt="Снимка на продукт"
              loading="eager"
            />
          </template>
          <div class="flex flex-col gap-2 px-10">
            <h1 class="text-2xl font-bold text-black">
              {{ product.title }}
            </h1>
            <UIStarRating v-model="rating" />
            <div class="font-normal text-md">Code: 00000001</div>
            <div class="font-medium text-md">
              Single Price:
              {{
                product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "EUR",
                })
              }}
            </div>
            <div class="text-lg">Quantity</div>
            <div
              class="self-start rounded-[60px] border-[1px] border-solid btn-group border-herb-prime"
            >
              <button
                class="w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-herb-prime hover:text-white hover:bg-herb-hover"
                @click="() => removeCount()"
              >
                -
              </button>
              <div
                class="w-16 h-16 text-black bg-transparent border-0 btn btn-disabled text-xl"
              >
                {{ productCount }}
              </div>
              <button
                class="w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-herb-prime hover:text-white hover:bg-herb-hover"
                @click="() => addCount()"
              >
                +
              </button>
            </div>

            <!-- <div class="text-lg">TOTAL PRICE:{{ priceTotalMessage }}</div> -->
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
      <section id="faq" class="w-full">
        <h2 class="heading">FREQUENTLY ASKED QUESTIONS</h2>
        <!-- Questions and aswers always opened -->

        <!-- <div
          v-for="(item, index) in questions"
          :key="item"
          class="prose prose-sm"
        >
          <h3 class="px-2">
            {{ item }}
          </h3>
          <div class="px-3">{{ item }} {{ answerExample }}</div>
        </div> -->

        <div class="grid gap-5 justify-center py-10">
          <div
            v-for="(item, index) in questions"
            :key="item"
            tabindex="0"
            class="collapse collapse-arrow items-center max-w-5xl border rounded-box border-base-300"
          >
            <div class="text-xl font-semibold collapse-title">
              {{ item }}
            </div>
            <div class="flex-col prose prose-lg collapse-content md:prose-xl">
              {{ answerExample }}
            </div>
          </div>
        </div>
      </section>

      <section id="related" class="my-20">
        <h2 class="uppercase heading">Related products</h2>
        <div class="md:flex flex-row">
          <ProductsCard
            v-for="(n, index) in 3"
            :key="index"
            class="sm:basis-1/3"
            :product="products[index]"
          />
        </div>
      </section>
      <LazyStamps id="stamps" class="w-full bg-section-blue py-5" />
      <!-- <section
        v-if="productTabs && sameCategoryProducts && !$fetchState.pending"
        id="related"
        class="my-20"
      >
        <h2 class="uppercase heading">Related products</h2>
     
      </section> -->
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.product = this.$store.state.products.find(
      (product) => product.slug == this.$route.params.slug
    );
  },
  data: () => ({
    product: {
      title: "",
      price: 0,
    },
    productCount: 1,
    rating: 5,
    questions: [
      "FIRST EXAMPLE QUESTION",
      "SECOND EXAMPLE QUESTION",
      "THIRD EXAMPLE QUESTION",
      "FOURTH EXAMPLE QUESTION",
    ],
    answerExample:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quasi perspiciatis maxime eligendi error corporis aperiam repudiandae ex eveniet, numquam quisquam distinctio nesciunt facilis possimus enim repellendus tempore eaque facere.",
  }),
  methods: {
    addToCart() {
      const product = {
        name: this.product.title,
        price: this.product.price,
        quantity: this.productCount,
      };
      this.$store.commit("cart/ADD_PRODUCT", product);
      this.$store.commit("cart/TOGGLE_MODAL", true);
      this.$store.commit("cart/SET_MODAL_DATA", { ...product });
    },
    removeCount() {
      this.productCount--;
    },
    addCount() {
      this.productCount++;
    },
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
};
</script>

<style scoped>
#product-page-layout {
  display: grid;
  grid-template-areas:
    ". product ."
    "info info info"
    "faq faq faq"
    "stamps stamps stamps"
    "related related related";
  grid-template-columns: 1fr 90% 1fr;
  justify-items: center;
  justify-content: center;
  align-items: center;
}
#product {
  grid-area: product;
}
#info {
  grid-area: info;
}
#faq {
  grid-area: faq;
}
#related {
  grid-area: related;
}
#stamps {
  grid-area: stamps;
}
</style>
