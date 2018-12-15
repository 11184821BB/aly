<template>
  <footer>
    <div class="js">
      <div class="input">
        <input type="checkbox" class="allcheck" id="all" @click="changes($event)">
      </div>
      <div class="total">
        <p class="qx">全选</p>
        <div class="all">
          <p>总计 <span class="allprice">￥：{{tmmm}}</span></p>
          <a href="" class="pay">结算 : {{tnnn}}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "ShopcartFooter",
      props:["tmmm","tnnn"],
      methods:{
          changes(e){
            this.$emit("changess",e)
          }
      }
    }
</script>

<style scoped>
  footer{
    background:#f6f5f4;
    position: fixed;
    bottom: .58rem;
    z-index: 1000;
    left: 0;
    width: 100%;
  }
  footer .js {
    height: .55rem;
    background: #fff;
    padding-left: .25rem;
    border-top: .01rem solid #eaeaea;
    display: -webkit-flex;
    -webkit-justify-content: space-between;

  }
  footer .js .input {
    width: .3rem;
    display: -webkit-flex;
    margin-top: .16rem;
  }
  footer .js .input .allcheck {
    width: .23rem;
    height: .23rem;
    border: .02rem solid #cbcbcb;
  }
  footer .js .total {
    width: 100%;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
  }
  footer .js .total .qx {
    color: #333333;
    font-size: .16rem;
  }
  footer .js .total .all {
    display: flex;
    flex-direction: row;
    /*-webkit-justify-content: space-between;*/
    -webkit-align-items: center;
    margin-bottom: -9px;
  }
  footer .js .total .all p {
    color: #333333;
    font-size: .16rem;
    padding-right: .1rem;

  }
  footer .js .total .all p span {
    color: #c9141d;
    font-size: .16rem;
  }
  footer .js .total .all .pay {
    width: 1.35rem;
    height: .45rem;
    display: block;
    line-height: .45rem;
    background-color: #c9141d;
    font-size: .19rem;
    color: #fff;
    text-align: center;
  }
</style>
