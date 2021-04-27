<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="grid grid-cols-6 gap-5">
        <div class="col-span-1 sm:col-span-2">
          <AvatarSVG class="w-20 h-20 mx-auto fill-buttonAndURL"/>
          <p class="text-center">
            <EllipseSVG class="w-4 h-4 mt-3 mx-auto fill-buttonAndURL"/>
          </p>
        </div>
        <div class="col-span-5 sm:col-span-5">
          <div class="grid grid-cols-5 gap-5">
            <div class="col-span-1 sm:col-span-5">
              <h2 class="cms-typo text-lg">Vô Ảnh Long</h2>
              <p class="cms-typo text-14px text-buttonAndURL mt-3">0902 492 111</p>
            </div>
            <div class="col-span-4 sm:col-span-5">
              <ListItemWithIcon class="sm:grid gap-3" :option-data="this.listItemData" />
            </div>
          </div>
          <p class="cms-typo text-14px text-menuItem mt-3">122 Thuong Dinh, Thanh Xuan, Ha Noi, Phường Cống Vị, Quận Ba Đình, Hà Nội, Vietnam</p>
          <CheckType
            main-class="ml-0 rounded-checkbox mt-3 no-mr"
            id="check-stock"
            checked>
            <template slot="text"><h3 class="ml-3">Cho phép tiếp tục đặt hàng khi hết hàng</h3></template>
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
            <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Nhập ghi chú cho khách hàng"></textarea>
          </div>

        </div>
        <div class="col-span-1 sm:col-span-2">

          <div class="flex flex-auto mb-4">
            <div class="cms-label flex flex-auto items-center text-14px text-labelAndTitle">
              <label for="add-tag" class="inline-flex items-center cursor-pointer">
                Tags
              </label>
            </div>
            <div class="flex relative whitespace-no-wrap">
              <ModalEditTag/>
            </div>
          </div>

          <div class="w-full">
            <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Ví dụ: VIP, thân thiết, hay giới thiệu…"></textarea>
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
import ListItemWithIcon from '@/components/client/ListItemWithIcon.vue';
import CheckType from '@/components/client/CheckType.vue';

import ModalEditTag from '@/components/client/ModalEditTag.vue';

import {
  AvatarSVG,
  EllipseSVG,
} from '../SVGs.vue';

export default {
  components: {
    Box,
    ListItemWithIcon,
    AvatarSVG,
    EllipseSVG,
    CheckType,
    ModalEditTag,
  },
  data() {
    return {
      listItemData: [
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Tặng Voucher',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Tặng giảm giá',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Gửi tin nhắn',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Xem giỏ hàng',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
