<template>
  <div class="grid px-4 justify-items-center">
    <h1 class="heading">Your cart is empty!</h1>
    <img
      legacy-format="webp"
      format="avif"
      width="172"
      height="172"
      class="mb-10"
      src="/cart.png"
      sizes="lg:172px"
      title="Your cart is empty"
      alt="empty cart"
    />
    <p class="mb-5 text-center">
      Please add at least one product
    </p>

    <nuxt-link
      to="/products/"
      class="sm:text-xl border-0 btn bg-gradient-to-r from-[#a2e238] to-[#5d8023]"
    >
     TAKE A LOOK OF OUR PRODUCTS
    </nuxt-link>
  </div>
</template>
