<template>
  <p :class="['clamp-text', 'text-gray900']" :style="{ fontSize }">
    {{ title }}
  </p>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{
  title: string;
  fontSize?: string;
  textColor?: string;
}>();

const fontSize = computed(() =>
  props.fontSize ? props.fontSize : "fontSize: 12px"
);
</script>
<style scoped>
.clamp-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-clamp: 2;
}
</style>
