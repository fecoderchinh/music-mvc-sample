<template>
  <!-- eslint-disable max-len -->
  <div class="breadcrumb relative flex flex-auto mb-4">
    <ul class="list-none m-0 p-0 flex flex-auto">
      <li class="flex items-center">
        <ArrowSVG class="transform rotate-90 flex-auto ml-auto group-hover:fill-buttonAndURL -mt-px" />
        <slot name="content">
          <a href="#">Type something</a>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  ArrowSVG,
} from '../SVGs.vue';

export default {
  components: {
    ArrowSVG,
  },
};
</script>
