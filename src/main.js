import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import bulma from "bulma";
createApp(App).use(router).use(bulma).mount("#app");
