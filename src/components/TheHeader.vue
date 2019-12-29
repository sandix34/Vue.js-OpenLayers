<template>
  <div>
    <Slide right width="400">
      <router-link class="navbar-item" :to="{name: 'home'}">Accueil</router-link>
      <router-link class="navbar-item" :to="{name: 'firstMap'}">Afficher une carte</router-link>
      <router-link class="navbar-item" :to="{name: 'changeView'}">Centrer la carte</router-link>
      <router-link class="navbar-item" :to="{name: 'projections'}">Utiliser des projections différentes</router-link>
      <router-link class="navbar-item" :to="{name: 'controles'}">Afficher les contrôles disponibles</router-link>
      <router-link class="navbar-item" :to="{name: 'tileMap'}">Les sources de couche OpenLayers</router-link>
      <router-link class="navbar-item" :to="{name: 'rasterTiles'}">Les tuiles raster OpenStreetMap</router-link>
      <router-link class="navbar-item" :to="{name: 'mapEvent'}">Les évènements liés à la carte</router-link>
      <router-link class="navbar-item" :to="{name: 'vectorGeometry'}">Créer des géométries</router-link>
      <router-link class="navbar-item" :to="{name: 'vectorFile'}">Charger des fichiers de données</router-link>
      <router-link class="navbar-item" :to="{name: 'vectorData'}">Manipuler des données vectorielles</router-link>
      <router-link class="navbar-item" :to="{name: 'overlays'}">Afficher un overlay</router-link>
      <router-link class="navbar-item" :to="{name: 'multipleOverlays'}">Afficher plusieurs overlays</router-link>
      <router-link class="navbar-item" :to="{name: 'popup'}">Afficher des infos dans une popup</router-link>
    </Slide>
    <h1><span class="vue">Vue.js</span> + <span class="openlayers">OpenLayers 6</span> 🌍</h1>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
  export default {
    components: {
      Slide
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
    .bm-item-list a {
      font-size: medium !important;
    }
    .bm-overlay {
      background: rgb(255, 255, 255) !important;
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
    .bm-item-list a {
      font-size: medium !important;
    }
    .bm-overlay {
      background: rgb(255, 255, 255) !important;
    }
  }

</style>