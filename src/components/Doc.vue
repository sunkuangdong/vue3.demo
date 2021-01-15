<template>
  <div>
    <div>Doc</div>
    <div>{{ value }}</div>
    <button v-bind="$attrs" @click="onType">onType</button>
    <slot name="header"/>
    <slot name="footer"/>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  inheritAttrs: false,
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const onType = () => {
      context.emit("update:value", !props.value);
    };
    return { onType };
  },
};
</script>

<style>
</style>