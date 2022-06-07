<template>
  <div class="max-w-screen-2xl mx-auto tabs-layout">
    <template v-for="(item, index) in 4">
      <div
        :id="item"
        :key="item"
        class="flex cursor-pointer justify-items-center justify-center items-center space-x-6 py-4"
        :class="index == tabIndex ? 'bg-white activetab -mb-1 z-10' : ''"
        @click="tabIndex = index"
      >
        <component :is="icons[index]" />
        <!-- <InformationOutline/> -->
        <!-- <svg-icon :name="icons[index]" height="40" width="40" /> -->

        <!-- <nuxt-img format="webp" :src="`/svg/${icons[index]}.svg`"></nuxt-img> -->

        <span class="xl:text-xl font-semibold col-span-3">
          {{ tabs[index] }}
        </span>
      </div>
      <div
        v-show="isMobile || tabIndex === index"
        class="mx-auto space-y-10 bg-white tab-content"
      >
        <div class="grid p-3 lg:grid-cols-2 tabcontent">
          <div class="prose order-last sm:order-first py-8 xl:px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem
            odio quibusdam voluptate! Beatae, deserunt veniam. Nam temporibus
            expedita sint, repellendus quasi animi cupiditate, praesentium
            tempora provident, neque eum sequi.
          </div>
          <img
            :src="tabImages[index]"
            width="500"
            height="500"
            class="rounded-2xl my-8 p-8 w-full"
            :title="tabs[index]"
          />
        </div>
      </div>
    </template>

    <!-- <template v-for="n in 4">
      <div
        :id="'tab' + n"
        :key="'tab' + n"
        class="flex cursor-pointer justify-items-center justify-center items-center space-x-6 py-4"
        :class="n == tabIndex ? 'bg-white activetab -mb-1 z-10' : ''"
        @click="tabIndex = n"
      >
        <svg-icon :name="icons[index]" height="40" width="40" />
        <nuxt-img format="webp" :src="`/svg/${icons[index]}.svg`"></nuxt-img>

        <span class="xl:text-xl font-semibold col-span-3">
          {{ tabs[index] }}
        </span>
      </div>
      <div
        v-show="isMobile || tabIndex === index"
        :key="'tabContent' + index"
        class="mx-auto space-y-10 bg-white tab-content"
      >
        <div class="grid p-3 lg:grid-cols-2 tabcontent">
          <div class="prose order-last sm:order-first py-8 xl:px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem
            odio quibusdam voluptate! Beatae, deserunt veniam. Nam temporibus
            expedita sint, repellendus quasi animi cupiditate, praesentium
            tempora provident, neque eum sequi.
          </div>

          <nuxt-picture
            legacy-format="webp"
            loading="eager"
            format="avif"
            width="680"
            height="453"
            sizes="md:454px lg:680px"
            class="rounded-2xl my-8 p-8 w-full"
            :src="`photo${productTabs[index].image.url}`"
            :title="tabs[index]"
            :alt="tabs[index] + ' bilkovitinkturi.bg'"
          />
        </div>
      </div>
    </template> -->
  </div>
</template>
<script setup>
// import { mdiInformationOutline } from '@mdi/js';
// import InformationOutline from "~icons/mdi/information-outline";
import { ref, useStore, computed } from "@nuxtjs/composition-api";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
const store = useStore();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("lg");
const tabs = ["INFO", "HOW TO USE", "INGREDIENTS", "RECOMMENDED FOR"];
const tabIndex = ref(0);
const tabImages = [
  "usage.jpg",
  "how-to.jpg",
  "ingredients.jpg",
  "recommended.jpg",
];
const icons = [
  "InformationOutline",
  "FormatListBulleted",
  "FlowerOutline",
  "ClipboardListOutline",
];
</script>
<script>
import InformationOutline from "~icons/mdi/information-outline";
import FlowerOutline from "~icons/mdi/flower-outline";
import FormatListBulleted  from "~icons/mdi/format-list-bulleted";
import ClipboardListOutline  from "~icons/mdi/clipboard-list-outline";
// import { mdiReceiptTextCheckOutline } from '@mdi/js';
export default {
  components: {
    InformationOutline,
    FlowerOutline,
    FormatListBulleted ,
    ClipboardListOutline
  },
};
</script>
<style>
.activetab {
  margin-bottom: -1px;
  background-color: white;
  border: 1px solid;
  border-color: #8bb2cf;
  border-bottom-color: transparent;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.tabcontent {
  border: 1px solid #8bb2cf;
}

@media (max-width: 949px) {
  .tabs-layout {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
@media (min-width: 950px) {
  .tabs-layout {
    display: grid;
    grid-template-areas:
      "tab1 tab2 tab3 tab4"
      "cont cont cont cont";
    grid-template-columns: repeat(4, 1fr);
    padding: 40px;
  }
}
.tab-content {
  grid-area: cont;
  width: 100%;
}
#tab1 {
  grid-area: tab1;
}
#tab2 {
  grid-area: tab2;
}
#tab3 {
  grid-area: tab3;
}
#tab4 {
  grid-area: tab4;
}
</style>
