<template>
  <nuxt-link
    :to="linkDestination"
    class="mt-3 btn bg-white font-bold border-solid border-2 border-herb-prime text-herb-prime hover:text-white hover:bg-herb-prime rounded-full w-full max-w-xs"
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
