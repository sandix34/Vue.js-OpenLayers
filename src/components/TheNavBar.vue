<template>
  <div class="navbar-list">
    <div class="navbar-home">
      <router-link class="navabar-home-link" :to="{name: 'home'}">Accueil</router-link>
    </div>
    <div class="navbar-subtitle-wrapper">
      <a href="#" class="navbar-subtitle">Introduction</a>
    </div>
      <nav v-for="route in routes.intro" :key="route.name">
        <router-link class="navbar-item" :to="{name: route.name}">{{ route.title }}</router-link>
      </nav>
    <div class="navbar-subtitle-wrapper">
      <a href="#" class="navbar-subtitle">Couche de tuiles -TileLayer</a>
    </div>
      <nav v-for="route in routes.tileLayer" :key="route.name">
        <router-link class="navbar-item" :to="{name: route.name}">{{ route.title }}</router-link>
      </nav>
    <div class="navbar-subtitle-wrapper">
      <a href="#" class="navbar-subtitle">Couche de tuiles de vecteur - <br>VectorLayer</a>
    </div>
      <nav v-for="route in routes.vectorLayer" :key="route.name">
        <router-link class="navbar-item" :to="{name: route.name}">{{ route.title }}</router-link>
      </nav>
    <div class="navbar-subtitle-wrapper">
      <a href="#" class="navbar-subtitle">Projections</a>
    </div>
      <nav v-for="route in routes.projection" :key="route.name">
        <router-link class="navbar-item" :to="{name: route.name}">{{ route.title }}</router-link>
      </nav>
    <div class="navbar-subtitle-wrapper">
      <a href="#" class="navbar-subtitle">Overlays</a>
    </div>
      <nav v-for="route in routes.overlays" :key="route.name">
        <router-link class="navbar-item" :to="{name: route.name}">{{ route.title }}</router-link>
      </nav>
    <div class="navbar-subtitle-wrapper">
      <a href="#" class="navbar-subtitle">Controles</a>
    </div>
      <nav v-for="route in routes.controles" :key="route.name">
        <router-link class="navbar-item" :to="{name: route.name}">{{ route.title }}</router-link>
      </nav>
    <div class="navbar-subtitle-wrapper">
      <a href="#" class="navbar-subtitle">Méthodes et évènements</a>
    </div>
      <nav v-for="route in routes.events" :key="route.name">
        <router-link class="navbar-item" :to="{name: route.name}">{{ route.title }}</router-link>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: {
        intro: [
          {
            name: 'firstMap',
            title: 'Afficher une carte'
          },
          {
            name: 'changeView',
            title: 'Centrer la carte'
          }
        ],
        projection:[
          {
            name: 'projections',
            title: 'Utiliser des projections différentes'
          }
        ],
        tileLayer: [
          {
            name: 'tileMap',
            title: 'Les sources de couche OpenLayers'
          },
          {
            name: 'rasterTiles',
            title: 'Les tuiles raster OpenStreetMap'
          },
          {
            name: 'arcgisTile',
            title: 'Les tuiles des services ArcGIS Rest'
          },
          {
            name: 'tileWMS',
            title: 'Les tuiles des services WMS'
          }
        ],
        vectorLayer: [
          {
            name: 'vectorFile',
            title: 'Charger des fichiers de données'
          },
          {
            name: 'vectorData',
            title: 'Manipuler des données vectorielles'
          },
          {
            name: 'vectorGeometry',
            title: 'Créer des géométries'
          }
          
        ],
        overlays: [
          {
            name: 'overlays',
            title: 'Afficher un overlay'
          },
          {
            name: 'multipleOverlays',
            title: 'Afficher plusieurs overlays'
          },
          {
            name: 'popup',
            title: 'Afficher des infos dans une popup'
          }
        ],
        controles: [
            {
            name: 'controles',
            title: 'Afficher les contrôles disponibles'
          }
        ],
        events: [
          {
            name: 'mapEvent',
            title: 'Les évènements liés à la carte'
          }
        ]
      }
    }
  },
}
</script>