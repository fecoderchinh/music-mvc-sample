<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label for="add-product-name-combo" class="cursor-pointer text-14px text-labelAndTitle">
          Tên Combo
        </label>
      </div>

      <div class="grid-cols">
        <div class="w-full">
          <InputType
            id="add-product-name-combo"
            name="add-product-name-combo"
            placeholder="Nhập tên sản phẩm"
            button="reset"
            input-class="cms-input__default"
            button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
          </InputType>
        </div>
      </div>

      <div class="cms-label text-14px mb-4">
        <label for="search-product-name-combo" class="cursor-pointer text-14px text-labelAndTitle">
          Thêm sản phẩm vào Combo
        </label>
      </div>

      <div class="grid-cols">
        <div class="w-full">
          <InputType
            id="search-product-name-combo"
            name="search-product-name-combo"
            placeholder="Tìm kiếm sản phẩm"
            button="reset"
            input-class="cms-input__default"
            button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
          </InputType>
        </div>
      </div>

      <div class="grid grid-cols-6 gap-5">
        <div class="col-span-5 sm:col-span-3 md:text-right">
          <span class="cms-typo text-14px text-menuItem">
            Giá
          </span>
        </div>
        <div class="col-span-1 sm:col-span-3 truncate md:text-right">
          <span class="cms-typo text-14px text-menuItem">
            123,467,000đ
          </span>
        </div>
        <div class="col-span-5 sm:col-span-3 md:text-right flex items-center md:justify-end">
          <span class="cms-typo text-14px text-labelAndTitle">
            Giá Combo
          </span>
        </div>
        <div class="col-span-1 sm:col-span-3">
          <InputType
            id="add-product-name-combo"
            name="add-product-name-combo"
            placeholder="123,446,000đ"
            button="reset"
            input-class="cms-input__default"
            button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
          </InputType>
        </div>
      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';

export default {
  components: {
    Box,
    InputType,
  },
};
</script>

<style lang="scss"></style>
