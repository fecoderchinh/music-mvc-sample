<template>
  <!-- eslint-disable max-len -->
  <Box class="no-p no-b">
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label for="add-product-name-combo" class="cursor-pointer text-14px text-labelAndTitle">
          Tên sản phẩm <span class="text-cmsRed">*</span>
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
            value="iPhone 12">
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
