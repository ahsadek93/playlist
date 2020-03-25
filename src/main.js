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
import firebase from 'firebase'
import firebaseConfig from './FBconfig'
import {
    eventBus
} from './eventBus'


Vue.use(vWow);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(vueRouter)

Vue.config.productionTip = false







new Vue({
    router,
    created() {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                eventBus.user = user;
                eventBus.isLoggedIn = true;
                this.$router.push("/dashboard");
            } else {
                eventBus.isLoggedIn = false;
                this.$router.push("/");
            }
        });
    },
    render: h => h(App),
}).$mount('#app')