<template>
  <div class="hotProducts">
    <p>热门产品<span>全球领先、安全、稳定</span><a href="#"><i class="iconfont">&#xe65f;</i></a></p>
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
        name: "IndexHot",
        data(){
          return{
            list:[
              {"span1":"云服务器ECS","pic":"../../../static/image/i5.png","span2":"安全、稳定、高性能"},
              {"span1":"域名申请","pic":"../../../static/image/i6.png","span2":"安全、稳定、高性能"},
              {"span1":"云服务器ECS","pic":"../../../static/image/i5.png","span2":"安全、稳定、高性能"},
              {"span1":"域名申请","pic":"../../../static/image/i6.png","span2":"安全、稳定、高性能"}
            ]
          }
        }
    }
</script>

<style scoped>
  .hotProducts{
    background: #fff;
    padding: 0 .15rem .15rem;
    margin-top: .18rem;
  }
  .hotProducts p{
    line-height:.49rem;
    display: flex;
    position: relative;
    font-size: .16rem;
  }
  .hotProducts p span{
    font-size: .14rem;
    padding-left: .15rem;
    color: #999ba4;
  }
  .hotProducts p a .iconfont{
    font-size: .18rem;
    position: absolute;
    right: 0;
  }
  .hotProducts ul{
    display: -webkit-box;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .hotProducts ul li{
    width: 45%;
    text-align:center;
    padding-bottom: .2rem;
    padding:0 .1rem;
    padding-left: 0;
  }
  .hotProducts ul li a{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: #f8f8f8;
    padding: .2rem 0;
  }
  .hotProducts ul li a img{
    width: .8rem;
    height: .8rem;
  }
  .hotProducts ul li a span:nth-of-type(1){
    line-height:.3rem;
  }
  .hotProducts ul li a span:nth-of-type(2){
    font-size:.12rem;
    color:#909090
  }
</style>
