<template>
    <header>
      <p>
        <a href="#" @click="tocloud()"><i class="iconfont">&#xe660;</i></a>
        <a href="#">域名</a>
      </p>
    </header>
</template>

<script>
    export default {
        name: "DomainHeader",
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
    height: .66rem;
  }
  header p{
    display: flex;
    justify-content: center;
    position: relative;
    line-height: .66rem;
  }
  header p a{
    color: #fff;
    font-size: 18px;
  }
  header p a:nth-of-type(1){
    position: absolute;
    left: .2rem;
    font-size: 22px;
  }
</style>
