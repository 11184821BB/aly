<template>
  <div>
  <section class="good" v-for="(p,i) in list">
    <div class="good-top">
      <div class="inp">
        <input type="checkbox" :value="i" v-model="checkData" class="check">
      </div>
      <div class="nr">
        <div class="good-img">
          <img :src="p.pic1" alt="">
        </div>
        <div class="good-nr">
          <p>{{p.p1}}</p>
          <div class="price-add">
            <div class="price">
              <span class="g-priceb">{{p.span1}}</span>
              <span class="g-price">￥{{p.price}}</span>
            </div>

            <div class="num">
              <a class="btn min is-disabled" @click="minus(i)">-
              </a>
              <input type="text" v-model="p.qal" class="num-input"/>
              <a class="btn add" @click="add(i)">+
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="good-cen">
      <div class="cen-left">
        <span>服务</span>
      </div>
      <div class="cen-right">
        <div class="service">
          <p>可选保障服务</p>
        </div>
      </div>
    </div>
    <div class="good-cen">
      <div class="cen-left">
        <span>配</span>
      </div>
      <div class="cen-right">
        <div class="service">
          <img :src="p.pic2" alt="">
          <p>{{p.p2}}</p>
        </div>
      </div>
    </div>

  </section>
    <!--<shopcart-swiper></shopcart-swiper>-->
    <shopcart-footer @changess="change" :tmmm="tmm" :tnnn="tnn"></shopcart-footer>
  </div>

</template>

<script>
    // import ShopCartsApi from "../../api/ShopCartsApi";
    import ShopcartFooter from "./ShopcartFooter";
    // import ShopcartSwiper from "./ShopcartSwiper";
    export default {
      name: "ShopcartLi",
      components: { ShopcartFooter},
      props: ["list","tmm","tnn"],
      data() {
        return {
          checkData: []
        }
      },
      methods: {
        minus(i) {
          this.$emit("minus", i)
        },
        add(i) {
          this.$emit("add", i)
        },
        change(e){
          if (e.target.checked){
            for(var i=0;i<=$(".check").length;i++){
              if (!$(".check")[i].checked){
                this.checkData.push($(".check")[i].value)
              }
            }
          } else{
            this.checkData=[]
          }
        }
      },
      watch: {
        checkData: {
          handler: function(){
            if (this.checkData.length==4){
              $("#all")[0].checked =true
            }else{
              $("#all")[0].checked =false
            }
            console.log(this.checkData)
          },
          deep: true
        }
      },
    }
</script>

<style scoped>
  .good {
    background-color: #ffffff;
    margin-bottom: .2rem;
  }
  .good .good-top {
    padding: .21rem;
    border-bottom: .01rem solid #eaeaea;
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .good .good-top .inp {
    width: .25rem;
    display: -webkit-flex;
  }
  .good .good-top .inp .check {
    width: .15rem;
    height: .15rem;
    border: .02rem solid #cbcbcb;
  }
  .good .good-top .nr {
    width: 100%;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .good .good-top .nr .good-img img {
    width: .6rem;
    height: .7rem;
  }
  .good .good-top .nr .good-nr {
    display: -webkit-flex;
    -webkit-flex-direction: column;
    position: relative;
  }
  .good .good-top .nr .good-nr p {
    /*letter-spacing: .02rem;*/
    color: #353535;
    line-height: .23rem;
    padding-bottom: .25rem;
  }
  .good .good-top .nr .good-nr .price-add {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
  }
  .good .good-top .nr .good-nr .price-add .price {
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
  }
  .good .good-top .nr .good-nr .price-add .price .g-priceb {
    color: #888;
    font-size: .05rem;
    text-decoration: line-through;
  }
  .good .good-top .nr .good-nr .price-add .price .g-price {
    color: #c5161d;
    font-size: .16rem;
    padding-right: .16rem;
    margin-left: .1rem;
  }
  .good .good-top .nr .good-nr .price-add .num {
    width: .8rem;
    height: .35rem;
    background-color: #fff;
    border: 1px solid #e1e1e1;
    color: #333333;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
  }
  .good .good-top .nr .good-nr .price-add .num .btn {
    width: .4rem;
    height: .35rem;
    text-align: center;
    line-height: .35rem;
    padding: 0 .04rem;
    font-size: 0.12rem;
  }
  .good .good-top .nr .good-nr .price-add .num .num-input {
    width: .25rem;
    height: .35rem;
    line-height: 43px;
    text-align: center;
    border: 1px solid #ccc;
    color: #000;
    font-size: 18px;
  }
  .good .good-cen {
    padding: .2rem .25rem;
    border-bottom: .01rem solid #eaeaea;
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .good .good-cen .cen-left {
    width: .45rem;
    display: -webkit-flex;
    color: #888;
  }
  .good .good-cen .cen-right {
    width: 100%;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    position: relative;
  }
  .good .good-cen .cen-right .service {
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    color: #333333;
    /*font-size: .16rem;*/
  }
  .good .good-cen .cen-right .service img {
    width: .3rem;
    height: .3rem;
    margin-right: .15rem;
  }
</style>
