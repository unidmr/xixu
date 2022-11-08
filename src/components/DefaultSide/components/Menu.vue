<script setup>
import NavItem from "./Item.vue";

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <NavItem v-for="(item, idx) in props.data" :key="idx" :data="item" />
</template>
