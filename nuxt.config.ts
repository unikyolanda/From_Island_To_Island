// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/From_Island_To_Island/', // GitHub repository name
    head: {
      title: 'From Island To Island',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '由島至島，記憶與對話' },
        // Open Graph
        { property: 'og:title', content: 'From Island To Island' },
        { property: 'og:description', content: '由島至島，記憶與對話' },
        {
          property: 'og:image',
          content:
            'https://drive.google.com/file/d/1JHGdKiCJySpKyN7644NndfDJIcXtl7ts/view?usp=drive_link',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        // { property: 'og:url', content: 'https://yourwebsite.com' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500;600;700;800&family=Amiri:wght@400;700&display=swap&family=Wix+Madefor+Display:wght@400..800&display=swapfamily=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Caveat:wght@400..700&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: './favicon.png',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/ripples.client.ts'],
})
