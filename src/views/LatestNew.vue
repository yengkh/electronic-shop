<template>
  <section class="bg-gray50" style="margin-top: 72px; padding-bottom: 72px">
    <p
      class="text-heading01 text-center"
      style="padding-top: 72px; padding-bottom: 40px"
    >
      Latest News
    </p>
    <v-container fluid style="width: 80%; margin: 0 auto">
      <v-row no-gutters class="d-flex ga-4">
        <v-col v-for="item in items" :key="item?.id" style="">
          <v-card
            class="pa-8"
            style="display: flex; flex-direction: column; align-items: start"
          >
            <v-img :src="item?.image" style="width: 100%" height="300"></v-img>
            <section>
              <div class="my-6 d-flex align-center ga-6">
                <p>
                  <v-icon color="primary500"
                    >mdi mdi-account-circle-outline</v-icon
                  >
                  <span class="body-small400 text-gray700 ml-1">{{
                    item?.author
                  }}</span>
                </p>
                <p>
                  <v-icon color="primary500"
                    >mdi mdi-calendar-blank-outline</v-icon
                  >
                  <span class="body-small400 text-gray700 ml-1">{{
                    item?.publishDate
                  }}</span>
                </p>
                <p>
                  <v-icon color="primary500"
                    >mdi mdi-comment-processing-outline</v-icon
                  >
                  <span class="body-small400 text-gray700 ml-1">{{
                    item?.comments
                  }}</span>
                </p>
              </div>
              <div class="d-flex flex-column ga-4">
                <p class="line-clamp-2 body-large400 text-gray900">
                  {{ item?.title }}
                </p>
                <p class="line-clamp-3 text-gray700">
                  {{ item?.subTitle }}
                </p>

                <v-btn
                  elevation="0"
                  append-icon="mdi-arrow-right"
                  class=""
                  size="large"
                  color="primary500"
                  variant="outlined"
                  >READ MORE</v-btn
                >
              </div>
            </section>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script lang="ts" setup>
import Image0 from "@/assets/latestnews/0.png";
import Image1 from "@/assets/latestnews/1.png";
import Image2 from "@/assets/latestnews/2.png";
const items = [
  {
    id: 0,
    image: Image0,
    author: "Kristin",
    publishDate: "19Dec, 2013",
    comments: "453",
    title:
      "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
    subTitle:
      "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
  },
  {
    id: 1,
    image: Image1,
    author: "Robert",
    publishDate: "28 Nov, 2015",
    comments: "738",
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    subTitle:
      "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem lrmn ka abs. ",
  },
  {
    id: 2,
    image: Image2,
    author: "Arlene",
    publishDate: "9 May, 2014",
    comments: "826",
    title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    subTitle:
      "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
  },
];
</script>
<style scoped></style>
