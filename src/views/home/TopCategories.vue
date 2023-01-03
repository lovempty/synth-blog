<script setup>
import Category from "@/components/Category.vue";
</script>
<template>
  <div class="top-categories mt-4">
    <div class="head-2">Recommend For You</div>
    <div class="categories mt-1">
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top-categories {
  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
