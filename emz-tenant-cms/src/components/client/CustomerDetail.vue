<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="grid grid-cols-5 gap-5">
        <div class="col-span-1 sm:col-span-5">
          <AvatarSVG class="w-20 h-20 mx-auto fill-buttonAndURL"/>
          <p class="text-center">
            <EllipseSVG class="w-4 h-4 mt-3 mx-auto fill-buttonAndURL"/>
          </p>
        </div>
        <div class="col-span-4 sm:col-span-5">
          <h2 class="cms-typo text-lg">Vô Ảnh Long</h2>
          <p class="cms-typo text-14px text-buttonAndURL mt-3">0902 492 111</p>
          <p class="cms-typo text-14px text-menuItem mt-3">122 Thuong Dinh, Thanh Xuan, Ha Noi, Phường Cống Vị, Quận Ba Đình, Hà Nội, Vietnam</p>
          <CheckType
            main-class="ml-0 rounded-checkbox mt-3 no-mr"
            id="check-stock"
            checked>
            <template slot="text">Cho phép tiếp tục đặt hàng khi hết hàng</template>
          </CheckType>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-5 mt-4">
        <div class="col-span-1 sm:col-span-2">

          <div class="cms-label text-14px mb-4">
            <label for="cus-note" class="cursor-pointer text-14px text-labelAndTitle">
              Ghi chú
            </label>
          </div>

          <div class="w-full">
            <InputType
              id="cus-note"
              name="cus-note"
              placeholder="Nhập ghi chú cho khách hàng"
              button="reset"
              input-class="pr-10"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>

        </div>
        <div class="col-span-1 sm:col-span-2">

          <div class="cms-label text-14px mb-4">
            <label for="cus-tags" class="cursor-pointer text-14px text-labelAndTitle">
              Tags
            </label>
            <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Xem tags</a>
          </div>

          <div class="w-full">
            <InputType
              id="cus-tags"
              name="cus-tags"
              placeholder="Ví dụ: VIP, thân thiết, hay giới thiệu…"
              button="reset"
              input-class="pr-10"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>

        </div>
      </div>

      <div class="grid grid-cols-3 gap-5 mt-10">
        <div class="col-span-1 sm:col-span-3 text-center">
          <h3 class="font-lato font-medium text-14px text-labelAndTitle">Đơn hàng mới nhất</h3>
          <h3 class="font-lato font-bold text-14px text-buttonAndURL">#1001</h3>
          <h3 class="font-lato font-medium text-14px text-menuItem">20/11/2020 12:45</h3>
        </div>
        <div class="col-span-1 sm:col-span-3 text-center">
          <h3 class="font-lato font-medium text-14px text-labelAndTitle">Tổng giao dịch</h3>
          <h3 class="font-lato font-bold text-14px text-labelAndTitle">12,358,000đ</h3>
          <h3 class="font-lato font-medium text-14px text-menuItem">8 đơn hàng</h3>
        </div>
        <div class="col-span-1 sm:col-span-3 text-center">
          <h3 class="font-lato font-medium text-14px text-labelAndTitle">Chi tiêu trung bình</h3>
          <h3 class="font-lato font-bold text-14px text-labelAndTitle">358,000đ</h3>
          <h3 class="font-lato font-medium text-14px text-menuItem">/đơn hàng</h3>
        </div>
      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import CheckType from '@/components/client/CheckType.vue';
import InputType from '@/components/client/InputType.vue';

import {
  AvatarSVG,
  EllipseSVG,
} from '../SVGs.vue';

export default {
  components: {
    Box,
    AvatarSVG,
    EllipseSVG,
    CheckType,
    InputType,
  },
};
</script>

<style lang="scss"></style>
