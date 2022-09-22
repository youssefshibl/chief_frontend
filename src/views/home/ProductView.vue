<template>
  <div class="product">
    <ElementBag />
    <div class="header-back">
      <NavBar />
    </div>
    <div class="product-body pt-5 pb-3">
      <div class="container">
        <div v-if="product.data != ''" class="row">
          <div class="col-md-12 col-lg-6 p-2">
            <div class="imgbox sh-w-80 mx-auto">
              <img :src="product.data.image" alt="" />
            </div>
            <div class="small-boxes mt-2 d-flex sh-w-80 mx-auto">
              <div class="small-boxes-img m-2">
                <img :src="product.data.image" alt="" />
              </div>
              <div class="small-boxes-img m-2">
                <img :src="product.data.image" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="p-2 conten-box">
              <h4>
                {{ product.data.name }}
              </h4>
              <span class="text-secondary mt-2 mb-1">description : </span>
              <p>
                {{ product.data.description }}
              </p>
              <div class="mt-2 mb-1">
                <span class="text-secondary">Time take :</span>
                <span class="ms-2">{{ product.data.time_take }} Min</span>
              </div>
              <div class="mt-2 mb-1">
                <span class="text-secondary mt-2 mb-1">Price :</span>
                <span class="mx-2">{{ totalprice }} </span>
                <span class="text-danger">EGP</span>
              </div>
            </div>
            <div class="make-order">
              <div class="item-numbers">
                <button @click="dec_order()">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <g fill="none" fill-rule="evenodd">
                      <g fill="#94A8BE" fill-rule="nonzero">
                        <g>
                          <g>
                            <path
                              d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3 11H7c-.552 0-1-.448-1-1s.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1z"
                              transform="translate(-747 -551) translate(737 537) translate(10 14)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <input type="text" v-model="order.number" />
                <button @click="inc_order()">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <g fill="none" fill-rule="evenodd">
                      <g fill="#94A8BE" fill-rule="nonzero">
                        <g>
                          <g>
                            <path
                              d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm4 11h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3H6c-.6 0-1-.4-1-1s.4-1 1-1h3V6c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1s-.4 1-1 1z"
                              transform="translate(-812 -551) translate(737 537) translate(75 14)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <button @click="addtocard" class="btn btn-danger ms-2">
                <span class="mx-3">Add to cart</span>

                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M 11.984375 0.98632812 A 1.0001 1.0001 0 0 0 11 2 L 11 4 L 9 4 A 1.0001 1.0001 0 1 0 9 6 L 11 6 L 11 8 A 1.0001 1.0001 0 1 0 13 8 L 13 6 L 15 6 A 1.0001 1.0001 0 1 0 15 4 L 13 4 L 13 2 A 1.0001 1.0001 0 0 0 11.984375 0.98632812 z M 3.0722656 2.0039062 L 2 2.0136719 A 1.0001 1.0001 0 1 0 2.0175781 4.0136719 L 3.0839844 4.0039062 L 3.0859375 4.0039062 L 6.3476562 11.833984 A 1.0001 1.0001 0 0 0 6.3359375 11.978516 L 5.1816406 13.822266 C 4.3432895 15.161013 5.3626785 17 6.9414062 17 L 18 17 A 1.0001 1.0001 0 1 0 18 15 L 6.9414062 15 C 6.8301342 15 6.8173041 14.978071 6.8769531 14.882812 L 8.0527344 13 L 15.521484 13 C 16.246284 13 16.917475 12.604805 17.269531 11.970703 L 21.382812 4.5664062 A 1.0001 1.0001 0 0 0 20.507812 3.0683594 A 1.0001 1.0001 0 0 0 19.634766 3.5957031 L 15.521484 11 L 8.1660156 11 L 4.9316406 3.2324219 C 4.6203684 2.4861666 3.8821872 1.9999163 3.0742188 2.0039062 L 3.0722656 2.0039062 z M 7 18 A 2 2 0 0 0 5 20 A 2 2 0 0 0 7 22 A 2 2 0 0 0 9 20 A 2 2 0 0 0 7 18 z M 17 18 A 2 2 0 0 0 15 20 A 2 2 0 0 0 17 22 A 2 2 0 0 0 19 20 A 2 2 0 0 0 17 18 z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div v-if="product.data == ''" class="row">
          <div class="col-md-12 col-lg-6 p-2">
            <div class="imgbox sh-w-80 mx-auto">
              <img
                class="image-card-plachoder"
                src="https://media.istockphoto.com/photos/grilled-spam-burger-with-fries-picture-id1365382318?b=1&k=20&m=1365382318&s=170667a&w=0&h=L7vIkUBi8IjxkDv1Ca5xSbYLAxR1zI__wrBacQzY18g="
                alt=""
              />
            </div>
            <div class="small-boxes mt-2 d-flex sh-w-80 mx-auto">
              <div class="small-boxes-img m-2">
                <img
                  class="image-card-plachoder"
                  src="https://media.istockphoto.com/photos/grilled-spam-burger-with-fries-picture-id1365382318?b=1&k=20&m=1365382318&s=170667a&w=0&h=L7vIkUBi8IjxkDv1Ca5xSbYLAxR1zI__wrBacQzY18g="
                  alt=""
                />
              </div>
              <div class="small-boxes-img m-2">
                <img
                  class="image-card-plachoder"
                  src="https://media.istockphoto.com/photos/grilled-spam-burger-with-fries-picture-id1365382318?b=1&k=20&m=1365382318&s=170667a&w=0&h=L7vIkUBi8IjxkDv1Ca5xSbYLAxR1zI__wrBacQzY18g="
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="p-2 conten-box">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
                <span class="placeholder w-25"></span>
                <span class="placeholder w-80"></span>
                <span class="placeholder w-30"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
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
      product: {
        data: "",
      },
      order: {
        number: 1,
      },
    };
  },
  components: {
    NavBar,
    ElementBag,
  },
  computed: {
    totalprice() {
      if (this.order.number == 1) {
        return this.product.data.price;
      } else {
        return Number(this.product.data.price) * this.order.number;
      }
    },
  },
  methods: {
    async get_product_data() {
      let name_product = this.$route.params.name;
      let response = await Endpoint.gQl(`{
                            menu(name:"${name_product}"){
                                id
                                name
                                description
                                image
                                price
                                time_take
                                starts
                                category_id
                                category{
                                id
                                name
                                }
                            }
                            }`);
      if ("data" in response.data) {
        this.product.data = response.data.data.menu;
        document.querySelector('[data-bs-toggle="offcanvas"]').click();
      }
    },
    inc_order() {
      this.order.number++;
    },
    dec_order() {
      if (this.order.number > 1) {
        this.order.number--;
      }
    },
    async addtocard() {
      if (Scripts.isauth_isdata()) {
        let response = await Endpoint.gQl(
          `mutation {
           CreateOrder(input: {menu_id: ${Number(
             this.product.data.id
           )}, number:${this.order.number}}) {
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
                          }`,
          true
        );
        if ("data" in response.data) {
          this.$toastMixin.fire({
            animation: true,
            icon: "success",
            title: "Add to card Sucess",
          });
          this.$store.commit("set_new_order", response.data.data.CreateOrder);
        }
      } else {
        this.$toastMixin.fire({
          animation: true,
          icon: "error",
          title: "You should login first",
        });
      }
    },
  },
  async beforeMount() {
    this.get_product_data();
  },
};
</script>

<style>
.product {
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
.header-back::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.288);
  z-index: -1;
}
.product-body {
  background: #f5f7f9;
}

.imgbox {
  border-radius: 5px;
  overflow: hidden;
  height: 400px;
}
.imgbox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.small-boxes-img {
  width: 60px;
  height: 60px;
  border-radius: 3px;
  overflow: hidden;
}
.small-boxes-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item-numbers {
  padding: 5px;
  border: 1px solid rgb(186, 199, 213);
  display: flex;
  border-radius: 4px;
  width: 150px;
}

.item-numbers button {
  border: none;
  background: transparent;
  width: 30%;
}
.item-numbers input {
  width: 40%;
  border: navajowhite;
  background: transparent;
  text-align: center;
}
.make-order {
  display: flex;
}
.image-card-plachoder {
  filter: blur(7px);
}
</style>
