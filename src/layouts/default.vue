<template>
  <!-- 默认页面模版 -->
  <div class="min-h-screen">
    <BaseHeader />
    <div class="flex">
      <BaseSide />
      <div class="p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>
