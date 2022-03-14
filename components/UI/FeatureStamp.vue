<template>
  <div class="p-2 mx-auto text-center sm:p-10">
    <nuxt-img
      format="webp"
      loading="lazy"
      :width="w"
      height="96"
      class="mx-auto h-24 mb-3"
      :src="image"
      :title="heading"
      alt=""
    />
    <div class="uppercase font-bold mb-2">
      {{ heading }}
    </div>
    <span class="text-lg">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    w: {
      type: Number,
      required: false,
      default: 96,
    },
    heading: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
