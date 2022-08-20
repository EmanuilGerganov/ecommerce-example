<template>
  <div class="modal modal-open">
    <div id="theModal" ref="target" class="modal-box max-h-screen p-2">
      <div class="flex justify-end m-1">
        <button
          data-cy="toggle-modal"
          class="btn-sm btn btn-outline btn-circle hover:fill-white"
          @click="() => toggleModal(false)"
        >
          <Close class="w-7 h-7" />
        </button>
      </div>

      <div class="grid items-center text-center pt-2 pb-5 px-5">
        <img
          width="350"
          height="350"
          class="mx-auto"
          :title="product.name"
          src="ecommerce-example/oil.jpg"
          alt="Added to cart product image"
        />
        <span
          data-cy="modal-added-product"
          class="font-bold sm:text-xl lg:text-xl"
          >{{ product.name }}</span
        >
        <div class="bg-green-100 grid items-center p-2 sm:p-10 my-5">
          <div class="flex justify-center items-center">
            <CartPlus class="w-8 h-8" />
          </div>
          <div class="grid grid-rows-2 gap-3 leading-tight sm:text-lg">
            <span data-cy="modal-total-quantity">
              You have {{ totalQuantity }}
              {{ totalQuantity === 1 ? "product" : "products" }} in your cart.
            </span>
            <span data-cy="modal-total-price"
              >Total price
              <span>
                {{
                  totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "EUR",
                  })
                }}
              </span>
            </span>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 gap-5">
          <nuxt-link
            data-cy="addMore"
            to="/products/"
            class="secondary-button"
            @click="() => toggleModal(false)"
          >
            Add more products
          </nuxt-link>
          <nuxt-link
            to="/cart/"
            class="primary-button"
            @click.native="() => toggleModal(false)"
          >
            Go to cart
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Close from "~icons/mdi/close";
import CartPlus from "~icons/mdi/cart-plus";
import { onClickOutside, onKeyStroke } from "@vueuse/core";
import { ref, useStore } from "@nuxtjs/composition-api";

const target = ref(null);
const quantity = ref(1);
const store = useStore();

const toggleModal = () => store.commit("cart/TOGGLE_MODAL", false);

onClickOutside(target, () => toggleModal);
onKeyStroke("Escape", (e) => {
  e.preventDefault();
  toggleModal();
});

const increaseQuantity = () => quantity++;
const decreaseQuantity = () => quantity--;
const totalPrice = store.state.cart.totalPrice;
const totalQuantity = store.state.cart.totalQuantity;
const product = store.state.cart.modalData;
console.log(product, "MODAL");
</script>
