<template>
  <header>
    <p>控制台
     <i class="iconfont">&#xe656;</i></p>
    <div class="nav">
      <ul>
        <li>
          <span>0</span>
          <span>监控报警</span>
        </li>
        <li>
          <span>0</span>
          <span>急需续费</span>
        </li>
        <li>
          <span>0</span>
          <span>服务中心</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
    export default {
        name: "ControllerHeader"
    }
</script>

<style scoped>
  header{
    background: #02c1de;
    color: #fff;
  }
  header p{
    line-height: .77rem;
    text-align: center;
    font-size: .18rem;
    position: relative;
  }
  header p .iconfont{
    position: absolute;
    font-size: .24rem;
  }
  header p i:nth-of-type(1){
    position: absolute;
    right: .45rem;
  }
  header .nav{
    background: #02c1de;
    padding: .25rem .15rem;
  }
  header .nav ul{
    display: flex;
  }
  header .nav ul li{
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content:center;
    align-items:center;
    border-right: 1px solid #fff;
  }
  header .nav ul li:nth-last-of-type(1){
    border-right: 0px solid #fff;
  }
  header .nav ul li span{
    color: #fff;
  }
  header .nav ul li span:nth-of-type(2){
    line-height: .3rem;
  }
</style>
