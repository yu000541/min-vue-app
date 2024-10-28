<script setup>

</script>

<template>
  <section class="primary-template">
    <header>MINchelin Guide</header>
    <section class="main">
      <slot></slot>
      <p>Welcome message~</p>

      <a href=#>
        <img src=# alt="Guide 1" width="300" height="300">
      </a>
      <a href=#>
        <img src=# alt="Guide 2" width="300" height="300">
      </a>
      <a href=#>
        <img src=# alt="Guide 3" width="300" height="300">
      </a>
      <a href=#>
        <img src=# alt="Guide 4" width="300" height="300">
      </a>
    </section>

    <footer>
      <div class="back-to-top">Go to top of page</div>
      <div class="copyright">Min Yu Travel Guide</div>
    </footer>
  </section>
</template>

<style scoped>

section.primary-template {
  section.main{
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid red;
  }
}
</style>