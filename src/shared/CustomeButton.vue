<template>
  <v-btn
    elevation="0"
    :class="['rounded-sm', bgClass, setTExtColor]"
    :prepend-icon="prependIcon ? prependIcon : undefined"
    :append-icon="appendIcon ? appendIcon : undefined"
    size="large"
    @click="$emit('click')"
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
  textColor?: string;
}>();

const bgClass = computed(() => `bg-${props.bg ?? "primary500"}`);
const setTExtColor = computed(() => `text-${props.textColor ?? "white"}`);
defineEmits(["click"]);
</script>
<style scoped></style>
