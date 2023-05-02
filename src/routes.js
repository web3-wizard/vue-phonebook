import { createWebHistory, createRouter } from "vue-router";

import ViewContact from "./components/ViewContact.vue";
import AddContact from "./components/AddContact.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: ViewContact,
  },
  {
    name: "Create",
    path: "/create",
    component: AddContact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
