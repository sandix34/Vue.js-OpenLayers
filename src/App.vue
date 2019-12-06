<template>
  <div id='app'>
    <h1>Vuejs + OpenLayers</h1>
    <MapEvent/>
  </div>
</template>

<script>
import MapEvent from './components/MapEvent.vue'

export default {
  name: 'app',
  components: {
    MapEvent
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
