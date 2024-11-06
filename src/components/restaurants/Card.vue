<script setup>

defineProps({
  restaurantInfo: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <section class="restaurant-card">
    <div class="main-photo">
      <img :src="restaurantInfo.photo" :alt="restaurantInfo.restaurant_name"/>
    </div>
    <div class="details">
      <h1>{{ restaurantInfo.restaurant_name }}</h1>
<!--      <p v-html="('City' {{restaurantInfo.location}})"></p>-->
    </div>
  </section>
</template>

<style scoped>
section.restaurant-card {
  /*Mobile first*/
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  width: 30%;
  gap: 1rem;
  padding: 0.5rem;

  .main-photo {
    width: 100%;
    height: 100%;
  }

  &:hover {
    border-color: black;
    cursor: pointer;
  }

  /* Tablet and up */
  @media screen and (width > 550px) {
    width : 80%
  }
}

h1 {
  font-size: 2rem;
  margin: 0;
}

p {
  margin: 0;
}
</style>