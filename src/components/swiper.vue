<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img src="../assets/demo/1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/demo/2.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/demo/3.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/demo/4.jpg"></swiper-slide>
      <div class="swiper-pagination" slot="label"></div>
      <div class="swiper-button-prev" slot="button-prev">prev</div>
      <div class="swiper-button-next" slot="button-next">next</div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        width: window.innerWidth,
        height: 350,
        loop: true,
        direction: 'vertical', // vertical horizontal
        notNextTick: true,
        autoplay: 3000,
        effect: 'coverflow',
        grabCursor: true,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        mousewheelControl: true,
        observeParents: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  }
}
</script>

<style>
.swiper{
  width: 100%;
  height: 350px;
  overflow: hidden;
}
.swiper-slide img{
  width: 100%;
}
.swiper-pagination{
  position: fixed;
  top: 400px;
  left: 50%;
}
</style>
