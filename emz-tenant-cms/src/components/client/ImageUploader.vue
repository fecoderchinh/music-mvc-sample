<template>
  <!-- eslint-disable max-len -->
  <div class="flex items-center justify-center bg-white">
    <template v-if="image">
      <img :src="image" alt="" class="w-full object-contain"/>
    </template>
    <div class="px-5" v-else>
      <SquareSVG class="w-20 h-20 mb-5 mx-auto fill-placeholderStyle hover:fill-placeholderStyle"/>
      <Button button-class="cms-button cms-button-blue" @click="$emit('click')">
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
  props: ['image']
};
</script>

<style lang="scss"></style>
