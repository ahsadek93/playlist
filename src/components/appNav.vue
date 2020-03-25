<template>
  <b-navbar sticky class="bg-light" :class="{ 'position-absolute w-100' : !isLoggedIn }">
    <b-navbar-brand v-if="!isLoggedIn" class="mr-auto">
      <router-link to="/">ThePlayList</router-link>
    </b-navbar-brand>
    <b-navbar-brand v-if="isLoggedIn" class="mr-auto">
      <router-link to="/dashboard">ThePlayList</router-link>
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item id="loginBtn" v-if="!isLoggedIn" @click="logMe">Login</b-nav-item>
      <b-nav-item id="logoutBtn" v-if="isLoggedIn" @click="logOut">
        <router-link to="/">Logout</router-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
var provider = new firebase.auth.GoogleAuthProvider();

import { eventBus } from "../eventBus";
import firebase from "firebase";

export default {
  name: "appNav",
  data() {
    return {
      isLoggedIn: null,
      user: [""]
    };
  },

  created() {
    eventBus.$on("statusChange", data => {
      this.isLoggedIn = data;
    });
    this.logOut = eventBus.logOut;
  },

  methods: {
    logMe() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          this.user = res.user;
          console.log(this.user);
        })
        .catch(err => {
          console.log(err);
        });
    },

    logOut() {}
  },

  watch: {
    isLoggedIn() {
      eventBus.isLoggedIn = this.isLoggedIn;
    },

    user() {
      eventBus.$emit("userData", this.user);
    }
  }
};
</script>

