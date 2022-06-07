<template>
  <div class="text-black">
    <div class="font-bold text-right">
      ед.цена:
      <span class="inline-block w-16 text-center font-normal">{{ product.price | money }}</span>
    </div>

    <!-- <div
      class="items-center justify-center btn-group border-solid border-[1px] rounded-[60px] border-bilkov-prime flex-nowrap my-2"
    >
      <button
        class="btn text-2xl border-0 bg-transparent rounded-t-[60px] rounded-b-[60px] text-bilkov-prime"
        @click="() => decreaseQuantity(product)"
      >
        -
      </button>
      <div class="btn btn-disabled text-2xl border-0 bg-transparent text-black">
        {{ product.quantity }}
      </div>
      <button
        class="btn border-0 bg-transparent text-bilkov-prime rounded-t-[60px] rounded-b-[60px]"
        @click="() => increaseQuantity(product)"
      >
        +
      </button> -->
    <div class="self-start rounded-[60px] border-[1px] border-solid btn-group border-bilkov-prime">
      <button
        class="w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-bilkov-prime hover:text-white hover:bg-bilkov-cviat-hover"
        @click="() => decreaseQuantity(product)"
      >
        -
      </button>
      <div class="w-16 h-16 text-black bg-transparent border-0 btn btn-disabled text-xl">
        {{ product.quantity }}
      </div>
      <button
        class="w-16 h-16 bg-transparent rounded-[60px] border-0 btn text-bilkov-prime hover:text-white hover:bg-bilkov-cviat-hover"
        @click="() => increaseQuantity(product)"
      >
        +
      </button>
    </div>

    <div class="font-bold text-right">
      общо:
      <span class="inline-block w-16 text-center font-normal">{{
        (product.price * product.quantity) | money
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  methods: {
    increaseQuantity(product) {
      this.$gtm.push({
        event: 'add_to_cart',
        items: [
          {
            id: product.node.sku,
            name: product.title,
            list_name: 'Search Results',
            category: 'Тинктури',
            quantity: 1,
            price: product.node.pricing.priceRangeUndiscounted.start.gross.amount,
          },
        ],
      })
      this.$store.commit('cart/INCREMENT_PRODUCT_QUANTITY', {
        sku: this.product.node.variants[0].sku,
        quantity: 1,
      })
      this.$store.commit('cart/INCREMENT_TOTAL_QUANTITY', 1)
      this.$store.commit('cart/INCREASE_TOTAL_PRICE', this.product.price)

      // this.$store.dispatch('cart/addProductToCart', {
      //   product: this.product
      // })
    },
    decreaseQuantity() {
      this.$gtm.push({
        event: 'remove_from_cart',
        items: [
          {
            id: this.product.node.sku,
            name: this.product.title,
            category: 'Тинктури',
            quantity: 1,
            price: this.product.node.pricing.priceRangeUndiscounted.start.gross.amount,
          },
        ],
      })
      this.$store.dispatch('cart/actDecreaseProductQuantity', this.product.node.variants[0].sku)
    },
  },
}
</script>
