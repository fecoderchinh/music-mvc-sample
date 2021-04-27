<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="grid md:grid-cols-4 sm:grid-cols-1 sm:gap-3 justify-radio2">

        <div class="cms-label text-14px mb-4 col-span-4">
          <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
            Khách hàng áp dụng
          </label>
        </div>

        <div class="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-4">
          <Radio id="radio-khad-1" name="radio" main-class="no-mr">
            <template slot="radio-text">Tất cả khách hàng</template>
          </Radio>
        </div>

        <div class="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-4">
          <Radio id="radio-khad-2" name="radio" main-class="no-mr" checked>
            <template slot="radio-text">Khách chưa giao dịch</template>
          </Radio>
        </div>

        <div class="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-4">
          <Radio id="radio-khad-3" name="radio" main-class="no-mr">
            <template slot="radio-text">Khách hàng thân quen <InformationSVG class="-mt-px ml-1 inline w-3 fill-buttonAndURL"/></template>
          </Radio>
        </div>

        <div class="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-4">
          <Radio id="radio-khad-4" name="radio" main-class="no-mr">
            <template slot="radio-text">Tùy chọn khách hàng</template>
          </Radio>
        </div>

      </div>

      <div class="p-0 mt-5">

        <div class="inline-flex mr-5">
          <CheckType
            main-class="ml-0 no-mr"
            id="voucherradio2-check-1">
            <h3 class="ml-2" slot="text">
              Gửi tặng mã cho khách hàng <InformationSVG class="-mt-px ml-1 inline w-3 fill-buttonAndURL"/>
            </h3>
          </CheckType>
        </div>

        <div class="inline-flex">
          <CheckType
            main-class="ml-0 no-mr"
            id="voucherradio2-check-2">
            <h3 class="ml-2" slot="text">Mỗi khách hàng chỉ được dùng mã 1 lần</h3>
          </CheckType>
        </div>

      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Radio from '@/components/client/Radio.vue';
import CheckType from '@/components/client/CheckType.vue';

import {
  InformationSVG,
} from '../SVGs.vue';

export default {
  components: {
    Box,
    Radio,
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
