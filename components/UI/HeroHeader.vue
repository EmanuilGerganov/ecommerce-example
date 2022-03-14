<template>
  <header aria-labelledby="heroHeader" class="xl:bg-hero-position bg-cover h-heroBg the-hero">
    <div
      class="grid w-full max-w-lg sm:max-w-4xl lg:max-w-[1570px] md:grid-cols-2 mx-auto px-3 items-center h-full"
    >
      <div class="h-auto grid justify-center space-y-16">
        <h1 id="heroHeader" class="text-4xl font-bold w-full h-auto">Билкови тинктури</h1>
        <div class="text-2xl w-11/12 h-auto">
          Специално подбрана комбинация от билки.<br />
          Чисти билкови екстракти.
        </div>
        <div class="w-full h-auto">
          <nuxt-link
            to="/produkti/"
            class="text-white px-6 py-1.5 rounded-full shadow-lg bg-gradient-to-r from-bilkov-prime to-colors-lightGreen-700"
          >
            <span class="font-bold h-6 w-48">ПОДАРИ СИ ЗДРАВЕ</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
// import { computed, useContext } from '@nuxtjs/composition-api'
// import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
// const breakpoints = useBreakpoints(breakpointsTailwind)
// const sm = breakpoints.smaller('sm')
// const md = breakpoints.between('sm', 'md')
// const lg = breakpoints.between('md', 'lg')
// const ctx = useContext()

// const backgroundStyles = computed(() => {
//   const heroSm = ctx.$img('/hero-small.webp')
//   const heroMd = ctx.$img('/hero-medium.webp')
//   const heroLg = ctx.$img('/hero-large.webp')
//   const heroXl = ctx.$img('/hero-extra-large.webp')

//   let imgUrl = ''
//   if (sm.value) imgUrl = heroSm
//   else if (md.value) imgUrl = heroMd
//   else if (lg.value) imgUrl = heroLg
//   else imgUrl = heroXl

//   return {
//     backgroundImage: `url('${imgUrl}')`,
//   }
// })
</script>
<style>
.the-hero {
  @apply bg-[url('/hero-small.webp')] md:bg-[url('/hero-medium.webp')] 
  lg:bg-[url('/hero-large.webp')]  xl:bg-[url('/hero-extra-large.webp')];
}
</style>

