<template>
  <div class="icon">
    <ul>
      <li>
        <a href="#">
          <i class="iconfont">&#xe656;</i>
          <span>博客</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont">&#xe64e;</i>
          <span>问答</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont">&#xe613;</i>
          <span>云栖大会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont">&#xe627;</i>
          <span>直播</span>
        </a>
      </li>
      <li>
        <a href="#" @click="toplace()">
          <i class="iconfont">&#xe630;</i>
          <span>申请入园</span>
        </a>
      </li>
      <li>
        <a href="#" @click="todomain()">
          <i class="iconfont">&#xe650;</i>
          <span>域名</span>
        </a>
      </li>
      <li>
        <a href="#" @click="tostore()">
          <i class="iconfont">&#xe6db;</i>
          <span>商城</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont">&#xe87a;</i>
          <span>我的云栖</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "CloudIcon",
        methods:{
          tostore(){
            this.$router.push({
              path:"/store"
            })
          },
          toplace(){
            this.$router.push({
              path:"/place"
            })
          },
          todomain(){
            this.$router.push({
              path:"/domain"
            })
          }
        }
    }
</script>

<style scoped>
  .icon{
    background:#fff;
    padding: .15rem 0;
  }
  .icon ul{
    height:100%;
    display:flex;
    flex-wrap: wrap;
  }
  .icon ul li{
    width: 25%;
    text-align:center;
    padding-top:.07rem;
  }
  .icon ul li a{
    display:block;
  }
  .icon ul li a .iconfont{
    display:block;
    font-size:.25rem;
  }
  .icon ul li a span{
    display:block;
    line-height:.4rem;
    font-size:.13rem;
  }
</style>
