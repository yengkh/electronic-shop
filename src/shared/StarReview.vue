<template>
  <v-icon
    v-for="(_, index) in 5"
    :key="index"
    :color="
            index < Math.floor(starAverage || 0)
              ? 'primary500'
              : index < starAverage!
              ? 'primary500'
              : 'gray300'
          "
  >
    {{
      index + 1 <= starAverage!
        ? "mdi mdi-star"
        : index < starAverage!
        ? "mdi mdi-star-half-full"
        : "mdi mdi-star-outline"
    }}
  </v-icon>
</template>
<script lang="ts" setup>
defineProps<{ starAverage: number }>();
</script>
<style scoped></style>
