<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Card from "./restaurants/Card.vue";
import restaurant_data from "../restaurant_data.js";
</script>

<template>
  <primary-template mode="dark">
    <template #section-summary>
      <h1>Welcome to my site!</h1>
    </template>

    <template #content>
      <section class="cards">
        <!--      <Card :restaurants="studentData.data"/>-->
        <Card v-for="(restaurant, index) in restaurant_data.data" :key="index" :restaurant-info="restaurant"/>
      </section>
    </template>
  </primary-template>
</template>

<style scoped>
html {
  align-content: center;
}

section.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>