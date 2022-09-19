const ModuleOrders = {
  state: {
    orders: [],
  },
  getters: {
    get_orders_num(state) {
      return state.orders.length;
    },
    get_orders(state) {
      return state.orders;
    },
    get_total_price(state) {
      let total = 0;
      state.orders.forEach(function (item) {
        total += Number(item.menu.price) * Number(item.number);
      });
      return total;
    },
    dec_number: (state) => (id) => {
      let mark = false;
      state.orders.forEach(function (item) {
        if (item.id == id) {
          if (Number(item.number) > 1) {
            mark = true;
            item.number--;
            return true;
          } else {
            return false;
          }
        }
      });
      return mark;
    },
  },
  mutations: {
    setorders(state, data) {
      state.orders = data;
    },
    inc_number(state, id) {
      state.orders.map(function (item) {
        if (item.id == id) {
          item.number++;
        }
      });
    },

    delet_order(state, id) {
      state.orders = state.orders.filter(function (item) {
        return item.id != id;
      });
    },
    set_new_order(state, new_order) {
      let is = true;
      state.orders.forEach(function (item) {
        if (item.id == new_order.id) {
          item.number = new_order.number;
          is = false;
        }
      });
      if (is) {
        state.orders.push(new_order);
      }
    },
    inc_n_number(state, id, n_order) {
      state.orders.forEach(function (item) {
        if (item.menu.id == id) {
          console.log(item.number);
          console.log(n_order);
          item.number += n_order;
        }
      });
    },
  },
  actions: {},
  modules: {},
};
export default ModuleOrders;
