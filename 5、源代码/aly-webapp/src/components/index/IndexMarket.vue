<template>
  <div class="market">
    <p>物联网市场<span>物联网企业和客户服务平台</span><a href="#"><i class="iconfont">&#xe65f;</i></a></p>
    <ul>
      <li v-for="(c,index) in list">
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

    export default {
        name: "IndexMarket",
        data(){
          return{
            list:[
              {"span1":"找方案","pic":"../../../static/image/i8.png","span2":"覆盖各行各业"},
              {"span1":"IOT头条","pic":"../../../static/image/i9.png","span2":"一手物联网"},
              {"span1":"项目合作","pic":"../../../static/image/i10.png","span2":"共享万亿商机"}
            ]
          }
        }
    }
</script>

<style scoped>
  .market{
    background: #fff;
    padding: 0 .15rem .15rem;
    margin-top: .18rem;
    overflow: hidden;
  }
  .market p{
    line-height:.49rem;
    display: flex;
    position: relative;
    font-size: .16rem;
  }
  .market p span{
    font-size: .14rem;
    padding-left: .15rem;
    color: #999ba4;
  }
  .market p a .iconfont{
    font-size: .18rem;
    position: absolute;
    right: 0;
  }

  .market ul{
    display: flex;
    width: 100%;
  }
  .market ul li{
    flex: 1;
    text-align:center;
    padding-left: 0;
  }
  .market ul li a{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: .1rem 0;
  }
  .market ul li a img{
    width: .6rem;
    height: .6rem;
  }
  .market ul li a span:nth-of-type(1){
    line-height:.3rem;
  }
  .market ul li a span:nth-of-type(2){
    font-size:.12rem;
    color:#909090
  }

</style>
