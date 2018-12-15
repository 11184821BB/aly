<template>
    <header>
      <p><i class="iconfont" @click="tocloud()">&#xe660;</i>找场地</p>
    </header>
</template>

<script>
    export default {
        name: "PlaceHeader",
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
    background: #a46afd;
    display: flex;
  }
  header p{
    width: 100%;
    padding: .29rem .25rem;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 16px;
  }
  header p .iconfont{
    position: absolute;
    left: .25rem;
    font-size: .22rem;
  }
</style>
