import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import Pages from "vite-plugin-pages";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Layouts from "vite-plugin-vue-layouts";
// import VueI18n from "@intlify/vite-plugin-vue-i18n";
export default defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    Pages({
      extensions: ["vue"],
      // pagesDir: "src/routes",
      exclude: ["**/components/*.vue"],
      // nuxtStyle: true,
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia", "@vueuse/core", "@vueuse/head"],
      dts: "src/auto-imports.d.ts",
      vueTemplate: true, //模板内直接使用compostionAPi
      dirs: ["src/composables"],
    }),
    Layouts(),
    Components({
      dirs: ["src/components", "/src/pages/**/components"],
      include: [/\.vue$/],
      extensions: ["vue"],
      dts: "src/components.d.ts",
      deep: true,
    }),
    // VueI18n({
    //   include: [path.resolve(__dirname, "/locales/**")],
    // }),
  ],
});
