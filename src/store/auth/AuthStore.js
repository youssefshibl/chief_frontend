const ModuleAuth = {
  state: {
    user: {},
    isauth: false,
    theredata: false,
  },
  getters: {
    checkuserdata(state) {
      return state.theredata;
    },
    checkauth(state) {
      return state.isauth;
    },
    getuserdata(state) {
      return state.user;
    },
  },
  mutations: {
    beauth(state) {
      state.isauth = true;
    },
    outauth(state) {
      state.isauth = false;
    },
    SetUser(state, userdata) {
      state.user = userdata;
    },
    theredata(state) {
      state.theredata = true;
    },
  },
  actions: {},
  modules: {},
};
export default ModuleAuth;
