<template>
  <div>
    <!-- CATEGORY PRODUCTS GRID -->
    <div
      v-for="product in items"
      :key="product.id"
      class="my-2 py-2 flex-row gap-2 border-solid border-0 shadow-md flex justify-around items-center flex-wrap"
    >
      <nuxt-link :to="`/products/${product.slug}/`" class="w-[100px] h-[100px]">
        <img
          loading="lazy"
          src="ecommerce-example/oil.jpg"
          :alt="product.title + ' example.com'"
        />
      </nuxt-link>
      <h1 class="font-bold max-w-40 text-left px-8">
        {{ product.title }}
      </h1>
      <button
        class="text-2xl font-bold rounded-[60px] border-[1px] border-solid btn-group border-herb-prime"
      >
        <button
          class="w-16 h-16 rounded-[60px] hover:text-white hover:bg-herb-hover"
          @click="() => decreaseQuantity(product)"
        >
          -
        </button>
        <div class="w-16 h-16 leading-[64px]">
          {{ product.quantity }}
        </div>
        <button
          class="w-16 h-16 rounded-[60px] hover:text-white hover:bg-herb-hover"
          @click="() => increaseQuantity(product)"
        >
          +
        </button>
      </button>
      <div class="font-bold text-right flex-grow sm:flex-grow-0">
        single price:
        <span class="inline-block w-16 text-center font-normal">{{
          product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "EUR",
          })
        }}</span>
      </div>
      <div class="font-bold text-right flex-grow sm:flex-grow-0">
        total:
        <span class="inline-block w-16 text-center font-normal">{{
          (product.price * product.quantity).toLocaleString("en-US", {
            style: "currency",
            currency: "EUR",
          })
        }}</span>
      </div>
      <button @click="removeProduct(product)">
        <Close />
      </button>
    </div>

    <div class="grid border-t border-green-500 sm:justify-items-center my-5">
      <div
        class="grid grid-cols-2 md:space-x-5 sm:grid-cols-4 text-lg sm:text-2xl my-5"
      >
        <div>Quantity total:</div>
        <div class="font-bold text-center">
          {{ totalQuantity }}
        </div>
        <div>Price total:</div>
        <div class="font-bold text-center">
          <div>
            {{ totalPrice }}
          </div>
        </div>
      </div>
    </div>
    <div class="grid gap-2 sm:grid-cols-2 my-5">
      <nuxt-link
        to="/products/"
        class="btn-outline btn font-bold border-solid border-2 border-herb-prime text-herb-prime hover:text-white hover:bg-herb-prime rounded-full"
      >
        ADD MORE PRODUCTS
      </nuxt-link>

      <nuxt-link
        to="/cart/checkout/"
        class="order-first sm:order-last font-bold btn border-0 rounded-full text-white bg-herb-prime hover:bg-herb-hover"
        @click.native="initiateCheckout"
      >
        Checkout
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Close from "~icons/mdi/close";
import { mapState } from "vuex";
export default {
  components: { Close },
  data() {
    return {
      inviteVisible: false,
    };
  },
  methods: {
    removeProduct(product) {
      console.log(product);
      this.$store.commit("cart/REMOVE_PRODUCT", product);
    },
    increaseQuantity(product) {
      const prod = {
        ...product,
        quantity: 1,
      };
      this.$store.commit("cart/ADD_PRODUCT", prod);
    },
    decreaseQuantity(product) {
      this.$store.commit("cart/DECREASE_QUANTITY", product);
    },
  },
  computed: {
    ...mapState({
      items: (state) => state.cart.items,
      totalPrice: (state) =>
        state.cart.totalPrice.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      totalQuantity: (state) => state.cart.totalQuantity,
    }),
    // cartItems() {
    //   return Object.values({ ...this.cartItemsRaw });
    // },
  },
};
</script>
