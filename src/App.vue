<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const dialog = ref();

function showSettings() {
  dialog.value.showModal();
}
function hideSettings() {
  dialog.value.close();
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <!--<RouterLink to="/aufgabe1">Aufgabe 1</RouterLink>
      <RouterLink to="/aufgabe2">Aufgabe 2</RouterLink>
      <RouterLink to="/aufgabe12-2">Aufgabe 12.2</RouterLink>-->
      <RouterLink to="/rwd">RWD</RouterLink>
      <a href="#" @click="showSettings">Profil</a>
    </nav>
  </header>

  <div class="wrapper">
    <RouterView />
  </div>

  <dialog ref="dialog">
    <button @click="hideSettings">Schliessen</button>
  </dialog>
</template>

<style scoped lang="scss">
.wrapper {
  max-width: 1920px;
  margin: 0 auto;
}
nav {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  background-color: rgb(148, 254, 254);

  a {
    display: block;
    color: black;
    text-decoration: none;
    margin: 0 10px;
    font-size: 1.5rem;

    &:hover {
      color: green;
    }
  }
}
</style>
