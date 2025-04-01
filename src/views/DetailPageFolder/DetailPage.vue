<template>
  <section style="width: 80%; min-height: 100vh; margin: 0 auto">
    <v-row>
      <v-col cols="6">
        <ImagesPath />
      </v-col>
      <v-col class="px-8" cols="6">
        <DetailPath />
      </v-col>
    </v-row>
    <ProductReview />
    <RelatedProducts />
  </section>
</template>
<script lang="ts" setup>
import DetailPath from "./DetailPath.vue";
import ImagesPath from "./ImagesPath.vue";
import ProductReview from "./ProductReview.vue";
import RelatedProducts from "./RelatedProducts.vue";
</script>
<style scoped>
:deep(.v-field.v-field--focused .v-field__outline) {
  border-width: 1px !important;
  border-color: #ccc !important;
}
</style>
