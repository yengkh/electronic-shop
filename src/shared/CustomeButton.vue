<template>
  <v-btn
    elevation="0"
    :class="['rounded-sm', bgClass]"
    :prepend-icon="prependIcon ? prependIcon : undefined"
    :append-icon="appendIcon ? appendIcon : undefined"
    size="large"
    >{{ title }}</v-btn
  >
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{
  title: string;
  prependIcon?: string;
  appendIcon?: string;
  bg?: string;
}>();

const bgClass = computed(() => `bg-${props.bg ?? "primary500"}`);
</script>
<style scoped></style>
