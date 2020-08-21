import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../BrandiService/Main.vue";
import Detail from "../BrandiService/Detail.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/main",
      component: Main,
    },
    {
      path: "/detail",
      component: Detail,
    },
    {
      path: "/",
      redirect: "/main",
    },
  ],
});
