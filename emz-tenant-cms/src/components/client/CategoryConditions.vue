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
        <div class="w-full mb-3">
          <InputGroup>
            <div slot="group">
              <span class="cms-typo text-14px text-menuItem mr-3">Sản phẩm được thêm tự động nếu thỏa mãn</span>
              <Radio
                  id="radio-category-condition-3"
                  name="radio-category-condition-2"
                  label-class="mr-3 mt-3 md:mt-0"
                  checked>
                <template slot="radio-text">Tất cả các điều kiện</template>
              </Radio>
              <Radio
                  id="radio-category-condition-4"
                  name="radio-category-condition-2"
                  label-class="mr-3 mt-3 md:mt-0">
                <template slot="radio-text">Một trong các điều kiện</template>
              </Radio>
            </div>
          </InputGroup>
        </div>
        <div class="table w-full">
          <div class="table-row w-full">
            <div class="table-cell">
              <div class="grid grid-cols-4 sm:grid-cols-1 gap-5">
                <div class="col-span-1">
                  <DropdownCondition label="Tên sản phẩm"/>
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
            <div class="w-auto text-center text-placeholderStyle hover:text-buttonAndURL cursor-pointer ml-3">
              <DeleteSVG class="w-icon inline -mt-1"/>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-6 gap-5 mt-5">
          <div class="col-span-6 md:col-span-2">
            <DropdownCondition/>
          </div>
          <div class="col-span-6 md:col-span-2 flex items-center">
            <ModalPicker
                class="w-full"
                :current-modal="treeModal[0]"
            >
              <h3 class="cms-typo text-14px text-buttonAndURL max-w-full truncate cursor-pointer">Xem danh sách sản phẩm thỏa mãn</h3>
            </ModalPicker>
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
import TableConditionAuto from "@/components/client/TableConditionAuto";
import ProductAdvanceSearch from "@/components/client/ProductAdvanceSearch";

import {
  DeleteSVG,
} from '@/components/SVGs';
import InputGroup from "@/components/client/InputGroup";
import ModalDsThoaManContent from "@/components/client/ModalDsThoaManContent";
import ModalPicker from "@/components/client/ModalPicker";

export default {
  components: {
    ModalPicker,
    InputGroup,
    Box,
    Radio,
    SelectOption,
    InputType,
    DeleteSVG,
    DropdownCondition,
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
      treeModal: [
        {
          id: 'categoryConditions-1',
          name: ModalDsThoaManContent,
          width: 720,
          shiftX: 0
        },
      ]
    };
  },
};
</script>

<style lang="scss"></style>
