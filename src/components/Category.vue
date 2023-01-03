<script setup>
const props = defineProps({
  backgroundImage: {
    type: String,
    default: "/src/assets/images/default-post.png",
    required: true,
  },
  categoryContent: {
    type: String,
    default: "General Information",
    required: true,
  },
});
</script>
<template>
  <div class="category" :style="{ background: backgroundImage }">
    <span class="category-content">{{ categoryContent }}</span>
  </div>
</template>
<style lang="scss" scoped>
.category {
  display: inline-block;
  background: antiquewhite;
  padding: 18px 15px;
  border-radius: 15px;
}
</style>
