import config_backen from "@/config/backend/main";
import Echo from "laravel-echo";
import Endpoint from "@/lib/endpoint/main";
window.Pusher = require("pusher-js");
// swall alert
import Swal from "sweetalert2";
let toastMixin = Swal.mixin({
  toast: true,
  position: "top-right",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
// config of echo
window.Echo = new Echo({
  broadcaster: "pusher",
  key: config_backen.puser_app_key,
  wsHost: config_backen.host,
  wsPort: config_backen.pusher_port,
  forceTLS: false,
  disableStats: true,
  authEndpoint: config_backen.BackendApp + "broadcasting/auth",
  auth: {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  },
});
// get token to access private channal
function getToken() {
  return localStorage.getItem("token");
}

window.onload = function () {
  listen_to_notification();
};

async function listen_to_notification() {
  let response = await Endpoint.axiosIns.post("auth/me");
  let user_id = response.data.id;
  window.Echo.private(`order_status_id_${user_id}`).listen(
    "NotificationStatus",
    (e) => {
      //console.log(e);
      if (e.data.type == "orderupdate") {
        listen_to_notification();
        toastMixin.fire({
          icon: "info",
          title: "Check your order there Update",
        });
      }
    }
  );
}
