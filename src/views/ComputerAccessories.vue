<template>
  <section style="margin-top: 40px">
    <div class="d-flex align-center justify-space-between">
      <p style="font-size: 22px; font-weight: bold">Computer Accessories</p>
      <div class="d-flex align-center ga-4">
        <div class="d-md-flex align-center ga-3 d-none">
          <p
            v-for="(item, index) in listOfNavItems"
            :key="item?.id"
            class="productTitle"
            :class="{
              'active-item': activeItemIndex === index,
            }"
            @click="changeItemIndex(index)"
          >
            {{ item?.title }}
          </p>
        </div>
        <CustomeButton
          title="All Products"
          text-color="primary500"
          append-icon="mdi-arrow-right"
          bg=""
        />
      </div>
    </div>
    <v-row>
      <v-col cols="12" lg="9">
        <section>
          <v-container class="pa-0 ma-0" fluid>
            <v-row no-gutters>
              <v-col
                cols="6"
                sm="3"
                v-for="item in computerAccessoryItems"
                :key="item?.id"
                class="pa-1 ma-0"
              >
                <CustomeCard
                  :image="item?.image"
                  :description="item?.description"
                  :price="item?.price.toString()"
                  is-show-label
                  :label-title="item?.label"
                  :dis-count="item?.discount"
                  :cardHeight="mdAndUp ? '370px' : ''"
                  isShowRateStar
                  :ratingNumber="item?.ratinfNumber"
                  :starAverage="item?.ratinfStar"
                />
              </v-col>
            </v-row>
          </v-container>
        </section>
      </v-col>
      <v-col cols="12" lg="3">
        <v-row>
          <v-col cols="12" sm="8" md="12">
            <v-card elevation="0" class="bg-warning200 first-card">
              <v-img :src="Image" width="150" height="150"></v-img>
              <div class="d-flex flex-column ga-2 align-center justify-center">
                <p class="text-center text-gray900 title">
                  Xiaomi True Wireless Earbuds
                </p>
                <p class="text-gray700 body-medium400">
                  Escape the noise, It’s time to hear the magic with Xiaomi
                  Earbuds.
                </p>
                <p>
                  <span class="text-gray700 body-small400">Only for: </span>
                  <span class="bg-gray00 px-4 py-2 rounded ml-2">$299 USD</span>
                </p>

                <v-card-action class="mt-4">
                  <CustomeButton
                    title="SHOP NOW"
                    append-icon="mdi-arrow-right"
                  />
                </v-card-action>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" md="12"
            ><v-card elevation="0" class="second-card">
              <p
                class="text-gray00 rounded"
                style="
                  background-color: #3b5998;
                  width: fit-content;
                  padding: 6px 12px;
                "
              >
                SUMMER SALES
              </p>
              <v-card-title class="text-heading02 text-gray00"
                >37% DISCOUNT</v-card-title
              >
              <p class="body-large400 text-gray00">
                only for
                <span class="text-warning500 body-large600">SmartPhone</span>
                product.
              </p>
              <v-card-action>
                <CustomeButton
                  title="SHOP NOW"
                  append-icon="mdi-arrow-right"
                  bg="secondary500"
                />
              </v-card-action> </v-card
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts" setup>
import Image from "@/assets/ComputerAccessories/0.png";
import Image1 from "@/assets/ComputerAccessories/1.png";
import Image2 from "@/assets/ComputerAccessories/2.png";
import Image3 from "@/assets/ComputerAccessories/3.png";
import Image4 from "@/assets/ComputerAccessories/4.png";
import Image5 from "@/assets/ComputerAccessories/5.png";
import Image6 from "@/assets/ComputerAccessories/6.png";
import Image7 from "@/assets/ComputerAccessories/7.png";
import Image8 from "@/assets/ComputerAccessories/8.png";
import CustomeButton from "../shared/CustomeButton.vue";
import CustomeCard from "../shared/CustomeCard.vue";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
import { ref } from "vue";
const listOfNavItems = [
  { id: 0, title: "All Products" },
  { id: 1, title: "Keyboard & Mouse" },
  { id: 2, title: "Headphone" },
  {
    id: 3,
    title: "Webcam",
  },
  {
    id: 4,
    title: "Printer",
  },
];

const activeItemIndex = ref(0);
const changeItemIndex = (index: number) => {
  activeItemIndex.value = index;
};

const computerAccessoryItems = [
  {
    id: 0,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    ratinfStar: 5,
    ratinfNumber: "994",
    price: 360,
    label: "BEST DEALS",
    discount: "",
    image: Image1,
  },
  {
    id: 1,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    ratinfStar: 5,
    ratinfNumber: "798",
    price: 80,
    label: "",
    discount: "",
    image: Image2,
  },
  {
    id: 2,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    ratinfStar: 5,
    ratinfNumber: "600",
    price: 70,
    label: "HOT",
    discount: "",
    image: Image3,
  },
  {
    id: 3,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    ratinfStar: 5,
    ratinfNumber: "492",
    price: 250,
    label: "",
    discount: "",
    image: Image4,
  },
  {
    id: 4,
    description: "Samsung Electronics Samsung Galexy S21 5G",
    ratinfStar: 4,
    ratinfNumber: "740",
    price: 230,
    label: "",
    discount: "",
    image: Image5,
  },
  {
    id: 5,
    description: "4K UHD LED Smart TV with Chromecast Built-in",
    ratinfStar: 4,
    ratinfNumber: "556",
    price: 230,
    label: "SALE",
    discount: "",
    image: Image6,
  },
  {
    id: 6,
    description: "Wired Over-Ear Gaming Headphones with USB",
    ratinfStar: 3.5,
    ratinfNumber: "536",
    price: 150,
    label: "",
    discount: "",
    image: Image7,
  },
  {
    id: 7,
    description: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    ratinfStar: 4,
    ratinfNumber: "423",
    price: 1200,
    label: "25% OFF",
    discount: "1600",
    image: Image8,
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

.first-card {
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 22px;
  line-height: 40px;
  font-weight: 600;
}
.second-card {
  background-color: #124261;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

@media (min-width: 600px) {
  .first-card {
    padding: 32px;
  }
}
@media (min-width: 1024px) {
  .first-card {
    flex-direction: column;
  }
}
</style>
