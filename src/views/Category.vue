<template>
  <div style="padding: 16px 0 0" class="main">
    <section class="first-path">
      <div
        @mouseenter="showCategories = true"
        @mouseleave="showCategories = false"
      >
        <Button
          title="All Category"
          bg="bg-gray50"
          icon="mdi mdi-chevron-down"
          text-color="text-gray900"
          hover-bg="bg-primary500"
          hover-icon="mdi mdi-chevron-up"
          hover-text-color="text-gray00"
          padding=" 15px 24px"
        />
      </div>
      <div class="first-path">
        <p v-for="item in listItems" :key="item.id" class="button-48">
          <v-icon size="large">{{ item?.icon }}</v-icon>
          <span style="margin-left: 5px">{{ item?.title }}</span>
        </p>
      </div>
    </section>
    <section>
      <p>
        <v-icon>mdi mdi-phone-outgoing-outline</v-icon
        ><span style="margin-left: 5px">(+855) 012-345-67</span>
      </p>
    </section>
  </div>
  <section class="d-flex">
    <v-card
      v-show="showCategories"
      class="bg-gray00"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      style="width: 250px"
    >
      <p
        v-for="item in categoryItems"
        :key="item?.id"
        class="category-style"
        :class="item?.items ? 'big-text' : 'normal-text'"
        @mouseenter="
          getMoreItems(item?.items || []),
            getNestSubItems(
              item?.items?.[0]?.popular || [],
              0,
              item?.items?.[0]?.discountItem,
              item?.items?.[0]?.subTile
            )
        "
        @mouseleave="
          showCategories == false
            ? getMoreItems([])
            : getMoreItems(item?.items || [])
        "
      >
        <span>{{ item?.title }}</span>
        <v-icon v-if="item?.items">mdi mdi-chevron-right</v-icon>
      </p>
    </v-card>
    <v-card
      v-show="showCategories && moreListItems?.length > 0"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      class="sub-category"
    >
      <!-- List of sub items -->
      <div style="width: 150px">
        <p class="text-gray600" style="padding: 8px 15px">All</p>
        <p
          v-for="item in moreListItems"
          :key="item?.id"
          :class="{ 'bg-gray50 text-gray900': activeItemId === item?.id }"
          class="category-style"
          @mouseenter="
            getNestSubItems(
              item?.popular || [],
              null,
              item?.discountItem,
              subTitle
            )
          "
          @mouseleave="activeItemId = null"
        >
          {{ item.title }}
        </p>
      </div>
      <!-- nestSubItems -->
      <div style="margin-left: 24px">
        <p style="margin-bottom: 24px">{{ subTitle }}</p>
        <div
          v-for="item in nestSubItems"
          :key="item?.id"
          class="popular-items default-hover"
        >
          <v-img :src="item?.image" class="subTiltleImage"></v-img>
          <div style="margin-left: 8px">
            <p class="text-gray900" style="font-size: 14px">
              {{ item?.title }}
            </p>
            <p
              class="text-secondary500"
              style="font-size: 14px; font-weight: 600"
            >
              ${{ item?.price }}
            </p>
          </div>
        </div>
      </div>

      <!-- Discount -->
      <div
        class="discount-path bg-warning200 rounded d-flex align-center flex-column cursor-pointer"
        v-if="disCountItems"
      >
        <v-img
          :src="disCountItems?.image"
          style="width: 248px; height: 96px"
        ></v-img>
        <p style="font-size: 28px; font-weight: 600; margin: 10px 0">
          {{ disCountItems?.discountRate }}$ Discount
        </p>
        <v-line-clamp style="font-size: 16px" class="text-gray600 line-clamp-2">
          {{ disCountItems?.discription }}
        </v-line-clamp>
        <div class="d-flex align-center" style="margin-top: 5px">
          <p style="font-size: 14px" class="text-gray700">Starting price:</p>
          <p
            style="
              font-weight: 600;
              font-size: 16px;
              border-radius: 4px;
              padding: 6px 12px;
              margin-left: 5px;
            "
            class="bg-gray00"
          >
            ${{ disCountItems?.price }} USD
          </p>
        </div>
        <div style="margin-top: 24px">
          <Button
            title="SHOP NOW"
            icon="mdi mdi-arrow-right"
            text-color="text-gray00"
            bg="bg-primary500"
            width="248px"
            padding="15px"
          />
        </div>
      </div>
    </v-card>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Button from "../shared/Button.vue";
import image0 from "@/assets/images/0.png";
import image1 from "@/assets/images/1.png";
import image2 from "@/assets/images/2.png";
import image3 from "@/assets/images/3.png";
interface MoreListItem {
  id: number;
  title: string;
  popular?: NestSubItems[];
  discountItem?: DiscountItem;
  subTitle?: string;
}
interface DiscountItem {
  id: number;
  discountRate: string;
  discription: string;
  price: string;
  image: string;
}
interface NestSubItems {
  id: number;
  title: string;
  price: string;
  discountPrice: string;
  image: string;
  discountItem?: DiscountItem;
}

