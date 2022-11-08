<script setup>
import NavMenu from "./Menu.vue";
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const { t } = useI18n();
</script>

<template>
  <component
    :is="`${props.data.hasChildren ? 'el-sub-menu' : 'el-menu-item'}`"
    :index="String(props.data.name || Math.random())"
    :disabled="props.data.disabled"
    @click="props.data.click()"
    h-full
  >
    <RouterLink v-if="props.data.link" mx-2 :to="props.data.link">
      <i
        v-if="props.data.icon"
        :i="props.data.icon"
        inline-flex
        style="height: var(--el-menu-item-height)"
      />
      {{ props.data.i18n ? t(props.data.name) : props.data.name }}
    </RouterLink>
    <template #title v-if="!props.data.link">
      <i
        v-if="props.data.icon"
        :i="props.data.icon"
        inline-flex
        style="height: var(--el-menu-item-height)"
      />
      {{ props.data.i18n ? t(props.data.name) : props.data.name }}
    </template>
    <NavMenu v-if="props.data.hasChildren" :data="props.data.children" />
  </component>
</template>
