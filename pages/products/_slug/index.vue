<template>
  <main id="main">
    {{ product }}
    <div class="product-page-layout">
      <header id="head">
        <div
          class="grid my-5 mx-auto max-w-[1570px] text-lg font-semibold uppercase sm:text-base md:grid-cols-2 md:items-center md:text-left"
        >
          <template v-if="$fetchState.pending">
            <content-placeholders
              :rounded="true"
              class="mx-auto w-[350px] h-[350px]"
            >
              <content-placeholders-img />
            </content-placeholders>
          </template>
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
              <template v-if="$fetchState.pending">
                <content-placeholders :rounded="true">
                  <content-placeholders-heading
                    style="width: 350px; height: 50px; margin: auto"
                  />
                </content-placeholders>
              </template>
              <template v-else>
                {{ product.title }}
              </template>
            </h1>
            <UIStarRating v-model="rating" />
            <div class="font-normal text-md">
              Code: 00000001
            </div>
            <div class="font-medium text-md">
              Single Price:
              {{
                $fetchState.pending
                  ? "-------"
                  : product.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "EUR",
                    })
              }}
            </div>
            <div class="text-lg">Quantity</div>
            <div
              class="self-start rounded-[60px] border-[1px] border-solid btn-group border-bilkov-prime"
            >
              <button
                class="w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-bilkov-prime hover:text-white hover:bg-bilkov-cviat-hover"
                @click="() => decrementProductCount()"
              >
                -
              </button>
              <div
                class="w-16 h-16 text-black bg-transparent border-0 btn btn-disabled text-xl"
              >
                {{ productCount }}
              </div>
              <button
                class="w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-bilkov-prime hover:text-white hover:bg-bilkov-cviat-hover"
                @click="() => incrementProductCount()"
              >
                +
              </button>
            </div>

            <div class="text-lg">TOTAL PRICE:{{ priceTotalMessage }}</div>
            <button
              data-cy="add"
              class="font-bold text-white rounded-full border-0 btn bg-bilkov-prime hover:bg-bilkov-cviat-hover"
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
      <section
        v-if="productTabs && productTabs[0]"
        id="questions"
        class="w-full bg-section-blue"
      >
        <h2 class="heading">FREQUENTLY ASKED QUESTIONS</h2>
        <div
          v-for="question in questions"
          :key="question.id + product.title"
          class="prose sm:hidden prose-sm"
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
      <!-- <section
        v-if="productTabs && sameCategoryProducts && !$fetchState.pending"
        id="related"
        class="my-20"
      >
        <h2 class="uppercase heading">Related products</h2>
        <LzyComponent>
          <ProductsCarousel :products="sameCategoryProducts" />
        </LzyComponent>
      </section> -->
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    productCount: 1,
    rating: 5,
  }),
  async fetch() {
    await this.$store.dispatch("actFetchProducts");
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    product() {
      return this.products.find(
        (product) => product.slug == this.$route.params.slug
      );
    },
    questions() {
      return "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quasi perspiciatis maxime eligendi error corporis aperiam repudiandae ex eveniet, numquam quisquam distinctio nesciunt facilis possimus enim repellendus tempore eaque facere.";
    },
  },
};
</script>
