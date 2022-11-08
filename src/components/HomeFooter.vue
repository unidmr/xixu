<script setup>
const { t, availableLocales, locale } = useI18n();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <button
    class="border-none w-full bg-transparent cursor-pointer"
    @click="toggleDark()"
  >
    {{ t("button.toggle_dark") }}
  </button>
  <button
    class="border-none w-full bg-transparent cursor-pointer"
    @click="toggleLocales()"
  >
    {{ t("button.toggle_langs") }}
  </button>
</template>
