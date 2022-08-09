<template>
  <main id="main">
    <header>
      <h1 class="heading">Products heading</h1>
    </header>
    <!-- <UIProductsView :$fetch-state="$fetchState" /> -->
    <UIProductsView />
  </main>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  head: {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea —  example.com",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea, asperiores rerum eveniet quisquam aliquam deserunt vitae totam vel odio quas, doloremque nemo commodi!",
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "【Lorem ipsum dolor sit amet — example.com",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea, asperiores rerum eveniet quisquam aliquam deserunt vitae totam vel",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://example.com/products",
      },
    ],
  },
};
</script>
