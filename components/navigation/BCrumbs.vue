<template>
  <nav class="text-lg sm:text-base font-semibold uppercase mx-auto">
    <ol
      class="pl-3 list-none"
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
    >
      <li class="inline" property="itemListElement" typeof="ListItem">
        <NLink property="item" typeof="WebPage" to="/">
          <span property="name">Home</span>
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
