<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(p,index) in products">
          <a href="#">
            <div class="img-box">
              <img :src="p.pic1" alt="">
            </div>
            <p class="p-name"><span>{{p.span1}}</span></p>
            <p class="p-price"><span>￥{{p.span2}}</span></p>
            <div class="jia">
              <img :src="p.pic2" alt="">
            </div>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper';
    import ShopproductsApi from "../../api/ShopproductsApi";
    export default {
        name: "ShopcartSwiper",
        data () {
          return {
            products:[]
          }
        },
        methods:{
          _initPageData() {
            ShopproductsApi.getshopswiperData(data=>{
              this.products = data
              console.log(this.products)

              this.$nextTick(()=>{
                var swiper = new Swiper('.swiper-container', {
                  slidesPerView: 3,
                  autoplay:true,
                  loop:true,
                  spaceBetween: 30,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }
                })
              })
            })
          },
        },
        created(){
          //首页加载数据
          this._initPageData()
        }
    }
</script>

<style scoped>
  @import'../../assets/css/swiper.min.css';
  .swiper{
    width: 100%;
    height: 2rem;
    background: #fff;
    margin-bottom: 60px;
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

  a {
    position: relative;
    width: 1.56rem;
    padding: .2rem 0 .12rem;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-flex-direction: column;
  }
  .img-box {
    width: .25rem;
    height: .55rem;
    margin: 0 auto;
  }
  .img-box img {
    width: .35rem;
    height: .55rem;
  }
  a .p-name {
    width: .75rem;
    color: #3f3f3f;
    line-height: .25rem;
    font-size: 14px;
    margin-top: .08rem;
    display: -webkit-flex;
  }
  .p-price {
    font-size: .11rem;
    color: #c8141d;
  }
  a .jia {
    position: absolute;
    right: 3px;
    top: 10px;
    width: .2rem;
    height: .2rem;
    border: .01rem solid #cdcdcd;
    border-radius: 50%;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: center;
  }
  a .jia img {
    width: .12rem;
    height: .12rem;
  }
</style>
