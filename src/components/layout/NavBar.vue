<template>
  <div class="header position-sticky top-0">
    <div class="container">
      <nav class="navbar navbar-expand-lg pt-2 text-light">
        <div class="container-fluid">
          <router-link
            to="/home"
            class="navbar-brand logo d-flex align-items-center"
          >
            <img src="@/assets/logo1.png" alt="" />
            <h4 class="text-light p-1">{{ $t("message.hello") }}</h4>
          </router-link>
          <button
            class="navbar-toggler text-light border-1 rounded border-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-align-right fs-3"></i>
          </button>
          <div
            class="collapse navbar-collapse items"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item p-1 fs-5 me-1">
                <a
                  class="nav-link active text-capitalize text-light"
                  aria-current="page"
                  href="#"
                  >{{ $t("message.home") }}</a
                >
              </li>
              <li class="nav-item p-1 fs-5 me-1">
                <router-link
                  to="/menu"
                  class="nav-link text-capitalize text-light"
                  >{{ $t("message.menu") }}</router-link
                >
              </li>

              <li class="nav-item p-1 fs-5 me-1">
                <a class="nav-link text-capitalize text-light" href="#">{{
                  $t("message.contact")
                }}</a>
              </li>
              <li v-if="!auth" class="nav-item p-1 fs-5 me-1">
                <router-link
                  to="/login"
                  class="nav-link text-capitalize text-light"
                  ><i class="fa-solid fa-door-open"></i
                ></router-link>
              </li>
            </ul>
            <form class="d-flex position-relative" role="search">
              <input
                class="form-control me-2 search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                type="submit "
                class="position-absolute icon-search bg-transparent border-0 p-1"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <!-- <li class="nav-item p-1 fs-5 me-1 rounded ms-3">
                  <i class="fa-solid fa-arrow-right-to-bracket"></i>
                </li> -->
            <span class="nav-item p-1 fs-5 me-1">
              <SwitchButton />
            </span>
            <span v-if="auth" class="nav-item dropdown ms-2 box-user">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ $store.getters.getuserdata.name }}
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li @click="logout">
                  <a class="dropdown-item" href="#">log out</a>
                </li>
              </ul>
            </span>
            <span
              v-if="auth"
              class="shop-bag"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#ElementsBag"
              aria-controls="offcanvasRight"
            >
              <span class="item-number">{{ ordernumber }}</span>
              <span class="ms-3 fs-5">
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
                      fill="white"
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
              </span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import SwitchButton from "@/components/main_components/SwitchButton.vue";
import script from "@/core/scripts/Scripts";
import usejwt from "@/lib/auth/usejwt";

export default {
  components: {
    SwitchButton,
  },
  computed: {
    auth() {
      return script.isauth_isdata();
    },
    ordernumber() {
      let number = this.$store.getters.get_orders_num;
      //console.log(number);
      if (number) {
        return number;
      } else {
        return "0";
      }
    },
  },
  methods: {
    async logout() {
      script.animationloading(true);
      //console.log("make logout");
      let response = await usejwt.axiosIns.post("/auth/logout", {});
      //console.log(response);

      if (response.data.status == true) {
        this.$store.commit("outauth");
        this.$router.push({
          name: "login",
        });
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
form .icon-search {
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
}
.logo img {
  width: 50px;
}
.header {
  background: #000000b0;
}
.items ul li:hover a {
  color: #86b61f !important;
  position: relative;
}

.items ul li a {
  position: relative;
}
.items ul li a:before {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  background: #86b61f;
  bottom: 0;
  left: 0;
  transition: 0.3s;
}
.items ul li:hover a:before {
  width: 100%;
}

.items ul li a.active::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #86b61f;
  bottom: 0;
  left: 0;
}

.active {
  color: #86b61f !important;
}
.text-home-pro {
  height: calc(100vh - 76px);
  font-family: "Sansita", sans-serif;
}
.text-home-pro .container div div {
  color: #86b61f;
}
.shop-bag {
  position: relative;
}
.shop-bag .item-number {
  background: #e84e47;
  color: white;
  font-weight: bold;
  width: 20px;
  height: 20px;
  padding: 4px;
  border-radius: 100%;
  min-width: fit-content;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  position: absolute;
  right: -50%;
  top: 0px;
}
@media (max-width: 992px) {
  .shop-bag .item-number {
    right: 0px;
  }
  .shop-bag {
    text-align: center;
    padding: 5px;
  }
}
</style>
