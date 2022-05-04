<template>
  <div>
    <div
      v-if="!isShown"
      class="relative cursor-pointer"
      data-cy="youtube-image"
      @click="showVideo"
    >
      <img
        loading="lazy"
        width="640"
        height="360"
        src="/sddefault.jpg"
        alt="Youtube video example"
        title="Example video title"
      />
      <div class="absolute left-1/2 top-1/2 move animate-pulse">
        <span class="play-button text-6xl text-white text-center">▶</span>
      </div>
    </div>
    <iframe
      v-else
      width="560"
      height="315"
      src="https://www.youtube.com/embed/IUN664s7N-c"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <!-- <iframe
      v-else
      height="360px"
      class="w-screen"
      src="https://www.youtube.com/embed/SNK7sZ-9xNc?start=1"
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title="Example video title"
    /> -->
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
