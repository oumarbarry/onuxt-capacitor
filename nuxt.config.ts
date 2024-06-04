export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: false },

  nitro: { output: { publicDir: "dist" } },

  spaLoadingTemplate: false,

  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],

  eslint: { config: { standalone: false } },

  tailwindcss: { viewer: false },
})
