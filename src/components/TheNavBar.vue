<template>
  <div class="navbar-list">
      <nav v-for="route in routes" :key="route.name">
        <router-link class="navbar-item" :to="{name: route.name}">{{ route.title }}</router-link>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: 'home',
          title: 'Accueil'
        },
        {
          name: 'firstMap',
          title: 'Afficher une carte'
        },
        {
          name: 'changeView',
          title: 'Centrer la carte'
        },
        {
          name: 'projections',
          title: 'Utiliser des projections différentes'
        },
        {
          name: 'controles',
          title: 'Afficher les contrôles disponibles'
        },
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
          name: 'mapEvent',
          title: 'Les évènements liés à la carte'
        },
        {
          name: 'vectorGeometry',
          title: 'Créer des géométries'
        },
        {
          name: 'vectorFile',
          title: 'Charger des fichiers de données'
        },
        {
          name: 'vectorData',
          title: 'Manipuler des données vectorielles'
        },
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
      ]
    }
  },
}
</script>