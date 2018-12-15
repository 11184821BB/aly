<template>
  <main>
    <shopcart-li @add="addNum" @minus="minusNum" :list="lists" :tmm="tm" :tnn="tn"></shopcart-li>
    <shopcart-swiper></shopcart-swiper>

  </main>
</template>

<script>
    import ShopcartLi from "./ShopcartLi";
    import ShopcartSwiper from "./ShopcartSwiper";
    // import ShopcartSwiper from "./ShopcartSwiper";
    export default {
        name: "ShopcartMain",
        props:["lists","tm","tn"],
        components: {ShopcartSwiper, ShopcartLi},
        methods:{
          addNum(i){
            this.$emit("add",i)

          },
          minusNum(i){
            this.$emit("minus",i)
          }
        }
    }
</script>

<style scoped>
  main{
    flex: 1;
    overflow: auto;
  }
</style>
