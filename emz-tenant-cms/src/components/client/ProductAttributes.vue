<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          Phiên bản sản phẩm
          <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />
        </label>
        <a href="javascript:void(0)" @click="showForm = !showForm" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">{{ showForm ? 'Xóa tất cả thuộc tính' : 'Thêm thuộc tính' }}</a>
      </div>

      <div class="w-full">
        <p class="text-standardCMS text-placeholderStyle">Thêm thuộc tính giúp khách hàng phân biệt lựa chọn các phiên bản khác nhau như phân loại, màu sắc, kích cỡ, chất liệu…</p>
      </div>

      <div class="grid grid-cols-6 gap-5 mt-30px" :class="showForm ? 'h-auto' : 'hidden h-0'">

        <div class="col-span-6">
          <label class="cursor-pointer text-14px text-labelAndTitle">
            Tên thuộc tính
          </label>
        </div>

        <div class="col-span-2 sm:col-span-6">
          <InputType
            id="product-color"
            name="product-color"
            placeholder="Màu sắc"
            button="reset"
            input-class="cms-input__default">
          </InputType>
        </div>
        <div class="col-span-4 sm:col-span-6">
          <div class="w-full border px-2 min-h-10 flex items-center rounded">
            <TagInput v-model="tags1" class="red"></TagInput>
          </div>
        </div>

        <div class="col-span-2 sm:col-span-6">
          <InputType
            id="product-size"
            name="product-size"
            placeholder="Kích thước"
            button="reset"
            input-class="cms-input__default">
          </InputType>
        </div>
        <div class="col-span-4 sm:col-span-6">
          <div class="w-full border px-2 min-h-10 flex items-center rounded">
            <TagInput v-model="tags2" class="green"></TagInput>
          </div>
        </div>

        <div class="col-span-2 sm:col-span-6">
          <InputType
            id="product-material"
            name="product-material"
            placeholder="Chất liệu"
            button="reset"
            input-class="cms-input__default">
          </InputType>
        </div>
        <div class="col-span-4 sm:col-span-6">
          <div class="w-full border px-2 min-h-10 flex items-center rounded">
            <TagInput v-model="tags3" class="orange"></TagInput>
          </div>
        </div>

        <div class="col-span-2 sm:col-span-6">
          <Button button-class="cms-button cms-button-white">
            <template slot="name">
              + Thêm thuộc tính
            </template>
          </Button>
        </div>

      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';
import TagInput from '@/components/client/TagInput.vue';
import Button from '@/components/client/Button.vue';

import {
  InformationSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Box,
    InformationSVG,
    InputType,
    TagInput,
    Button,
  },
  data() {
    return {
      tags1: ['Xanh', 'Đỏ', 'Tím', 'Vàng'],
      tags2: ['Xanh', 'Đỏ', 'Tím', 'Vàng'],
      tags3: ['Xanh', 'Đỏ', 'Tím', 'Vàng'],
      showForm: false
    };
  },
};
</script>

<style lang="scss"></style>
