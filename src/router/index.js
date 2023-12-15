import { createRouter, createWebHistory } from "vue-router";
import Recent from "@/views/Home.vue";
import CreatePost from "@/views/SendFile.vue";
import Profile from "@/views/Profile.vue";
import SinglePost from "@/views/SinglePost.vue";

const routes = [
  { name: "Recent", component: Recent, path: "/" },
  { name: "CreatePost", component: CreatePost, path: "/new" },
  { name: "Profile", component: Profile, path: "/profile" },
  {
    path: "/post/:id",
    name: "single-post",
    component: SinglePost,
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

export default router;
