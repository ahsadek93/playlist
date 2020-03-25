<template>
  <div id="app">
    <appNav />
    <router-view></router-view>
  </div>
</template>

<script>
import appNav from "./components/appNav";
import { eventBus } from "./eventBus";

export default {
  name: "App",
  components: {
    appNav
  },

  data() {
    return {
      isLoggedIn: false
    };
  },

  created() {
    eventBus.$on("statusChange", data => {
      this.isLoggedIn = data;
    });
  }
};
</script>
