<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Card from "./restaurants/Card.vue";
import restaurant_data from "../restaurant_data.js";
</script>

<template>
  <primary-template>
    <h1>Welcome to my site!</h1>

<!--    <div class="cards">-->
<!--      <Card restaurant-name="Sanjusan" location="North Loop" photo="IMG_0276"/>-->
<!--      <Card restaurant-name="Bacio" location="North Loop" photo="IMG_0276"/>-->
<!--    </div>-->

    <div v-for="(restaurant, index) in restaurant_data.data" :key="index">
<!--      <card :data = "restaurant_data"/>-->
<!--      <card :restaurant.restaurant_name/>-->
      Restaurant: {{restaurant.restaurant_name}}
      Location: {{restaurant.location}}
    </div>
  </primary-template>
</template>

<style scoped>
div.cards {
  display: flex;
}
</style>