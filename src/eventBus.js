import Vue from 'vue'
import firebase from 'firebase'



export const eventBus = new Vue({
    data() {
        return {
            isLoggedIn: null,
            user: [''],
            isContentHidden: null
        }
    },

    watch: {
        // logged in status //

        isLoggedIn() {
            this.$emit("statusChange", this.isLoggedIn);
        },
        // user data changes //
        user() {
            this.$emit('userData', this.user);
            console.log('bus user changed')
        }
    },

    methods: {

        // logout method

        logOut() {
            firebase
                .auth()
                .signOut()
                .then(function () {
                    this.$router.push("/");
                    this.isLoggedIn = false;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        hideContent() {
            this.isContentHidden = true;
            eventBus.$emit("contentChange", this.isContentHidden);
        },

        showContent() {
            this.isContentHidden = false;
            eventBus.$emit("contentChange", this.isContentHidden);
        }
    }
});