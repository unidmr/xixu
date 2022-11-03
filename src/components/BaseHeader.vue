<script setup>
const { t } = useI18n();
</script>

<template>
  <el-menu class="items-center" mode="horizontal">
    <el-menu-item index="1">
      <RouterLink class="mx-2" to="/" :title="t('button.home')">
        <Logo />
      </RouterLink>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>导航-1</template>
      <el-menu-item v-for="item in 3" :key="item" :index="`2-{item}`"
        >二级-{{ item }}</el-menu-item
      >
      <el-sub-menu index="2-4">
        <template #title>二级-4</template>
        <el-menu-item v-for="item in 3" :key="item" :index="`2-4-{item}`"
          >二级-4-{{ item }}</el-menu-item
        >
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>导航-2</el-menu-item>
    <el-menu-item index="4">导航-3</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
