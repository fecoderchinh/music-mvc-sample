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

          <Radio
              id="radio-category-condition-1"
              name="radio-category-condition"
              label-class="text-labelAndTitle mr-3 md:mr-8 sm:mb-3"
              @change="auto = true" :checked="auto">
            <template slot="radio-text">Tự động thêm sản phẩm</template>
          </Radio>

          <Radio
              id="radio-category-condition-2"
              name="radio-category-condition"
              label-class="text-labelAndTitle mr-3 md:mr-8 sm:mb-3"
              @change="auto = false" :checked="!auto">
            <template slot="radio-text">Thêm sản phẩm thủ công</template>
          </Radio>

        </div>
      </div>

      <div class="w-full" v-if="auto">
        <div class="table w-full">
          <div class="table-row w-full">
            <div class="table-cell">
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
            </div>
            <div class="w-auto text-center text-placeholderStyle ml-3">
              <DeleteSVG class="w-4 inline -mt-1 fill-current"/>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-6 gap-5 mt-5">
          <div class="col-span-6 md:col-span-2">
            <DropdownCondition/>
          </div>
          <div class="col-span-6 md:col-span-2 flex items-center">
            <ModalDsThoaMan/>
          </div>
        </div>
      </div>

      <div class="w-full" v-else>
        <ProductAdvanceSearch class="mb-5"/>
        <TableConditionAuto/>
      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Radio from '@/components/client/Radio.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import InputType from '@/components/client/InputType.vue';
import DropdownCondition from '@/components/client/DropdownCondition.vue';
import ModalDsThoaMan from "@/components/client/ModalDsThoaMan";
import TableConditionAuto from "@/components/client/TableConditionAuto";
import ProductAdvanceSearch from "@/components/client/ProductAdvanceSearch";

import {
  DeleteSVG,
} from '@/components/SVGs';

export default {
  components: {
    Box,
    Radio,
    SelectOption,
    InputType,
    DeleteSVG,
    DropdownCondition,
    ModalDsThoaMan,
    TableConditionAuto,
    ProductAdvanceSearch
  },
  data() {
    return {
      auto: false,
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
