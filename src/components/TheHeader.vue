<template>
  <div>
    <Slide right width="300" v-if="currentResolution() <= 1024 ? true : false" @openMenu="handleOpenMenu">
      <TheNavBar/>
    </Slide>
    <h1><span class="title-vue">Vue.js</span> + <span class="title-openlayers">OpenLayers 6</span> 🌍</h1>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import TheNavBar from './TheNavBar'
  export default {
    components: {
      Slide,
      TheNavBar
    },
    methods: {
      currentResolution () {
        return window.screen.availWidth
      },
      handleOpenMenu () {
        const elem1 = document.querySelector(".bm-item-list")
        const elem2 = document.querySelector(".navbar-list")
        elem1.replaceWith(elem2)
        elem2.classList.add("bm-item-list")
      }
    },
  }
</script>

<style>

  .bm-burger-bars {
      background-color:white !important;
    }
    .bm-burger-button {
      width: 1.5em !important;
      height: 1.5em !important;
      top: 1em !important;
    }
    .bm-overlay {
      background: rgb(255, 255, 255) !important;
    }
    .bm-item-list a {
      font-size: small !important;
    }
    .bm-item-list {
      margin-left: 5% !important;
    }

  @media (max-width: 1024px) {

    .bm-burger-bars {
      background-color:white !important;
    }
    .bm-burger-button {
      width: 1em !important;
      height: 1em !important;
      top: 0.5em !important;
    }
  }

</style>