import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { aftereachsettitle } from "./AfterEach";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(aftereachsettitle);
export default router;
