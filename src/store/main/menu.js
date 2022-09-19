const ModuleMenu = {
  state: {
    category: [],
  },
  getters: {
    getcategory(state) {
      return state.category;
    },
  },
  mutations: {
    setcategory(state, data) {
      state.category = data;
    },
  },
  actions: {},
  modules: {},
};
export default ModuleMenu;
