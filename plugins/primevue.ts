import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Popover from "primevue/popover";
import Aura from "@primeuix/themes/aura";

export default defineNuxtPlugin((nuxtApp) => {
  const vueApp = nuxtApp.vueApp;
  vueApp.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });
  vueApp.component("Button", Button);
  vueApp.component("Popover", Popover);
});
