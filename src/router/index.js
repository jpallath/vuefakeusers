import Vue from "vue";
import Router from "vue-router";
import Users from "@/components/Users";
import Posts from "@/components/Posts";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Users",
      component: Users
    },
    {
      path: "/posts/:id",
      name: "Posts",
      component: Posts
    }
  ]
});
