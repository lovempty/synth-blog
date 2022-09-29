<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="Header">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <div class="info"></div>
  </div>
</template>

<style lang="scss" scoped>
.Header {
  .logo {
    font-weight: bold;
  }
}
</style>
