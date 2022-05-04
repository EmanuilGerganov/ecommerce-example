<template>
  <div data-cy="product" class="mt-5 text-center">
    <nuxt-link :to="`/products/${product.slug}/`">
      <img
        :loading="typeOfLoading"
        height="350"
        width="350"
        class="mx-auto h-[20rem] w-[20rem] duration-700 transform hover:scale-110"
        :title="product.title"
        src="/oil.jpg"
        :alt="product.title + ' example.com'"
      />
    </nuxt-link>
    <div data-cy="product-card-info" class="mt-3 mx-auto">
      <div data-cy="product-card-name" class="md:line-clamp-1 font-bold text-xl mb-2 uppercase">
        {{ product.title }}
      </div>
      <span data-cy="product-card-price" class="text-lg">
        {{ product.price.toLocaleString('en-US', {style: 'currency', currency: 'EUR'}) }}
      </span>
    </div>

    <button
      @click="() => addToCart(product)"
      class="btn mt-5 border-0 peer text-white font-bold bg-bilkov-prime hover:bg-bilkov-cviat-hover rounded-full"
    >
      <CartOutline class="mr-2" />
      ADD
    </button>
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
import CartOutline from "~icons/mdi/cart-outline";

export default defineComponent({
  name: "ProductCard",
  components: {
    CartOutline,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
    typeOfLoading: {
      type: String,
      required: false,
      default: "lazy",
    },
  },
  //   methods: {
  //     async addToCart(product) {
  //       const item = { ...product };
  //       await this.$store.dispatch("cart/addProductToCart", { product: item });
  //       const message = {
  //         product: product,
  //         productName: product.node.name,
  //         productImageUrl: product.node.media[0].url,
  //         productPrice:
  //           product.node.pricing.priceRangeUndiscounted.start.gross.amount,
  //         productQuantity: 1,
  //       };
  //       this.$store.commit("SET_PRODUCT_ADD_MESSAGE", message);
  //       this.$store.commit("TOGGLE_MODAL", true);
  //     },
  //   },
});
</script>
