<template>
  <div>
    <div class="nav-checkout">
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <router-link
              to="/home"
              class="navbar-brand logo d-flex align-items-center"
            >
              <img src="@/assets/logo1.png" alt="" />
              <h4 class="text-secondary p-1">{{ $t("message.hello") }}</h4>
            </router-link>

            <div
              class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x"
              data-v-07a1f031=""
            >
              <div class="step step1 completed" data-v-07a1f031="">
                <div class="step-icon-wrap" data-v-07a1f031="">
                  <div class="step-icon" data-v-07a1f031="">
                    <i class="pe-7s-cart" data-v-07a1f031=""></i>
                  </div>
                </div>
                <h4 class="step-title" data-v-07a1f031="">Confirmed Order</h4>
              </div>
              <div class="step step2" data-v-07a1f031="">
                <div class="step-icon-wrap" data-v-07a1f031="">
                  <div class="step-icon" data-v-07a1f031="">
                    <i class="pe-7s-config" data-v-07a1f031=""></i>
                  </div>
                </div>
                <h4 class="step-title" data-v-07a1f031="">Processing Order</h4>
              </div>
              <div class="step step3" data-v-07a1f031="">
                <div class="step-icon-wrap" data-v-07a1f031="">
                  <div class="step-icon" data-v-07a1f031="">
                    <i class="pe-7s-medal" data-v-07a1f031=""></i>
                  </div>
                </div>
                <h4 class="step-title" data-v-07a1f031="">Quality Check</h4>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="body-checkout mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <h4 class="text-center bg-primary text-light p-1 rounded">
              Your Orders
            </h4>
            <div
              v-if="!orders.placeholder.is"
              class="order-boxs p-4 border rounded"
            >
              <div
                v-for="item in $store.getters.get_orders"
                :key="item.id"
                class="order-box py-2"
              >
                <div class="top-part">
                  <div class="content">
                    <div class="img-box">
                      <img :src="item.menu.image" alt="" />
                    </div>
                    <div class="discription-price">
                      <h5>{{ item.menu.name }}</h5>
                      <span class="text-danger fw-bold"
                        >{{ item.number }} x {{ item.menu.price }} EGP</span
                      >
                      <span class="text-danger fw-bold"
                        >Total :
                        {{ Number(item.number) * Number(item.menu.price) }}
                        EGP</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="!orders.placeholder.is"
              class="text-center bg-danger text-light d-flex p-2 mt-2 justify-content-between rounded"
            >
              <span>total : </span>
              <span>{{ $store.getters.get_total_price }} EGP</span>
            </div>
            <div
              v-if="orders.placeholder.is"
              class="order-boxs p-4 border rounded"
            >
              <div
                v-for="item in orders.placeholder.number"
                :key="item"
                class="order-box py-2"
              >
                <div class="top-part">
                  <div class="content">
                    <div class="img-box placeholder">
                      <img
                        src="https://media.istockphoto.com/photos/grilled-spam-burger-with-fries-picture-id1365382318?b=1&k=20&m=1365382318&s=170667a&w=0&h=L7vIkUBi8IjxkDv1Ca5xSbYLAxR1zI__wrBacQzY18g="
                        alt=""
                      />
                    </div>
                    <div class="discription-price placeholder-glow">
                      <h5 class="placeholder w-100 rounded p-4"></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 border-start">
            <div
              v-if="!$store.getters.get_verified_state"
              class="not-verified-box"
            >
              <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Your can't go!</h4>
                <p>
                  You should verified you email to chack that this order is
                  seriesly check your email or send other message to email
                </p>
                <hr />
                <p class="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </p>
              </div>
            </div>
            <div class="steps p-2">
              <div
                v-if="operation.current.number == 1"
                class="stepone rounded p-4"
              >
                <div class="form-check p-2 ms-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="operation.one.input"
                    id="flexCheckIndeterminate"
                  />
                  <label class="form-check-label" for="flexCheckIndeterminate">
                    the inforamtion of order is right
                  </label>
                </div>
                <div class="mt-3 mb-2 d-flex">
                  <button
                    @click="operation_one(2)"
                    type="button "
                    class="btn btn-primary d-block ms-auto"
                  >
                    Next
                    <i class="ms-2 fa-solid fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
              <div
                v-if="operation.current.number == 2"
                class="stepone rounded p-4"
              >
                <div
                  v-for="address in $store.getters.get_address"
                  :key="address.id"
                  class="form-check p-2 ms-3 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      v-model="operation.two.input"
                      :value="address.id"
                      :id="'flexCheckIndeterminate' + address.id"
                    />
                    <label
                      class="form-check-label text-secondary"
                      :for="'flexCheckIndeterminate' + address.id"
                    >
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
                <div class="mt-3 mb-2 d-flex justify-content-between">
                  <button
                    @click="operation_one(1)"
                    type="button "
                    class="btn btn-danger"
                  >
                    Return
                    <i class="fa-solid fa-arrow-left-long"></i>
                  </button>
                  <button
                    @click="operation_two(3)"
                    type="button "
                    class="btn btn-primary"
                  >
                    Next
                    <i class="ms-2 fa-solid fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
              <div
                class="stepone rounded p-4"
                v-show="operation.current.number == 3"
              >
                <h4 class="text-center p-2 text-secondary">Payment</h4>
                <div class="form-check p-2 ms-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="operation.three.input"
                    id="payment_inhome"
                    value="inhome"
                  />
                  <label
                    class="form-check-label text-secondary"
                    for="payment_inhome"
                  >
                    Payment when order reach
                    <i class="ms-2 fa-solid fa-house-chimney"></i>
                  </label>
                </div>
                <div class="form-check p-2 ms-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="operation.three.input"
                    id="payment_visa"
                    value="visa"
                  />
                  <label
                    class="form-check-label text-secondary"
                    for="payment_visa"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Payment with Visa Card
                    <i class="ms-2 fa-brands fa-cc-visa"></i>
                  </label>
                </div>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    <div class="pb-3">
                      <div class="p-2 text-secondary">
                        <h5>don't warry the card number not send to server</h5>
                      </div>
                      <div class="p-2 border rounded">
                        <div id="card-element_payment"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-3 mb-2 d-flex justify-content-between">
                  <button
                    @click="operation_two(2)"
                    type="button "
                    class="btn btn-danger"
                  >
                    Return
                    <i class="fa-solid fa-arrow-left-long"></i>
                  </button>
                  <button
                    @click="checkpayment"
                    type="button "
                    class="btn btn-primary"
                  >
                    <span
                      v-if="paymentProcessing"
                      class="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>

                    <span v-text="paymentProcessing ? 'Processing' : 'Pay Now'">
                    </span>
                  </button>
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
import Endpoint from "@/lib/endpoint/main";
import script from "@/core/scripts/Scripts";
import AddressModal from "@/components/small/AddressModal";
import AddressModalEdit from "@/components/small/AddressModalEdit";
import { loadStripe } from "@stripe/stripe-js";
export default {
  data() {
    return {
      stripe: {},
      cardElement: {},
      customer: {},
      paymentProcessing: false,
      orders: {
        placeholder: {
          number: 2,
          is: true,
        },
      },
      operation: {
        one: {
          input: false,
        },
        two: {
          input: null,
        },
        three: {
          input: null,
        },
        current: {
          number: 1,
        },
      },
    };
  },
  methods: {
    operation_one(number) {
      if (this.operation.one.input) {
        this.change_navsteps(number);
      } else {
        this.$toastMixin.fire({
          icon: "error",
          title: "choose yes in order",
        });
      }
    },
    operation_two(number) {
      if (this.operation.two.input) {
        this.change_navsteps(number);
      } else {
        this.$toastMixin.fire({
          icon: "error",
          title: "choose your address",
        });
      }
    },
    operation_three(number) {
      if (this.operation.three.input) {
        this.change_navsteps(number);
      } else {
        this.$toastMixin.fire({
          icon: "error",
          title: "choose your payment method",
        });
      }
    },
    change_navsteps(number) {
      this.operation.current.number = number;
      let all_steps = document.querySelectorAll(".step");
      all_steps.forEach(function (item) {
        item.classList.remove("completed");
      });
      for (let x = 1; x < number + 1; x++) {
        let elem_ = document.querySelector(".step.step" + String(x));
        elem_.classList.add("completed");
      }
    },
    delet_address(address_id) {
      console.log(address_id);
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
    async checkpayment() {
      if (this.operation.three.input) {
        this.processPayment();
      } else {
        this.$toastMixin.fire({
          icon: "error",
          title: "choose your payment method",
        });
      }
    },
    async processPayment() {
      this.paymentProcessing = true;
      if (this.operation.three.input == "inhome") {
        //
        let response = await Endpoint.axiosIns.post("payment/payment_process", {
          address_id: this.operation.two.input,
          payment_method: "inhome",
        });

        if (response.data.status) {
          this.paymentProcessing = false;
          this.$toastMixin.fire({
            icon: "success",
            title: "ordar will reach to you soon ",
          });
          this.$router.push({
            name: "orders",
          });
        } else {
          this.paymentProcessing = false;
          this.$toastMixin.fire({
            icon: "error",
            title: response.data.message,
          });
        }
      } else if (this.operation.three.input == "visa") {
        console.log("visa");
        let user = this.$store.getters.getuserdata;
        const { paymentMethod, error } = await this.stripe.createPaymentMethod(
          "card",
          this.cardElement,
          {
            billing_details: {
              name: user.name,
              email: user.email,
            },
          }
        );
        if (error) {
          this.paymentProcessing = false;
          console.error(error);
          this.$toastMixin.fire({
            icon: "error",
            title: error.message,
          });
        } else {
          let response = await Endpoint.axiosIns.post(
            "payment/payment_process",
            {
              address_id: this.operation.two.input,
              payment_method: "visa",
              payment_method_id: paymentMethod.id,
            }
          );

          if (response.data.status) {
            this.paymentProcessing = false;
            this.$toastMixin.fire({
              icon: "success",
              title: "ordar will reach to you soon ",
            });
            this.$router.push({
              name: "orders",
            });
          } else {
            this.paymentProcessing = false;
            this.$toastMixin.fire({
              icon: "error",
              title: "sorry there are error unknown ",
            });
          }
        }
      }
    },
  },
  async created() {
    let response = await Endpoint.gQl(
      `{
        myorders {
          id
          number
          menu {
            id
            name
            description
            image
            price
            starts
          }
        }
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
      this.$store.commit("setorders", response.data.data.myorders);
      this.$store.commit("set_address", response.data.data.me.address);
      this.orders.placeholder.is = false;
    }
  },
  async mounted() {
    script.animationloading(false);
    let stripe_key = (await Endpoint.axiosIns("payment/stripe_key")).data
      .stripe_key;
    this.stripe = await loadStripe(stripe_key);
    var style = {
      base: {
        // Add your base input styles here. For example:
        fontWeight: "500",
        fontSize: "16px",
        fontSmoothing: "antialiased",
      },
    };
    const elements = this.stripe.elements();
    this.cardElement = elements.create("card", { style: style });
    this.cardElement.mount("#card-element_payment");
  },
  beforeMount() {
    script.animationloading(true);
  },
  components: {
    AddressModal,
    AddressModalEdit,
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css");
.nav-checkout {
  font-family: "Sansita", sans-serif;
}
.body-checkout {
  font-family: "Sansita", sans-serif;
}
.nav-checkout {
  background-color: #f8f9fa;
}
.logo img {
  width: 50px;
}
body {
  margin-top: 20px;
}
.navbar-brand {
  flex-grow: 1;
}
.steps .step {
  display: block;
  width: 100%;
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
}

.steps .step .step-icon-wrap {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
}
.steps {
  flex-grow: 2;
}
.steps .step .step-icon-wrap::before,
.steps .step .step-icon-wrap::after {
  display: block;
  position: absolute;
  top: 50%;
  width: 50%;
  height: 3px;
  margin-top: -1px;
  background-color: #e1e7ec;
  content: "";
  z-index: 1;
}

.steps .step .step-icon-wrap::before {
  left: 0;
}

.steps .step .step-icon-wrap::after {
  right: 0;
}

.steps .step .step-icon {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid #e1e7ec;
  border-radius: 50%;
  background-color: #f5f5f5;
  color: #374250;
  z-index: 5;
  font-size: 35px;
}

.steps .step .step-title {
  margin-top: 16px;
  margin-bottom: 0;
  color: #606975;
  font-size: 14px;
  font-weight: 500;
}

.steps .step:first-child .step-icon-wrap::before {
  display: none;
}

.steps .step:last-child .step-icon-wrap::after {
  display: none;
}

.steps .step.completed .step-icon-wrap::before,
.steps .step.completed .step-icon-wrap::after {
  background-color: #0da9ef;
}

.steps .step.completed .step-icon {
  border-color: #0da9ef;
  background-color: #0da9ef;
  color: #fff;
}

@media (max-width: 576px) {
  .flex-sm-nowrap .step .step-icon-wrap::before,
  .flex-sm-nowrap .step .step-icon-wrap::after {
    display: none;
  }
}

@media (max-width: 768px) {
  .flex-md-nowrap .step .step-icon-wrap::before,
  .flex-md-nowrap .step .step-icon-wrap::after {
    display: none;
  }
}

@media (max-width: 991px) {
  .flex-lg-nowrap .step .step-icon-wrap::before,
  .flex-lg-nowrap .step .step-icon-wrap::after {
    display: none;
  }
}

@media (max-width: 1200px) {
  .flex-xl-nowrap .step .step-icon-wrap::before,
  .flex-xl-nowrap .step .step-icon-wrap::after {
    display: none;
  }
}

.bg-faded,
.bg-secondary,
.stepone {
  background-color: #f5f5f5 !important;
}
.order-boxs {
  overflow-y: auto;
  padding-right: 10px;
  flex: 1 1 auto;
  background: #f8f9fa;
}
.top-part {
  display: flex;
  justify-content: space-between;
}
.top-part .content {
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
}
.top-part .content .img-box {
  width: 72px;
  height: 72px;
  border-radius: 5px;
  overflow: hidden;
}
.top-part .content .img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.top-part .content .discription-price {
  flex-grow: 1;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-part .content .discription-price span {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.img-box.placeholder img {
  filter: blur(7px);
}
.address-control button {
  width: 75px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
