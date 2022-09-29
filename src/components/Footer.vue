<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="Footer">Footer</div>
</template>

<style lang="scss" scoped>
.Footer {
  display: none;
}
</style>
