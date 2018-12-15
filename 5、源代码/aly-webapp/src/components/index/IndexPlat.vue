<template>
  <div class="plat">
    <p>众包平台<span>全球领先、安全、稳定</span><a href="#"><i class="iconfont">&#xe65f;</i></a></p>
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
        name: "IndexPlat",
        data(){
          return{
            list:[
              {"span1":"发布需求","pic":"../../../static/image/i16.png","span2":"一分钟轻松发布"},
              {"span1":"项目大厅","pic":"../../../static/image/i17.png","span2":"八大集市全集"},
              {"span1":"服务介绍","pic":"../../../static/image/i18.png","span2":"免费项目介绍"}
            ]
          }
        }
    }
</script>

<style scoped>
  .plat{
    background: #fff;
    padding: 0 .15rem .15rem;
    margin-top: .18rem;
    overflow: hidden;
  }

  .plat p{
    line-height:.49rem;
    display: flex;
    position: relative;
    font-size: .16rem;
  }
  .plat p span{
    font-size: .14rem;
    padding-left: .15rem;
    color: #999ba4;
  }
  .plat p a .iconfont{
    font-size: .18rem;
    position: absolute;
    right: 0;
  }
  .plat ul{
    display: flex;
    width: 100%;
  }
  .plat ul li{
    flex: 1;
    text-align:center;
    padding-left: 0;
  }
  .plat ul li a{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: .1rem 0;
  }
  .plat ul li a img{
    width: .45rem;
    height: .45rem;
  }
  .plat ul li a span:nth-of-type(1){
    line-height:.3rem;
  }
  .plat ul li a span:nth-of-type(2){
    font-size:.12rem;
    color:#909090
  }
</style>
