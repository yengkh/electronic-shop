<template>
  <v-layout style="display: flex; flex-direction: column">
    <AppBar />
    <v-main style="width: 80%; margin: 0 auto"> <Category /> </v-main>
  </v-layout>
</template>
<script lang="ts" setup>
import AppBar from "./views/AppBar.vue";
import Category from "./views/Category.vue";
</script>
