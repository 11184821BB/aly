<template>
  <div class="serve">
    <p>服务中心<span>匠心打造的完整服务体系</span><a href="#"><i class="iconfont">&#xe65f;</i></a></p>
    <ul>
      <li v-for="(c,index) in list">
        <div>
          <a href="#">{{c.span1}}</a>
          <a href="#">{{c.span2}}</a>
        </div>
        <img :src="c.pic" alt="">
      </li>
    </ul>
    <div class="pic">
      <img src="../../../static/image/i23.png" alt="">
    </div>
    <div class="text">
      <div><span>精选</span>iptables防水墙规则导致短偶不通过的案例</div>
      <div><span>精选</span>iptables防水墙规则导致短偶不通过的案例</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexServe",
        data(){
          return{
            list:[
              {"span1":"智能顾问","pic":"../../../static/image/i13.png","span2":"多端触达"},
              {"span1":"支持与服务","pic":"../../../static/image/i14.png","span2":"多种技术支持"}
            ]
          }
        }
    }
</script>

<style scoped>
  .serve{
    margin-top: .18rem;
    padding: 0 .18rem;
    padding-bottom: .2rem;
    background: #fff;
  }
  .serve p{
    line-height:.49rem;
    display: flex;
    position: relative;
    font-size: .16rem;
  }
  .serve p span{
    font-size: .14rem;
    padding-left: .15rem;
    color: #999ba4;
  }
  .serve p a .iconfont{
    font-size: .18rem;
    position: absolute;
    right: 0;
  }
  .serve ul{
    height:.91rem;
    display:flex;
    padding-left: .15rem;
  }
  .serve ul li{
    flex:1;
    display:flex;
    position: relative;
  }
  .serve ul li div{
    flex:1;
    height:.45rem;
    align-self:center;

  }
  .serve ul li div a:nth-child(1){
    line-height:.25rem;
    display:block;
    font-weight:bold;
  }
  .serve ul li div a:nth-child(2){
    line-height:.2rem;
    font-size:12px;
  }
  .serve ul li img{
    width: .55rem;
    height: .55rem;
    top: .15rem;
    right: .2rem;
    position: absolute;
  }
  .serve .pic{
    width: 100%;
    padding-bottom: .1rem;
  }
  .serve .pic img{
    width: 100%;
  }
  .serve .text div{
    padding: .05rem 0;
  }
  .serve .text div span{
    display: inline-block;
    width: .36rem;
    line-height: .17rem;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #f15533;
    color: #f15533;
    margin-right: 8px;
  }
</style>
