<template>
  <!-- eslint-disable max-len -->
  <div class="grid lg:grid-cols-6 md:grid-cols-1 gap-y-3">
    <div class="col-span-1 sm:col-span-6">
      <div class="grid md:grid-cols-1 inline-select">
        <SelectOption :option-data="this.optionDataSelect1"/>
      </div>
    </div>
    <div class="col-span-5 sm:col-span-6 -ml-px">
      <div class="flex">
        <div class="flex flex-auto">
          <InputType
            input-type="text"
            id="search-customer"
            name="search-customer"
            placeholder="Tìm kiếm danh mục"
            input-class="cms-input__with-icon rounded-l-none"
            button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            <template slot="button-text"><SearchSVG class="h-4 w-4 fill-menuIcon" /></template>
          </InputType>
        </div>
        <div class="flex">
          <ModalFilterButton/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectOption from '@/components/client/SelectOption.vue';
import InputType from '@/components/client/InputType.vue';
import ModalFilterButton from '@/components/client/ModalFilterButton.vue';

import {
  SearchSVG,
} from '../SVGs.vue';

export default {
  components: {
    SelectOption,
    InputType,
    SearchSVG,
    ModalFilterButton,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Người tạo' },
        { name: 'Lặt ngày đọc' },
        { name: 'Lọc ngặt đày' },
      ],
    };
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
