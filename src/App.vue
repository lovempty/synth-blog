<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.container {
  background-color: $background-color;
  width: 100vw;
  height: 100vh;
}
</style>
