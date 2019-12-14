<template>
  <div class="background-404">
    <div class="backdrop-404">
      <h1>404</h1>
      <p>Ooops... il n'y a rien ici !<br> 👉
        <router-link :to="{name: 'home'}">
          c'est par là
        </router-link></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background-404 {
  height: 100vh;
  background-image: url(../assets/image/img404notfound.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backdrop-404 {
  line-height: 1.5em;
  text-align: center;
  padding: 2em;
  font-size: 1.5em;
  width: 50%;
  color: white;
  background: rgba(0,0,0,.6);
  backdrop-filter: grayscale(1) contrast(3) blur(1px);
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
}
p{
  padding: 1em;
}

i {
  font-size: 1.5em;
}
</style>