<template>
  <div class="all">
    <cloud-header></cloud-header>
    <cloud-main></cloud-main>
    <index-footer></index-footer>
  </div>
</template>

<script>
    import Base from "../assets/css/base.css";
    import Iconfont from "../assets/font/iconfont.css";
    import CloudHeader from "../components/cloud/CloudHeader";
    import IndexFooter from "../components/index/IndexFooter";
    import CloudMain from "../components/cloud/CloudMain";
    export default {
        name: "CloudAll",
      components: {CloudMain, IndexFooter, CloudHeader,Iconfont,Base}
    }
</script>

<style scoped>
  .all{height:100%;display:flex;flex-direction:column;}
</style>
