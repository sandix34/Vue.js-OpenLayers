<template>
  <div class="vertical-menu">
    <nav>
      <a href="#">Carte1</a>
      <a href="#">Carte2</a>
      <a href="#">Carte3</a>
      <a href="#">Carte1</a>
      <a href="#">Carte2</a>
      <a href="#">Carte3</a>
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

.vertical-menu a {
  color: black; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
}

.vertical-menu a:hover {
  background-color: #ccc; /* Dark grey background on mouse-over */
}

.vertical-menu a.active {
  background-color: #4CAF50; /* Add a green color to the "active/current" link */
  color: white;
}
</style>