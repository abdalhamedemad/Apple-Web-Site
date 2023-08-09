// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // buildModules: ["vue-ssr-carousel/nuxt"],
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: [
    "~/assets/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "vueperslides/dist/vueperslides.css",
  ],
});
