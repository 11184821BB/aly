<template>
    <main>
      <swiper></swiper>
      <cloud-icon></cloud-icon>
      <index-flash></index-flash>
      <clound-speak></clound-speak>
      <cloud-blogs></cloud-blogs>
    </main>
</template>

<script>
    import Swiper from "../index/Swiper";
    import CloudIcon from "./CloudIcon";
    import IndexFlash from "../index/IndexFlash";
    import CloundSpeak from "./CloundSpeak";
    import CloudBlogs from "./CloudBlogs";
    export default {
        name: "CloudMain",
      components: {CloudBlogs, CloundSpeak, IndexFlash, CloudIcon, Swiper}
    }
</script>

<style scoped>
  main{
    flex: 1;
    overflow: auto;
  }
</style>
