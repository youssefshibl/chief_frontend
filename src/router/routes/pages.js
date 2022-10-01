import multiguard from "vue-router-multiguard";
// middleware
import auth_middle from "../middleware/Auth";
import auth_verifiy_middle from "../middleware/Auth_verifiy";
import not_auth from "../middleware/Not_auth";
// middlware for redirect
import redirect from "../redirects/mainredirects";

export default [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/AboutView.vue"),
    beforeEnter: multiguard([auth_verifiy_middle]),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../../views/LogIn.vue"),
    beforeEnter: multiguard([not_auth]),
  },

  {
    path: "/errors",
    name: "errors",
    component: () => import("../../views/errors/MainErrors.vue"),
    beforeEnter: multiguard([auth_middle]),
  },
  {
    path: "/multiredirect",
    name: "multiredirect",
    compsonent: () => import("../../views/redirect/SocialView.vue"),
    beforeEnter: multiguard([redirect]),
  },
  {
    path: "/one",
    name: "one",
    component: () => import("../../views/TestView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../../views/home/HomeView.vue"),
    meta: { title: "home" },
    beforeEnter: multiguard([auth_middle]),
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../../views/home/MenuView.vue"),
    beforeEnter: multiguard([auth_middle]),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../../views/TestView.vue"),
  },
  {
    path: "/product/:name",
    name: "product",
    component: () => import("../../views/home/ProductView.vue"),
    beforeEnter: multiguard([auth_middle]),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../../views/home/CheckoutView.vue"),
    beforeEnter: multiguard([auth_middle]),
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("../../views/home/OrdersView.vue"),
    beforeEnter: multiguard([auth_middle]),
  },
  {
    path: "/address",
    name: "address",
    component: () => import("../../views/home/AddressView.vue"),
    beforeEnter: multiguard([auth_middle]),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../../views/home/UserView.vue"),
    beforeEnter: multiguard([auth_middle]),
  },
];
