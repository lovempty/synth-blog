<script setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    default: "#1100D9",
    required: true,
  },
  tagContent: {
    type: String,
    default: "Animal",
    required: true,
  },
});
</script>
<template>
  <div class="tag-topic" :style="{ backgroundColor: backgroundColor }">
    <span class="tag-content">{{ tagContent }}</span>
  </div>
</template>
<style lang="scss" scoped>
.tag-topic {
  border-radius: 5px;
  font-size: 10px;
  padding: 0px 7px;
  display: inline-block;
  color: white;
  .tag-content {
    opacity: 1;
  }
  // opacity: 0.46;
}
</style>
