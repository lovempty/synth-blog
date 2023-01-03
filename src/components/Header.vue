<script setup>
import InputSearch from "./InputSearch.vue";

const inARowStyle = "is-flex is-flex-direction-row is-align-items-center ";
</script>

<template>
  <div :class="`Header ${inARowStyle} is-justify-content-space-between w-100`">
    <div :class="`logo ${inARowStyle}`">
      <img src="@/assets/images/logo.svg" alt="logo" style="width: 100%" />
    </div>
    <div :class="`info ${inARowStyle} w-100`">
      <InputSearch />
      <img src="@/assets/images/noti.svg" alt="logo" />
      <img src="@/assets/images/profile.svg" alt="logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Header {
  .logo {
    font-weight: bold;
    img {
      transition: display 0.5s linear;
      -webkit-transition: display 0.5s linear;
    }
  }
  .invisible {
    display: none !important;
  }
}
</style>
