<template>
  <router-view />
</template>
<script>
import { landingRedirecter } from "@/services/redirect";
import user from "@/store/user";
export default {
  data() {
    return {
      user: user(),
    };
  },
  mounted() {
    landingRedirecter(this.user.isLogged, this.$router);
  },
};
</script>
