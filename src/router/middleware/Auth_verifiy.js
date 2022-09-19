import client from "@/core/AxiosInstance";

// before go to view
const beforeeach = async function (to, from, next) {
  const is_auth = await check_auth();
  // check if auth if auth
  if (is_auth[0]) {
    // if user is not verified and auth and go to error page

    if (is_auth[1] == null) {
      next({
        name: "errors",
        query: {
          message:
            "you should validate you account by check link send in your email",
          solution: " check you email",
          action: "send_email",
        },
      });
    } else {
      next();
    }
  } else if (!is_auth[0]) {
    // if user not auth check if it public page or not

    next("/login");
  }
};
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
    // return false;
    return false;
  } else if (checktoken[0] == true) {
    return await check_token_valid();
  }
}
// request to check validation of token
async function check_token_valid() {
  // let data_respones = await client.get("/posts/1");
  let respones = await client.get("/auth/check");

  return [respones.data.status, respones.data.verified];
}
export default beforeeach;
