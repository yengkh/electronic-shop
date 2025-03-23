<template>
  <section style="margin-top: 72px">
    <v-row>
      <v-col v-for="item in listOfTitle" :key="item?.id" cols="3">
        <p class="body-medium600">{{ item?.title }}</p>
        <v-card
          v-for="smallItem in item?.item"
          :key="smallItem?.id"
          elevation="0"
          class="border-thin mb-2 default-hover pa-2"
          style="cursor: pointer"
        >
          <section class="d-flex align-center ga-6">
            <div style="width: 20%">
              <v-img :src="smallItem?.image" width="80" height="80"></v-img>
            </div>
            <div style="width: 80%">
              <p class="line-clamp-2 body-small400">
                {{ smallItem?.description }}
              </p>
              <p class="text-secondary500 body-small600 mt-2">
                ${{ smallItem?.price }}
              </p>
            </div>
          </section>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts" setup>
import Image1_1 from "@/assets/listOfItemFeature/1.1.png";
import Image1_2 from "@/assets/listOfItemFeature/1.2.png";
import Image1_3 from "@/assets/listOfItemFeature/1.3.png";

import Image2_1 from "@/assets/listOfItemFeature/2.1.png";
import Image2_2 from "@/assets/listOfItemFeature/2.2.png";
import Image2_3 from "@/assets/listOfItemFeature/2.3.png";

import Image3_1 from "@/assets/listOfItemFeature/3.1.png";
import Image3_2 from "@/assets/listOfItemFeature/3.2.png";
import Image3_3 from "@/assets/listOfItemFeature/3.3.png";

import Image4_1 from "@/assets/listOfItemFeature/4.1.png";
import Image4_4 from "@/assets/listOfItemFeature/4.2.png";
import Image4_3 from "@/assets/listOfItemFeature/4.3.png";
const listOfTitle = [
  {
    id: 0,
    title: "FLASH SALE TODAY",
    item: [
      {
        id: 0,
        image: Image1_1,
        description:
          "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
        price: "1500",
      },
      {
        id: 1,
        image: Image1_2,
        description: "Simple Mobile 4G LTE Prepaid Smartphone",
        price: "1500",
      },
      {
        id: 2,
        image: Image1_3,
        description: "4K UHD LED Smart TV with Chromecast Built-in",
        price: "1500",
      },
    ],
  },
  {
    id: 1,
    title: "BEST SELLERS",
    item: [
      {
        id: 0,
        image: Image2_1,
        description: "Samsung Electronics Samsung Galexy S21 5G",
        price: "1500",
      },
      {
        id: 1,
        image: Image2_2,
        description: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
        price: "1500",
      },
      {
        id: 2,
        image: Image2_3,
        description: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        price: "1500",
      },
    ],
  },
  {
    id: 2,
    title: "TOP RATED",
    item: [
      {
        id: 0,
        image: Image3_1,
        description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
        price: "1500",
      },
      {
        id: 1,
        image: Image3_2,
        description: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        price: "1500",
      },
      {
        id: 2,
        image: Image3_3,
        description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: "1500",
      },
    ],
  },
  {
    id: 3,
    title: "NEW ARRIVALS",
    item: [
      {
        id: 0,
        image: Image4_1,
        description: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
        price: "1500",
      },
      {
        id: 1,
        image: Image4_3,
        description: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
        price: "1500",
      },
      {
        id: 2,
        image: Image4_4,
        description: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
        price: "1500",
      },
    ],
  },
];
</script>
<style scoped></style>
