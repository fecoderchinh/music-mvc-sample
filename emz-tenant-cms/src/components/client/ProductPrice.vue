<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label for="check-gia" class="cursor-pointer text-14px text-labelAndTitle">
          Giá sản phẩm <span class="text-cmsRed">*</span>
        </label>
      </div>

      <div class="grid grid-cols-3 sm:grid-cols-1 gap-5">

        <div class="col-span-1">
          <div class="cms-label text-14px mb-4">
            <label for="gia-ban" class="cursor-pointer text-14px text-menuItem">
              Giá bán
            </label>
          </div>

          <div class="w-full">
            <InputType
              id="gia-ban"
              name="gia-ban"
              placeholder="123,446,000"
              button="reset"
              input-class="cms-input__with-icon"
              button-class="cms-typo text-14px text-placeholderStyle absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text">đ</template>
            </InputType>
          </div>
        </div>

        <div class="col-span-1">
          <div class="cms-label text-14px mb-4">
            <label for="gia-ao" class="inline-flex items-center cursor-pointer text-menuItem">
              Giá ảo
              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />
            </label>
          </div>

          <div class="w-full">
            <InputType
              id="gia-ao"
              name="gia-ao"
              placeholder="123,446,000"
              button="reset"
              input-class="cms-input__with-icon"
              button-class="cms-typo text-14px text-placeholderStyle absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text">đ</template>
            </InputType>
          </div>
        </div>

        <div class="col-span-1">
          <div class="cms-label text-14px mb-4">
            <label for="gia-nhap" class="cursor-pointer text-14px text-menuItem">
              Giá nhập
            </label>
          </div>

          <div class="w-full">
            <InputType
              id="gia-nhap"
              name="gia-nhap"
              placeholder="123,446,000"
              button="reset"
              input-class="cms-input__with-icon"
              button-class="cms-typo text-14px text-placeholderStyle absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text">đ</template>
            </InputType>
          </div>
        </div>

      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';

import {
  InformationSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Box,
    InputType,
    InformationSVG,
  },
};
</script>

<style lang="scss"></style>
