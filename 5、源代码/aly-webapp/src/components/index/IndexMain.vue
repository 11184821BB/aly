<template>
  <main>
    <index-know></index-know>
    <index-discuss></index-discuss>
    <index-hot></index-hot>
    <index-flash></index-flash>
    <index-cdna></index-cdna>
    <index-market></index-market>
    <index-ai></index-ai>
    <index-plat></index-plat>
    <index-clma></index-clma>
    <index-compu></index-compu>
    <index-serve></index-serve>
    <index-bottom></index-bottom>
  </main>
</template>

<script>
    import IndexKnow from "./IndexKnow";
    import IndexDiscuss from "./IndexDiscuss";
    import IndexHot from "./IndexHot";
    import IndexFlash from "./IndexFlash";
    import IndexCdna from "./IndexCdna";
    import IndexMarket from "./IndexMarket";
    import IndexAi from "./IndexAi";
    import IndexServe from "./IndexServe";
    import IndexBottom from "./IndexBottom";
    import Swiper from "./Swiper";
    import CloudIcon from "../cloud/CloudIcon";
    import IndexPlat from "./IndexPlat";
    import IndexClma from "./IndexClma";
    import IndexCompu from "./IndexCompu";
    export default {
        name: "IndexMain",
      components: {
        IndexCompu,
        IndexClma,
        IndexPlat,
        IndexBottom,
        IndexServe, IndexAi, IndexMarket, IndexCdna, IndexFlash, IndexHot, IndexDiscuss, IndexKnow}
    }
</script>

<style scoped>
  main{
    flex: 1;
    overflow: auto;
  }
  ::-webkit-scrollbar{
    display:none;
  }
</style>
