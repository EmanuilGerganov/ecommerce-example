<!-- <template>
  <nav class="text-lg sm:text-base font-semibold uppercase mx-auto">
    <ol class="pl-3 list-none" vocab="https://schema.org/" typeof="BreadcrumbList">
      <li property="itemListElement" class="inline" typeof="ListItem">
        <nuxt-link property="item" typeof="WebPage" to="/">
          <span property="name">Home</span>
        </nuxt-link>
        <meta property="position" content="1" />
      </li>
      <li
        v-for="(page, index) in breadcrumbs"
        :key="page.id"
        class="inline"
        property="itemListElement"
        typeof="ListItem"
      >
        <span>/</span>
        <nuxt-link property="item" typeof="WebPage" :to="`${page.to}`">
          <span property="name">
            {{ page.title }}
          </span>
        </nuxt-link>
        <meta property="position" :content="index + 2" />
      </li>
    </ol>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['breadcrumbs']),
  },
}
</script>
<style>
ol {
  color: #403739;
  font-family: sans-serif;
}
</style> -->

<template>
  <nav class="text-lg sm:text-base font-semibold uppercase mx-auto">
    <ol
      class="pl-3 list-none"
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
    >
      <li class="inline" property="itemListElement" typeof="ListItem">
        <NLink property="item" typeof="WebPage" to="/">
          <span property="name">Начало</span>
        </NLink>
        <meta property="position" content="1" />
      </li>
      <li
        class="inline"
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <NLink property="item" typeof="WebPage" :to="crumb.path">
          <span property="name">{{
            $route.fullPath === crumb.path && title !== null
              ? title
              : crumb.title
          }}</span>
        </NLink>
        <meta property="position" :content="index + 2" />
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      console.log(fullPath, "FULL PATH");
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/").filter(Boolean)
        : fullPath.split("/").fitler(Boolean);
      console.log(params, "PARAMS");
      const crumbs = [];
      let path = "";
      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);
        if (match.name !== null) {
          crumbs.push({
            title: param.replace(/-/g, " "),
            ...match,
          });
        }
      });
      return crumbs;
    },
  },
};
</script>

<style scoped>
ol {
  color: #403739;
  font-family: sans-serif;
}
li:after {
  content: " / ";
  display: inline;
  font-size: 0.9em;
  color: #aaa;
  padding: 0 0.0725em 0 0.15em;
}
li:last-child:after {
  content: "";
}
/* li a {
  color: black;
} */
/* li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}  */
</style>
