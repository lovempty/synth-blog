<script setup>
import Post from "@/components/Post.vue";
</script>
<template>
  <div class="top-categories mt-4">
    <div class="head-2">Recommend For You</div>
    <div class="categories mt-1">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top-categories {
  .categories {
    display: flex;
    flex-direction: column;
    gap: 5vw;
  }
}
</style>
