<template>
  <section
    style="
      margin-top: 72px;
      display: flex;
      justify-content: space-between;
      width: 100%;
    "
  >
    <div class="first-path">
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 35px 24px;
        "
      >
        <p class="body-small500 text-danger600 text-center">
          COMPUTER & ACCESSORIES
        </p>
        <p class="text-heading01 text-center">32% Discount</p>
        <p class="body-medium400 text-center text-gray700">
          For all ellectronics products
        </p>
        <p class="text-center">
          <span class="body-small500">Offers ends in:</span>
          <span class="body-small600 bg-gray00 px-4 py-2 rounded-sm ml-2"
            >ENDS OF CHRISTMAS</span
          >
        </p>
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
        "
      >
        <CustomeButton title="SHOP NOW" appendIcon="mdi-arrow-right" />
      </div>
      <v-img :src="Image" style="width: 100%"></v-img>
    </div>
    <div style="width: 75%; height: 712px">
      <section class="d-flex justify-space-between" style="width: 100%">
        <p class="text-heading03" style="width: fit-content">
          Featured Products
        </p>
        <section style="display: flex; gap: 32px">
          <div style="display: flex; gap: 12px">
            <p
              v-for="(item, index) in featureProductTitle"
              :key="item.id"
              :class="{
                'active-item': activeItemIndex === index,
              }"
              class="productTitle"
              @click="changeItemIndex(index)"
            >
              {{ item.title }}
            </p>
          </div>
          <CustomeButton
            title="Browse All Product"
            text-color="primary500"
            append-icon="mdi-arrow-right"
            bg=""
          />
        </section>
      </section>
      <div style="margin-top: 24px"></div>
      <v-container class="pa-0 ma-0" fluid>
        <v-row no-gutters>
          <v-col
            v-for="(item, index) in featureProducts"
            :key="index"
            cols="3"
            class="pa-1 ma-0"
          >
            <CustomeCard
              :image="item?.image"
              :description="item?.description"
              :price="item?.price"
              is-show-label
              :label-title="item?.label"
              :dis-count="item?.discount"
              cardHeight="325px"
              isShowRateStar
              :ratingNumber="item?.rating.toString()"
              :starAverage="item?.starRating"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import CustomeButton from "../shared/CustomeButton.vue";
import CustomeCard from "../shared/CustomeCard.vue";
import Image from "@/assets/feature-products/0.jpg";
import Image1 from "@/assets/feature-products/1.png";
import Image2 from "@/assets/feature-products/2.png";
import Image3 from "@/assets/feature-products/3.png";
import Image4 from "@/assets/feature-products/4.png";
import Image5 from "@/assets/feature-products/5.png";
import Image6 from "@/assets/feature-products/6.png";
import Image7 from "@/assets/feature-products/7.png";

const activeItemIndex = ref(0);
const changeItemIndex = (index: number) => {
  activeItemIndex.value = index;
};
const featureProductTitle = ref([
  { id: 0, title: "All products" },
  { id: 1, title: "Smart Phone" },
  { id: 2, title: "Laptop" },
  { id: 3, title: "Tablet" },
  { id: 4, title: "Headphones" },
  { id: 5, title: "Accessories" },
]);

const featureProducts = [
  {
    id: 0,
    rating: 738,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: "70",
    image: Image1,
    discount: "",
    label: "HOT",
    starRating: 5,
  },
  {
    id: 1,
    rating: 536,
    description: "Samsung Electronics Samsung Galexy S21 5G",
    price: "23000",
    image: Image2,
    discount: "",
    label: "",
    starRating: 5,
  },
  {
    id: 2,
    rating: 423,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: "360",
    image: Image3,
    discount: "",
    label: "BEST DEALS",
    starRating: 3.5,
  },
  {
    id: 3,
    rating: 816,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: "80",
    image: Image4,
    discount: "",
    label: "",
    starRating: 4,
  },
  {
    id: 4,
    rating: 647,
    description: "Wired Over-Ear Gaming Headphones with USB",
    price: "1500",
    image: Image5,
    discount: "",
    label: "",
    starRating: 5,
  },
  {
    id: 5,
    rating: 877,
    description: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price: "1200",
    image: Image6,
    discount: "1600",
    label: "25% OFF",
    starRating: 4,
  },
  {
    id: 6,
    rating: 426,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: "250",
    image: Image,
    discount: "",
    label: "",
    starRating: 5,
  },
  {
    id: 7,
    rating: 583,
    description: "4K UHD LED Smart TV with Chromecast Built-in",
    price: "220",
    image: Image7,
    discount: "",
    label: "SALE",
    starRating: 5,
  },
];
</script>
<style scoped>
.first-path {
  width: 22%;
  height: 716px;
  background-color: #f3de6d;
}

.productTitle {
  padding: 8px 0px;
  cursor: pointer;
  color: #7a7a7a;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  height: fit-content;
  transition: color 0.3s ease-in-out;
}

.active-item {
  color: #191c1f;
}

.productTitle::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0%;
  width: 0%;
  height: 2px;
  background-color: #fa8232;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

.active-item::after {
  width: 100%;
  left: 0;
}
</style>
