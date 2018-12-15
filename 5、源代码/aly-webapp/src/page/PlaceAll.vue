<template>
    <div class="all">
      <place-header></place-header>
      <place-main></place-main>
      <place-footer></place-footer>
    </div>
</template>

<script>
    import PlaceHeader from "../components/place/PlaceHeader";
    import PlaceMain from "../components/place/PlaceMain";
    import PlaceFooter from "../components/place/PlaceFooter";
    export default {
        name: "PlaceAll",
      components: {PlaceFooter, PlaceMain, PlaceHeader}
    }
</script>

<style scoped>
.all{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
