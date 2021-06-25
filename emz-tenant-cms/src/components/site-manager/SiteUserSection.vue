<template>
  <!-- eslint-disable max-len -->
  <div class="flex">
    <div class="w-20 min-w-20 max-w-20 mr-5 inline-flex text-menuIcon items-center">
      <AvatarSVG class="w-20 h-20" />
    </div>
    <div class="inline-flex items-center flex-1 overflow-hidden">
      <div class="w-full">
        <h3 class="cms-typo text-7 text-labelAndTitle max-w-full truncate"><a href="#">Lâm Thiên Phong</a></h3>
        <ModalProfileButton/>
      </div>
    </div>
  </div>
</template>

<script>
import {
  AvatarSVG,
} from '@/components/SVGs.vue';
import ModalProfileButton from '@/components/site-manager/ModalProfileButton.vue';

export default {
  components: {
    ModalProfileButton,
    AvatarSVG,
  },
};
</script>

<style lang="scss"></style>
