import Vue from 'vue'
import VueRouter from 'vue-router'
import article from "../components/article";
import about from "../components/about";
import login from "../components/admin/login";
import articleList from "../components/admin/articleList";
import articleEdit from "../components/admin/articleEdit";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // name: 'Home',
        // components: {default: about}
        redirect: '/article'
    },
    {
        path: '/about',
        // name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: about
    },
    {
        path: '/article',
        component: article
    },
    {
        path: '/admin/login',
        component: login
    },
    {
        path: '/admin/articleList',
        component: articleList
    },
    {
        path: '/admin/articleEdit',
        component: articleEdit
    }
]

const router = new VueRouter({
    routes
})

export default router
