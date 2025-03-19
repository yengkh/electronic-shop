<template>
  <v-layout style="display: flex; flex-direction: column">
    <AppBar />
    <v-main style="width: 80%; margin: 0 auto">
      <RouterView />

      <div style="margin: 100vh 0"></div>
    </v-main>
  </v-layout>
</template>
<script lang="ts" setup>
import AppBar from "./views/AppBar.vue";
</script>
