<script setup>
import NavMenu from "./components/Menu.vue";
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
  new NavOption({
    name: "",
    icon: "dark:ep-moon ep-sunny",
    click: toggleDark,
  }),
];
</script>

<template>
  <el-menu items-center mode="horizontal">
    <el-menu-item h-full index="logo">
      <RouterLink mx-2 to="/" :title="t('button.home')">
        <Logo />
      </RouterLink>
    </el-menu-item>
    <NavMenu :data="navs" />
  </el-menu>
</template>
