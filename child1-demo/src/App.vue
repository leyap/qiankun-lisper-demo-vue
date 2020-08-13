<template>
  <div id="app">
    child 1
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted () {
    console.log(window.subappname)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
