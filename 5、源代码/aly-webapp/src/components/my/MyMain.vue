<template>
    <main>
      <my-list></my-list>
    </main>
</template>

<script>
    import MyList from "./MyList";
    export default {
        name: "MyMain",
      components: {MyList}
    }
</script>

<style scoped>
  main{
    flex: 1;
    overflow: auto;
  }
</style>
