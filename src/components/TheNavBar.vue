<template>
  <div class="vertical-menu">
    <nav>
      <ul>
        <li class="navbar-item">
          <router-link :to="{name: 'ChangeView'}">changement de vue</router-link>
        </li>
        <li class="navbar-item">
          <router-link :to="{name: 'controles'}">les contrôles</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .vertical-menu {
  overflow-y: auto;
  height: 100vh;
}

.vertical-menu li {
  color: black; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
}

.vertical-menu li:hover {
  background-color: #ccc; /* Dark grey background on mouse-over */
}

.vertical-menu li.active {
  background-color: #4CAF50; /* Add a green color to the "active/current" link */
  color: white;
}

.navbar-item a:hover {
    color: #57AD8D;
}
</style>