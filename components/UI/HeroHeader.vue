<template>
  <header
    aria-labelledby="heroHeader"
    class="bg-center xl:bg-hero-position bg-cover h-heroBg the-hero"
  >
    <div
      class="grid w-full max-w-lg sm:max-w-4xl lg:max-w-[1570px] md:grid-cols-2 mx-auto px-3 items-center h-full"
    >
      <div class="h-auto grid justify-center space-y-16">
        <h1 id="heroHeader" class="text-4xl font-bold w-full h-auto">
          Main heading
        </h1>
        <div class="text-2xl w-11/12 h-auto">
          Lorem ipsum dolor sit amet consectetur.<br />
          Quisquam eum aliquam.
        </div>
        <div class="w-full h-auto">
          <nuxt-link
            to="/products/"
            class="text-white px-6 py-1.5 rounded-full shadow-lg bg-gradient-to-r from-herb-prime"
          >
            <span class="font-bold h-6 w-48">Call to action</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup></script>
<style>
.the-hero {
  @apply bg-[url('/ecommerce-example/tea.jpg')];
}
</style>
