<template>
  <div
    :class="[
      isHovered ? hoverBg : bg,
      isHovered ? hoverTextColor : textColor,
      'custom-button',
    ]"
    :style="{ backgroundColor: isHovered ? hoverBg : bg, padding, width }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <v-icon v-if="preIcon">{{ preIcon }}</v-icon>
    <span>{{ title }}</span>
    <v-icon>{{ isHovered ? hoverIcon : icon }}</v-icon>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
defineProps<{
  title: string;
  bg?: string;
  hoverBg?: string;
  icon?: string;
  textColor?: string;
  hoverIcon?: string;
  hoverTextColor?: string;
  preIcon?: string;
  padding?: string;
  width?: string;
}>();

const isHovered = ref(false);
</script>
<style scoped>
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  border-radius: 4px;
  transition: all ease 20ms;
}

.custom-button:active {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
