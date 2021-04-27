<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="grid grid-cols-2 gap-5">

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-4">
            <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
              Số tối đa mỗi mã flash sale được bán
              <InformationSVG class="-mt-px ml-1 inline w-3 fill-buttonAndURL"/>
            </label>
          </div>

          <div class="w-full">
            <InputType
              main-class="search-bar"
              id="khoi-luong"
              name="khoi-luong"
              input-class="cms-input__default"
              placeholder="Không giới hạn"
              button="button"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-4">
            <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
              Tổng tối đa số lượng các sản phẩm flash sale được bán
              <InformationSVG class="-mt-px ml-1 inline w-3 fill-buttonAndURL"/>
            </label>
          </div>

          <div class="w-full">
            <InputType
              main-class="search-bar"
              id="khoi-luong"
              name="khoi-luong"
              input-class="cms-input__default"
              placeholder="Không giới hạn"
              button="button"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-2">

          <div class="inline-flex mr-5">
            <CheckType
              main-class="ml-0 no-mr"
              id="voucherradio2-check-1" checked>
              <h3 class="ml-2" slot="text">
                Mỗi  flash sale chỉ bán số lượng 1 trong mỗi đơn hàng
              </h3>
            </CheckType>
          </div>

          <div class="inline-flex">
            <CheckType
              main-class="ml-0 no-mr"
              id="voucherradio2-check-2" checked>
              <h3 class="ml-2" slot="text">Mỗi đơn hàng không quá 1 mã sản phẩm flash sale</h3>
            </CheckType>
          </div>

        </div>

      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';
import CheckType from '@/components/client/CheckType.vue';

import {
  InformationSVG,
} from '../SVGs.vue';

export default {
  components: {
    Box,
    InputType,
    InformationSVG,
    CheckType,
  },
};
</script>

<style lang="scss">
  .justify-radio2 {
    > div {
      &:last-child {
        @media (min-width: 1025px) {
          @apply flex justify-end;
        }
        > div {
          @apply mr-0;
        }
      }
    }
  }
</style>
