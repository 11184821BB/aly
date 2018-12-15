<template>
  <header>
    <p><a href="#"><i class="iconfont" @click="tocloud()">&#xe625;</i></a>商城</p>
  </header>
</template>

<script>
    export default {
        name: "StoreHeader",
        methods:{
          tocloud(){
            this.$router.push({
              path:"/cloud"
            })
          }
        }
    }
</script>

<style scoped>
  header{
    background: #393e44;
  }
  header p{
    display: flex;
    justify-content: center;
    position: relative;
    line-height: .55rem;
    font-size: .18rem;
    color: #fff;
  }
  header p .iconfont{
    position: absolute;
    left: .35rem;
    font-size: .2rem;
    color: #fff;
  }
</style>
