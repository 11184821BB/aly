<template>
  <div class="newflash">
    <div class="left">
      <p>产品</p>
      <p>快报</p>
    </div>
    <ul>
      <li>[视频直播]转码日志下载</li>
      <li>[云数据库Redis]支持导出实例列表功能</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "IndexFlash"
    }
</script>

<style scoped>
  .newflash{
    padding: .2rem .32rem;
    display: flex;
    background: #fff;
    margin-top: .18rem;
  }
  .newflash .left{
    width: .5rem;
    padding-top: .1rem;
  }
  .newflash .left p{
    font-style: italic;
    font-size: .16rem;
    font-weight: 800;
  }
  .newflash .left p:nth-of-type(2){
    color: #f15533;
  }
  .newflash ul{
    margin-top: .1rem;
  }
  .newflash ul li{
    padding-left: .1rem;
  }
</style>
