<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Card from "./restaurants/Card.vue";
import restaurant_data from "../restaurant_data.js";
</script>

<template>
  <primary-template>
    <h1>Welcome to my site!</h1>

    <section class = "cards">
      <Card v-for="(restaurant, index) in restaurant_data.data" :key="index" :restaurant-info="restaurant" />
    </section>
  </primary-template>
</template>

<style scoped>
  html{
    align-content: center;
  }
  section.cards{
    display: flex;

    flex-wrap: wrap;
  }
</style>