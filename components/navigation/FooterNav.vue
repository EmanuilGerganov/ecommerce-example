<template>
  <footer>
    <div class="bg-footer-bg foot">
      <div id="nav">
        <nav class="flex flex-col gap-1 text-lg font-semibold uppercase">
          <UIHomeLogo class="my-0" />
          <nuxt-link to="/about/"> About us </nuxt-link>
          <nuxt-link to="/products/"> Products</nuxt-link>
          <nuxt-link to="/contacts/"> Contact us </nuxt-link>
          <nuxt-link to="/blog/"> Blog </nuxt-link>
        </nav>
      </div>
      <div id="foot-blog">
        <article
          class="p-3 sm:p-1"
          v-for="article in articles"
          :key="article.id"
        >
          <nuxt-link
            :to="`/blog/${article.slug}/`"
            class="grid gap-2 sm:grid-cols-2 md:grid-cols-[250px_500px]"
          >
            <img
              class="sm:mx-auto rounded-md"
              width="234"
              height="156"
              loading="lazy"
              :title="article.title"
              src="/ecommerce-example/article-image.jpg"
              :alt="article.title + '- example.com'"
            />
            <div>
              <h4 class="text-lg font-semibold uppercase">
                {{ article.title }}
              </h4>
              <p class="pt-5">
                {{ article.description }}
              </p>
            </div>
          </nuxt-link>
        </article>
      </div>
      <div id="contacts" class="text-lg">
        <h2 class="font-bold uppercase text-center mb-10">Contacts</h2>
        <div class="p-3">
          <a
            href="tel:0888 777 999"
            class="flex items-center"
            role="button"
            title="Обадете ни се"
          >
            <PhoneOutline class="mr-2" />
            0888 777 999
          </a>

          <span class="flex items-center">
            <Email class="mr-2" />
            example@gmail.com
          </span>
          <h2 class="font-bold uppercase text-center my-10">
            Follow us on social media
          </h2>
          <div class="flex justify-around">
            <a
              title="Facebook"
              class="jss27 jss29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Връзка с Facebook"
              href="https://www.facebook.com/"
            >
              <Facebook class="w-7 h-7" />
            </a>
            <a
              title="Instagram"
              class="jss26 jss29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Връзка с Instagram"
              href="https://www.instagram.com/"
            >
              <Instagram class="w-7 h-7" />
            </a>
            <a
              href="https://www.tiktok.com/"
              class="icon gap- linkedin"
              title="Tik tok"
            >
              <TikTok class="w-7 h-7" />
            </a>
            <a
              title="Youtube"
              class="jss28 jss29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Връзка с YouTube"
              href="https://www.youtube.com"
            >
              <YouTube class="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/"
              class="icon linkedin"
              title="LinkedIn"
            >
              <LinkedIn class="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-herb-dark-press text-white h-12 flex items-center justify-center normal-case"
    >
      <span> Built by Emanuil Gerganov - ©2022 All Rights Reserved. </span>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import TikTok from "~icons/iconoir/tiktok";
import Instagram from "~icons/iconoir/instagram";
import Facebook from "~icons/iconoir/facebook";
import YouTube from "~icons/iconoir/youtube";
import LinkedIn from "~icons/iconoir/linkedin";
import PhoneOutline from "~icons/mdi/phone-outline";
import Email from "~icons/iconoir/mail-opened";

export default {
  components: {
    TikTok,
    Instagram,
    Facebook,
    YouTube,
    LinkedIn,
    PhoneOutline,
    Email,
  },

  computed: {
    ...mapState({
      articles: (state) => state.articles.slice(0, 2),
    }),
  },
};
</script>

<style>
/* nested grid for each column */

@media (min-width: 1280px) {
  .foot {
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 2fr 3fr 2fr;
    grid-template-areas: "foot-nav foot-blog foot-contacts";
    gap: 1rem;
    padding: 50px 0px;
  }
}
@media (max-width: 1280px) {
  .foot {
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "foot-nav foot-contacts"
      "foot-blog foot-blog";

    gap: 1rem;
    padding: 50px 0px;
  }
}

@media (max-width: 640px) {
  .foot {
    display: grid;
    grid-template-areas:
      "foot-nav"
      "foot-blog"
      "foot-contacts";
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 50px 40px;
  }
}
#nav {
  grid-area: foot-nav;
}
#foot-blog {
  grid-area: foot-blog;
}
#contacts {
  grid-area: foot-contacts;
}
</style>
