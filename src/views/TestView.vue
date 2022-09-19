<template>
  <div>
    <h1>test new auth</h1>
    <button @click="send">send request</button>
    <button @click="sendgql">send request gql</button>
  </div>
</template>

<script>
import Endpoint from "@/lib/endpoint/main";
export default {
  methods: {
    async send() {
      let response = await Endpoint.axiosIns.get("/test");
      console.log(response);
    },
    async sendgql() {
      let response = await Endpoint.gQl(
        `{
                      users {
                        id
                        name
                      }
                    }`
      );
      console.log(response);
    },
  },
};
</script>

<style></style>
