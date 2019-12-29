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
import TheHeader from './components/TheHeader'
import TheNavBar from './components/TheNavBar'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheNavBar,
  }
}
</script>

<style>
@import "assets/css/reset.css";
@import "assets/css/styles.css";
</style>
