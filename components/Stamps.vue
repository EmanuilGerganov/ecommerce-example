<template>
  <div
    id="stamps"
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-xl"
  >
    <UIFeatureStamp
      image="/packs2.svg"
      heading="Delivery"
      :w="142"
    >
      Lorem ipsum dolor sit amet
    </UIFeatureStamp>
    <UIFeatureStamp
      image="/service.svg"
      heading="Service"
      :w="110"
    >
      Lorem ipsum dolor
    </UIFeatureStamp>
    <UIFeatureStamp image="/truck.svg" heading="Transport">
      Lorem ipsum dolor sit amet
    </UIFeatureStamp>
    <UIFeatureStamp image="/list.svg" heading="Tasks">
      Lorem ipsum dolor sit
    </UIFeatureStamp>
  </div>
</template>
<script>
export default {
  name: "FeatureStamps",
};
</script>
<style>
#stamps {
  color: #403739;
}
</style>
