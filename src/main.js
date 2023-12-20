import "./style.css";
import App from "./App.vue";
import { routes } from "./routes";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import { appStore } from './store'
import { ViteSSG } from "vite-ssg";

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState, onSSRAppRendered }) => {
    const pinia = createPinia();
    const head = createHead();


    app.use(pinia).use(head);

    if (isClient) {
      pinia.state.value = initialState.pinia || {};
    } else {
      onSSRAppRendered(() => {
        initialState.pinia = pinia.state.value;
      });
    }
  }
);
