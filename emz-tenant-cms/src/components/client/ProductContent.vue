<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
          Tên sản phẩm
        </label>
      </div>

      <div class="grid-cols">
        <div class="w-full">
          <InputType
            id="add-product-name"
            name="add-product-name"
            placeholder="Nhập tên sản phẩm"
            button="reset"
            input-class="cms-input__default"
            button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
          </InputType>
        </div>
      </div>

      <div class="cms-label text-14px mb-4">
        <label for="add-product-desc" class="cursor-pointer text-14px text-labelAndTitle">
          Mô tả sản phẩm
        </label>
      </div>

      <div class="grid-cols">
        <div class="w-full no-mb">
          <textarea id="add-product-desc" name="add-product-desc" class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Nhập mô tả sản phẩm"></textarea>
        </div>
      </div>

      <a href="#" class="font-lato font-medium text-14px text-buttonAndURL mt-3 block">Thêm mô tả ngắn</a>

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
