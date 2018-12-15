<template>
  <div class="market">
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
        name: "DomainReg",
        data(){
          return{
            list:[
              {"span1":"注册首选","pic":"../../../static/image/c4.png","span2":"55元/首年"},
              {"span1":"网络诚信","pic":"../../../static/image/c5.png","span2":"88元/首年"},
              {"span1":"行业地位","pic":"../../../static/image/c6.png","span2":"9元/首年"}
            ]
          }
        }
    }
</script>

<style scoped>
  .market{
    background: #fff;
    padding: 0 .1rem .15rem;
    margin-top: .18rem;
    overflow: hidden;
  }
  .market ul{
    display: flex;
    width: 100%;
    padding-top: .1rem;
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
    width: .9rem;
    height: .45rem;
  }
  .market ul li a span:nth-of-type(1){
    line-height:.3rem;
  }
  .market ul li a span:nth-of-type(2){
    /*font-size:.12rem;*/
    color:#ef564e;
    border-radius: 4px;
    border: 1px solid #ef564e;
  }
</style>
