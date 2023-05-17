<template>
<button :class="bgColor + ' ' + textColor">{{ textColor }} auf {{ bgColor }}</button>

<ul>
  <li @click="bgColor = 'bg-white'">Hintergrund weiss</li>
  <li @click="bgColor = 'bg-black'">Hintergrund schwarz</li>
  <li @click="bgColor = 'bg-red'">Hintergrund rot</li>
  <li @click="bgColor = 'bg-green'">Hintergrund grün</li>
</ul>

<ul>
  <li @click="textColor = 'text-white'">Text weiss</li>
  <li @click="textColor = 'text-black'">Text schwarz</li>
  <li @click="textColor = 'text-red'">Text rot</li>
  <li @click="textColor = 'text-green'">Text grün</li>
</ul>


</template>

<script setup>
import { ref } from "vue";

const bgColor = ref('');
const textColor = ref('');
</script>

<style>
.text-red { color: red; }
.text-green { color: green; }
.text-black { color: black; }
.text-white { color: white; }

.bg-red { background-color: red; }
.bg-green { background-color: green; }
.bg-black { background-color: black; }
.bg-white { background-color: white; }
</style>