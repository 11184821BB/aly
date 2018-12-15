<template>
    <div class="all">
      <domain-header></domain-header>
      <domain-main></domain-main>
      <index-footer></index-footer>
    </div>
</template>

<script>
    import DomainHeader from "../components/domain/DomainHeader";
    import DomainMain from "../components/domain/DomainMain";
    import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "DomainAll",
      components: {IndexFooter, DomainMain, DomainHeader}
    }
</script>

<style scoped>
  .all{
    display: flex;
    height: 100%;
    flex-direction: column;

  }
</style>
