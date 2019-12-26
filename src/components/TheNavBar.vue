<template>
  <div class="vertical-menu">
    <nav>
      <ul>
        <li>
          <router-link class="navbar-item" :to="{name: 'home'}">Accueil</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'firstMap'}">Afficher une carte</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'changeView'}">Centrer la carte</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'projections'}">Utiliser des projections différentes</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'controles'}">Afficher les contrôles disponibles</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'tileMap'}">Les fonds de carte OL</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'mapEvent'}">Les évènements liés à la carte</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'vectorGeometry'}">Créer des géométries</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'vectorFile'}">Charger des fichiers de données</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'vectorData'}">Manipuler des données vectorielles</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'overlays'}">Afficher un overlay</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'multipleOverlays'}">Afficher plusieurs overlays</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'popup'}">Afficher des infos dans une popup</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>