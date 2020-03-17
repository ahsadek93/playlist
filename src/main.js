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

Vue.use(vWow);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(vueRouter)

Vue.config.productionTip = false

export const eventBus = new Vue({
    data() {
        return {
            isLoggedIn: null
        }
    },

    watch: {
        isLoggedIn() {
            this.$emit("statusChange", this.isLoggedIn);
        }
    }
});



//firebase config settings //

const firebaseConfig = {
    apiKey: "AIzaSyBo7JcQzAh6co3i4hLy1JvqOwp-leUxpPw",
    authDomain: "the-playlist-271104.firebaseapp.com",
    databaseURL: "https://the-playlist-271104.firebaseio.com",
    projectId: "the-playlist-271104",
    storageBucket: "the-playlist-271104.appspot.com",
    messagingSenderId: "1008335072180",
    appId: "1:1008335072180:web:a176e9496fbe57c61660e1",
    measurementId: "G-TJ86VWHQFS"
};


new Vue({
    router,
    created() {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$router.push("/dashboard");
                eventBus.isLoggedIn = true;
            } else {
                this.$router.push("/");
                eventBus.isLoggedIn = false;
            }
        });
    },

    render: h => h(App),
}).$mount('#app')