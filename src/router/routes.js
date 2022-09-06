import MainLayout from "@/layouts/MainLayout.vue";
export default [
  {
    path: "/",
    name: "main",
    component: MainLayout,
    children: [
      {
        path: "/dashboard",
        name: "dash",
        component: () => import("@/views/MainView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
];
