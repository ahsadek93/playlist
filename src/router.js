import vueRouter from 'vue-router'
import homePage from './components/homePage'
const router = new vueRouter({
    routes: [{
        path: '/',
        name: homePage,
        component: homePage
    }],
    mode: 'history'
})

export default router;