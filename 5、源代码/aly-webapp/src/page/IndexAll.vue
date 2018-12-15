<template>
  <div class="all">
    <index-header></index-header>
    <index-main></index-main>
    <index-footer></index-footer>
  </div>
</template>

<script>

    import Base from "../assets/css/base.css";
    import Iconfont from "../assets/font/iconfont.css";
    import IndexHeader from "../components/index/IndexHeader";
    import IndexMain from "../components/index/IndexMain";
    import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "IndexAll",
      components: {IndexFooter, IndexMain, IndexHeader,Iconfont,Base}
    }
</script>

<style scoped>
  .all{height:100%;display:flex;flex-direction:column;}
</style>
