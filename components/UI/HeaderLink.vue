<template>
  <nuxt-link :to="to" class="side-nav-links" data-cy="mobile-links">
    <!-- <component :is="icon" :name="icon" class="mr-2" width="24px" height="24px" /> -->
    <slot>Link</slot>
  </nuxt-link>
</template>
<script>
// import ViewGrid from '~icons/iconoir/view-grid'
// import Home from '~icons/iconoir/home'
// import BookOpenPageVariant from '~icons/mdi/book-open-page-variant'
// import AccountGroup from '~icons/mdi/account-group'
// import Contacts from '~icons/mdi/comment-account'
// import HandHeart from '~icons/mdi/hand-heart'

export default {
  components: {
    // HandHeart,
    // ViewGrid,
    // Home,
    // AccountGroup,
    // BookOpenPageVariant,
    // Contacts,
  },
  props: {
    to: {
      type: String,
      required: true,
      default: "/",
    },
    icon: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
