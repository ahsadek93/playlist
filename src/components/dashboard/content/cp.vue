<template>
  <div class="cp row">
    <div class="col-12">
      <p class="mr-2">Playlist ID:</p>
      <input type="text" />
    </div>
  </div>
</template>
<script>
export default {
  name: "cp",
  data() {
    return {
      isHost: null
    };
  }
};
</script>