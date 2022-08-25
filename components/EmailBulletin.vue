<template>
  <section class="bg-cover" :style="sectionBackground">
    <div
      class="grid md:grid-cols-2 items-center text-center gap-3 bg-[#2c4405] bg-opacity-60 bg-cover py-5 sm:p-10 md:p-5 h-full"
    >
      <div class="grid gap-5 p-3 2xl:w-1/2 justify-self-end">
        <h3 class="text-2xl font-semibold text-white">
          SUBSCRIBE TO OUR EMAIL BULLETIN!
        </h3>
        <span class="text-lg text-white"
          >Find out more about our products and services. Get in touch with us
          and learn the latest information that we provide!
        </span>
        <span class="text-white font-semibold text-xl hidden sm:block"
          >CALL TO ACTION!</span
        >
      </div>
      <div class="form-control px-5 2xl:w-1/2">
        <div class="relative">
          <input
            type="text"
            placeholder="Email"
            class="w-full rounded-full pr-16 input border-bilkov-prime input-bordered"
          />
          <button
            class="absolute top-0 right-0 btn bg-transparent rounded-full border-0"
            title="Send email"
          >
          <Send class="fill-current text-herb-prime"></Send>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Send from "~icons/mdi/send";
export default {
  components: {
    Send,
  },
  computed: {
    // sectionBackground() {
    //   const imgUrl = this.$img('/footer-optimized.webp', { width: '100%' })
    //   return {
    //     backgroundImage: `url('${imgUrl}')`,
    //   }
    // },
  },
};
</script>
