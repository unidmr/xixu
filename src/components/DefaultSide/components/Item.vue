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
  <el-menu-item-group v-if="props.data.isGroup">
    <template #title>{{ props.data.name }}</template>
    <NavMenu v-if="props.data.hasChildren" :data="props.data.children" />
  </el-menu-item-group>

  <component
    v-else
    :is="`${props.data.hasChildren ? 'el-sub-menu' : 'el-menu-item'}`"
    :index="String(props.data.name || Math.random())"
    :disabled="props.data.disabled"
    @click="props.data.click()"
  >
    <RouterLink v-if="props.data.link" mx-2 :to="props.data.link">
      <i v-if="props.data.icon" :i="props.data.icon" inline-flex />
      {{ props.data.i18n ? t(props.data.name) : props.data.name }}
    </RouterLink>
    <template #title v-if="!props.data.link">
      <i v-if="props.data.icon" :i="props.data.icon" inline-flex />
      {{ props.data.i18n ? t(props.data.name) : props.data.name }}
    </template>
    <NavMenu v-if="props.data.hasChildren" :data="props.data.children" />
  </component>
</template>
