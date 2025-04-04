<template>
  <section
    style="
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-direction: column;
    "
  >
    <section
      class="d-flex justify-space-between align-center"
      style="width: 100%"
    >
      <p style="font-size: 22px; font-weight: bold">Featured Products</p>
      <section style="display: flex; gap: 32px">
        <div class="d-none d-lg-flex ga-4">
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
          title="All Products"
          text-color="primary500"
          append-icon="mdi-arrow-right"
          bg=""
        />
      </section>
    </section>
    <v-row>
      <v-col cols="12" md="3" class="top-promotion">
        <div class="d-flex flex-column ga-2 pa-2 align-center justify-center">
          <p class="text-danger600 text-center title">COMPUTER & ACCESSORIES</p>
          <p class="subtitle text-center">32% Discount</p>
          <p class="body-medium400 text-center text-gray700">
            For all ellectronics products
          </p>
          <CustomeButton
            title="SHOP NOW"
            appendIcon="mdi-arrow-right"
            style="margin-top: 8px"
          />
        </div>
        <v-img :src="Image" class="top-promotion-iamge"></v-img>
      </v-col>
      <v-col cols="12" md="9">
        <v-container class="pa-0 ma-0" fluid>
          <v-row no-gutters>
            <v-col
              v-for="(item, index) in featureProducts"
              :key="index"
              class="pa-1 ma-0"
              cols="6"
              sm="3"
            >
              <CustomeCard
                :image="item?.image"
                :description="item?.description"
                :price="item?.price"
                is-show-label
                :label-title="item?.label"
                :dis-count="item?.discount"
                :cardHeight="mdAndUp ? '330px' : ''"
                isShowRateStar
                :ratingNumber="item?.rating.toString()"
                :starAverage="item?.starRating"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
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
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
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
    image: Image3,
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

.top-promotion {
  background-color: #f3de6d;
  margin-top: 16px;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  padding: 0 0 0 20px;
}

.top-promotion-iamge {
  height: 180px;
  object-fit: cover;
}

.title {
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
}

.subtitle {
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
}
@media (min-width: 600px) {
  .top-promotion-iamge {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
}
@media (min-width: 1024px) {
  .top-promotion {
    flex-direction: column;
  }

  .top-promotion-iamge {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
