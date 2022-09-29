import { createWebHistory, createRouter } from "vue-router";
import HomeScreen from "@/views/HomeScreen.vue";

const routes = [
  {
    path: "/",
    name: "HomeScreen",
    component: HomeScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
