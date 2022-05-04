<template>
  <div>
    <content-placeholders :rounded="true" :animate="true">
      <content-placeholders-img style="width: 500px; height: 333px" />
      <content-placeholders-text :lines="1" />
      <content-placeholders-heading></content-placeholders-heading>
      <content-placeholders-text />
    </content-placeholders>
    <div class="bg-bilkov-prime hover:bg-bilkov-cviat-hover p-3 text-white font-medium w-[150px]" />
  </div>
</template>
