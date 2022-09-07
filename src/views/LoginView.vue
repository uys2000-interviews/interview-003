<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <div class="w-min">
      <img
        :src="require('@/assets/imgs/login.png')"
        alt=""
        class="w-full rounded-xl"
      />
      <div class="w-max py-5">Giriş Yapız (boş geçebilirsiniz)</div>
    </div>
    <form class="grid grid-cols-3 gap-px" onsubmit="return false">
      <label for="mail"> E-Mail </label>
      <input
        v-model="mail"
        type="text"
        name="mail"
        class="border col-span-2 rounded"
      />
      <label for="pass"> Password </label>
      <input
        v-model="pass"
        type="password"
        name="pass"
        class="border col-span-2 rounded"
      />
      <div class="col-span-2" />
      <button type="submit" class="btn" @click="login">Giriş Yap</button>
    </form>
  </div>
</template>
<script>
import user from "@/store/user";
export default {
  data() {
    return {
      user: user(),
      mail: "",
      pass: "",
    };
  },
  methods: {
    login: function () {
      this.user.login(this.mail);
      this.$router.push({ name: "Dashboard" });
      return false;
    },
  },
};
</script>
