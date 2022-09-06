<template>
  <div class="bg-bg text-text w-screen h-screen flex overflow-auto">
    <router-view />
  </div>
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
