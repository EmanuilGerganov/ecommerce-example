<template>
  <div>
    <div
      v-if="!isShown"
      class="relative cursor-pointer"
      data-cy="youtube-image"
      @click="showVideo"
    >
      <img
        class="m-auto"
        loading="lazy"
        width="640"
        height="360"
        src="/ecommerce-example/sddefault.jpg"
        alt="Youtube video example"
        title="Example video title"
      />
      <div class="absolute left-1/2 top-1/2 move animate-pulse">
        <span class="play-button text-6xl text-white text-center">▶</span>
      </div>
    </div>
    <iframe
    class="m-auto"
      v-else
      width="640"
      height="360"
      src="https://www.youtube.com/embed/IUN664s7N-c"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const isShown = ref(false);
    function showVideo() {
      isShown.value = true;
    }
    return { isShown, showVideo };
  },
});
</script>
