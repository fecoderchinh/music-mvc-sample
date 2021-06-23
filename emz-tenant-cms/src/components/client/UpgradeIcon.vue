<template>
  <!-- eslint-disable max-len -->
  <div class="text-menuItem text-center font-lato font-normal">
    <a href="#" class="group text-cmsRed">
      <UpgradeSVG class="md:ml-4 sm:ml-3 w-icon h-icon group-hover:fill-buttonAndURL" />
      <span class="text-14px text-labelAndTitle block group-hover:text-buttonAndURL">Nâng cấp</span>
    </a>
  </div>
</template>

<script>
import {
  UpgradeSVG,
} from '../SVGs.vue';

export default {
  components: {
    UpgradeSVG,
  },
};
</script>

<style scoped>

</style>
