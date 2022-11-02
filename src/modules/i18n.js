import { createI18n } from "vue-i18n";

const messages = Object.fromEntries(
  Object.entries(import.meta.glob("../locales/*.y(a)?ml", { eager: true })).map(
    ([key, value]) => {
      const endsLen = key.endsWith(".yaml") ? -5 : -4;
      return [key.slice(String("../locales/").length, endsLen), value.default];
    }
  )
);

export const install = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "zh-CN",
    messages,
  });

  app.use(i18n);
};
