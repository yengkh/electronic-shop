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
            <section style="position: relative; z-index: 150">
              <v-btn
                variant="text"
                class="rounded-sm"
                @click="handleChangeShowListOfLanguages()"
              >
                <v-img
                  :src="listOfLanguages[currentLanguageShow]?.image"
                  width="32"
                ></v-img>
                <p>{{ listOfLanguages[currentLanguageShow]?.title }}</p>
              </v-btn>
              <v-card
                v-show="isShowListOfLanguages"
                class="coustom-card rounded-sm"
              >
                <div
                  v-for="(item, index) in listOfLanguages"
                  :key="item?.id"
                  class="d-flex align-center justify-center ga-2"
                  @click="handleChangeCurrentLanguageShow(index)"
                >
                  <v-img :src="item?.image" width="40"></v-img>
                  <p class="body-medium400">{{ item?.title }}</p>
                  <v-icon color="primary500" v-if="currentLanguageShow == index"
                    >mdi mdi-check</v-icon
                  >
                </div>
              </v-card>
            </section>
            <section style="position: relative">
              <v-btn
                variant="text"
                class="rounded-sm"
                @click="toggleShowCurrency()"
              >
                <v-img
                  :src="listOfCurrency[currentCurrencyShow]?.image"
                  width="24"
                  height="24"
                ></v-img>
                <p>{{ listOfCurrency[currentCurrencyShow]?.title }}</p>
              </v-btn>
              <v-card v-show="isShowCurrency" class="coustom-card rounded-sm">
                <div
                  v-for="(item, index) in listOfCurrency"
                  :key="item?.id"
                  class="d-flex align-center justify-center ga-2"
                  @click="handleChangeCurrencyIndexShow(index)"
                >
                  <v-img :src="item?.image" width="30" height="30"></v-img>
                  <p class="body-medium400">{{ item?.title }}</p>
                  <v-icon color="primary500" v-if="currentCurrencyShow == index"
                    >mdi mdi-check</v-icon
                  >
                </div>
              </v-card>
            </section>
          </div>
        </section>
        <v-divider style="margin-top: 10px"></v-divider>
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
            <div style="position: relative; z-index: 101">
              <v-badge
                :content="2"
                color="gray00"
                style="margin-right: 10px; cursor: pointer"
                @click="toggleShowCart()"
              >
                <v-icon icon="mdi mdi-cart-outline"></v-icon>
              </v-badge>
              <v-card v-show="isShowCart" class="custom-cart-item">
                <v-card-title class="body-xl400"
                  >Shopping Cart (2)</v-card-title
                >
                <v-divider></v-divider>

                <section style="margin: 20px 0">
                  <v-row v-for="item in cartItems" :key="item?.id">
                    <v-col cols="4">
                      <v-img
                        :src="item?.image"
                        width="80"
                        height="80"
                        class="border-thin"
                      ></v-img>
                    </v-col>
                    <v-col cols="6">
                      <p class="line-clamp-2 text-gray900 body-small400">
                        {{ item?.description }}
                      </p>
                      <p class="mt-2">
                        <span class="text-gray600 body-small400"
                          >{{ item?.quantity }} *
                        </span>
                        <span class="body-small600 text-secondary500">
                          ${{ item?.price }}</span
                        >
                      </p>
                    </v-col>
                    <v-col cols="2">
                      <v-btn
                        variant="text"
                        icon="mdi mdi-close"
                        size="small"
                        density="comfortable"
                      ></v-btn>
                    </v-col>
                  </v-row>
                </section>

                <v-divider></v-divider>
                <div class="d-flex align-center justify-space-between my-6">
                  <p>Sub-Total:</p>
                  <p class="body-medium500 text-gray900">
                    ${{ calculateCartPrice() }} USD
                  </p>
                </div>

                <v-card-actions class="d-flex flex-column ga-4">
                  <v-btn
                    text="CHECKOUT NOW"
                    class="bg-primary500 rounded-sm"
                    style="width: 100%"
                    size="large"
                    append-icon="mdi-arrow-right"
                    elevation="0"
                  ></v-btn>
                  <v-btn
                    text="VIEW CART"
                    class="rounded-sm"
                    style="width: 100%"
                    size="large"
                    elevation="0"
                    variant="outlined"
                    color="primary500"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div style="position: relative; z-index: 101">
              <v-btn
                icon="mdi mdi-cards-heart-outline"
                variant="text"
                @click="toggleShowFavorites()"
              ></v-btn>
              <v-card
                v-show="isShowFavorites"
                class="custom-cart-item"
                style="margin-top: 10px"
              >
                <v-card-title class="body-xl400"
                  >Shopping Cart (2)</v-card-title
                >
                <v-divider></v-divider>

                <section style="margin: 20px 0">
                  <v-row v-for="item in cartItems" :key="item?.id">
                    <v-col cols="4">
                      <v-img
                        :src="item?.image"
                        width="80"
                        height="80"
                        class="border-thin"
                      ></v-img>
                    </v-col>
                    <v-col cols="6">
                      <p class="line-clamp-2 text-gray900 body-small400">
                        {{ item?.description }}
                      </p>
                      <p class="mt-2">
                        <span class="text-gray600 body-small400"
                          >{{ item?.quantity }} *
                        </span>
                        <span class="body-small600 text-secondary500">
                          ${{ item?.price }}</span
                        >
                      </p>
                    </v-col>
                    <v-col cols="2">
                      <v-btn
                        variant="text"
                        icon="mdi mdi-close"
                        size="small"
                        density="comfortable"
                      ></v-btn>
                    </v-col>
                  </v-row>
                </section>

                <v-divider></v-divider>
                <div class="d-flex align-center justify-space-between my-6">
                  <p>Sub-Total:</p>
                  <p class="body-medium500 text-gray900">
                    ${{ calculateCartPrice() }} USD
                  </p>
                </div>

                <v-card-actions class="d-flex flex-column ga-4">
                  <v-btn
                    text="CHECKOUT NOW"
                    class="bg-primary500 rounded-sm"
                    style="width: 100%"
                    size="large"
                    append-icon="mdi-arrow-right"
                    elevation="0"
                  ></v-btn>
                  <v-btn
                    text="VIEW CART"
                    class="rounded-sm"
                    style="width: 100%"
                    size="large"
                    elevation="0"
                    variant="outlined"
                    color="primary500"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <!-- Login -->
            <v-dialog v-model="isLoginDialog" max-width="500">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  icon="mdi mdi-account-outline"
                  variant="text"
                ></v-btn>
              </template>

              <v-card elevation="0" class="rounded-sm" style="padding: 32px">
                <v-card-title class="body-xl600 text-center"
                  >Login with your account</v-card-title
                >

                <div>
                  <label for="email/phone">Email/Phone</label>
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    class="rounded-sm"
                  ></v-text-field>
                </div>

                <div>
                  <div class="d-flex align-center justify-space-between">
                    <label for="password">Password</label>
                    <p
                      style="user-select: none; cursor: pointer"
                      class="text-secondary500"
                    >
                      Forgot Password
                    </p>
                  </div>
                  <v-text-field
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact"
                    variant="outlined"
                    @click:append-inner="visible = !visible"
                  ></v-text-field>
                </div>

                <v-card-actions class="ma-0 pa-0">
                  <v-btn
                    text="login"
                    @click="isLoginDialog = false"
                    class="bg-primary500 rounded-sm"
                    style="width: 100%"
                    size="large"
                    append-icon="mdi-arrow-right"
                  ></v-btn>
                </v-card-actions>

                <CustomeDividerWithText title="OR" margin="20px 0 " />

                <div class="d-flex" style="width: 30%; margin: 0 auto">
                  <v-img
                    v-for="item in socialMediaItems"
                    :key="item?.id"
                    :src="item?.image"
                    width="30"
                    height="30"
                    contain
                    style="cursor: pointer"
                  ></v-img>
                </div>

                <div class="d-flex align-center justify-center mt-4">
                  <p>Don't have an account?</p>
                  <v-btn
                    text="SIGN UP"
                    variant="text"
                    color="secondary500"
                    @click="isSignUpDialog = true"
                  ></v-btn>
                </div>
              </v-card>
            </v-dialog>
            <!-- Nested Signup Dialog -->
            <v-dialog v-model="isSignUpDialog" max-width="500">
              <v-card elevation="0" class="rounded-sm" style="padding: 32px">
                <v-card-title class="body-xl600 text-center"
                  >Create an Account</v-card-title
                >
                <v-row>
                  <v-col>
                    <label for="name">First Name</label>
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      class="rounded-sm"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <label for="name">Last Name</label>
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      class="rounded-sm"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <div>
                  <label for="email">Email/Phome</label>
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    class="rounded-sm"
                  ></v-text-field>
                </div>

                <div>
                  <label for="password">Password</label>
                  <v-text-field
                    variant="outlined"
                    :append-inner-icon="
                      showOldPassword ? 'mdi-eye-off' : 'mdi-eye'
                    "
                    :type="showOldPassword ? 'text' : 'password'"
                    density="compact"
                    class="rounded-sm"
                    @click:append-inner="showOldPassword = !showOldPassword"
                  ></v-text-field>
                </div>
                <div>
                  <label for="confirm-password">Confirm Password</label>
                  <v-text-field
                    :append-inner-icon="
                      showNewPassword ? 'mdi-eye-off' : 'mdi-eye'
                    "
                    :type="showNewPassword ? 'text' : 'password'"
                    @click:append-inner="showNewPassword = !showNewPassword"
                    variant="outlined"
                    density="compact"
                    class="rounded-sm"
                  ></v-text-field>
                </div>
                <v-checkbox
                  color="primary"
                  label="I have read and conform with terms and conditions"
                  value="primary"
                  hide-details
                  style="margin-top: -30px; margin-bottom: 10px"
                ></v-checkbox>

                <v-card-actions class="ma-0 pa-0">
                  <v-btn
                    text="SIGN UP"
                    @click="isSignUpDialog = false"
                    class="bg-primary500 rounded-sm"
                    style="width: 100%"
                    size="large"
                    append-icon="mdi-arrow-right"
                  ></v-btn>
                </v-card-actions>

                <div class="d-flex align-center justify-center mt-4">
                  <p>Already have an account?</p>
                  <v-btn
                    text="LOGIN"
                    variant="text"
                    color="secondary500"
                    @click="switchToLogin"
                  ></v-btn>
                </div>
              </v-card>
            </v-dialog>
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
  <div
    class="drop-shadow"
    v-if="isShowCart || isShowFavorites"
    @click="dropSahdowFunction()"
  ></div>
  <!-- Login -->
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Category from "./Category.vue";
import English from "@/assets/united-kingdom.png";
import Khmer from "@/assets/cambodia.png";
import Dollar from "@/assets/dollar-symbol.png";
import Riel from "@/assets/riel.png";
import type { LanguageType } from "../types/appBarType";
import CustomeDividerWithText from "../shared/CustomeDividerWithText.vue";
import Facebook from "@/assets/facebook.png";
import Google from "@/assets/google.png";
import TikTok from "@/assets/tik-tok.png";
import FirstCart from "@/assets/feature-products/5.png";
import SecondCart from "@/assets/feature-products/7.png";

