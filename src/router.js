import Vue from "vue";
import VueRouter from "vue-router";
import Article from "./views/Article";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      component: Article
    },
  ]
});

export default router;