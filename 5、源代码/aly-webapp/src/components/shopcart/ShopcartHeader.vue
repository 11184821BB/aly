<template>
  <header>
    <span>购物车<span>{{tn}}</span></span><span>编辑</span>
  </header>
</template>

<script>
    export default {
        name: "ShopcartHeader",
        props:["tn"]
    }
</script>

<style scoped>
  header {
    display: -webkit-flex;
    line-height: .55rem;
    padding: 0 .25rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    background: #fff;
  }
  header span {
    color: #333333;
    font-size: .18rem;
  }
  header span:nth-of-type(1){
    position: relative;
  }
  header span:nth-of-type(1) span{
    position: absolute;
    display: block;
    background: #c5161d;
    color: #fff;
    border-radius: 50%;
    font-size: 15px;
    width: .2rem;
    top: 15px;
    left: 55px;
    line-height: .2rem;
    text-align: center;
  }
</style>
