import { createApp } from "vue";
import App from "./App.vue";

// import create pinia
import { createPinia } from "pinia";

// import router
import router from "./routes";

// Bootstrap Css and JavaScript
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

// createApp(App).use(bootstrap).use(createPinia()).mount("#app");

// Create Pinia instance
const pinia = createPinia();

// Create Vue app instance
const app = createApp(App);

// Use plugins
app.use(router).use(pinia).use(bootstrap).mount("#app");
