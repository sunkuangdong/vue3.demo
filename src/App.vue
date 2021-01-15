<template>
  <div>
    <router-link to="frank">frank</router-link>
    <router-view />
  </div>
</template>

<script>
import Frank from "./components/Frank.vue";

export default {
  name: "App",
  components: {
    Frank,
  },
};
</script>
