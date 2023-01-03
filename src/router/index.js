import { createWebHistory, createRouter } from "vue-router";
import HomeScreen from "@/views/home/index.vue";

const routes = [
  {
    path: "/",
    name: "home-screen",
    component: HomeScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
