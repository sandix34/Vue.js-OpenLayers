<template>
  <div class="vertical-menu">
    <nav>
      <ul>
        <li>
          <router-link class="navbar-item" :to="{name: 'firstMap'}">Afficher une carte</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'changeView'}">Changer la vue</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'projections'}">Utiliser des projections différentes</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'controles'}">Afficher les contrôles disponibles</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'mapEvent'}">Les évènements liés à la classe Map</router-link>
        </li>
        <li>
          <router-link class="navbar-item" :to="{name: 'vectorGeometry'}">Les vecteurs</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>