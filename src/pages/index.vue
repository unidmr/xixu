<script setup>
const route = useRoute();

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: "og:title",
      content: route.meta.title,
    },
    {
      name: "twitter:title",
      content: route.meta.title,
    },
  ],
});

const VERSION = import.meta.env.VITE_APP_VERSION;
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined;
const thisYear = new Date().getFullYear();
</script>

<template>
  <div class="relative py-8">
    <div
      class="absolute inset-0 bg-[url(@/assets/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose">
        <h1>XiXu v{{ VERSION }}</h1>
        <h2>Vue 3 + Tailwind + ElementPlus 的开箱即用框架</h2>
        <p class="pb-4 text-xl leading-relaxed tracking-wide">
          MIT licensed.
          <a href="https://github.com/Uninen/vite-ts-tailwind-starter">GitHub</a
          >.
        </p>
      </header>
      <main>
        <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
          <h2>咋用？</h2>

          <h4>GitClone</h4>

          <pre>git clone https://github.com/unidmr/xixu</pre>

          <h4>或者 npm</h4>

          <pre>npm create xixu</pre>

          <h4>加载依赖</h4>

          <pre>pnpm i</pre>

          <h4>跑起来</h4>

          <pre>pnpm dev</pre>

          <h4>打包</h4>

          <pre>pnpm build</pre>
        </div>
      </main>
      <footer class="py-6 text-sm text-center">
        <p>
          XiXu by
          <a class="underline" href="https://github.com/unidmr">@XuShihao</a>
          &copy; 2021-{{ thisYear }}.
          <template v-if="BUILD_DATE">
            Site built {{ BUILD_DATE.toLocaleDateString() }}.
          </template>
          <template v-else> Development mode. </template>
        </p>
      </footer>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
