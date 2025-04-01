<template>
  <section class="mt-4">
    <p class="body-xl400">Recommend products</p>
    <v-row class="mt-6">
      <v-col v-for="item in recommendProductsList" :key="item?.id" cols="3">
        <CustomeCard
          :image="item?.image"
          :description="item?.description"
          :price="item?.price.toString()"
          :dis-count="item?.discount.toString()"
          :label-title="item?.label"
          isShowLabel
        />
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts" setup>
import Image0 from "@/assets/feature-products/0.jpg";
import Image1 from "@/assets/feature-products/1.png";
import Image2 from "@/assets/feature-products/2.png";
import Image3 from "@/assets/feature-products/3.png";
import Image4 from "@/assets/feature-products/4.png";
import Image5 from "@/assets/feature-products/5.png";
import Image6 from "@/assets/feature-products/6.png";
import Image7 from "@/assets/feature-products/7.png";
import Image8 from "@/assets/images/0.png";
import Image9 from "@/assets/feature-products/1.png";
import Image10 from "@/assets/feature-products/2.png";
import Image11 from "@/assets/feature-products/3.png";
import Image12 from "@/assets/feature-products/4.png";
import Image13 from "@/assets/feature-products/5.png";
import Image14 from "@/assets/feature-products/6.png";
import Image15 from "@/assets/showCategory/1.png";
import Image16 from "@/assets/showCategory/2.png";
import Image17 from "@/assets/showCategory/3.png";
import Image18 from "@/assets/showCategory/4.png";
import Image19 from "@/assets/showCategory/5.png";
import Image20 from "@/assets/showCategory/6.png";
import CustomeCard from "../../shared/CustomeCard.vue";

const recommendProductsList = [
  {
    id: 0,
    label: "12% OFF",
    image: Image0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 1200,
    discount: 1200 - (1200 * 12) / 100,
  },
  {
    id: 1,
    label: "",
    image: Image1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 500,
    discount: "459",
  },
  {
    id: 2,
    label: "",
    image: Image2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 230,
    discount: "",
  },
  {
    id: 3,
    label: "",
    image: Image3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 340,
    discount: "",
  },
  {
    id: 4,
    label: "SOLD OUT",
    image: Image4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 350,
    discount: "300",
  },
  {
    id: 5,
    label: "",
    image: Image5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 1200,
    discount: "",
  },
  {
    id: 6,
    label: "",
    image: Image6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 480,
    discount: "",
  },
  {
    id: 7,
    label: "",
    image: Image7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 299,
    discount: "",
  },
  {
    id: 8,
    label: "",
    image: Image8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 650,
    discount: "",
  },
  {
    id: 9,
    label: "",
    image: Image9,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 999,
    discount: "950",
  },
  {
    id: 10,
    label: "30% OFF",
    image: Image10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 2000,
    discount: 2000 - (2000 * 30) / 100,
  },
  {
    id: 11,
    label: "",
    image: Image11,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 259,
    discount: "",
  },
  {
    id: 12,
    label: "",
    image: Image12,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 890,
    discount: "",
  },
  {
    id: 13,
    label: "HOT",
    image: Image13,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 250,
    discount: "",
  },
  {
    id: 14,
    label: "BEST DEALS",
    image: Image14,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 679,
    discount: "",
  },
  {
    id: 15,
    label: "SALE",
    image: Image15,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 289,
    discount: "",
  },
  {
    id: 16,
    label: "20% OFF",
    image: Image16,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 250,
    discount: 250 - (250 * 30) / 100,
  },
  {
    id: 17,
    label: "",
    image: Image17,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 350,
    discount: "",
  },
  {
    id: 18,
    label: "HOT",
    image: Image18,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 699,
    discount: "",
  },
  {
    id: 19,
    label: "",
    image: Image19,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 850,
    discount: "",
  },
  {
    id: 20,
    label: "HOT",
    image: Image20,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita! Odit laborum itaque vitae quas, quaerat ad ut ullam ex labore repellat! Ut, rem ipsa?",
    price: 1599,
    discount: "",
  },
];
</script>
<style scoped></style>
