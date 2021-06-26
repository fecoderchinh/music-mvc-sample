<template>
  <!-- eslint-disable max-len -->
  <div class="absolute top-0 right-0">
  <!-- <div class="absolute top-0 right-0" v-if="this.$router.currentRoute.path === '/dashboard/order-cr' " -->
    <ul class="list-none">
      <li class="inline mr-3">
        <Button button-class="bg-white group text-menuIcon text-14px font-lato font-medium w-30px h-30px px-3 relative hover:text-buttonAndURL">
          <template slot="name">
            <LongArrowSVG class="absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 rotate-180 w-4"/>
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="bg-white group text-menuIcon text-14px font-lato font-medium w-30px h-30px px-3 relative hover:text-buttonAndURL">
          <template slot="name">
            <LongArrowSVG class="absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 w-4"/>
          </template>
        </Button>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from '@/components/client/Button.vue';

import {
  LongArrowSVG,
} from '../SVGs.vue';

export default {
  components: {
    LongArrowSVG,
    Button,
  },
};
</script>