const showCategories = ref(false);
const listItems = [
  {
    id: 0,
    icon: "mdi mdi-map-marker-radius-outline",
    title: "Track Order",
  },
  {
    id: 1,
    icon: "mdi mdi-cached",
    title: "Compare",
  },
  {
    id: 2,
    icon: "mdi mdi-face-agent",
    title: "Customer Support",
  },
  {
    id: 3,
    icon: "mdi mdi-information-variant-circle-outline",
    title: "Need Help",
  },
];

const categoryItems = [
  { id: 0, title: "Computer & Laptop" },
  { id: 1, title: "Computer Accessories" },
  {
    id: 2,
    title: "Smart Phone",
    items: [
      {
        id: 0,
        title: "iPhone",
        popular: [
          {
            id: 0,
            title: "Samsung Electronics Samsung Galexy S21 5G",
            price: "160",
            discountPrice: "",
            image: image0,
          },
          {
            id: 1,
            title: "Samsung Electronics Samsung Galexy S21 5G",
            price: "160",
            discountPrice: "",
            image: image1,
          },
          {
            id: 2,
            title: "Samsung Electronics Samsung Galexy S21 5G",
            price: "160",
            discountPrice: "",
            image: image2,
          },
        ],
        discountItem: {
          id: 0,
          discountRate: "21",
          discription:
            "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
          price: "99",
          image: image3,
        },
        subTile: "FEATURED PHONES",
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
        popular: [
          {
            id: 0,
            title: "Samsung Electronics Samsung Galexy S21 5G",
            price: "160",
            discountPrice: "",
            image: image0,
          },
          {
            id: 1,
            title: "Samsung Electronics Samsung Galexy S21 5G",
            price: "160",
            discountPrice: "",
            image: image1,
          },
          {
            id: 2,
            title: "Samsung Electronics Samsung Galexy S21 5G",
            price: "160",
            discountPrice: "",
            image: image2,
          },
        ],
        discountItem: {
          id: 0,
          discountRate: "21",
          discription:
            "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
          price: "99",
          image: image3,
        },
        subTile: "Test",
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

const moreListItems = ref<MoreListItem[]>([]);
const activeItemId = ref<number | null>(null);

const getMoreItems = (items: MoreListItem[]) => {
  moreListItems.value = items;
};

const isHovering = ref(false);

const handleMouseEnter = () => {
  isHovering.value = true;
  showCategories.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
  setTimeout(() => {
    if (!isHovering.value) {
      showCategories.value = false;
      getMoreItems([]);
    }
  }, 200);
};

const nestSubItems = ref<NestSubItems[]>(moreListItems.value[2]?.popular || []);
const disCountItems = ref<DiscountItem | undefined>(
  moreListItems.value[2]?.discountItem
);
let subTitle = ref("");
const getNestSubItems = (
  items: NestSubItems[],
  id: number | null,
  discountItem?: DiscountItem,
  subtitle?: string
) => {
  nestSubItems.value = items;
  disCountItems.value = discountItem;
  activeItemId.value = id;
  subTitle.value = subtitle ?? "";
};
</script>
<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.first-path {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.button-48 {
  appearance: none;
  background-color: #ffffff;
  border-width: 0;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: Clarkson, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 14px 8px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-48:before {
  animation: opacityFallbackOut 0.5s step-end forwards;
  backface-visibility: hidden;
  background-color: #ebebeb;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
  border-radius: 4px;
}

.button-48:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.button-48:after {
  background-color: #ffffff;
}

.button-48 span {
  z-index: 1;
  position: relative;
}

.category-style,
.sub-category-style {
  padding: 8px 15px;
  transition: all ease-in-out 200ms;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #5f6c72;
  cursor: pointer;
}

.category-style:hover {
  background-color: #f2f4f5;
  color: #191c1f;
}

/* .category-wrapper {
  width: 250px;
  box-shadow: 1px 1px 2px 2px #e4e7e9;
  border-radius: 4px;
  border: 1px solid #e4e7e9;
} */

.big-text {
  font-size: 14px;
  font-weight: bold;
}

.normal-text {
  font-size: 14px;
  font-weight: normal;
}

.sub-category-item {
  padding: 10px 24px;
  border-radius: 4px;
  font-size: 14px;
  padding: 8px 15px;
}

.sub-category {
  display: flex;
  align-items: start;
  padding: 20px;
}

.subTiltleImage {
  width: 80px;
  height: 80px;
  border-radius: 4px;
}

.popular-items {
  display: flex;
  align-items: start;
  gap: 8px;
  padding: 12px;
  border: 1px solid #e4e7e9;
  border-radius: 4px;
  margin-bottom: 8px;
  width: 300px;
  cursor: pointer;
}

.discount-path {
  margin-left: 24px;
  padding: 32px;
  width: 320px;
}
</style>
