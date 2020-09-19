import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./components/Home.vue";
import Dashboard from "./components/Dashboard.vue"
import Dht from "./components/DhtSensor.vue";
import Ph from "./components/PhSensor.vue";
import Soil from "./components/SoilSensor.vue";
import Login from "./components/Login.vue";
import DailyLog from "./components/DailyLog.vue";

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
            {path: '/dailylog', component: DailyLog},
        ]
    },
]

const router = new VueRouter({
    base: '/',
    routes,
    hasbang: false,
    mode: 'history',
});

export default router;