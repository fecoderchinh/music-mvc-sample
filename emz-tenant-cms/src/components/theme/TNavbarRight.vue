<template>
  <div class="w-full -ml-px">
    <div class="flex">
      <div class="flex flex-auto">
        <InputType
          input-type="text"
          id="search-theme"
          name="search-theme"
          placeholder="Tìm kiếm theme"
          input-class="cms-input__with-icon bg-cmsLightGreen bg-opacity-5"
          button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
          <template slot="button-text"><SearchSVG class="h-4 w-4 fill-menuIcon" /></template>
        </InputType>
      </div>
      <!-- <div class="flex">
        button
      </div> -->
    </div>
  </div>
</template>

<script>
import InputType from '@/components/client/InputType.vue';

import {
  SearchSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    InputType,
    SearchSVG,
  },
};
</script>
