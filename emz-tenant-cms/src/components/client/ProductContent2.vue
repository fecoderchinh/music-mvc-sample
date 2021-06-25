<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-3">
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
