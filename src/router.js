import Vue from "vue";
import Router from "vue-router";
import BaiduControl from "./views/Baidu.vue";
import Legal from "./views/Legal.vue";
import AboutUS from "./views/AboutUS.vue"
import Login from "./views/Login.vue";
import Register from "./views/Register.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "baiduControl",
      component: BaiduControl
    },
    {
      path: "/legal",
      name: "legal",
      component: Legal
    },
    {
      path: "/aboutUS",
      name: "aboutUS",
      component: AboutUS
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
