import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    user: {
      isLogged: false,
      id: "",
      mail: "",
    },
  }),
  getters: {
    id: (state) => state.user.id,
    mail: (state) => state.user.mail,
    isLogged: (state) => state.user.isLogged,
  },
  actions: {
    login(mail) {
      this.user = {
        isLogged: true,
        mail: mail,
      };
    },
  },
});
