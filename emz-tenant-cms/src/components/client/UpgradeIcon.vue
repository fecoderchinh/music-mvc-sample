<template>
  <!-- eslint-disable max-len -->
  <div class="text-menuItem text-center font-lato font-normal">
    <a href="#" class="group">
      <EllipseSVG class="fill-cmsRed md:ml-4 sm:ml-3 w-icon h-icon group-hover:fill-buttonAndURL" />
      <span class="text-14px block group-hover:text-buttonAndURL">Nâng cấp</span>
    </a>
  </div>
</template>

<script>
import {
  EllipseSVG,
} from '../SVGs.vue';

export default {
  components: {
    EllipseSVG,
  },
};
</script>

<style scoped>

</style>
