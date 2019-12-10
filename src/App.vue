<template>
  <div id='app'>
    <div class="header">
      <h1>Vuejs + OpenLayers</h1>
    </div>
    <div class="navbar">
      <TheNavBar/>
    </div>
    <div class="map-examples">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VectorGeometry from './components/VectorGeometry.vue'
import TheNavBar from './components/TheNavBar'

export default {
  name: 'app',
  components: {
    VectorGeometry,
    TheNavBar
  }
}
</script>

<style>
#app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header header"
    "navbar map map map map"
}

.header {
  grid-area: header;
  background-color: #eee;
}

.navbar {
  grid-area: navbar;
  background-color: #eee;
}

.map-examples {
  grid-area: map;
}
</style>
