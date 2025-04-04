<template>
  <section class="main">
    <div class="first-item">
      <section>
        <p class="text-secondary600 flex items-center gap-2 d-none d-sm-flex">
          <v-icon>mdi mdi-minus</v-icon>
          <span style="font-size: 14px; font-weight: 600; line-height: 20px"
            >THE BEST PLACE TO PLAY</span
          >
        </p>
        <p class="first-item-title">Xbox Consoles</p>
        <p class="text-gray700 first-item-description">
          Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for
          $2 USD.
        </p>

        <div style="margin-top: 24px">
          <CustomeButton title="SHOP NOW" append-icon="mdi-arrow-right" />
        </div>

        <div style="margin-top: 20px; display: flex; gap: 5px">
          <div class="pagination bg-gray800"></div>
          <div class="pagination bg-gray300"></div>
          <div class="pagination bg-gray300"></div>
        </div>
      </section>
      <section style="position: relative">
        <div class="first-item-price">
          <CircleItem title="$299" is-show-bg-color="true" />
        </div>
        <v-img :src="Image1" class="first-image"></v-img>
      </section>
    </div>
    <div class="main-second-path">
      <section class="second-path bg-gray900" style="display: flex">
        <div class="second-path-image1">
          <p class="text-warning500" style="font-size: 14px; font-weight: 500">
            SUMMER SALES
          </p>
          <p
            style="font-size: 24px; font-weight: 600; line-height: 32px"
            class="text-gray00"
          >
            New Google Pixel 6 Pro
          </p>
          <CustomeButton title="SHOP NOW" append-icon="mdi-arrow-right" />
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
          <v-img :src="Image5" class="first-img"></v-img>
        </div>
      </section>
      <section class="bg-gray50 second-path-div">
        <v-img :src="Image6" class="first-img"></v-img>
        <div style="display: flex; flex-direction: column; gap: 15px">
          <p style="font-size: 24px; font-weight: 600">Xiaomi FlipBuds Pro</p>
          <p
            class="text-secondary500"
            style="font-size: 18px; font-weight: 600"
          >
            $299 USD
          </p>
          <CustomeButton title="SHOP NOW" append-icon="mdi-arrow-right" />
        </div>
      </section>
    </div>
  </section>

  <v-row class="second-hero">
    <v-col cols="6" md="3" class="second-hero-item">
      <div class="d-flex ga-4">
        <v-img :src="BoxImage" width="30" height="30" />
        <section>
          <p style="font-size: 14px; font-weight: 600" class="text-gray900">
            Fasted Delivery
          </p>
          <p style="font-size: 14px" class="text-gray600">Delivery in 24/H</p>
        </section>
      </div>
      <v-divider vertical style="padding: 0 26px" class="d-none d-md-block" />
    </v-col>

    <v-col cols="6" md="3" class="second-hero-item">
      <div class="d-flex ga-4">
        <v-img :src="TrophyImage" width="30" height="30" />
        <section>
          <p>Fasted Delivery</p>
          <p style="font-size: 14px" class="text-gray600">Delivery in 24/H</p>
        </section>
      </div>
      <v-divider vertical style="padding: 0 26px" class="d-none d-md-block" />
    </v-col>

    <v-col cols="6" md="3" class="second-hero-item">
      <div class="d-flex ga-4">
        <v-img :src="CreditCardImage" width="30" height="30" />
        <section>
          <p>Fasted Delivery</p>
          <p style="font-size: 14px" class="text-gray600">Delivery in 24/H</p>
        </section>
      </div>
      <v-divider vertical style="padding: 0 26px" class="d-none d-md-block" />
    </v-col>

    <v-col cols="6" md="3" class="second-hero-item">
      <div class="d-flex ga-4">
        <v-img :src="HeadphonesImage" width="30" height="30" />
        <section>
          <p>Fasted Delivery</p>
          <p style="font-size: 14px" class="text-gray600">Delivery in 24/H</p>
        </section>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import CircleItem from "../shared/CircleItem.vue";
import Image1 from "@/assets/images/4.png";
import Image5 from "@/assets/images/5.png";
import Image6 from "@/assets/images/6.png";
import BoxImage from "@/assets/icons/Vector.png";
import TrophyImage from "@/assets/icons/Trophy.png";
import CreditCardImage from "@/assets/icons/CreditCard.png";
import HeadphonesImage from "@/assets/icons/Headphones.png";
import CustomeButton from "../shared/CustomeButton.vue";
</script>
<style scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 520px;
  flex-direction: column;
  gap: 10px;
}

.main-second-path {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
}
.first-item {
  background-color: #f2f4f5;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.first-item-title {
  font-size: 24px;
  font-weight: 600;
}

.first-item-description {
  font-size: 16px;
}

.first-image {
  width: 170px;
  /* height: 408px; */
}

/* .first-item-price {
  width: 50px;
  height: 50px;
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
} */

.pagination {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
}

.second-path {
  border-radius: 4px;
}

.second-hero {
  padding: 6px 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  display: flex;
  border: 1px solid #e4e7e9;
  margin-top: 200px;
}

.second-path-image1 {
  padding-left: 10px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.second-hero-item {
  display: flex;
  padding: 16px;
  /* gap: 16px; */
}

.first-img {
  width: 150px;
  height: 150px;
  margin-top: 10px;
}

.second-path-div {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 24px;
}

@media (min-width: 600px) {
  .first-image {
    width: 320px;
    height: 408px;
  }

  .first-item-title {
    font-size: 48px;
    font-weight: 600;
  }
  .first-item-description {
    font-size: 18px;
  }
  .main-second-path {
    flex-direction: row;
  }
  .first-item {
    padding: 30px;
  }
}

@media (min-width: 1024px) {
  .main {
    flex-direction: row;
  }
  .first-item {
    width: 1000px;
  }
  .main-second-path {
    flex-direction: column;
  }
  .second-path-image1 {
    padding-left: 50px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .second-path {
    border-radius: 4px;
    width: 500px;
    height: 248px;
    overflow: hidden;
  }
  .second-path-div {
    padding: 50px;
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .second-hero {
    margin-top: 24px;
    display: flex;
  }
  .first-item {
    padding: 40px;
  }
}
</style>
