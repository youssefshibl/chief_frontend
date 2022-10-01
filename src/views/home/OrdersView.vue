<template>
  <div class="orders">
    <div class="reloadorders" ref="reloaddata" @click="reloaddata">
      <i class="fa-solid fa-rotate-right"></i>
    </div>
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
                  class="list-group-item list-group-item-action active text-center"
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
                  class="list-group-item list-group-item-action text-center"
                  aria-current="true"
                >
                  user data
                </router-link>
              </div>
            </div>
            <div class="orders-boxs col-12 col-md-9 mx-auto">
              <div class="order-box-all my-1">
                <div class="order-box rounded border p-2 row mx-auto">
                  <div class="col-12 col-md-3 text-center">number</div>
                  <div class="col-12 col-md-3 text-center">price</div>
                  <div class="col-12 col-md-3 text-center">item number</div>
                  <div class="col-12 col-md-3 text-center">payment state</div>
                </div>
              </div>
              <div class="placholder-box">
                <div
                  v-if="orderanimation"
                  class="order-box rounded border p-2 row my-2 mx-auto"
                >
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                </div>
                <div
                  v-if="orderanimation"
                  class="order-box rounded border p-2 row my-2 mx-auto"
                >
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                </div>
                <div
                  v-if="orderanimation"
                  class="order-box rounded border p-2 row my-2 mx-auto"
                >
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                </div>
                <div
                  v-if="orderanimation"
                  class="order-box rounded border p-2 row my-2 mx-auto"
                >
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                    <div class="placeholder-shebl sh-w-80 sh-h-20"></div>
                  </div>
                </div>
              </div>
              <template v-if="!orderanimation">
                <div
                  v-for="(ordercollection, index) in $store.getters
                    .get_ordercollections"
                  :key="ordercollection.id"
                >
                  <div
                    class="order-box rounded border row my-2 mx-auto p-2"
                    data-bs-toggle="collapse"
                    :href="'#collapseExample' + index"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <div class="col-12 col-md-3 text-center">
                      {{ index + 1 }}
                    </div>
                    <div class="col-12 col-md-3 text-center">
                      <span class="text-danger"
                        >{{ ordercollection.payment.value }} EGP</span
                      >
                    </div>
                    <div class="col-12 col-md-3 text-center">
                      {{
                        $store.getters.get_orders_num_in_ordercollectin(
                          ordercollection.id
                        )
                      }}
                    </div>
                    <div class="col-12 col-md-3 text-center">
                      {{ ordercollection.payment_method }}
                      <i
                        v-if="ordercollection.payment_method == 'visa'"
                        class="fa-regular fa-credit-card ms-2"
                      ></i>
                      <i v-else class="fa-solid fa-house-crack ms-2"></i>
                    </div>
                  </div>
                  <div class="collapse" :id="'collapseExample' + index">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-12 col-md-6 mt-2 p-2">
                          <div class="border rounded py-1 px-3">
                            <div
                              v-for="order in ordercollection.orders"
                              :key="order.id"
                              class="d-flex my-1 justify-content-between align-items-center"
                            >
                              <div class="d-flex align-items-center">
                                <div class="img-box me-2">
                                  <img :src="order.menu.image" alt="" />
                                </div>
                                <div>{{ order.menu.name }}</div>
                              </div>
                              <div class="d-flex align-items-center">
                                <div>{{ order.number }}</div>
                                <div class="mx-1">x</div>
                                <div>{{ order.menu.price }} EGP</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="m-2 rounded border p-2">
                            <h5 class="text-center">payment information</h5>
                            <div class="my-2 d-flex justify-content-between">
                              <div>method of paymet</div>
                              <div>total price</div>
                              <div>payment done</div>
                            </div>
                            <div
                              class="mb-1 d-flex justify-content-around text-center"
                            >
                              <div>{{ ordercollection.payment_method }}</div>
                              <div>{{ ordercollection.payment.value }} EGP</div>
                              <div>
                                {{
                                  ordercollection.payment.status == "0"
                                    ? "No"
                                    : "Yes"
                                }}
                              </div>
                            </div>
                          </div>
                          <div class="m-2 rounded border p-2">
                            <h5 class="text-center">order information</h5>
                            <div class="m-2">
                              <div class="p-1">
                                <span>stared :</span>
                                <!-- <div v-if="ordercollection.started == '1'">
                                  is one
                                </div> -->
                                <span
                                  v-if="Number(ordercollection.started) == 1"
                                >
                                  <li
                                    class="fa-solid fa-circle-check ms-2 text-success"
                                  ></li>
                                </span>
                                <span v-else>
                                  <li
                                    class="fa-solid fa-circle-xmark ms-2 text-danger"
                                  ></li>
                                </span>
                              </div>
                              <div class="p-1">
                                <span>finished :</span>
                                <span
                                  v-if="Number(ordercollection.finished) == 1"
                                >
                                  <li
                                    class="fa-solid fa-circle-check ms-2 text-success"
                                  ></li>
                                </span>
                                <span v-else>
                                  <li
                                    class="fa-solid fa-circle-xmark ms-2 text-danger"
                                  ></li>
                                </span>
                              </div>
                              <div class="p-1">
                                <span>in_way :</span>
                                <span
                                  v-if="Number(ordercollection.in_way) == 1"
                                >
                                  <li
                                    class="fa-solid fa-circle-check ms-2 text-success"
                                  ></li>
                                </span>
                                <span v-else>
                                  <li
                                    class="fa-solid fa-circle-xmark ms-2 text-danger"
                                  ></li>
                                </span>
                              </div>
                              <div class="p-1">
                                <span>completed :</span>
                                <span
                                  v-if="Number(ordercollection.completed) == 1"
                                >
                                  <li
                                    class="fa-solid fa-circle-check ms-2 text-success"
                                  ></li>
                                </span>
                                <span v-else>
                                  <li
                                    class="fa-solid fa-circle-xmark ms-2 text-danger"
                                  ></li>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="m-2 rounded border p-2">
                            <h5 class="text-center">address information</h5>
                            <div class="m-2">
                              <label class="form-check-label text-secondary">
                                <div>
                                  {{
                                    JSON.parse(ordercollection.address).adress
                                  }}
                                </div>
                                <div>
                                  {{
                                    JSON.parse(ordercollection.address).country
                                  }}
                                </div>
                                <div>
                                  {{
                                    JSON.parse(ordercollection.address).state
                                  }}
                                </div>
                                <div>
                                  {{
                                    JSON.parse(ordercollection.address)
                                      .Postal_Code
                                  }}
                                </div>
                                <div>
                                  {{
                                    JSON.parse(ordercollection.address).phone
                                  }}
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import Endpoint from "@/lib/endpoint/main";
import ElementBag from "@/components/small/ElementBag.vue";
import Scripts from "@/core/scripts/Scripts";

