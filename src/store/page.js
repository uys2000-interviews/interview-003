import { defineStore } from "pinia";

export default defineStore("page", {
  state: () => ({
    page: "",
    pages: [
      {
        icon: "home",
        text: "Dashboard",
      },
      {
        icon: "settings",
        text: "Settings",
      },
    ],
  }),
  actions: {
    setPage(value) {
      this.page = value;
    },
  },
  getters: {
    id: (state) => state.user.id,
  },
});
