<template>
  <!--Tablet + Desktop-->
  <div
    class="hidden sm:block t"
    :class="{
      'w-[40px]': !isOpen,
      'w-[200px]': isOpen,
    }"
  />
  <div
    class="hidden sm:block h-screen overflow-hidden bg-bg2 t-a fixed"
    :class="{
      'w-[40px]': !isOpen,
      'w-[200px]': isOpen,
    }"
  >
    <div
      v-for="btn in page.pages"
      :key="btn"
      class="w-fit menu-btn flex"
      @click="page.setPage(btn.text)"
    >
      <span class="icon text-2xl -mt-1"> {{ btn.icon }}</span>
      <div style></div>
      <span
        class="text-xl overflow-hidden block ml-1"
        :class="{
          invisible: !isOpen,
          visible: isOpen,
        }"
      >
        {{ btn.text }}
      </span>
    </div>
    <div class="flex text-center" @click="isOpen = !isOpen">
      <span
        class="icon menu-btn m-auto mr-0"
        :style="`transform: rotateY(${isOpen ? 180 : 0}deg)`"
      >
        arrow_forward_ios
      </span>
    </div>
  </div>
  <!--Mobil-->
  <div class="block sm:hidden">
    <div
      class="fixed sm:hidden w-screen t-f overflow-hidden"
      :class="{
        '-top-[100%]': !isOpen,
        'top-[50%]': isOpen,
        t: isOpen,
      }"
    >
      <div class="m-auto w-fit">
        <div
          v-for="btn in page.pages"
          :key="btn"
          class="w-fit menu-btn"
          @click="mobilMenuEvent(btn.text)"
        >
          <span class="icon text-2xl -mt-1"> {{ btn.icon }}</span>
          <span class="text-xl"> {{ btn.text }}</span>
        </div>
      </div>
    </div>
    <div class="fixed top-1 left-1">
      <side-menu-mobil-btn :isOpen="isOpen" @click="isOpen = !isOpen" />
    </div>
  </div>
</template>

<script>
import sideMenuMobilBtn from "./sideMenuMobilBtn.vue";
import page from "@/store/page";
export default {
  components: { sideMenuMobilBtn },
  data() {
    return {
      page: page(),
      isOpen: false,
    };
  },
  methods: {
    mobilMenuEvent: function (value) {
      this.isOpen = !this.isOpen;
      this.page.setPage(value);
    },
  },
};
</script>
<style scoped>
.t {
  transform: translateY(-50%);
}
</style>
