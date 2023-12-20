import { createApp } from 'vue'
import App from './App.vue'

// creations des routes en faisant appel a createrouter et createwebhashhistory

import {createRouter, createWebHashHistory} from 'vue-router';

// import de la homepage
import HomePage from './page/HomePage.vue'
import RestaurantPage from './page/RestaurantPage.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/restaurantPage', component: RestaurantPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

const VueApp = createApp(App)

VueApp.use(router)

VueApp.mount('#app');
