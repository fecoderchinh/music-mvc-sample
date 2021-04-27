<template>
  <!-- eslint-disable max-len -->
  <div class="grid lg:grid-cols-6 md:grid-cols-1 gap-y-3">
    <div class="col-span-4 sm:col-span-6">
      <div class="grid md:grid-cols-6 sm:grid-cols-2 inline-select">
        <SelectOption :option-data="this.optionDataSelect1"/>
        <SelectOption :option-data="this.optionDataSelect2"/>
        <SelectOption :option-data="this.optionDataSelect3"/>
        <SelectOption :option-data="this.optionDataSelect4"/>
        <SelectOption :option-data="this.optionDataSelect5"/>
        <SelectOption :option-data="this.optionDataSelect6"/>
      </div>
    </div>
    <div class="col-span-2 sm:col-span-6">
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
      </div>
    </div>
  </div>
</template>

<script>
import SelectOption from '@/components/client/SelectOption.vue';
import InputType from '@/components/client/InputType.vue';

import {
  SearchSVG,
} from '../SVGs.vue';

export default {
  components: {
    SelectOption,
    InputType,
    SearchSVG,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Ngày tạo' },
        { name: 'Lặt ngày đọc' },
        { name: 'Lọc ngặt đày' },
      ],
      optionDataSelect2: [
        { name: 'Trạng thái' },
        { name: 'Lơn nguồn đọc' },
        { name: 'Lọc ngơn đuồn' },
      ],
      optionDataSelect3: [
        { name: 'Lọc theo tags' },
        { name: 'Liên nhân vọc' },
        { name: 'Lọc nhiên vân' },
      ],
      optionDataSelect4: [
        { name: 'Địa chỉ' },
        { name: 'Một chi nhánh' },
        { name: 'Hai chi nhánh' },
      ],
      optionDataSelect5: [
        { name: 'Tổng mua' },
        { name: 'Một chi nhánh' },
        { name: 'Hai chi nhánh' },
      ],
      optionDataSelect6: [
        { name: 'Quảng cáo' },
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
