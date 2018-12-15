<template>
    <div class="all">
      <shopcart-header :tn="totalNum"></shopcart-header>
      <shopcart-main :lists="shopcarts" @add="addQal" @minus="minQal" :tm="totalMoney" :tn="totalNum"></shopcart-main>
      <index-footer></index-footer>
    </div>
</template>

<script>
  import ShopCartsApi from "../api/ShopCartsApi";

    import ShopcartHeader from "../components/shopcart/ShopcartHeader";
    import ShopcartMain from "../components/shopcart/ShopcartMain";
    // import ShopcartFooter from "../components/shopcart/ShopcartFooter";
  import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "ShopcartAll",
      components: {IndexFooter, ShopcartMain, ShopcartHeader},
      data(){
        return{
          /**
           * 总件数
           */
          totalNum: 0,

          /**
           * 总金额
           */
          totalMoney: 0,
          /**
           * 商品列表
           */
          shopcarts:[]
        }
      },
      methods:{
        _countCarts(shopcarts) {
          this.totalMoney = 0
          this.totalNum = 0
          shopcarts.forEach((item,idx)=>{
            this.totalNum +=item.qal
            this.totalMoney += item.qal * item.price
          })
        },
        _initPageData() {
          ShopCartsApi.getshopcartsData(data=>{
            this.shopcarts = data
            console.log(this.shopcarts)
          })
        },
        /**
         * 给每个商品增加件数
         * @param i
         */
        addQal(i) {
          this.shopcarts[i].qal++
        },

        /**
         * 给每个商品减少件数
         * @param i
         */
        minQal(i) {
          if( this.shopcarts[i].qal <=1){
            this.shopcarts[i].qal =1
          }else{
            this.shopcarts[i].qal--
          }
        }
      },
      created(){
        //首页加载数据
        this._initPageData()
      },
      watch:{

        //监听shopcarts中的数量发生变化，重新计算
        shopcarts:{
          handler:function (n,o) {
            this._countCarts(this.shopcarts)
          },
          deep:true
        }
      }
    }
</script>

<style scoped>
  .all{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
