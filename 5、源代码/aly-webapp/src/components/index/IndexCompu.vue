<template>
  <div class="compu">
    <p>创业孵化<span>惠普赋能全球创业者</span><a href="#"><i class="iconfont">&#xe65f;</i></a></p>
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
        name: "IndexCompu",
        data(){
          return{
            list:[
              {"span1":"创业园区","pic":"../../../static/image/i22.png","span2":"办公室入驻"},
              {"span1":"融资申请","pic":"../../../static/image/i24.png","span2":"接触知名VC"},
              {"span1":"风池计划","pic":"../../../static/image/i25.png","span2":"阿里资金扶持"}
            ]
          }
        }
    }
</script>

<style scoped>
  .compu{
    background: #fff;
    padding: 0 .15rem .15rem;
    margin-top: .18rem;
    overflow: hidden;
  }

  .compu p{
    line-height:.49rem;
    display: flex;
    position: relative;
    font-size: .16rem;
  }
  .compu p span{
    font-size: .14rem;
    padding-left: .15rem;
    color: #999ba4;
  }
  .compu p a .iconfont{
    font-size: .18rem;
    position: absolute;
    right: 0;
  }
  .compu ul{
    display: flex;
    width: 100%;
  }
  .compu ul li{
    flex: 1;
    text-align:center;
    padding-left: 0;
  }
  .compu ul li a{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: .1rem 0;
  }
  .compu ul li a img{
    width: .45rem;
    height: .35rem;
  }
  .compu ul li a span:nth-of-type(1){
    line-height:.3rem;
  }
  .compu ul li a span:nth-of-type(2){
    font-size:.12rem;
    color:#909090;
  }
</style>
