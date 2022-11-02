import path from "path";
import vue from "@vitejs/plugin-vue";
import Page from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import { defineConfig } from "vite";
import { version as pkgVersion } from "./package.json";

process.env.VITE_APP_VERSION = pkgVersion;
if (process.env.NODE_ENV === "production") {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Page({
      //指定需要生成路由的文件夹
      dirs: [{ dir: "src/pages", baseRoute: "" }],
      // 全局路由加载方式async/sync
      importMode: "async",
    }),
    Layouts(),
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        // presets
        "vue",
        "vue-router",
        "vue-i18n",
        "pinia",
        // custom
        {
          "@/store": ["useStore"],
          "@vueuse/head": ["createHead", "useHead"],
          "@vueuse/core": [
            // named imports
            "useMouse", // import { useMouse } from '@vueuse/core',
            // alias
            ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          axios: [
            // default imports
            ["default", "axios"], // import { default as axios } from 'axios',
          ],
          /*
          "[package-name]": [
            "[import-names]",
            // alias
            ["[from]", "[alias]"],
          ],
          */
        },
      ],

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],

      // Auto import inside Vue template
      vueTemplate: true,

      // Custom resolvers, compatible with `unplugin-vue-components`
      resolvers: [
        /* ... */
      ],

      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        // enabled: false, // Default `false`
        // filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        // globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "./src/locales/**")],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