const dropSahdowFunction = () => {
  isShowCart.value = false;
  isShowFavorites.value = false;
};

const isShowPromotionBanner = ref(true);
const toggleShowPromotionBanner = () =>
  (isShowPromotionBanner.value = !isShowPromotionBanner.value);

const isShowListOfLanguages = ref(false);
const handleChangeShowListOfLanguages = () =>
  (isShowListOfLanguages.value = !isShowListOfLanguages.value);
const listOfLanguages: LanguageType[] = [
  {
    id: 0,
    title: "English",
    image: English,
  },
  {
    id: 1,
    title: "Khmer",
    image: Khmer,
  },
];
const currentLanguageShow = ref(0);

const handleChangeCurrentLanguageShow = (index: number) => {
  currentLanguageShow.value = index;
  handleChangeShowListOfLanguages();
};

const isShowCurrency = ref(false);
const toggleShowCurrency = () => (isShowCurrency.value = !isShowCurrency.value);
const listOfCurrency = [
  { id: 0, image: Dollar, title: "USD" },
  { id: 1, image: Riel, title: "Riel" },
];
const currentCurrencyShow = ref(0);
const handleChangeCurrencyIndexShow = (index: number) => {
  currentCurrencyShow.value = index;
  toggleShowCurrency();
};
const iconsList = [
  { id: 1, icon: "mdi mdi-twitter" },
  { id: 2, icon: "mdi mdi-facebook" },
  { id: 3, icon: "mdi mdi-youtube" },
  { id: 4, icon: "mdi mdi-instagram" },
];

