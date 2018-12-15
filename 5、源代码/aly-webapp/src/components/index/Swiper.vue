<template>
  <div class="sliderBox">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/image/d5.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/image/d7.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/image/d8.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/image/d9.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/image/d10.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/image/d11.jpg" alt=""></div>
      </div>
      <!----------添加分页器------>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "Swiper",
        data () {
          return {
            // msg: 'Welcome to Your Vue.js App'
          }
        },
        mounted(){
          this.$nextTick(()=>{
           var swiper = new Swiper('.swiper-container', {
              loop:true,
              spaceBetween: 30,
              centeredSlides: true,
              autoplay: {
                delay: 1500,
                disableOnInteraction: false,
              },
             pagination: {
               el: '.swiper-pagination'
             }
            })
          })
        }
    }
</script>

<style scoped>
  @import'../../assets/css/swiper.min.css';
  .sliderBox{
    height: 184px;
  }
  .sliderBox img{
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-pagination{
    height: 30px;
  }
</style>
