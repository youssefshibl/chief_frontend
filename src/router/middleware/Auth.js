import usejwt from "@/lib/auth/usejwt";
import store from "@/store";

// before go to view
const beforeeach = async function (to, from, next) {
  const is_auth = await check_auth();
  // check if auth if auth
  if (is_auth.status) {
    if (is_auth.data) {
      // console.log("make");
      store.commit("SetUser", is_auth.data.user);
      store.commit("beauth");
      store.commit("theredata");
    }

    next();
  } else if (!is_auth.status) {
    // if user not auth check if it public page or not
    store.commit("outauth");

    if (route_array_public_notauth.includes(to.name)) {
      next();
    } else {
      next("/login");
    }
  }
};
const route_array_public_notauth = ["login", "home", "menu", "product"];
// this function check if user has token or not
function check_token_exist() {
  let token = localStorage.getItem("token");
  if (token == null) {
    return [false, null];
  } else {
    return [true, token];
  }
}
// if user has token check if it valid or not
async function check_auth() {
  let checktoken = check_token_exist();
  if (checktoken[0] == false) {
    return false;
  } else if (checktoken[0] == true) {
    return await check_token_valid();
  }
}
// request to check validation of token
async function check_token_valid() {
  // let data_respones = await client.get("/posts/1");
  let query = "";
  if (!store.getters.checkuserdata) {
    query = "?withdata=";
  }
  //console.log(query);
  let respones = await usejwt.axiosIns.get("/auth/check" + query);
  //console.log(respones.data);
  return respones.data;
}

export default beforeeach;
