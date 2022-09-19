import pages from "./routes/pages";
const routes = [
  ...pages,
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../views/NotFound.vue"),
  },
];

export default routes;
