<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="grid grid-cols-2 sm:grid-cols-1 gap-5">
        <div class="p-0">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Chọn hình thức khuyến mãi
            </label>
          </div>

          <div class="w-full">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

        <div class="p-0">
          <div class="cms-label text-14px mb-4">
            <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
              Tên chương trình khuyến mãi
            </label>
          </div>

          <div class="w-full">
            <InputType
              id="add-product-name"
              name="add-product-name"
              placeholder="Ví dụ: Khuyến mãi chào đón Mùa Thu Vàng"
              button="reset"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="p-0">
          <div class="cms-label text-14px mb-4">
            <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
              Loại giảm giá
            </label>
          </div>

          <div class="w-full">
            <SelectOption :option-data="this.optionDataSelect2"/>
          </div>
        </div>

        <div class="p-0">
          <div class="cms-label text-14px mb-4">
            <label for="add-promo-code" class="cursor-pointer text-14px text-labelAndTitle">
              Giá trị giảm giá
            </label>
          </div>

          <div class="w-full">
            <InputType
              main-class="search-bar"
              id="add-promo-code"
              name="add-promo-code"
              input-class="cms-input__with-icon"
              button="button"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">%</span></template>
            </InputType>
          </div>
        </div>

      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';
import SelectOption from '@/components/client/SelectOption.vue';

export default {
  components: {
    Box,
    InputType,
    SelectOption,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Chương trình khuyến mãi - CTKM' },
        { name: 'Lặt ngày đọc' },
        { name: 'Lọc ngặt đày' },
      ],
      optionDataSelect2: [
        { name: 'Theo %' },
        { name: 'Lơn nguồn đọc' },
        { name: 'Lọc ngơn đuồn' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
