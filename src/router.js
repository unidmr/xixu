import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedPages from "virtual:generated-pages";

const routes = setupLayouts(generatedPages);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
