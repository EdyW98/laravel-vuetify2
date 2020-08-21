import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./components/Home.vue";
import Dashboard from "./components/Dashboard.vue"
import Dht from "./components/Dht.vue";
import Ph from "./components/Ph.vue";
import Soil from "./components/Soil.vue";
import Login from "./components/Login.vue";

Vue.use(VueRouter)

const routes = [
    {path: '/login', component: Login},
    {
        path: '/', component: Dashboard,
        children: [
            {path: '/', component: Home},
            {path: '/dht', component: Dht},
            {path: '/ph', component: Ph},
            {path: '/soil', component: Soil},
        ]
    },
]

const router = new VueRouter({
    routes,
    hasbang: false,
    mode: 'history',
});

export default router;