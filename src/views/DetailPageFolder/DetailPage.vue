<template>
  <section class="custom-width h-100">
    <v-row>
      <v-col cols="12" md="6">
        <ImagesPath />
      </v-col>
      <v-col class="px-6" cols="12" md="6">
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
