// before go to view
const beforeeach = async function (to, from, next) {
  let function_name = to.query.function;
  if (function_name == "sociallogin") {
    let token = to.query.token;
    localStorage.setItem("token", token);
    next({
      name: "about",
    });
  }
};

export default beforeeach;
