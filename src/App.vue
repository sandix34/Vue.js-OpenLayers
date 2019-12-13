<template>
  <div id='app'>
    <div class="header">
      <TheHeader/>
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
import TheHeader from './components/TheHeader'

export default {
  name: 'app',
  components: {
    TheNavBar,
    TheHeader
  }
}
</script>

<style>
@import "assets/css/reset.css";
@import "assets/css/styles.css";
</style>
