// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {"@": resolve(__dirname, "/")},
  devtools: { enabled: true },
  modules : ['@nuxtjs/tailwindcss',
  '@nuxtjs/google-fonts'],
  css: ["~/assets/css/main.scss"],
  googleFonts: {
    preload: true,
    families: {
      Roboto: true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
