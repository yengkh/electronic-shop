<template>
  <v-btn
    elevation="0"
    :icon="icon"
    :class="[
      roundedButton,
      bgColor,
      'text-gray900',
      { hoverBgHover: hoverBg, 'text-white': isWhiteColor },
    ]"
    @click="$emit('click')"
  >
  </v-btn>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{
  icon: string;
  rounded?: boolean;
  bg?: string;
  hoverBg?: boolean;
  isWhiteColor?: boolean;
}>();
const roundedButton = computed(() =>
  props.rounded ? "rounded-circle" : "rounded-sm"
);
const bgColor = computed(() => `bg-${props.bg ?? "gray100"}`);

defineEmits(["click"]);
</script>
<style scoped>
.hoverBgHover:hover {
  background-color: #fa8232 !important;
  color: #fff !important;
  transition: all 0.2s ease-in-out !important;
}

.text-white {
  color: #fff !important;
}
</style>
