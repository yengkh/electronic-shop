<template>
  <section
    style="
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <div
      :class="['first-div', shadowBackgroundColor]"
      v-if="isShowBgColor == 'true'"
    ></div>
    <div
      :class="[backgroundColor, titleColor, 'body-xl600', 'second-div']"
      v-if="title != ''"
    >
      {{ title }}
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{
  title?: string;
  bgColor?: string;
  titleColor?: string;
  isShowBgColor?: string;
  shadowColor?: string;
}>();

const backgroundColor = computed(() => props.bgColor ?? "bg-secondary500");
const shadowBackgroundColor = computed(() => props.shadowColor ?? "bg-gray00");
</script>
<style scoped>
.first-div {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: absolute;
  z-index: 9;
}
.second-div {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  position: absolute;
}

@media (min-width: 1024px) {
  .first-div {
    width: 98px;
    height: 98px;
  }
  .second-div {
    width: 88px;
    height: 88px;
  }
}
</style>
