<template>
  <section style="margin-top: 40px">
    <v-card elevation="0" class="bg-primary200 main">
      <v-row>
        <v-col
          class="d-flex ga-4 flex-column align-start justify-center"
          cols="12"
          sm="6"
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
        <v-col style="position: relative" cols="12" sm="6">
          <div class="d-none">
            <CircleItem
              title="$1999"
              bg-color="bg-primary200"
              is-show-bg-color="true"
              shadow-color="bg-gray00"
            />
          </div>
          <v-img :src="Image"></v-img>
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
<style scoped>
.main {
  padding: 10px;
}

@media (min-width: 600px) {
  .main {
    padding: 20px;
  }
}
@media (min-width: 1024px) {
  .main {
    padding: 0px 50px;
  }
}
</style>
