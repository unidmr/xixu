<script setup>
const { t, availableLocales, locale } = useI18n();

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <nav class="text-xl flex items-center">
    <Logo />
    <RouterLink class="mx-2" to="/dashboard" :title="t('button.login')">
      {{ t("button.login") }}
    </RouterLink>
  </nav>
</template>
