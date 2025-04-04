<template>
  <v-layout
    style="
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      max-height: 100vh;
    "
  >
    <AppBar @toggle-drawer="toggleDrawer" />
    <v-navigation-drawer v-model="drawer" temporary class="d-md-none">
      <v-list-item class="body-xxl400">All categories</v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-group v-for="item in categoryItems" :key="item.title">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="item.title"></v-list-item>
          </template>
          <v-list-item
            v-for="subTitle in item.items"
            :key="subTitle.id"
            :title="subTitle.title"
            :value="subTitle.title"
          ></v-list-item>
        </v-list-group>
      </v-list>
      <v-divider></v-divider>
      <p class="px-2 body-xxl400">Setting</p>
      <v-list>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Languages"
              prepend-icon="mdi-web"
              class="text-secondary500"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="item in languageList"
            :key="item.id"
            :value="item.title"
          >
            <span>{{ item.title }}</span>
            <v-icon class="ml-8" color="primary500">mdi mdi-check</v-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Currency"
              prepend-icon="mdi mdi-currency-usd"
              class="text-primary500"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="item in currencyList"
            :key="item.id"
            :value="item.title"
            :title="item.title"
          ></v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Theme Mode"
              prepend-icon="mdi mdi-theme-light-dark"
              class="text-warning500"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="item in themList"
            :key="item.id"
            :value="item.title"
            :title="item.title"
            :prepend-icon="item.icon"
          ></v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Layout View"
              prepend-icon="mdi mdi-palette-outline"
              class="text-success700"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="item in layoutColorList"
            :key="item.id"
            :value="item.colorCode"
            :class="[item.name]"
          >
            <p>
              <span>{{ item.colorCode }}</span>
              <span
                :class="item.bg"
                style="width: 25px; height: 25px; border-radius: 50%"
              ></span>
            </p>
          </v-list-item>
        </v-list-group>
      </v-list>
      <div class="px-2">
        <p class="body-xxl400">Follow us</p>
        <v-btn
          size="small"
          variant="text"
          v-for="(item, index) in iconsList"
          :key="index"
          :icon="item.icon"
        ></v-btn>
      </div>
      <p class="text-center text-gray400 my-2">v-01</p>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import AppBar from "./views/AppBar.vue";
import Footer from "./views/Footer.vue";

const languageList = [
  {
    id: 0,
    title: "English",
  },
  {
    id: 1,
    title: "Khmer",
  },
];

const currencyList = [
  {
    id: 0,
    title: "USD",
  },
  {
    id: 1,
    title: "Riel",
  },
];

const themList = [
  {
    id: 0,
    title: "Dark Mode",
    icon: "mdi mdi-weather-night",
  },
  {
    id: 1,
    title: "Light Mode",
    icon: "mdi mdi-white-balance-sunny",
  },
  {
    id: 2,
    title: "System",
    icon: "mdi mdi-cellphone-cog",
  },
];

const layoutColorList = [
  {
    id: 0,
    colorCode: "#475156",
    name: "text-gray700",
    bg: "bg-gray700",
  },
  {
    id: 0,
    colorCode: "#99501F",
    name: "text-primary700",
    bg: "bg-primary700",
  },
  {
    id: 0,
    colorCode: "#1B6392",
    name: "text-secondary700",
    bg: "bg-secondary700",
  },
  {
    id: 0,
    colorCode: "#1B6B16",
    name: "text-success700",
    bg: "bg-success700",
  },
];

const iconsList = [
  { id: 1, icon: "mdi mdi-twitter" },
  { id: 2, icon: "mdi mdi-facebook" },
  { id: 3, icon: "mdi mdi-youtube" },
  { id: 4, icon: "mdi mdi-instagram" },
];
const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const categoryItems = [
  { id: 0, title: "Computer & Laptop", icon: "mdi mdi-laptop" },
  { id: 1, title: "Computer Accessories" },
  {
    id: 2,
    title: "Smart Phone",
    items: [
      {
        id: 0,
        title: "iPhone",
      },
      { id: 1, title: "Sansung" },
      {
        id: 2,
        title: "Realme",
      },
      {
        id: 3,
        title: "OnePlus",
      },
      {
        id: 4,
        title: "Xiaomi",
      },
      {
        id: 5,
        title: "Huawei",
      },
      {
        id: 6,
        title: "Oppo",
      },
      {
        id: 7,
        title: "Vivo",
      },
      {
        id: 8,
        title: "Google Pixel",
      },
    ],
  },
  {
    id: 3,
    title: "Headphone",
    items: [
      {
        id: 0,
        title: "Test",
      },
    ],
  },
  {
    id: 4,
    title: "Mobile Accessories",
    items: [
      { id: 0, title: "test" },
      { id: 1, title: "test 2" },
    ],
  },
  { id: 5, title: "Gaming Console" },
  { id: 6, title: "Camera & Photo" },
  { id: 7, title: "TV & Homes Appliances" },
  { id: 8, title: "Watchs & Accessories" },
  { id: 9, title: "GPS & Navigation" },
  { id: 10, title: "Warable Technology" },
];
</script>
