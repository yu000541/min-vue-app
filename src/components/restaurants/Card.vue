<script setup>

defineProps({
  // restaurantName: {
  //   type: String,
  //   required: true
  // },
  // location: {
  //   type: String,
  //   required: false
  // },
  // photo: {
  //   type: String,
  //   required: true
  // }
  data: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <section class="card">
    <aside>
      {{ data.restaurant_name }}
      {{ data.location }}
    </aside>
<!--        <aside>-->
<!--          <img :src="'../src/assets/images/' + photo + '.jpg'" alt="Photo of restaurant"/>-->
<!--        </aside>-->
<!--        <aside>-->
<!--          <div class="name">-->
<!--            <h1>{{ restaurantName }}</h1>-->
<!--            <p>{{ location }}</p>-->
<!--          </div>-->
<!--        </aside>-->
  </section>
</template>

<style scoped>
section.card {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;

  &:hover {
    border-color: black;
    cursor: pointer;
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