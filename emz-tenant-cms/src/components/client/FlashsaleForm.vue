<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="grid grid-cols-2 sm:grid-cols-1 gap-5">

        <div class="col-span-2">
          <div class="cms-label text-14px mb-4">
            <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
              Tên Flash Sale
            </label>
          </div>

          <div class="w-full">
            <InputType
              id="add-product-name"
              name="add-product-name"
              placeholder="Nhập tên flash sale để dễ quản lý, ví dụ: Flash sale 20/11"
              button="reset"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-4">
            <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
              Loại giảm giá
            </label>
          </div>

          <div class="w-full">
            <SelectOption :option-data="this.optionDataSelect2"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-4">
            <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
              Giá trị giảm giá
            </label>
          </div>

          <div class="w-full">
            <InputType
              main-class="search-bar"
              id="khoi-luong"
              name="khoi-luong"
              input-class="cms-input__default"
              button="button"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text"><span class="text-standardCMS">%</span></template>
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
