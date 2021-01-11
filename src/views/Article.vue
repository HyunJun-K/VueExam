<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart(slide)"
      @sliding-end="onSlideEnd(slide)"
    >
      <b-carousel-slide
        img-src="https://static.coupangcdn.com/ia/cmg_paperboy/image/1610079757138/C1_PC1_A.jpg"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://image11.coupangcdn.com/image/cmg/oms/banner/3cd1ae45-3749-47b8-a9a0-358d820ad2c0_1920x450.jpg">
      </b-carousel-slide>

    </b-carousel>


    <div class="section mt-2">
        <span> 오늘의 발견</span> | <span> 오늘 쿠팡이 엄선한 가장 HOT한 상품!</span>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
  }
</script>

<style>
</style>
