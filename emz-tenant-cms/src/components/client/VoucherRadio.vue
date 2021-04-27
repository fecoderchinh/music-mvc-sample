<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="grid grid-cols-1 gap-5">
        <div class="p-0">
          <div class="cms-label text-14px mb-4">
            <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
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
              <Radio id="radio-apply-2" name="radio">
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

        <div class="p-0">
          <CheckType
            main-class="ml-0 no-mr"
            id="check-stock">
            <h3 class="ml-2" slot="text">Điều kiện áp dụng</h3>
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

export default {
  components: {
    Box,
    Radio,
    CheckType,
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
