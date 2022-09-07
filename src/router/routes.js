import MainLayout from "@/layouts/MainLayout.vue";
export default [
  {
    path: "/",
    name: "main",
    component: MainLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/MainView.vue"),
      },{
        path: "/dashboard",
        name: "Settings",
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
