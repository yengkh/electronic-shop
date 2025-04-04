<template>
  <v-img :src="activeImage"></v-img>
  <section
    style="position: relative; width: 100%; display: flex; align-items: center"
  >
    <v-slide-group
      class="ma-0 pa-0"
      selected-class="custom-selected"
      mandatory
      color="white"
    >
      <v-slide-group-item
        v-for="(item, index) in images"
        :key="item?.id"
        v-slot="{ selectedClass }"
      >
        <v-card
          :class="[
            'ma-4',
            selectedClass,
            'rounded-sm',
            activeShowImageIndex === index ? 'custom-selected' : '',
          ]"
          height="60"
          width="60"
          @click="handleChangeSjowImageIndex(index)"
        >
          <v-img :src="item?.image" style="width: 100%; height: 100%"></v-img>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </section>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";

import Image1 from "@/assets/detail-page-images/0.png";
import Image2 from "@/assets/detail-page-images/2.png";
import Image3 from "@/assets/detail-page-images/3.png";
import Image4 from "@/assets/detail-page-images/4.png";
import Image5 from "@/assets/detail-page-images/5.png";
import Image6 from "@/assets/detail-page-images/6.png";

const activeShowImageIndex = ref(0);
const handleChangeSjowImageIndex = (index: number) => {
  activeShowImageIndex.value = index;
};
const images = ref([
  {
    id: 0,
    image: Image1,
  },
  {
    id: 1,
    image: Image2,
  },
  {
    id: 2,
    image: Image3,
  },
  {
    id: 3,
    image: Image4,
  },
  {
    id: 4,
    image: Image5,
  },
  {
    id: 5,
    image: Image6,
  },
]);

const activeImage = computed(
  () => images.value[activeShowImageIndex.value].image
);
</script>
<style scoped>
.custom-selected {
  border: 2px solid #fa8232;
}
</style>
