<template>
  <side-menu />
  <router-view />
</template>

<script>
import sideMenu from "@/components/sideMenu.vue";
export default {
  components: {
    sideMenu,
  },
};
</script>
