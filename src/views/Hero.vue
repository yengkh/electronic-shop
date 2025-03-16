<template>
  <section
    style="
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 520px;
    "
  >
    <!-- Firt Item -->
    <div class="first-item">
      <section>
        <p class="text-secondary600 flex items-center gap-2">
          <v-icon>mdi mdi-minus</v-icon>
          <span style="font-size: 14px; font-weight: 600; line-height: 20px"
            >THE BEST PLACE TO PLAY</span
          >
        </p>
        <p style="font-size: 48px; font-weight: 600">Xbox Consoles</p>
        <p style="font-size: 18px" class="text-gray700">
          Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for
          $2 USD.
        </p>

        <div style="margin-top: 24px">
          <Button
            title="SHOP NOW"
            icon="mdi mdi-arrow-right"
            bg="bg-primary500"
            hover-icon="mdi mdi-arrow-right"
            padding="15px 24px"
            text-color="bg-gray00"
            hover-bg="bg-primary500"
          />
        </div>

        <div style="margin-top: 100px; display: flex; gap: 5px">
          <div class="pagination bg-gray800"></div>
          <div class="pagination bg-gray300"></div>
          <div class="pagination bg-gray300"></div>
        </div>
      </section>
      <section style="position: relative">
        <div class="first-item-price">$299</div>
        <v-img :src="Image1" class="first-image"></v-img>
      </section>
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
      "
    >
      <section class="second-path bg-gray900" style="display: flex">
        <div
          style="
            padding-left: 50px;
            padding-top: 50px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          "
        >
          <p class="text-warning500" style="font-size: 14px; font-weight: 500">
            SUMMER SALES
          </p>
          <p
            style="font-size: 24px; font-weight: 600; line-height: 32px"
            class="text-gray00"
          >
            New Google Pixel 6 Pro
          </p>
          <Button
            title="SHOP NOW"
            icon="mdi-arrow-right"
            hover-icon="mdi-arrow-right"
            padding="10px"
            text-color="bg-gray00"
            hover-bg="bg-primary500"
            bg="bg-primary500"
            width="156px"
            height="48px"
          />
        </div>
        <div
          style="
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 30px;
          "
        >
          <p
            class="bg-warning400 text-gray900"
            style="
              padding: 6px 10px;
              width: fit-content;
              border-radius: 4px;
              position: absolute;
              z-index: 10;
              margin-left: 24px;
              font-weight: 600;
            "
          >
            29% OFF
          </p>
          <v-img
            :src="Image5"
            style="width: 312px; height: 312px; margin-top: 10px"
          ></v-img>
        </div>
      </section>
      <section
        class="second-path bg-gray50"
        style="padding: 50px; display: flex; align-items: center; gap: 24px"
      >
        <div>
          <v-img :src="Image6" width="160" height="160"></v-img>
        </div>
        <div style="display: flex; flex-direction: column; gap: 15px">
          <p style="font-size: 24px; font-weight: 600">Xiaomi FlipBuds Pro</p>
          <p
            class="text-secondary500"
            style="font-size: 18px; font-weight: 600"
          >
            $299 USD
          </p>
          <Button
            title="SHOP NOW"
            icon="mdi-arrow-right"
            hover-icon="mdi-arrow-right"
            padding="10px"
            text-color="bg-gray00"
            hover-bg="bg-primary500"
            bg="bg-primary500"
            width="156px"
            height="48px"
          />
        </div>
      </section>
    </div>
  </section>

  <section class="second-hero">
    <div class="second-hero-item">
      <v-img :src="BoxImage" width="40" height="40"></v-img>
      <section>
        <p style="font-size: 14px; font-weight: 600" class="text-gray900">
          Fasted Delivery
        </p>
        <p style="font-size: 14px" class="text-gray600">Delivery in 24/H</p>
      </section>
    </div>

    <v-divider vertical style="padding: 0 26px"></v-divider>
    <div class="second-hero-item">
      <v-img :src="TrophyImage" width="40" height="40"></v-img>
      <section>
        <p>Fasted Delivery</p>
        <p>Delivery in 24/H</p>
      </section>
    </div>
    <v-divider vertical style="padding: 0 26px"></v-divider>
    <div class="second-hero-item">
      <v-img :src="CreditCardImage" width="40" height="40"></v-img>
      <section>
        <p>Fasted Delivery</p>
        <p>Delivery in 24/H</p>
      </section>
    </div>
    <v-divider vertical style="padding: 0 26px"></v-divider>
    <div class="second-hero-item">
      <v-img :src="HeadphonesImage" width="40" height="40"></v-img>
      <section>
        <p>Fasted Delivery</p>
        <p>Delivery in 24/H</p>
      </section>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Button from "../shared/Button.vue";
import Image1 from "@/assets/images/4.png";
import Image5 from "@/assets/images/5.png";
import Image6 from "@/assets/images/6.png";
import BoxImage from "@/assets/icons/Vector.png";
import TrophyImage from "@/assets/icons/Trophy.png";
import CreditCardImage from "@/assets/icons/CreditCard.png";
import HeadphonesImage from "@/assets/icons/Headphones.png";
</script>
<style scoped>
.first-item {
  background-color: #f2f4f5;
  padding: 40px;
  border-radius: 4px;
  width: 872px;
  height: 100%;
  display: flex;
  align-items: center;
}

.first-image {
  width: 368px;
  height: 408px;
}

.first-item-price {
  width: 57px;
  height: 57px;
  background-color: #2da5f3;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 22px;
  font-weight: 600;
  padding: 40px;
  line-height: 100;
}

.pagination {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.second-path {
  border-radius: 4px;
  width: 500px;
  height: 248px;
  overflow: hidden;
}

.second-hero {
  width: 100%;
  padding: 16px;
  margin-top: 24px;
  border: 1px solid #e4e7e9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 72px;
}

.second-hero-item {
  display: flex;
  padding: 16px;
  gap: 16px;
}
</style>
