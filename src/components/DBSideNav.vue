<template>
  <div class="col-3 BDSideNav">
    <b-collapse visible id="collapse-1" class="mt-2">
      <b-card>
        <router-link to="/dashboard">
          <a href="#" @click="showContent">Dashboard</a>
        </router-link>
      </b-card>
      <b-card>
        <router-link to="/dashboard/host">
          <a href="#" @click="hideContent">Host</a>
        </router-link>
      </b-card>
      <b-card>
        <router-link to="/dashboard/join">
          <a href="#" @click="hideContent">Join</a>
        </router-link>
      </b-card>
      <b-card>
        <a href="#" class="card-text" @click="logOut">Logout</a>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
import { eventBus } from "./../eventBus";
export default {
  name: "DBSideNav",
  data() {
    return {
      isContentHidden: null
    };
  },
  methods: {
    logOut() {},

    hideContent() {},

    showContent() {}
  },
  created() {
    this.logOut = eventBus.logOut;
    this.hideContent = eventBus.hideContent;
    this.showContent = eventBus.showContent;
  }
};
</script>