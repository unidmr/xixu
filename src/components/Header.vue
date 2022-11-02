<script setup>
const { t, availableLocales, locale } = useI18n();

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <nav text-xl mt-6>
    <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
      <!-- <div i-carbon-campsite /> -->
      {{ t("button.home") }}
    </RouterLink>

    <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
      {{ t("button.about") }}
    </RouterLink>

    <RouterLink class="icon-btn mx-2" to="/case" :title="t('button.case')">
      {{ t("button.case") }}
    </RouterLink>

    <RouterLink
      class="icon-btn mx-2"
      to="/contact"
      :title="t('button.contact')"
    >
      {{ t("button.contact") }}
    </RouterLink>
  </nav>
</template>
