<template>
  <!-- eslint-disable max-len -->
  <header>
    <div class="flex items-center justify-between p-5">
      <div>
        <a href="/"><img src="https://picsum.photos/150/61"></a>
      </div>
     
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="px-5">
      <template v-if="!isLogged">
        <h3 class="cms-typo text-white text-base"><a href="/auth/register">Đăng ký</a></h3>
      </template>
      <template v-else>
        <h3 class="cms-typo text-white text-base">
          <a href="/auth/create">
            <AvatarSVG class="w-12 fill-cmsLightBlue inline mr-5"/>
            Lâm Thiên Phong
          </a>
        </h3>
      </template>
    </div>
  </header>
</template>

<script>
import {
  AvatarSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    AvatarSVG,
  },
  data() {
    return {
      isOpen: false,
      isLogged: false,
    };
  },
};
</script>

<style lang="scss"></style>
