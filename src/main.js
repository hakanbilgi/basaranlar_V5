import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { createPinia } from "pinia";


createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app");
