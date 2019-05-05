<template>
  <div id="app">
    <h1>Fun with Datamuse</h1>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './views/Navigation'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
