<template>
  <div class="vertical-menu">
    <nav>
      <ul>
        <li class="navbar-item">
          <router-link class="item" :to="{name: 'changeView'}">changement de vue</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="item" :to="{name: 'controles'}">les contrôles</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="item" :to="{name: 'firstMap'}">Afficher une carte</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="item" :to="{name: 'mapEvent'}">Les évènements</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="item" :to="{name: 'vectorGeometry'}">Les vecteurs</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="item" :to="{name: 'projections'}">Les projections</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>