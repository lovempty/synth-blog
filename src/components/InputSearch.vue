<script setup>
const emit = defineEmits(["onClickSearch"]);
const onClickSearch = () => {
  emit("onClickSearch");
};
</script>
<template>
  <div
    class="InputSearch is-flex is-flex-direction-row-reverse is-align-items-center w-100"
  >
    <input type="text" id="inputSearch" @click="onClickSearch" />
  </div>
</template>
<style lang="scss">
.InputSearch {
  position: relative;
  input {
    background: url("@/assets/images/search.svg");
    background-repeat: no-repeat;
    background-position: right 5px top 8px;
    padding-left: 20px;
    padding-right: 30px;
    height: 44px;
    width: 22%;
    border: none;
    border-radius: 32px;
    transition: width 0.4s ease-in-out, background 0.4s ease-out;
    -webkit-transition: width 0.4s ease-in-out, background 0.4s ease-out;
    &:focus {
      outline: none;
      width: 187%;
      background-color: #f0f0f0;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 32px;
    }
    position: absolute;
  }
  .icon-search {
    position: absolute;
    top: 18%;
    right: 5%;
  }
}
</style>
