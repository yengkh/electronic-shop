<template>
  <div class="d-flex align-center">
    <div class="d-none d-sm-block">
      <StarReview :star-average="starAverage" />
    </div>
    <div class="d-sm-none">
      <v-icon color="primary500">mdi mdi-star</v-icon>
    </div>
    <p class="ml-2">4.7</p>
    <p class="ml-2">Star Rating</p>
    <p class="text-gray600 ml-2">(21,671 User feedback)</p>
  </div>
  <p class="text-gray900 body-xl400 mt-1">
    2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD
    Storage) - Space Gray
  </p>
  <v-row class="my-2 mx-0">
    <v-col cols="6" class="ma-0 py-1 px-0">
      <p>
        <span class="text-gray600">Sku: </span>
        <span class="text-gray900 body-medium600">A264671</span>
      </p>
    </v-col>
    <v-col cols="6" class="ma-0 py-1 px-0">
      <p>
        <span class="text-gray600">Availability: </span>
        <span class="text-success500 body-medium600">In Stock</span>
      </p>
    </v-col>
    <v-col cols="6" class="ma-0 py-1 px-0">
      <p>
        <span class="text-gray600">Brand: </span>
        <span class="text-gray900 body-medium600">Apple</span>
      </p>
    </v-col>
    <v-col cols="6" class="ma-0 py-1 px-0">
      <p>
        <span class="text-gray600">Category: </span>
        <span class="text-gray900 body-medium600">Electronics Devices</span>
      </p>
    </v-col>
  </v-row>
  <div class="d-flex align-center ga-2 my-6">
    <p class="text-heading03 text-secondary500">$1699</p>
    <p class="text-gray500 text-decoration-line-through body-large500">
      $1999.00
    </p>
    <Label title="21% OFF" />
  </div>
  <v-divider></v-divider>
  <v-row class="my-2" no-gutters>
    <v-col cols="12" sm="6" class="ma-0 px-1">
      <p class="ma-0">Color</p>
      <section class="d-flex align-center ga-2 mt-2">
        <div
          v-for="(_, index) in 2"
          class="bg-gray300 select-color"
          :class="{ active: currentSelectColor === index }"
          @click="handleChangeSelectColor(index)"
        ></div>
      </section>
    </v-col>
    <v-col cols="6" class="ma-0 px-1">
      <p class="ma-0">Size</p>
      <v-select
        density="compact"
        :items="size"
        item-value="id"
        class="w-full rounded-sm"
        variant="outlined"
        elevation="0"
        style="margin: 0"
      />
    </v-col>

    <v-col cols="6" class="ma-0 px-1">
      <p class="ma-0">Memory</p>
      <v-select
        density="compact"
        :items="size"
        item-value="id"
        class="w-full rounded-sm"
        variant="outlined"
        elevation="0"
        style="margin: 0"
      />
    </v-col>

    <v-col cols="6" class="ma-0 px-1">
      <p class="ma-0">Storage</p>
      <v-select
        density="compact"
        :items="size"
        item-value="id"
        class="w-full rounded-sm"
        variant="outlined"
        elevation="0"
        style="margin: 0"
      />
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="6" sm="3">
      <section
        class="border-thin rounded-sm d-flex justify-space-between align-center"
      >
        <IconButton icon="mdi mdi-minus" @click="decreaseQuantity()" bg="" />
        <p class="body-large400">{{ quantity }}</p>
        <IconButton icon="mdi mdi-plus" @click="increaseQuantity()" bg="" />
      </section>
    </v-col>
    <v-col cols="6" sm="5">
      <CustomeButton
        title="ADD TO CART"
        append-icon="mdi mdi-cart-outline"
        style="width: 100%; height: 100%"
      />
    </v-col>
    <v-col cols="12" sm="4">
      <v-btn
        style="width: 100%; height: 50px"
        variant="outlined"
        color="primary500"
      >
        BUY NOW
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="d-flex justify-space-between align-center my-4 pa-0">
    <v-col cols="12" sm="8">
      <v-row>
        <v-col cols="6">
          <CustomeButton
            title="Add to Wishlist"
            bg=""
            prepend-icon="mdi mdi-heart-outline"
            text-color="gray700"
          />
        </v-col>
        <v-col cols="6">
          <CustomeButton
            title="Add to compass"
            prepend-icon="mdi mdi-cached"
            bg=""
            text-color="gray700"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col class="d-flex align-center" cols="12" sm="4">
      <p class="mr-2">Share product:</p>
      <IconButton
        icon="mdi mdi-content-copy"
        rounded
        size="small"
        bg=""
        is-show-padding
      />
      <IconButton icon="mdi mdi-facebook" rounded bg="" is-show-padding />
      <IconButton icon="mdi mdi-instagram" rounded bg="" is-show-padding />
    </v-col>
  </v-row>
  <div class="border-thin pa-4 rounded-sm">
    <p class="text-gray900 body-medium400 mb-2">100% Guarantee Safe Checkout</p>
    <v-img :src="Image7" height="18" width="312" />
  </div>
</template>
<script lang="ts" setup>
import Label from "../../shared/Label.vue";
import StarReview from "../../shared/StarReview.vue";
import IconButton from "../../shared/IconButton.vue";
import CustomeButton from "../../shared/CustomeButton.vue";
import Image7 from "@/assets/detail-page-images/7.png";
import { ref } from "vue";
const starAverage: number = 4.5;
const currentSelectColor = ref(0);

const handleChangeSelectColor = (index: number) => {
  currentSelectColor.value = index;
};
const size = [
  { id: 1, name: "13" },
  { id: 2, name: "15" },
  { id: 3, name: "17" },
  { id: 4, name: "19" },
];

const quantity = ref(1);
const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>
<style scoped>
.select-color {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
}

.select-color.active {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  outline: 2px solid #fa8232;
  padding: 8px;
}
</style>
