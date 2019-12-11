<template>
  <div id='app'>
    <div class="header">
      <h1>Vuejs + OpenLayers</h1>
    </div>
    <div class="navbar">
      <TheNavBar/>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar'

export default {
  name: 'app',
  components: {
    TheNavBar
  }
}
</script>

<style>
@import "assets/css/reset.css";
@import "assets/css/styles.css";
</style>
