<template>
  <section
    style="position: relative"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <v-card
      :style="cardHeightComput"
      elevation="0"
      class="border-thin rounded-0"
      style="padding: 4px"
    >
      <div class="top-path">
        <div v-if="isShowLabel && labelTileProps !== ''" class="label">
          <Label :title="labelTileProps" />
        </div>
        <v-img :src="image" style="width: 216px; height: 188px"></v-img>
      </div>

      <div style="padding: 5px 12px" v-if="isShowRateStar">
        <v-icon
          v-for="(_, index) in 5"
          :key="index"
          :color="
            index < Math.floor(starAverage || 0)
              ? 'primary500'
              : index < starAverage!
              ? 'primary500'
              : 'gray300'
          "
        >
          {{
            index + 1 <= starAverage!
              ? "mdi mdi-star"
              : index < starAverage!
              ? "mdi mdi-star-half-full"
              : "mdi mdi-star-outline"
          }}
        </v-icon>
        ({{ ratingNumber }})
      </div>

      <v-card-subtitle style="margin-top: 12px">
        <LineClamp :title="description" textColor="text-gray900" />
        <p style="margin-top: 10px">
          <span
            v-if="disCount"
            class="text-decoration-line-through text-gray400"
            style="font-size: 16px; font-weight: 600"
            >${{ disCount }}</span
          >
          <span
            class="text-secondary500"
            style="font-size: 16px; font-weight: 600; margin-left: 5px"
            >${{ price }}</span
          >
        </p>
      </v-card-subtitle>
    </v-card>

    <div
      v-if="showHoveritem"
      class="hover-path"
      :class="{ 'show-hover': isHoveritem }"
    ></div>
    <div
      v-if="showHoveritem"
      class="hover-items-path"
      :class="{ 'show-hover-item': isHoveritem }"
    >
      <IconButton icon="mdi mdi-heart" rounded bg="bg-gray00" hoverBg />
      <IconButton icon="mdi mdi-cart-outline" rounded bg="bg-gray00" hoverBg />
      <IconButton
        icon="mdi mdi-eye-outline"
        rounded
        bg="bg-gray00"
        hoverBg
        @click="goToDetailPage()"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import LineClamp from "./LineClamp.vue";
import Label from "./Label.vue";
import IconButton from "./IconButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToDetailPage = () => {
  router.push("/detail-page").then(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.scrollTo(0, 0);
  });
};

const props = defineProps<{
  image: string;
  description: string;
  cardHeight?: string;
  disCount?: string;
  price: string;
  labelTitle?: string;
  isShowLabel?: boolean;
  isShowRateStar?: boolean;
  ratingNumber?: string;
  starAverage?: number;
}>();
const cardHeightComput = computed(
  () => `height: ${props.cardHeight ?? "296px"};`
);
const labelTileProps = computed(() => props.labelTitle ?? "");
const isHoveritem = ref(false);
const showHoveritem = ref(false);

const handleMouseEnter = () => {
  isHoveritem.value = true;
  showHoveritem.value = true;
};

const handleMouseLeave = () => {
  isHoveritem.value = false;
  setTimeout(() => {
    if (!isHoveritem.value) showHoveritem.value = false;
  }, 300);
};
</script>
<style scoped>
.top-path {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
}

.hover-path {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 5;
  background-color: #adb7bc;
  opacity: 0.5;
}

.hover-path:hover {
  transition: opacity 0.5s ease-in-out;
}

.hover-items-path {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 10;
}

.hover-items-path:hover {
  transform: translateY(-10px);
  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
}
.hover-path,
.hover-items-path {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.show-hover {
  opacity: 0.5;
  transform: translateY(0);
}

.show-hover-item {
  opacity: 1;
  transform: translateY(0);
}
</style>
