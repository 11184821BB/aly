<template>
  <div class="serve">
    <ul>
      <li v-for="(c,index) in list">
        <div>
          <a href="#">{{c.span1}}</a>
          <a href="#">{{c.span2}}</a>
        </div>
        <img :src="c.pic" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "DomainName",
        data(){
          return{
            list:[
              {"span1":"诚信赢天下","pic":"../../../static/image/c7.png","span2":"赢取无线商机"},
              {"span1":"选合适的域名","pic":"../../../static/image/c8.png","span2":"选购三要素"},
              {"span1":"域名实名认证","pic":"../../../static/image/c9.png","span2":"方法都在这里"},
              {"span1":"增值服务","pic":"../../../static/image/c10.png","span2":"免费开启"}
            ]
          }
        }
    }
</script>

<style scoped>
  .serve{
    margin-top: .18rem;
    padding-bottom: .2rem;
    background: #fff;
  }
  .serve ul{
    display:flex;
    flex-wrap: wrap;
  }
  .serve ul li{
    width: 50%;
    display:flex;
    position: relative;
    padding: .3rem .3rem;
    border-bottom: 1px solid #ccc;
  }
  .serve ul li:nth-of-type(2n){
    border-left: 1px solid #ccc;
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
    right: .1rem;
    position: absolute;
  }
</style>
