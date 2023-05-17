<template>
<main>
  <button>{{ textColor }} auf {{ bgColor }}</button>

  <ul>
    <li @click="bgColor = 'bg-red'">Hintergrund Rot</li>
    <li @click="bgColor = 'bg-blue'">Hintergrund Blau</li>
    <li @click="bgColor = 'bg-green'">Hintergrund Grün</li>
    <li @click="bgColor = 'bg-yellow'">Hintergrund Gelb</li>
    <li @click="bgColor = 'bg-black'">Hintergrund Schwarz</li>
  </ul>

  <ul>
    <li @click="textColor = 'text-red'">Textfarbe Rot</li>
    <li @click="textColor = 'text-white'">Textfarbe Weiss</li>
    <li @click="textColor = 'text-blue'">Textfarbe Blau</li>
    <li @click="textColor = 'text-black'">Textfarbe Schwarz</li>
    <li @click="textColor = 'text-green'">Textfarbe Grün</li>
  </ul>
</main>
</template>

<script setup>
import { ref } from "vue";

const bgColor = ref("");
const textColor = ref("");
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

button {
    padding: 20px;
    font-size: 2rem;
}

.bg-red { background-color: red; }
.bg-green { background-color: green; }
.bg-blue { background-color: blue; }
.bg-yellow { background-color: yellow; }
.bg-black { background-color: black; }

.text-red { color: red; }
.text-white { color: white; }
.text-blue { color: blue; }
.text-black { color: black; }
.text-green { color: green; }
</style>