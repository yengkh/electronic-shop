<template>
  <section style="margin-top: 72px">
    <p
      class="text-center"
      style="font-size: 32px; font-weight: 600; margin-bottom: 40px"
    >
      Shop with Categorys
    </p>
    <div class="d-flex align-center" style="position: relative">
      <div style="position: absolute; left: 0">
        <IconButton
          icon="mdi mdi-chevron-left"
          rounded
          bg="primary500"
          is-white-color
        />
      </div>

      <v-slide-group ref="slideGroup">
        <v-slide-group-item v-for="(item, i) in listOfCategory" :key="i">
          <v-card
            elevation="0"
            class="border-thin rounded-sm custome-card default-hover"
            style="margin-right: 16px"
          >
            <v-img :src="item.image" style="width: 100%; height: 148px"></v-img>
            <v-card-title
              style="font-size: 18px; text-align: center; user-select: none"
            >
              {{ item.title }}
            </v-card-title>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>

      <div style="position: absolute; right: 0px; z-index: -1">
        <IconButton
          icon="mdi mdi-chevron-right"
          rounded
          bg="primary500"
          is-white-color
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import IconButton from "../shared/IconButton.vue";
import Image1 from "@/assets/showCategory/1.png";
import Image2 from "@/assets/showCategory/2.png";
import Image3 from "@/assets/showCategory/3.png";
import Image4 from "@/assets/showCategory/4.png";
import Image5 from "@/assets/showCategory/5.png";
import Image6 from "@/assets/showCategory/6.png";

const listOfCategory = [
  {
    id: 0,
    image: Image1,
    title: "Computer & Laptop",
  },
  {
    id: 1,
    image: Image2,
    title: "SmartPhone",
  },
  {
    id: 2,
    image: Image3,
    title: "Headphones",
  },
  {
    id: 3,
    image: Image4,
    title: "Accessories",
  },
  {
    id: 4,
    image: Image5,
    title: "Camera & Photo",
  },
  {
    id: 5,
    image: Image6,
    title: "TV & Homes",
  },
  {
    id: 6,
    image: Image1,
    title: "Computer & Laptop",
  },
  {
    id: 7,
    image: Image2,
    title: "SmartPhone",
  },
  {
    id: 8,
    image: Image3,
    title: "Headphones",
  },
  {
    id: 9,
    image: Image4,
    title: "Accessories",
  },
  {
    id: 10,
    image: Image5,
    title: "Camera & Photo",
  },
  {
    id: 11,
    image: Image6,
    title: "TV & Homes",
  },
  {
    id: 12,
    image: Image1,
    title: "Computer & Laptop",
  },
  {
    id: 13,
    image: Image2,
    title: "SmartPhone",
  },
  {
    id: 14,
    image: Image3,
    title: "Headphones",
  },
  {
    id: 15,
    image: Image4,
    title: "Accessories",
  },
  {
    id: 16,
    image: Image5,
    title: "Camera & Photo",
  },
  {
    id: 17,
    image: Image6,
    title: "TV & Homes",
  },
  {
    id: 18,
    image: Image1,
    title: "Computer & Laptop",
  },
  {
    id: 19,
    image: Image2,
    title: "SmartPhone",
  },
  {
    id: 20,
    image: Image3,
    title: "Headphones",
  },
  {
    id: 21,
    image: Image4,
    title: "Accessories",
  },
  {
    id: 22,
    image: Image5,
    title: "Camera & Photo",
  },
  {
    id: 23,
    image: Image6,
    title: "TV & Homes",
  },
];
</script>
<style scoped>
.main-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.custome-card {
  width: 250px;
  height: 250px;
  padding: 12px 24px;
  cursor: pointer;
}
</style>
