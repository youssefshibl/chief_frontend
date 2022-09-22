const ModuleAuth = {
  state: {
    user: {},
    isauth: false,
    theredata: false,
    isverified: false,
    address: [],
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
    get_verified_state(state) {
      return state.isverified;
    },
    get_address(state) {
      return state.address;
    },
  },
  mutations: {
    set_isverified(state) {
      state.isverified = true;
    },
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
    set_address(state, data) {
      state.address = data;
    },
  },
  actions: {},
  modules: {},
};
export default ModuleAuth;
