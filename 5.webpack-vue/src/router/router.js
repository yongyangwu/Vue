import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import register from '../views/register/register.vue'
import news from '../views/news/news.vue'
export default new Router({
    routes: [
        {
            path: '/',
            name: 'register',
            component: register
        },
        {
            path: '/news',
            name: 'news',
            component: news
        }
    ]
})
