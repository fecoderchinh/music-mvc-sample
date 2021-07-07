<template>
  <!-- eslint-disable max-len -->
  <div class="grid lg:grid-cols-5 md:grid-cols-1 gap-y-3">
    <div class="xl:col-span-2 lg:col-span-5">
      <div class="grid md:grid-cols-2 sm:grid-cols-2 inline-select">
        <SelectOption :option-data="this.optionDataSelect1"/>
        <SelectOption :option-data="this.optionDataSelect2"/>
      </div>
    </div>
    <div class="xl:col-span-3 lg:col-span-5">
      <div class="flex inline-input">
        <div class="flex flex-auto">
          <InputType
            input-type="text"
            id="search-customer"
            name="search-customer"
            placeholder="Tìm kiếm menu"
            input-class="cms-input__with-icon"
            button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            <template slot="button-text"><SearchSVG class="h-4 w-4 fill-menuIcon" /></template>
          </InputType>
        </div>
<!--        <div class="flex">-->
<!--          <ModalFilterButton/>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import SelectOption from '@/components/client/SelectOption.vue';
import InputType from '@/components/client/InputType.vue';
// import ModalFilterButton from '@/components/client/ModalFilterButton.vue';

import {
  SearchSVG,
} from '../SVGs.vue';

export default {
  components: {
    SelectOption,
    InputType,
    SearchSVG,
    // ModalFilterButton,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Tất cả' },
        { name: 'Đang ẩn' },
        { name: 'Hiển thị' },
      ],
      optionDataSelect2: [
        { name: 'Tất cả' },
        { name: 'Thêm thủ công' },
        { name: 'Thêm tự động' },
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
      &:last-child {
        @media (max-width: 991.98px) {
          select {
            @apply rounded-r #{!important};
          }
        }
      }
      &:not(:first-child) {
        select {
          @apply rounded-none;
        }
      }
    }
  }
  .cms-select {
    &:not(:last-child) {
      select {
        border-right-width: 0px;
        &:hover, &:focus {
          border-right-width: 1px;
        }
      }
    }
  }
  .inline-input {
    .cms-input {
      input {
        @media (min-width: 1024.98px) {
          border-left-width: 0px;
          margin-left: 0px;
          &:hover, &:focus {
            border-left-width: 1px;
            margin-left: -1px;
          }
        }
        @media (min-width: 1024.98px) {
          @apply rounded-l-none;
        }
      }
    }
  }
</style>
