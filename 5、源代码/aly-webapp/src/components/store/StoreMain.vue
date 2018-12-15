<template>
    <main>
      <!---------------------banner----------------->
      <div class="banner">
        <p><span>0</span>积分</p>
        <ul>
          <li>积分明细</li>
          <li>兑换记录</li>
        </ul>
        <span class="last">未登录</span>
      </div>

      <!-----------------------ad------------------->
      <div class="ad">
        <div>
          <div class="solve">
            <p>解答技术问题挣积分</p>
          </div>
        </div>
        <div>
          <div class="serve">
            <p>做任务挣积分</p>
          </div>
        </div>
      </div>
      <!-----------------------gift------------------->
      <store-gift></store-gift>
    </main>
</template>

<script>
    import StoreGift from "./StoreGift";
    export default {
        name: "StoreMain",
      components: {StoreGift}
    }
</script>

<style scoped>
  main{
    flex: 1;
    overflow: auto;
  }
  main .banner{
    position: relative;
    padding: .4rem 0 .3rem;
    background: #cdebf6;
  }
  main .banner p{
    color: #626665;
    text-align: center;
  }
  main .banner p span{
    font-size: 24px;
  }
  main .banner ul{
    display: flex;
    justify-content: center;
  }
  main .banner ul li{
    padding: .2rem .2rem;
    color: #42afb6;
  }
  main .banner span.last{
    color: #fff;
    position: absolute;
    right: 0;
    top: .65rem;
    display: block;
    width: .78rem;
    line-height: .33rem;
    background: #39caff;
    text-align: center;
    border-top-left-radius: .15rem;
    border-bottom-left-radius: .15rem;
  }
  /*=======================ad===================*/
  main .ad{
    padding: .2rem;
    display: flex;
    background: #fff;
  }
  main .ad>div{
    flex: 1;
  }
  main .ad>div:nth-of-type(1){
    padding-right: .18rem;

  }
  main .ad>div:nth-of-type(1) div{
    padding: .4rem .1rem;
    background: linear-gradient(90deg,#23a7be,#a8eef0);
  }
  main .ad>div:nth-of-type(2) div{
    padding: .4rem .1rem;
    background: linear-gradient(90deg,#b176ca,#7e03da);
  }
  main .ad>div div p{
    color: #fff;
    text-align: center;
  }
</style>
