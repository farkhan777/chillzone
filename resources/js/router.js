import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components.vue/pages/myFirstVuePage.vue'
import newRoutePage from './components.vue/pages/newRoutePage.vue'

import home from './components.vue/pages/home.vue'
import tags from './components.vue/pages/tags.vue'
import createBlog from './components.vue/pages/createBlog.vue'
import category from './components.vue/pages/category.vue'
import adminusers from './components.vue/pages/adminusers.vue'
import role from './components.vue/pages/role.vue'
import assignRole from './components.vue/pages/assignRole.vue'

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
        path: '/createBlog',
        component: createBlog,
    },
    {
        path: '/category',
        component: category,
    },
    {
        path: '/adminusers',
        component: adminusers,
    },
    {
        path: '/role',
        component: role,
    },
    {
        path: '/assignRole',
        component: assignRole,
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