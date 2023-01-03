<script setup>
// const thumbnailImage = "/src/assets/images/thumbnail.jpg";
import TopicTag from "./TopicTag.vue";
const props = defineProps({
  thumbnailImage: {
    type: String,
    default: "/src/assets/images/default-post.png",
    required: true,
  },
  title: {
    type: String,
    default: "Unknown title",
    required: true,
  },
  timePost: {
    type: String,
    default: "Unknown time",
    required: true,
  },
});
</script>
<template>
  <div class="thumbnail" :style="{ backgroundImage: `url(${thumbnailImage})` }">
    <div class="head-1 thumb-title">{{ title }}</div>
    <div class="time-post note-1">Time posted: {{ timePost }}</div>
    <div class="topic-tag">
      <TopicTag />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.thumbnail {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 63vw;
  max-width: 247px;
  height: 137px;
  border-radius: 20px;
  .thumb-title {
    position: absolute;
    bottom: 30px;
    left: 20px;
    &:before {
      content: "";
      position: absolute;
      background-color: white;
      height: 17px;
      width: 3px;
      left: -6px;
      top: 6px;
    }
  }
  .time-post {
    position: absolute;
    bottom: 25px;
    left: 21px;
  }
  .topic-tag {
    position: absolute;
    bottom: 8px;
    left: 20px;
  }
}
.thumbnail::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  width: 63vw;
  max-width: 247px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-image: linear-gradient(to bottom, transparent, black);
}
</style>
