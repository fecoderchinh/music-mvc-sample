<template>
  <!-- eslint-disable max-len -->
  <div class="flex items-center justify-center bg-white">
    <div class="text-menuIcon">
      <template v-if="image">
        <img :src="image" alt="" class="w-full object-contain mb-3"/>
      </template>
      <NoImgSVG v-else class="w-20 h-20 mb-5 mx-auto"/>
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
  NoImgSVG,
} from '../SVGs.vue';

export default {
  components: {
    Button,
    NoImgSVG,
  },
  props: ['image']
};
</script>

<style lang="scss"></style>
