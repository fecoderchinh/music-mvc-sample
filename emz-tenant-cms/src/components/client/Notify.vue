<template>
  <!-- eslint-disable max-len -->
  <div class="w-full border-t-4 border-cmsGreen bg-cmsGreenNotify p-4 relative" role="alert">
    <p class="text-standardCMS text-labelAndTitle sm:text-center sm:mb-4 md:mr-48">
      <CheckboxCircleSVG class="w-5 h-5 mr-5 inline fill-cmsGreen"/>Đơn hàng D1001 đã được tạo thành công.
    </p>
    <Button button-class="cms-button cms-button-white absolute sm:relative right-0 top-50 transform md:-translate-y-1/2 md:mr-5">
      <template slot="name">
        Tạo đơn hàng khác
      </template>
    </Button>
  </div>
</template>

<script>
import Button from '@/components/client/Button.vue';

import {
  CheckboxCircleSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    CheckboxCircleSVG,
    Button,
  },
};
</script>
