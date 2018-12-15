<template>
  <div class="product">
    <p>我的云产品</p>
    <div class="productLi">
      <ul>
        <li v-for="(c,index) in list">
          <a href="#">
            <img :src="c.pic" alt="">
            <span>{{c.span1}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ControllerProdust",
      data(){
        return{
          list:[
            {"span1":"云服务器ECS","pic":"../../../static/image/a11.png"},
            {"span1":"云数据库RDS","pic":"../../../static/image/a12.png"},
            {"span1":"对象存储OSS","pic":"../../../static/image/a13.png"},
            {"span1":"负载均衡","pic":"../../../static/image/a14.png"},
            {"span1":"数据管理DMS","pic":"../../../static/image/a15.png"},
            {"span1":"云服务器ECS","pic":"../../../static/image/a16.png"},
            {"span1":"云数据库版","pic":"../../../static/image/a17.png"},
            {"span1":"域名服务","pic":"../../../static/image/a18.png"},
            {"span1":"云解析DNS","pic":"../../../static/image/a19.png"},
            {"span1":"网站备案","pic":"../../../static/image/a20.png"},
            {"span1":"云虚拟主机","pic":"../../../static/image/a21.png"},
            {"span1":"事态感知","pic":"../../../static/image/a22.png"},
            {"span1":"安骑士","pic":"../../../static/image/a23.png"},
            {"span1":"DDOS高防IP","pic":"../../../static/image/a24.png"},
            {"span1":"WEB防水墙","pic":"../../../static/image/a25.png"}
          ]
        }
      }
    }
</script>

<style scoped>
  .product{
    padding: .15rem 0;
    margin-top: .15rem;
    overflow: hidden;
    padding-bottom: .2rem;
    background: #fff;
  }
  .product p{
    padding: 0 .2rem;
    line-height: .45rem;
    background: #fff;
  }
  .product ul{
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    border-top: 1px solid #ccc;
  }
  .product ul li{
    width: 25%;
    background: #fff;
    text-align:center;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .product ul li:nth-of-type(4n){
    border-right: 0;
  }
  .product ul li a img{
    height:.6rem;
    margin:0 auto;
    margin-top:.13rem;
  }
  .product ul li a span {
    display: block;
    line-height: .4rem;
    color: #333;
  }
</style>
