<template>
  <div>
    <ElementBag />
    <div class="header-back vh-100">
      <NavBar />
      <div class="text-home-pro d-flex align-items-center">
        <div class="container">
          <div class="home-text text-center text-md-start p-5">
            <h4 class="text-capitalize fs-1 pb-2 text-light">
              loremipsum dolor
            </h4>
            <div
              class="btn btr-light bg-light text-capitalize px-5 fs-5 mb-3 rounded-pill"
            >
              read more
            </div>
            <p class="fs-4 w-100 w-md-75 text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              iusmod tempor incididunt ut labore et dolore magna Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor
              incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-title" ref="joo">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <div class="commont-part text-center">
          <div class="col col-md-6 mx-auto">
            <img src="@/assets/image1.png" class="w-50" alt="" />
          </div>
          <h1 class="pt-3 mt-n1 text-light">lorem ipsum dolor</h1>
          <p class="pt-1 pb-3 w-75 mx-auto fs-5 text-light mb-0">
            By setting some useful constraints to aid our type selection, we can
            also develop a critical eye for analyzing type along the way.
          </p>
        </div>
        <div class="row pt-3 pb-3">
          <div class="col-md-6 overflow-hidden image2 rounded p-0 shadow">
            <img class="mt-0" src="@/assets/image2.jpg" alt="" />
          </div>
          <div class="col-md-6 text-center text-md-start text-light lh-4">
            <h3 class="p-2 mt-1">Always remember to develop</h3>
            <p class="m-2">
              Many restaurants forget how crucial it is to take care of their
              online customers. They think that they will need a lot of help
              with choosing and working on a website template.
            </p>
            <p class="m-2 pt-2 pt-md-4 mb-4">
              Fortunately, the Little Italy theme from UpMenu is very intuitive
              and uncomplicated. This important improvement will help your sales
              go up.
            </p>
            <p class="m-2">
              Many restaurants forget how crucial it is to take care of their
              online customers. They think that they will need a lot of help
              with choosing and working on a website template.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="information pt-5 pb-5">
      <div
        class="container pt-5"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 rounded">
            <div
              class="text-center border border-1 rounded border-dark-50 position-relative p-3 card-info"
            >
              <div class="position-absolute top-0 start-50 translate-middle">
                <PizzaSvg />
              </div>
              <div class="mt-3 p-2 text-light">
                <h2 class="text-center">110</h2>
                <p class="text-center">number of type of food</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 rounded">
            <div
              class="text-center border border-1 rounded border-dark-50 position-relative p-3 card-info"
            >
              <div class="position-absolute top-0 start-50 translate-middle">
                <UsersSvg />
              </div>
              <div class="mt-3 p-2 text-light">
                <h2 class="text-center">2250</h2>
                <p class="text-center">number of users</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 rounded">
            <div
              class="text-center border border-1 rounded border-dark-50 position-relative p-3 card-info"
            >
              <div class="position-absolute top-0 start-50 translate-middle">
                <RatingSvg />
              </div>
              <div class="mt-3 p-2 text-light">
                <h2 class="text-center">0.9</h2>
                <p class="text-center">rating of users</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 rounded">
            <div
              class="text-center border border-1 rounded border-dark-50 position-relative p-3 card-info"
            >
              <div class="position-absolute top-0 start-50 translate-middle">
                <VistorSvg />
              </div>
              <div class="mt-3 p-2 text-light">
                <h2 class="text-center">110</h2>
                <p class="text-center">number of vistros to website</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="images-part">
      <div class="container pt-4">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner h-100">
            <div class="carousel-item active h-100" data-bs-interval="5000">
              <img
                src="@/assets/img1.jpg"
                class="d-block rounded-circle mx-auto mt-2"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item h-100" data-bs-interval="2000">
              <img
                src="@/assets/img2.jpg"
                class="d-block rounded-circle mx-auto mt-2"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item h-100" data-bs-interval="2000">
              <img
                src="@/assets/img3.jpg"
                class="d-block rounded-circle mx-auto mt-2"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
            <div class="carousel-item h-100">
              <img
                src="@/assets/img4.jpg"
                class="d-block rounded-circle mx-auto mt-2"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="type-section pb-5">
      <div class="container" data-aos="zoom-in-down" data-aos-duration="1000">
        <div class="commont-part text-center">
          <div class="col col-md-6 mx-auto">
            <img src="@/assets/logo1.png" class="w-50" alt="" />
          </div>
          <h1 class="pt-3 mt-n1 text-light">lorem ipsum dolor</h1>
          <p
            class="pt-1 pb-3 w-75 mx-auto fs-5 text-light mb-0 text-center text-md-start"
          >
            By setting some useful constraints to aid our type selection, we can
            also develop a critical eye for analyzing type along the waysetting
            some useful constraints to aid our.
          </p>
        </div>
        <div class="text-center pt-2 mt-2 buttom-type">
          <ul class="list-group list-group-horizontal justify-content-center">
            <li
              :class="[
                'px-4',
                'list-group-item',
                style.buttom.whoacive == 'all' ? 'active' : '',
              ]"
              @click="style.buttom.whoacive = 'all'"
            >
              all
            </li>
            <li
              :class="[
                'px-4',
                'list-group-item',
                style.buttom.whoacive == 'hot' ? 'active' : '',
              ]"
              @click="style.buttom.whoacive = 'hot'"
            >
              hot
            </li>
            <li
              :class="[
                'px-4',
                'list-group-item',
                style.buttom.whoacive == 'top rated' ? 'active' : '',
              ]"
              @click="style.buttom.whoacive = 'top rated'"
            >
              top rated
            </li>
            <li
              :class="[
                'px-4',
                'list-group-item',
                style.buttom.whoacive == 'new' ? 'active' : '',
              ]"
              @click="style.buttom.whoacive = 'new'"
            >
              new
            </li>
          </ul>
        </div>
        <div class="items row pt-3 mt-2">
          <div
            class="col-md-6 col-lg-3 rounded-2 mb-2 all"
            name="one"
            type="hot"
          >
            <img src="@/assets/img4.jpg" alt="" class="img-fluid rounded" />
          </div>
          <div
            class="col-md-6 col-lg-3 rounded-2 mb-2 all"
            name="two"
            type="hot"
          >
            <img src="@/assets/items/1.jpg" alt="" class="rounded" />
          </div>
          <div
            class="col-md-6 col-lg-3 rounded-2 mb-2 all"
            name="three"
            type="new"
          >
            <img src="@/assets/items/2.jpg" alt="" class="rounded" />
          </div>
          <div class="col-md-6 col-lg-3 rounded-2 mb-2 all" name="four">
            <img src="@/assets/items/3.jpg" alt="" class="rounded" />
          </div>
          <div
            class="col-md-6 col-lg-3 rounded-2 mb-2 all"
            type="top rated"
            name="five"
          >
            <img src="@/assets/items/4.jpg" alt="" class="rounded" />
          </div>
          <div
            class="col-md-6 col-lg-3 rounded-2 mb-2 all"
            type="new"
            name="six"
          >
            <img src="@/assets/items/5.jpg" alt="" class="rounded" />
          </div>
          <div
            class="col-md-6 col-lg-3 rounded-2 mb-2 all"
            type="top rated"
            name="seven"
          >
            <img src="@/assets/items/1.jpg" alt="" class="rounded" />
          </div>
          <div
            class="col-md-6 col-lg-3 rounded-2 mb-2 all"
            type="new"
            name="eight"
          >
            <img src="@/assets/items/2.jpg" alt="" class="rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import PizzaSvg from "@/components/svg/PizzaSvg.vue";
