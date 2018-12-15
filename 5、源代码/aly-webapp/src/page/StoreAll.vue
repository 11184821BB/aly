<template>
  <div class="all">
    <store-header></store-header>
    <store-main></store-main>
    <index-footer></index-footer>
  </div>
</template>

<script>
    import StoreHeader from "../components/store/StoreHeader";
    import StoreMain from "../components/store/StoreMain";
    import IndexFooter from "../components/index/IndexFooter";
    export default {
      name: "StoreAll",
        components: {IndexFooter, StoreMain, StoreHeader}
    }
</script>

<style scoped>
  .all{height:100%;display:flex;flex-direction:column;}
</style>
