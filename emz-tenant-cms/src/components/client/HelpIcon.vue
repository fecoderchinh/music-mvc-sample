<template>
  <!-- eslint-disable max-len -->
  <div class="text-menuItem text-center font-lato font-normal">
    <a href="#" class="group">
      <QuestionOutlineSVG class="fill-menuIcon md:ml-4 sm:ml-3 w-icon h-icon group-hover:fill-buttonAndURL" />
      <span class="text-14px block group-hover:text-buttonAndURL">Trợ giúp</span>
    </a>
  </div>
</template>

<script>
import {
  QuestionOutlineSVG,
} from '../SVGs.vue';

export default {
  components: {
    QuestionOutlineSVG,
  },
};
</script>

<style scoped>

</style>
