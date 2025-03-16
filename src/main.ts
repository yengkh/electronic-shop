import { createApp } from "vue";
import "./style.css";
import "@mdi/font/css/materialdesignicons.css";
// Vuetify
import "vuetify/styles";

import App from "./App.vue";
import router from "./router/index";
import vuetifyColor from "./plugins/vuetify";

createApp(App).use(vuetifyColor).use(router).mount("#app");
