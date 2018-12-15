<template>
  <div class="often">
    <p>常用工具</p>
    <div class="threeLi">
      <ul>
        <li>
          <img src="../../../static/image/a1.png" alt="">
          <span>SSH工具</span>
        </li>
        <li>
          <img src="../../../static/image/a2.png" alt="">
          <span>文件管理</span>
        </li>
        <li>
          <img src="../../../static/image/a3.png" alt="">
          <span>虚拟FMA</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ControllerOften"
    }
</script>

<style scoped>
  .often{
    padding:0 0 .1rem;
    background: #fff;
    margin-top: .18rem;
  }
  .often p{
    border-bottom: 1px solid #ccc;
    line-height: .4rem;
    padding: .1rem .2rem;
  }
  .often ul{
    display: flex;
    padding-top: .2rem;
  }
  .often ul li{
    flex: 1;
    text-align:center;
  }
  .often ul li img{
    height:.4rem;
    margin:0 auto;
  }
  .often ul li span {
    height: .37rem;
    display: block;
    line-height: .4rem;
    color: #333;
  }
</style>
