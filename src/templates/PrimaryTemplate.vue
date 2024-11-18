<script setup>
defineProps({
  mode: {
    type: String,
    default: 'light'
  }
})
</script>

<template>
  <section class="top-section" :class="{ 'dark-mode': mode === 'dark' }">
    <nav>
      <router-link :to="{ name: 'Home' }"><header><span>MINNchelin</span> Guide</header></router-link>
      <div class="hamburger">hamburger</div>
      <div class="full-nav">
        <router-link :to="{ name: 'Tmp' }">Tmp</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
      </div>
    </nav>

    <slot name="section-summary"/>
  </section>


  <section class="body">
    <p>
      <slot name="content"/>
    </p>
  </section>


  <!--  <section class="primary-template">-->
  <!--    <header><span>MINNchelin</span> Guide</header>-->
  <!--    <section class="top">-->
  <!--      <img src=# alt="Guide 2" width="300" height="300">-->
  <!--    </section>-->
  <!--    <section class="main">-->
  <!--      <slot></slot>-->
  <!--      <p>Welcome message~</p>-->

  <!--      <a href=#>-->
  <!--        <img src=# alt="Guide 1" width="300" height="300">-->
  <!--      </a>-->
  <!--      <a href=#>-->
  <!--        <img src=# alt="Guide 2" width="300" height="300">-->
  <!--      </a>-->
  <!--    </section>-->

  <!--    <footer>-->
  <!--      <div class="back-to-top">Go to top of page</div>-->
  <!--      <div class="copyright">Min Yu Travel Guide</div>-->
  <!--    </footer>-->
  <!--  </section>-->
</template>

<style scoped>

section.top-section {
  /* Base styles for light mode */
  background-color: #fff;
  color: #373C87;
  border-top: 5px solid #373C87;

  nav{
    display: flex;
    justify-content: flex-end;

  }

  &.dark-mode {
    /* Styles for dark mode */
    background-color: #373C87;
    color: #fff;
    border-top: 5px solid white;

    a{
      color: white;
    }
  }
}

/*nav {


  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;

  a {
    background-color: black;
    padding: 1rem;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid grey;

    &.router-link-active {
      font-weight: bold;
      text-decoration: underline;
      background-color: darkblue;
      border-color: white;
      font-size: 105%;
    }

    &:hover {
      border-color: white;
    }
  }*/
</style>