<template>
  <div class="main-container">
    <div class="container">
      <div class="image-box" :style="style.backgroundimage"></div>
      <div class="formbox-loading">
        <!-- login part -->
        <div v-if="statuepage == 'login'" class="form-box">
          <h3>Webcom Back</h3>
          <form @submit.prevent="login" action="">
            <input
              type="text"
              placeholder="Enter Email"
              v-model="form.login.data.email"
            />
            <input
              type="password"
              name=""
              id=""
              v-model="form.login.data.password"
              placeholder="Enter password"
            />
            <div class="checkbox">
              <input
                type="checkbox"
                id="remember_me"
                v-model="form.rememberme"
              />

              <label for="remember_me">Remember Me</label>
            </div>
            <button type="submit">Login</button>
            <span v-if="form.login.iserror" class="error">{{
              form.login.errormessage
            }}</span>
          </form>
          <div class="line"></div>
          <div class="loginmethod">
            <a :href="url.google">
              <div class="loginwith google">
                <i class="fa-brands fa-google"></i>
                <span> Login with Google </span>
              </div>
            </a>
            <a :href="url.facebook">
              <div class="loginwith facebook">
                <i class="fa-brands fa-facebook-f"></i>
                <span>Login with Facebook</span>
              </div>
            </a>
          </div>
          <div class="otheroptions">
            <div class="rounded-pill" @click="gotosinuppage">
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
              <span> Sinup</span>
            </div>
            <div class="rounded-pill">
              <i class="fa-solid fa-bars-staggered"></i> <span> Home page</span>
            </div>
            <div class="rounded-pill" @click="statuepage = 'forget'">
              <i class="fa-solid fa-key"></i> <span> Forget Password</span>
            </div>
          </div>
        </div>
        <div v-if="statuepage == 'sinup'" class="form-box">
          <h3>Webcom Back</h3>
          <form @submit.prevent="sinup" action="">
            <input
              type="text"
              placeholder="Enter Your Name"
              v-model="form.sinup.data.name"
            />
            <input
              type="text"
              placeholder="Enter Email"
              v-model="form.sinup.data.email"
            />
            <input
              type="password"
              name=""
              id=""
              v-model="form.sinup.data.password"
              placeholder="Enter Your Password"
            />
            <input
              type="password"
              name=""
              id=""
              v-model="form.sinup.data.confirmpassword"
              placeholder="Confirm Your Password"
            />

            <button type="submit" class="bg-danger">Sinup</button>
            <span v-if="form.sinup.iserror" class="error">{{
              form.sinup.errormessage
            }}</span>
          </form>
          <div class="line"></div>
          <div class="loginmethod">
            <div class="loginwith google">
              <i class="fa-brands fa-google"></i>
              <span> Google</span>
            </div>
            <div class="loginwith facebook">
              <i class="fa-brands fa-facebook-f"></i>
              <span>Facebook</span>
            </div>
            <div class="rounded-pill login" @click="gotologinpage">
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
              <span> Login</span>
            </div>
          </div>
        </div>
        <div v-if="statuepage == 'forget'" class="form-box">
          <h3>Reset Password</h3>

          <form
            @submit.prevent="sendtokebyemail"
            action=""
            class="alert alert-info"
          >
            <div class="text-start mt-1 mb-1 fs-5 d-inline-block me-2">
              Email
            </div>
            <input
              type="text"
              placeholder="Enter Your Email"
              v-model="form.resetpassword.data.email"
              class="bg-light d-inline-block"
            />

            <button
              ref="loadingone"
              type="submit"
              class="btn btn-danger mt-0 bg-danger"
            >
              <span
                v-if="form.resetpassword.loadingone"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="loadingone"
              ></span>
              Send email
            </button>
            <span v-if="form.resetpassword.iserror" class="error">{{
              form.resetpassword.errormessage
            }}</span>
            <div
              v-if="form.resetpassword.issuccess"
              class="text-success fw-bold"
            >
              {{ form.resetpassword.successmessage }}
            </div>
          </form>

          <form
            @submit.prevent="sendtoken"
            action=""
            class="alert alert-secondary"
          >
            <div class="text-start mt-1 mb-1 fs-5 d-inline-block me-2">
              Token
            </div>
            <input
              type="text"
              placeholder="Enter Your Token"
              v-model="form.resetpassword.tokensystem.token"
              class="bg-light d-inline-block"
            />

            <button
              type="submit"
              class="btn btn-danger mt-0 bg-danger"
              ref="loadingtwo"
            >
              <span
                v-if="form.resetpassword.tokensystem.loading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="loadingone"
              ></span>
              Send token
            </button>
            <span v-if="form.resetpassword.tokensystem.iserror" class="error">{{
              form.resetpassword.tokensystem.errormessage
            }}</span>
          </form>
          <div class="loginmethod">
            <div class="rounded-pill login" @click="gotologinpage">
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
              <span> Login</span>
            </div>
          </div>
        </div>
        <div v-if="statuepage == 'resetpassword'" class="form-box">
          <h3>Reset Password</h3>
          <form @submit.prevent="resetpassword" action="">
            <input
              type="password"
              name=""
              id=""
              v-model="form.resetpassworddata.password"
              placeholder="Enter Your Password"
            />
            <input
              type="password"
              name=""
              id=""
              v-model="form.resetpassworddata.confirmpassword"
              placeholder="Confirm Your Password"
            />

            <button type="submit" class="bg-danger">Reset</button>
            <span v-if="form.resetpassworddata.iserror" class="error">{{
              form.resetpassworddata.errormessage
            }}</span>
          </form>
        </div>
        <!-- animation -->
        <div v-if="style.animation" class="loading">
          <div>
            <div class="point one"></div>
            <div class="point two"></div>
            <div class="point three"></div>
            <div class="point four"></div>
            <div class="point five"></div>
            <div class="point six"></div>
            <div class="point seven"></div>
            <div class="point eight"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usejwt from "@/lib/auth/usejwt";

