import Vue from 'vue'
import App from './App.vue'
import {
    BootstrapVue,
    BootstrapVueIcons
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueRouter from 'vue-router'
import router from './router'
import vWow from 'v-wow'
Vue.use(vWow);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(vueRouter)

Vue.config.productionTip = false

export const eventBus = new Vue();



new Vue({
    router,
    render: h => h(App),
}).$mount('#app')