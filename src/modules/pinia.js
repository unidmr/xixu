export const install = ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
};
