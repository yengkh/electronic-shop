<template>
  <nav style="width: 100%">
    <transition name="slide-up-fade">
      <section class="top-promotion bg-gray900" v-if="isShowPromotionBanner">
        <div style="width: 80%; margin: 0 auto" class="top-promotion-content">
          <p>
            <span class="top-mpromotion-balck bg-warning300">Black</span>
            <span style="margin-left: 5px; font-size: 24px; font-weight: 500"
              >Friday</span
            >
          </p>

          <p
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 5px;
            "
          >
            Up to
            <span
              class="text-warning500"
              style="font-size: 40px; font-weight: 600"
              >59%</span
            >
            <span style="font-weight: 600; font-size: 20px">OFF</span>
          </p>

          <v-btn
            append-icon="mdi mdi-arrow-right-thin"
            class="text-gray900"
            color="warning500"
          >
            SHOP NOW
          </v-btn>

          <v-btn
            color="gray800"
            style="font-size: 20px"
            @click="toggleShowPromotionBanner"
            ><span class="mdi mdi-close"></span
          ></v-btn>
        </div>
      </section>
    </transition>

    <!-- App Bar -->
    <section class="bg-secondary700">
      <div style="width: 80%; margin: 0 auto">
        <!-- First -->
        <section class="second-path">
          <p>Wellcome to electronic shop</p>

          <div
            style="display: flex; align-items: center; justify-content: center"
          >
            <p>Follow us:</p>
            <v-btn
              size="small"
              variant="text"
              v-for="(item, index) in iconsList"
              :key="index"
              :icon="item.icon"
            ></v-btn>
            <v-divider vertical class="mx-4" style="height: 55px"></v-divider>
            <div style="width: 10px"></div>
            <v-select
              v-model="selectLanguage"
              :items="languages"
              variant="underlined"
            ></v-select>
            <div style="width: 10px"></div>
            <v-select
              v-model="selcectCurrency"
              :items="currency"
              variant="underlined"
            ></v-select>
          </div>
        </section>
        <v-divider></v-divider>
        <!-- Second -->
        <section
          style="
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <div><v-btn> Logo </v-btn></div>
          <div>
            <v-text-field
              :loading="loading"
              append-inner-icon="mdi-magnify"
              label="Find for items..."
              variant="solo"
              hide-details
              size="x-large"
              single-line
              @click:append-inner="onClick"
              style="width: 600px"
              class="rounded-sm"
              elevation="0"
            ></v-text-field>
          </div>
          <div class="d-flex align-center">
            <v-badge
              :content="2"
              color="gray00"
              style="margin-right: 10px; cursor: pointer"
            >
              <v-icon icon="mdi mdi-cart-outline"></v-icon>
            </v-badge>
            <v-btn icon="mdi mdi-cards-heart-outline" variant="text"></v-btn>
            <v-btn icon="mdi mdi-account-outline" variant="text"></v-btn>
          </div>
        </section>
      </div>
    </section>

    <!-- Category -->
    <section style="width: 80%; margin: 0 auto">
      <Category />
      <v-divider style="margin: 10px 0 20px"></v-divider>
    </section>
  </nav>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Category from "./Category.vue";

const isShowPromotionBanner = ref(true);

const toggleShowPromotionBanner = () =>
  (isShowPromotionBanner.value = !isShowPromotionBanner.value);

const iconsList = [
  { id: 1, icon: "mdi mdi-twitter" },
  { id: 2, icon: "mdi mdi-facebook" },
  { id: 3, icon: "mdi mdi-youtube" },
  { id: 4, icon: "mdi mdi-instagram" },
];

const languages = ["En", "Kh"];
const selectLanguage = ref(languages[0]);

const currency = ["USD", "Riel"];
const selcectCurrency = ref(currency[0]);

const loading = ref(false);
const loaded = ref(false);
const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};
</script>
<style scoped>
.top-promotion {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  transition: all 0.5s ease-in-out;
}

.slide-up-fade-enter-active,
.slide-up-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-up-fade-enter-from,
.slide-up-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-up-fade-enter-to,
.slide-up-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.top-promotion-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.top-mpromotion-balck {
  width: fit-content;
  padding: 5px 10px;
  rotate: -5deg;
}

.shopping-button {
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
}

.second-path {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin: -15px 0;
}
</style>
