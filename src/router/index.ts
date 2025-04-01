import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import DetailPage from "../views/DetailPageFolder/DetailPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail-page",
    name: "Detail page",
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0, behavior: "smooth" };
    }
  },
});

export default router;
