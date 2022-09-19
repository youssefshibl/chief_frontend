import { createStore } from "vuex";
import AuthStore from "./auth/AuthStore";
import MenuStore from "./main/menu";
import OrdersStore from "./main/order";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    AuthStore,
    MenuStore,
    OrdersStore,
  },
});
