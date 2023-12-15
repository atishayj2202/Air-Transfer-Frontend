import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Send from "@/views/SendFile.vue";
import Profile from "@/views/profileViews/ProfileView.vue";
import ReceiveFile from "@/views/Receive File.vue";
import signIn from "@/views/profileViews/SignIn.vue";
import signUp from "@/views/profileViews/Register.vue";

const routes = [
  { name: "Recent", component: Home, path: "/" },
  { name: "CreatePost", component: Send, path: "/send" },
  { name: "Profile", component: Profile, path: "/profile" },
  { name: "Receive", component: ReceiveFile, path: "/receive" },
  { name: "SignIn", component: signIn, path: "/signin" },
  { name: "SignUp", component: signUp, path: "/signup" },
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

export default router;
