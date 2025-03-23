<template>
  <v-layout style="display: flex; flex-direction: column">
    <AppBar />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-layout>
</template>
<script lang="ts" setup>
import AppBar from "./views/AppBar.vue";
import Footer from "./views/Footer.vue";
</script>
