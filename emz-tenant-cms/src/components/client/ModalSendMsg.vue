<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label class="select-none cursor-pointer">Chọn khách hàng</label>
        </div>
        <div class="w-full">
          <Select2 :optionData="myOptions"/>
        </div>
      </div>
      <div class="col-span-6">
        <div class="grid grid-cols-4 gap-5">
          <div class="col-span-1 sm:col-span-4">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label class="select-none cursor-pointer">Chọn ảnh đại diện</label>
            </div>
            <div class="w-full avatarPicker">
              <div class="absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 text-menuItem">
                <CloudUploadSVG class="w-8 mx-auto"/>
                <p class="text-center cms-typo text-14px">
                  Tải ảnh lên
                </p>
              </div>
            </div>
            <div class="w-full text-buttonAndURL text-14px">
              <ModalGallery />
            </div>
          </div>
          <div class="col-span-3 sm:col-span-4">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label class="select-none cursor-pointer">Nội dung lời nhắn</label>
            </div>
            <div class="w-full">
              <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Nhập nội dung lời nhắn"></textarea>
            </div>
            <div class="cms-label text-14px mb-3 text-labelAndTitle mt-5">
              <label class="select-none cursor-pointer">Link điều hướng nếu có</label>
            </div>
            <div class="w-full">
              <InputType
                placeholder="Ví dụ: Khuyến mãi chào đón Mùa Thu Vàng"
                button="reset"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Select2 from '@/components/client/Select2.vue';
import InputType from '@/components/client/InputType.vue';
import ModalGallery from '@/components/client/ModalGallery.vue';

import {
  CloudUploadSVG
} from '@/components/SVGs.vue';

export default {
  components: {
    Box,
    Select2,
    InputType,
    ModalGallery,
    CloudUploadSVG
  },
  data() {
    return {
      myOptions: [
        'Tất cả khách hàng',
        'Khách đã mua hàng',
        'Khách có hàng trong giỏ hàng',
        'Khách chưa mua hàng',
        'Khách hàng thân thiết ',
      ],
    };
  },
};
</script>

<style lang="scss"></style>
