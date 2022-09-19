<template>
  <div>
    <div class="errors">
      <div class="container">
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Error</h4>
          <p>
            {{ $route.query.message }}
          </p>
          <hr />
          <p class="mb-0">
            solution :
            {{ $route.query.solution != null ? $route.query.solution : "" }}
          </p>
          <button
            @click="send_another_email"
            v-if="solutionaction == 'send_email'"
            class="btn btn-danger mt-2 me-2"
            type="button"
            ref="loadingbuttonone"
          >
            send another email
            <span
              v-if="buttonloadingone"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
          <button
            @click="logout"
            v-if="solutionaction == 'send_email'"
            class="btn btn-primary mt-2 ms-2"
            type="button"
            ref="loadingbuttontwo"
          >
            <span
              v-if="buttonloadingtwo"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            log out
          </button>
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
      solutionaction: this.$route.query.action,
      buttonloadingone: false,
      buttonloadingtwo: false,
    };
  },
  methods: {
    async send_another_email() {
      this.$refs.loadingbuttonone.setAttribute("disabled", "");
      this.buttonloadingone = true;
      let response = await usejwt.axiosIns.get("/auth/send_mail_verify_again");
      if (response.data.status == true) {
        this.buttonloadingone = false;
      }
    },
    async logout() {
      this.$refs.loadingbuttontwo.setAttribute("disabled", "");
      this.buttonloadingtwo = true;
      let response = await usejwt.axiosIns.post("/auth/logout", {});
      if (response.data.status == true) {
        this.buttonloadingone = false;
        this.$router.push({
          name: "login",
        });
      }
    },
  },
};
</script>

<style scoped>
.errors {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: end;
  background-image: url("../../assets/error_background.jpg");
  background-size: auto;
  background-position: 50% 85%;
  background-repeat: no-repeat;
}
</style>
