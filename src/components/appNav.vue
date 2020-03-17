<template>
  <b-navbar sticky class="bg-light position-absolute w-100">
    <b-navbar-brand class="mr-auto">Playlist</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item v-if="!isLoggedIn" @click="logMe">Login</b-nav-item>
      <b-nav-item v-if="isLoggedIn" @click="logMe">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import { eventBus } from "../main";

export default {
  name: "appNav",
  data() {
    return {
      isLoggedIn: false
    };
  },

  methods: {
    logMe() {
      this.isLoggedIn = !this.isLoggedIn;
    }
  },

  watch: {
    isLoggedIn() {
      eventBus.$emit("statusChange", this.isLoggedIn);
    }
  }
};
</script>

