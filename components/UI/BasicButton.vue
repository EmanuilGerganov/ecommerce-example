<template>
  <nuxt-link
    :to="linkDestination"
    class="mt-3 btn bg-white font-bold border-solid border-2 border-bilkov-prime text-bilkov-prime hover:text-white hover:bg-bilkov-prime rounded-full w-full max-w-xs"
  >
    <span class="font-bold text-lg">
      <slot></slot>
    </span>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    linkDestination: {
      type: String,
      default: '#',
    },
  },
}
</script>
