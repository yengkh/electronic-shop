<template>
  <section style="margin-top: 74px">
    <v-card elevation="0" class="bg-primary200" style="padding: 80px">
      <v-row>
        <v-col
          style="display: flex; flex-direction: column; gap: 32px; width: 30%"
        >
          <Label title="Save up to $200.00" isHexColor="bg-secondary500" />
          <p class="text-display03 text-gray9000">Macbook Pro</p>
          <p class="body-xxl400 text-gray900">
            Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
          </p>
          <v-card-action>
            <CustomeButton title="SHOP NOW" append-icon="mdi-arrow-right" />
          </v-card-action>
        </v-col>
        <v-col style="position: relative">
          <div style="position: absolute; right: 200px; top: 70px">
            <CircleItem
              title="$1999"
              bg-color="bg-primary200"
              is-show-bg-color="true"
              shadow-color="bg-gray00"
            />
          </div>
          <v-img :src="Image" width="536" height="424"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>
<script lang="ts" setup>
import Label from "../shared/Label.vue";
import CustomeButton from "../shared/CustomeButton.vue";
import Image from "@/assets/mac.png";
import CircleItem from "../shared/CircleItem.vue";
</script>
<style scoped></style>
