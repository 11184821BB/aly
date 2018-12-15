<template>
  <main>
    <controller-often></controller-often>
    <controller-produst></controller-produst>
  </main>
</template>

<script>
    import ControllerOften from "./ControllerOften";
    import ControllerProdust from "./ControllerProdust";
    export default {
        name: "ControllerMain",
      components: {ControllerProdust, ControllerOften}
    }
</script>

<style scoped>
  main{
    flex: 1;
    overflow: auto;
  }
</style>
