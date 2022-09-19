import store from "@/store";
const master = {
  changeglobal: function (name, value) {
    document.querySelector(":root").style.setProperty(`--${name}`, `${value}`);
  },
  // check that user is auth and there data not null
  isauth_isdata() {
    return store.getters.checkuserdata && store.getters.checkauth;
  },
  animationloading(option) {
    if (option) {
      document.querySelector(".animationloading ").style.display = "flex";
    } else {
      setTimeout(() => {
        document.querySelector(".animationloading ").style.display = "none";
      }, 500);
    }
  },
};

export default master;
