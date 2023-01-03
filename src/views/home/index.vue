<script setup>
import { ref } from "vue";
import RecommendForYou from "./RecommendForYou.vue";
import TopCategories from "./TopCategories.vue";
import PopularReads from "./PopularReads.vue";

defineProps({
  msg: String,
});
</script>

<template>
  <div class="HomeScreen">
    <RecommendForYou />
    <TopCategories />
    <PopularReads />
  </div>
</template>

<style lang="scss" scoped>
.HomeScreen {
}
</style>
