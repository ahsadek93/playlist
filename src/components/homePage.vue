<template>
  <div id="homePage">
    <b-carousel
      id="homePageSlider"
      controls
      indicators
      @sliding-start="slideStart"
      @sliding-end="slideEnd"
      v-model="slider"
      :interval="4000"
      fade
    >
      <b-carousel-slide
        class="sliderImg"
        caption="First Slide"
        text="lorem lalljdkasfkh sjahfa jhsafja"
        img-src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-183b-eye-00366.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=b9ddd4ae2e9105e331ebdb5e9fc62e55"
      ></b-carousel-slide>
      <b-carousel-slide
        class="sliderImg"
        caption="Second Slide"
        text="lorem lalljdkasfkh sjahfa jhsafja"
        img-src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a015-helenal-104.jpg?dl=image-from-rawpixel-id-437363-jpeg.jpg&dpi=300&ixlib=php-3.1.0&w=1200&s=de981ace0ff271b316af113c1ce1fadf"
      ></b-carousel-slide>
      <b-carousel-slide
        class="sliderImg"
        caption="Final Slide"
        text="lorem lalljdkasfkh sjahfa jhsafja"
        img-src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/322-ted9122-x3-eye.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=136d553a20cfdda2c788a3dc781a7daa"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      slider: 0,
      isSliding: true
    };
  },
  methods: {
    slideStart() {
      this.isSliding = true;
    },
    slideEnd() {
      this.isSliding = false;
    }
  }
};
</script>

<style>
.sliderImg {
  height: 100vh;
}
</style>>
