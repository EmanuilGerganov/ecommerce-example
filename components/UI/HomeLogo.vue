<template>
  <nuxt-link to="/" class="my-4">
    <nuxt-img
      width="85"
      height="35"
      src="/LOGO_TERIS_black_LOGO-no-bg.png"
      title="Терис лого"
      alt="Лого"
      format="webp"
      :loading="loading"
      class="mb-3"
    />
    <span class="spaceing uppercase">билкови тинктури</span>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    loading: {
      type: String,
      required: false,
      default: 'lazy',
    },
  },
}
</script>
<style>
span.spaceing {
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.1em;
}
</style>
