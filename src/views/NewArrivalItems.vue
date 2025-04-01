<template>
  <section style="margin-top: 72px">
    <div class="d-flex align-center justify-space-between">
      <p class="text-heading03">New Arrivals</p>
      <CustomeButton
        title="Browse all products"
        text-color="secondary500"
        append-icon="mdi-arrow-right"
        bg=""
      />
    </div>
    <v-row align="center" style="margin-top: 24px; gap: 24px">
      <v-col
        style="padding: 44px"
        v-for="item in newArrivalItems"
        :class="[item?.cardColor, 'rounded-sm']"
      >
        <v-row style="display: flex; align-items: start; gap: 40px">
          <v-col style="display: flex; flex-direction: column; gap: 12px">
            <Label :title="item?.label" :is-hex-color="item?.labelBgColor" />
            <p :class="[item?.titleColor, 'text-heading01']">
              {{ item?.title }}
            </p>
            <p :class="['body-medium400', item?.detailColor]">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>
            <div style="margin-top: 10px">
              <CustomeButton title="SHOP NOW" append-icon="mdi-arrow-right" />
            </div>
          </v-col>
          <v-col style="position: relative">
            <div style="position: absolute; top: 30px; right: 50px">
              <CircleItem
                :title="item?.price"
                :is-show-bg-color="item?.isShowBgColor"
              />
            </div>
            <v-img :src="item?.image" width="240" height="240"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts" setup>
import Label from "../shared/Label.vue";
import CustomeButton from "../shared/CustomeButton.vue";
import CircleItem from "../shared/CircleItem.vue";
import Image0 from "@/assets/newArrivals/0.png";
import Image1 from "@/assets/newArrivals/1.png";

const newArrivalItems = [
  {
    id: 0,
    image: Image0,
    label: "INTRODUCING",
    title: "New Apple Homepod Mini",
    detail: "Jam-packed with innovation, HomePod mini delivers unexpectedly.",
    detailColor: "text-gray700",
    price: "",
    titleColor: "text-gray900",
    cardColor: "bg-gray50",
    labelBgColor: "",
    isShowBgColor: "false",
  },
  {
    id: 1,
    image: Image1,
    label: "INTRODUCING NEW",
    title: "Xiaomi Mi 11 Ultra12GB+256GB",
    detail: "*Data provided by internal laboratories. Industry measurment.",
    detailColor: "text-gray300",
    price: "$590",
    titleColor: "text-gray00",
    cardColor: "bg-gray900",
    labelBgColor: "bg-warning400",
    isShowBgColor: "false",
  },
];
</script>
<style scoped></style>
