<template>
  <!-- 默认页面模版 -->
  <div class="min-h-screen">
    <DefaultHeader />
    <div class="flex">
      <DefaultSide />
      <div class="p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>
