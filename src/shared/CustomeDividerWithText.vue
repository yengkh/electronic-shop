<template>
  <div style="width: 100%">
    <p class="custome-divider" :style="{ margin: marginData }">
      <span class="line"></span>
      <span class="text">{{ title }}</span>
      <span class="line"></span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{ title: string; margin?: string }>();
const marginData = computed(() => (props.margin ? `${props.margin}` : ""));
</script>
<style scoped>
.custome-divider {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.custome-divider .line {
  flex-grow: 1;
  height: 2px;
  background-color: #e4e7e9;
}

.custome-divider .text {
  color: #191c1f;
  font-weight: bold;
  font-size: 14px;
}
</style>
