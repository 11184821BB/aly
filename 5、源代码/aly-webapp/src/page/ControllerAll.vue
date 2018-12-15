<template>
    <div class="all">
      <controller-header></controller-header>
      <controller-main></controller-main>
      <index-footer></index-footer>
    </div>
</template>

<script>
    import CloudHeader from "../components/cloud/CloudHeader";
    import ControllerMain from "../components/controller/ControllerMain";
    import IndexFooter from "../components/index/IndexFooter";
    import ControllerHeader from "../components/controller/ControllerHeader";
    export default {
        name: "ControllerAll",
      components: {ControllerHeader, IndexFooter, ControllerMain, CloudHeader}
    }
</script>

<style scoped>
  .all{height:100%;display:flex;flex-direction:column;}
</style>
