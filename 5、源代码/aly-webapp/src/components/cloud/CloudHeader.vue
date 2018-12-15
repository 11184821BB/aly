<template>
  <header>
    <p>云栖<i class="iconfont">&#xe64f;</i>
      <i class="iconfont">&#xe656;</i></p>
  </header>
</template>

<script>
    export default {
        name: "CloudHeader"
    }
</script>

<style scoped>
  header{
    height: .77rem;
    background: #373d41;
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
    right: .75rem;
  }
  header p i:nth-of-type(2){
    position: absolute;
    right: .35rem;
  }
</style>
