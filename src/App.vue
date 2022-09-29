<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Caladea&display=swap");
.app {
  font-family: "Caladea", serif;
  .container {
    background-color: $background-color;
    width: 100vw;
    height: 100vh;
  }
}
</style>
