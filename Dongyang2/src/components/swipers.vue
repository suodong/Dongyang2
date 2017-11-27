<template>
  <swiper :options="swiperOption" ref="mySwiper" id="swiperBox">
    
    <swiper-slide class="swiperImg"><img src="../assets/default.png" alt=""></swiper-slide>
    <swiper-slide class="swiperImg"><img src="../assets/xmad_kIcCh.jpg" alt=""></swiper-slide>
    <swiper-slide class="swiperImg"><img src="../assets/xmad_nUYKy.jpg" alt=""></swiper-slide>
    <swiper-slide class="swiperImg"><img src="../assets/default.png" alt=""></swiper-slide>
    <swiper-slide class="swiperImg"><img src="../assets/default.png" alt=""></swiper-slide>
    <swiper-slide class="swiperImg"><img src="../assets/xmad_UKADe.jpg" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
</swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'swipers',
    components:{
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 2500,
          direction : 'horizontal',
          effect:"fade",
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          paginationType:"bullets",
          paginationClickable :true,
          pagination : '.swiper-pagination',
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,

        }
      }
    },
    computed: {
       swiper() {
         return this.$refs.mySwiper.swiper
       }
    }
  }
</script>
<style lang="scss" scope>
  #swiperBox{
    width: 100%;
    // height: 460px;
    .swiperImg{
      width: 1226px;
      height: 380px;
      // display:block;
      float: left;
      img{
        width:100%;
        height: 100%;
      }
    }
  }
</style>