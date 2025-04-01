<template>
  <section
    style="display: flex; align-items: center; justify-content: space-between"
  >
    <div style="display: flex; align-items: center; gap: 24px">
      <p style="font-size: 24px; font-weight: 600" class="text-gray900">
        Best Deals
      </p>
      <div style="display: flex; align-items: center; gap: 10px">
        <p style="font-size: 14px">Deals ends in</p>
        <p
          class="bg-warning300"
          style="padding: 6px 12px; border-radius: 4px; width: fit-content"
        >
          <span>16d</span> : <span>21h</span> : <span>57m</span> :
          <span>23s</span>
        </p>
      </div>
    </div>
    <CustomeButton
      title="Browse All Product"
      text-color="secondary500"
      append-icon="mdi-arrow-right"
      bg=""
    />
  </section>
  <section style="margin-top: 24px; display: flex">
    <v-card class="top-discount rounded-0 pa-6 border-thin" elevation="0">
      <div style="z-index: 100; position: relative">
        <Label title="32% OFF" font-size="12px" bg="bg-warning300" />
        <p style="margin: 10px 0"></p>
        <Label title="HOT" bg="bg-danger500" />
      </div>

      <v-img
        :src="Image1"
        style="
          width: 280px;
          height: 268px;
          margin-top: -50px;
          position: relative;
          z-index: 1;
        "
      ></v-img>

      <p style="margin: 15px 0"></p>
      <div style="display: flex; flex-direction: column; gap: 10px">
        <div style="display: flex">
          <v-icon v-for="_ in 5" color="warning500"
            >mdi mdi-star-outline</v-icon
          >
        </div>
        <LineClamp
          title="Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version..."
          font-size="16px"
        />
        <p class="">
          <span
            class="text-gray300 text-decoration-line-through"
            style="font-size: 16px"
            >$865.99</span
          ><span
            style="font-size: 16px; font-weight: 600; margin-left: 10px"
            class="text-secondary500"
            >$442.12</span
          >
        </p>
        <p style="font-size: 14px" class="text-gray600">
          Games built using the Xbox Series X|S development kit showcase
          unparalleled load times, visuals.
        </p>
      </div>
      <div
        class="d-flex align-center justify-space-between mt-4"
        style="width: 100%"
      >
        <IconButton icon="mdi mdi-cards-heart-outline" bg="primary100" />
        <CustomeButton
          title="ADD TO CARD"
          prepend-icon="mdi mdi-cart-outline"
          bg="primary500"
        />
        <IconButton icon="mdi mdi-eye-outline" bg="primary100" />
      </div>
    </v-card>
    <v-container class="pa-0 ma-0" fluid>
      <v-row no-gutters>
        <v-col
          v-for="(item, index) in bestDealItems"
          :key="index"
          cols="3"
          class="pa-0 ma-0"
        >
          <CustomeCard
            :image="item?.image"
            :description="item?.description"
            :price="item?.price"
            is-show-label
            :label-title="item?.label"
            :dis-count="item?.promotion"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script lang="ts" setup>
import Label from "../shared/Label.vue";
import Image1 from "@/assets/best-deals/1.png";
import LineClamp from "../shared/LineClamp.vue";
import CustomeButton from "../shared/CustomeButton.vue";
import IconButton from "../shared/IconButton.vue";
import CustomeCard from "../shared/CustomeCard.vue";
import Image2 from "@/assets/best-deals/2.png";
import Image3 from "@/assets/best-deals/3.png";
import Image4 from "@/assets/best-deals/4.png";
import Image5 from "@/assets/best-deals/5.png";
import Image6 from "@/assets/best-deals/6.png";
import Image7 from "@/assets/best-deals/7.png";
import Image8 from "@/assets/best-deals/8.png";
import Image9 from "@/assets/best-deals/9.png";

const bestDealItems = [
  {
    id: 0,
    description:
      "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    price: "2,300",
    promotion: "",
    image: Image2,
    label: "SOLD OUT",
  },
  {
    id: 1,
    description: "Simple Mobile 4G LTE Prepaid Smartphone",
    price: "220",
    promotion: "",
    image: Image3,
  },
  {
    id: 2,
    description: "4K UHD LED Smart TV with Chromecast Built-in",
    price: "150",
    promotion: "865",
    image: Image4,
    label: "19% OFF",
  },
  {
    id: 3,
    description: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    price: "1200",
    promotion: "",
    image: Image5,
    label: "",
  },
  {
    id: 4,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: "229",
    promotion: "",
    image: Image6,
    label: "",
  },
  {
    id: 5,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
    price: "70",
    promotion: "865.99",
    image: Image7,
    label: "",
  },
  {
    id: 6,
    description: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    price: "160",
    promotion: "",
    image: Image8,
    label: "HOT",
  },
  {
    id: 7,
    description: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
    price: "250",
    promotion: "360",
    image: Image9,
    label: "32% OFF",
  },
];
</script>
<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
}

.top-discount {
  width: 450px;
  height: 592px;
}

.clamp-text {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-clamp: 2;
}
</style>
