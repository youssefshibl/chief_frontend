<template>
  <div>
    <LoginComponent :data="copoenetdata"></LoginComponent>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import script from "@/core/scripts/Scripts";
export default {
  data() {
    return {
      copoenetdata: {
        imageurl: require("@/assets/4.jpg"),
      },
      test: "",
    };
  },
  components: {
    LoginComponent,
  },

  created() {
    var script = document.createElement("script");
    script.src = "htpps://your-external-script.js";
    document.head.appendChild(script); //or something of the likes
  },
  mounted() {
    script.animationloading(false);
  },
};
</script>

<style></style>
