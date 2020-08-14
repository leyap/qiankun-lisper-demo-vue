<template>
  <div id="app">
    <div class="top">
      {{$store.state.count}}
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/child1">Child1</router-link>
      |
      <router-link to="/child2">Child2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    '$store.state.count' (a) {
      console.log('a', a)
    }
  }
}
</script>

<style lang="scss">
  html, body {
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }

      /*&.router-link-active {*/
      /*  color: #42b983;*/
      /*}*/
    }
  }

  .top {
    height: 30px;
    background: #eee;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
</style>
