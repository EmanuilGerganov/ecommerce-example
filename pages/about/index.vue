<template>
  <main id="main" class="px-5 lg:max-w-screen-xl">
    <header>
      <h1 class="heading">GET IN TOUCH</h1>
    </header>
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div
        class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
      >
        <div class="md:5/12 lg:w-5/12">
          <img
            src="/ecommerce-example/about.jpg"
            alt="image"
            width=""
            height=""
          />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
            Learn more about us and our business
          </h2>
          <p class="mt-6 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p class="mt-4 text-gray-600">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head: {
    title:
      "About Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea About —  example.com",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "About Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea, asperiores rerum eveniet quisquam aliquam deserunt vitae totam vel odio quas, doloremque nemo commodi!",
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Lorem ipsum dolor sit amet About — example.com",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "About Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque ad eum itaque provident corrupti ea, asperiores rerum eveniet quisquam aliquam deserunt vitae totam vel",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://example.com/about",
      },
    ],
  },
};
</script>
