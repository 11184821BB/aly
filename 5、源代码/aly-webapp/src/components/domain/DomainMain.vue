<template>
  <main>
    <domain-swiper></domain-swiper>
    <domain-icon></domain-icon>
    <domain-reg></domain-reg>
    <domain-name></domain-name>
  </main>
</template>

<script>
    import DomainSwiper from "./DomainSwiper";
    import DomainIcon from "./DomainIcon";
    import DomainReg from "./DomainReg";
    import DomainName from "./DomainName";
    export default {
        name: "DomainMain",
      components: {DomainName, DomainReg, DomainIcon, DomainSwiper}
    }
</script>

<style scoped>
  main{
    overflow: auto;
    flex: 1;
  }
</style>
