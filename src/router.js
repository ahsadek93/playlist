import vueRouter from 'vue-router'
import homePage from './components/homePage'
import dashboard from './components/dashboard'


const router = new vueRouter({
    routes: [{
            path: '/',
            name: 'homePage',
            component: homePage
        },

        {
            path: '/dashboard',
            name: 'Dashboard',
            component: dashboard
        }

    ],
    mode: 'history'
})

export default router;