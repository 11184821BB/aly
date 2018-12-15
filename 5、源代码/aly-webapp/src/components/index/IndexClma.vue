<template>
  <div class="clma">
    <p>云市场<span>提供全球高质量的软件和服务</span><a href="#"><i class="iconfont">&#xe65f;</i></a></p>
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
        name: "IndexClma",
      data(){
        return{
          list:[
            {"span1":"全民建站","pic":"../../../static/image/i19.png","span2":"海量模板供应"},
            {"span1":"服务市场","pic":"../../../static/image/i20.png","span2":"全面上云支持"},
            {"span1":"企业应用","pic":"../../../static/image/i21.png","span2":"助理企业成长"}
          ]
        }
      }
    }
</script>

<style scoped>
  .clma{
    background: #fff;
    padding: 0 .15rem .15rem;
    margin-top: .18rem;
    overflow: hidden;
  }

  .clma p{
    line-height:.49rem;
    display: flex;
    position: relative;
    font-size: .16rem;
  }
  .clma p span{
    font-size: .14rem;
    padding-left: .15rem;
    color: #999ba4;
  }
  .clma p a .iconfont{
    font-size: .18rem;
    position: absolute;
    right: 0;
  }
  .clma ul{
    display: flex;
    width: 100%;
  }
  .clma ul li{
    flex: 1;
    text-align:center;
    padding-left: 0;
  }
  .clma ul li a{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: .1rem 0;
  }
  .clma ul li a img{
    width: .45rem;
    height: .45rem;
  }
  .clma ul li a span:nth-of-type(1){
    line-height:.3rem;
  }
  .clma ul li a span:nth-of-type(2){
    font-size:.12rem;
    color:#909090
  }
</style>
