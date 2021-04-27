import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components.vue/pages/myFirstVuePage.vue'
import newRoutePage from './components.vue/pages/newRoutePage.vue'

import home from './components.vue/pages/home.vue'
import tags from './components.vue/pages/tags.vue'

const routes = [
    //Projects routers

    {
        path: '/',
        component: home,
    },
    {
        path: '/tags',
        component: tags,
    },































    {
        path: '/my-new-vue-route',
        component: firstPage
    },

    // Basic setup tutorial
    {
        path: '/my-new-vue-route',
        component: firstPage
    },
    {
        path: '/new-route',
        component: newRoutePage
    }
]

export default new Router({
    mode: 'history',
    routes
})