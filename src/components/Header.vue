<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="Header">Header</div>
</template>

<style lang="scss" scoped>
.Header {
  display: none;
}
</style>
