import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Send from "@/views/SendFile.vue";
import Profile from "@/views/profileViews/ProfileView.vue";
import ReceiveFile from "@/views/Receive File.vue";
import signIn from "@/views/profileViews/SignIn.vue";
import signUp from "@/views/profileViews/Register.vue";
import { authUserBool } from "@/handler/authUtils";

const routes = [
  { name: "Home", component: Home, path: "/" },
  {
    name: "CreatePost",
    component: Send,
    path: "/send",
    meta: { requiresAuth: true, requiresNoAuth: false },
  },
  {
    name: "Profile",
    component: Profile,
    path: "/profile",
    meta: { requiresAuth: true, requiresNoAuth: false },
  },
  {
    name: "Receive",
    component: ReceiveFile,
    path: "/receive",
    meta: { requiresAuth: true, requiresNoAuth: false },
  },
  {
    name: "SignIn",
    component: signIn,
    path: "/login",
    meta: { requiresNoAuth: true, requiresAuth: false },
  },
  {
    name: "SignUp",
    component: signUp,
    path: "/register",
    meta: { requiresNoAuth: true, requiresAuth: false },
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = authUserBool();
  if (to.meta.requiresAuth) {
    if (isAuth) {
      next();
    } else {
      next("/login");
    }
  } else if (to.meta.requiresNoAuth) {
    if (isAuth === false) {
      next();
    } else {
      next("/profile");
    }
  } else {
    next();
  }
});

export default router;
