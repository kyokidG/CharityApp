import Vue from "vue";
import Router from "vue-router";
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeGlobal")
        },
        {
          path: "my-feed",
          name: "home-my-feed",
          component: () => import("@/views/HomeMyFeed")
        },
        {
          path: "tag/:tag",
          name: "home-tag",
          component: () => import("@/views/HomeTag")
        }
      ]
    },
    {
      path: "/echipa",
      name: "team",
      component: () => import("@/views/Team")
    },
    {
      path: "/despre-noi",
      name: "despre-noi",
      component: () => import("@/views/DespreNoi")
    },
    {
      path: "/implica-te",
      name: "join-un",
      component: () => import("@/views/JoinUs")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("@/views/Register")
    },
    {
      name: "settings",
      path: "/settings",
      component: () => import("@/views/Settings")
    },
    // Handle child routes with a default, by giving the name to the
    // child.
    // SO: https://github.com/vuejs/vue-router/issues/777
    {
      path: "/@:username",
      component: () => import("@/views/Profile"),
      children: [
        {
          path: "",
          name: "profile",
          component: () => import("@/views/ProfileArticles")
        },
        {
          name: "profile-favorites",
          path: "/favorites",
          component: () => import("@/views/ProfileFavorited")
        },
        {
          name: "statistics",
          path: "/statistici",
          component: () => import("@/views/ProfileStatistics")
        }
      ]
    },
    {
      name: "article",
      path: "/articles/:slug",
      component: () => import("@/views/Article"),
      props: true
    },
    {
      name: "article-edit",
      path: "/editor/:slug?",
      props: true,
      component: () => import("@/views/ArticleEdit")
    }
  ]
});
