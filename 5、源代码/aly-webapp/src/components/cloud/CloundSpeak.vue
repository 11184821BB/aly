<template>
  <div class="speak">
    <p><i class="iconfont">&#xe656;</i>聚能聊<span>查看更多</span></p>
    <div class="big">
      <div class="one" v-for="(c,index) in speak">
        <div class="top">
          <div class="left">
            <span><img :src="c.pic" alt=""></span>
            <span>{{c.name}}</span>
          </div>
          <div class="right">
            <p>{{c.text}}</p>
          </div>
        </div>

        <div class="bottom">
          <ul>
            <li>
              <img :src="c.pic1" alt="">
              <span>{{c.span1}}</span>
            </li>
            <li>
              <img :src="c.pic2" alt="">
              <span>{{c.span2}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CloundSpeak",
        data(){
          return{
            speak:[
              {"pic":"../../../static/image/d1.png","name":"若有似无","text":"今天咱们严肃活泼的聊聊下一代大数据计算引擎","span1":"福禄寿淘公仔","pic1":"../../../static/image/d2.png","span2":"黑色T恤","pic2":"../../../static/image/d3.png"},
              {"pic":"../../../static/image/d1.png","name":"若有若无","text":"菜鸟教程 - 学的不仅是技术,更是梦想!","span1":"黑色T恤","pic1":"../../../static/image/d3.png","span2":"福禄寿淘公仔","pic2":"../../../static/image/d2.png"},
              {"pic":"../../../static/image/d1.png","name":"三叔","text":"Bootstrap来自 Twitter,是目前最受欢迎的前端框架","span1":"福禄寿淘公仔","pic1":"../../../static/image/d2.png","span2":"黑色T恤","pic2":"../../../static/image/d3.png"}
            ]
          }
        }
    }
</script>

<style scoped>
  .speak{
    padding-bottom: .15rem;
    background: #fff;
    margin-top: .18rem;
    padding-left: .2rem;
  }
  .speak p{

    line-height: .4rem;
    position: relative;
  }
  .speak p .iconfont{
    font-size: .2rem;
    padding-right: .05rem;
  }

  .speak p span{
    position: absolute;
    right: .2rem;
    color: #00c1de;
  }
  .speak .big{
    display: -webkit-box;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .speak .big .one{
    width: 90%;
    padding-right: .15rem;
  }
  .speak .big .one .top{
    display: flex;
    background: #599be0;
    padding: .1rem;
  }
  .speak .big .one .top .left{
    width: .95rem;
  }
  .speak .big .one .top .left img{
    width: .65rem;
    height: .65rem;
  }
  .speak .big .one .top .left span:nth-of-type(2){
    text-align: center;
    display: block;
    width: .65rem;
    margin-top: .1rem;
  }
  .speak .big .one .top .right p{
    padding-top: .15rem;
    flex: 1;
    line-height: .2rem;
  }
  .speak .big .one .bottom{
    border: 1px solid #ccc;
    border-top: 0;
  }
  .speak .big .one .bottom ul{
    display: flex;
  }
  .speak .big .one .bottom ul li{
    flex:1;
    text-align:center;
    flex-direction:column;
  }

  .speak .big .one .bottom ul li img{
    height:.6rem;
    margin:0 auto;
    display:block;
    margin-top:.13rem;
  }
  .speak .big .one .bottom ul li span {
    display: block;
    line-height: .4rem;
    color: #333;
  }
</style>
