<template>
  <div class="m-3 text-center">
    <content-placeholders :rounded="true" :animate="true" :centered="true">
      <content-placeholders-img style="width: 300px; height: 300px" />
      <content-placeholders-heading />
      <button
        class="btn mt-5 border-0 peer text-white font-bold bg-bilkov-prime hover:bg-bilkov-cviat-hover rounded-full w-[130px]"
        disabled
      ></button>
    </content-placeholders>
  </div>
</template>
<script>
export default {
  name: 'TheSkeleton',
}
</script>
