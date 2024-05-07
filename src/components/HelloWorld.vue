<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string; desc: string }>();

const count = ref(0);
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <p>{{ desc }}</p>
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>
