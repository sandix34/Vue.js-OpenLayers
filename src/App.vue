<template>
  <div id='app'>
    <h1>Vuejs + OpenLayers</h1>
    <controles/>
  </div>
</template>

<script>
import controles from './components/controles.vue'

export default {
  name: 'app',
  components: {
    controles
  }
};
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
