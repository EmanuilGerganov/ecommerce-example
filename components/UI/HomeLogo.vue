<template>
  <nuxt-link to="/" class="my-4">
    <img
      width="125"
      height="150"
      src="/logo-nobg.png"
      title="Our logo"
      alt="Company logo"
      format="webp"
      :loading="loading"
      class="mb-3"
    />
    <span class="spaceing uppercase"> Company slogan</span>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    loading: {
      type: String,
      required: false,
      default: "lazy",
    },
  },
};
</script>
<style>
span.spaceing {
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.1em;
}
</style>
