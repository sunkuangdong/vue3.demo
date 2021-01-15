<template>
  <div>
    <router-link to="/">frank</router-link> |
    <router-link to="home">Home</router-link>
    <router-view />
  </div>
</template>

<script>
import { provide, ref } from "vue";

export default {
  name: "App",
  setup() {
    const menuVisible = ref(false);
    provide("menuVisible", menuVisible);
  },
};
</script>
