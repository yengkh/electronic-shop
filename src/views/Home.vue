<template>
  <v-main style="width: 80%; margin: 0 auto">
    <Hero />
    <BestDeals />
    <ShopWithCategory />
    <FeatureProducts />
    <NewArrivalItems />
    <ComputerAccessories />
    <BigDiscount />
    <ListOfItemFeature />
  </v-main>
  <LatestNew />
</template>
<script lang="ts" setup>
import Hero from "./Hero.vue";
import BestDeals from "./BestDeals.vue";
import ShopWithCategory from "./ShopWithCategory.vue";
import FeatureProducts from "./FeatureProducts.vue";
import NewArrivalItems from "./NewArrivalItems.vue";
import ComputerAccessories from "./ComputerAccessories.vue";
import BigDiscount from "./BigDiscount.vue";
import ListOfItemFeature from "./ListOfItemFeature.vue";
import LatestNew from "./LatestNew.vue";
</script>
