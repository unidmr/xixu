export const install = ({ isClient, initialState, app }) => {
  const pinia = createPinia();
  app.use(pinia);
};
