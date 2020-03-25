<template>
  <div class="dashboard container">
    <div class="row">
      <div class="col-12 text-center mt-4">
        <h2>Hello {{user.displayName}}</h2>
        <h4>Welcome to ThePlayList</h4>
      </div>
      <div class="col-12">
        <!-- <b-button v-b-toggle.collapse-1 variant="primary">Main Menu</b-button> !-->
      </div>
      <DBSideNav />
      <div class="col-4" v-if="!isContentHidden">
        <router-link to="/dashboard/host">
          <b-card
            overlay
            img-alt="Card Image"
            text-variant="dark"
            title="Host"
            @click="hideContent"
            class="h-100"
          >
            <img
              src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/-a010-markuss-0287.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=ffe636487903b18d629e979a45714e70"
              class="h-100 w-100 position-absolute cardImg"
            />
          </b-card>
        </router-link>
      </div>
      <div class="col-4" v-if="!isContentHidden">
        <router-link to="/dashboard/join">
          <b-card
            overlay
            img-alt="Card Image"
            text-variant="white"
            title="Join"
            @click="hideContent"
            class="h-100"
          >
            <img
              src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/267-ted2344-chim.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=fd45578fc8c66f635a749c0edc84e3a9"
              class="h-100 w-100 position-absolute cardImg"
            />
          </b-card>
        </router-link>
      </div>
      <div class="col-9">
        <div class="row">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../eventBus";
import DBSideNav from "./DBSideNav";

export default {
  data() {
    return {
      name: "dashboard",
      user: [""],
      visable: true,
      isContentHidden: false
    };
  },

  components: {
    DBSideNav
  },

  methods: {
    hideContent() {}
  },

  created() {
    //getting user data
    eventBus.$on("userData", res => {
      this.user = res;
    });
    this.user = eventBus.user;

    // updating dashboard content
    eventBus.$on("contentChange", res => {
      this.isContentHidden = res;
    });
    this.hideContent = eventBus.hideContent;
  }
};
</script>


<style>
.cardImg {
  top: 0;
  left: 0;
  z-index: 101;
}

.card-title {
  z-index: 102;
  position: absolute;
}
</style>