<template>
  <section style="margin-top: 20px">
    <div class="d-flex align-center justify-space-between">
      <p style="font-size: 22px; font-weight: bold">New Arrivals</p>
      <CustomeButton
        title="All products"
        text-color="secondary500"
        append-icon="mdi-arrow-right"
        bg=""
      />
    </div>
    <v-row align="center" style="margin-top: 10px">
      <v-col
        v-for="item in newArrivalItems"
        :class="[item?.cardColor, 'rounded-sm', 'main']"
        cols="12"
        lg="6"
      >
        <v-row style="display: flex; align-items: start; gap: 10px">
          <v-col
            style="display: flex; flex-direction: column; gap: 12px"
            cols="6"
          >
            <Label :title="item?.label" :is-hex-color="item?.labelBgColor" />
            <p :class="[item?.titleColor, 'title']">
              {{ item?.title }}
            </p>
            <p
              :class="['body-medium400', item?.detailColor]"
              class="d-none d-sm-block"
            >
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>
            <div style="margin-top: 10px">
              <CustomeButton title="SHOP NOW" append-icon="mdi-arrow-right" />
            </div>
          </v-col>
          <v-col style="position: relative" cols="5">
            <div style="position: absolute; top: 30px; right: 50px">
              <CircleItem
                :title="item?.price"
                :is-show-bg-color="item?.isShowBgColor"
              />
            </div>
            <v-img :src="item?.image" class="image"></v-img>
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
<style scoped>
.main {
  padding: 20px;
}
.title {
  font-size: 20px;
  line-height: 40px;
  font-weight: 600;
}
.image {
  width: 200px;
  height: 200px;
}

@media (min-width: 600px) {
  .main {
    padding: 30px;
  }
}
@media (min-width: 1024px) {
  .title {
    font-size: 32px;
  }
  .main {
    padding: 44px;
  }
  .image {
    width: 250px;
    height: 250px;
  }
}
</style>
