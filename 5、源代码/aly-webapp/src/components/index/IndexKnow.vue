<template>
  <div class="know">
    <ul>
      <li v-for="(c,index) in list">
        <a href="#">
          <img :src="c.pic" alt="">
          <span>{{c.span1}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

    export default {
        name: "IndexKnow",
        data(){
          return{
            list:[
              {"span1":"认识阿里云","pic":"../../../static/image/i1.png"},
              {"span1":"融资申请","pic":"../../../static/image/i2.png"},
              {"span1":"风池计划","pic":"../../../static/image/i3.png"}
            ]
          }
        }
    }
</script>

<style scoped>
  .know{
    height: 1.2rem;
    background: #fff;
  }
  .know ul{
    display: flex;
    height: 100%;
  }
  .know ul li{
    flex:1;
    text-align:center;
  }
  .know ul li a{
    display:flex;
    flex-direction:column;
  }
  .know ul li a img{
    height:.6rem;
    margin:0 auto;
    /*display:block;*/
    margin-top:.13rem;
  }
  .know ul li a span {
    height: .37rem;
    display: block;
    line-height: .4rem;
    color: #333;
  }
</style>
