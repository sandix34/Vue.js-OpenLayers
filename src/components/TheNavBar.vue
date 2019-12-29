<template>
    <nav class="navbar-list">
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
    </nav>
</template>