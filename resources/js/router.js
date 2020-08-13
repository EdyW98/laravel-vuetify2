import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./components/Home.vue";
import Dht from "./components/Dht.vue";
import Ph from "./components/Ph.vue";
import Soil from "./components/Soil.vue";

Vue.use(VueRouter)

const routes = [
    {
        //path: '/', component: () => import('./components/Home.vue'/* webpackChunkName: "js/chunk-root-admin" */),
        path: '/',
        component: Home
    },
    {path: '/dht', component: Dht},
    {path: '/ph', component: Ph},
    {path: '/soil', component: Soil},
]

const router = new VueRouter({
    routes,
    hasbang: false,
    mode: 'history',
});

export default router;