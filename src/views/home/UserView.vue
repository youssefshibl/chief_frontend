<template>
  <div class="user">
    <ElementBag />
    <div class="header-back">
      <NavBar />
      <div class="text-home-pro d-flex align-items-center">
        <div class="container my-auto text-light">
          <div class="text-center fs-1">{{ $t("message.menu_main_word") }}</div>
        </div>
      </div>
    </div>
    <div class="ordercollection py-4">
      <div class="container">
        <div class="ordercollection-box p-2">
          <div class="row">
            <div class="conten-box col-12 col-md-3 border-end">
              <div class="list-group">
                <router-link
                  to="/orders"
                  class="list-group-item list-group-item-action text-center"
                  aria-current="true"
                >
                  orders
                </router-link>
                <router-link
                  to="/address"
                  class="list-group-item list-group-item-action text-center"
                  aria-current="true"
                >
                  address
                </router-link>
                <router-link
                  to="/user"
                  class="list-group-item list-group-item-action text-center active"
                  aria-current="true"
                >
                  user data
                </router-link>
              </div>
            </div>
            <div class="orders-boxs col-12 col-md-9 mx-auto p-2">
              <div class="border rounded">
                <div class="mb-3 row p-2">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label text-center py-2"
                    >Name</label
                  >
                  <div class="col-sm-4 py-2">
                    <input
                      v-model="data.name"
                      type="text"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label text-center py-2"
                    >Email</label
                  >
                  <div class="col-sm-4 py-2">
                    <input
                      v-model="data.email"
                      type="text"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label text-center py-2"
                    >Phone</label
                  >
                  <div class="col-sm-4 py-2">
                    <input
                      v-model="data.phone"
                      type="text"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label text-center py-2"
                    >Address</label
                  >
                  <div class="col-sm-4 py-2">
                    <input
                      v-model="data.address"
                      type="text"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                  <label
                    for="inputPassword"
                    class="col-sm-4 col-form-label text-center py-2"
                    >Old password</label
                  >
                  <div class="col-sm-6 py-2">
                    <input
                      v-model="data.oldpassword"
                      type="password"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                  <label
                    for="inputPassword"
                    class="col-sm-4 col-form-label text-center py-2"
                    >New password</label
                  >
                  <div class="col-sm-6 py-2">
                    <input
                      v-model="data.newpassword"
                      type="password"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                  <label
                    for="inputPassword"
                    class="col-sm-4 col-form-label text-center py-2"
                    >Conirm New password</label
                  >
                  <div class="col-sm-6 py-2">
                    <input
                      v-model="data.confirmpassword"
                      type="password"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                  <div class="py-2">
                    <button
                      @click="updateuser"
                      type="button"
                      class="btn btn-primary ms-auto d-block me-3"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import ElementBag from "@/components/small/ElementBag.vue";
import Endpoint from "@/lib/endpoint/main";
import Scripts from "@/core/scripts/Scripts";

export default {
  data() {
    return {
      data: {
        name: "",
        email: "",
        phone: "",
        address: "",
        oldpassword: "",
        newpassword: "",
        confirmpassword: "",
      },
    };
  },
  methods: {
    updateuser() {
      if (!this.data.name || !this.data.email || !this.data.phone) {
        this.$toastMixin.fire({
          icon: "error",
          title: "data con't be null",
        });
      } else {
        let password = this.checkpassword();
        if (password) {
          this.send_update();
        }
      }
    },
    async send_update() {
      console.log("yes");
      let response = await Endpoint.axiosIns.post("auth/updateuser", {
        name: this.data.name,
        email: this.data.email,
        phone: this.data.phone,
        address: this.data.address,
        oldpassword: this.data.oldpassword,
        newpassword: this.data.newpassword,
      });
      if (response.data.status) {
        //
        this.$store.commit("SetUser", response.data.data);
        this.$toastMixin.fire({
          icon: "success",
          title: "data is updated successfuly",
        });
      } else {
        this.$toastMixin.fire({
          icon: "error",
          title: response.data.message[0],
        });
      }
    },
    checkpassword() {
      if (this.data.oldpassword) {
        if (this.data.newpassword) {
          if (this.data.newpassword == this.data.confirmpassword) {
            return true;
          } else {
            this.$toastMixin.fire({
              icon: "error",
              title: "new password and configm should be same",
            });
          }
        } else {
          this.$toastMixin.fire({
            icon: "error",
            title: "new password required",
          });
          return false;
        }
      } else {
        if (this.data.newpassword || this.data.confirmpassword) {
          this.$toastMixin.fire({
            icon: "error",
            title: "old password required",
          });
          return false;
        }
        return true;
      }
    },
  },
  components: {
    NavBar,
    ElementBag,
  },
  async created() {
    this.data.name = this.$store.getters.getuserdata.name;
    this.data.email = this.$store.getters.getuserdata.email;
    this.data.phone = this.$store.getters.getuserdata.phone;
    this.data.address = this.$store.getters.getuserdata.address;
  },
  mounted() {
    Scripts.animationloading(false);
  },
  beforeMount() {
    Scripts.animationloading(true);
  },
};
</script>

<style scoped>
.user {
  font-family: "Sansita", sans-serif;
}
.header-back {
  font-family: var(--font_one);
  background: url("@/assets/background.jpg") center center;
  background-size: cover;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: relative;
  height: 50vh;
}
</style>
