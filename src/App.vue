<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="card">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </div>
  <HelloWorld msg="Page Module" desc="This module is built with Vue. And uses the global shared vue-module from webdocker"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
