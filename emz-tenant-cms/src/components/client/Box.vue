<template>
  <!-- eslint-disable max-len -->
  <div
    class="grid-box"
    :class="[
      classes,
      boxFixed ? 'xl:w-1000 xl:mx-auto' : null,
    ]">
    <slot name="content">default box content</slot>
  </div>
</template>

<script>
export default {
  props: {
    classes: String,
    boxFixed: Boolean,
  },
};
</script>

<style lang="scss">
  .grid-box {
    @apply block flex-auto bg-white rounded border border-gray-300 p-5 mb-5 relative;
  }
</style>
