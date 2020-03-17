<template>
  <div class="dashboard">
    <h1 class="mt-5 pt-5">Hello {{user.displayName}}</h1>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      user: [""]
    };
  },

  created() {
    eventBus.$on("userData", data => {
      this.user = data;
    });
  }
};
</script>
