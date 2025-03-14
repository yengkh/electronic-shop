import { createApp } from "vue";
import "./style.css";
import '@mdi/font/css/materialdesignicons.css';
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import vuetifyColor from "./plugins/vuetify";

const vuetify = createVuetify({
  components,
  directives,
});
createApp(App).use(vuetify).use(vuetifyColor).mount("#app");
