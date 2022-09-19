<template>
  <div class="menu">
    <div class="header-back">
      <NavBar />
      <div class="text-home-pro d-flex align-items-center">
        <div class="container my-auto text-light">
          <div class="text-center fs-1">{{ $t("message.menu_main_word") }}</div>
        </div>
      </div>
    </div>
    <div class="menufilter py-4">
      <div class="container">
        <div
          class="btn btn-danger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop"
          aria-controls="staticBackdrop"
        >
          <svg width="17" height="16" viewBox="0 0 17 16">
            <path
              fill="currentColor"
              d="M7.2 0C6.159 0 5.278.671 4.947 1.6H1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397h3.347c.331.929 1.212 1.6 2.253 1.6 1.323 0 2.4-1.077 2.4-2.4S8.523 0 7.2 0zM12 1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397h4c.289.004.557-.148.702-.397.146-.249.146-.557 0-.806-.145-.25-.413-.401-.702-.397h-4zm-.8 4c-1.041 0-1.922.671-2.253 1.6H1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397h7.347c.331.929 1.212 1.6 2.253 1.6 1.323 0 2.4-1.077 2.4-2.4s-1.077-2.4-2.4-2.4zM16 7.2c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397.289.004.557-.148.702-.397.146-.249.146-.557 0-.806-.145-.25-.413-.401-.702-.397zm-11.2 4c-1.041 0-1.922.671-2.253 1.6H1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397h.947c.331.929 1.212 1.6 2.253 1.6 1.323 0 2.4-1.077 2.4-2.4s-1.077-2.4-2.4-2.4zm4.8 1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397H16c.289.004.557-.148.702-.397.146-.249.146-.557 0-.806-.145-.25-.413-.401-.702-.397H9.6z"
            ></path>
          </svg>
          <span class="ms-2">filter</span>
        </div>
        <div
          class="offcanvas offcanvas-start"
          data-bs-backdrop="static"
          tabindex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="staticBackdropLabel">
              <svg width="17" height="16" viewBox="0 0 17 16">
                <path
                  fill="currentColor"
                  d="M7.2 0C6.159 0 5.278.671 4.947 1.6H1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397h3.347c.331.929 1.212 1.6 2.253 1.6 1.323 0 2.4-1.077 2.4-2.4S8.523 0 7.2 0zM12 1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397h4c.289.004.557-.148.702-.397.146-.249.146-.557 0-.806-.145-.25-.413-.401-.702-.397h-4zm-.8 4c-1.041 0-1.922.671-2.253 1.6H1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397h7.347c.331.929 1.212 1.6 2.253 1.6 1.323 0 2.4-1.077 2.4-2.4s-1.077-2.4-2.4-2.4zM16 7.2c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397.289.004.557-.148.702-.397.146-.249.146-.557 0-.806-.145-.25-.413-.401-.702-.397zm-11.2 4c-1.041 0-1.922.671-2.253 1.6H1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397h.947c.331.929 1.212 1.6 2.253 1.6 1.323 0 2.4-1.077 2.4-2.4s-1.077-2.4-2.4-2.4zm4.8 1.6c-.289-.004-.557.148-.702.397-.146.249-.146.557 0 .806.145.25.413.401.702.397H16c.289.004.557-.148.702-.397.146-.249.146-.557 0-.806-.145-.25-.413-.401-.702-.397H9.6z"
                ></path>
              </svg>
              <span class="ms-2">filter</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="py-3 border-bottom">
              <span>Category : </span>
              <select
                class="form-select d-inline-block w-50 ms-3"
                aria-label="Default select example"
                v-model="menu.filter.category"
              >
                <option value="all">All</option>
                <option
                  v-for="category in $store.getters.getcategory"
                  :value="category.name"
                  :key="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div class="py-3 border-bottom">
              <span>Filter by price</span>
              <div
                class="mt-2 d-flex justify-content-between align-items-center"
              >
                <div class="input-group sh-w-40">
                  <span class="input-group-text" id="basic-addon1">EGP</span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Min"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    v-model="menu.filter.price.from"
                    min="0"
                    :max="menu.filter.price.to - 10"
                  />
                </div>
                <div>To</div>
                <div class="input-group sh-w-40">
                  <span class="input-group-text" id="basic-addon1">EGP</span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Max"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    :min="menu.filter.price.from + 10"
                    v-model="menu.filter.price.to"
                  />
                </div>
              </div>
            </div>
            <div>
              <!-- <div class="btn btn-danger mt-2" @click="filtermenu">Filter</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menubody">
      <div class="container">
        <div class="menu-elements">
          <div
            v-for="element in datamenu"
            :key="element.id"
            class="card m-3 card-element"
            style="width: 18rem"
            role="button"
          >
            <img
              @click="redirect_to_element(element.name)"
              :src="element.image"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="d-flex" @click="redirect_to_element(element.name)">
                <h5 class="card-title">{{ element.name }}</h5>
                <p class="ms-auto text-danger">EGP {{ element.price }}</p>
              </div>
              <p class="card-text" @click="redirect_to_element(element.name)">
                {{ element.description.split(" ").slice(1, 15).join(" ") }}
              </p>
              <button @click="addtocard(element.id)" class="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
          <template v-if="menu.data.length == 0">
            <div
              v-for="n in menu.style.placeholdersnumbers"
              :key="n"
              class="card m-3 card-element"
              style="width: 18rem"
              role="button"
            >
              <img
                src="https://media.istockphoto.com/photos/grilled-spam-burger-with-fries-picture-id1365382318?b=1&k=20&m=1365382318&s=170667a&w=0&h=L7vIkUBi8IjxkDv1Ca5xSbYLAxR1zI__wrBacQzY18g="
                class="card-img-top image-card-plachoder"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  tabindex="-1"
                  class="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <ElementBag />
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
      menu: {
        data: [],
        style: {
          placeholdersnumbers: 9,
        },
        filter: {
          category: "all",
          price: {
            from: 0,
            to: 500,
          },
        },
      },
    };
  },
  components: {
    NavBar,
    ElementBag,
  },
  methods: {
    async get_menu_data() {
      let response = await Endpoint.gQl(
        `{
                        menus {
                          id
                          name
                          description
                          image
                          price
                          starts
                          category{
                            id
                            name
                          }
                        }
                        categoryies {
                          name
                          id
                        }
                      }`
      );
      if ("data" in response.data) {
        //console.log("yes");
        this.menu.data = response.data.data.menus;
        //console.log(response.data.data.categoryies);
        this.$store.commit("setcategory", response.data.data.categoryies);
      }
      //console.log(response.data);
    },
    async addtocard(id) {
      // console.log(id);
      if (Scripts.isauth_isdata()) {
        let response = await Endpoint.gQl(
          `mutation {
           CreateOrder(input: {menu_id: ${Number(id)}, number:1}) {
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
    async filtermenu() {},
    redirect_to_element(nameproduct) {
      this.$router.push({
        name: "product",
        params: {
          name: nameproduct,
        },
      });
    },
  },
  async mounted() {
    this.get_menu_data();
  },
  computed: {
    datamenu() {
      let category = this.menu.filter.category;
      let min_price = Number(this.menu.filter.price.from);
      let max_price = Number(this.menu.filter.price.to);
      let filterd_data = this.menu.data.filter(function (item) {
        let category_filter = category == "all" ? true : false;
        let price = Number(item.price);
        let price_filter = price >= min_price && price <= max_price;
        return (
          (category_filter ? true : item.category.name == category) &&
          price_filter
        );
      });
      return filterd_data;
    },
  },
};
</script>

<style scoped>
.menu {
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
.header-back::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.288);
  z-index: -1;
}
.text-home-pro {
  height: calc(50vh - 76px);
}
.menufilter,
.menubody {
  background-color: #f5f7f9;
}
.menu-elements {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-element:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.image-card-plachoder {
  filter: blur(7px);
}
</style>
