<template>
  <div>
    <div>Home</div>
    <button @click="toggle">toggle</button>
    <Doc v-model:value="type" @click="onClick">
      <template v-slot:header><h1>header</h1></template>
      <template v-slot:footer><h2>footer</h2></template>
    </Doc>
  </div>
</template>

<script lang="ts">
import Doc from "./Doc.vue";
import { inject, ref, Ref } from "vue";
export default {
  components: { Doc },
  setup() {
    const type = ref(true);
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggle = () => {
      menuVisible.value = !menuVisible.value;
    };
    const onClick = () => {
      console.log("hi");
    };
    return { type, toggle, onClick };
  },
};
</script>

<style>
</style>