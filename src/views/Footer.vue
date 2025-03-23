<template>
  <footer style="padding-top: 72px">
    <section
      style="padding: 72px 0; width: 100%; background-color: #1b6392"
      class="d-flex align-center justify-center"
    >
      <div
        style="width: 40%"
        class="d-flex align-center justify-center flex-column ga-4"
      >
        <p class="text-heading01 text-gray00">Subscribe to our newsletter</p>
        <p class="body-medium400 text-gray300 text-center">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>
        <div class="bg-gray00 rounded-sm customer-input-parent">
          <input type="text" class="custom-input" placeholder="Email address" />
          <CustomeButton title="SUBSCRIBE" append-icon="mdi-arrow-right" />
        </div>
        <v-divider
          inset
          style="display: block; width: 100%; margin: 20px"
          color="gray100"
          :thickness="2"
        ></v-divider>
        <div class="d-flex align-center justify-center ga-10 w-100">
          <v-img
            v-for="item in footerIconsList"
            :key="item?.id"
            :src="item?.image"
          ></v-img>
        </div>
      </div>
    </section>
    <section style="padding-top: 72px" class="bg-gray900">
      <v-container fluid style="width: 80%">
        <v-row no-gutters>
          <v-col cols="2">
            <v-btn>Logo</v-btn>
            <div style="margin-top: 24px" class="d-flex ga-1 flex-column">
              <p class="text-gray500 body-small400">Customer Supports:</p>
              <p class="body-large500">(629) 555-0129</p>
              <address class="body-medium400">
                4517 Washington Ave. Manchester, Kentucky 39495
              </address>
              <p>info@kinbo.com</p>
            </div>
          </v-col>
          <v-col cols="2">
            <p class="label02">Top Category</p>
            <div class="d-flex flex-column ga-1" style="margin-top: 24px">
              <p
                v-for="item in topCategoryItems"
                :key="item?.id"
                class="custome-hover-effect"
                style="cursor: pointer"
              >
                {{ item?.title }}
              </p>
            </div>
          </v-col>
          <v-col cols="2">
            <p class="label02">Quick links</p>
            <div class="d-flex flex-column ga-1" style="margin-top: 24px">
              <p
                v-for="item in quickLinkItems"
                :key="item?.id"
                style="cursor: pointer"
                class="custome-hover-effect"
              >
                {{ item?.title }}
              </p>
            </div>
          </v-col>
          <v-col cols="2">
            <p class="label02">Download APP</p>
            <div
              class="d-flex flex-column ga-2"
              style="margin-top: 24px; width: 100%"
            >
              <v-btn variant="tonal" size="x-large" class="align-start-btn">
                <v-img :src="PlayStore" width="30" height="30"></v-img>
                <div class="d-flex align-start flex-column ml-2">
                  <p style="font-size: 11px" class="text-gray100">Get it on</p>
                  <p style="font-size: 14px">Google Play</p>
                </div>
              </v-btn>

              <v-btn variant="tonal" size="x-large" class="align-start-btn">
                <v-img :src="AppStore" width="30" height="30"></v-img>
                <div class="d-flex align-start flex-column ml-2">
                  <p style="font-size: 11px" class="text-gray100">Get it on</p>
                  <p style="font-size: 14px">App Store</p>
                </div>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="4">
            <p class="label02">Popular Tag</p>
            <div class="popularTagParent">
              <p
                v-for="item in popularTagItems"
                :key="item?.id"
                class="popularTagItem"
              >
                {{ item?.title }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-divider style="margin-top: 24px"></v-divider>
      <p class="text-gray400 body-small400 text-center" style="padding: 24px">
        Electronic Shop - eCommerce Template © 2025. Developed by CHANN YENG
      </p>
    </section>
  </footer>
</template>
<script lang="ts" setup>
import CustomeButton from "../shared/CustomeButton.vue";
import Image0 from "@/assets/footer-icons/0.png";
import Image1 from "@/assets/footer-icons/1.png";
import Image2 from "@/assets/footer-icons/2.png";
import Image3 from "@/assets/footer-icons/3.png";
import Image4 from "@/assets/footer-icons/4.png";
import PlayStore from "@/assets/footer-icons/play-store.png";
import AppStore from "@/assets/footer-icons/app-store.png";
import { ref } from "vue";
const footerIconsList = ref([
  {
    id: 0,
    image: Image0,
  },
  {
    id: 1,
    image: Image1,
  },
  {
    id: 2,
    image: Image2,
  },
  {
    id: 3,
    image: Image3,
  },
  {
    id: 4,
    image: Image4,
  },
]);

const topCategoryItems = ref([
  {
    id: 0,
    title: "Computer & Laptop",
  },
  {
    id: 1,
    title: "SmartPhone",
  },
  {
    id: 2,
    title: "Headphone",
  },
  {
    id: 3,
    title: "Accessories",
  },
  {
    id: 4,
    title: "Camera & Photo",
  },
  {
    id: 5,
    title: "TV & Homes",
  },
]);

const quickLinkItems = ref([
  {
    id: 0,
    title: "Shop Product",
  },
  {
    id: 1,
    title: "Shoping Cart",
  },
  {
    id: 2,
    title: "Wishlist",
  },
  {
    id: 3,
    title: "Compare",
  },
  {
    id: 4,
    title: "Track Order",
  },
  {
    id: 5,
    title: "Customer Help",
  },
  {
    id: 6,
    title: "About Us",
  },
]);

const popularTagItems = ref([
  {
    id: 1,
    title: "Game",
  },
  {
    id: 2,
    title: "iPhone",
  },
  {
    id: 3,
    title: "TV",
  },
  {
    id: 4,
    title: "Asus Laptops",
  },
  {
    id: 5,
    title: "Macbook",
  },
  {
    id: 6,
    title: "SSD",
  },
  {
    id: 7,
    title: "Graphics Card",
  },
  {
    id: 8,
    title: "Power Bank",
  },
  {
    id: 9,
    title: "Smart TV",
  },
  {
    id: 10,
    title: "Speaker",
  },
  {
    id: 11,
    title: "Tablet",
  },
  {
    id: 12,
    title: "Microwave",
  },
  {
    id: 13,
    title: "Samsung",
  },
]);
</script>
<style scoped>
.customer-input-parent {
  width: 100%;
  height: 80px;
  display: inline-flex;
  padding: 0 12px;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.custom-input {
  width: 100%;
  height: 100%;
  font-size: 24px;
}

.custom-input:focus {
  outline: none;
  border: none;
}

.align-start-btn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
}

.popularTagParent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.popularTagItem {
  padding: 6px 12px;
  border-radius: 2px;
  border: 1px solid #adb7bc;
  cursor: pointer;
  transition: background-color ease-in-out 300ms;
}
.popularTagItem:hover {
  background-color: rgba(128, 139, 150, 0.5);
}
.custome-hover-effect {
  position: relative;
  padding-left: 20px;
  transition: all 0.3s ease-in-out;
  color: #929fa5;
}

.custome-hover-effect:hover {
  color: #fff;
}

.custome-hover-effect:hover::before {
  content: "−";
  position: absolute;
  left: 0;
  font-size: 16px;
  color: #ebc80c;
  font-weight: bold;
  transition: opacity 0.3s ease-in-out;
}
</style>
