<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="logout">log out</button>
    <div class="testo"></div>
    <div></div>
  </div>
</template>

<script>
import usejwt from "@/lib/auth/usejwt";

export default {
  data() {
    return {};
  },
  methods: {
    async logout() {
      //console.log("make logout");
      let response = await usejwt.axiosIns.post("/auth/logout", {});
      //console.log(response);
      if (response.data.status == true) {
        //console.log(this.$route.name);
        this.$router.push({
          name: "login",
        });
      }
    },
  },
};
</script>
<style scoped>
.testo {
  background: url("../assets/login.jpg");
}
</style>
