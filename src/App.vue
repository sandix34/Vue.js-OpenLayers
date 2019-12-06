<template>
  <div id='app'>
    <h1>Vuejs + OpenLayers</h1>
    <Projections/>
  </div>
</template>

<script>
import Projections from './components/Projections.vue'

export default {
  name: 'app',
  components: {
    Projections
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
