<template>
  <div class="discuss">
    <p>每日一评</p>
    <div class="pic">
      <img src="../../../static/image/i4.png" alt="">
    </div>
    <p>你遇到过哪些虐心的服务</p>
    <p>服务已成为消费者判定产品质量、决定购买与否的重要条件。你在这方面有过什么难忘的体验</p>
  </div>
</template>

<script>
    export default {
        name: "IndexDiscuss"
    }
</script>

<style scoped>
  .discuss{
    padding: .08rem .15rem .2rem;
    background: #fff;
    overflow: hidden;
    margin-top: .18rem;
  }
  .discuss p{
    font-size: .16rem;
  }
  .discuss p:nth-of-type(1){
    line-height: .4rem;
  }
  .discuss .pic img{
    width:100%;
  }
  .discuss p:nth-of-type(2){
    line-height: .45rem;
  }
  main .discuss p:nth-of-type(3){
    line-height: .2rem;
    font-size: .14rem;
    color: #999ba4;
  }
</style>
