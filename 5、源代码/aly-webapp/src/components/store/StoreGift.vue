<template>
  <div class="gift">
    <p>礼品兑换</p>
    <ul>
      <li v-for="(c,index) in gifts">
        <a href="">
          <img :src="c.pic">
          <span>{{c.span1}}</span>
          <span>{{c.span2}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

    import StoregiftApi from "../../api/StoregiftApi";

    export default {
        name: "StoreGift",
        data(){
          return{
            gifts:[]
          }
        },
        methods:{
          _initPageData() {
            StoregiftApi.getstoregiftData(data=>{
              this.gifts = data
              console.log(this.gifts)
            })
          }
        },
        created(){
          //首页加载数据
          this._initPageData()
        }
    }
</script>

<style scoped>
  .gift{
    background: #fff;
    padding-bottom: .2rem;
  }
  .gift p{
    padding: .15rem;
  }
  .gift ul{
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    border-top: 1px solid #ccc;
  }
  .gift ul li{
    width: 50%;
    text-align:center;
    padding-left: 0;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    flex-direction:column;
    justify-content:center;
  }
  .gift ul li:nth-of-type(2n){
    border-right: 0;
  }
  .gift ul li a{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: .2rem 0;
  }
  .gift ul li a img{
    width: .65rem;
    height: .65rem;
  }
  .gift ul li a span:nth-of-type(1){
    line-height:.4rem;
  }
  .gift ul li a span:nth-of-type(2){
    font-size:.12rem;
    color:#909090
  }

</style>
