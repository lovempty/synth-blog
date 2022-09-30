<script setup>
import { ref } from "vue";

const emit = defineEmits(["onClickSearch"]);
const visible = ref(false);

const onClickSearch = () => {
  visible.value = true;
  emit("onClickSearch");
};
</script>
<template>
  <div
    class="InputSearch is-flex is-flex-direction-row-reverse is-align-items-center w-100"
  >
    <input
      type="text"
      :class="visible ? 'visible' : 'invisible'"
      class="w-100"
    />
    <img
      src="@/assets/images/search.svg"
      alt="logo"
      class="icon-search"
      @click="onClickSearch"
    />
  </div>
</template>
<style lang="scss">
.InputSearch {
  position: relative;
  input {
    padding-right: 30px;
    height: 44px;
    width: 40%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    border: none;
    background-color: #f0f0f0;
    transition: width 0.5s ease-out;
  }
  .visible {
    width: 100%;
  }
  .invisible {
    opacity: 0;
  }
  .icon-search {
    position: absolute;
    top: 18%;
    right: 5%;
  }
}
</style>
