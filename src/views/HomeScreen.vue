<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="HomeScreen">HomeScreen</div>
</template>

<style lang="scss" scoped>
.HomeScreen {
}
</style>
