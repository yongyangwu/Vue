console.log("这是webpack的入口js22");
import './css/index.css'
import Vue from 'vue'
import App from './app.vue'
import router from './router/router.js'
import axios from 'axios'
Vue.prototype.$http= axios;

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: { App }
});