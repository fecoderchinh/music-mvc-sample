<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="grid grid-cols-1 gap-5">
        <div class="p-0">
          <div class="cms-label text-14px mb-4">
            <label for="input-promo-search" class="cursor-pointer text-14px text-labelAndTitle">
              Áp dụng
            </label>
          </div>

          <div class="flex sm:flex-col justify-radio">

            <div class="flex-1">
              <Radio id="radio-apply-1" name="radio">
                <template slot="radio-text">Tất cả đơn hàng</template>
              </Radio>
            </div>

            <div class="flex-1">
              <Radio id="radio-apply-2" name="radio" checked>
                <template slot="radio-text">Chọn sản phẩm</template>
              </Radio>
            </div>

            <div class="flex-1">
              <Radio id="radio-apply-3" name="radio">
                <template slot="radio-text">Chọn danh mục</template>
              </Radio>
            </div>

          </div>
        </div>

        <ProductAdvanceSearch2 class="no-b no-p"/>

      </div>

      <div class="grid grid-cols-2 sm:grid-cols-1 gap-5 mt-5">
        <div class="p-0">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              <CheckboxSVG class="w-4 h-4 fill-buttonAndURL inline mr-2"/>
              <span class="-mt-px">Điều kiện áp dụng</span>
            </label>
          </div>

          <div class="w-full">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

        <div class="p-0 relative">
          <div class="cms-label text-14px mb-4">
            <label for="input-promo-price" class="cursor-pointer text-14px text-labelAndTitle">
              Giá trị
            </label>
          </div>

          <div class="w-10/12">
            <InputType
              id="input-promo-price"
              name="input-promo-price"
              button="reset"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
          <CloseSVG class="w-4 fill-menuIcon mr-5 sm:mr-0 absolute bottom-0 right-0 mb-3"/>
        </div>

        <div class="p-0">
          <a href="#" class="font-lato font-medium text-14px text-buttonAndURL block">+ Thêm điều kiện</a>
        </div>

      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Radio from '@/components/client/Radio.vue';
import InputType from '@/components/client/InputType.vue';
import ProductAdvanceSearch2 from '@/components/client/ProductAdvanceSearch2.vue';
import SelectOption from '@/components/client/SelectOption.vue';

import {
  CheckboxSVG,
  CloseSVG,
} from '../SVGs.vue';

export default {
  components: {
    Box,
    Radio,
    InputType,
    ProductAdvanceSearch2,
    CheckboxSVG,
    SelectOption,
    CloseSVG,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Số lượng sản phẩm mỗi đơn hàng' },
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

<style lang="scss">
  .justify-radio {
    > div {
      &:first-child {
        & + div {
          @media (min-width: 768px) {
            @apply flex justify-center;
          }
        }
      }
      &:last-child {
        @media (min-width: 768px) {
          @apply flex justify-end;
        }
        > div {
          @apply mr-0;
        }
      }
    }
  }
</style>
