import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import article from "../components/article";
import about from "../components/about";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    components: {default:about}
  },
  {
    path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: about
  }
]

const router = new VueRouter({
  routes
})

export default router
