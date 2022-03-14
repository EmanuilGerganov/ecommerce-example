<template>
  <div v-if="productTabs" class="max-w-screen-2xl mx-auto tabs-layout">
    <template v-for="(tab, index) in productTabs">
      <div
        :id="'tab' + (index + 1)"
        :key="'tab' + (index + Math.random())"
        class="flex cursor-pointer justify-items-center justify-center items-center space-x-6 py-4"
        :class="index == tabIndex ? 'bg-white activetab -mb-1 z-10' : ''"
        @click="tabIndex = index"
      >
        <!-- <svg-icon :name="icons[index]" height="40" width="40" /> -->
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
          <div
            class="prose order-last sm:order-first py-8 xl:px-12"
            v-html="getHTMLBody(productTabs[index].body)"
          />
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
    </template>
  </div>
</template>
<script setup>
import { ref, useStore, computed } from '@nuxtjs/composition-api'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const store = useStore()

function getHTMLBody(body) {
  return body.replace(' style="text-align:justify;"', '')
}
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('lg')
const productTabs = computed(() => store.state.productTabs[0].details[0].tabs)

const tabs = ['ПРЕДНАЗНАЧЕНИЕ', 'УКАЗАНИЕ ЗА УПОТРЕБА', 'СЪСТАВ', 'МНЕНИЕ НА СПЕЦИАЛИСТ']
const tabIndex = ref(0)
const icons = ['prednaznachenie', 'ukazanie', 'sastav', 'mnenie']
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
      'tab1 tab2 tab3 tab4'
      'cont cont cont cont';
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
