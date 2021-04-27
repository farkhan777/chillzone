require('./bootstrap');

window.Vue = require('vue');

import router from './router'

Vue.component('mainapp', require('./components.vue/mainapp.vue').default)

const app = new Vue({
    el: '#app',
    router
})