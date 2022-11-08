<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo min-h-full"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <NavMenu :data="navs" />
  </el-menu>
</template>

<script setup>
import NavMenu from "./components/Menu.vue";

const isCollapse = ref(false);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const { t } = useI18n();
const navs = [
  new NavOption({
    name: "nav-1",
    children: [
      new NavOption({
        name: "nav-1-1",
      }),
      new NavOption({
        name: "nav-1-2",
        isGroup: true,
        children: [
          new NavOption({
            name: "nav-1-2-1",
          }),
          new NavOption({
            name: "nav-1-2-2",
          }),
          new NavOption({
            name: "nav-1-2-3",
          }),
        ],
      }),
      new NavOption({
        name: "nav-1-3",
        children: [
          new NavOption({
            name: "nav-1-3-1",
          }),
          new NavOption({
            name: "nav-1-3-2",
          }),
          new NavOption({
            name: "nav-1-3-3",
          }),
        ],
      }),
    ],
  }),
  new NavOption({
    name: "nav-2",
    link: "#",
  }),
  new NavOption({
    name: "nav-2",
    disabled: true,
  }),
  new NavOption({
    name: "nav-3",
    click: () => {
      alert("Nav-3");
    },
  }),
];
</script>
