<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="background"></div>
  <div class="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app {
  padding: 25px;
  font-family: "Caladea", serif;
  width: 100vw;
  height: 100vh;
  color: black;
  font-size: 13px;
}
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $background-color;
  z-index: -1;
}
</style>