export default {
  data() {
    return {
      orderanimation: true,
    };
  },
  computed: {},
  components: {
    NavBar,
    ElementBag,
  },
  methods: {
    async fetchdata() {
      let response = await Endpoint.gQl(
        `{
                    ordercollection {
                        id
                        makeed
                        started
                        in_way
                        finished
                        canceled
                        completed
                        address
                        payment_method
                        payment_id
                        orders {
                        id
                        payment_method
                        number
                        menu {
                            id
                            name
                            image
                            price
                        }
                        }
                        payment {
                        id
                        value
                        payment_method
                        status
                        }
                    }
                    }`,
        true
      );
      if ("data" in response.data) {
        //

        this.$store.commit(
          "set_ordercollection",
          response.data.data.ordercollection
        );

        this.orderanimation = false;
      }
    },
    async reloaddata() {
      //console.log("done");
      this.$refs.reloaddata.style.animationPlayState = "running";
      await this.fetchdata();
      this.$refs.reloaddata.style.animationPlayState = "paused";
    },
  },
  created() {
    this.fetchdata();
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
.orders {
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
.ordercollection {
  background-color: #f5f7f9;
}
.order-box {
  background-color: white;
}
.img-box {
  width: 50px;
  height: 50px;
  border-radius: 3px;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.reloadorders {
  position: fixed;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e84e47;
  color: white;
  border-radius: 50%;
  font-size: 20px;
  right: 20px;
  bottom: 20px;
  z-index: 2;
  cursor: pointer;
  animation-name: loading-spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
