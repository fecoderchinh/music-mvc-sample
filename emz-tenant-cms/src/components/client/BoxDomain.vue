<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <h3 class="cms-typo text-lg">Quản lý tên miền</h3>
        <ul class="list-inside pl-3 mt-5">
          <li class="list-disc">
            <p class="cms-label text-14px mt-15px text-labelAndTitle inline">
              Thêm tên miền giúp cho Shop khẳng định thương hiệu riêng, khách hàng dễ nhớ hơn, qua đó nâng cao uy tín và bán hàng hiệu quả hơn. Điều này là rất rất quan trọng!
            </p>
          </li>
          <li class="list-disc">
            <p class="cms-label text-14px mt-15px text-labelAndTitle inline">
              Hãy đặt một tiền miền emz ngắn gọn và dễ nhớ hoặc mua tên miền riêng và cài đặt.
            </p>
          </li>
        </ul>
      </div>
      <div class="col-span-6 pb-5 border-b">
        <div class="cms-label text-14px mb-5 text-labelAndTitle">
          <label for="modal-nhapdomain" class="select-none cursor-pointer">Chọn tên miền sử dụng cho website của bạn:</label>
        </div>
        <div class="w-full relative">
          <Radio id="radio-status-1" name="radio" label-class="text-14px text-labelAndTitle" checked>
            <div slot="radio-text" class="cms-typo text-14px">
              <span class="text-menuItem mr-3">Tên miền EMZ:</span>
              <span class="text-labelAndTitle mr-3">Emishop.emz.vn</span>
              <ModalDomainChange/>
            </div>
          </Radio>
        </div>
        <div class="w-full relative mt-5">
          <Radio id="radio-status-2" name="radio" label-class="text-14px text-labelAndTitle">
            <div slot="radio-text" class="cms-typo text-14px">
              <span class="text-menuItem mr-3">Tên miền riêng:</span>
              <span class="text-labelAndTitle mr-3">Chưa cài đặt</span>
              <ModalDomainSetting/>
            </div>
          </Radio>
        </div>
      </div>
      <div class="col-span-6">
        <div class="w-full">
          <CheckType
            main-class="ml-0 no-mr"
            id="check-chuyenhuong" checked>
            <template slot="text">
              <h3 class="ml-2">
                Chuyển hương trang lỗi 404 về trang chủ
                <a href="#"><InformationSVG class="w-14px h-14px fill-buttonAndURL -mt-px ml-1 inline" /></a>
              </h3>
            </template>
          </CheckType>
        </div>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Radio from '@/components/client/Radio.vue';
import CheckType from '@/components/client/CheckType.vue';
import ModalDomainChange from '@/components/client/ModalDomainChange.vue';
import ModalDomainSetting from '@/components/client/ModalDomainSetting.vue';

import {
  InformationSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Box,
    Radio,
    InformationSVG,
    CheckType,
    ModalDomainChange,
    ModalDomainSetting,
  },
};
</script>

<style lang="scss"></style>
