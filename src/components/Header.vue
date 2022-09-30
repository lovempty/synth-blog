<script setup>
import { ref } from "vue";
import InputSearch from "./InputSearch.vue";

const inARowStyle = "is-flex is-flex-direction-row is-align-items-center ";
const visible = ref(true);
const onClickSearch = () => {
  visible.value = false;
};
</script>

<template>
  <div :class="`Header ${inARowStyle} is-justify-content-space-between w-100`">
    <div
      :class="`logo ${inARowStyle} ${visible ? '' : 'invisible'}`"
      style="width: 100%"
    >
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <div :class="`info ${inARowStyle} w-100`">
      <InputSearch @onClickSearch="onClickSearch" />
      <img src="@/assets/images/noti.svg" alt="logo" />
      <img src="@/assets/images/profile.svg" alt="logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Header {
  .logo {
    font-weight: bold;
  }
  .invisible {
    display: none !important;
  }
}
</style>
