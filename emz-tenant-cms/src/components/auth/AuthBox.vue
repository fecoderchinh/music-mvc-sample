<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">
    <div :class="boxClass">
      <slot name="content">default content</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxClass: {
      type: String,
      default: 'bg-white p-30px rounded-lg',
    },
  },
};
</script>

<style lang="scss"></style>
