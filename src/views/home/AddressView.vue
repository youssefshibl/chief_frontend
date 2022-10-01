<template>
  <div class="address">
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
                  class="list-group-item list-group-item-action text-center active"
                  aria-current="true"
                >
                  address
                </router-link>
                <router-link
                  to="/user"
                  class="list-group-item list-group-item-action text-center"
                  aria-current="true"
                >
                  user data
                </router-link>
              </div>
            </div>
            <div class="orders-boxs col-12 col-md-9 mx-auto">
              <div class="p-2 border rounded">
                <div class="stepone rounded p-4">
                  <div
                    v-for="address in $store.getters.get_address"
                    :key="address.id"
                    class="form-check p-2 my-2 d-flex justify-content-between align-items-center border rounded"
                  >
                    <div>
                      <label class="form-check-label text-secondary ms-2">
                        <div>
                          {{ address.adress }}
                        </div>
                        <div>
                          {{ address.country }}
                        </div>
                        <div>
                          {{ address.state }}
                        </div>
                        <div>
                          {{ address.Postal_Code }}
                        </div>
                        <div>
                          {{ address.phone }}
                        </div>
                      </label>
                    </div>
                    <div class="ms-2 address-control">
                      <button
                        type="button"
                        class="btn btn-primary d-block"
                        data-bs-toggle="modal"
                        :data-bs-target="'#addresses_modal_' + address.id"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger d-block"
                        @click="delet_address(address.id)"
                      >
                        Delet
                      </button>
                    </div>
                    <AddressModalEdit
                      :id="address.id"
                      :current_address="address"
                    />
                  </div>
                  <div
                    v-if="placholderloading"
                    class="form-check p-2 my-2 border rounded"
                  >
                    <div class="my-4">
                      <div
                        class="placeholder-shebl sh-w-90 sh-h-10 me-auto"
                      ></div>
                      <div
                        class="placeholder-shebl sh-w-80 sh-h-10 me-auto"
                      ></div>
                      <div
                        class="placeholder-shebl sh-w-90 sh-h-10 me-auto"
                      ></div>
                    </div>
                    <div class="my-4">
                      <div
                        class="placeholder-shebl sh-w-90 sh-h-10 me-auto"
                      ></div>
                      <div
                        class="placeholder-shebl sh-w-80 sh-h-10 me-auto"
                      ></div>
                      <div
                        class="placeholder-shebl sh-w-90 sh-h-10 me-auto"
                      ></div>
                      <div class="my-4">
                        <div
                          class="placeholder-shebl sh-w-90 sh-h-10 me-auto"
                        ></div>
                        <div
                          class="placeholder-shebl sh-w-80 sh-h-10 me-auto"
                        ></div>
                        <div
                          class="placeholder-shebl sh-w-90 sh-h-10 me-auto"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="my-2">
                    <button
                      type="button"
                      class="btn btn-danger w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#addresses_modal"
                    >
                      Add New Address
                      <i class="fa-solid fa-location-dot ms-4"></i>
                    </button>
                  </div>

                  <AddressModal />
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
import AddressModal from "@/components/small/AddressModal";
import AddressModalEdit from "@/components/small/AddressModalEdit";
import Endpoint from "@/lib/endpoint/main";
import Scripts from "@/core/scripts/Scripts";

export default {
  data() {
    return {
      placholderloading: true,
    };
  },
  components: {
    NavBar,
    ElementBag,
    AddressModal,
    AddressModalEdit,
  },
  methods: {
    delet_address(address_id) {
      //console.log(address_id);
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.delet_address_request(address_id);
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },
    async delet_address_request(address_id) {
      let response = await Endpoint.gQl(
        `mutation {
                                DeletAddress(address_id: ${address_id}){
                                  address{
                                    id
                                    adress
                                    state
                                    country
                                    Postal_Code
                                  }
                                }
                              }`,
        true
      );
      if ("data" in response.data) {
        this.$store.commit(
          "set_address",
          response.data.data.DeletAddress.address
        );
      }
    },
  },
  async created() {
    let response = await Endpoint.gQl(
      `{

        me{
          id
          name
          email
          address{
            id
            adress
            state
            country
            Postal_Code
            phone
          }
        }
      }`,
      true
    );
    if ("data" in response.data) {
      this.$store.commit("set_address", response.data.data.me.address);
      this.placholderloading = false;
    }
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
.address {
  font-family: "Sansita", sans-serif;
}
.header-back {
  font-family: var(--font_one);
  background: url("@/assets/background.jpg") center center;
  background-size: cover;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: relative;
}
.address-control button {
  width: 75px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.form-check {
  background: white;
}
</style>
