<template>
  <div
    :class="[computedBg, textColor]"
    class="custome-label"
    :style="{ fontSize }"
  >
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  title: string;
  textColor?: string;
  fontSize?: string;
  isHexColor?: string;
}>();

const bgColorMap: Record<string, string> = {
  HOT: "bg-danger500",
  "SOLD OUT": "bg-gray400",
  SALE: "bg-success500",
  "BEST DEALS": "bg-secondary500",
  EXCLUSIVE: "bg-yellow-500",
};

// const isHexColor = (color: string) => /^#([0-9A-Fa-f]{3}){1,2}$/.test(color);

const computedBg = computed(() => {
  if (props.title.includes("%")) {
    return "bg-warning300";
  }

  if (bgColorMap[props.title]) {
    return bgColorMap[props.title];
  }

  if (props.isHexColor != "") {
    return props.isHexColor;
  }

  return "bg-secondary500";
});
</script>

<style scoped>
.custome-label {
  padding: 2px 8px;
  border-radius: 2px;
  width: fit-content;
  text-transform: uppercase;
}
</style>
