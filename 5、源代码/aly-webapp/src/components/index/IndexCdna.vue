<template>
  <div class="cdna">
    <p>官方文库</p>
    <ul>
      <li>
        <img src="../../../static/image/i7.png" alt="">
      </li>
      <li>
        <img src="../../../static/image/i7.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "IndexCdna"
    }
</script>

<style scoped>
  .cdna{
    padding: .18rem .18rem;
    background: #fff;
    overflow: hidden;
    margin-top: .18rem;
  }
  .cdna p{
    line-height:.49rem;
    font-size: .16rem;
  }
  .cdna ul{
    display: -webkit-box;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .cdna ul li{
    width: 70%;
    padding-right: .05rem;
  }
  .cdna ul li img{
    width: 100%;
  }
</style>