const loading = ref(false);
const loaded = ref(false);
const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};

const visible = ref(false);

const socialMediaItems = [
  { id: 0, image: Facebook },
  { id: 1, image: Google },
  { id: 2, image: TikTok },
];

const isLoginDialog = ref(false);
const isSignUpDialog = ref(false);
const switchToLogin = () => {
  isSignUpDialog.value = false;
  isLoginDialog.value = true;
};

const showOldPassword = ref(false);
const showNewPassword = ref(false);

const isShowCart = ref(false);
const toggleShowCart = () => {
  isShowCart.value = !isShowCart.value;
  isShowFavorites.value = false;
};

const isShowFavorites = ref(false);
const toggleShowFavorites = () => {
  isShowFavorites.value = !isShowFavorites.value;
  isShowCart.value = false;
};
const cartItems = [
  {
    id: 0,
    image: FirstCart,
    price: 1200,
    description: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm",
    quantity: 2,
  },
  {
    id: 1,
    image: SecondCart,
    price: 1000,
    description: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
    quantity: 1,
  },
];

const calculateCartPrice = () => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
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

.coustom-card {
  position: absolute;
  z-index: 10;
  padding: 10px 20px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
  gap: 5px;
}

.custom-cart-item {
  position: absolute;
  z-index: 101;
  width: 400px;
  right: 0;
  top: 40px;
  padding: 15px 30px;
}

.drop-shadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
