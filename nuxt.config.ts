export default defineNuxtConfig({
  devtools: { enabled: true },
  // nitro: {
  //   prerender: {
  //     ignore: [
  //       '/writings/**', // Ignore all routes under /writings
  //     ],
  //   //   crawlLinks: false, // Optionally disable link crawling
  //   //   // routes: [
  //   //   //   '/', // List other routes you want to prerender
  //   //   // ],
  //   // },
  // },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt"
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-darkBg min-h-screen",
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap'
        }
      ]
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    }
  },
  googleFonts: {
    families: {
      'JetBrains+Mono': [500],  // Specify the Medium (500) weight
    },
    display: "swap",
  },
});
