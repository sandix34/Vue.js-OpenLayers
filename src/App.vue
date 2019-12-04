<template>
  <div id='app'>
    <h1>Vuejs + OpenLayers</h1>
    <FirstMap/>
  </div>
</template>

<script>
import FirstMap from './components/FirstMap.vue';

export default {
  name: 'app',
  components: {
    FirstMap
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