export default {
  data() {
    return {
      url: {
        google: process.env.VUE_APP_BACKEND_URL + "auth/google/redirect",
        facebook: process.env.VUE_APP_BACKEND_URL + "auth/facebook/redirect",
      },
      style: {
        backgroundimage: {
          background: `url(${this.data.imageurl})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        },
        animation: false,
      },
      form: {
        login: {
          data: {
            email: "",
            password: "",
            rememberme: false,
          },
          iserror: false,
          errormessage: "",
        },
        sinup: {
          data: {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          },
          iserror: false,
          errormessage: "",
        },
        forget: {
          email: "",
        },
        resetpassword: {
          iserror: false,
          errormessage: "",
          data: {
            email: "",
          },
          loadingone: false,
          issuccess: false,
          successmessage: "",
          tokensystem: {
            iserror: false,
            errormessage: "",
            token: "",
            loading: false,
          },
        },
        resetpassworddata: {
          token: "",
          password: "",
          confirmpassword: "",
          iserror: false,
          errormessage: "",
        },
      },
      error: {
        there: false,
        message: "",
      },
      test: "",
      statuepage: "login",
    };
  },
  beforeMount() {
    document.body.style.background = "#e9e9e9";
    //console.log("before mount");
  },
  methods: {
    async login() {
      if (this.form.login.data.email == "") {
        this.form.login.iserror = true;
        this.form.login.errormessage = "Email is required";
      } else {
        if (this.form.login.data.password == "") {
          this.form.login.iserror = true;
          this.form.login.errormessage = "Password is required";
        } else {
          this.form.login.iserror = true;
          this.form.login.errormessage = "";
          this.style.animation = true;
          let response = await usejwt.axiosIns.post(
            "/auth/login",
            this.form.login.data
          );
          if (response.data.status == true) {
            //console.log(response.data);
            this.$store.commit("SetUser", response.data.data.user);
            this.$store.commit("beauth");
            this.$store.commit("theredata");
            localStorage.setItem("token", response.data.data.token);
            this.form.login.errormessage = "";
            this.style.animation = true;
            this.$router.push({
              name: "home",
            });
          } else {
            this.style.animation = false;
            this.form.login.iserror = true;
            this.form.login.errormessage = response.data.message;
          }
        }
      }
    },
    async sinup() {
      console.log("sinup");
      if (this.form.sinup.data.name == "") {
        this.form.sinup.iserror = true;
        this.form.sinup.errormessage = "Name is required";
      } else {
        if (this.form.sinup.data.email == "") {
          this.form.sinup.iserror = true;
          this.form.sinup.errormessage = "Email is required";
        } else {
          if (this.form.sinup.data.password == "") {
            this.form.sinup.iserror = true;
            this.form.sinup.errormessage = "Password is required";
          } else {
            if (this.form.sinup.data.confirmpassword == "") {
              this.form.sinup.iserror = true;
              this.form.sinup.errormessage = "Confirm Password is required";
            } else {
              if (
                this.form.sinup.data.password !=
                this.form.sinup.data.confirmpassword
              ) {
                this.form.sinup.iserror = true;
                this.form.sinup.errormessage =
                  "Password and Confirm Password not match";
              } else {
                this.form.sinup.iserror = true;
                this.form.sinup.errormessage = "";
                this.style.animation = true;
                let response = await usejwt.axiosIns.post(
                  "/auth/register",
                  this.form.sinup.data
                );
                if (response.data.status == true) {
                  localStorage.setItem("token", response.data.data.token);
                  this.$store.commit("SetUser", response.data.data.user);
                  this.$store.commit("beauth");
                  //console.log("save token sin up ");
                  this.$router.push({
                    name: "home",
                  });
                } else {
                  this.stylemation = false;

                  this.error.there = true;
                  this.error.message = response.data.message[0][0];
                }
              }
            }
          }
        }
      }
    },
    gotosinuppage() {
      this.statuepage = "sinup";
    },
    gotologinpage() {
      this.statuepage = "login";
    },
    async sendtokebyemail() {
      if (!this.form.resetpassword.data.email.includes("@")) {
        this.form.resetpassword.iserror = true;
        this.form.resetpassword.errormessage = "email filed required";
      } else {
        this.form.resetpassword.loadingone = true;
        this.$refs.loadingone.setAttribute("disabled", "");
        let response = await usejwt.axiosIns.post("/auth/resetpassword", {
          email: this.form.resetpassword.data.email,
        });
        //console.log(response);
        if (response.data.status) {
          this.form.resetpassword.iserror = false;
          this.form.resetpassword.issuccess = true;
          this.form.resetpassword.successmessage = "token is sent check email";
          this.form.resetpassword.loadingone = false;
        } else {
          this.form.resetpassword.iserror = true;
          this.form.resetpassword.errormessage = response.data.message[0][0];
          this.form.resetpassword.loadingone = false;
          this.$refs.loadingone.removeAttribute("disabled", "");
        }
      }
    },
    async sendtoken() {
      if (this.form.resetpassword.tokensystem.token.length != 32) {
        this.form.resetpassword.tokensystem.iserror = true;
        this.form.resetpassword.tokensystem.errormessage =
          "this token not valid";
      } else {
        this.$refs.loadingtwo.setAttribute("disabled", "");

        this.form.resetpassword.tokensystem.loading = true;
        let response = await usejwt.axiosIns.post(
          "/auth/checkresetpasswordtoken",
          {
            token: this.form.resetpassword.tokensystem.token,
          }
        );
        if (response.data.status) {
          this.form.resetpassworddata.token =
            this.form.resetpassword.tokensystem.token;
          this.form.resetpassword.tokensystem.loading = false;
          this.$refs.loadingtwo.removeAttribute("disabled", "");
          this.statuepage = "resetpassword";
        } else {
          this.form.resetpassword.tokensystem.iserror = true;
          this.form.resetpassword.tokensystem.errormessage =
            response.data.message;
          this.form.resetpassword.tokensystem.loading = false;
          this.$refs.loadingtwo.removeAttribute("disabled", "");
        }
      }
    },
    async resetpassword() {
      if (this.form.resetpassworddata.password == "") {
        this.form.resetpassworddata.iserror = true;
        this.form.resetpassworddata.errormessage = "password is required";
      } else {
        if (this.form.resetpassworddata.confirmpassword == "") {
          this.form.resetpassworddata.iserror = true;
          this.form.resetpassworddata.errormessage =
            "confirmpassword is required";
        } else {
          if (
            this.form.resetpassworddata.confirmpassword !=
            this.form.resetpassworddata.password
          ) {
            this.form.resetpassworddata.iserror = true;
            this.form.resetpassworddata.errormessage =
              "password and confirmpassword not the same ";
          } else {
            this.style.animation = true;
            let response = await usejwt.axiosIns.post(
              "/auth/resetpassword/new",
              {
                token: this.form.resetpassworddata.token,
                password: this.form.resetpassworddata.password,
              }
            );
            if (response.data.status) {
              localStorage.setItem("token", response.data.token);
              this.style.animation = false;
              this.$router.push({
                name: "home",
              });
            }
          }
        }
      }
    },
  },
  props: ["data"],
};
</script>

<style>
.main-container {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #e9e9e9;
}

.main-container .container {
  width: 78%;
  display: flex;
  justify-content: center;
  height: 550px;
  padding: 0px;
  margin-top: 50px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.main-container .container .image-box {
  width: 50%;
  background-size: auto;
  background-size: cover;
  background-position: 50% 50%;
}
@media (max-width: 800px) {
  .main-container .container .image-box {
    display: none;
  }
  .main-container .container {
    width: 95%;
    height: 700px;
  }
}

.main-container .container .formbox-loading {
  width: 50%;
  background-color: white;
  padding: 40px;
  position: relative;
}
@media (max-width: 800px) {
  .main-container .container .formbox-loading {
    width: 100%;
  }
}

.form-box h3 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}
.form-box input:not([type="checkbox"]) {
  display: block;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  height: 45px;
  border: 1px solid #bac8f373;
  border-radius: 5px;
  padding: 5px 20px;
  background: #bac8f315;
}
@media (max-width: 800px) {
  .form-box input:not([type="checkbox"]) {
    width: 100%;
  }
}
.form-box input:not([type="checkbox"]):focus {
  border: 1px solid #bac8f33b;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(78, 115, 223, 0.25);
}
.form-box input:not([type="checkbox"])::placeholder {
  font-size: 15px;
}
.checkbox {
  text-align: left;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 800px) {
  .checkbox {
    width: 100%;
  }
}
.checkbox input {
  width: 17px;
  height: 17px;
}
.checkbox label {
  font-size: 15px;
  font-weight: normal;
  margin-left: 10px;
  cursor: pointer;
}
.form-box button {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  height: 40px;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  font-size: 17px;
  background: #4e73df;
  display: block;
  margin-bottom: 10px;
}
.line {
  margin-top: 20px;
  margin-bottom: 5px;
  width: 87%;
  margin-right: auto;
  margin-left: auto;
  height: 1px;
  background: #c4c1c1;
}
.loginwith {
  display: inline-block;
  cursor: pointer;
  color: white;
  padding: 10px 20px;
  border-radius: 27px;
}

@media (max-width: 800px) {
  .loginwith {
    margin-bottom: 10px;
  }
}
.loginwith svg {
  margin-right: 7px;
}
.loginwith.google {
  background: #ea4335;
}
.loginwith.facebook {
  background: #3b5998;
}
.loginmethod {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

@media (max-width: 800px) {
  .loginmethod {
    flex-direction: column;
  }
}
.error {
  color: #ea4335;
  font-weight: bold;
}
.loading {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: #7c777796;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading div .point {
  width: 10px;
  height: 10px;
  background: #3b5998;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: -20px -15px;
  z-index: 1;
}
.loading div {
  position: relative;
}
.point.one {
  transform: translate(15px, -25px) rotate(0deg);
  animation: loading 4s infinite 0s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.point.two {
  transform: translate(15px, -25px) rotate(45deg);
  animation: loading 4s infinite -0.5s ease;
}
.point.three {
  transform: translate(15px, -25px) rotate(90deg);
  animation: loading 4s infinite -1s ease;
}
.point.four {
  transform: translate(15px, -25px) rotate(135deg);
  animation: loading 4s infinite -1.5s ease;
}
.point.five {
  transform: translate(15px, -25px) rotate(180deg);
  animation: loading 4s infinite -2s ease;
}
.point.six {
  transform: translate(15px, -25px) rotate(225deg);
  animation: loading 4s infinite -2.5s ease;
}
.point.seven {
  transform: translate(15px, -25px) rotate(270deg);
  animation: loading 4s infinite -3s ease;
}
.point.eight {
  transform: translate(15px, -25px) rotate(315deg);
  animation: loading 4s infinite -3.5s ease;
}
@keyframes loading {
  0% {
    transform: translate(15px, -25px) rotate(0deg);
  }
  12.5% {
    transform: translate(15px, -25px) rotate(45deg);
  }
  25% {
    transform: translate(15px, -25px) rotate(90deg);
  }
  37.5% {
    transform: translate(15px, -25px) rotate(135deg);
  }
  50% {
    transform: translate(15px, -25px) rotate(180deg);
  }
  62.5% {
    transform: translate(15px, -25px) rotate(225deg);
  }
  75% {
    transform: translate(15px, -25px) rotate(270deg);
  }
  87.5% {
    transform: translate(15px, -25px) rotate(315deg);
  }
  100% {
    transform: translate(15px, -25px) rotate(360deg);
  }
}
.otheroptions {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
@media (max-width: 800px) {
  .otheroptions {
    flex-direction: column;
  }
  .otheroptions div {
    margin-bottom: 10px;
  }
}
.otheroptions div {
  padding: 5px 15px;
  background: #584862;
  color: white;
  cursor: pointer;
}

.login {
  padding: 10px 20px;
  background: #584862;
  color: white;
  cursor: pointer;
}
</style>
