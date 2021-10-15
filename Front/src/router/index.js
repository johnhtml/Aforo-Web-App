import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/newevent",
    name: "NewEvent",
    component: () => import("../views/NewEvent.vue"),
  },
  {
    path: "/event",
    name: "Event",
    props: true,
    component: () => import("../views/Event.vue"),
  },
  {
    path: "/event/:id",
    // path: "/event",
    name: "EventById",
    props: true,
    component: () => import("../views/Event.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
