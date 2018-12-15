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
        name: "DomainIcon",
        data(){
          return{
            list:[
              {"span1":"域名信息查询","pic":"../../../static/image/c1.png"},
              {"span1":"域名交易","pic":"../../../static/image/c2.png"},
              {"span1":"云解析","pic":"../../../static/image/c3.png"}
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
    height:.5rem;
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
