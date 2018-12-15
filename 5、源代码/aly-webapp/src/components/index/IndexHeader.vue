<template>
  <header>
    <ul>
      <li>
        <input type="text" value="MFA" class="iconfont">
      </li>
      <li><a href="#"><i class="iconfont">&#xe62f;</i></a></li>
      <li><a href="#"><i class="iconfont">&#xe656;</i></a></li>
    </ul>
  </header>
</template>

<script>
    import Iconfont from "../../assets/font/iconfont.css";
    export default {
        name: "IndexHeader",
        components: {Iconfont}
    }
</script>

<style scoped>
  header{
    height:.6rem;
    background:#f6f5f4;
  }
  header ul{
    display:flex;
    height:100%;
    padding:0 .15rem;
    justify-content:space-between;
    align-items: center;
  }
  header ul li:nth-child(1){
    width:2.6rem;
  }
  header ul li:nth-child(1) input{
    width:100%;
    height:.28rem;
    border-radius:.02rem;
    border:0;
    padding-left:.14rem;
    font-size: 14px;
    color: #333;
  }
  header ul li a .iconfont{
    width:.23rem;
    font-size:.26rem;
    color:#333;
  }
</style>
