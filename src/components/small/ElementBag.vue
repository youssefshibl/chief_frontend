<template>
  <div
    class="offcanvas offcanvas-end elements-bag"
    tabindex="-1"
    id="ElementsBag"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header border-bottom">
      <div>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <defs>
            <filter
              id="uyr5fgkvtgjk"
              width="101.4%"
              height="116.4%"
              x="-.7%"
              y="-8.2%"
              filterUnits="objectBoundingBox"
            >
              <feMorphology
                in="SourceAlpha"
                radius="2"
                result="shadowSpreadOuter1"
              ></feMorphology>
              <feOffset
                dy="2"
                in="shadowSpreadOuter1"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
                stdDeviation="2"
              ></feGaussianBlur>
              <feColorMatrix
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
                values="0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0.1 0"
              ></feColorMatrix>
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g
              fill="#1A1A1A"
              filter="url('#uyr5fgkvtgjk')"
              transform="translate(-1245 -23)"
            >
              <g>
                <path
                  d="M2 2v2h2.1l3.3 7.9-1.2 1.9c-.4.6-.4 1.4-.1 2.1.3.7 1 1.1 1.8 1.1H20v-2H7.9v-.1L9.053 13H16.5c.7 0 1.4-.4 1.8-1l3.6-6.5c.2-.3.2-.7 0-1-.2-.3-.5-.5-.9-.5H6.232L5.4 2H2zm5.064 4h12.237L16.5 11H9.143L7.064 6zM8 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                  transform="translate(1245 23)"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <h5 class="d-inline-block ms-2">Shopping Cart</h5>
      </div>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body order-box-body">
      <div class="order-boxs">
        <div
          v-for="item in $store.getters.get_orders"
          :key="item.id"
          class="order-box py-2 border-bottom"
        >
          <div class="top-part">
            <div class="content">
              <div class="img-box">
                <img :src="item.menu.image" alt="" />
              </div>
              <div class="discription-price">
                <h5>
                  {{ item.menu.name }}
                </h5>
                <span class="text-danger fw-bold"
                  >{{ item.menu.price }} EGp</span
                >
              </div>
            </div>
            <button @click="delet_order(item.id, item.menu.id)">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  d="M8 0C3.591 0 0 3.591 0 8s3.591 8 8 8 8-3.591 8-8-3.591-8-8-8zm0 1.6c3.544 0 6.4 2.856 6.4 6.4 0 3.544-2.856 6.4-6.4 6.4-3.544 0-6.4-2.856-6.4-6.4 0-3.544 2.856-6.4 6.4-6.4zM5.366 4.234L4.234 5.366 6.87 8l-2.635 2.634 1.132 1.132L8 9.13l2.634 2.635 1.132-1.132L9.13 8l2.635-2.634-1.132-1.132L8 6.87 5.366 4.234z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="w-100 my-2">
            <div class="item-numbers mx-auto">
              <button @click="dec_number(item.id, item.menu.id)">
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
                </svg></button
              ><span>{{ item.number }}</span
              ><button @click="inc_number(item.id, item.menu.id)">
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
          </div>
        </div>
      </div>
      <div class="border-top mt-3 mb-2">
        <div class="subtotal sh-w-80 mx-auto">
          <div>Subtotal</div>
          <div class="text-danger fw-bold">{{ totalprice }} EGp</div>
        </div>
        <div class="">
          <button
            type="button"
            class="btn btn-danger my-2 d-block sh-w-80 mx-auto"
            @click="go_to_checkout"
          >
            Checkout
          </button>
          <button
            type="button"
            class="btn btn-secondary my-2 d-block sh-w-80 mx-auto"
          >
            View card
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Endpoint from "@/lib/endpoint/main";

export default {
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
}`,
      true
    );
    if ("data" in response.data) {
      this.$store.commit("setorders", response.data.data.myorders);
    }
  },
  methods: {
    inc_number(id, menu_id) {
      this.$store.commit("inc_number", id);
      Endpoint.gQl(
        `mutation {
           CreateOrder(input: {menu_id: ${Number(menu_id)}, number:1}) {
                              id
                            }
                          }`,
        true
      );
    },
    dec_number(id, menu_id) {
      if (this.$store.getters.dec_number(id)) {
        Endpoint.gQl(
          `mutation {
           CreateOrder(input: {menu_id: ${Number(menu_id)}, number:${Number(
            -1
          )}}) {
                              id
                            }
                          }`,
          true
        );
      }
    },
    delet_order(id, menu_id) {
      this.$store.commit("delet_order", id);
      Endpoint.gQl(
        `mutation {
            DeletOrder(input: {menu_id: ${Number(menu_id)}}) {
              id
            }
          }`,
        true
      );
    },
    go_to_checkout() {
      this.$router.push({
        name: "checkout",
      });
    },
  },
  computed: {
    totalprice() {
      return this.$store.getters.get_total_price;
    },
  },
};
</script>

<style scoped>
.elements-bag {
  font-family: "Sansita", sans-serif;
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
.item-numbers span {
  width: 40%;
  border: navajowhite;
  background: transparent;
  text-align: center;
  display: inline-block;
}
.top-part {
  display: flex;
  justify-content: space-between;
}
.top-part .content {
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: start;
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
  width: 70%;
}
.top-part .content .discription-price span {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.top-part button {
  align-self: center;
  background: transparent;
  border: none;
  width: 10%;
}
.subtotal {
  display: flex;
  justify-content: space-between;
}
.order-box-body {
  display: flex;
  flex-direction: column;
}
.order-boxs {
  overflow-y: auto;
  padding-right: 10px;
  flex: 1 1 auto;
}
</style>