import UsersSvg from "@/components/svg/UsersSvg.vue";
import RatingSvg from "@/components/svg/RatingSvg.vue";
import VistorSvg from "@/components/svg/VistorSvg.vue";
import ElementBag from "@/components/small/ElementBag.vue";
import script from "@/core/scripts/Scripts";

export default {
  data() {
    return {
      style: {
        buttom: {
          whoacive: "all",
        },
      },
    };
  },

  watch: {
    style: {
      handler() {
        if (this.style.buttom.whoacive == "all") {
          this.$el.querySelectorAll(".all").forEach((item) => {
            item.classList.remove("hidden");
            item.classList.add("is-active");
            setTimeout(() => {
              item.classList.remove("is-active");
            }, 1000);
          });
        } else {
          this.$el.querySelectorAll(".all").forEach((item) => {
            if (item.getAttribute("type") == this.style.buttom.whoacive) {
              item.classList.remove("hidden");
              item.classList.add("is-active");
              setTimeout(() => {
                item.classList.remove("is-active");
              }, 1000);
            } else {
              item.classList.remove("is-active");
              item.classList.add("hidden");
            }
          });
        }
      },

      deep: true,
    },
  },
  components: {
    PizzaSvg,
    UsersSvg,
    RatingSvg,
    VistorSvg,
    NavBar,
    ElementBag,
  },
  mounted() {
    script.animationloading(false);
  },
  beforeMount() {
    script.animationloading(true);
  },
};
</script>

<style scoped>
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
.main-title {
  background: #86b61f;
  font-family: "Sansita", sans-serif;
}
.main-title .container h1 {
  font-family: "Oleo Script Swash Caps", cursive;
  font-size: 50px;
  margin-top: -80px;
}
.main-title .container div img {
  margin-top: -30px;
}
.main-title .scroll-out {
  transform: translate(0px, 0px);
}
.image2 img {
  transform: scale(1.2);
  transition: 0.3s;
  max-width: 100%;
  height: 100%;
}
.image2:hover img {
  transform: scale(1.5) rotate(-15deg);
  filter: brightness(0.5);
}
.card-info {
  background: #86b61f;
}
.information {
  font-family: "Sansita", sans-serif;
}
.images-part {
  background: url("@/assets/background1.jpg") center center;
  background-size: cover;
  position: relative;
}
.images-part::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(22, 21, 21, 0.61);
}
.images-part .container #carouselExampleCaptions {
  height: 350px;
}
.carousel-item img {
  width: 200px;
  height: 200px;
}
.type-section {
  background: #86b61f;
  font-family: "Sansita", sans-serif;
}
.buttom-type ul li.active {
  background: #e84e47;
  color: white !important;
  border: none;
}
.buttom-type ul li {
  cursor: pointer;
}
.items div {
  position: relative;
  overflow: hidden;
}
.items div::before {
  position: absolute;
  content: attr(name);
  inset: 0;
  background: #e84f478a;
  top: 110%;
  transition: 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  font-style: italic;
  width: calc(100% - 24px);
  left: 12px;
  border-radius: 5px;
}
.items div div {
  width: 100%;
  height: 100%;
}
.items div div {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.items div:hover::before {
  top: 0;
}
.items div {
  height: 260px;
}
.items div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hidden {
  display: none;
}
.is-active {
  display: block;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
form input.search-input {
  width: 200px;
  height: 34px;
}
li {
  list-style-type: none;
}
.box-user {
  font-family: "Sansita", sans-serif;
}
</style>
