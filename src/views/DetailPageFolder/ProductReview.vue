<template>
  <v-row class="mt-4">
    <v-col>
      <p class="body-xl400">Product Detail</p>
      <p class="text-gray700 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat
        rerum eligendi officia voluptate obcaecati temporibus perspiciatis nisi
        quia, fugit quis quos nam molestiae nemo, ea magni fugiat animi quisquam
        sunt veniam amet. Libero, consectetur. Exercitationem iste voluptatem
        debitis sequi officiis amet nostrum accusantium pariatur quidem quam
        assumenda, cumque cupiditate non qui deserunt necessitatibus. Quas
        deserunt id eligendi atque. Saepe accusamus ad quia, cumque maiores
        debitis ratione. Obcaecati assumenda cum nulla tempore ab at amet culpa
        vero, vel id modi, provident impedit dolorum omnis! Voluptates odit
        possimus, at saepe iure fuga eligendi animi optio quaerat temporibus
        velit non enim, nisi, vel repellendus perferendis obcaecati magni
        explicabo error vero dolore tempora aut ipsum beatae? Sint praesentium,
        tempora, perferendis itaque saepe soluta incidunt consectetur atque sit,
        modi debitis odit quia repudiandae sed. Mollitia molestias fugit eaque
        sapiente qui deserunt necessitatibus nisi ut. Nam exercitationem
        possimus dolor sunt officia harum impedit eum consequatur. Natus harum,
        autem dicta possimus atque ipsam ratione dolor magni, officia et
        consequatur labore nobis, accusantium est laboriosam quia amet earum
        dignissimos temporibus illum beatae omnis? Voluptas iure ab sint, ut
        deserunt, illum consequuntur at alias a unde rerum odit aliquam fugiat
        architecto sequi nihil minima et omnis pariatur enim? Inventore maxime
        suscipit aliquid quasi eos debitis ullam expedita alias corrupti tenetur
        dolore sint voluptatem eum modi quos velit, tempora omnis, explicabo
        beatae. Minus ratione possimus numquam et sequi excepturi perspiciatis
        tenetur! Qui architecto velit quae culpa quaerat porro iure
        exercitationem similique aliquid? Eaque esse dolore debitis corporis
        quam est!
      </p>
    </v-col>
    <v-col>
      <div class="d-flex justify-space-between align-center w-100 mb-2">
        <p class="body-xl400">Product Reviews (12)</p>
        <v-btn variant="text" append-icon="mdi-arrow-right" color="secondary500"
          >See more</v-btn
        >
      </div>
      <v-row>
        <v-col cols="6" class="pa-2" v-for="(item, i) in reviewItems" :key="i">
          <v-card
            class="bg-gray50 rounded-lg pa-4 d-flex align-start default-hover"
            elevation="0"
          >
            <v-avatar size="80">
              <v-img :src="item?.image" cover></v-img>
            </v-avatar>
            <section class="d-flex flex-column ml-4">
              <div class="d-flex align-center text-gray600 text-sm">
                <v-icon
                  icon="mdi mdi-star"
                  color="primary500"
                  size="20"
                ></v-icon>
                <span class="ml-1 font-weight-bold text-gray900">
                  {{ item?.rating }}
                </span>
                <span class="ml-4 text-gray500">{{ item?.date }}</span>
              </div>
              <p class="text-gray900 font-weight-bold mt-1">
                {{ item?.name }}
              </p>
              <p class="text-gray700 text-body-2 mt-1 line-clamp-3">
                {{ item?.message }} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iste explicabo fugit voluptas saepe ratione
                pariatur quo amet unde porro earum.
              </p>
            </section>
          </v-card>
        </v-col>
      </v-row>

      <div class="d-flex align-end justify-end my-2">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              variant="text"
              append-icon="mdi mdi-message-processing-outline"
              color="primary500"
              >Write a comment</v-btn
            >
          </template>
          <template v-slot:default="{ isActive }">
            <v-card class="rounded-lg pa-6" elevation="3">
              <v-card-title class="text-h6 font-weight-bold text-gray900">
                Share Your Experience
              </v-card-title>
              <v-divider class="my-2"></v-divider>
              <section class="px-2">
                <div class="d-flex align-center mb-4">
                  <span class="text-body-2 font-weight-medium text-gray700">
                    Rate this product:
                  </span>
                  <v-rating
                    v-model="userRating"
                    half-increments
                    hover
                    :length="5"
                    :size="28"
                    active-color="primary500"
                    class="ml-2"
                  />
                </div>
                <v-textarea
                  v-model="userReview"
                  label="Write your review..."
                  class="rounded-md"
                  variant="outlined"
                  rows="3"
                  auto-grow
                  hide-details
                ></v-textarea>
              </section>
              <v-divider class="my-2"></v-divider>

              <v-card-actions class="d-flex justify-end">
                <v-btn
                  class="rounded-md px-5 text-white"
                  :disabled="!userReview"
                  color="primary500"
                  append-icon="mdi mdi-send"
                  @click="submitReview(), (isActive.value = false)"
                >
                  Submit
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Image from "@/assets/9440461.jpg";
const reviewItems = [
  {
    id: 0,
    name: "John Doe",
    date: "12-03-2024",
    rating: 4.5,
    image: Image,
    message: "This is good products.",
  },
  {
    id: 1,
    name: "Jane Smith",
    date: "12-03-2024",
    rating: 4.0,
    image: Image,
    message: "I like this product.",
  },
  {
    id: 2,
    name: "Alice Johnson",
    date: "12-03-2024",
    rating: 5.0,
    image: Image,
    message: "Excellent quality!",
  },
  {
    id: 3,
    name: "Bob Brown",
    date: "12-03-2024",
    rating: 3.5,
    image: Image,
    message: "Good value for money.",
  },
];

const userRating = ref(0);
const userReview = ref("");

const submitReview = () => {
  userReview.value = "";
  userRating.value = 0;
};
</script>
<style scoped></style>
