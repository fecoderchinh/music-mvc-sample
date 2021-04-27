<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          Điều kiện
        </label>
      </div>

      <div class="w-full mb-5">
        <div class="flex flex-wrap">

          <Radio id="radio-condition-1" name="radio" label-class="text-labelAndTitle mr-3 md:mr-8 sm:mb-3">
            <template slot="radio-text">Tự động thêm sản phẩm</template>
          </Radio>

          <Radio id="radio-condition-2" name="radio" label-class="text-labelAndTitle" checked>
            <template slot="radio-text">Thêm sản phẩm thủ công</template>
          </Radio>

        </div>
      </div>

      <div class="grid grid-cols-4 sm:grid-cols-1 gap-5">
        <div class="col-span-1">
          <SelectOption :option-data="this.optionDataSelect1"/>
        </div>
        <div class="col-span-1">
          <SelectOption :option-data="this.optionDataSelect2"/>
        </div>
        <div class="col-span-2 bg-gray-300">
          <InputType
            id="add-product-name"
            name="add-product-name"
            button="reset"
            input-class="cms-input__default">
          </InputType>
      </div>
    </div>

    <Button button-class="cms-button cms-button-white mt-5">
      <template slot="name">
        + Thêm điều kiện
      </template>
    </Button>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Radio from '@/components/client/Radio.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import InputType from '@/components/client/InputType.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Box,
    Radio,
    SelectOption,
    InputType,
    Button,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Tên sản phẩm' },
        { name: 'aaa' },
        { name: 'bbb' },
      ],
      optionDataSelect2: [
        { name: 'Chứa từ' },
        { name: 'ccc' },
        { name: 'ddd' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
