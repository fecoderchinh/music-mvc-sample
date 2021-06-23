<template>
  <!-- eslint-disable max-len -->
  <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-y-3">
    <div class="w-full">
      <div class="grid md:grid-cols-4 sm:grid-cols-2 inline-select">
        <SelectOption :option-data="this.optionDataSelect1"/>
        <SelectOption :option-data="this.optionDataSelect2"/>
        <SelectOption :option-data="this.optionDataSelect3"/>
        <SelectOption :option-data="this.optionDataSelect4"/>
      </div>
    </div>
    <div class="w-full">
      <div class="flex">
        <div class="flex flex-auto">
          <InputType
            input-type="text"
            id="search-customer"
            name="search-customer"
            placeholder="Tìm kiếm khách hàng"
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
        { name: 'Hôm nay' },
        { name: 'Hôm qua' },
        { name: '3 ngày qua' },
        { name: '7 ngày qua' },
        { name: '1 tháng qua' },
        { name: 'Tùy chỉnh' },
        { name: 'Tất cả' },
      ],
      optionDataSelect2: [
        { name: 'Lọc nguồn đơn' },
        { name: 'Lơn nguồn đọc' },
        { name: 'Lọc ngơn đuồn' },
      ],
      optionDataSelect3: [
        { name: 'Lọc nhân viên' },
        { name: 'Liên nhân vọc' },
        { name: 'Lọc nhiên vân' },
      ],
      optionDataSelect4: [
        { name: 'Tất cả chi nhánh' },
        { name: 'Một chi nhánh' },
        { name: 'Hai chi nhánh' },
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
