<template>
  <div class="bg-footer-bg foot">
    <div id="nav">
      <nav class="flex flex-col gap-3 text-lg font-semibold uppercase">
        <UIHomeLogo />
        <nuxt-link to="/za-nas/"> За Нас </nuxt-link>
        <nuxt-link to="/produkti/"> Продукти </nuxt-link>
        <nuxt-link to="/kategorii/"> Категории </nuxt-link>
        <nuxt-link to="/kontakti/"> Контакти </nuxt-link>
        <nuxt-link to="/blog/"> Блог </nuxt-link>
      </nav>
    </div>
    <div id="foot-blog">
      <h3 class="font-bold uppercase text-lg text-center mb-10">Последно от блога</h3>
      <article v-for="article in articles" :key="article.id" class="p-3 sm:pb-3">
        <nuxt-link
          :to="`/blog/${article.slug}/`"
          class="grid gap-2 sm:grid-cols-2 md:grid-cols-[250px_500px]"
        >
          <nuxt-picture
            legacy-format="webp"
            format="avif"
            class="mx-auto rounded-md"
            width="234"
            height="156"
            loading="lazy"
            sizes="lg:234px"
            :title="article.title"
            :src="`photo${article.image}`"
            :alt="article.title + '- bilkovitinkturi.bg'"
          />
          <div>
            <h4 class="text-lg font-semibold uppercase mt-4">
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
      <h2 class="font-bold uppercase text-center mb-10">Контакти</h2>
      <!-- <div class="p-3">
        <a href="tel:0899919725" class="flex items-center" role="button" title="Обадете ни се">
          <Phone class="mr-2" />
          0899 919 725
        </a>

        <span class="flex items-center">
          <Email class="mr-2" />
          bilkovitinkturi@gmail.com
        </span>
        <h2 class="font-bold uppercase text-center my-10">Последвайте ни</h2>
        <div class="flex justify-around">
          <a
            title="Facebook"
            class="jss27 jss29"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Връзка с Facebook"
            href="https://www.facebook.com/bilkovitinkturi.bg"
          >
            <Facebook class="w-7 h-7" />
          </a>
          <a
            title="Instagram"
            class="jss26 jss29"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Връзка с Instagram"
            href="https://www.instagram.com/bilkovitinkturi.bg"
          >
            <Instagram class="w-7 h-7" />
          </a>
          <a
            href="https://www.tiktok.com/@bilkovitinkturibg?"
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
            href="https://www.youtube.com/channel/UCEadW3ojOEb6mKjdvQdsrMQ"
          >
            <YouTube class="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/bilkovi-tinkturi-bg-4bb709203/"
            class="icon linkedin"
            title="LinkedIn"
          >
            <LinkedIn class="w-7 h-7" />
          </a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import TikTok from '~icons/iconoir/tiktok'
// import Instagram from '~icons/iconoir/instagram'
// import Facebook from '~icons/iconoir/facebook'
// import YouTube from '~icons/iconoir/youtube'
// import LinkedIn from '~icons/iconoir/linkedin'
// import Phone from '~icons/carbon/phone-filled'
// import Email from '~icons/iconoir/mail-opened'

export default {
  components: {
    // TikTok,
    // Instagram,
    // Facebook,
    // YouTube,
    // LinkedIn,
    // Phone,
    // Email,
  },
  computed: {
    ...mapState({
      articles: (state) => state?.lastArticles?.slice(0, 2),
    }),
  },
}
</script>

<style>
/* nested grid for each column */

@media (min-width: 1280px) {
  .foot {
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 2fr 3fr 2fr;
    grid-template-areas: 'foot-nav foot-blog foot-contacts';
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
      'foot-nav foot-contacts'
      'foot-blog foot-blog';

    gap: 1rem;
    padding: 50px 0px;
  }
}

@media (max-width: 640px) {
  .foot {
    display: grid;
    grid-template-areas:
      'foot-nav'
      'foot-blog'
      'foot-contacts';
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
