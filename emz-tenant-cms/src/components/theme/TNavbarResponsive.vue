<template>
  <!-- eslint-disable max-len -->
  <div class="bg-cmsLight w-3/4 md:w-1/3 lg:w-64 fixed top-0 left-0 shadow overflow-hidden h-screen z-40">
    <div class="overflow-y-auto pt-12">
      <button @click="$emit('close')" class="no-effect absolute top-15px right-15px cursor-pointer">
        <CloseSVG class="w-4 h-4 fill-placeholderStyle group-hover:fill-buttonAndURL"/>
      </button>
      <TNavbarRight class="px-5 my-5px"/>
      <TNavbarLeft class="responsive"/>
    </div>
  </div>
</template>

<script>
import TNavbarLeft from '@/components/theme/TNavbarLeft.vue';
import TNavbarRight from '@/components/theme/TNavbarRight.vue';

import {
  CloseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    CloseSVG,
    TNavbarLeft,
    TNavbarRight,
  },
};
</script>
