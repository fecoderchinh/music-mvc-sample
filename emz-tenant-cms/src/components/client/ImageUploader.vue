<template>
  <!-- eslint-disable max-len -->
  <div class="flex py-16 items-center justify-center bg-white border">
    <div class="px-5">
      <SquareSVG class="w-20 h-20 mb-5 mx-auto fill-placeholderStyle hover:fill-placeholderStyle"/>
      <Button button-class="cms-button cms-button-blue">
        <template slot="name">
          Upload ảnh
        </template>
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/client/Button.vue';

import {
  SquareSVG,
} from '../SVGs.vue';

export default {
  components: {
    Button,
    SquareSVG,
  },
};
</script>

<style lang="scss"></style>
