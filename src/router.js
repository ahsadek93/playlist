import vueRouter from 'vue-router'
import homePage from './components/homePage'
import dashboard from './components/dashboard'
import host from './components/dashboard/host'
import join from './components/dashboard/join'

const router = new vueRouter({
    routes: [{
            path: '/',
            name: 'homePage',
            component: homePage
        },

        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard,
            children: [{
                    path: 'host',
                    name: 'host',
                    component: host
                },
                {
                    path: 'join',
                    name: 'join',
                    component: join
                }
            ]
        }

    ],
    mode: 'history'
})

export default router;