<template>
  <div class="background-home">
    <div class="backdrop-home"> 
      <p>Bonjour et bienvenue 😃 !</p>
      <p>La création de cette collection d'exemples me permet de structurer mes connaissances au fur et à mesure de mon apprentissage. C'est aussi une sorte de bloc-notes sur lequel je peux revenir.</p>
      <p>Consciente que l’évolution du savoir est beaucoup plus rapide par l’échange je partage avec plaisir mon code et accepte volontier toute critique constructive permettant d' améliorer ou agrandir la collection.</p>
      <p>En espérant que cette collection vous soit utile !</p>
      <a href="https://github.com/sandix34/Vuejs-OpenLayers" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Voir sur GitHub</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background-home {
  height: 100vh;
  background-image: url(../assets/image/backgroundmap.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backdrop-home {
  line-height: 1.5em;
  text-align: center;
  padding: 2em;
  font-size: 1.5em;
  width: 50%;
  color: white;
  background: rgba(0, 0, 0, 0.815);
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

a {
  text-decoration: none;
  padding: 0.8em;
  font-size: 0.7em;
  font-weight: bold;
  background:  #fdfdfd;
  border: solid 1px #b7b7b7;
  border-radius: 30px;
  color: black;
}

i {
  font-size: 1.5em;
}

@media (max-width: 1366px) {
  .backdrop-home {
    font-size: smaller;
    width: 70%;
  }
}
</style>
