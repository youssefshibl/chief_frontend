<template>
  <div
    class="modal fade modal-addrress"
    id="addresses_modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Address</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="style.alert1" class="alert alert-danger" role="alert">
            You should fill all field
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Addrres in Arabic</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="address.address"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Country</label>
            <select
              v-model="address.country"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected value="egypt">Egypt</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">State</label>
            <select
              v-model="address.state"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected value="egypt">Egypt</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Phone</label>
            <input
              v-model="address.phone"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Postal_Code</label
            >
            <input
              v-model="address.postal_code"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="add_address">
            Add New Address
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Endpoint from "@/lib/endpoint/main";
import Scripts from "@/core/scripts/Scripts";
export default {
  data() {
    return {
      address: {
        address: "",
        country: "",
        state: "",
        phone: "",
        postal_code: "",
      },
      style: {
        alert1: false,
      },
    };
  },
  methods: {
    async add_address() {
      if (
        this.address.address == "" ||
        this.address.country == "" ||
        this.address.state == "" ||
        this.address.phone == "" ||
        this.address.postal_code == ""
      ) {
        this.style.alert1 = true;
      } else {
        Scripts.animationloading(true);
        let response = await Endpoint.gQl(
          `mutation {
  AddAddress(
    input: {country: "${this.address.country}", phone: "${this.address.phone}", adress: "${this.address.address}", state: "${this.address.state}", Postal_Code: "${this.address.postal_code}"}
  ) {
    address {
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
          Scripts.animationloading(false);
          this.$toastMixin.fire({
            icon: "success",
            title: "New address is added ",
          });
          this.$store.commit(
            "set_address",
            response.data.data.AddAddress.address
          );
          this.address.address = "";
          this.address.country = "";
          this.address.state = "";
          this.address.phone = "";
          this.address.postal_code = "";
        }
      }
    },
  },
};
</script>

<style scoped>
.modal-addrress {
  font-family: "Sansita", sans-serif;
}
</style>
