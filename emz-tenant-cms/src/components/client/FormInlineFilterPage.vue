<template>
  <!-- eslint-disable max-len -->
  <div class="grid grid-cols-1 gap-y-3">
    <div class="w-full -ml-px">
      <InputType
        input-type="text"
        id="search-customer"
        name="search-customer"
        placeholder="Tìm kiếm bài viết"
        input-class="cms-input__with-icon rounded-l-none"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
        <template slot="button-text"><SearchSVG class="h-4 w-4 fill-menuIcon" /></template>
      </InputType>
    </div>
  </div>
</template>

<script>
import InputType from '@/components/client/InputType.vue';

import {
  SearchSVG,
} from '../SVGs.vue';

export default {
  components: {
    InputType,
    SearchSVG,
  },
};
</script>

<style lang="scss">
  .inline-select {
    & > div {
      &:first-child {
        select {
          @apply rounded-r-none;
        }
      }
      &:not(:first-child) {
        select {
          @apply rounded-none;
        }
      }
    }
  }
</style>
