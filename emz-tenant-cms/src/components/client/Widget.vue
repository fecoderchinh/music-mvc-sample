<template>
  <!-- eslint-disable max-len -->
  <Box class="widget" :classes="this.classes">
    <template slot="content">
      <div class="cms-label text-14px mb-4">
        <slot name="title"></slot>
      </div>
      <div class="w-full">
        <slot name="content"></slot>
      </div>
    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';

export default {
  components: {
    Box,
  },
  props: {
    classes: String,
  },
};
</script>

<style lang="scss">
  .cms-label {
    @apply relative;
  }
</style>
