<script setup>
import TopicTag from "./TopicTag.vue";
</script>
<template>
  <div class="post">
    <div class="image">
      <img src="@/assets/images/post-image.jpg" alt="" />
    </div>
    <div class="content">
      <div class="head-3">Tiger: Aggressive Animal</div>
      <div class="time-post note-1">Time post: 30/12/2022</div>
      <div class="description max-three-line">
        It seems like one of those nights. This place is too crowded. Too many
        cool kids. It seems like one of those nights. It seems like one of those
        nights. This place is too crowded. Too many cool kids.
      </div>
      <div class="bottom-content flex justify-content-space-between">
        <div class="tags-topic"><TopicTag class="mr-1" /><TopicTag /></div>
        <div class="actions">
          <img src="@/assets/icons/bookmark.svg" alt="" />
          <img src="@/assets/icons/favorite-outline.svg" alt="" />
          <img src="@/assets/icons/share.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.post {
  display: flex;
  height: 130px;
  border-radius: 10px;
  background: whitesmoke;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  .image {
    width: 35vw;
    min-width: 35vw;
    img {
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
  .content {
    padding: 1vw 3vw;
  }
}
.max-three-line {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
</style>
