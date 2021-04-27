<template>
  <!-- eslint-disable max-len -->
  <a href="#" class="notifybell flex h-full items-center relative sm:mr-2">
    <NotifySVG class="fill-menuIcon w-icon h-icon" />
    <span class="w-18px h-18px bg-cmsRed rounded-full text-12px text-white text-center absolute">
      <slot name="number">99</slot>
    </span>
  </a>
</template>

<script>
import {
  NotifySVG,
} from '../SVGs.vue';

export default {
  components: {
    NotifySVG,
  },
};
</script>
<style lang="scss">
  .notifybell {
    span {
      right: -10px;
      top: 0px;
    }
  }
</style>
