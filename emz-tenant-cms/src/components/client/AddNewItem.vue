<template>
  <!-- eslint-disable max-len -->
  <div class="flex items-center justify-center bg-white">
    <div class="px-5">
      <slot name="icon">
        <PlusSVG class="w-4 mb-10px mx-auto fill-cmsLightGreen hover:fill-cmsDarkGreen"/>
      </slot>
      <slot name="content">
        default content
      </slot>
    </div>
  </div>
</template>

<script>
import {
  PlusSVG,
} from '../SVGs.vue';

export default {
  components: {
    PlusSVG,
  },
};
</script>

<style lang="scss"></style>
