import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Page from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import { version as pkgVersion } from "./package.json";

process.env.VITE_APP_VERSION = pkgVersion;
if (process.env.NODE_ENV === "production") {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}
// 详细文档 https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Page({
      // 指定需要生成路由的文件夹
      dirs: [
        { dir: "src/pages", baseRoute: "" },
        { dir: "src/views", baseRoute: "" },
      ],
      // 全局路由加载方式async/sync
      importMode: "async",
    }),
    Layouts(),
    // 详细文档 https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
    // 详细文档 https://github.com/antfu/unplugin-auto-import/blob/main/src/types.ts
    AutoImport({
      include: [
        /\.[jt]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dirs: ["./src/composables/"],
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "pinia",
        {
          "@/store": ["useStore"],
          "@vueuse/head": ["createHead", "useHead"],
          "@vueuse/core": [
            "useMouse",
            "useDark",
            "useToggle",
            "usePreferredDark",
            [("useFetch", "useMyFetch")],
          ],
          axios: [["default", "axios"]],
        },
      ],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
    // 详细文档 https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
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
