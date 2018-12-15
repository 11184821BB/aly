<template>
    <div class="all">
      <my-header></my-header>
      <my-main></my-main>
      <index-footer></index-footer>
    </div>
</template>

<script>
    import MyHeader from "../components/my/MyHeader";
    import MyMain from "../components/my/MyMain";
    import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "MyAll",
      components: {IndexFooter, MyMain, MyHeader}
    }
</script>

<style scoped>
  .all{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
